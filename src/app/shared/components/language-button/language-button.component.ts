import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, fromEvent, of, takeUntil, tap } from 'rxjs';
import { LanguageService } from '@app/core/services/language.service';
import { LanguageItem } from '@app/core/models/components/language.mode';
import { LocalizeRouterService } from '@jemys89/ngx-translate-router';
import { Router } from '@angular/router';
// import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss'],
})
export class LanguageButtonComponent implements OnInit, OnDestroy {
  selectedLanguageValue: string = '';
  private _destroy$ = new Subject<void>();
  isLoading$ = new Subject<boolean>();
  langItems$: Observable<LanguageItem[]> = of([]);
  showOptions = false;
  constructor(
    private _languageService: LanguageService,
    private localizeService: LocalizeRouterService,
    private router: Router
  ) {
    console.log(this.localizeService.parser.currentLang)
    // this.selectedLanguage = this._languageService.getLang();
    this._languageService.setLang(this._languageService.getLang());
  }

  ngOnInit(): void {
    this.langItems$ = this._languageService.langItems$.pipe(
      takeUntil(this._destroy$)
    );
    this.selectedLanguage();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  selectedLanguage(): void {
    this.langItems$.subscribe((values) => {
      const selectLan = values.find(
        (item) => item.value === this.localizeService.parser.currentLang
        // (item) => item.value === this._languageService.getLang()
      );
      // console.log({selectLan})

      this.selectedLanguageValue = selectLan?.shortName || '';
    });
  }

  taggleSelect(): void {
    this.showOptions = !this.showOptions;
  }
  currentUrl = ''
  onLanguageChange(lang: string): void {
    if (this._languageService.getLang() === lang) return;
    // if (this._languageService.getLang() === lang) return;
    this.showOptions = false;
    // const currentUrl = this.router.url; // Lấy URL hiện tại
    // const translatedUrl = this.localizeService.translateRoute(currentUrl); // Dịch lại URL theo ngôn ngữ mới
    // console.log("check2 ", currentUrl, this.router.url)

    // this.router.navigateByUrl(translatedUrl);
    // this.localizeService.changeLanguage(lang);
    // // this.localizeService.translateRoute("/news/4")
    if(this.router.url.split('/')[2] == 'events' || this.router.url.split('/')[2] == 'news'){

      this.localizeService.routerEvents.subscribe((lang: string) => {
        // console.log("check ", currentUrl, this.router.url)
        this.router.navigateByUrl(
         '/'+ lang+'/' + this.router.url.split('/')[2] + '/' + this.router.url.split('/')[3]
        );
      });
    }
    this.localizeService.changeLanguage(lang,{replaceUrl:true})
    this._languageService.setLang(lang)
    // this._languageService
    //   .setLang(lang)
    //   .pipe(
    //     tap(() => {
    //       this.isLoading$.next(true);
    //     }),
    //     tap(()=>{

    //     })
    //   )
    //   .subscribe(() => {
    //     this.isLoading$.next(false);
    //   });
  }
}
