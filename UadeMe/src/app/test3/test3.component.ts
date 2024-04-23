import { Component } from '@angular/core';
import {Test} from "../test";
import {Router} from "@angular/router";
import {TestStatusService} from "../test-status.service";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Variant} from "../variant";
import {TestResultService} from "../test-result.service";

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
      "Выберите карту",
      "Выберите карту",
      "Выберите карту",
      "Выберите карту",
      "Выберите карту",
      "Выберите карту",
      "Выберите карту",
    ],
    variants: [
      [{text: 'Скорость - ваше второе имя', answer: 'Катализатор'}, {text: 'У вас все дела разложены по полочкам', answer: 'Планер'}],
      [{text: 'Ваше любимое время года?', answer: 'Лето'},
      {text: 'Ваше любимое животное?', answer: 'Собака'}],

      [{text: 'Какой ваш любимый цвет?', answer: 'Синий'},
      {text: 'Какое ваше любимое блюдо?', answer: 'Пицца'}],

      [{text: 'Какие виды спорта вам нравятся?', answer: 'Футбол'},
      {text: 'Какое ваше любимое время суток?', answer: 'Вечер'}],

      [{text: 'Что вы предпочитаете: кофе или чай?', answer: 'Кофе'},
      {text: 'Какой ваш любимый фильм?', answer: 'Звездные войны'}],

      [{text: 'Какое ваше любимое музыкальное направление?', answer: 'Рок'},
      {text: 'Как вы предпочитаете проводить выходные?', answer: 'С друзьями'}],

      [{text: 'Какие виды музыкальных инструментов вы играете?', answer: 'Гитара'},
      {text: 'Как вы относитесь к путешествиям?', answer: 'Обожаю'}],

      [{text: 'Как вы предпочитаете проводить свободное время?', answer: 'Чтение'},
      {text: 'Какое ваше любимое место отдыха?', answer: 'Горы'}],

      [{text: 'Как вы относитесь к активным видам отдыха?', answer: 'Положительно'},
      {text: 'Что вы предпочитаете: книги или фильмы?', answer: 'Фильмы'}],

      [{text: 'Какой ваш любимый вид транспорта?', answer: 'Автомобиль'},
      {text: 'Какое ваше любимое время года?', answer: 'Весна'}],

      [{text: 'Как вы относитесь к плаванию?', answer: 'Обожаю'},
      {text: 'Какой ваш любимый вид домашних животных?', answer: 'Кот'}]

    ]
  }

  currentQuestionIndex: number = 0;
  isTestCompleted: boolean = false;
  isTestStarted: boolean = false;
  firstCardStatus: boolean = false;
  secondCardStatus: boolean = false;
  answers: Variant[] = []

  constructor(private router: Router, private testStatusService: TestStatusService,
              private testResultService: TestResultService) {
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
    if(!this.firstCardStatus && !this.secondCardStatus && this.test.questions.length - this.currentQuestionIndex <= 5) {
      this.addQuestion(this.test.variants[this.currentQuestionIndex][0], this.test.variants[this.currentQuestionIndex][1])
    }
    if(this.firstCardStatus) {
      this.answers.push(this.test.variants[this.currentQuestionIndex][0])
      if(this.answers.length % 2 == 0 && this.test.questions.length - this.currentQuestionIndex > 5) {
        this.addQuestion(this.answers[this.answers.length-2], this.answers[this.answers.length-1])
        this.answers = []
      }
    }
    if(this.secondCardStatus) {
      this.answers.push(this.test.variants[this.currentQuestionIndex][1])
      if(this.answers.length % 2 == 0 && this.test.questions.length - this.currentQuestionIndex > 5) {
        this.addQuestion(this.answers[this.answers.length-2], this.answers[this.answers.length-1])
        this.answers = []
      }
    }
    this.firstCardStatus = this.secondCardStatus = false;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.test.questions.length) {
      this.submitTestResult(this.answers.map(variant => variant.answer))
      this.isTestCompleted = true;
      this.testStatusService.setTestCompleted('test3')
      this.router.navigate(['home', 'test-page', 'tests']);
    }

    console.log(this.answers)

  }

  chooseCard(index: number) {
    index == 0 ? this.firstCardStatus = !this.firstCardStatus : this.secondCardStatus = !this.secondCardStatus;
  }

  addQuestion(variant1: Variant, variant2: Variant) {
    this.test.questions.push("Выберите карту")
    this.test.variants.push([variant1, variant2]);
  }

  startQuiz() {
    this.isTestStarted = true;
    this.testStatusService.setTestStarted('test3')
  }

  calculateProgress() {
    const completedTestsCount = this.answeredQuestionsCount - 1;
    return (completedTestsCount / this.totalQuestionsCount) * 100;
  }

  submitTestResult(testResultData: any) {
    this.testResultService.saveTestResult("test3", testResultData)
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
