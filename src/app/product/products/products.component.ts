import { Component, OnInit } from '@angular/core';
import { AppDataStoreService } from '../../state-manager/app-data-store.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private appDataStore: AppDataStoreService) { }

  ngOnInit(): void {
    this.products = this.appDataStore.getProducts();
  }

}
