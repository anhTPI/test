import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReferenceInfoComponent } from './referenceInfo.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ReferenceInfoComponent,
  },
  {
    path: 'content/:name',
    component: ContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenceInfoRoutingModule {}
