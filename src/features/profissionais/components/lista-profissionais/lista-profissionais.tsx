import { useState } from "react";
import { Button, Input, Modal, Row, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { PageHeader } from "@ant-design/pro-components";
import DefaultPageContainer from "../../../../components/page-container.tsx/page-container";
import { PlusOutlined } from "@ant-design/icons";
import TableActions, { DeleteAction, EditAction } from "../../../../components/table-actions/table-actions";
import { ProfisisonalProvider, Profissional, useProfissionalContext } from "../../providers/profissionais-provider";
import CadastroProfissionais from "../cadastro-profissionais/cadastro";
const { Search } = Input;

interface Pagination {
    current: number,
    total: number,
    pageSize: number
}

function Lista() {
    const profisisonalContext = useProfissionalContext()
    const pageSize = 10
    const paginaProfissionais: Page<Profissional> = profisisonalContext.get({ page: 1, pageSize })

    const [data, setData] = useState<Array<Profissional>>(paginaProfissionais.data)
    const [pagination, setPagination] = useState<Pagination>({ current: 1, total: paginaProfissionais.totalCount, pageSize })
    const [idSelecionado, setIdSelecionado] = useState<number | undefined>()

    const handleTableChange = (currentPagination: any) => {
        const fetchData = profisisonalContext.get({ page: currentPagination.current, pageSize })
        setPagination({ ...pagination, ...currentPagination })
        setData(fetchData.data)
    };

    const onSearch = (filter: string) => {
        const fetchData = profisisonalContext.get({ page: 1, pageSize, filter })
        setPagination({ current: 1, total: paginaProfissionais.totalCount, pageSize })
        setData(fetchData.data)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIdSelecionado(undefined)
        setIsModalOpen(false);
        handleTableChange(pagination)
    };

    const columns: ColumnsType<Profissional> = [
        {
            title: 'Nome',
            dataIndex: 'nome',
            width: '30%'
        },
        {
            title: 'Sobrenome',
            dataIndex: 'sobrenome',
            width: '30%'
        },
        {
            title: 'Especialidade',
            dataIndex: 'especialidade',
            width: '30%'
        },
        {
            title: 'Ações',
            dataIndex: 'action',
            render: (_index, row) => {
                return (
                    <TableActions>
                        <EditAction onClick={() => { setIdSelecionado(row.id); showModal() }} />
                        <DeleteAction onClick={() => { profisisonalContext.remove(row.id); handleTableChange(pagination) }} />
                    </TableActions>
                )
            }
        }
    ];

    return (
        <>
            <PageHeader
                title="Profissionais"
                extra={[
                    <Button key="cadastrar-profissional" type="primary" icon={<PlusOutlined />} onClick={showModal}>Cadastrar</Button>
                ]}
            ></PageHeader>
            <DefaultPageContainer>
                <Row style={{ marginBottom: '16px' }}>
                    <Search placeholder="Buscar..." onSearch={onSearch} style={{ width: 200 }} />
                </Row>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={pagination}
                    rowKey={'id'}
                    onChange={handleTableChange}
                />

                <Modal title="Cadastro de profissional" open={isModalOpen} onCancel={closeModal}
                    footer={[
                        <Button key="cancel" onClick={closeModal} type="text">Cancelar</Button>,
                        <Button key="submit" form="form-profissional" type="primary" htmlType="submit">Cadastrar</Button>
                    ]}>
                    <CadastroProfissionais id={idSelecionado} onFinish={closeModal} />
                </Modal>
            </DefaultPageContainer>
        </>
    )
}

export default function ListaProfissionais() {
    return <ProfisisonalProvider><Lista /></ProfisisonalProvider>
};