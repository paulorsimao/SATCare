import { useState } from "react";
import { Layout, notification } from "antd";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import './admin-layout.css'
import { useAuthContext } from "../../features/auth/providers/auth-context";

interface LayoutProps {
    menuItens: Array<MenuOptions>
}

export interface MenuOptions {
    key: string;
    label: string;
    icon: JSX.Element
}

function AdminLayout({ menuItens }: LayoutProps) {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false)
    const { authContext } = useAuthContext();

    if (!authContext) {
        notification.error({ message: 'É preciso estar logado para acessar esta área' })
        navigate('/login')
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme={'light'} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} breakpoint="lg">
                <div className="sider-logo">
                    <img
                        src="/logo.png"
                        alt="Logo SAtCare"
                    />
                </div>
                <Menu mode="inline" onSelect={({ key }) => navigate(key)} items={menuItens} />
            </Sider>
            <Layout>
                <Content style={{ margin: '16px' }}>
                    <Outlet />
                </Content>
                <Footer id='footerPrincipal' style={{ textAlign: 'center', }}>SATCare ©2023</Footer>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;
