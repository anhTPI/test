import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from './components/components.module';

/**
 * App share module
 */
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,

    // custom
    ComponentsModule,

  ],
})
export class SharedModule {}
