import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from '../product/product.model';
import { ProductsService } from '../product/products.service';

/**
 * This injectable service retries and stores the data requested
 * This service can, optionally, cache the data as needed
 */
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
    this.loadProducts();
    return this.productsStore.getValue();
  }

  setProduct(product: Product) {
    this.productStore.next(product);
  }

  getProduct(id: number): Product {
    this.loadProduct(id);
    return this.productStore.getValue();
  }

  loadProducts() {
    this.productsService.getProducts().pipe(take(1)).subscribe(res => this.setProducts(res));
  }

  loadProduct(id: any) {
    this.productsService.getProduct(id).pipe(take(1)).subscribe(res => this.setProduct(res));
  }
}

