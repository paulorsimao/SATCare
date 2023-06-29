import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import { Cargo, useAuthContext } from "./providers/auth-context";
import { Link, useNavigate } from "react-router-dom";
const { Text } = Typography

interface LoginForm {
    email: string;
    senha: string;
}

export default function Login() {
    const [loginIncorreto, setLoginIncorreto] = useState<boolean>(false)
    const { setAuthContext } = useAuthContext()
    const navigate = useNavigate()

    const EMAIL_USUARIO = 'usuario@email.com'
    const SENHA_USUARIO = '123456'

    const EMAIL_ADMIN = 'admin@email.com'
    const SENHA_ADMIN = 'admin'

    const onSubmit = ({ email, senha }: LoginForm) => {
        if (EMAIL_USUARIO === email && SENHA_USUARIO === senha) {
            setAuthContext({ usuario: 'João da Silva', cargo: Cargo.Cliente })
            navigate('/home')
        }

        if (EMAIL_ADMIN === email && SENHA_ADMIN === senha) {
            setAuthContext({ usuario: 'Silva John', cargo: Cargo.Administrador })
            navigate('/home')
        }

        setLoginIncorreto(true)
    }

    return (
        <Form layout="vertical" onFinish={onSubmit}>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { required: true, type: "email", message: "Insira um email válido" }
                ]}
            >
                <Input placeholder="Digite seu email"/>
            </Form.Item>

            <Form.Item
                name="senha"
                label="Senha"
                rules={[{ required: true, message: "Insinha sua senha" }]}
            >
                <Input.Password placeholder="Digite sua senha" />
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit" size="large">Entrar</Button>
                {loginIncorreto && <Text type='danger'>Usuário ou senha incorretos <br /></Text>}
                <Link to={'/cadastro'}>Não possui conta? Cadastre-se</Link>
            </Form.Item>
        </Form>
    )
}