import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GetOdsService } from '../services/get-ods.service';
import { OdsModel } from '../model/ods.model';
import { Projeto } from '../model/projeto.model';

@Component({
  selector: 'app-ods-cards-horizontal',
  templateUrl: './ods-cards-horizontal.component.html',
  styleUrls: ['./ods-cards-horizontal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OdsCardsHorizontalComponent implements OnInit {
  //se é para mostrar uma lista das ods do projeto
  @Input() project_ods: Projeto = {id: -1, nome: '', descricao: '',ods: [], instituicoes: []};
  //se é para as ods serem selecionaveis ou nao
  @Input() selectable: boolean = true;
  icone: string = '<i class="bi bi-bicycle"></i>';
  low:number;
  mid:number;
  ods_list: any = [];
  //the chosen ods
  public i: number = 0;

  
  constructor(private ods_service: GetOdsService) {
    this.low = ods_service.low;
    this.mid = ods_service.mid;
  }
  
  ngOnInit(): void {
    if(this.project_ods.id != -1){
      console.log(this.project_ods.ods.length);
      this.ods_list = this.project_ods.ods;
    }
    else{
      this.ods_service.getAllODS().subscribe((list:OdsModel[]) => {
        this.ods_list = list;
      });
    }
    console.log(this.ods_list);
  }
  getOdsNumber(index: number): number{
    return this.ods_list[index].numero;
  }
  public setODSChoice(i: number){
    //fazer isso receber a id ir para a pagina pela id 
    if(this.selectable){
      console.log("selecionou uma ods");
      this.i = i+1;
      this.ods_service.setChosenODS(i+1);
    }
  }
}
