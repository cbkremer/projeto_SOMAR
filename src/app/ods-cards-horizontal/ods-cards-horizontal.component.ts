import { Component, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-ods-cards-horizontal',
  templateUrl: './ods-cards-horizontal.component.html',
  styleUrls: ['./ods-cards-horizontal.component.css']
})
export class OdsCardsHorizontalComponent implements OnInit {
  @Input() asd: number = 15;

  low:number = 3;
  mid:number = 7;
  ods_list: any;

  
  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.asd);
    this.ods_list = [...Array(this.asd).keys()];
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
