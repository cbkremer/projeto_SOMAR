import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InstituicaoModel } from '../model/instituicao.model';
import { GetInstituicaoService } from './get-instituicao.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router,private insti_service:GetInstituicaoService) { }
  public login(cnpj: string){
    let insti: InstituicaoModel[];
    this.insti_service.getInstituicaoByCNPJ(cnpj).subscribe(
      data => {
        insti = data;
        console.log("ok kkk: "+insti[0].nome);
      },
      error => {
        console.log('kkkkkkk: '+error);
      }
    );
  }
  wait(ms: number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
