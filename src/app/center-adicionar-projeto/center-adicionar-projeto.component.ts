import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { InstituicaoModel } from '../model/instituicao.model';
import { GetInstituicaoService } from '../services/get-instituicao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProjetosService } from '../services/get-projetos.service';
import { OdsModel } from '../model/ods.model';
import { GetOdsService } from '../services/get-ods.service';

@Component({
  selector: 'app-center-adicionar-projeto',
  templateUrl: './center-adicionar-projeto.component.html',
  styleUrls: ['./center-adicionar-projeto.component.css']
})
export class CenterAdicionarProjetoComponent implements OnInit {

  public editar_ods: boolean = true;
  public todas_ods: OdsModel[] = [];
  public projeto: any;
  public novas_ods: OdsModel[] = [];
  public id: Number = 0;
  public institu: any;

  public aviso: string = '';

  public nome: string = '';
  public descricao: string = '';
  public cidade: string = '';

  constructor(
    private insti_service:GetInstituicaoService, 
    private act_route:ActivatedRoute,
    private proj_service:GetProjetosService,
    private ods_service: GetOdsService,
    private router:Router
  ) 
  {
    this.insti_service.getInstituicaoById(Number(this.act_route.snapshot.paramMap.get('id'))).subscribe((insti:InstituicaoModel) =>{
      console.table(insti);
      this.institu = insti;
    });
  }

  ngOnInit(): void {
    this.ods_service.getAllODS().subscribe((list:OdsModel[]) => {
      this.todas_ods = list;
    });
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
      ods: this.novas_ods,
      cidade: this.cidade,
      instituicoes: insti_list,
      imagens: []
    }
    this.ods_service.setChosenODS(0);
    this.proj_service.addProj2(projeto).subscribe(data => {
      this.waitAndUpdateInsti(1000,projeto,data.id);
    });
  }
  checarODS(){
    let chosen_ods = this.ods_service.getChosenODS();
    let duplicate = true;
    //console.log('nome: '+this.todas_ods[chosen_ods-1].nome);
    if(!this.novas_ods.includes(this.todas_ods[chosen_ods-1])){
      this.novas_ods.push(this.todas_ods[chosen_ods-1]);
    }
  }
  removerODS(){
    let chosen_ods = this.ods_service.getChosenODS();
    for(let i =0;i<this.novas_ods.length;i++){
      if(this.novas_ods[i].id == chosen_ods){
        this.novas_ods.splice(i,1);
      }
    }
  }
  waitAndUpdateInsti(ms: number, projeto: Projeto, id: Number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
    projeto.instituicoes = [];
    projeto.id = id.valueOf();
    console.log("id projeto: "+projeto.id);
    this.institu.projetos.push(projeto);
    this.insti_service.atualizarInstituicao(this.institu);
    this.router.navigate(['center-projetos']);
  }
}
