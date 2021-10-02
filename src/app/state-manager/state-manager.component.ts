import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { PostEventToPostStateConfig, PostStateToPathConfig, PreEventToPreStatesConfig, PreEventToProcessConfig } from '../state-transitions-config/state-transitions';
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
    console.log(">> preStates: ", PreEventToPreStatesConfig[this.appEventModel.appEvent], this.appEventModel.appEvent);
    if (PreEventToPreStatesConfig[this.appEventModel.appEvent].includes(this.appEventModel.appState)) {
      this.appEventModel = PreEventToProcessConfig[this.appEventModel.appEvent]
                            .process(this.appEventModel, this.appDataStore);
      this.appEventModel.appState = PostEventToPostStateConfig[this.appEventModel.appEvent];
      console.log(">> final state: ", PostEventToPostStateConfig[this.appEventModel.appEvent], this.appEventModel.appEvent);                     
      const path = PostStateToPathConfig[this.appEventModel.appState];
      this.router.navigate([path], { state: { appEvent: this.appEventModel } });
    } else {
      this.appEventModel.message = { error: "Illegal access" };
      this.router.navigate(["/**"], { state: { appEvent: this.appEventModel } });
    }
  }
}

