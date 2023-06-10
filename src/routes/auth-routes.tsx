import { Route, Navigate } from "react-router-dom";
import Login from "../features/auth/login";
import AuthLayout from "../layouts/auth-layout/auth-layout";
import CadastroUsuario from "../features/usuarios/components/cadastro-usuarios/cadastro";

export function AuthRoutes() {
    return (
        <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login></Login>} />
            <Route path='/cadastro' element={<CadastroUsuario />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
    )
}