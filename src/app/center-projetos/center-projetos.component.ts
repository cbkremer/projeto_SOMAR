import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';

@Component({
  selector: 'app-center-projetos',
  templateUrl: './center-projetos.component.html',
  styleUrls: ['./center-projetos.component.css']
})
export class CenterProjetosComponent implements OnInit {

  projetos: Projeto[] = [{nome: 'projeto1', instituicao: 'instituição1'},
                         {nome: 'projeto2', instituicao: 'instituição2'}];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
