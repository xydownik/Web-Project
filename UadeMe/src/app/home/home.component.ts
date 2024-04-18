import { Component } from '@angular/core';
import {BeginComponent} from "../begin/begin.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RoadmapComponent} from "../roadmap/roadmap.component";
import {SpecialsComponent} from "../specials/specials.component";
import {UniversitiesComponent} from "../universities/universities.component";
import {WhyweComponent} from "../whywe/whywe.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TestResultsComponent } from '../test-results/test-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
      RouterModule,
        BeginComponent,
        FooterComponent,
        HeaderComponent,
        RoadmapComponent,
        SpecialsComponent,
        UniversitiesComponent,
        WhyweComponent,
        TestResultsComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
