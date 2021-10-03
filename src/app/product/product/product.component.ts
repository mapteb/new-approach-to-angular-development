import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { AppDataStoreService } from 'src/app/state-manager/app-data-store.service';
import { AppEventModel } from 'src/app/state-transitions-config/app-event.model';
import { AppEvent } from 'src/app/state-transitions-config/app-events.enum';
import { AppState } from 'src/app/state-transitions-config/app-states.enum';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {

  product: Product;

  constructor(protected router: Router, private appDataStore: AppDataStoreService) {
    super(router);
  }

  ngOnInit(): void {
    this.validateRoutingRequest(AppState.PRODUCTVIEW);
    this.product = this.appDataStore.getProduct();
  }

  handlePoductsEvent(evt: string) {
    super.handlePostEvent(evt, AppState.PRODUCTVIEW);
  }

}
