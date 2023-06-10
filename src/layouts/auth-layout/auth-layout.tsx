import { Col, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Content, Footer } from "antd/es/layout/layout";

function AuthLayout() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const alignCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const colStyle = { backgroundColor: colorBgContainer, padding: '36px', borderRadius: '2%' }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={alignCenter}>
                {/* @ts-ignore - ignore porque o align funciona mas fica acusando erro */}
                <Col span={8} lg={8} xs={12} sm={12} align="middle" style={colStyle}>
                    <img
                        style={{ width: '15vh', marginBottom: '24px' }}
                        src="/logo.png"
                        alt="Logo SAtCare"
                    />
                    <Outlet />
                </Col>
            </Content>
            <Footer id='footerPrincipal' style={{ textAlign: 'center', }}>SATCare ©2023</Footer>
        </Layout>
    );
}

export default AuthLayout;
