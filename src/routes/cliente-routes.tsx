import { Route } from "react-router-dom";
import { Logout } from "../features/auth/logout";
import AdminLayout from "../layouts/admin-layout/admin-layout";
import { HomeOutlined, LogoutOutlined, PlusCircleOutlined } from "@ant-design/icons";
import NotFoundRedirect from "./not-found-redirect";
import NovaConsulta from "../features/consulta/components/nova-consulta/nova-consulta";

const menuItens = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'consulta', label: 'Consulta', icon: <PlusCircleOutlined /> },
    { key: 'logout', label: 'logout', icon: <LogoutOutlined /> },
]

export default function ClienteRoutes() {
    return (
        <Route element={<AdminLayout menuItens={menuItens} />}>
            <Route path='/home' element={<h1>Área do cliente</h1>} />
            <Route path='/consulta' element={<NovaConsulta />} />
            <Route path='/logout' element={<Logout></Logout>} />
            <Route path="*" element={<NotFoundRedirect to="/home" />} />
        </Route>
    )
}