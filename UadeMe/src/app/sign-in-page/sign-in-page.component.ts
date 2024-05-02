import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {

  username: string = ""
  email: string = ""
  password: string = ""
  confirmPassword: string = ""

  constructor(private loginService: AuthenticationService,
              private router: Router) {}

  register() {
    if(this.password != this.confirmPassword) {
      alert("Passwords don't match!");
    }
    else if(!this.isValidEmail(this.email)) {
      alert("Email format is not correct!");
    }
    else if(this.username.length < 5) {
      alert("Username too short!");
    }

    else if(this.username.length >= 5 && this.isValidEmail(this.email) && this.password == this.confirmPassword) {
      this.loginService.register(this.email, this.username, this.password).subscribe(
        response => {
          console.log(response);
          alert("Registration successful!");
          this.router.navigate(['']);
        },
        error => {
          console.error('Error occurred:', error);
          alert("Registration failed. Please try again later.");
        }
      );
    }
  }

  isValidEmail(email: string): boolean {
    const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

}
