import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOdsService } from '../services/get-ods.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router, private ods_service: GetOdsService, private login_service: LoginServiceService) { }

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
  logado(): Boolean{
    let id = sessionStorage.getItem('user_id');
    //console.log(id);
    if(id == null || id == undefined || id == ''){
      return false;
    }
    else{
      return true;
    }
  }
  goToMinhaInsti(){
    this.router.navigate(['center-instituicao/'+sessionStorage.getItem('user_id')]).then(() => {
      console.log('hahahaha');
      window.location.reload();
    });
  }
  logout(){
    this.login_service.logout();
  }
}
