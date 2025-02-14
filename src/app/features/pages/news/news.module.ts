import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
})
export class NewsModule {}
