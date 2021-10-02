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
    return of([new Product(1, "product_1", 12.11), new Product(2, "product_2", 22.70)]);
  }

  public getProduct(id: any): Observable<Product> {
    //TODO: call a REST service to get the products
    return of(new Product(id, "product_" + id, 12.11*id));
  }
}
