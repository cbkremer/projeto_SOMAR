import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-ods-cards-horizontal',
  templateUrl: './ods-cards-horizontal.component.html',
  styleUrls: ['./ods-cards-horizontal.component.css']
})
export class OdsCardsHorizontalComponent implements OnInit {

  low:number = 3;
  mid:number = 7;

  ods_list: any = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }
  setOdsColor(index: number): string{
    if(this.ods_list[index] == '6'){
      return 'green';
    }
    else{
      return 'red';
    }
  }
  getOdsNumber(index: number): number{
    return this.ods_list[index];
  }
}
