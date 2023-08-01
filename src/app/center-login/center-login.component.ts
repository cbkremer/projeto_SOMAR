import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-center-login',
  templateUrl: './center-login.component.html',
  styleUrls: ['./center-login.component.css']
})
export class CenterLoginComponent implements OnInit {

  aviso: string = '';
  cnpj: string = '';
  password:string = '';

  constructor(private router: Router, private login_service: LoginServiceService) { }

  ngOnInit(): void {
  }
  public goToCadastroInsti(){
    this.router.navigate(['center-criar-instituicao']);
  }
  public logar(){
    this.login_service.login(this.cnpj);
  }
  public mascaraCNPJ(){
    if(this.cnpj.length == 2){
      this.cnpj = this.cnpj+".";
    }
    if(this.cnpj.length == 6){
      this.cnpj = this.cnpj+".";
    }
    if(this.cnpj.length == 10){
      this.cnpj = this.cnpj+"/";
    }
    if(this.cnpj.length == 15){
      this.cnpj = this.cnpj+"-";
    }
  }
}
