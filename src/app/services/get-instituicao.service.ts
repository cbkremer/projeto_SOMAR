import { Injectable } from '@angular/core';
import { InstituicaoModel } from '../model/instituicao.model';

@Injectable({
  providedIn: 'root'
})
export class GetInstituicaoService {

  constructor() { }
  public getAllInstituicoes(): InstituicaoModel[]{
    return [{id: 1, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: []}];
  }
  public getInstituicaoById(id: number): InstituicaoModel{
    let instituicoes = this.getAllInstituicoes();
    for (let i = 0;instituicoes.length;i++){
      if(instituicoes[i].id == id){
        return instituicoes[i];
      }
    }
    return instituicoes[0];
  }
}
