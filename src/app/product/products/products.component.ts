import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { AppData } from '../../state-transitions-config/app-data.model';
import { AppEventModel } from '../../state-transitions-config/app-event.model';
import { AppEvent } from '../../state-transitions-config/app-events.enum';
import { AppState } from '../../state-transitions-config/app-states.enum';
import { AppDataStoreService } from '../../state-manager/app-data-store.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  products: Product[];

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit(): void { 
    this.products = this.appEventModel.appData.products;
  }

  handlePoductEvent(evt: string, productId: any) {
    const appData = new AppData();
    appData.product.id = productId;
    this.handlePostEvent(evt, AppState.PRODUCTSVIEW, appData);
  }
}
