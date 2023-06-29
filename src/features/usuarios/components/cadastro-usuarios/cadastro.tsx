import React from 'react';
import { Button, Form, Input } from 'antd';
import './styled.css'
import { Link } from 'react-router-dom';
import InputTelefone from '../../../../components/input-telefone/input-telefone';

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
            <Input placeholder='Digite seu nome'/>
        </Form.Item>

        <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, type: "email", message: 'Por favor insira um e-mail válido!' }]}
        >
            <Input placeholder='Digite seu email'/>
        </Form.Item>

        <Form.Item
            label="Telefone"
            name="telefone"
            rules={[{ required: true, message: 'Por favor insira o telefone!' }]}
        >
            <InputTelefone placeholder="Digite seu telefone" />
        </Form.Item>

        <Form.Item
            label="Senha"
            name="senha"
            rules={[{ required: true, message: 'Por favor insira a senha!' }]}
        >
            <Input.Password placeholder='Digite sua senha' />
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
