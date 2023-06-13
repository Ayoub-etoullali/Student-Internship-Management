import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {OffresStageService} from "../../services/offres-stage/offres-stage.service";
import {Router} from "@angular/router";
import {OffreStage, OffreStageDetails} from "../../model/OffreStage.model";

@Component({
  selector: 'app-offres-stage',
  templateUrl: './offres-stage.component.html',
  styleUrls: ['./offres-stage.component.css']
})
export class OffresStageComponent implements OnInit {
  offresStageObservable!: Observable<Array<OffreStage>>;
  offreStageObservable! : Observable<OffreStageDetails>
  errorMsg!: String;
  currentPage : number =0;
  pageSize : number =5;
  offreFormGroup! : FormGroup;
  searchFormGroup!: FormGroup;
  errorMessage!: String;


  constructor(public  authService : AuthenticationService, private offresStageService: OffresStageService, private formBuilder: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {

    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control("")
    });
    this.OffresStage();
    /** Pagination*
     * this.offreFormGroup=this.formBuilder.group({
     *       accountId : this.formBuilder.control('')
     *     });
     */

  }

  handleSearchOffresStageByPoste() {
    let kw = this.searchFormGroup.value.keyword; // add ?
    this.offresStageObservable = this.offresStageService.searchOffresStageByPoste(kw).pipe(
      catchError(err => {
        this.errorMsg = err.message;
        return throwError(err)
      })
    );
  }


  Details(offreStage: OffreStage) {
    this.router.navigateByUrl("/navbar/details-offre-stage/"+offreStage.id,{state :offreStage});
  }

  private OffresStage() {
    this.offresStageObservable = this.offresStageService.OffresStage().pipe(
      catchError(err => {
        this.errorMsg = err.message;
        return throwError(err)
      })
    );
  }

  Postuler(o: any) {

  }

  /**page**/
  /*
  gotoPage(page: number) {
    this.currentPage=page;
    this.handleSearchAccount();
  }
  handleSearchAccount() {
    let accountId : string =this.offreFormGroup.value.accountId;
    this.offreStageObservable=this.offresStageService.getAccount(accountId,this.currentPage, this.pageSize).pipe(
      catchError(err => {
        this.errorMsg=err.message;
        return throwError(err);
      })
    );
  }
   */
  public handleSetPostuler(o: OffreStage) {
    let pos = o.postuler;
    this.offresStageService.setPostuler(o).subscribe({
      next: () => {
        o.postuler = !pos;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })
  }

  Reset() {
    this.OffresStage();
    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control(""),
      keywords: this.formBuilder.control(""),
    });
  }
}
