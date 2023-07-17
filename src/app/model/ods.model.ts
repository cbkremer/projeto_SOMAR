import { Projeto } from "./projeto.model";

export interface OdsModel{
  id: number;
  nome: string;
  icone: string;
  numero: number;
  descricao: string;
  projetos: Projeto[];
}
