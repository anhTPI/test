import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '@app/core/services/language.service';
// import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { debounceTime, Subject } from 'rxjs';
@Component({
  selector: 'app-faqtoggle-button',
  templateUrl: './faqtoggle-button.component.html',
  styleUrls: ['./faqtoggle-button.component.scss'],
})
export class FaqtoggleButtonComponent implements OnInit, OnDestroy {
  selectedLanguageValue: string = '';
  private _destroy$ = new Subject<void>();
  showOptions = false;
  selectedType: string = '';
  hoverSupported: boolean = false;
  windowResize$ = new Subject<number>();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowResize$.next((event.target as Window)?.innerWidth);
  }
  constructor(private router: Router, private _lang: LanguageService) {}

  ngOnInit(): void {
    this.hoverSupported = window.matchMedia('(hover: hover)').matches;

    this.windowResize$.pipe(debounceTime(100)).subscribe((width) => {
      this.hoverSupported = window.matchMedia('(hover: hover)').matches;
    });

    if (this.router.url.split('/')[2] === 'privacy') {
      this.selectedType = 'privacy';
    } else if (this.router.url === 'FAQ') {
      this.selectedType = 'FAQ';
    }else {
      this.selectedType = ''
    }
  }

   // Xử lý mở dropdown (dành cho hover)
   openDropdown(): void {
    this.showOptions = true;
  }

  // Xử lý đóng dropdown (dành cho hover)
  closeDropdown(): void {
    console.log("vlcik")
    this.showOptions = false;
  }


  get isVn (){
    return this._lang.getLang() == 'en' ? false : true
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this.windowResize$.unsubscribe();
  }

  toggleSelect(): void {
    console.log({check: this.showOptions})
    this.showOptions = !this.showOptions;
  }

  onChangePage(type: string): void {
    // console.log({"object": this._lang.getLang()})
    // console.log({chec: this.rtLang.parser.currentLang})
    this.selectedType = type;
    this.showOptions = false;
  }

}
