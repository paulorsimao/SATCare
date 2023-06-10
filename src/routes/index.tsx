import { BrowserRouter, Routes } from "react-router-dom";
import { Cargo, useAuthContext } from "../features/auth/providers/auth-context";
import { AuthRoutes } from "./auth-routes";
import AdminRoutes from "./admin-routes";
import ClienteRoutes from "./cliente-routes";

export default function Router() {
    const { authContext } = useAuthContext();
    const estaLogado = !!authContext
    const administrador = authContext?.cargo === Cargo.Administrador

    const getRoutes = () => {
        if (!estaLogado) {
            return AuthRoutes()
        }

        if (administrador) {
            return AdminRoutes()
        }

        return ClienteRoutes()
    }

    return (
        <BrowserRouter>
            <Routes>
                {getRoutes()}
            </Routes>
        </BrowserRouter>
    )
}