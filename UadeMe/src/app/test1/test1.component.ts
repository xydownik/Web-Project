import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {Test} from "../test";

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
export class Test1Component {

  test: Test = {
    variants: [
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
      [{text: 'Да', answer: 'a'}, {text: 'Нет', answer: 'b'}],
    ],
    questions: [
      "Вопрос 1",
      "Вопрос 2",
      "Вопрос 3",
      "Вопрос 4",
      "Вопрос 5",
      "Вопрос 6",
      "Вопрос 7",
      "Вопрос 8",
      "Вопрос 9",
      "Вопрос 10",],
  };

  currentQuestionIndex: number = 0;
  isTestCompleted: boolean = false;
  isTestStarted: boolean = false;

  answers : boolean[] = []

  constructor(private router: Router, private testStatusService: TestStatusService) {
    this.isTestCompleted = testStatusService.isTestCompleted('test1')
    this.isTestStarted = testStatusService.isTestStarted('test1')
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

  answerQuestion(answer: boolean) {
    this.answers[this.currentQuestionIndex] = answer;
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
