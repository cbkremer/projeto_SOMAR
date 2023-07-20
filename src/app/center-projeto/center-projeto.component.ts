import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model';
import { GetProjetosService } from '../services/get-projetos.service';
import { InstituicaoModel } from '../model/instituicao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-projeto',
  templateUrl: './center-projeto.component.html',
  styleUrls: ['./center-projeto.component.css']
})
export class CenterProjetoComponent implements OnInit {
  private id: number | null;
  public projeto: any;
  constructor(
      private act_route: ActivatedRoute,
      private projeto_service: GetProjetosService,
      private router: Router
    ) 
    {
      this.id = Number(this.act_route.snapshot.paramMap.get('id'));

      //this.projeto = 
      this.projeto_service.getProjetoByID(this.id).subscribe((projeto:Projeto) => {
        this.projeto = projeto;
      });
    }

  ngOnInit(): void {
    console.log("imagem: "+this.projeto.imagens[0]);
  }
  public goToInstituicao(instituicao: InstituicaoModel){
    this.router.navigate(['center-instituicao/'+instituicao.id]);
  }
}
