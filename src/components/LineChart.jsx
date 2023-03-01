import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
	Title,
} from "chart.js";

const { Title: TextTitle } = Typography;
export default function LineChart({ coinHistory, currentPrice, coinName }) {
	const coinPrice = [],
		coinTimeStamp = [],
		length = coinHistory?.data?.history?.length;

	for (let i = 0; i < length; i++) {
		coinPrice.push(coinHistory.data.history[i].price);
		coinTimeStamp.push(
			new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString(
				"de-DE"
			)
		);
	}

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const data = {
		labels: coinTimeStamp,
		datasets: [
			{
				label: "Price in USD",
				data: coinPrice,
				backgroundColor: "#0071bd",
				borderColor: "#0071bd",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
		},
		x: {
			type: "time",
			time: {
				unit: "day",
				displayFormats: {
					day: "DD MMM YYYY", // or whatever you want to display your date
				},
			},
		},
	};

	return (
		<>
			<Row className="chart-header">
				<TextTitle level={2} className="chart-title">
					{coinName} Price Chart
				</TextTitle>
				<Col className="price-container">
					<TextTitle level={5} className="price-change">
						Change: {coinHistory?.data?.change}%
					</TextTitle>
					<TextTitle level={5} className="current-price">
						Current {coinName} Price: ${currentPrice}
					</TextTitle>
				</Col>
			</Row>
			<Line data={data} options={options} />
		</>
	);
}
