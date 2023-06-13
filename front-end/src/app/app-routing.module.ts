import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcceuilComponent} from "./components/acceuil/acceuil.component";
import {EtudiantComponent} from "./components/etudiant/etudiant.component";
import {OffresStageComponent} from "./components/offres-stage/offres-stage.component";
import {ProjetsComponent} from "./components/projets/projets.component";
import {LoginComponent} from "./login/login.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {DetailsOffreStageComponent} from "./components/offres-stage/details/details-offre-stage.component";
import {EditProjetComponent} from "./components/projets/edit/edit-projet.component";
import {NewProjetComponent} from "./components/projets/add/new-projet.component";
import {EditEtudiantComponent} from "./components/etudiant/edit/edit-etudiant.component";
import {ForumComponent} from "./components/forum/forum.component";
import {DetailsPostesComponent} from "./components/forum/details/details-postes.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {
    path: "navbar", component: NavbarComponent, //user
    // canActivate : [AuthenticationGuard],
    children: [
      {path: "acceuil", component: AcceuilComponent},
      {path: "forum", component: ForumComponent},
      {path: "edit-projet/:id", component: EditProjetComponent},
      {path: "edit-etudiant/:id", component: EditEtudiantComponent},
      {path: "new-projet", component: NewProjetComponent},
      {path: "details-offre-stage/:id", component: DetailsOffreStageComponent},
      {path: "details-postes/:id", component: DetailsPostesComponent},
      {path: "etudiant", component: EtudiantComponent},
      {path: "offres-stage", component: OffresStageComponent},
      {path: "projets", component: ProjetsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
