import { TestRes2Component } from './../test-res-2/test-res-2.component';
import { TestRes1Component } from './../test-res-1/test-res-1.component';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { RadarChartComponent } from '../radar-chart/radar-chart.component';
=======
import {RouterModule} from "@angular/router";
>>>>>>> 2cfc221ff6cf8ef10a00700a57c74f84c9f48b47

@Component({
  selector: 'app-test-results',
  standalone: true,
  imports: [
<<<<<<< HEAD
    TestRes1Component, 
    TestRes2Component,

=======
    TestRes1Component,
    TestRes2Component,
    RouterModule
>>>>>>> 2cfc221ff6cf8ef10a00700a57c74f84c9f48b47
  ],
  templateUrl: './test-results.component.html',
  styleUrl: './test-results.component.css'
})
export class TestResultsComponent {

}
