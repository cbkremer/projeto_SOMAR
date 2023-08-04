import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  

  constructor(private insti_service: GetInstituicaoService, private router:Router) { }

  ngOnInit(): void {
  }
  public criarConta(){
    let insti: InstituicaoModel = {
      id: 0,
      cnpj: this.cnpj,
      nome: this.nome, 
      endereco: this.endereco, 
      projetos: [], 
      telefone: this.contato, 
      descricao: this.descricao, 
      imagens: [], 
      website: this.website
    }
    this.insti_service.criarInstituicao(insti);
    this.router.navigate(['center-main']);
  }
  public mascaraCNPJ(){
    //let last_char = this.cnpj.charAt(this.cnpj.length - 1);
    //if(isNaN(Number(last_char))){
    //  console.log(this.cnpj.substring(0,this.cnpj.length-2));
    //}
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
