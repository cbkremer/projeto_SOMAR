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
        sessionStorage.setItem('user_id',String(insti[0].id));
        console.log(sessionStorage.getItem('user_id'));
        this.waitLogin(1000,insti[0].id);
      },
      error => {
        console.log('kkkkkkk: '+error);
      }
    );
  }
  waitLogin(ms: number,id:number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
    this.router.navigate(['center-instituicao/'+id]).then(() => {
      window.location.reload();
    });
  }
  waitLogout(ms: number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
    this.router.navigate(['center-main/']).then(() => {
      window.location.reload();
    });
  }
  public logout(){
    sessionStorage.clear();
    this.waitLogout(1000);
  }
}
