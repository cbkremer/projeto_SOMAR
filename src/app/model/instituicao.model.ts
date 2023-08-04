import { Projeto } from "./projeto.model";

export interface InstituicaoModel{
    id: number;
    cnpj: string;
    nome: string;
    endereco: string;
    projetos: Projeto[];
    telefone: string;
    website: string;
    imagens: string[];
    descricao: string;
  }