import { RouteObject, createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/admin-layout/admin-layout";
import ListaUsuarios from "../features/usuarios/components/cadastro-usuarios/lista-usuarios";
import CadatroUsuario from "../features/usuarios/components/cadastro-usuarios/cadastro";
import Calendario from "../features/usuarios/components/calendar/calendario";
import NovaConsulta from "../features/usuarios/components/cadastro-consulta/nova-consulta";
>>>>>>> 70cb78e9a3dd2266ff48e8af84c3a132aeb1230c

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
            path: 'consulta',
            element: <NovaConsulta/>
        },
        {
            path: 'calendario',
            element: <Calendario/>
        },
    ]
}

const router = createBrowserRouter([
    adminRoutes
])

export default router