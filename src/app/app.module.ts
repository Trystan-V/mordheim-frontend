import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BandeComponent } from './bande/bande.component';
import { RegleComponent } from './regle/regle.component';
import { JeuComponent } from './jeu/jeu.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { CompteComponent } from './compte/compte.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { BandeListComponent } from './bande-list/bande-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BandeComponent,
    RegleComponent,
    JeuComponent,
    AProposComponent,
    ScenarioComponent,
    CompteComponent,
    NavbarComponent,
    BandeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
