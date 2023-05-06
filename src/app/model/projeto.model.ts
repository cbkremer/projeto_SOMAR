import { OdsModel } from "./ods.model";

export interface Projeto{
    nome: string;
    instituicao: string;
    ods: OdsModel[];
}