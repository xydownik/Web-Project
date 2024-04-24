import {Component, OnInit} from '@angular/core';
import { TestRes1 } from '../test-res-1';
import {Router} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {TestService} from "../test.service";
import {TestResultService} from "../test-result.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-test-res-1',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './test-res-1.component.html',
  styleUrl: './test-res-1.component.css'
})
export class TestRes1Component implements OnInit{

  testResults : TestRes1 | undefined;

  constructor(private testResultService: TestResultService) {
  }

  ngOnInit(): void {
    this.testResultService.getTestResult("test1").subscribe(
      result => {
        this.testResults = result

      }
    )
  }





}
