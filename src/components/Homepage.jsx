import millify from "millify";
import { Layout, Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";
const { Title } = Typography;

export default function Homepage() {
	const { data, isFetching } = useGetCryptosQuery(10);

	const globalStats = data?.data?.stats;

	if (isFetching) return <Loader />;

	return (
		<>
			<Layout>
				<Title level={2} className="heading">
					Global Crypto Stats
				</Title>
				<Row>
					<Col xs={24} sm={12} lg={6}>
						<Statistic
							title="Total Cryptocurrencies"
							value={globalStats.total}
						/>
					</Col>
					<Col xs={24} sm={12} lg={6}>
						<Statistic
							title="Total Exchanges"
							value={millify(globalStats.totalExchanges)}
						/>
					</Col>
					<Col xs={24} sm={12} lg={6}>
						<Statistic
							title="Total Market Cap"
							value={millify(globalStats.totalMarketCap)}
						/>
					</Col>
					<Col xs={24} sm={12} lg={6}>
						<Statistic
							title="Total 24h Volume"
							value={millify(globalStats.total24hVolume)}
						/>
					</Col>
					<Col xs={24} sm={12} lg={6}>
						<Statistic
							title="Total Markets"
							value={millify(globalStats.totalMarkets)}
						/>
					</Col>
				</Row>
			</Layout>
			<Layout>
				<div className="home-heading-container">
					<Title level={2} className="home-title">
						Top 10 Cryptocurrencies in the world
					</Title>
					<Title level={3} className="show-more">
						<Link to="/cryptocurrencies">Show More</Link>
					</Title>
				</div>
				<Cryptocurrencies simplified />
			</Layout>
			<Layout>
				<div className="home-heading-container">
					<Title level={2} className="home-title">
						Latest Crypto News
					</Title>
					<Title level={3} className="show-more">
						<Link to="/news">Show More</Link>
					</Title>
				</div>
				<News simplified />
			</Layout>
		</>
	);
}
