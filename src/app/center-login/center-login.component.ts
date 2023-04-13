import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-login',
  templateUrl: './center-login.component.html',
  styleUrls: ['./center-login.component.css']
})
export class CenterLoginComponent implements OnInit {

  aviso: string = '';
  cnpj: string = '';
  password:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  login(){

  }

}
