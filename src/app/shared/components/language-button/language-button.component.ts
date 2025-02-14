import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, fromEvent, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { LanguageService } from '@app/core/services/language.service';
import { LanguageItem } from '@app/core/models/components/language.mode';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
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
      console.log({values})
      const selectLan = values.find(
        (item) => item.value === this.localizeService.parser.currentLang
      );

      this.selectedLanguageValue = selectLan?.shortName || '';
    });
  }

  taggleSelect(): void {
    this.showOptions = !this.showOptions;
  }
  currentUrl = ''
  onLanguageChange(lang: string): void {
    this.localizeService.routerEvents
    .pipe(
      switchMap((localize)=> this.langItems$.pipe(
        map((values)=> [localize, values])
      )),
      tap(([localize,values]:any)=>{
        const selectLan = values.find(
          (item:any) => item.value === localize
        );

        this.selectedLanguageValue = selectLan?.shortName || '';
      })
    )
    .subscribe()

    if (this._languageService.getLang() === lang) return;
    this.showOptions = false;


    this.localizeService.changeLanguage(lang,{replaceUrl:true})
    this._languageService.setLang(lang)
  }
}
