import { Injectable } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { GetOdsService } from './get-ods.service';


@Injectable({
  providedIn: 'root'
})
export class GetProjetosService {

  constructor(private ods_service: GetOdsService) { }
  public getAllProjetos(): Projeto[]{
    return [{nome: 'projeto1', instituicao: 'instituicao1', ods: this.ods_service.getAllODS()}];
  }
}
