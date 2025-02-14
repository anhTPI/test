import { ChangeDetectorRef, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

export abstract class BaseComponent {

  protected router: Router;

  protected translateService: TranslateService;


  protected cdr: ChangeDetectorRef;



  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.translateService = injector.get(TranslateService);
    this.cdr = injector.get(ChangeDetectorRef);
  }
}
