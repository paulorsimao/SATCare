import React from "react";
import {
	CalendarOutlined,
	HeartOutlined,
	HomeOutlined,
	LoginOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Col, MenuProps, Row } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import CadastroUsuarios from "../../features/usuarios/components/cadastro-usuarios/lista-usuarios";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

// trocar o titulo por um componente
function withAdminLayout(titulo: string) {
	const navigate = useNavigate();

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<Row>
				<Menu
					onClick={({ key }) => navigate('/' + key)}
					style={{ width: 256 }}
					mode="inline"
					items={[
						{ key: 'home', label: 'Home', icon: <HomeOutlined /> },
						{ key: 'usuarios', label: 'Usuarios', icon: <UserOutlined /> },
						{ key: 'profissionais', label: 'Profissionais', icon: <HeartOutlined /> },
						{ key: 'cadastro', label: 'Cadastro', icon: <LoginOutlined />},
						{ key: 'calendario', label: 'Calendario', icon: <CalendarOutlined /> },
					]}
				/>
			</Row>


			<Col style={{ width: '100%' }}>
				<p style={{ textAlign: 'center' }}>{titulo}</p>
				<CadastroUsuarios />

			</Col>
		</div>

	);
};

export default withAdminLayout;
