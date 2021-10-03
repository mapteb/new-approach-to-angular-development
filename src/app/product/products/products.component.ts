import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { AppData } from 'src/app/state-transitions-config/app-data.model';
import { AppEventModel } from 'src/app/state-transitions-config/app-event.model';
import { AppEvent } from 'src/app/state-transitions-config/app-events.enum';
import { AppState } from 'src/app/state-transitions-config/app-states.enum';
import { AppDataStoreService } from '../../state-manager/app-data-store.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  products: Product[];

  constructor(protected router: Router, private appDataStoreService: AppDataStoreService) {
    super(router);
  }

  ngOnInit(): void { 
    this.validateRoutingRequest(AppState.PRODUCTSVIEW);
    this.products = this.appDataStoreService.getProducts();
  }

  handlePoductEvent(evt: string, productId: any) {
    const appData = new AppData();
    appData.product.id = productId;
    super.handlePostEvent(evt, AppState.PRODUCTSVIEW, appData);
  }

}
