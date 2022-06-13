import { Component } from '@angular/core';
import { QUESTIONS } from './core/const/questions';

interface examRow {
  id: number;
  answer: any;
  selectedOption: any;
  isCorrect: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sas-exam';
  questions = QUESTIONS;
  results = '';

  exam: examRow[] = [];
  showPoints: boolean = false;
  constructor() {
    this.results = '0 / ' + this.questions.length;
  }
  selectOption(question_id: number, selectedOption: any, question: any) {
    selectedOption = selectedOption.target.value.toString().trim();
    const answer = question.answer.toString().trim();
    console.log(selectedOption, answer, selectedOption === answer);
    const isCorrect = !!(selectedOption === answer);

    if (this.exam && this.exam.length && this.exam.some((k) => k.id === question_id)) {
      
        this.exam.forEach((ex) => {
          if (ex.id === question_id) {
            ex.selectedOption = selectedOption;
            ex.isCorrect = isCorrect;
          }
        });
      
    } else {
      this.exam.push({ id: question_id, answer, selectedOption, isCorrect });
    }
    console.log(this.exam)
    console.log(this.exam.filter((k) => k.isCorrect))

    const successAnswer = this.exam.filter((k) => k.isCorrect).length;
    this.results = successAnswer + ' / ' + this.questions.length;
    console.log(this.results, successAnswer);
  }
}
