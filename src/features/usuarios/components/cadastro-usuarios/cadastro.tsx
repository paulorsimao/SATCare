import React from 'react';
import { Button, Form, Input } from 'antd';
import './styled.css'
import { Link } from 'react-router-dom';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const CadastroUsuario: React.FC = () => (
    <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: 'Por favor insira o nome!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Por favor insira o e-mail!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Telefone"
            name="telefone"
            rules={[{ required: true, message: 'Por favor insira o telefone!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Senha"
            name="senha"
            rules={[{ required: true, message: 'Por favor insira a senha!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                    Cadastra-se
                </Button>
                <Link to={'/login'}>Já possui conta? Faça login</Link>
        </Form.Item>
    </Form>
);

export default CadastroUsuario;
