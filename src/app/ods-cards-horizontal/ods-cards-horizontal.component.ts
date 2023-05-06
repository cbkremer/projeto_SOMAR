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
  @Input() asd: number = 15;
  icone: string = '<i class="bi bi-bicycle"></i>';
  low:number = 3;
  mid:number = 7;
  ods_list: OdsModel[] = [];

  
  constructor(private ods_service: GetOdsService) {
  }
  
  ngOnInit(): void {
    console.log(this.asd);
    this.ods_list = this.ods_service.getAllODS();
    console.log(this.ods_list);
  }
  getOdsNumber(index: number): number{
    return this.ods_list[index].numero;
  }
}
