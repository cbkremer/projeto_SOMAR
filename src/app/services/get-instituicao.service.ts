import { Injectable } from '@angular/core';
import { InstituicaoModel } from '../model/instituicao.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetInstituicaoService {

  constructor(private http:HttpClient) { }
  
  public getInstituicaoById(id: number): Observable<InstituicaoModel>{
    return this.http.get<InstituicaoModel>('http://localhost:3000/instituicoes/'+id);
  }
  public getInstituicaoByCNPJ(cnpj: string): Observable<InstituicaoModel[]>{
    //puta que me pariu
    return this.http.get<InstituicaoModel[]>("http://localhost:3000/instituicoes?cnpj="+cnpj);
    //http://localhost:3000/projeto?nome_like=exe
  }
  public getAllInstituicoes():Observable<InstituicaoModel[]>{
    return this.http.get<InstituicaoModel[]>('http://localhost:3000/instituicoes');
  }
  public criarInstituicao(insti: InstituicaoModel){
    this.http.post<InstituicaoModel>("http://localhost:3000/instituicoes", insti).subscribe();
  }
  public atualizarInstituicao(insti:InstituicaoModel){
    this.http.put<InstituicaoModel>("http://localhost:3000/instituicoes/"+insti.id, insti).subscribe(
      data => {
        console.log("acho q deu: "+data);
      },
      error => {
        console.log("kkkkk: "+error);
      }
    );
  }
}
