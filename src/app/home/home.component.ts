import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
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
  }

  handleProductsEvent(evt: string) {
    this.handlePostEvent(evt, AppState.HOMEVIEW);
  }
}
