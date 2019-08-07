import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  {path: "product", component:ProductComponent,children: [
    {path: "new-product", component: NewProductComponent},
    {path: "list-Product", component: ListProductComponent},
    {path: "**", component: ListProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
