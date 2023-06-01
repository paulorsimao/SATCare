import { RouteObject, createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/admin-layout/admin-layout";
import ListaUsuarios from "../features/usuarios/components/cadastro-usuarios/lista-usuarios";
import CadatroUsuario from "../features/usuarios/components/cadastro-usuarios/cadastro";
import Calendario from "../features/usuarios/components/calendar/calendario";
import Login from "../features/usuarios/components/login/login";

const adminRoutes: RouteObject = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: 'home',
            element: <h1>Home page</h1>
        },
        {
            path: 'usuarios',
            element: <ListaUsuarios/>
        },
        {
            path: 'cadastro',
            element: <CadatroUsuario/>
        },
        {
            path: 'calendario',
            element: <Calendario/>
        },
        {
            path: 'Login',
            element: <Login/>
        },
    ]
}

const router = createBrowserRouter([
    adminRoutes
])

export default router