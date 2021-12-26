import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }