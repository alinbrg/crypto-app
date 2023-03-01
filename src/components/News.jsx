import { Select, Typography, Row, Col, Card } from "antd";
import moment from "moment";
import { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Text, Title } = Typography;
const { Option } = Select;

export default function News({ simplified }) {
	const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

	const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 20,
	});

	const { data: cryptosList } = useGetCryptosQuery(100);

	// console.log(cryptoNews, isFetching);
	if (isFetching) return "Loading";

	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select
						showSearch
						className="search-news"
						placeholder="select a crypto"
						optionFilterProp="children"
						onChange={(value) => setNewsCategory(value)}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="Cryptocurrency">Cryptocurrency</Option>
						{cryptosList?.data?.coins.map((coin) => (
							<Option value={coin.name} key={coin.name}>
								{coin.name}
							</Option>
						))}
					</Select>
				</Col>
			)}
			{cryptoNews.articles.map((news, i) => (
				<Col xs={24} sm={12} lg={8} key={i}>
					<Card hoverable className="news-card">
						<a href={news.url} target="_blank" rel="noreferrer">
							<div className="news-image-container">
								<Title className="news-title" level={4}>
									{news.title}
								</Title>
								{news.urlToImage && (
									<img
										src={news.urlToImage}
										alt={news.title}
										className="news-img"
									/>
								)}
							</div>
							<p>
								{news.description.length > 100
									? `${news.description.substring(0, 100)}...`
									: news.description}
							</p>
							<div className="provider-container">
								<div>
									<Text className="provider-name">{news.source?.name}</Text>
								</div>

								<div>
									<Text>
										{moment(news.publishedAt).startOf("ss").fromNow()}
									</Text>
								</div>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
}
