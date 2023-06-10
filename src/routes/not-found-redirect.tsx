import { notification } from "antd";
import { Navigate } from "react-router-dom";

interface Props {
    to: string
}

export default function NotFoundRedirect({ to }: Props) {
    notification.error({ message: 'Página não encontrada'})
    return (<Navigate to={to} replace />)
}