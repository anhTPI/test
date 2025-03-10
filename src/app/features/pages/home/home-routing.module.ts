import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LocalizeRouterModule } from '@jemys89/ngx-translate-router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
