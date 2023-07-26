import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-login',
  templateUrl: './center-login.component.html',
  styleUrls: ['./center-login.component.css']
})
export class CenterLoginComponent implements OnInit {

  aviso: string = '';
  cnpj: string = '';
  password:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){

  }
  public goToCadastroInsti(){
    this.router.navigate(['center-criar-instituicao']);
  }
}
