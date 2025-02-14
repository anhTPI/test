import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterItem } from '@core/models/components/router-item.model';
import { filter } from 'rxjs';
import {LanguageService} from "@core/services/language.service";
import {URL_ABOUT_US} from "@app/core/constants/url.constant";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  currentPath = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  routerItems: RouterItem[] = [
    {
      name: 'PageTitle.Product',
      path: 'product',
    },
  ];
  constructor(private router: Router, private _lang: LanguageService,) {}

  ngOnInit() {
    this.currentPath = this.router.routerState.snapshot.url;
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.currentPath = e.url;
      });
  }

  get urlAboutUs() {
    return this._lang.getLang() == 'en' ? URL_ABOUT_US.EN : URL_ABOUT_US.VI
  }
}
