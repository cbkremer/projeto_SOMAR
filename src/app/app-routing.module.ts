import { CenterMainComponent } from './center-main/center-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterLoginComponent } from './center-login/center-login.component';
import { CenterProjetosComponent } from './center-projetos/center-projetos.component';
import { CenterProjetoComponent } from './center-projeto/center-projeto.component';
import { CenterOdsComponent } from './center-ods/center-ods.component';
import { CenterInstituicaoComponent } from './center-instituicao/center-instituicao.component';
import { CenterInstituicoesComponent } from './center-instituicoes/center-instituicoes.component';
import { CenterCadastroInstituicaoComponent } from './center-cadastro-instituicao/center-cadastro-instituicao.component';
import { CenterAdicionarProjetoComponent } from './center-adicionar-projeto/center-adicionar-projeto.component';

const routes: Routes = [
  {path: '', redirectTo: 'center-main', pathMatch: 'full'},
  {path: 'center-main', component: CenterMainComponent},
  {path: 'center-login', component: CenterLoginComponent},
  {path: 'center-projetos', component: CenterProjetosComponent},
  {path: 'center-projeto/:id', component: CenterProjetoComponent},
  {path: 'center-ods', component: CenterOdsComponent},
  {path: 'center-instituicao/:id', component: CenterInstituicaoComponent},
  {path: 'center-instituicoes', component: CenterInstituicoesComponent},
  {path: 'center-criar-instituicao', component: CenterCadastroInstituicaoComponent},
  {path: 'center-adicionar-projeto/:id', component: CenterAdicionarProjetoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
