import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LanguageItem } from '@app/core/models/components/language.mode';
import { LanguageService } from '@app/core/services/language.service';
import { RouterItem } from '@core/models/components/router-item.model';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import {URL_ABOUT_US} from "@app/core/constants/url.constant";
@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit, OnDestroy {
  selectedLanguageValue: string = '';
  private _destroy$ = new Subject<void>();
  langItems$: Observable<LanguageItem[]> = of([]);
  showOptions = false;
  @Input() routerItems!: RouterItem[];
  routerChildren!:RouterItem[];
  constructor(private _languageService: LanguageService) {
    // this.selectedLanguage = this._languageService.getLang();
  }
  isVisible: boolean = false;

  ngOnInit(): void {
    this.routerItems = [
      {
        name: 'PageTitle.Product',
        path: 'product',
      },
    ];
    this.routerChildren=[
      {
        name: 'PageTitle.PrivacyPolicy',
        path: 'privacy',
      },
      {
        name: 'PageTitle.FAQ',
        path: 'FAQ',
      },
    ]
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
        (item) => item.value === this._languageService.getLang()
      );
      this.selectedLanguageValue = selectLan?.shortName || '';
    });
  }

  taggleSelect(): void {
    this.showOptions = !this.showOptions;
    this.isVisible = false
  }
  toggleVisible(isVisible: boolean): void {
    this.isVisible = isVisible;
  }
  get urlAboutUs() {
    return this._languageService.getLang() == 'en' ? URL_ABOUT_US.EN : URL_ABOUT_US.VI
  }
  onLanguageChange(lang: string): void {
    if (this._languageService.getLang() === lang) return;
    this.showOptions = false;
    this._languageService.setLang(lang).subscribe(() => {});
  }
  onChangePage(type: string): void {
    this.showOptions = false;
  }
}
