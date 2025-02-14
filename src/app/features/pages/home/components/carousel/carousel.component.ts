import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LanguageService } from '@app/core/services/language.service';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { AlertComponent } from '@app/shared/components/alert/alert.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('h3, p', animate('100ms 100ms ease-out',style({ opacity: 0, transform: 'translateY(10px)' }))),
          query('h3', animate('100ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
          query('p', stagger(150, animate('100ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))), { delay: 100 }),
      ]),
    ])
  ],
})
export class CarouselComponent implements OnInit, AfterViewInit{
  @ViewChild('title1Sub2') private title1Sub2!: TemplateRef<any>;
  @ViewChild('title4Sub2') private title4Sub2!: TemplateRef<any>;
  @ViewChild('titleSub1Alert')  titleSub1Alert!:AlertComponent;
  currentSlide = 0;
  startX = 0;
  arrowIconSize: 'S' | 'M' | 'L' = 'L'
  UIImages: string[] = [];

  UIEnImages = [
    'assets/image/common/what_1_en.png',
    'assets/image/common/what_2_en.png',
    'assets/image/common/what_3_en.png',
    'assets/image/common/what_4_en.png',
  ];
  UIVnImages = [
    'assets/image/common/what_1_vn.png',
    'assets/image/common/what_2_vn.png',
    'assets/image/common/what_3_vn.png',
    'assets/image/common/what_4_vn.png',
  ];
  actionImages = [
    'assets/image/common/action_1.svg',
    'assets/image/common/action_2.svg',
    'assets/image/common/action_3.svg',
    'assets/image/common/action_4.svg',
  ];
  textList: {
      title: string,
      subTitle1: string,
      subTitle2: string,
      subTitle1Class?: string,
      customizeSubTitle2: null | TemplateRef<any>
    }[] = []

  constructor(private languageService: LanguageService) {
    this.updateImages();
    this.languageService.languageChange$.subscribe(() => {
      this.updateImages();
    });
    this.setArrowIconSize();
  }
  ngOnInit() {
      console.log(this.title1Sub2);
      console.log(this.title4Sub2);
  }

  ngAfterViewInit() {
    this.textList = [
      {
        title: 'Carousel.Title1',
        subTitle1: 'Carousel.Title1Sub1',
        subTitle2: 'Carousel.Title1Sub2',
        // subTitle1Class: 'w-[370px]',
        customizeSubTitle2: this.title1Sub2
      },
      {
        title: 'Carousel.Title2',
        subTitle1: 'Carousel.Title2Sub1',
        subTitle2: 'Carousel.Title2Sub2',
        customizeSubTitle2: null
      },
      {
        title: 'Carousel.Title3',
        subTitle1: 'Carousel.Title3Sub1',
        subTitle2: 'Carousel.Title3Sub2',
        customizeSubTitle2: null
      },
      {
        title: 'Carousel.Title4',
        subTitle1: 'Carousel.Title4Sub1',
        subTitle2: 'Carousel.Title4Sub2',
        customizeSubTitle2: this.title4Sub2
      }
    ];
    this.titleSub1Alert?.closeAlert();
  }

  updateImages() {
    const lang = this.languageService.getLang();
    this.UIImages = lang === 'vi-vn' ? this.UIVnImages : this.UIEnImages;
  }

  setArrowIconSize() {
    if(window.innerWidth < 768) {
      this.arrowIconSize = 'S'
    }else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      this.arrowIconSize = 'M'
    }
  }

  nextSlide() {
    if(this.currentSlide === 3) return
    this.currentSlide = (this.currentSlide + 1) % this.UIImages.length;
  }

  previousSlide() {
    if(this.currentSlide === 0) return
    this.currentSlide = (this.currentSlide - 1 + this.UIImages.length) % this.UIImages.length;
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    const diffX = endX - this.startX;

    if (Math.abs(diffX) > 30) {
      if (diffX > 0) {
        this.previousSlide();
      } else {
        this.nextSlide();
      }
    }
  }

  clickIcon1() {
    this.titleSub1Alert?.showAlert();
  }
}

