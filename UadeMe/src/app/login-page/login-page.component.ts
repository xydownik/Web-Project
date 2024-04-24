import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent{

  username: string = "";
  password: string = "";


  constructor(private loginService: AuthenticationService,
              private router: Router) {}

  login() {
    this.loginService.login(this.username, this.password)
      .subscribe( data => {
        // this.logged = true;
        this.loginService.setLoggedStatus(true)
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("username", this.username);
        console.log(localStorage.getItem("access"));
        this.router.navigate(['']);
      })
  }



}
