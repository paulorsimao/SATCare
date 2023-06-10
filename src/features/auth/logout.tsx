import { Navigate } from "react-router-dom";
import { useAuthContext } from "./providers/auth-context";

export function Logout() {
    const { setAuthContext } = useAuthContext();

    setAuthContext(undefined)

    return (
        <Navigate to='/' />
    )
}