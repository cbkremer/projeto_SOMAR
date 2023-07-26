import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-cadastro-instituicao',
  templateUrl: './center-cadastro-instituicao.component.html',
  styleUrls: ['./center-cadastro-instituicao.component.css']
})
export class CenterCadastroInstituicaoComponent implements OnInit {

  aviso: string = '';
  password:string = '';

  cnpj: string = '';
  nome: string = '';
  endereco: string = '';
  contato: string = '';
  website: string = '';
  descricao: string= '';
  

  constructor() { }

  ngOnInit(): void {
  }
  public criarConta(){

  }

}
