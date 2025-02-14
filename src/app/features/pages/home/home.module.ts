import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { DownloadAppButtonComponent } from './components/download-app-button/download-app-button.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DownloadCardComponent } from './components/download-card/download-card.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    EventsCardComponent,
    NewsCardComponent,
    CarouselComponent,
    DownloadAppButtonComponent,
    DownloadCardComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
