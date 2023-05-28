import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const CadatroUsuario: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
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
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Por favor insira a senha!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Cadastrar
      </Button>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Entrar
      </Button>
    </Form.Item>
  </Form>
);

export default CadatroUsuario;
