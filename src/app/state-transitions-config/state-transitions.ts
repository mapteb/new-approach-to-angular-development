/**
 * 
  UNKNOWN       -> onload   -> processOnload()   -> onload_success   -> HOMEVIEW
  HOMEVIEW      -> products -> processProducts() -> products_success -> PRODUCTSVIEW
  PRODUCTSVIEW  -> product  -> processProduct()  -> product_success  -> PODUCTVIEW
  PODUCTVIEW    -> products -> processProducts() -> products_success -> PRODUCTSVIEW
 *
*/

import { AppDataStoreService } from '../state-manager/app-data-store.service';
import { AppData } from './app-data.model';
import { AppEventModel } from './app-event.model';
import { AppEvent } from './app-events.enum';
import { AppState } from './app-states.enum';

export const PreEventToInitialStatesConfig = {
    onload: [AppState.UNKNOWN],
    products: [AppState.HOMEVIEW, AppState.PRODUCTVIEW],
    product: [AppState.PRODUCTSVIEW]
}

export const PreEventToProcessConfig = {
    onload: {
        process: function (appEventModel: AppEventModel, appDataStore: AppDataStoreService):
            AppEventModel {
            //TODO: check whether the user is signed in and has required ROLE
            //TODO: pre-fetch data if needed 
            appEventModel.appEvent = AppEvent.onload_success;
            return appEventModel;
        }
    },
    products: {
        process: function (appEventModel: AppEventModel, appDataStore: AppDataStoreService): 
            AppEventModel {
            //TODO: check whether the user is signed in and has required ROLE
            //TODO: pre-fetch data if needed
            const appData = new AppData();
            appData.products = appDataStore.getProducts();
            appEventModel.appData = appData;
            appEventModel.appEvent = AppEvent.products_success;
            return appEventModel;
        }
    },
    product: {
        process: function (appEventModel: AppEventModel, appDataStore: AppDataStoreService): 
            AppEventModel {
            //TODO: check whether the user is signed in and has required ROLE
            //TODO: pre-fetch data if needed
            const appData = new AppData();
            appData.product = appDataStore.getProduct(appEventModel.appData.product.id);
            appEventModel.appData = appData;
            appEventModel.appEvent = AppEvent.product_success;
            return appEventModel;
        }
    }
}

export const PostEventToFinalStateConfig = {
    onload_success: AppState.HOMEVIEW,
    products_success: AppState.PRODUCTSVIEW,
    product_success: AppState.PRODUCTVIEW
}

export const FinalStateToPathConfig = {
    HOMEVIEW: "home",
    PRODUCTSVIEW: "products",
    PRODUCTVIEW: "product",
}