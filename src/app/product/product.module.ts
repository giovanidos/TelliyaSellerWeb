import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product.component';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  declarations: [NewProductComponent,ProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [NewProductComponent,ProductComponent]
})
export class ProductModule { }
