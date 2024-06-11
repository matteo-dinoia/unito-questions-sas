import { Component } from '@angular/core';
import { QUESTIONS } from './core/consts/mocks/questions.const';
import { examRow, Question } from './core/models/question.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  questions: Question[] = QUESTIONS;
  scorePoint: number = 0;
  exam: examRow[] = [];

  showPoints: boolean = false;
  liveReview: boolean = true;

  constructor() {
    this.initExam();
  }

  private initExam() {
    this.questions.forEach((question, index) => this.exam.push(new examRow(question, index)));
  }

  private updateExamRow(selectedOption: any, rowId: number) {
    this.exam.forEach((exam) => {
      if (exam.id === rowId) exam.update(selectedOption);
    });
  }

  selectOption(selectedOption: any, row: examRow) {
    selectedOption = selectedOption.target.value;
    this.updateExamRow(selectedOption, row.id);
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
