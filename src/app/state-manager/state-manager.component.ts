import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { EvenToProcessMappings, EventToPathMappings } from '../state-transitions-config/state-transitions';
import { AppDataStoreService } from './app-data-store.service';

@Component({
  selector: 'app-state-manager',
  template: ``
})
export class StateManagerComponent implements OnInit {

  appEventModel: AppEventModel = new AppEventModel();;

  constructor(private router: Router, private appDataStore: AppDataStoreService) {
    const navigationExtras: NavigationExtras = this.router.getCurrentNavigation().extras;
    if (navigationExtras && navigationExtras.state) {
      this.appEventModel = navigationExtras.state.appEvent;
    }
  }

  ngOnInit(): void {
    this.appEventModel = EvenToProcessMappings[this.appEventModel.appEvent]
                          .process(this.appEventModel, this.appDataStore);
    const path = EventToPathMappings[this.appEventModel.appEvent]
                  .getPath(this.appEventModel.appState);
    this.router.navigate([path], { state: { appEvent: this.appEventModel } });
  }
}

