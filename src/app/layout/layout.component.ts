import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { AppEvent } from '../state-transitions-config/app-events.enum';
import { AppState } from '../state-transitions-config/app-states.enum';

/**
 * This Angular component loads the home page with a
 * site layout. Enables navigating to all other views.
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends BaseComponent implements OnInit {

  title = "A New Approach to Angular Development";

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit(): void {
    // load the home page content
    this.appEventModel = new AppEventModel();
    this.handleAppEvent('home', AppState.UNKNOWN);
  }

  // a handler for the user raised event
  // delegate the event handling to the base class
  handleHomeEvent(evt: string) {
    this.handleAppEvent(evt, AppState.HOMEVIEW);
  }

  // a handler for the user raised event
  // delegate the event handling to the base class
  handleProductsEvent(evt: string) {
    this.handleAppEvent(evt, AppState.HOMEVIEW);
  }
}
