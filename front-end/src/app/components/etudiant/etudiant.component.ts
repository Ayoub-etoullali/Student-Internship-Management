import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../model/Etudiant.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EtudiantService} from "../../services/etudiant/etudiant.service";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit  {

  editEtudiantFormGroup!: FormGroup;
  etudiant!: Etudiant;
  studentObj: any;
  markObj: any;
  id: any;

  constructor(private fb: FormBuilder, public etudiantService: EtudiantService, private route: ActivatedRoute, private router: Router) { //route : pour obtient le id qui est dans la route{ }
  }
  ngOnInit(): void {
      this.etudiantService.getEtudiant(1).subscribe({
        next: (etudiant) => {
          this.etudiant = etudiant;
          this.editEtudiantFormGroup  = this.fb.group({
            nom: this.fb.control(this.etudiant.nom),
            prenom: this.fb.control(this.etudiant.prenom),
            username: this.fb.control(this.etudiant.username),
            password: this.fb.control(this.etudiant.password),
            email: this.fb.control(this.etudiant.email),
            telephone: this.fb.control(this.etudiant.telephone),
            adresse: this.fb.control(this.etudiant.adresse),
            filiere: this.fb.control(this.etudiant.filiere),
            cin: this.fb.control(this.etudiant.cin),
            cne: this.fb.control(this.etudiant.cne),
          });
        }, error: err => {
          console.log(err);
        }
      })
  }
  Edit() {
    this.router.navigateByUrl("/navbar/edit-etudiant/"+1);
  }

}
