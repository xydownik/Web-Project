import { TestRes2Component } from './../test-res-2/test-res-2.component';
import { TestRes1Component } from './../test-res-1/test-res-1.component';
import { Component } from '@angular/core';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';

@Component({
  selector: 'app-test-results',
  standalone: true,
  imports: [
    TestRes1Component, 
    TestRes2Component,

  ],
  templateUrl: './test-results.component.html',
  styleUrl: './test-results.component.css'
})
export class TestResultsComponent {

}
