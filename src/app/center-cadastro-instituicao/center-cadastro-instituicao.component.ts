import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InstituicaoModel } from '../model/instituicao.model';
import { GetInstituicaoService } from '../services/get-instituicao.service';

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
  

  constructor(private insti_service: GetInstituicaoService) { }

  ngOnInit(): void {
  }
  public criarConta(){
    let insti: InstituicaoModel = {
      id: 0,
      cnpj: this.cnpj,
      nome: this.nome, 
      endereco: this.endereco, 
      projetos: [], 
      contato: this.contato, 
      descricao: this.descricao, 
      imagens: [], 
      website: this.website
    }
    this.insti_service.criarInstituicao(insti);
  }
}
