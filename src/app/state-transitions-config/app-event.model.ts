import { AppEvent } from "./app-events.enum";
import { AppState } from "./app-states.enum";
import { AppData } from "./app-data.model";

export class AppEventModel {
    appEvent = AppEvent.home;
    appState = AppState.UNKNOWN;
    appData = new AppData();
    message?: any;

    constructor() {
    }
}