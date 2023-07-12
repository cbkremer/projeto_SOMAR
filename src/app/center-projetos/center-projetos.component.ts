import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { OdsModel } from '../model/ods.model';
import { GetProjetosService } from '../services/get-projetos.service';
import { GetOdsService } from '../services/get-ods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-projetos',
  templateUrl: './center-projetos.component.html',
  styleUrls: ['./center-projetos.component.css']
})
export class CenterProjetosComponent implements OnInit {

  projetos: Projeto[] = [];
  id_ods_selecionada: number = 0;

  constructor(private router: Router,private projeto_service: GetProjetosService,private ods_service: GetOdsService) { 
    this.projetos = projeto_service.getAllProjetos();
  }

  ngOnInit(): void {
  }
  public goToProjeto(projeto: Projeto){
    this.router.navigate(['center-projeto/'+projeto.id]);

  }
  public possuiODS(project:Projeto):Boolean{
    console.log("ok rodou tico bunda");
    
    for (let i = 0; i < project.ods.length; i++) {
      this.id_ods_selecionada = this.ods_service.getChosenODS();
      if(this.id_ods_selecionada == 0){
        return true;
      }
      if(project.ods[i].id == this.id_ods_selecionada){
        return true;
      }
    }
    return false;
  }
}
