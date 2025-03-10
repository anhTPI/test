import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FAQComponent } from './fAq.component';

const routes: Routes = [
  {
    path: '',
    component: FAQComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FAQRoutingModule {}
