import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsCount: number = 0;

  constructor() { }

  public getProducts(): Observable<Product[]> {
    //TODO: call a REST service to get the products
    return of([new Product(++this.productsCount, "product_1", 12.11), new Product(++this.productsCount, "product_2", 22.70)]);
  }
}
