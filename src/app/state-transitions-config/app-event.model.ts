import { AppEvent } from "./app-events.enum";
import { AppState } from "./app-states.enum";
import { AppData } from "./app-data.model";

export class AppEventModel {
    appEvent: AppEvent;
    appState: AppState;
    appData: AppData;
    message: any;

    constructor() {
        this.appState = AppState.UNKNOWN;
        this.appEvent = AppEvent.onload;
        this.appData = new AppData();
    }
}