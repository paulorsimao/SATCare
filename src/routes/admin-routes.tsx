import { Route } from "react-router-dom";
import AdminLayout from "../layouts/admin-layout/admin-layout";
import ListaUsuarios from "../features/usuarios/components/cadastro-usuarios/lista-usuarios";
import Calendario from "../features/usuarios/components/calendar/calendario";
import { CalendarOutlined, HeartOutlined, HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import NotFoundRedirect from "./not-found-redirect";
import { Logout } from "../features/auth/logout";
import ListaProfissionais from "../features/profissionais/components/lista-profissionais/lista-profissionais";

const menuItens = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'usuarios', label: 'Usuários', icon: <UserOutlined /> },
    { key: 'profissionais', label: 'Profissionais', icon: <HeartOutlined /> },
    { key: 'calendario', label: 'Calendário', icon: <CalendarOutlined /> },
    { key: 'logout', label: 'logout', icon: <LogoutOutlined /> },
]

export default function AdminRoutes() {
    return (
        <Route element={<AdminLayout menuItens={menuItens} />}>
            <Route path='home' element={<h1>Home page</h1>} />
            <Route path='usuarios' element={<ListaUsuarios />} />
            {/* <Route path='cadastro' element={<CadastroUsuario />} /> */}
            {/* <Route path='consulta' element={<NovaConsulta />} /> */}
            <Route path='profissionais' element={<ListaProfissionais />} />
            <Route path='calendario' element={<Calendario />} />
            <Route path='logout' element={<Logout />} />
            <Route path="*" element={<NotFoundRedirect to="/home" />} />
        </Route>
    )
}
