import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product.component';
import { ListProductComponent, DialogOverviewExampleDialog } from './list-product/list-product.component';
import { PrototypeProduitComponent } from './list-product/prototype-produit/prototype-produit.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [NewProductComponent,ProductComponent, DialogOverviewExampleDialog, ListProductComponent, PrototypeProduitComponent],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
  ],
  entryComponents:[DialogOverviewExampleDialog],
  exports: [NewProductComponent,ProductComponent]
})
export class ProductModule { }
