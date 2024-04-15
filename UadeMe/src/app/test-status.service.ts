import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestStatusService {

  private testsCompleteStatus: { [key: string]: boolean } = {};
  private testsStartStatus: { [key: string]: boolean } = {};

  constructor() { }

  setTestCompleted(testName: string) {
    this.testsCompleteStatus[testName] = true;
  }

  isTestCompleted(testName: string): boolean {
    return this.testsCompleteStatus[testName] || false;
  }

  setTestStarted(testName: string) {
    this.testsStartStatus[testName] = true;
  }

  isTestStarted(testName: string): boolean {
    return this.testsStartStatus[testName] || false;
  }

}
