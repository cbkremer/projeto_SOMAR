import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CenterMainComponent } from './center-main/center-main.component';
import { FooterComponent } from './footer/footer.component';
import { OdsCardsHorizontalComponent } from './ods-cards-horizontal/ods-cards-horizontal.component';
import { CenterLoginComponent } from './center-login/center-login.component';
import { CenterProjetosComponent } from './center-projetos/center-projetos.component';
import { CenterProjetoComponent } from './center-projeto/center-projeto.component';
import { CenterOdsComponent } from './center-ods/center-ods.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CenterMainComponent,
    FooterComponent,
    OdsCardsHorizontalComponent,
    CenterLoginComponent,
    CenterProjetosComponent,
    CenterProjetoComponent,
    CenterOdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
