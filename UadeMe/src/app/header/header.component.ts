import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {TestPageComponent} from "../test-page/test-page.component";
import {HomeComponent} from "../home/home.component";
import {UniversitiesComponent} from "../universities/universities.component";
import {UniListComponent} from "../uni-list/uni-list.component";
import {SpecialsComponent} from "../specials/specials.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,TestPageComponent, UniListComponent, SpecialsComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
