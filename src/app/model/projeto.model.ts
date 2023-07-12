import { OdsModel } from "./ods.model";

export interface Projeto{
    id: number;
    nome: string;
    instituicao: string;
    descricao: string;
    ods: OdsModel[];
}