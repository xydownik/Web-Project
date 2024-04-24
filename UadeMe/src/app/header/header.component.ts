import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TestPageComponent} from "../test-page/test-page.component";
import {HomeComponent} from "../home/home.component";
import {UniversitiesComponent} from "../universities/universities.component";
import {UniListComponent} from "../uni-list/uni-list.component";
import {SpecialsComponent} from "../specials/specials.component";
import {AuthenticationService} from "../authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TestPageComponent, UniListComponent, SpecialsComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  constructor(protected loginService: AuthenticationService) {}

  logout() {
    this.loginService.setLoggedStatus(false)
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    console.log(localStorage.getItem("access"))
  }

  protected readonly localStorage = localStorage;
}
