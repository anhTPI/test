import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [CommonModule, EventsRoutingModule, SharedModule],
})
export class EventsModule {}
