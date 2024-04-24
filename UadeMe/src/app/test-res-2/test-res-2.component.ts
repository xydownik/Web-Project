import {Component, OnInit} from '@angular/core';
import { TestRes2 } from '../test-res-2';
import { Chart } from 'chart.js/auto';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';
import {TestRes1} from "../test-res-1";
import {TestResultService} from "../test-result.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-test-res-2',
  standalone: true,
  imports: [RadarChartComponent, NgIf,],
  templateUrl: './test-res-2.component.html',
  styleUrl: './test-res-2.component.css'
})
export class TestRes2Component implements OnInit{

  testResults: TestRes2 | undefined


  constructor(private testResultService: TestResultService) {
  }

  ngOnInit(): void {
    this.testResultService.getTestResult("test2").subscribe(
      result => {
        this.testResults = result
        console.log(this.testResults);
      }
    )
  }


}

