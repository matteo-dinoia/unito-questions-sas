import { Component } from '@angular/core';
import { QUESTIONS } from './core/const/questions';

class examRow {
  id!: number;
  answer: string = '';
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

    const questionIndex = this.exam.find((k) => k.id === question.id);
    if (questionIndex) {
      this.exam.forEach((exam) => {
        if (exam.id === questionIndex.id) exam.update(selectedOption);
      });
    }
    this.setScorePoint();
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
