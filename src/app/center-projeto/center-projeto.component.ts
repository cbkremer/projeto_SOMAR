import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { GetProjetosService } from '../services/get-projetos.service';
import { InstituicaoModel } from '../model/instituicao.model';
import { Router } from '@angular/router';
import { GetOdsService } from '../services/get-ods.service';
import { OdsModel } from '../model/ods.model';
import { GetInstituicaoService } from '../services/get-instituicao.service';

@Component({
  selector: 'app-center-projeto',
  templateUrl: './center-projeto.component.html',
  styleUrls: ['./center-projeto.component.css']
})
export class CenterProjetoComponent implements OnInit {
  public aviso:string = '';
  file_path: string = '';
  private id: number | null;
  public todas_ods: OdsModel[] = [];
  public projeto: any;
  public novas_ods: OdsModel[] = [];
  public editar_ods:boolean = false;
  public add_insti:boolean = false;
  public cnpj:string = '';
  constructor(
      private act_route: ActivatedRoute,
      private projeto_service: GetProjetosService,
      private router: Router,
      private ods_service: GetOdsService,
      private insti_service: GetInstituicaoService
    ) 
    {
      this.id = Number(this.act_route.snapshot.paramMap.get('id'));

      //this.projeto = 
      this.projeto_service.getProjetoByID(this.id).subscribe((projeto:Projeto) => {
        this.projeto = projeto;
      });
    }
    
    ngOnInit(): void {
      //console.log("imagem: "+this.projeto.imagens[0]);
      this.ods_service.getAllODS().subscribe((list:OdsModel[]) => {
        this.todas_ods = list;
      });
  }
  public goToInstituicao(instituicao: InstituicaoModel){
    this.router.navigate(['center-instituicao/'+instituicao.id]);
  }
  editarODS(){
    this.editar_ods = true;
  }
  minhaInsti(){
    let p_ins_list:InstituicaoModel[] = this.projeto.instituicoes;
    let id = Number(sessionStorage.getItem('user_id'));
    for (let i = 0;i<p_ins_list.length;i++){
      if(id == p_ins_list[i].id){
        return true;
      }
    }
    return false;
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
  salvarODS(){
    this.projeto.ods = this.novas_ods;
    this.projeto_service.updateProj(this.projeto);
    this.editar_ods = false;
    //location.reload();
  }
  /*
  onFileSelected($event: any) {
    console.log($event);
    this.file_path = $event.target.files[0];
  }
  adicionarIMG(){
    console.log(this.file_path);
  }
  */
  adicionarInsti(){
    this.add_insti = true;
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
  //nao utlizado,ué???
  salvarInsti(){
    let insti: InstituicaoModel[] = [];
    this.insti_service.getInstituicaoByCNPJ(this.cnpj).subscribe(
      data => {
        insti = data
      }
    );
    this.insti_service.atualizarInstituicao(insti[0]);
    location.reload();
  }
}
