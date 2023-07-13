import { Injectable } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { GetOdsService } from './get-ods.service';


@Injectable({
  providedIn: 'root'
})
export class GetProjetosService {
  //colocar só a id dentro do model ao inves da lista
  constructor(private ods_service: GetOdsService) { }
  public getAllProjetos(): Projeto[]{
    return [{id: 1, nome: 'PIDS Tech',
            descricao: "Para quem possui computadores desktop, laptop, monitores, teclado e mouse que não utiliza mais e não sabe como descartá-los da maneira correta, eles podem ter um destino útil e solidário. Isso porque o Senac Tech recebe anualmente doações em sua escola por meio do PIDS Tech — Programa de inclusão digital Senac Tech — , que consiste em coletar computadores para que instituições, escolas, ONGS, ou até mesmo alunos da escola, que ainda não tenham condições financeiras para a compra desses equipamentos, possam ter acesso à informação e às tecnologias.", 
            ods: [
              {id: 1, nome: 'Erradicação da pobreza', icone: '<i class="bi bi-people-fill"></i>',numero: 2, projetos: []},
              {id: 2, nome: 'Agricultura sustentável', icone: '<i class="bi bi-egg-fill"></i>',numero: 6, projetos: []},
              {id: 3, nome: 'Saúde e bem estar', icone: '<i class="bi bi-heart-pulse-fill"></i>',numero: 7, projetos: []}
            ],
            instituicoes:[{id: 1, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: []},
                          {id: 2, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: []}]
            },
            {id: 2, nome: 'Espelho Inteligente', descricao: "", ods: [
              {id: 7, nome: 'Energia limpa e acessível', icone: '<i class="bi bi-sun-fill"></i>',numero: 1, projetos: []},
              {id: 8, nome: 'Trabalho e econômia', icone: '<i class="bi bi-bar-chart-fill"></i>',numero: 9, projetos: []},
              {id: 9, nome: 'Industria, inovação e infra', icone: '<i class="bi bi-boxes"></i>',numero: 6, projetos: []}
            ],
            instituicoes:[{id: 1, nome: "Senac Tech", endereco: "Av. Venâncio Aires", projetos: []}]
            }];
  }
  public getProjetoByID(id: number): Projeto{
    let projetos = this.getAllProjetos();
    for (let i = 0; i < projetos.length; i++) {
      if(projetos[i].id == id){
        return projetos[i];
      }
    }
    return projetos[0];
  }
  public getProjetoByODS(id: number): Projeto[]{
    let projects = this.getAllProjetos();
    let ods_projects = [];
    for (let i = 0;i< projects.length;i++){
      for (let j = 0;j< projects[i].ods.length;j++){
        if(projects[i].ods[j].id == id){
          ods_projects.push(projects[i]);
        }
      }
    }
    return ods_projects;
  }
}
