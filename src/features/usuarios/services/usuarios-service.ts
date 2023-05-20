import usuarios from '../usuarios.fake.json'

export interface IUsuario {
    nome: string,
    sobrenome: string,
    idade: number,
    id: number
}

export default class UsuarioService {

    get({ page, pageSize, filter}: GetOptions): Page<IUsuario> {
        const filterLower = (filter || '').toLocaleLowerCase()

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const fetchData = usuarios
            .filter(usuario => usuario.nome.toLocaleLowerCase().includes(filterLower)) // filtra pelo nome
            .slice(startIndex, endIndex) // retorna apenas os registros da pagina

        return { data: fetchData, totalCount: usuarios.length }
    }

}