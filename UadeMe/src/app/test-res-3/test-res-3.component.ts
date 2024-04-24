import { Component } from '@angular/core';
import {TestResultService} from "../test-result.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-test-res-3',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './test-res-3.component.html',
  styleUrl: './test-res-3.component.css'
})
export class TestRes3Component {

  testResults: string[] | undefined


  constructor(private testResultService: TestResultService) {
  }

  ngOnInit(): void {
    this.testResultService.getTestResult("test3").subscribe(
      result => {
        this.testResults = result
        console.log(this.testResults);
      }
    )
  }

}
