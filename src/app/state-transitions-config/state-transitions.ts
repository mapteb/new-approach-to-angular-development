/**
  UNKNOWN       -> onload   -> processOnload()  -> onload_success   -> ONLOADSUCCESS
  ONLOADSUCCESS -> home     -> processHome()    -> home_success     -> HOMEVIEW
  HOMEVIEW      -> products -> processHome()    -> products_success -> PRODUCTSVIEW
  PRODUCTSVIEW  -> poduct   -> processProduct() -> product_success  -> PODUCTVIEW
*/

import { AppDataStoreService } from '../state-manager/app-data-store.service';
import { AppEventModel } from './app-event.model';
import { AppEvent } from './app-events.enum';
import { AppState } from './app-states.enum';

export const EventToPathMappings = {
    onload_success: {
        getPath: function (appState: AppState) {
            if (AppState.ONLOADSUCCESS) {
                return "/home";
            } else {
                return "/**";
            }
        }
    },
    products_success: {
        getPath: function (appState: AppState) {
            if (AppState.HOMEVIEW) {
                return "/products";
            } else {
                return "/**";
            }
        }
    }
}

export const EvenToProcessMappings = {
    onload: {
        process: function (appEventModel: AppEventModel, appDataStore: AppDataStoreService):
            AppEventModel {
            if (appEventModel.appState === AppState.UNKNOWN) {
                //TODO: check whether the user is signed in and has required ROLE
                //TODO: pre-fetch data if needed 
                appEventModel.appEvent = AppEvent.onload_success;
            } else {
                //TODO: implement onload_error
            }
            return appEventModel;
        }
    },
    products: {
        process: function (appEventModel: AppEventModel, appDataStore: AppDataStoreService): 
            AppEventModel {
            if (appEventModel.appState === AppState.HOMEVIEW) {
                //TODO: check whether the user is signed in and has required ROLE
                //TODO: pre-fetch data if needed
                appDataStore.loadProducts();
                appEventModel.appEvent = AppEvent.products_success;
            } else {
                //TODO: implement products_error
            }
            return appEventModel;
        }
    }
}
