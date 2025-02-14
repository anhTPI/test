import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AlertComponent } from './alert/alert.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';
import { FaqtoggleButtonComponent } from './faqtoggle-button/faqtoggle-button.component';
import { LanguageButtonComponent } from './language-button/language-button.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import {DropdownDirective} from "@shared/directives/dropdown.directive";
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { LoadingCustom } from './loading/loading.component';

/**
 * Shared components
 */
@NgModule({
  declarations: [
    AlertComponent,
    ArrowButtonComponent,
    MenuButtonComponent,
    LanguageButtonComponent,
    FaqtoggleButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    DropdownDirective,
    ClickOutsideDirective,
    LoadingCustom
],
  exports: [
    AlertComponent,
    ArrowButtonComponent,
    MenuButtonComponent,
    LanguageButtonComponent,
    FaqtoggleButtonComponent,
  ],
})
export class ComponentsModule {}
