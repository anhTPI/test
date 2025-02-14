import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';
import { LocalizeRouterModule } from '@jemys89/ngx-translate-router';

const routes: Routes = [
  {
    path: ':name',
    component: NewsComponent,
  },
];

@NgModule({
  imports: [
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
