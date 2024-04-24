import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {Test} from "../test";
import {TestService} from "../test.service";
import {TestResultService} from "../test-result.service";

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component implements OnInit{

  test: Test = {questions: [], variants: []};

  currentQuestionIndex: number = 0;
  isTestCompleted: boolean = false;
  isTestStarted: boolean = false;

  answers : string[] = []

  constructor(private router: Router, private testStatusService: TestStatusService, private testService: TestService,
              private testResultService: TestResultService) {
    this.isTestCompleted = testStatusService.isTestCompleted('test1')
    this.isTestStarted = testStatusService.isTestStarted('test1')
  }

  ngOnInit(): void {
    this.getTest();
  }

  getTest(): void {
    const testType = 'test1';
    this.testService.getTestByType(testType)
      .subscribe(test => {
        this.test = test;
        console.log(test)
      });
  }

  get answeredQuestionsCount(): number {
    return this.currentQuestionIndex + 1;
  }

  get totalQuestionsCount(): number {
    return this.test.questions.length;
  }

  get currentQuestion(): string {
    return this.test.questions[this.currentQuestionIndex];
  }

  answerQuestion(status: boolean, answer: string) {
    if(status) this.answers.push(answer)
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.test.questions.length) {
      this.submitTestResult(this.answers)
      this.isTestCompleted = true;
      this.testStatusService.setTestCompleted('test1')
      this.router.navigate(['home', 'test-page', 'tests']);
    }
    console.log(this.answers)
  }

  startQuiz() {
    this.isTestStarted = true;
    this.testStatusService.setTestStarted('test1')
  }

  calculateProgress() {
    const completedTestsCount = this.answeredQuestionsCount - 1;
    return (completedTestsCount / this.totalQuestionsCount) * 100;
  }

  submitTestResult(testResultData: any) {
    this.testResultService.saveTestResult("test1", testResultData)
      .subscribe(
        response => {
          console.log('Результат теста успешно сохранен:', response);
        },
        error => {
          console.error('Ошибка при сохранении результатов теста:', error);
        }
      );
  }

}
