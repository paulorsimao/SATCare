import { useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import UsuarioService, { IUsuario } from "../../services/usuarios-service";

const columns: ColumnsType<IUsuario> = [
    {
        title: 'Nome',
        dataIndex: 'nome',
    },
    {
        title: 'Sobrenome',
        dataIndex: 'sobrenome',
    },
    {
        title: 'Idade',
        dataIndex: 'idade',
    },
];

const usuarioService = new UsuarioService()
function ListaUsuarios() {
    const pageSize = 10
    const paginaUsuarios: Page<IUsuario> = usuarioService.get({ page: 1, pageSize })

    const [data, setData] = useState<Array<IUsuario>>(paginaUsuarios.data)
    const [pagination, setPagination] = useState({ page: 1, total: paginaUsuarios.totalCount, pageSize })

    const handleTableChange = (currentPagination: any) => {
        setPagination({ ...pagination, ...currentPagination })

        const fetchData = usuarioService.get({ page: currentPagination.current, pageSize })
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

export default ListaUsuarios;