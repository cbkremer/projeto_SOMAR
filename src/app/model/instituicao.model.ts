import { Projeto } from "./projeto.model";

export interface InstituicaoModel{
    id: number;
    nome: string;
    endereco: string;
    projetos: Projeto[];
  }