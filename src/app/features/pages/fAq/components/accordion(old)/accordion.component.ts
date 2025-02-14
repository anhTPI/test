import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}

  panelMaxHeight = 272; // 請根據您的內容調整此值
  isPanelOpen: { [key: number]: boolean } = {};
  questions: {
    question: string;
    answer: string;
    customizedAnswer?: null | TemplateRef<any>;
  }[] = [];

  ngAfterViewInit(): void {
    this.questions = [
      {
        question: 'FAQ.Question.Activated',
        answer: 'FAQ.Answer.Activated',
      },
      {
        question: 'FAQ.Question.HowToUse',
        answer: 'FAQ.Answer.HowToUse',
      },
      {
        question: 'FAQ.Question.Amount',
        answer: 'FAQ.Answer.Amount',
      },
      {
        question: 'FAQ.Question.UsingTime',
        answer: 'FAQ.Answer.UsingTime',
      },
      {
        question: 'FAQ.Question.EMICalculationFormula',
        answer: 'FAQ.Answer.EMICalculationFormula',
      },
      {
        question: 'FAQ.Question.RepaymentDueDateAmount',
        answer: 'FAQ.Answer.RepaymentDueDateAmount',
      },
      {
        question: 'FAQ.Question.InterestCalculationFormula',
        answer: 'FAQ.Answer.InterestCalculationFormula',
      },
      {
        question: 'FAQ.Question.RepaymentChannels',
        answer: 'FAQ.Answer.RepaymentChannels',
      },
      {
        question: 'FAQ.Question.LatePayment',
        answer: 'FAQ.Answer.LatePayment',
      },
      {
        question: 'FAQ.Question.ShortPayment',
        answer: 'FAQ.Answer.ShortPayment',
      },
      {
        question: 'FAQ.Question.OverPayment',
        answer: 'FAQ.Answer.OverPayment',
      },
      {
        question: 'FAQ.Question.EarlyPayment',
        answer: 'FAQ.Answer.EarlyPayment',
      },
      {
        question: 'FAQ.Question.EarlyTerminationTerm',
        answer: 'FAQ.Answer.EarlyTerminationTerm',
      },
      // {
      //   question: 'FAQ.Question.PartialPayment',
      //   answer: 'FAQ.Answer.PartialPayment',
      // },
      {
        question: 'FAQ.Question.UserGuide',
        answer: 'FAQ.Answer.UserGuide',
      },
      {
        question: 'FAQ.Question.CustomerInquiriesHandlingPrinciples',
        answer: 'FAQ.Answer.CustomerInquiriesHandlingPrinciples',
      },
    ];

    this.cdr.detectChanges();
  }
  toggleAccordion(panelNumber: number): void {
    this.isPanelOpen[panelNumber] = !this.isPanelOpen[panelNumber];
  }
}
