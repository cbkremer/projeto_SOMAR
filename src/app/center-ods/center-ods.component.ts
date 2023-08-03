import { Component, OnInit } from '@angular/core';
import { GetOdsService } from '../services/get-ods.service';
import { OdsModel } from '../model/ods.model';
import { GetProjetosService } from '../services/get-projetos.service';
import { Projeto } from '../model/projeto.model';

@Component({
  selector: 'app-center-ods',
  templateUrl: './center-ods.component.html',
  styleUrls: ['./center-ods.component.css']
})
export class CenterOdsComponent implements OnInit {
  private id_ods_selecionada: any;
  private chosen_ods: number = -1;
  public ods: any;
  public projetos: Projeto[] = [];
  public low:number;
  public mid:number;
  constructor(
    private ods_service: GetOdsService,
    private projeto_service: GetProjetosService
  ) {
    this.ods = {};
    this.low = ods_service.low;
    this.mid = ods_service.mid;
  }
  ngOnInit(): void {
    this.projeto_service.getAllProjetos().subscribe((projetos:Projeto[]) => {
      this.projetos = projetos;
    });
    this.ods_service.chosen_ods = -1;
  }
  mostrarODS(){
    if(this.ods_service.ods_clicked){
      this.chosen_ods = this.ods_service.getChosenODS();
      console.log("chosen ods: "+this.chosen_ods+" | "+this.ods.id);
      //this.projetos = this.projeto_service.getProjetoByODS(this.chosen_ods);
      this.ods_service.getOdsByID(this.chosen_ods).subscribe((ods:OdsModel) => {
        this.ods = ods;
        //this.projetos = ods.projetos;
      });
    }
    return this.chosen_ods;
  }
  public getODSImage(id: number): string{
    return "../../assets/imgs/ODS/sdg"+id+".png";
  }
  public possuiODS():number{
    let quantidade_ods = 0;
    this.id_ods_selecionada = this.ods_service.getChosenODS();
    console.log(this.id_ods_selecionada);
    for (let i = 0; i < this.projetos.length; i++) {
      for (let j = 0; j < this.projetos[i].ods.length; j++){
        if(this.projetos[i].ods[j].id == this.id_ods_selecionada){
          quantidade_ods++;
          break;
        }
      }
    }
    return quantidade_ods;
  }
}
