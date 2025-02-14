import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
