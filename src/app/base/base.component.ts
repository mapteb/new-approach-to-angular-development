import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppData } from '../state-transitions-config/app-data.model';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { AppEvent } from '../state-transitions-config/app-events.enum';
import { AppState } from '../state-transitions-config/app-states.enum';

/**
 * This Angular base component ensures that all navigation
 * requests are routed through the StateTransitionsManagerComponent.
 * Otherwise, the user is redirected to the home page.
 */
@Component({
  selector: 'app-base', template: ``
})
export class BaseComponent implements OnInit {
  protected appEventModel: AppEventModel;

  constructor(protected router: Router) {
    if (this.router.getCurrentNavigation()) {
      const navigationExtras: NavigationExtras = this.router.getCurrentNavigation().extras;
      if (navigationExtras && navigationExtras.state) {
        this.appEventModel = navigationExtras.state.appEvent;
      } 
    }
  }

  ngOnInit(): void { }

  protected handleAppEvent(evt: string, appState: AppState, appData?: AppData) {
    if (evt && this.appEventModel) {
      this.appEventModel.appEvent = AppEvent[evt];
      this.appEventModel.appState = appState;
      if (appData) this.appEventModel.appData = appData;
    }
    this.router.navigate(['/state-transitions-manager'], { state: { appEvent: this.appEventModel } });
  }
}
