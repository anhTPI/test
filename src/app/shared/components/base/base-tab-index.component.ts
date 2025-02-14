import { Component, Injector, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { BaseComponent } from './base.component';

import { TabPanel } from '@app/core/models/components/tab-panel.model';
import { UserService } from '@app/core/services/user.service';

@Component({
  template: '',
})
export abstract class BaseTabIndexComponent extends BaseComponent implements OnDestroy {
  indexRouter = '';

  tabList: TabPanel[] = [];

  protected router: Router;

  protected userService: UserService;

  private _destroy$ = new Subject<void>();

  constructor(injector: Injector) {
    super(injector);

    this.router = injector.get(Router);
    this.userService = injector.get(UserService);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.redirectToDefaultTab();
      }
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  redirectToDefaultTab(): void {
    if (this.router.url === this.indexRouter) {
      const activeTabPermissionList = this.tabList.filter((tab) => {
        return this.userService.hasPermission(tab.permission);
      });

      if (activeTabPermissionList[0]) {
        this.router.navigate([activeTabPermissionList[0].router]);
      } else {
        this.router.navigate(['']);
        console.error('activeTabPermissionList not found');
      }
    }
  }
}
