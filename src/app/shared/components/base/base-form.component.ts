import { Location } from '@angular/common';
import { Component, HostListener, Injector } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, concat, Observable, of, OperatorFunction, Subject } from 'rxjs';
import { catchError, last, switchMap, takeUntil, tap } from 'rxjs/operators';

import { BaseComponent } from './base.component';

import { DisplayErrorType } from '@app/core/models/api/api-error.model';
import { ActionRes } from '@app/core/models/api/api.model';
import { DialogIconType } from '@app/core/models/components/dialog.model';
import checkFormIsDirty from '@app/core/operators/check-form-is-dirty.operator';
import { ApiErrorService } from '@app/core/services/api/api-error.service';
import { ActionConfirmService } from '@app/core/services/components/action-confirm.service';
import { NavigateService } from '@app/core/services/navigate.service';
import { ValidatorService } from '@app/core/services/validator.service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionApi = (payload: any) => Observable<any>;

@Component({
  template: '',
})
export abstract class BaseFormComponent extends BaseComponent {
  id?: string = '';

  form = new FormGroup({});

  protected route: ActivatedRoute;

  protected router: Router;

  protected location: Location;

  protected validatorService: ValidatorService;

  protected actionConfirmService: ActionConfirmService;

  protected apiErrorService: ApiErrorService;

  private _navigateService: NavigateService;

  /** In Order to save and keep same page, reset detect form value change */
  private _resetFormDirtySubject = new Subject();

  private _isFormDirtySubject = new BehaviorSubject<boolean>(false);

  private _isFormInitDoneSubject = new Subject<boolean>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isFormDirty$ = this._isFormDirtySubject.asObservable();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isFormInitDone$ = this._isFormInitDoneSubject.asObservable();

  constructor(injector: Injector) {
    super(injector);

    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.location = injector.get(Location);
    this.validatorService = injector.get(ValidatorService);
    this.actionConfirmService = injector.get(ActionConfirmService);
    this.apiErrorService = injector.get(ApiErrorService);
    this._navigateService = injector.get(NavigateService);

    this._getId();

    this.detectFormValueChange();
  }

  get isCreate(): boolean {
    return !this.id;
  }

  get isCanDeactivate(): Observable<boolean> | boolean {
    return this._isFormDirtySubject.value === false;
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    return this.isCanDeactivate;
  }

  /**
   * Init form
   *
   * @param formObserverList - form init needed observable list
   * @returns Observable
   */
  initForm(formObserverList: Observable<boolean>[]): Observable<boolean> {
    // multiple observables in sequence
    return concat(...formObserverList).pipe(
      // last observable done
      last(),
      tap(() => {
        // form init is done
        this._isFormInitDoneSubject.next(true);
      }),
      this.catchErrorBack()
    );
  }

  /**
   * Detect is form value change, if changed and exit page then popup confirm dialog
   *
   * @returns void
   */
  detectFormValueChange(): void {
    this.isFormInitDone$.pipe(switchMap(() => this._formValueChangeObs())).subscribe();
  }

  /**
   * Handle form operate success
   *
   * @param isNeedNavigate - is need navigate
   * @param navigateRouterLink - navigate link
   * @returns void
   */
  handleFormOperateSuccess(isNeedNavigate = true, navigateRouterLink?: string): void {
    this.form.markAsPristine();
    this.toastService.success(this.translateService.instant('Common.SetupSuccess'));
    this._isFormDirtySubject.next(false);
    this._resetFormDirtySubject.next(true);

    if (isNeedNavigate) {
      // priority: navigateRouterLink params > backRouterLink query string
      const backRouterLink =
        navigateRouterLink || this.route.snapshot.queryParamMap.get('backRouterLink');

      if (backRouterLink) {
        this.router.navigate([backRouterLink]);
      } else {
        this._navigateService.back();
      }
    } else {
      this._formValueChangeObs().subscribe();
    }
  }

  /**
   * Handle form operate failed
   *
   * @param error - Error
   * @param displayType - error message display type, default "toast"
   */
  handleFormOperateFailed(error: unknown, displayType: DisplayErrorType = 'toast'): void {
    const { errorCode } = this.apiErrorService.generatorErrorMessage(error as Error);

    this.apiErrorService.showErrorMessage({
      errorCode,
      displayType,
    });
  }

  /**
   * Is form control show error
   *
   * @param formControlInstance - formControl
   * @returns boolean
   */
  isError(formControlInstance: AbstractControl | null): boolean {
    return !!(
      formControlInstance?.errors &&
      (formControlInstance?.touched || formControlInstance?.dirty)
    );
  }

  /**
   * Catch error and back
   */
  catchErrorBack(): OperatorFunction<boolean, boolean> {
    return catchError((err: unknown) => {
      console.error(err);

      this.location.back();

      return of(false);
    });
  }

  /* eslint-disable tsdoc/syntax */
  /**
   *
   * Common action handler
   *
   * @param params -
   * @param params.iconType - action type
   * @param params.actionApi - action api function
   * @param params.payload - api request payload
   * @param params.successCallback - success callback (optional)
   * @param params.errorCallback - error callback (optional)
   *
   * @returns void
   */
  /* eslint-enable tsdoc/syntax */
  commonActionHandler<T>(params: {
    iconType: DialogIconType;
    actionApi: ActionApi;
    payload: unknown;
    successCallback?: (res: T) => void;
    errorCallback?: (err: unknown) => void;
  }): void {
    this.actionConfirmService
      .confirm(params.iconType)
      .pipe(switchMap((result) => (result ? params.actionApi(params.payload) : of(null))))
      .subscribe({
        next: (res: T) => {
          if (!params.successCallback && this._isActionRes(res) && res.isSuccess) {
            this.handleFormOperateSuccess();

            return;
          }

          // custom success handler
          params.successCallback && params.successCallback(res);
        },
        error: (err: unknown) => {
          if (params.errorCallback) {
            params.errorCallback(err);
          }
        },
      });
  }

  /**
   * Get id params form router
   *
   * @returns void
   */
  private _getId(): void {
    this.id = window.decodeURIComponent(this.route.snapshot.params?.id || '');
  }

  /**
   * Form value change Observable
   *
   * @returns Observable<boolean>
   */
  private _formValueChangeObs(): Observable<boolean> {
    return this.form.valueChanges.pipe(
      checkFormIsDirty(of(this.form.value)),
      tap((res) => {
        this._isFormDirtySubject.next(res);
      }),
      takeUntil(this._resetFormDirtySubject)
    );
  }

  /**
   * Check if res type is ActionRes
   *
   * @param res - api response
   */
  private _isActionRes(res: unknown): res is ActionRes {
    const paramsKey: keyof ActionRes = 'isSuccess';

    return Object.prototype.hasOwnProperty.call(res, paramsKey);
  }
}
