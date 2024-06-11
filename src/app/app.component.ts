import { Component } from '@angular/core';
import { QUESTIONS } from './core/consts/mocks/questions.const';
import { examRow, Question } from './core/models/question.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  scorePoint: number = 0;
  exam: examRow[] = [];

  showPoints: boolean = false;
  liveReview: boolean = true;

  constructor() {
    this.initExam();
  }

  private initExam() {
    QUESTIONS.forEach((question) => this.exam.push(new examRow(question)));
  }

  private updateExamRow(selectedOption: any, rowId: number) {
    const row = this.exam[rowId];
    if(row) row.update(selectedOption);
  }

  selectOption(selectedOption: any, rowId: number) {
    selectedOption = selectedOption.target.value;
    this.updateExamRow(selectedOption, rowId);
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
