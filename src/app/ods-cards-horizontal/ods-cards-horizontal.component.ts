import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GetOdsService } from '../services/get-ods.service';
import { OdsModel } from '../model/ods.model';

@Component({
  selector: 'app-ods-cards-horizontal',
  templateUrl: './ods-cards-horizontal.component.html',
  styleUrls: ['./ods-cards-horizontal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OdsCardsHorizontalComponent implements OnInit {
  //que diabo é isso?
  @Input() asd: number = 15;
  icone: string = '<i class="bi bi-bicycle"></i>';
  low:number;
  mid:number;
  ods_list: OdsModel[] = [];
  //the chosen ods
  public i: number = 0;

  
  constructor(private ods_service: GetOdsService) {
    this.low = ods_service.low;
    this.mid = ods_service.mid;
  }
  
  ngOnInit(): void {
    console.log(this.asd);
    this.ods_list = this.ods_service.getAllODS();
    console.log(this.ods_list);
  }
  getOdsNumber(index: number): number{
    return this.ods_list[index].numero;
  }
  public setODSChoice(i: number){
    console.log(i+1);
    this.i = i+1;
    this.ods_service.setChosenODS(i+1);
  }
}
