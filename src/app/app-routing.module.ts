import { CenterMainComponent } from './center-main/center-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterLoginComponent } from './center-login/center-login.component';
import { CenterProjetosComponent } from './center-projetos/center-projetos.component';
import { CenterProjetoComponent } from './center-projeto/center-projeto.component';
import { CenterOdsComponent } from './center-ods/center-ods.component';

const routes: Routes = [
  {path: '', redirectTo: 'center-main', pathMatch: 'full'},
  {path: 'center-main', component: CenterMainComponent},
  {path: 'center-login', component: CenterLoginComponent},
  {path: 'center-projetos', component: CenterProjetosComponent},
  {path: 'center-projeto/:id', component: CenterProjetoComponent},
  {path: 'center-ods', component: CenterOdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
