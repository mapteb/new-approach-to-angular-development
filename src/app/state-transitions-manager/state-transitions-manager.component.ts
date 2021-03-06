import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { AppEvent } from '../state-transitions-config/app-events.enum';
import { PostEventToFinalStateConfig, 
         FinalStateToPathConfig, 
         PreEventToInitialStatesConfig, 
         PreEventToProcessConfig } from '../state-transitions-config/state-transitions';
import { AppDataStoreService } from './app-data-store.service';

/**
 * This Angular component acts as a broker that receives all the events raised in the
 * application, triggers the configued process function and based on the function's
 * response route the request to the configured path. It uses the configurations
 * listed in state-transitions.ts
 */
@Component({
  selector: 'app-state-transitions-manager',
  template: ``
})
export class StateTransitionsManagerComponent extends BaseComponent implements OnInit {

  constructor(protected override router: Router, private appDataStore: AppDataStoreService) {
    super(router);
  }

  /**
   * When an application's pre-event is received this component
   * 1. Checks whether the pre-event is raised from a valid application state
   * 2. Triggers the process configured for this pre-event
   * 3. Figures the path corresponding to the post-state returned by the process
   * 4. Routes the request including an AppEventModel
   */
   override ngOnInit(): void {
    this.doTransition(this.appEventModel, this.appDataStore);
  }

  private doTransition(appEventModel: AppEventModel, appDataStore: AppDataStoreService) {
    if (this.isPreEventOriginValid(appEventModel)) {
      appEventModel = this.callProcess(appEventModel, appDataStore);
      appEventModel.appState = PostEventToFinalStateConfig[appEventModel.appEvent];
      const path = FinalStateToPathConfig[appEventModel.appState];
      appDataStore.setCurrentView(appEventModel.appState);
      this.router.navigate([path], { state: { appEvent: appEventModel } });
    } else {
      this.router.navigate(["/**"]);
    }
  }

  private isPreEventOriginValid(appEventModel: AppEventModel): boolean {
    return appEventModel && appEventModel.appEvent && appEventModel.appState &&
    PreEventToInitialStatesConfig[appEventModel.appEvent].includes(appEventModel.appState);
  }

  private callProcess(appEventModel: AppEventModel, appDataStore: AppDataStoreService): AppEventModel {
    return appEventModel = PreEventToProcessConfig[appEventModel.appEvent]['process'](appEventModel, appDataStore);
  }
}

