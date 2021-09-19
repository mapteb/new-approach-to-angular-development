import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { EvenTransitionsHelper, EventToPathMappings } from '../state-transitions-config/state-transitions';
import { AppDataStoreService } from './app-data-store.service';

@Component({
  selector: 'app-state-manager',
  template: ``
})
export class StateManagerComponent implements OnInit {

  appEventModel: AppEventModel;

  constructor(private router: Router, private appDataStore: AppDataStoreService) {
    const navigationExtras: NavigationExtras = this.router.getCurrentNavigation().extras;
    if (navigationExtras && navigationExtras.state) {
      this.appEventModel = navigationExtras.state.appEvent;
    } else {
      this.appEventModel = new AppEventModel();
    }
  }

  ngOnInit(): void {
    this.processStateTransition(this.appEventModel);
  }

  processStateTransition(appEventModel: AppEventModel) {
    console.log(">> received: ", appEventModel.appEvent);
    appEventModel = EvenTransitionsHelper[appEventModel.appEvent].process(appEventModel, this.appDataStore);
    const path = EventToPathMappings[appEventModel.appEvent].getPath(appEventModel.appState);
    console.log(">> routing to: ", appEventModel.appEvent, " => " + path);
    this.router.navigate([path], { state: { appEvent: appEventModel } });
  }
}

