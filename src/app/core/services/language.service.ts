import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, ReplaySubject, of, take } from 'rxjs';

import storage from '../constants/storage.constant';
import {
  AcceptLanguageMapping,
  LanguageCode,
  LanguageItem,
} from '../models/components/language.mode';

import { LocalStorageService } from './local-storage.service';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languageChange$ = new ReplaySubject<LangChangeEvent>(1);

  private _defaultLangCode: LanguageCode = 'vi-vn';

  private _langItemsSubject = new BehaviorSubject<LanguageItem[]>([]);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  langItems$ = this._langItemsSubject.asObservable();

  constructor(
    private _translateService: TranslateService,
    private _localStorageService: LocalStorageService,
    private _localizeService: LocalizeRouterService
  ) {}

  /**
   * Initialize language settings
   */
  init(): Observable<boolean> {
    this._translateService.addLangs(Object.keys(AcceptLanguageMapping));

    const lang = this._localStorageService.get(storage.LANG) || this._defaultLangCode;

    // this.setLang(lang);
    this.setLang(this._localizeService.parser.defaultLang);


    return of(true);
  }

  /**
   * Change language setting
   *
   * @param lang - language code
   * @returns Observable<boolean>
   */
  setLang(lang: string): Observable<boolean> {
    this._translateService.onLangChange.pipe(take(1)).subscribe((result) => {
      this.languageChange$.next(result);
    });

    this._translateService.setDefaultLang(lang);

    this._translateService
      .use(lang)
      .subscribe(() => this._langItemsSubject.next(this._createLangSelectItems()));

    this._localStorageService.set(storage.LANG, lang);

    return of(true);
  }

  /**
   * Get current language code
   *
   * @returns LanguageCode
   */
  getLang(): LanguageCode {

    return this._translateService.currentLang as LanguageCode;
  }

  /**
   * Create language select items
   *
   * @returns language select items
   */
  private _createLangSelectItems(): LanguageItem[] {
    return [
      {
        name: this._translateService.instant('Lang.Vietnamese'),
        shortName: this._translateService.instant('LangShort.Vietnamese'),
        value: 'vi-vn',
      },
      {
        name: this._translateService.instant('Lang.English'),
        shortName: this._translateService.instant('LangShort.English'),
        value: 'en',
      }
    ];
  }
}
