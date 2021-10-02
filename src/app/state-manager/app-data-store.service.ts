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
  private productStore = new BehaviorSubject<Product>(null);

  constructor(private productsService: ProductsService) { }

  setProducts(products: Product[]) {
    this.productsStore.next(products);
  }

  getProducts(): Product[] {
    return this.productsStore.getValue();
  }

  setProduct(product: Product) {
    this.productStore.next(product);
  }

  getProduct(): Product {
    return this.productStore.getValue();
  }

  loadProducts() {
    this.productsService.getProducts().pipe(take(1)).subscribe(res => this.setProducts(res));
  }

  loadProduct(id: any) {
    this.productsService.getProduct(id).pipe(take(1)).subscribe(res => this.setProduct(res));
  }
}


