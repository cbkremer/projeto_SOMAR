import { Component, OnInit } from '@angular/core';
import { InstituicaoModel } from '../model/instituicao.model';
import { GetInstituicaoService } from '../services/get-instituicao.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-instituicao',
  templateUrl: './center-instituicao.component.html',
  styleUrls: ['./center-instituicao.component.css']
})
export class CenterInstituicaoComponent implements OnInit {
  public instituicao: any;
  constructor(
    private insti_service: GetInstituicaoService,
    private act_route: ActivatedRoute,
    private router:Router
  ) {
    //this.instituicao = 
    this.insti_service.getInstituicaoById(Number(this.act_route.snapshot.paramMap.get('id'))).subscribe((insti:InstituicaoModel) =>{
      this.instituicao = insti;
    });
  }
  ngOnInit(): void {

  }
  public minhaInsti():boolean{
    let id = this.act_route.snapshot.paramMap.get('id');
    if (id == sessionStorage.getItem('user_id')){
      return true;
    }
    else{
      return false;
    }
  }
  public adicionarProj(){
    this.router.navigate(['center-adicionar-projeto/'+this.act_route.snapshot.paramMap.get('id')]);
  }
}
