import { Component, OnInit } from '@angular/core';
import { GetOdsService } from '../services/get-ods.service';
import { OdsModel } from '../model/ods.model';

@Component({
  selector: 'app-center-main',
  templateUrl: './center-main.component.html',
  styleUrls: ['./center-main.component.css']
})
export class CenterMainComponent implements OnInit {

  constructor(private ods_service:GetOdsService) { }

  ngOnInit(): void {
    this.ods_service.getHttpODS(2).subscribe((ods:OdsModel) => {
      console.log("oi: "+ods.nome);
    });
  }

}
