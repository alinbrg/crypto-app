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
						<Route path="/crypto-app/" element={<Homepage />} />
						<Route
							path="/crypto-app/cryptocurrencies"
							element={<Cryptocurrencies />}
						/>
						<Route
							path="/crypto-app/crypto/:coinId"
							element={<CryptoDetails />}
						/>
						<Route path="/crypto-app/news" element={<News />} />
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
					<Link to="/crypto-app/">Home</Link>
					<Link to="/crypto-app/exchanges">Exchanges</Link>
					<Link to="/crypto-app/news">News</Link>
				</Space>
			</footer>
		</div>
	);
}
