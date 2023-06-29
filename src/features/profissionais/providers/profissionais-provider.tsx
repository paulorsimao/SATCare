import { useState, createContext, useContext } from "react";
import profissionaisFake from '../profissionais.fake.json'

export enum Especialidade {
    PSICOLOGO = "Psicólogo",
    DENTISTA = "Dentista",
    OFTALMOLOGISTA = "Oftalmologista"
}

export const especialidadeOptions = Object.values(Especialidade).map((especialidade) => ({
    label: especialidade,
    value: especialidade
}));

export interface Profissional {
    id: number,
    nome: string,
    sobrenome: string,
    especialidade: Especialidade
}

export interface CreateProfissional {
    nome: string,
    sobrenome: string,
    especialidade: Especialidade
}

interface ProfissionalContextType {
    get: ({ }: GetOptions) => Page<Profissional>,
    getOne: (id: number) => Profissional | undefined,
    remove: (id: number) => void,
    edit: (id: number, profissional: Profissional) => boolean,
    create: (profissional: CreateProfissional) => boolean
}

//@ts-ignore 
const ProfissionalContext = createContext<ProfissionalContextType>({});

export function ProfisisonalProvider(props: any) {
    const [profissionais, setProfissionais] = useState<Profissional[]>(() => {
        return profissionaisFake.map(p => ({
            ...p,
            especialidade: p.especialidade as Especialidade
        }))
    })

    const get = ({ page, pageSize, filter }: GetOptions): Page<Profissional> => {
        const filterLower = (filter || '').toLocaleLowerCase()

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const fetchData = profissionais
            .filter(e => e.nome.toLocaleLowerCase().includes(filterLower)) // filtra pelo nome
            .slice(startIndex, endIndex) // retorna apenas os registros da pagina

        return { data: fetchData, totalCount: profissionais.length }
    }

    const getOne = (id: number): Profissional | undefined => {
        return profissionais.find(p => p.id === id)
    }

    const remove = (id: number): void => {
        const newProfissionais = profissionais.filter(p => p.id !== id);
        setProfissionais(newProfissionais)
    }

    const edit = (id: number, profissional: Profissional): boolean => {
        const index = profissionais.findIndex(p => p.id === id);

        if (index > -1) {
            const newProfissinais = profissionais;
            newProfissinais.splice(index, 1, profissional)
            setProfissionais(newProfissinais)
            return true
        }

        return false
    }

    const create = (profissional: CreateProfissional) => {
        const id = profissionais.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev : current
        }).id + 1

        const newProfissinais = [...profissionais, { id, ...profissional }]
        setProfissionais(newProfissinais)
    }

    return <ProfissionalContext.Provider value={{ get, getOne, remove, edit, create }} {...props} />;
}

export function useProfissionalContext() {
    const context = useContext(ProfissionalContext);
    if (context === undefined) {
        throw new Error(`useProfissionalContext must be used within a ProfisisonalProvider`);
    }
    return context;
}
