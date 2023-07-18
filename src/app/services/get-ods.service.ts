import { Injectable } from '@angular/core';
import { OdsModel } from '../model/ods.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetOdsService {
  ods_list: OdsModel[] = [];
  public chosen_ods:number = 0;
  public low:number = 3;
  public mid:number = 7;
  constructor(private http:HttpClient) { }
  public getAllODS2():OdsModel[]{
    return [{id: 1, nome: 'Erradicação da pobreza', icone: '<i class="bi bi-people-fill"></i>',numero: 2,descricao:"Acabar com a pobreza em todas as suas formas, em todos os lugares.", projetos: []},
            {id: 2, nome: 'Agricultura sustentável', icone: '<i class="bi bi-egg-fill"></i>',numero: 6,descricao:"Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável.", projetos: []},
            {id: 3, nome: 'Saúde e bem estar', icone: '<i class="bi bi-heart-pulse-fill"></i>',numero: 7,descricao:"Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.", projetos: []},
            {id: 4, nome: 'Educação de qualidade', icone: '<i class="bi bi-pencil-fill"></i>',numero: 9,descricao:"Assegurar a educação inclusiva, e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.", projetos: []},
            {id: 5, nome: 'Igualdade de gênero', icone: '<i class="bi bi-gender-ambiguous"></i>',numero: 5,descricao:"Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.", projetos: []},
            {id: 6, nome: 'Agua potável e saneamento', icone: '<i class="bi bi-droplet-fill"></i>',numero: 3,descricao:"Garantir disponibilidade e manejo sustentável da água e saneamento para todos.", projetos: []},
            {id: 7, nome: 'Energia limpa e acessível', icone: '<i class="bi bi-sun-fill"></i>',numero: 1,descricao:"Garantir acesso à energia barata, confiável, sustentável e renovável para todos.", projetos: []},
            {id: 8, nome: 'Trabalho e econômia', icone: '<i class="bi bi-bar-chart-fill"></i>',numero: 9,descricao:"Promover crescimento econômico sustentável e inclusivo, cheio de empregabilidade decente e produtiva para todos.", projetos: []},
            {id: 9, nome: 'Industria, inovação e infra', icone: '<i class="bi bi-boxes"></i>',numero: 6,descricao:"Construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável, e fomentar a inovação.", projetos: []},
            {id: 10, nome: 'Redução de desigualdades', icone: '<i class="bi bi-align-middle"></i>',numero: 10,descricao:"Reduzir as desigualdades dentro dos países e entre eles.", projetos: []},
            {id: 11, nome: 'Comunidades sustentaveis', icone: '<i class="bi bi-buildings-fill"></i>',numero: 2,descricao:"Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.", projetos: []},
            {id: 12, nome: 'Consumo responsável', icone: '<i class="bi bi-infinity"></i>',numero: 6,descricao:"Assegurar padrões de produção e de consumo sustentáveis.", projetos: []},
            {id: 13, nome: 'Luta pelo clima', icone: '<i class="bi bi-globe-americas"></i>',numero: 9,descricao:"Tomar medidas urgentes para combater a mudança climática e seus impactos (*).", projetos: []},
            {id: 14, nome: 'Vida na água', icone: '<i class="bi bi-water"></i>',numero: 4,descricao:"Conservação e uso sustentável dos oceanos, dos mares, e dos recursos marinhos para o desenvolvimento sustentável.", projetos: []},
            {id: 15, nome: 'Vida terrestre', icone: '<i class="bi bi-tree-fill"></i>',numero: 2,descricao:"Promover sociedades pacíficas e inclusivas par ao desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.", projetos: []},
            {id: 16, nome: 'Paz justiça e eficácia', icone: '<i class="bi bi-peace"></i>',numero: 5,descricao:"Promover sociedades pacificas e inclusivas para desenvolvimento sustentável, providenciar acesso à justiça à todos e construir instituições inclusivas e responsáveis em todos os níveis.", projetos: []},
            {id: 17, nome: 'Parcerias e aplicação', icone: '<i class="bi bi-hand-thumbs-up-fill"></i>',numero: 7,descricao:"Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.", projetos: []},
    ];
  }
  public getOdsByID(id:number):Observable<OdsModel>{
    return this.http.get<OdsModel>('http://localhost:3000/ods/'+id);
  }
  public setChosenODS(i:number){
    this.chosen_ods = i;
  }
  public getChosenODS():number{
    return this.chosen_ods;
  }
  public getHttpODS(id:number):Observable<OdsModel>{
    return this.http.get<OdsModel>('http://localhost:3000/ods/'+id);
  }
  public getAllODS():Observable<OdsModel[]>{
    return this.http.get<OdsModel[]>('http://localhost:3000/ods');
  }
}
