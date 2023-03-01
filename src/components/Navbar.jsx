import { Button, Menu, Typography, Avatar } from "antd";
import {
	HomeOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icon from "../images/logo192.png";
import { useEffect, useState } from "react";

const menuItems = [
	{
		key: "home",
		icon: <HomeOutlined />,
		label: <Link to="/crypto-app/">Home</Link>,
	},
	{
		key: "Cryptocurrencies",
		icon: <FundOutlined />,
		label: <Link to="/crypto-app/cryptocurrencies">Cryptocurrencies</Link>,
	},

	{
		key: "News",
		icon: <BulbOutlined />,
		label: <Link to="/crypto-app/news">News</Link>,
	},
];

export default function Navbar() {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (screenSize < 1024) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/crypto-app/">Crypto App</Link>
				</Typography.Title>
				<Button
					className="menu-control-container"
					onClick={() => setActiveMenu(!activeMenu)}
				>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<nav>
					<Menu items={menuItems} theme="dark" />
				</nav>
			)}
		</div>
	);
}
