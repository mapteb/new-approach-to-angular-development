import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from '../product/product.model';
import { AppData } from '../state-transitions-config/app-data.model';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { AppEvent } from '../state-transitions-config/app-events.enum';
import { AppState } from '../state-transitions-config/app-states.enum';

@Component({
  selector: 'app-base',
  template: ``,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  protected appEventModel: AppEventModel;
  
  constructor(protected router: Router) {
    const navigationExtras: NavigationExtras = this.router.getCurrentNavigation().extras;
    if (navigationExtras && navigationExtras.state) {
      this.appEventModel = navigationExtras.state.appEvent;
    }
  }

  ngOnInit(): void {
    if (!this.appEventModel.appState) {
      this.handlePostEvent(AppEvent.onload, AppState.UNKNOWN);
    }
  }

  protected handlePostEvent(evt: string, appState: AppState, appData?: AppData) {
    if (evt) {
      this.appEventModel.appEvent = AppEvent[evt];
      this.appEventModel.appState = appState;
      if (appData) {
        this.appEventModel.appData = appData;
      }
    }
    this.router.navigate(['/state-manager'], { state: { appEvent: this.appEventModel } });
  }

}
