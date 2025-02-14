import { Component, Injector, OnInit } from '@angular/core';

import { BaseComponent } from '@app/shared/components/base/base.component';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from '@app/core/services/language.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent extends BaseComponent implements OnInit {
  showBackgroundImage: boolean = false;

  constructor(injector: Injector, private languageService: LanguageService) {
    super(injector);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((value) => {
        this.showBackgroundImage = this.router.url === '/home';
    })

  }

  ngOnInit() {
  }

  get isVn(): boolean {
    const lang = this.languageService.getLang();
    return lang === 'vi-vn';
  }
}
