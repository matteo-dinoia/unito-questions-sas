import { Component } from '@angular/core';
import { QUESTIONS } from './core/const/questions';

class examRow {
  id!: number;
  answer: string = '';
  question: any = QUESTIONS;
  questions_options: any = [];
  selectedOption: string = '';
  isCorrect: boolean = false;
  showCheckValidity: any = {
    error: false,
    success: false,
  };

  constructor(question: any = null) {
    if (question) {
      this.id = question.id;
      this.answer = question.answer;
      this.question = question.questions;
      this.questions_options = question.options;
    }
  }
  update(selectedOption: any) {
    selectedOption = selectedOption;

    this.selectedOption = selectedOption ? selectedOption : '';
    this.isCorrect =
      this.answer.toString().trim() === this.selectedOption.toString().trim();
    this.showCheckValidity.error = !!this.selectedOption && !this.isCorrect;
    this.showCheckValidity.success = !!this.selectedOption && this.isCorrect;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  questions = QUESTIONS;
  scorePoint: number = 0;
  exam: examRow[] = [];

  showPoints: boolean = false;
  liveReview: boolean = true;

  constructor() {
    this.initExam();
  }

  ngOnit() {}

  private initExam() {
    this.questions.forEach((question) => {
      this.exam.push(new examRow(question));
    });
  }

  selectOption(selectedOption: any, question: any) {
    selectedOption = selectedOption.target.value;
    this.updateExamRow(selectedOption, question);
    this.setScorePoint();
  }

  private updateExamRow(selectedOption: any, question: any) {
    this.exam.forEach((exam) => {
      if (exam.id === question.id) exam.update(selectedOption);
    });
  }

  resetExam() {
    this.exam = [];
    this.scorePoint = 0;
    this.initExam();
  }

  private setScorePoint() {
    const successCases = this.exam.filter((k) => k.isCorrect).length;
    this.scorePoint = successCases ? successCases : 0;
  }
}
