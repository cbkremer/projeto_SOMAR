import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CenterMainComponent } from './center-main/center-main.component';
import { FooterComponent } from './footer/footer.component';
import { OdsCardsHorizontalComponent } from './ods-cards-horizontal/ods-cards-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CenterMainComponent,
    FooterComponent,
    OdsCardsHorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
