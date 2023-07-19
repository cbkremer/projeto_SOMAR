import { Component, OnInit } from '@angular/core';
import { InstituicaoModel } from '../model/instituicao.model';
import { GetInstituicaoService } from '../services/get-instituicao.service';
import { Router } from '@angular/router';
import { Projeto } from '../model/projeto.model';

@Component({
  selector: 'app-center-instituicoes',
  templateUrl: './center-instituicoes.component.html',
  styleUrls: ['./center-instituicoes.component.css']
})
export class CenterInstituicoesComponent implements OnInit {
  public instituicoes: InstituicaoModel[] = []; 
  constructor(private insti_service: GetInstituicaoService, private router: Router) {
    //this.instituicoes = 
    this.insti_service.getAllInstituicoes().subscribe((insti:InstituicaoModel[]) => {
      console.log(insti);
      this.instituicoes = insti;
    });
   }

  ngOnInit(): void {
  }
  public goToProjeto(projeto: Projeto){
    this.router.navigate(['center-projeto/'+projeto.id]);
  }
  public goToInstituicao(instituicao: InstituicaoModel){
    this.router.navigate(['center-instituicao/'+instituicao.id]);
  }
}
