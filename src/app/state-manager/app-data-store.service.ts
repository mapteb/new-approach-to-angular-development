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

  constructor(private productsService: ProductsService) { }

  setProducts(products: Product[]) {
    this.productsStore.next(products);
  }

  getProducts(): Product[] {
    if (!this.productsStore.getValue() || this.productsStore.getValue().length === 0) {
      this.loadProducts();
    }
    return this.productsStore.getValue();
  }

  setProduct(product: Product) {
    this.productsStore.next(this.getProducts().map(p => {
      if (p.id === product.id) {
        return product;
      } else {
        return p;
      }
    }));
  }

  getProduct(id: number): Product {
    let product: Product;
    if (this.getProducts() && this.getProducts().length > 0) {
      product = this.getProducts().find(p => p.id === id);
      if (!product.price) {
        this.loadProduct(id);
      }
    }
    return this.getProducts().find(p => p.id === id);
  }

  loadProducts() {
    this.productsService.getProducts().pipe(take(1)).subscribe(res => this.setProducts(res));
  }

  loadProduct(id: any) {
    this.productsService.getProduct(id).pipe(take(1)).subscribe(res => this.setProduct(res));
  }
}


