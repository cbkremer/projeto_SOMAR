import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { GetProjetosService } from '../services/get-projetos.service';

@Component({
  selector: 'app-center-projeto',
  templateUrl: './center-projeto.component.html',
  styleUrls: ['./center-projeto.component.css']
})
export class CenterProjetoComponent implements OnInit {
  private id: number | null;
  public projeto: Projeto;
  constructor(
    private act_route: ActivatedRoute,
    private projeto_service: GetProjetosService
    ) {
    this.id = Number(this.act_route.snapshot.paramMap.get('id'));
    this.projeto = projeto_service.getProjetoByID(this.id);
  }

  ngOnInit(): void {

  }

}
