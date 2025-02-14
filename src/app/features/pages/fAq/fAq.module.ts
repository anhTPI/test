import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FAQRoutingModule } from './fAq-routing.module';
import { FAQComponent } from './fAq.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SharedModule } from '@app/shared/shared.module';
import { MenuAccordion } from './components/menu-accordion/menu-accordion.component';


@NgModule({
  declarations: [
    FAQComponent,
    AccordionComponent,
    MenuAccordion
  ],
  imports: [CommonModule, FAQRoutingModule, SharedModule],
})
export class FAQModule {}
