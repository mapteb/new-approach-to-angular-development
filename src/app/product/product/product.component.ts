import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppEvent } from 'src/app/state-transitions-config/app-events.enum';
import { BaseComponent } from '../../base/base.component';
import { AppState } from '../../state-transitions-config/app-states.enum';
import { Product } from '../product.model';

/**
 * This Angular component displays a list of
 * available products
 */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {

  product!: Product;

  constructor(protected override router: Router) {
    super(router);
  }

  override ngOnInit(): void {
    this.product = this.appEventModel.appData.product;
  }

  // a handler for the user raised event
  // delegate the event handling to the base class
  handlePoductsEvent(evt: keyof typeof AppEvent) {
    this.handleAppEvent(evt, AppState.PRODUCTVIEW);
  }
}
