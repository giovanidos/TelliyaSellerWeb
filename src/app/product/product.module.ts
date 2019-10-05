import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [NewProductComponent,ProductComponent, ListProductComponent],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports: [NewProductComponent,ProductComponent]
})
export class ProductModule { }
