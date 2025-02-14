import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AlertService } from '../services/components/alert.service';

export interface ComponentCanDeactivate {
  /** Is it possible to leave route */
  canDeactivate: () => Observable<boolean>;

  /** Confirm message */
  canDeactivateMessage?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LeaveConfirmGuard implements CanDeactivate<ComponentCanDeactivate> {
  constructor(private _translateService: TranslateService, private _alertService: AlertService) {}

  /**
   * Is it possible to leave route,  true: exit, false: show confirm
   *
   * @returns  Observable<boolean> | boolean
   */
  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
    const confirmMessage =
      component?.canDeactivateMessage ||
      this._translateService.instant('Confirm.LeavePageWithoutSave');

    return component.canDeactivate() ? true : this._showConfirm(confirmMessage);
  }

  /**
   * Show confirm
   *
   * @param message - confirm message
   * @returns Observable<boolean>
   */
  private _showConfirm(message: string): Observable<boolean> {
    return this._alertService
      .confirm(message, {
        confirmButtonLabel: this._translateService.instant('Button.Leave'),
      })
      .asObservable()
      .pipe(switchMap((result) => of(!!result.isConfirmed)));
  }
}
