import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product/product.model';
import { ProductsService } from '../product/products.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataStoreService {

  private appProductsStore = new BehaviorSubject<Product[]>([]);
  private appProductsStore$ = this.appProductsStore.asObservable();

  constructor(private productsService: ProductsService) { }

  setProducts(products: Product[]) {
    this.appProductsStore.next(products);
  }

  loadProducts() {
    this.appProductsStore$ = this.productsService.getProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.appProductsStore$;
  }

}
