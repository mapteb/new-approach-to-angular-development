import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { AppEvent } from '../state-transitions-config/app-events.enum';
import { AppState } from '../state-transitions-config/app-states.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit(): void { 
    super.ngOnInit();
  }

  handleProductsEvent(evt: string) {
    super.handlePostEvent(evt, AppState.HOMEVIEW);
  }

}
