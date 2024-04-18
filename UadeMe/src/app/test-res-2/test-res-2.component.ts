import { Component } from '@angular/core';
import { TestRes2 } from '../test-res-2';
import { Chart } from 'chart.js/auto';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';


@Component({
  selector: 'app-test-res-2',
  standalone: true,
  imports: [RadarChartComponent, ],
  templateUrl: './test-res-2.component.html',
  styleUrl: './test-res-2.component.css'
})
export class TestRes2Component {
  // userStats get from backend part 
    userStats = {
    "extreme": 6,
    "people": 7, 
    "practice": 4, 
    "research": 3,
    "aesthetics": 2,
    "economic": 1 
    }; 
}; 

