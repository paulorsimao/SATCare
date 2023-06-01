import { Button, Form, Input, notification, message, Upload } from "antd";
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import './style.css'

const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} Foto enviada com sucesso`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} não foi possivel enviar a foto.`);
      }
    },
  };
  
  const addimage: React.FC = () => (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}> Enviar Imagem</Button>
    </Upload>
  );
  


const onFinish = (values: any) => {
   console.log('Success:', values);

   notification.open({
       message: 'Serviço cadastrado com sucesso!',
       description: `${values.nome} foi cadastrado`
   })
}

function Cadastrofuncionario() {
   return (

    <div id = "tudo" >
       <Form
           
           name="basic"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           initialValues={{ remember: true }}
           onFinish={onFinish}
           autoComplete="off"
      
       >
           <Form.Item
               id="nome"
               label="Nome"
               rules={[{ required: true, message: 'Informe um nome' }]}
           >
               <Input />
           </Form.Item>

           <Form.Item
               label="Descrição"
               id="descricao"
               rules={[{ required: true, message: 'Informe seu E-mail' }]}
           >
               <Input />
           </Form.Item>

           <Form.Item
               label="Adiciona imagem"
               id="addimagem"
                rules={[{ required: true, message: 'Anexe uma Imagem' }]}>
                {addimage(0)}
            </Form.Item>

           <div id= "tipo"> 
            <Form.Item>
              <label  className="btn medico" >
                <input type="radio" /> Psicólogo
                <input type="radio" /> Odonto
              </label>
            </Form.Item>
            </div>

           <div id="botoes"> 
           <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button id="btnCadastro" type="primary" htmlType="submit"> Cadastrar</Button>
               <Button id="btnEntrar" type="primary" > Ir para tela de Login </Button>
           </Form.Item>
           </div>
           
          
       </Form>
       </div>
   )
}

export default Cadastrofuncionario
