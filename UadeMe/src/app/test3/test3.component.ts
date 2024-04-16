import { Component } from '@angular/core';
import {Test} from "../test";
import {Router} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css','.././test1/test1.component.css']
})
export class Test3Component {

  test: Test = {
    questions: [
      "Выберите карту",
      "Выберите карту",
      "Выберите карту",
      "Выберите карту",
    ],
    variants: [
      [{text: 'Скорость - ваше второе имя', answer: 'Катализатор'}, {text: 'У вас все дела разложены по полочкам', answer: 'Планер'}],
      [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}],
      [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}],
      [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}],
    ]
  }

  // logicAnswers: boolean[][] = [
  //   [false, false],
  //   [false, false],
  //   [false, false],
  //   [false, false],
  // ];

  currentQuestionIndex: number = 0;
  isTestCompleted: boolean = false;
  isTestStarted: boolean = false;
  firstCardStatus: boolean = false;
  secondCardStatus: boolean = false;
  answers: string[] = []

  constructor(private router: Router, private testStatusService: TestStatusService) {
    this.isTestCompleted = testStatusService.isTestCompleted('test3')
    this.isTestStarted = testStatusService.isTestStarted('test3')
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

  answerQuestion() {
    // this.logicAnswers[this.currentQuestionIndex][0] = this.firstCardStatus;
    // this.logicAnswers[this.currentQuestionIndex][1] = this.secondCardStatus;
    if(this.firstCardStatus) this.answers.push(this.test.variants[this.currentQuestionIndex][0].answer.toString())
    if(this.secondCardStatus) this.answers.push(this.test.variants[this.currentQuestionIndex][1].answer.toString())
    this.firstCardStatus = this.secondCardStatus = false;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.test.questions.length) {
      this.isTestCompleted = true;
      this.testStatusService.setTestCompleted('test3')
      this.router.navigate(['home', 'test-page', 'tests']);
    }

    // this.answers = this.logicAnswers.reduce((acc : string[], row, i) => {
    //   row.forEach((isSelected, j) => {
    //     if (isSelected) {
    //       acc.push(this.test.variants[i][j].answer.toString());
    //     }
    //   });
    //   return acc;
    // }, []);
    console.log(this.answers)

  }

  chooseCard(index: number) {
    index == 0 ? this.firstCardStatus = !this.firstCardStatus : this.secondCardStatus = !this.secondCardStatus;
  }

  startQuiz() {
    this.isTestStarted = true;
    this.testStatusService.setTestStarted('test3')
  }

  calculateProgress() {
    const completedTestsCount = this.answeredQuestionsCount - 1;
    return (completedTestsCount / this.totalQuestionsCount) * 100;
  }

}
