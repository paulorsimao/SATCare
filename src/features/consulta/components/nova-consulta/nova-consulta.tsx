import { Button, Form, Row, Col, Select, DatePicker, TimePicker } from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import DefaultPageContainer from '../../../../components/page-container.tsx/page-container';
import './style.css'
import dayjs from 'dayjs';
//@ts-ignore
import dayjsBusinessDays from 'dayjs-business-days'
import { ProfisisonalProvider, especialidadeOptions, useProfissionalContext } from '../../../profissionais/providers/profissionais-provider';

dayjs.extend(dayjsBusinessDays);

const onFinish = (values: any) => {
    console.log('Success:', values);
};

function Cadastro() {
    const profissionalContext = useProfissionalContext()
    const profissionaisOptions = profissionalContext.get({ page: 1, pageSize: 10 }).data

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const getDisabledDates = (dayjs: any) => {
        return !dayjs.isBusinessDay();
    }

    const getDisabledHours = () => {
        return [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23, 24]
    }
    
    return (
        <>
            <PageHeader title="Agendar Consulta" />
            <DefaultPageContainer>
                <Row justify="center">
                    <Col span={8} lg={8} sm={16} xs={20}>
                        <Form
                            name="basic"
                            layout="vertical"
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
                                <Select placeholder="Selecione" options={especialidadeOptions} />
                            </Form.Item>

                            <Form.Item
                                label="Profissional"
                                name="profissionall"
                                rules={[{ required: true, message: 'Selecione o profissional!' }]}
                            >
                                <Select
                                    placeholder="Selecione"
                                    fieldNames={{ label: 'nome', value: 'id', }}
                                    options={profissionaisOptions} />
                            </Form.Item>

                            <Form.Item
                                label="Dia"
                                name="dia"
                                rules={[{ required: true, message: 'Escolha o dia da consulta!' }]}
                            >
                                <DatePicker style={{ width: '100%' }} placeholder='Selecione o dia da consulta' disabledDate={getDisabledDates} />
                            </Form.Item>

                            <Form.Item
                                label="Horário"
                                name="horario"
                                rules={[{ required: true, message: 'Escolha o horário da consulta!' }]}
                            >
                                <TimePicker style={{ width: '100%' }}
                                    defaultValue={dayjs('11:30', 'HH:mm')}
                                    format={'HH:mm'}
                                    minuteStep={15}
                                    disabledTime={() => ({
                                        disabledHours: getDisabledHours
                                    })}
                                    hideDisabledOptions
                                />
                            </Form.Item>

                            <Form.Item >
                                <Row justify="center">
                                    <Col>
                                        <Button id="btnAgendar" htmlType="submit">
                                            AGENDAR
                                        </Button>
                                    </Col>

                                </Row>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </DefaultPageContainer>
        </>
    )
}

export default function NovaConsulta() {
    return <ProfisisonalProvider><Cadastro /></ProfisisonalProvider>
}