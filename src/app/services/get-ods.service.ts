import { Injectable } from '@angular/core';
import { OdsModel } from '../model/ods.model';

@Injectable({
  providedIn: 'root'
})
export class GetOdsService {
  ods_list: OdsModel[] = [];
  constructor() { }
  public getAllODS():OdsModel[]{
    return [{nome: 'ods1', icone: 'icone2', projetos: []}];
  }
}
