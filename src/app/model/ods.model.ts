import { Projeto } from "./projeto.model";

export interface OdsModel{
  nome: string;
  icone: string;
  numero: number;
  projetos: Projeto[];
}
