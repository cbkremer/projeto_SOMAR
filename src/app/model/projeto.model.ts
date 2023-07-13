import { OdsModel } from "./ods.model";
import { InstituicaoModel } from "./instituicao.model";

export interface Projeto{
    id: number;
    nome: string;
    descricao: string;
    ods: OdsModel[];
    instituicoes: InstituicaoModel[];
}