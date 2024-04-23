import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {RadarChartComponent} from "../radar-chart/radar-chart.component";

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    NgIf,
    FooterComponent,
    RouterLink,
    RadarChartComponent
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {

  constructor(private router: Router, private testStatusService: TestStatusService) {}

  navigateToTest(test: number) {
    this.router.navigate(['home', 'test-page', 'tests', test]);
  }

  isTestCompleted(testName: string): boolean {
    return this.testStatusService.isTestCompleted(testName);
  }

  calculateProgress() {
    const completedTestsCount = Number(this.isTestCompleted('test1')) +
      Number(this.isTestCompleted('test2')) + Number(this.isTestCompleted('test3'));
    return (completedTestsCount / 3) * 100;
  }

  checkComplition(): boolean{
    return this.isTestCompleted('test1') && this.isTestCompleted('test2') && this.isTestCompleted('test3')
  }

}
