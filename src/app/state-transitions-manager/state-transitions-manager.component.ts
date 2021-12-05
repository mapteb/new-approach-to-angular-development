import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
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
  selector: 'app-state-ransitions-manager',
  template: ``
})
export class StateTransitionsManagerComponent extends BaseComponent implements OnInit {

  constructor(protected router: Router, private appDataStore: AppDataStoreService) {
    super(router);
  }

  /**
   * When an application's pre-event is received this component
   * 1. Checks whether the pre-event is raised from a valid application state
   * 2. Triggers the process configured for this pre-event
   * 3. Figures the path corresponding to the post-state returned by the process
   * 4. Routes the request including an AppEventModel
   */
  ngOnInit(): void {
    if (this.appEventModel && this.appEventModel.appEvent && this.appEventModel.appState &&
      PreEventToInitialStatesConfig[this.appEventModel.appEvent].includes(this.appEventModel.appState)) {
      console.log(">> appState: ", this.appEventModel.appState);
      this.appEventModel = PreEventToProcessConfig[this.appEventModel.appEvent]
                            .process(this.appEventModel, this.appDataStore);
      this.appEventModel.appState = PostEventToFinalStateConfig[this.appEventModel.appEvent];
      const path = FinalStateToPathConfig[this.appEventModel.appState];
      this.appDataStore.setCurrentView(this.appEventModel.appState);
      this.router.navigate([path], { state: { appEvent: this.appEventModel } });
    } else {
      this.router.navigate(["/**"]);
    }
  }
}

