import React from 'react';
import { Button, Form, Row, Col, Select, DatePicker } from 'antd';
import './style.css'

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const NovaConsulta: React.FC = () => (
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
        label="Tipo de Serviço"
        name="servico"
        rules={[{ required: true, message: 'Selecione o tipo de serviço!' }]}
      >
        <Select>
            <Select.Option value="dentista">Dentista</Select.Option>
            <Select.Option value="psicologo">Psicólogo</Select.Option>           
        </Select>
      </Form.Item>

      <Form.Item
        label="Profissional"
        name="profissionall"
        rules={[{ required: true, message: 'Selecione o profissional!' }]}
      >
        <Select>
            <Select.Option value="profissional1">profissional1</Select.Option>
            <Select.Option value="profissinal2">profissional2</Select.Option>
            <Select.Option value="profissional3">profissional3</Select.Option>           
        </Select>
      </Form.Item>

      <Form.Item
        label="Dia"
        name="dia"
        rules={[{ required: true, message: 'Escolha o dia da consulta!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Horário"
        name="horario"
        rules={[{ required: true, message: 'Escolha o horário da consulta!' }]}
      >
        <Select>
            <Select.Option value="horario1">08h</Select.Option>
            <Select.Option value="horario2">09h</Select.Option>
            <Select.Option value="horario3">10h</Select.Option>
            <Select.Option value="horario4">11h</Select.Option>
            <Select.Option value="horario5">13h</Select.Option>
            <Select.Option value="horario6">14h</Select.Option>
            <Select.Option value="horario7">15h</Select.Option>
            <Select.Option value="horario8">16h</Select.Option>
            <Select.Option value="horario9">17h</Select.Option>
            <Select.Option value="horario10">18h</Select.Option>         
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Row justify="center">
          <Col>
            <Button id="btnAgendar" htmlType="submit">
              AGENDAR
            </Button>
          </Col>
          
        </Row>
      </Form.Item>
    </Form>
  </div>
);

export default NovaConsulta;
