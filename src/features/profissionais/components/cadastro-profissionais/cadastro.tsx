import { Form, Input, Select } from 'antd';
import './styled.css'
import { especialidadeOptions, useProfissionalContext } from '../../providers/profissionais-provider';
import { useEffect } from 'react';
import { useForm } from 'antd/es/form/Form';

type Props = {
    id?: number,
    onFinish?: (cadastrou: boolean) => void
}

export default function CadastroProfissionais({ onFinish, id }: Props) {
    const profissionalContext = useProfissionalContext();
    const [form] = useForm()

    const onSubmit = (values: any) => {
        if (id) {
            //atribui o id nos valores
            values = { id, ...values}
            profissionalContext.edit(id, values)
        } else {
            profissionalContext.create(values)
        }

        onFinish && onFinish(true)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if (id) {
            loadForm(profissionalContext.getOne(id))
        }
    }, [id])

    const loadForm = (dados: any) => {
        form.setFieldsValue(dados)
    }

    return (
        <Form
            form={form}
            id="form-profissional"
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
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
                label="Sobrenome"
                name="sobrenome"
                rules={[{ required: true, message: 'Por favor insira o sobrenome!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Especialidade"
                name="especialidade"
                rules={[{ required: true, message: 'Por favor insira a especialidade!' }]}
            >
                <Select placeholder="Selecione" options={especialidadeOptions} />
            </Form.Item>
        </Form>
    )
}