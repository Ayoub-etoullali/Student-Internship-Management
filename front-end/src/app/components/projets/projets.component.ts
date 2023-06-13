import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {Projet} from "../../model/Projet.model";
import {ProjetsService} from "../../services/projets/projets.service";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projetObservable!: Observable<Array<Projet>>;
  errorMsg!: String;
  observable!: Observable<Array<Projet>>;

  searchFormGroup!: FormGroup;


  constructor(public  authService : AuthenticationService, private projetsService: ProjetsService, private formBuilder: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control("")
    });
    this.getProjets();

  }

  handleSearchOffresStageByPoste() {
    let kw = this.searchFormGroup.value.keyword; // add ?
    this.projetObservable = this.projetsService.searchProjetByIntitule(kw).pipe(
      catchError(err => {
        this.errorMsg = err.message;
        return throwError(err)
      })
    );
  }

  private getProjets() {
    this.projetObservable = this.projetsService.getProjets().pipe(
      catchError(err => {
        this.errorMsg = err.message;
        return throwError(err)
      })
    );
  }

  Edit(o: Projet) {
    this.router.navigateByUrl("/navbar/edit-projet/"+o.id);

  }

  Delete(o: Projet) {
    let conf=confirm("Are you sure?")
    if (!conf) return;
    this.projetsService.deleteProjet(o.id).subscribe({
      next: value => {
        // [M1]
        // this.observable = this.observable.pipe(
        //   map(data => {
        //     let index=data.indexOf(o);
        //     data.slice(index,1);
        //     return data
        //   })
        // );
        // [M2] refresh
        this.getProjets()
      }, error: err => {
        console.log(err)
      }
    })
  }


}
