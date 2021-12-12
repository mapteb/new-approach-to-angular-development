import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppEventModel } from 'src/app/state-transitions-config/app-event.model';
import { BaseComponent } from '../../base/base.component';
import { AppData } from '../../state-transitions-config/app-data.model';
import { AppState } from '../../state-transitions-config/app-states.enum';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  products: Product[] = [];

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit(): void { 
    this.products = this.appEventModel.appData.products;
  }

  // a handler for the user raised event
  // delegate the event handling to the base class
  handlePoductEvent(evt: string, productId: any) {
    const appData = new AppData();
    appData.product.id = productId;
    this.handleAppEvent(evt, AppState.PRODUCTSVIEW, appData);
  }
}
