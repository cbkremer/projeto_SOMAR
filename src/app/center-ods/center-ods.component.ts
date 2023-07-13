import { Component, OnInit } from '@angular/core';
import { GetOdsService } from '../services/get-ods.service';
import { OdsModel } from '../model/ods.model';
import { GetProjetosService } from '../services/get-projetos.service';
import { Projeto } from '../model/projeto.model';

@Component({
  selector: 'app-center-ods',
  templateUrl: './center-ods.component.html',
  styleUrls: ['./center-ods.component.css']
})
export class CenterOdsComponent implements OnInit {

  private chosen_ods: number = -1;
  public ods: OdsModel;
  public projetos: Projeto[] = [];
  public low:number;
  public mid:number;
  constructor(
    private ods_service: GetOdsService,
    private projeto_service: GetProjetosService
  ) {
    this.ods = {id: 1, nome:"", icone:"", numero:0, projetos: []};
    this.low = ods_service.low;
    this.mid = ods_service.mid;
  }

  ngOnInit(): void {
    this.ods_service.chosen_ods = -1;
  }
  mostrarODS(){
    this.chosen_ods = this.ods_service.getChosenODS();
    this.projetos = this.projeto_service.getProjetoByODS(this.chosen_ods);
    if(this.chosen_ods != -1){
      this.ods = this.ods_service.getOdsByID(this.chosen_ods);
    }
    return this.chosen_ods;
  }
}
