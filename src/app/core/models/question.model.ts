export interface Question {
  question: string;
  answer: boolean | string;
  options: string[];
  imgName?: string;
  subQuestion?: string
  answer_reason?: string
}

export class examRow {
  question!: Question;
  answer: string | boolean = '';
  questions_options: any = [];
  selectedOption: string = '';
  isCorrect: boolean = false;
  showCheckValidity: any = {
    error: false,
    success: false,
  };

  constructor(question: Question) {
    if (question) {
      this.answer = question.answer;
      this.question = question;
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
