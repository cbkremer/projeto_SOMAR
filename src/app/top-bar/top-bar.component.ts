import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOdsService } from '../services/get-ods.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router, private ods_service: GetOdsService) { }

  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigate(['center-login']);
  }
  goToHome(){
    this.router.navigate(['center-main']);
  }
  goToProjetos(){
    this.ods_service.setChosenODS(0)
    this.router.navigate(['center-projetos']);
  }
  goToODS(){
    this.router.navigate(['center-ods']);
  }
  gotToInstituicoes(){
    this.router.navigate(['center-instituicoes']);
  }
}
