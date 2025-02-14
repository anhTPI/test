import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, SharedModule],
})
export class FeaturesModule {}
