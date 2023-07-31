import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { InstituicaoModel } from '../model/instituicao.model';
import { GetInstituicaoService } from '../services/get-instituicao.service';
import { ActivatedRoute } from '@angular/router';
import { GetProjetosService } from '../services/get-projetos.service';

@Component({
  selector: 'app-center-adicionar-projeto',
  templateUrl: './center-adicionar-projeto.component.html',
  styleUrls: ['./center-adicionar-projeto.component.css']
})
export class CenterAdicionarProjetoComponent implements OnInit {
  public institu: any;

  public aviso: string = '';

  public nome: string = '';
  public descricao: string = '';
  public cidade: string = '';

  constructor(
    private insti_service:GetInstituicaoService, 
    private act_route:ActivatedRoute,
    private proj_service:GetProjetosService
  ) 
  {
    this.insti_service.getInstituicaoById(Number(this.act_route.snapshot.paramMap.get('id'))).subscribe((insti:InstituicaoModel) =>{
      console.table(insti);
      this.institu = insti;
    });
  }

  ngOnInit(): void {
  }
  adicionarProj(){
    let insti_list: InstituicaoModel[] = [];
    insti_list.push(this.institu);
    //console.log('insti nome: '+institu.nome);
    //console.log('nome insti depois: '+this.institu.nome);
    let projeto: Projeto = {
      id: 0,
      nome: this.nome,
      descricao: this.descricao,
      ods: [],
      cidade: this.cidade,
      instituicoes: insti_list,
      imagens: []
    }
    console.log(projeto);
    this.proj_service.addProj(projeto);
  }
}
