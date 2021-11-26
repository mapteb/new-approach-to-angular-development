import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

/**
 * This Angular component displays an error message
 * when the navigation request does not conform to one of the
 * the valid state transitions.
 */
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent extends BaseComponent implements OnInit {

  message = '';

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit() {
    if (this.appEventModel) {
      this.message = this.appEventModel.message.error;
    } else {
      this.message = 'Unknown access error';
    }
  }
}
