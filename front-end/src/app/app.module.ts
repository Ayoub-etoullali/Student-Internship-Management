import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { ForumComponent } from './components/forum/forum.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { ProjetsComponent } from './components/projets/projets.component';
import { OffresStageComponent } from './components/offres-stage/offres-stage.component';
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DetailsOffreStageComponent} from "./components/offres-stage/details/details-offre-stage.component";
import {NewProjetComponent} from "./components/projets/add/new-projet.component";
import {EditProjetComponent} from "./components/projets/edit/edit-projet.component";
import {EditEtudiantComponent} from "./components/etudiant/edit/edit-etudiant.component";
import {DetailsPostesComponent} from "./components/forum/details/details-postes.component";

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AcceuilComponent,
    NavbarComponent,
    ProjetsComponent,
    OffresStageComponent,
    LoginComponent,
    DetailsOffreStageComponent,
    DetailsPostesComponent,
    NewProjetComponent,
    EditProjetComponent,
    EditEtudiantComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //intéragir avec la partie Backend
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
