import { Switch, Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
	Navbar,
	Homepage,
	Exchanges,
	CryptoDetails,
	Cryptocurencies,
	News,
} from "./components";

import "./App.css";

export default function App() {
	return (
		<div className="app">
			<nav className="navbar">
				<Navbar />
			</nav>
			<main className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route path="/" element={<Homepage />} />

							<Route path="/exchanges" element={<Exchanges />} />

							<Route path="/cryptocurencies" element={<Cryptocurencies />} />

							<Route path="/crypto/:coinId" element={<CryptoDetails />} />

							<Route path="/news" element={<News />} />
						</Routes>
					</div>
				</Layout>
			</main>
			<div className="footer"></div>
		</div>
	);
}
