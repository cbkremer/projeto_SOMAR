import { Injectable } from '@angular/core';
import { OdsModel } from '../model/ods.model';

@Injectable({
  providedIn: 'root'
})
export class GetOdsService {
  ods_list: OdsModel[] = [];
  public chosen_ods:number = 0;
  public low:number = 3;
  public mid:number = 7;
  constructor() { }
  public getAllODS():OdsModel[]{
    return [{id: 1, nome: 'Erradicação da pobreza', icone: '<i class="bi bi-people-fill"></i>',numero: 2, projetos: []},
            {id: 2, nome: 'Agricultura sustentável', icone: '<i class="bi bi-egg-fill"></i>',numero: 6, projetos: []},
            {id: 3, nome: 'Saúde e bem estar', icone: '<i class="bi bi-heart-pulse-fill"></i>',numero: 7, projetos: []},
            {id: 4, nome: 'Educação de qualidade', icone: '<i class="bi bi-pencil-fill"></i>',numero: 9, projetos: []},
            {id: 5, nome: 'Igualdade de gênero', icone: '<i class="bi bi-gender-ambiguous"></i>',numero: 5, projetos: []},
            {id: 6, nome: 'Agua potável e saneamento', icone: '<i class="bi bi-droplet-fill"></i>',numero: 3, projetos: []},
            {id: 7, nome: 'Energia limpa e acessível', icone: '<i class="bi bi-sun-fill"></i>',numero: 1, projetos: []},
            {id: 8, nome: 'Trabalho e econômia', icone: '<i class="bi bi-bar-chart-fill"></i>',numero: 9, projetos: []},
            {id: 9, nome: 'Industria, inovação e infra', icone: '<i class="bi bi-boxes"></i>',numero: 6, projetos: []},
            {id: 10, nome: 'Redução de desigualdades', icone: '<i class="bi bi-align-middle"></i>',numero: 10, projetos: []},
            {id: 11, nome: 'Comunidades sustentaveis', icone: '<i class="bi bi-buildings-fill"></i>',numero: 2, projetos: []},
            {id: 12, nome: 'Consumo responsável', icone: '<i class="bi bi-infinity"></i>',numero: 6, projetos: []},
            {id: 13, nome: 'Luta pelo clima', icone: '<i class="bi bi-globe-americas"></i>',numero: 9, projetos: []},
            {id: 14, nome: 'Vida na água', icone: '<i class="bi bi-water"></i>',numero: 4, projetos: []},
            {id: 15, nome: 'Vida terrestre', icone: '<i class="bi bi-tree-fill"></i>',numero: 2, projetos: []},
            {id: 16, nome: 'Paz justiça e eficácia', icone: '<i class="bi bi-peace"></i>',numero: 5, projetos: []},
            {id: 17, nome: 'Parcerias e aplicação', icone: '<i class="bi bi-hand-thumbs-up-fill"></i>',numero: 7, projetos: []},
    ];
  }
  public getOdsByID(id:number):OdsModel{
    for (let i = 0; i < this.getAllODS().length; i++) {
      if(this.getAllODS()[i].id == id){
        return this.getAllODS()[i];
      }
    }
    return this.getAllODS()[0];
  }
  public setChosenODS(i:number){
    this.chosen_ods = i;
  }
  public getChosenODS():number{
    return this.chosen_ods;
  }
}
