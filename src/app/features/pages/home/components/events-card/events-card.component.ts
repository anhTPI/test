import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { EventCard } from '@core/models/events-card.model';
import { EventsCardService } from '@core/services/events-card.service';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import * as flickity from 'flickity';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss'],
})
export class EventsCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('carouselCellMD') carouselCells!: QueryList<ElementRef>;
  @ViewChildren('carouselCellImageMD')
  carouselCellImages!: QueryList<ElementRef>;
  @ViewChild('carouselSM') carouselSM!: ElementRef;
  @ViewChild('carouselMD') carouselMD!: ElementRef;

  innerWidth!: number;
  slides!: EventCard[];
  active: number = 0;
  flick!: flickity;
  windowResize$ = new Subject<number>();

  get carousel(): ElementRef {
    return window.innerWidth < 768 ? this.carouselSM : this.carouselMD;
  }

  get isWindowSM(): boolean {
    return this.innerWidth < 768;
  }

  constructor(private eventsCardService: EventsCardService, protected localize: LocalizeRouterService) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.slides = this.eventsCardService.getSlides();

    this.windowResize$.pipe(debounceTime(100)).subscribe((width) => {
      this.innerWidth = width;
      this._resizeCarousel();
    });
  }

  ngAfterViewInit(): void {
    this._resizeCarousel();
  }

  ngOnDestroy() {
    this.windowResize$.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowResize$.next((event.target as Window)?.innerWidth);
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

    setTimeout(() => {
      if (this.innerWidth < 768) {
        document
          .querySelector('.events.flickity-viewport')
          ?.setAttribute('style', 'height:500px');
      } else {
        document
          .querySelector('.events.flickity-viewport')
          ?.setAttribute('style', 'height:650px');
      }
    });
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

    switch (this.slides.length) {
      case 1:
        if (innerWidth < 768) {
          // 375 ~ 767
          wrapAround = false;
          contain = true;
          pageDots = false;
        } else {
          // 768 ~
          wrapAround = true;
          contain = false;
          pageDots = false;
        }
        break;
      case 2:
        if (innerWidth < 768) {
          // 375 ~ 767
          wrapAround = false;
          contain = true;
          pageDots = true;
        } else {
          // 768 ~
          wrapAround = false;
          contain = true;
          pageDots = false;
        }
        break;
      case 3:
      default:
        pageDots = true;
        if (innerWidth < 768) {
          // 375 ~ 767
          wrapAround = false;
          contain = true;
          pageDots = true;
        } else {
          // 768 ~
          wrapAround = true;
          contain = false;
          pageDots = true;
          customizeDrag = true;
        }

        break;
    }

    let minDifferX = 9999;
    let minDifferIndex = -1;
    const flick = new flickity(carousel.nativeElement, {
      draggable: true,
      wrapAround,
      pageDots,
      contain,
      prevNextButtons: innerWidth < 768 ? false : true,
      initialIndex: this.active,
      autoPlay: 5000,
      freeScroll: false,
      pauseAutoPlayOnHover: false,
      on: {
        ready: () => {
          const next = document.querySelector(
            '.carouselMD .flickity-prev-next-button.next'
          );
          const previous = document.querySelector(
            '.carouselMD .flickity-prev-next-button.previous'
          );

          next?.removeChild(next.childNodes[0]);
          previous?.removeChild(previous.childNodes[0]);
          const img = document.createElement('img');
          const previousImg = document.createElement('img');
          img.src = 'assets/image/common/arrow_right.svg';
          previousImg.src = 'assets/image/common/arrow_right.svg';
          previousImg.classList.add('rotate-180');
          img.classList.add('next-img');

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
          // console.log('viweportCenter',viweportCenter)
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

            element.nativeElement.style.width = '543px';
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
      '.carouselMD .flickity-prev-next-button.next'
    ) as HTMLElement;
    const previous = document.querySelector(
      '.carouselMD .flickity-prev-next-button.previous'
    ) as HTMLElement;

    next.style.display = prevNextButtons ? 'block' : 'none';
    previous.style.display = prevNextButtons ? 'block' : 'none';
  }
}
