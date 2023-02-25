import { Button, Menu, Typography, Avatar } from "antd";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import icon from "../images/logo192.png";

const menuItems = [
	{
		key: "home",
		icon: <HomeOutlined />,
		label: <Link to="/">Home</Link>,
	},
	{
		key: "Cryptocurrencies",
		icon: <FundOutlined />,
		label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
	},
	{
		key: "Exchanges",
		icon: <MoneyCollectOutlined />,
		label: <Link to="/exchanges">Exchanges</Link>,
	},
	{
		key: "News",
		icon: <BulbOutlined />,
		label: <Link to="/news">News</Link>,
	},
];

export default function Navbar() {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/">Crypto App</Link>
				</Typography.Title>
				{/* <Button className="menu-control-container"></Button> */}
			</div>
			<nav>
				<Menu items={menuItems} theme="dark" />
			</nav>
		</div>
	);
}
