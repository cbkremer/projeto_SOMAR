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
  public ods_clicked = false;
  public low:number = 3;
  public mid:number = 7;
  constructor(private http:HttpClient) { }

  public getOdsByID(id:number):Observable<OdsModel>{
    return this.http.get<OdsModel>('http://localhost:3000/ods/'+id);
  }
  public setChosenODS(id:number){
    this.ods_clicked = true;
    this.chosen_ods = id;
  }
  public getChosenODS():number{
      this.ods_clicked = false;
      return this.chosen_ods;
  }
  public getHttpODS(id:number):Observable<OdsModel>{
    return this.http.get<OdsModel>('http://localhost:3000/ods/'+id);
  }
  public getAllODS():Observable<OdsModel[]>{
    return this.http.get<OdsModel[]>('http://localhost:3000/ods');
  }
}
