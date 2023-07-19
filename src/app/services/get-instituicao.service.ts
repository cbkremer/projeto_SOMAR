import { Injectable } from '@angular/core';
import { InstituicaoModel } from '../model/instituicao.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetInstituicaoService {

  constructor(private http:HttpClient) { }
  /*public getAllInstituicoes3(): InstituicaoModel[]{
    return [{id: 1, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: [{id: 1, nome: 'PIDS Tech',
    descricao: "Para quem possui computadores desktop, laptop, monitores, teclado e mouse que não utiliza mais e não sabe como descartá-los da maneira correta, eles podem ter um destino útil e solidário. Isso porque o Senac Tech recebe anualmente doações em sua escola por meio do PIDS Tech — Programa de inclusão digital Senac Tech — , que consiste em coletar computadores para que instituições, escolas, ONGS, ou até mesmo alunos da escola, que ainda não tenham condições financeiras para a compra desses equipamentos, possam ter acesso à informação e às tecnologias.", 
    ods: [
      {id: 1, nome: 'Erradicação da pobreza', icone: '<i class="bi bi-people-fill"></i>',numero: 2,descricao:"", projetos: []},
      {id: 2, nome: 'Agricultura sustentável', icone: '<i class="bi bi-egg-fill"></i>',numero: 6,descricao:"", projetos: []},
      {id: 3, nome: 'Saúde e bem estar', icone: '<i class="bi bi-heart-pulse-fill"></i>',numero: 7,descricao:"", projetos: []}
    ],
    instituicoes:[{id: 1, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: []},
                  {id: 2, nome: "Senac Tech 2", endereco: "Av. Venâncio Aires", projetos: []}]
    },{id: 2, nome: 'Espelho Inteligente', descricao: "", ods: [
      {id: 7, nome: 'Energia limpa e acessível', icone: '<i class="bi bi-sun-fill"></i>',numero: 1,descricao:"", projetos: []},
      {id: 8, nome: 'Trabalho e econômia', icone: '<i class="bi bi-bar-chart-fill"></i>',numero: 9,descricao:"", projetos: []},
      {id: 9, nome: 'Industria, inovação e infra', icone: '<i class="bi bi-boxes"></i>',numero: 6,descricao:"", projetos: []}
    ],
    instituicoes:[{id: 1, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: []}]
    }]},
            {id: 2, nome: "Senac Tech 2", endereco: "Av. Venâncio Aires", projetos: [{id: 1, nome: 'PIDS Tech',
            descricao: "Para quem possui computadores desktop, laptop, monitores, teclado e mouse que não utiliza mais e não sabe como descartá-los da maneira correta, eles podem ter um destino útil e solidário. Isso porque o Senac Tech recebe anualmente doações em sua escola por meio do PIDS Tech — Programa de inclusão digital Senac Tech — , que consiste em coletar computadores para que instituições, escolas, ONGS, ou até mesmo alunos da escola, que ainda não tenham condições financeiras para a compra desses equipamentos, possam ter acesso à informação e às tecnologias.", 
            ods: [
              {id: 1, nome: 'Erradicação da pobreza', icone: '<i class="bi bi-people-fill"></i>',numero: 2,descricao:"", projetos: []},
              {id: 2, nome: 'Agricultura sustentável', icone: '<i class="bi bi-egg-fill"></i>',numero: 6,descricao:"", projetos: []},
              {id: 3, nome: 'Saúde e bem estar', icone: '<i class="bi bi-heart-pulse-fill"></i>',numero: 7,descricao:"", projetos: []}
            ],
            instituicoes:[{id: 1, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: []},
                          {id: 2, nome: "Senac Tech 2", endereco: "Av. Venâncio Aires", projetos: []}]
            }]}];
  }*/
  public getInstituicaoById(id: number): Observable<InstituicaoModel>{
    return this.http.get<InstituicaoModel>('http://localhost:3000/instituicoes/'+id);
  }
  public getAllInstituicoes():Observable<InstituicaoModel[]>{
    return this.http.get<InstituicaoModel[]>('http://localhost:3000/instituicoes');
  }
}
