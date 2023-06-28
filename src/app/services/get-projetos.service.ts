import { Injectable } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { GetOdsService } from './get-ods.service';


@Injectable({
  providedIn: 'root'
})
export class GetProjetosService {

  constructor(private ods_service: GetOdsService) { }
  public getAllProjetos(): Projeto[]{
    return [{nome: 'PIDS Tech', instituicao: 'Senac Tech', ods: [
              {id: 1, nome: 'Erradicação da pobreza', icone: '<i class="bi bi-people-fill"></i>',numero: 2, projetos: []},
              {id: 2, nome: 'Agricultura sustentável', icone: '<i class="bi bi-egg-fill"></i>',numero: 6, projetos: []},
              {id: 3, nome: 'Saúde e bem estar', icone: '<i class="bi bi-heart-pulse-fill"></i>',numero: 7, projetos: []}
            ]},
            {nome: 'Espelho Inteligente', instituicao: 'Senac Tech', ods: [
              {id: 7, nome: 'Energia limpa e acessível', icone: '<i class="bi bi-sun-fill"></i>',numero: 1, projetos: []},
              {id: 8, nome: 'Trabalho e econômia', icone: '<i class="bi bi-bar-chart-fill"></i>',numero: 9, projetos: []},
              {id: 9, nome: 'Industria, inovação e infra', icone: '<i class="bi bi-boxes"></i>',numero: 6, projetos: []}
            ]}];
  }
}
