import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { SubmitType } from '@app/core/models/components/form.model';

export interface BaseFormInterface {
  form: FormGroup;

  /**
   * Init form data
   *
   * @param formObserverList - init form observer list
   *
   * @returns void
   */
  initForm(formObserverList: Observable<boolean>[]): void;

  /**
   * Init form create data
   *
   * @returns Observable<boolean>
   */
  initCreateForm(): Observable<boolean>;

  /**
   * Init form edit data
   *
   * @returns Observable<boolean>
   */
  initEditForm(): Observable<boolean>;

  /**
   * Form submit
   *
   * @param submitType -SubmitType
   * @returns void
   */
  onSubmit(submitType?: SubmitType): void;
}
