import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { ItemTab, Tabs } from '@app/core/models/components/tab-faq.model';
import { LanguageService } from '@app/core/services/language.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements AfterViewInit, OnInit {
  constructor(private cdr: ChangeDetectorRef, private _lang: LanguageService) {}


  panelMaxHeight = 272; // 請根據您的內容調整此值
  isPanelOpen: { [key: number]: boolean } = {};
  questions: ItemTab[] = [];
  tab1: ItemTab[] = [];
  tab2: ItemTab[] = [];
  tab3: ItemTab[] = [];
  tab4: ItemTab[] = [];
  innerWidth!: number;

  tabs: Tabs[] = [];

  activeIndex = 0;
  windowResize$ = new Subject<number>();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowResize$.next((event.target as Window)?.innerWidth);
  }


  selectTab(index: number) {
    this.activeIndex = index;
    this.isPanelOpen = {};
  }

  ngOnInit(): void {
    this.windowResize$.pipe(debounceTime(100)).subscribe((width) => {
      this.innerWidth = width;
    });
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.tab1 = [
      {
        id:0,
        question: 'FAQ.Question.UserGuide',
        answer: 'FAQ.Answer.UserGuide',
      },
      {
        id:1,
        question: 'FAQ.Question.Activated',
        answer: 'FAQ.Answer.Activated',
      },
      {
        id:2,
        question: 'FAQ.Question.HowToUse',
        answer: 'FAQ.Answer.HowToUse',
      },
      {
        id:3,
        question: 'FAQ.Question.Amount',
        answer: 'FAQ.Answer.Amount',
      },
      {
        id:4,
        question: 'FAQ.Question.UsingTime',
        answer: 'FAQ.Answer.UsingTime',
      },
    ];

    this.tab2 = [
      {
        id:5,
        question: 'FAQ.Question.EMICalculationFormula',
        answer: 'FAQ.Answer.EMICalculationFormula',
      },
      {
        id:6,
        question: 'FAQ.Question.InterestCalculationFormula',
        answer: 'FAQ.Answer.InterestCalculationFormula',
      },
      {
        id:7,
        question: 'FAQ.Question.RepaymentDueDateAmount',
        answer: 'FAQ.Answer.RepaymentDueDateAmount',
      },
      {
        id:8,
        question: 'FAQ.Question.RepaymentChannels',
        answer: 'FAQ.Answer.RepaymentChannels',
      },
      {
        id:9,
        question: 'FAQ.Question.EarlyTerminationTerm',
        answer: 'FAQ.Answer.EarlyTerminationTerm',
      },
    ];
    this.tab3 = [
      {
        id:10,
        question: 'FAQ.Question.LatePayment',
        answer: 'FAQ.Answer.LatePayment',
      },
      {
        id:11,
        question: 'FAQ.Question.ShortPayment',
        answer: 'FAQ.Answer.ShortPayment',
      },
      {
        id:12,
        question: 'FAQ.Question.OverPayment',
        answer: 'FAQ.Answer.OverPayment',
      },
      {
        id:13,
        question: 'FAQ.Question.EarlyPayment',
        answer: 'FAQ.Answer.EarlyPayment',
      },
    ];

    this.tab4 = [
      {
        id:14,
        question: 'FAQ.Question.CustomerInquiriesHandlingPrinciples',
        answer: 'FAQ.Answer.CustomerInquiriesHandlingPrinciples',
      },
    ];
    this.tabs = [
      {
        label: 'FAQ.RegisterAndUseCreditLimit',
        content: this.tab1,
        image_en: {
          img_pc: 'assets/image/faq/pc/register_en.png',
          img_tablet: 'assets/image/faq/tablet/register_en.png',
          img_mobile: 'assets/image/faq/mobile/register_en.png',
        },
        image_vi: {
          img_pc: 'assets/image/faq/pc/register_vi.png',
          img_tablet: 'assets/image/faq/tablet/register_vi.png',
          img_mobile: 'assets/image/faq/mobile/register_vi.png',
        },
      },
      {
        label: 'FAQ.MonthlyPayment',
        content: this.tab2,
        image_en: {
          img_pc: 'assets/image/faq/pc/monthly_payment_en.png',
          img_tablet: 'assets/image/faq/tablet/monthly_payment_en.png',
          img_mobile: 'assets/image/faq/mobile/monthly_payment_en.png',
        },
        image_vi: {
          img_pc: 'assets/image/faq/pc/monthly_payment_vi.png',
          img_tablet: 'assets/image/faq/tablet/monthly_payment_vi.png',
          img_mobile: 'assets/image/faq/mobile/monthly_payment_vi.png',
        },
      },
      {
        label: 'FAQ.PaymentNotice',
        content: this.tab3,
        image_en: {
          img_pc: 'assets/image/faq/pc/payment_notice_en.png',
          img_tablet: 'assets/image/faq/tablet/payment_notice_en.png',
          img_mobile: 'assets/image/faq/mobile/payment_notice_en.png',
        },
        image_vi: {
          img_pc: 'assets/image/faq/pc/payment_notice_vi.png',
          img_tablet: 'assets/image/faq/tablet/payment_notice_vi.png',
          img_mobile: 'assets/image/faq/mobile/payment_notice_vi.png',
        },
      },
      {
        label: 'FAQ.Others',
        content: this.tab4,
        image_en: {
          img_pc: 'assets/image/faq/pc/others_en.png',
          img_tablet: 'assets/image/faq/tablet/others_en.png',
          img_mobile: 'assets/image/faq/mobile/others_en.png',
        },
        image_vi: {
          img_pc: 'assets/image/faq/pc/others_vi.png',
          img_tablet: 'assets/image/faq/tablet/others_vi.png',
          img_mobile: 'assets/image/faq/mobile/others_vi.png',
        },
      },
    ];
    this.cdr.detectChanges();
  }
  toggleAccordion(panelNumber: number): void {
    this.isPanelOpen[Number(panelNumber)] = !this.isPanelOpen[Number(panelNumber)];
  }
  handleImage(item: Tabs):string {
    const width = this.innerWidth ??  window.innerWidth;
      let image = '';
      if (width >= 1024) {
        image = this._lang.getLang() == 'en' ? item.image_en.img_pc : item.image_vi.img_pc;
      } else if (width >= 640) {
        image = this._lang.getLang() == 'en' ? item.image_en.img_tablet : item.image_vi.img_tablet;
      } else {
        image = this._lang.getLang() == 'en' ? item.image_en.img_mobile : item.image_vi.img_mobile;
      }
      return image;
  }
}
