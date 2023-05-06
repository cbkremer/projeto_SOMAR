import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { OdsModel } from '../model/ods.model';
import { GetProjetosService } from '../services/get-projetos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-projetos',
  templateUrl: './center-projetos.component.html',
  styleUrls: ['./center-projetos.component.css']
})
export class CenterProjetosComponent implements OnInit {

  projetos: Projeto[] = [];

  constructor(private router: Router,private projeto_service: GetProjetosService) { 
    this.projetos = projeto_service.getAllProjetos();
  }

  ngOnInit(): void {
  }
  public goToProjeto(){
    this.router.navigate(['center-projeto']);
  }
}
