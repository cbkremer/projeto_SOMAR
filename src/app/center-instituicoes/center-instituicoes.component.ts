import { Component, OnInit } from '@angular/core';
import { InstituicaoModel } from '../model/instituicao.model';
import { GetInstituicaoService } from '../services/get-instituicao.service';

@Component({
  selector: 'app-center-instituicoes',
  templateUrl: './center-instituicoes.component.html',
  styleUrls: ['./center-instituicoes.component.css']
})
export class CenterInstituicoesComponent implements OnInit {
  public instituicoes: InstituicaoModel[] = []; 
  constructor(private insti_service: GetInstituicaoService) {
    this.instituicoes = insti_service.getAllInstituicoes();
   }

  ngOnInit(): void {
  }
}
