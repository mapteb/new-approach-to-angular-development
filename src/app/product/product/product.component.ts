import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { AppDataStoreService } from '../../state-manager/app-data-store.service';
import { AppEventModel } from '../../state-transitions-config/app-event.model';
import { AppEvent } from '../../state-transitions-config/app-events.enum';
import { AppState } from '../../state-transitions-config/app-states.enum';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {

  product: Product;

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit(): void {
    this.validateRoutingRequest(AppState.PRODUCTVIEW);
    this.product = this.appEventModel.appData.product;
  }

  handlePoductsEvent(evt: string) {
    this.handlePostEvent(evt, AppState.PRODUCTVIEW);
  }
}
