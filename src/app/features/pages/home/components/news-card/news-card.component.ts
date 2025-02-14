import { Component, OnInit, OnChanges, SimpleChanges, Input, HostListener, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import { chunkArray } from '@app/core/utils/chunk-array.util';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import * as flickity from 'flickity';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit, OnDestroy, AfterViewInit {

  fillColor = '';
  @Input() date: string= '2023.08.07';
  @Input() title: string = '';
  @Input() direction: 'left' | 'right' = 'left';
  @Input() disabled!: boolean;
  @Input() news!: any[];
  @ViewChild('carouselSM') carouselSM!: ElementRef;
  @ViewChild('carouselMD') carouselMD!: ElementRef;
  @ViewChildren('carouselCellMD') carouselCells!: QueryList<ElementRef>;
  @ViewChildren('carouselCellImageMD')
  carouselCellImages!: QueryList<ElementRef>;
  constructor(protected localize: LocalizeRouterService){}
  innerWidth!: number;
  slides!: any[];
  active: number = 0;
  flick!: flickity;
  windowResize$ = new Subject<number>();
  arrowIconSize: 'S' | 'M' | 'L' = 'L'
  trackByFn(index: number, item: any) {
    return index; // Hoặc return item nếu item là unique
  }
  // nextSlide() {
  //   if(this.currentSlide === 3) return
  //   this.currentSlide = (this.currentSlide + 1) % this.UIImages.length;
  // }

  // previousSlide() {
  //   if(this.currentSlide === 0) return
  //   this.currentSlide = (this.currentSlide - 1 + this.UIImages.length) % this.UIImages.length;
  // }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowResize$.next((event.target as Window)?.innerWidth);
  }

  refactorArrSlides(){
    return chunkArray(this.news,3)
  }
  get carousel(): ElementRef {
    return  this.carouselMD;
  }
  private _select(index: number): void {
    if (index === undefined) {
      this.flick.playPlayer();
      return;
    }
    if (this.slides.length >= 3) {
      if (index != this.active) {
        this.flick.select(index);
      } else {
        this.flick.playPlayer();
      }
    }
  }
  get isWindowSM(): boolean {
    return this.innerWidth < 768;
  }
  private _resizeCarousel() {
    const flick = this._getFlickity(
      this.innerWidth,
      this.carousel,
      this.isWindowSM
    );
    if (!flick) {
      return;
    }
    this.flick = flick;
    this.flick.reposition();
    this.flick.resize();
    this.flick.select(this.active, true, true);
    this._alignCarouselItem();
    this._resetPrevNextButton(this.innerWidth >= 1920 ? true : false);

    // setTimeout(() => {
    //   if (this.innerWidth < 768) {
    //     document
    //       .querySelector('.flickity-viewport')
    //       ?.setAttribute('style', 'height:10px');
    //   } else {
    //     document
    //       .querySelector('.flickity-viewport')
    //       ?.setAttribute('style', 'height:60px');
    //   }
    // });
  }

  private _getFlickity(
    innerWidth: number,
    carousel: ElementRef,
    isSMCarousel: boolean
  ) {
    if (!carousel) {
      return null;
    }

    let wrapAround = false;
    let pageDots = false;
    let contain = false;
    let customizeDrag = false;

    wrapAround = true;
    contain = false;
    pageDots = true;
    const groupCells =true
    customizeDrag = true;
    let minDifferX = 9999;
    let minDifferIndex = -1;
    const flick = new flickity(carousel.nativeElement, {
      draggable: true,
      wrapAround,
      pageDots,
      contain,
      prevNextButtons: innerWidth < 768 ? false : true,
      initialIndex: this.active,
      autoPlay: false,
      freeScroll: false,
      pauseAutoPlayOnHover: false,
      groupCells,
      on: {
        ready: () => {
          const next = document.querySelector(
            '.flickity-prev-next-button.next'
          );
          const previous = document.querySelector(
            '.flickity-prev-next-button.previous'
          );

          next?.removeChild(next.childNodes[0]);
          previous?.removeChild(previous.childNodes[0]);
          const img = document.createElement('img');
          const previousImg = document.createElement('img');
          img.src = 'assets/image/common/arrow_right.svg';
          previousImg.src = 'assets/image/common/arrow_right.svg';
          previousImg.classList.add('rotate-180');
          next?.appendChild(img);
          previous?.appendChild(previousImg);
        },
        change: (index) => {
          if (isSMCarousel !== this.isWindowSM) {
            return;
          }
          // console.log('change', index)
          this.active = index;
          this._alignCarouselItem();
          this.flick.playPlayer();
        },
        staticClick: (
          event: Event,
          pointer: Event | Touch,
          cellElement: Element,
          index: number
        ) => {
          if (isSMCarousel !== this.isWindowSM) {
            return;
          }
          this._select(index);
        },
        dragStart: () => {
          if (!customizeDrag) return;
          minDifferX = 9999;
          minDifferIndex = this.active;
          this.carouselCells.forEach((element, index) => {
            if (index === this.active) {
              element.nativeElement.style.width = '543px';
            } else {
              element.nativeElement.style.width = '369px';
            }
          });
          this.carouselCellImages.forEach((element, index) => {
            if (index === this.active) {
              element.nativeElement.style.height = '352px';
            } else {
              element.nativeElement.style.height = '267px';
            }
          });
          this.flick.reposition();
        },
        dragEnd: (event, pointer) => {
          if (!customizeDrag) return;
          const viweportCenter = this.innerWidth / 2;
          this.carouselCells.forEach((element, index) => {
            const boundingClientRect =
              element.nativeElement.getBoundingClientRect();
            const divWidth = boundingClientRect.width;
            const divLeftToScreenLeft = boundingClientRect.left;
            const divRightToScreenLeft = boundingClientRect.left + divWidth;

            const differToCenter = Math.min(
              Math.abs(divLeftToScreenLeft - viweportCenter),
              Math.abs(divRightToScreenLeft - viweportCenter)
            );
            // console.log(index, element.nativeElement, differToCenter, '<:', minDifferX)
            if (differToCenter < minDifferX) {
              minDifferX = differToCenter;
              minDifferIndex = index;
            }

            element.nativeElement.style.width = '100%';
          });
          this.carouselCellImages.forEach((element, index) => {
            if (index === this.active) {
              element.nativeElement.style.height = '352px';
            } else {
              element.nativeElement.style.height = '267px';
            }
          });
          this.flick.reposition();
          setTimeout(() => {
            // console.log('minDifferIndex', minDifferIndex)
            this.flick.select(minDifferIndex);
          });
        },
      },
    });
    return flick;
  }

  private _alignCarouselItem() {
    if (window.innerWidth < 768) {
      return;
    }
    const prev = this.active > 0 ? this.active - 1 : this.slides.length - 1;
    this.carouselCells.forEach((element, index) => {
      if (index === prev) {
        element.nativeElement.style.justifyContent = 'flex-end';
      } else {
        element.nativeElement.style.justifyContent = 'flex-start';
      }
    });
    this.carouselCellImages.forEach((element, index) => {
      if (index === this.active) {
        element.nativeElement.style.height = '352px';
      } else {
        element.nativeElement.style.height = '267px';
      }
    });
  }

  private _resetPrevNextButton(prevNextButtons: boolean) {
    if (window.innerWidth < 768) {
      return;
    }
    const next = document.querySelector(
      '.flickity-prev-next-button.next'
    ) as HTMLElement;
    const previous = document.querySelector(
      '.flickity-prev-next-button.previous'
    ) as HTMLElement;

    next.style.display = prevNextButtons ? 'block' : 'none';
    previous.style.display = prevNextButtons ? 'block' : 'none';
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.slides= this.refactorArrSlides()
    this.windowResize$.pipe(debounceTime(100)).subscribe((width) => {
      this.innerWidth = width;
      this._resizeCarousel();
    });
  }

  ngAfterViewInit(): void {
    this._resizeCarousel();
  }
  ngOnDestroy(): void {
    this.windowResize$.unsubscribe();
  }
}
