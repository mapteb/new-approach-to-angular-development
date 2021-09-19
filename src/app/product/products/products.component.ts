import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AppData } from '../../state-transitions-config/app-data.model';
import { AppDataStoreService } from 'src/app/state-manager/app-data-store.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  errorMessage: string;

  constructor(private appDataStore: AppDataStoreService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.products$ = this.appDataStore.productsStore$;
  }

}
