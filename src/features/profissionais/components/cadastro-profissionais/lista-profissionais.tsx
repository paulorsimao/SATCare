import { useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import ProfissionaisService, { IProfissionais } from "../../services/profissionais-service";

const columns: ColumnsType<IProfissionais> = [
    {
        title: 'Nome',
        dataIndex: 'nome',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Sobrenome',
        dataIndex: 'sobrenome',
    },
    {
        title: 'Especialidade',
        dataIndex: 'especialidade',
    },
];

const profissionaisService = new ProfissionaisService()
function ListaProfissionais() {
    const pageSize = 10
    const paginaProfissionaiss: Page<IProfissionais> = profissionaisService.get({ page: 1, pageSize })

    const [data, setData] = useState<Array<IProfissionais>>(paginaProfissionaiss.data)
    const [pagination, setPagination] = useState({ page: 1, total: paginaProfissionaiss.totalCount, pageSize })

    const handleTableChange = (currentPagination: any) => {
        setPagination({ ...pagination, ...currentPagination })

        const fetchData = profissionaisService.get({ page: currentPagination.current, pageSize })
        setData(fetchData.data)
    };

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            rowKey={'id'}
            onChange={handleTableChange}
        />
    )
}

export default ListaProfissionais;