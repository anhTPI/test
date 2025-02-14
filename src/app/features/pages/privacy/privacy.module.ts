import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  declarations: [PrivacyComponent],
  imports: [CommonModule, PrivacyRoutingModule, SharedModule],
})
export class PrivacyModule {}
