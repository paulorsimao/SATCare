import profissionais from '../profissionais.fake.json'

export interface IProfissionais {
    nome: string,
    sobrenome: string,
    especialidade: string,
    id: number
}

export default class profissionaisService {

    get({ page, pageSize, filter}: GetOptions): Page<IProfissionais> {
        const filterLower = (filter || '').toLocaleLowerCase()

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const fetchData = profissionais
            .filter(profissionais =>profissionais.nome.toLocaleLowerCase().includes(filterLower)) // filtra pelo nome
            .slice(startIndex, endIndex) // retorna apenas os registros da pagina

        return { data: fetchData, totalCount: profissionais.length }
    }

}