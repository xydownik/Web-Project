import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { UniversitiesComponent } from './universities/universities.component';
import { SpecialsComponent } from './specials/specials.component';
import { WhyweComponent } from './whywe/whywe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {TestPageComponent} from "./test-page/test-page.component";
import {HomeComponent} from "./home/home.component";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    BeginComponent,
    RoadmapComponent,
    UniversitiesComponent,
    SpecialsComponent,
    WhyweComponent,
    HeaderComponent,
    FooterComponent,
    TestPageComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UadeMe';
}


