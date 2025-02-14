import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReferenceInfoRoutingModule } from './referenceInfo-routing.module';
import { ReferenceInfoComponent } from './referenceInfo.component';
import { ContentComponent } from './components/content/content.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    ReferenceInfoComponent,
    ContentComponent
  ],
  imports: [CommonModule, ReferenceInfoRoutingModule, SharedModule],
})
export class ReferenceInfoModule {}
