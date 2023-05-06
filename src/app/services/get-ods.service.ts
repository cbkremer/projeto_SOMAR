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
            {nome: 'Agua potável e saneamento', icone: '<i class="bi bi-droplet-fill"></i>',numero: 3, projetos: []}
    ];
  }
}
