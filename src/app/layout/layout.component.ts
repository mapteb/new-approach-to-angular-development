import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { AppEvent } from '../state-transitions-config/app-events.enum';
import { AppState } from '../state-transitions-config/app-states.enum';
import { AppDataStoreService } from '../state-transitions-manager/app-data-store.service';

/**
 * This Angular component loads the home page with a
 * site layout. Enables navigating to all other views.
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent extends BaseComponent implements OnInit {

  title = "A New Approach to Angular Development";
  currentState$: Observable<AppState>;
  isProducts = false;

  constructor(protected override router: Router, private appDataStoreService: AppDataStoreService) {
    super(router);
    this.currentState$ = appDataStoreService.currentState$;
  }

  override ngOnInit(): void {
    // load the home page content
    this.appEventModel = new AppEventModel();
    this.handleAppEvent('home', AppState.UNKNOWN);
  }

  // a handler for the user raised event
  // delegate the event handling to the base class
  handleHomeEvent(evt: keyof typeof AppEvent) {
    this.handleAppEvent(evt, this.appDataStoreService.getCurrentView());
  }

  // a handler for the user raised event
  // delegate the event handling to the base class
  handleProductsEvent(evt: keyof typeof AppEvent) {
    this.handleAppEvent(evt, this.appDataStoreService.getCurrentView());
  }
}
