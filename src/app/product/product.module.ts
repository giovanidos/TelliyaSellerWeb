import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PrototypeProduitComponent } from './list-product/prototype-produit/prototype-produit.component';

@NgModule({
  declarations: [NewProductComponent,ProductComponent, ListProductComponent, PrototypeProduitComponent],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [NewProductComponent,ProductComponent]
})
export class ProductModule { }
