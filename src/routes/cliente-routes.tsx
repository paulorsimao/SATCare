import { Route } from "react-router-dom";
import { Logout } from "../features/auth/logout";
import AdminLayout from "../layouts/admin-layout/admin-layout";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import NotFoundRedirect from "./not-found-redirect";

const menuItens = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'logout', label: 'logout', icon: <LogoutOutlined /> },
]

export default function ClienteRoutes() {
    return (
        <Route element={<AdminLayout menuItens={menuItens} />}>
            <Route path='/home' element={<h1>Área do cliente</h1>} />
            <Route path='/logout' element={<Logout></Logout>} />
            <Route path="*" element={<NotFoundRedirect to="/home" />} />
        </Route>
    )
}