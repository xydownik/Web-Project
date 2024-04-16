import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {Test} from "../test";
import {TestService} from "../test.service";

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css', '.././test1/test1.component.css']
})
export class Test2Component implements OnInit{

  // test: Test = {
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
  //     "Вопрос 10",
  //   ],
  //   variants: [
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //     [{text: 'Variant 1', answer: 'a'}, {text: 'Variant 2', answer: 'b'}, {text: 'Variant 3', answer: 'c'}],
  //   ]
  // }

  test: Test = {questions: [], variants: []}

  answers: string[] = [];
  currentQuestionIndex: number = 0;
  isTestCompleted: boolean = false;
  isTestStarted: boolean = false;

  constructor(private router: Router, private testStatusService: TestStatusService, private testService: TestService) {
    this.isTestCompleted = testStatusService.isTestCompleted('test2')
    this.isTestStarted = testStatusService.isTestStarted('test2')
  }

  ngOnInit(): void {
    this.getTest();
  }

  getTest(): void {
    const testType = 'test2';
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

  answerQuestion(answer: string) {
    this.answers[this.currentQuestionIndex] = answer;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.test.questions.length) {
      this.isTestCompleted = true;
      this.testStatusService.setTestCompleted('test2')
      this.router.navigate(['home', 'test-page', 'tests']);
    }
    console.log(this.answers)
  }

  startQuiz() {
    this.isTestStarted = true;
    this.testStatusService.setTestStarted('test2')
  }

  calculateProgress() {
    const completedTestsCount = this.answeredQuestionsCount - 1;
    return (completedTestsCount / this.totalQuestionsCount) * 100;
  }

  filterLetters(answer: string): string {
    return answer.replace(/[^a-zA-Z]/g, '');
  }

}