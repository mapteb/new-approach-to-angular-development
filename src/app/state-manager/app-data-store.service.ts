import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from '../product/product.model';
import { ProductsService } from '../product/products.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataStoreService {

  private productsStore = new BehaviorSubject<Product[]>([]);
  public productsStore$ = this.productsStore.asObservable();

  constructor(private productsService: ProductsService) { }

  setProducts(products: Product[]) {
    this.productsStore.next(products);
  }

  loadProducts() {
    this.productsService.getProducts().pipe(take(1)).subscribe(res => this.setProducts(res));
  }
}


