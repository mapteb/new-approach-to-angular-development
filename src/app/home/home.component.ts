import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppEventModel } from '../state-transitions-config/app-event.model';
import { AppEvent } from '../state-transitions-config/app-events.enum';
import { AppState } from '../state-transitions-config/app-states.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  handlePostEvent(evt: string) {
    let appEventModel = new AppEventModel();
    appEventModel.appEvent = AppEvent[evt];
    appEventModel.appState = AppState.HOMEVIEW;
    
    this.router.navigate(['/state-manager'], { state: { appEvent: appEventModel } });
  }
}
