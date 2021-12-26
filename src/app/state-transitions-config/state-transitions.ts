import { identifierName, Identifiers } from '@angular/compiler';
import { AppDataStoreService } from '../state-transitions-manager/app-data-store.service';
import { AppData } from './app-data.model';
import { AppEventModel } from './app-event.model';
import { AppEvent } from './app-events.enum';
import { AppState } from './app-states.enum';

/**
 * The following state transitions correspond to the SPA tht we need to develop
 * The five columns are: Initial State, pre-event, process, post-event and final state
 * State Transitions corresponding to eror events like products_error are not considered
 * here but can be easily added as aditional transitions
 * 
  UNKNOWN       -> home     -> processHome()     -> home_success     -> HOMEVIEW
  UNKNOWN       -> products -> processProducts() -> products_success -> PRODUCTSVIEW
  HOMEVIEW      -> products -> processProducts() -> products_success -> PRODUCTSVIEW
  --
  PRODUCTSVIEW  -> product  -> processProduct()  -> product_success  -> PRODUCTVIEW
  PRODUCTSVIEW  -> home     -> processHome()     -> home_success     -> HOMEVIEW
  --
  PRODUCTVIEW   -> products -> processProducts() -> products_success -> PRODUCTSVIEW
  PRODUCTVIEW   -> home     -> processHome()     -> home_success     -> HOMEVIEW
 *
*/

interface IDictionary<TValue> {
    [id: string]: TValue;
}

/**
 * Configure valid initial states that can raise the three events - home, products and product
 */
export const PreEventToInitialStatesConfig = {
    home: [AppState.UNKNOWN, AppState.PRODUCTSVIEW, AppState.PRODUCTVIEW],
    products: [AppState.UNKNOWN, AppState.HOMEVIEW, AppState.PRODUCTVIEW],
    product: [AppState.PRODUCTSVIEW]
} as IDictionary<AppState[]>

/** 
 * Configure the process that should be triggered when a pre-event is raised
 * The functions used here can also be imported from individual files
 * These functions pre-fetch data so the Angular component can load fast
 * These functions can, optionally, check user role for authorization
 */
export const PreEventToProcessConfig = {
    home: {
        process: function (appEventModel: AppEventModel, appDataStore: AppDataStoreService):
            AppEventModel {
            //TODO: check whether the user is signed in and has required ROLE
            //TODO: pre-fetch data if needed 
            appEventModel.appEvent = AppEvent.home_success;
            return appEventModel;
        }
    },
    products: {
        process: function (appEventModel: AppEventModel, appDataStore: AppDataStoreService): 
            AppEventModel {
            //TODO: check whether the user is signed in and has required ROLE
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
            const appData = new AppData();
            if (appEventModel.appData.product.id &&
                    appEventModel.appData.product.id> 0) {
                appData.product = appDataStore.getProduct(appEventModel.appData.product.id);
            }
            appEventModel.appData = appData;
            appEventModel.appEvent = AppEvent.product_success;
            return appEventModel;
        }
    }
} as {[id: string]: {[key: string]: any}}

/**
 * Configure the post-event to final state mappings
 */
export const PostEventToFinalStateConfig = {
    home_success: AppState.HOMEVIEW,
    products_success: AppState.PRODUCTSVIEW,
    product_success: AppState.PRODUCTVIEW
} as IDictionary<AppState>

/**
 * Configure final state to path mappings
 */
export const FinalStateToPathConfig = {
    HOMEVIEW: "home",
    PRODUCTSVIEW: "products",
    PRODUCTVIEW: "products/product",
} as IDictionary<string>