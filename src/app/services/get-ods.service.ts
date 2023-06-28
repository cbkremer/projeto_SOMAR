import { Injectable } from '@angular/core';
import { OdsModel } from '../model/ods.model';

@Injectable({
  providedIn: 'root'
})
export class GetOdsService {
  ods_list: OdsModel[] = [];
  constructor() { }
  public getAllODS():OdsModel[]{
    return [{nome: 'Erradicação da pobreza', icone: '<i class="bi bi-people-fill"></i>',numero: 2, projetos: []},
            {nome: 'Agricultura sustentável', icone: '<i class="bi bi-egg-fill"></i>',numero: 6, projetos: []},
            {nome: 'Saúde e bem estar', icone: '<i class="bi bi-heart-pulse-fill"></i>',numero: 7, projetos: []},
            {nome: 'Educação de qualidade', icone: '<i class="bi bi-pencil-fill"></i>',numero: 9, projetos: []},
            {nome: 'Igualdade de gênero', icone: '<i class="bi bi-gender-ambiguous"></i>',numero: 5, projetos: []},
            {nome: 'Agua potável e saneamento', icone: '<i class="bi bi-droplet-fill"></i>',numero: 3, projetos: []},
            {nome: 'Energia limpa e acessível', icone: '<i class="bi bi-sun-fill"></i>',numero: 1, projetos: []},
            {nome: 'Trabalho e econômia', icone: '<i class="bi bi-bar-chart-fill"></i>',numero: 9, projetos: []},
            {nome: 'Industria, inovação e infra', icone: '<i class="bi bi-boxes"></i>',numero: 6, projetos: []},
            {nome: 'Redução de desigualdades', icone: '<i class="bi bi-align-middle"></i>',numero: 10, projetos: []},
            {nome: 'Comunidades sustentaveis', icone: '<i class="bi bi-buildings-fill"></i>',numero: 2, projetos: []},
            {nome: 'Consumo responsável', icone: '<i class="bi bi-infinity"></i>',numero: 6, projetos: []},
            {nome: 'Luta pelo clima', icone: '<i class="bi bi-globe-americas"></i>',numero: 9, projetos: []},
            {nome: 'Vida na água', icone: '<i class="bi bi-water"></i>',numero: 4, projetos: []},
            {nome: 'Vida terrestre', icone: '<i class="bi bi-tree-fill"></i>',numero: 2, projetos: []},
            {nome: 'Paz justiça e eficácia', icone: '<i class="bi bi-peace"></i>',numero: 5, projetos: []},
            {nome: 'Parcerias e aplicação', icone: '<i class="bi bi-hand-thumbs-up-fill"></i>',numero: 7, projetos: []},
    ];
  }
}
