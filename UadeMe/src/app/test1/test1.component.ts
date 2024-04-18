import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {Test} from "../test";
import {TestService} from "../test.service";

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

  // test: Test = {
  //   variants: [
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //     [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
  //   ],
  //   questions: [
  //     "Вопрос 1",
  //     "Вопрос 2",
  //     "Вопрос 3",
  //     "Вопрос 4",
  //     "Вопрос 5",
  //     "Вопрос 6",
  //     "Вопрос 7",
  //     "Вопрос 8",
  //     "Вопрос 9",
  //     "Вопрос 10",],
  // };

  test: Test = {questions: [], variants: []};

  currentQuestionIndex: number = 0;
  isTestCompleted: boolean = false;
  isTestStarted: boolean = false;

  answers : string[] = []

  constructor(private router: Router, private testStatusService: TestStatusService, private testService: TestService) {
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

}
