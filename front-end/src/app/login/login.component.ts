import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: string;

  email : string = '';
  password : string = '';

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      username: this.formBuilder.control(""),
      password: this.formBuilder.control("")
    })
  }

  handleLogin() {
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
    this.authenticationService.login(username, password).subscribe({
      next: (appUser) => {
        this.authenticationService.authenticateUser(appUser).subscribe({
          next: (data) => {
            this.router.navigateByUrl("/navbar/acceuil");
          }
        });
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })
  }

  OnUserLogin(){
    if (this.email == ''){
      alert('please enter your email');
      return;
    }

    if (this.password == ''){
      alert('please enter your password');
      return;
    }

    this.authenticationService.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
  OnSignInWithGoogle(){
    this.authenticationService.googleSignIn();
  }
}
