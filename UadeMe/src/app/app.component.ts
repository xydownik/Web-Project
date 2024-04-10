import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { UniversitiesComponent } from './universities/universities.component';
import { SpecialsComponent } from './specials/specials.component';
import { WhyweComponent } from './whywe/whywe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BeginComponent, RoadmapComponent, UniversitiesComponent, SpecialsComponent, 
    WhyweComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  //template: `<h1>Hello World!</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UadeMe';
}


