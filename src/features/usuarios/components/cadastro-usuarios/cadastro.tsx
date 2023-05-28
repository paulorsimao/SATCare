import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import './styled.css'

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const cadastro: React.FC = () => (
  <div id= 'blocoCadastro'>
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
        label="Senha"
        name="senha"
        rules={[{ required: true, message: 'Por favor insira a senha!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Row justify="center">
          <Col>
            <Button id="btnCadastro" htmlType="submit">
              CADASTRAR
            </Button>
          </Col>
          <Col>
            <Button id="btnEntrar" htmlType="submit">
              ENTRAR
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  </div>
);

export default cadastro;
