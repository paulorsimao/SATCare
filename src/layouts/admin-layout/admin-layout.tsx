import { useState } from "react";
import {
	CalendarOutlined,
	HeartOutlined,
	HomeOutlined,
	LoginOutlined,
	UserOutlined,
	PlusCircleOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import './admin-layout.css'

function AdminLayout() {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(false)

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider theme={'light'} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} breakpoint="lg">
				<div className="sider-logo">
					<img
						src="/logo.png"
						alt="Logo SAtCare"
					/>
				</div>
				<Menu mode="inline" onSelect={({ key }) => navigate(key)} items={[
					{ key: 'home', label: 'Home', icon: <HomeOutlined /> },
					{ key: 'usuarios', label: 'Usuários', icon: <UserOutlined /> },
					{ key: 'profissionais', label: 'Profissionais', icon: <HeartOutlined /> },
					{ key: 'cadastro', label: 'Cadastro', icon: <LoginOutlined /> },
					{ key: 'consulta', label: 'Consulta', icon: <PlusCircleOutlined /> },
					{ key: 'calendario', label: 'Calendário', icon: <CalendarOutlined /> },
				]} />
			</Sider>
			<Layout>
				<Content style={{ margin: '16px' }}>
					<Outlet />
				</Content>
				<Footer id='footerPrincipal' style={{ textAlign: 'center', }}>SATCare ©2023</Footer>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;
