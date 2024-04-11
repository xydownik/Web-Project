import { Component } from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";
import {TestPageComponent} from "../test-page/test-page.component";

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [
    RouterModule,
    TestPageComponent,
  ],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css'
})
export class RoadmapComponent {

}
