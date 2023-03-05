import { Route, Link, Routes } from "react-router-dom";
import { Typography, Space } from "antd";
import {
	Navbar,
	Homepage,
	CryptoDetails,
	Cryptocurrencies,
	News,
} from "./components";

import "./App.css";

export default function App() {
	return (
		<div className="app">
			<header className="navbar">
				<Navbar />
			</header>
			<main className="main">
				<div className="routes">
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
						<Route path="/crypto/:coinId" element={<CryptoDetails />} />
						<Route path="/news" element={<News />} />
					</Routes>
				</div>
			</main>
			<footer className="footer">
				<Typography.Title
					level={5}
					style={{ color: "white", textAlign: "center" }}
				>
					Crypto App <br />
					All rights reserved
				</Typography.Title>
				<Space>
					<Link to="/">Home</Link>
					<Link to="/exchanges">Exchanges</Link>
					<Link to="/news">News</Link>
				</Space>
			</footer>
		</div>
	);
}
