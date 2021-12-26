import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppEventModel } from 'src/app/state-transitions-config/app-event.model';
import { StateTransitionsManagerComponent } from '../state-transitions-manager/state-transitions-manager.component';
import { AppData } from 'src/app/state-transitions-config/app-data.model';
import { AppEvent } from 'src/app/state-transitions-config/app-events.enum';
import { AppState } from 'src/app/state-transitions-config/app-states.enum';
import { AppDataStoreService } from 'src/app/state-transitions-manager/app-data-store.service';
import { ProductsService } from 'src/app/product/products.service';
import { Product } from '../product/product.model';
import { Router } from '@angular/router';

describe('Unit test each state transition:', () => {
  let component: StateTransitionsManagerComponent;
  let fixture: ComponentFixture<StateTransitionsManagerComponent>;
  let router: Router;
  let appDataStore: AppDataStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ StateTransitionsManagerComponent ],
      providers: [ProductsService, AppDataStoreService]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    appDataStore = TestBed.inject(AppDataStoreService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTransitionsManagerComponent);
    component = fixture.componentInstance;
  });

  it('From unknown state when home event triggered then should be routed to the path /home', () => {
    const appEventModel = new AppEventModel();
    const appData = new AppData();
    appEventModel.appState = AppState.UNKNOWN;
    appEventModel.appEvent = AppEvent.home;
    appEventModel.appData = new AppData();
    const navigateSpy = spyOn(router, 'navigate');
    //@ts-ignore
    component.doTransition(appEventModel, appDataStore)
    expect(navigateSpy).toHaveBeenCalledWith(['home'], { state: { appEvent: appEventModel } });
  });

  it('From unknown state when products event triggered then should be routed to the path /products', () => {
    const appEventModel = new AppEventModel();
    const appData = new AppData();
    appEventModel.appState = AppState.UNKNOWN;
    appEventModel.appEvent = AppEvent.products;
    appEventModel.appData = new AppData();
    const navigateSpy = spyOn(router, 'navigate');
    //@ts-ignore
    component.doTransition(appEventModel, appDataStore)
    expect(navigateSpy).toHaveBeenCalledWith(['products'], { state: { appEvent: appEventModel } });
  });

  it('From home view state when products event triggered then should be routed to the path /products', () => {
    const appEventModel = new AppEventModel();
    const appData = new AppData();
    appEventModel.appState = AppState.HOMEVIEW;
    appEventModel.appEvent = AppEvent.products;
    appEventModel.appData = new AppData();
    const navigateSpy = spyOn(router, 'navigate');
    //@ts-ignore
    component.doTransition(appEventModel, appDataStore)
    expect(navigateSpy).toHaveBeenCalledWith(['products'], { state: { appEvent: appEventModel } });
  });

  it('From products view state when product event triggered then should be routed to the path /product', () => {
    const appEventModel = new AppEventModel();
    const appData = new AppData();
    appEventModel.appState = AppState.PRODUCTSVIEW;
    appEventModel.appEvent = AppEvent.product;
    appEventModel.appData = new AppData();
    const product = new Product(1);
    const navigateSpy = spyOn(router, 'navigate');
    //@ts-ignore
    component.doTransition(appEventModel, appDataStore)
    expect(navigateSpy).toHaveBeenCalledWith(['product'], { state: { appEvent: appEventModel } });
  });

  it('From product view state when products event triggered then should be routed to the path /products', () => {
    const appEventModel = new AppEventModel();
    const appData = new AppData();
    appEventModel.appState = AppState.PRODUCTVIEW;
    appEventModel.appEvent = AppEvent.products;
    appEventModel.appData = new AppData();
    const navigateSpy = spyOn(router, 'navigate');
    //@ts-ignore
    component.doTransition(appEventModel, appDataStore)
    expect(navigateSpy).toHaveBeenCalledWith(['products'], { state: { appEvent: appEventModel } });
  });

  it('From products view state when home event triggered then should be routed to the path /home', () => {
    const appEventModel = new AppEventModel();
    const appData = new AppData();
    appEventModel.appState = AppState.PRODUCTSVIEW;
    appEventModel.appEvent = AppEvent.home;
    appEventModel.appData = new AppData();
    const navigateSpy = spyOn(router, 'navigate');
    //@ts-ignore
    component.doTransition(appEventModel, appDataStore)
    expect(navigateSpy).toHaveBeenCalledWith(['home'], { state: { appEvent: appEventModel } });
  });

  it('From product view state when home event triggered then should be routed to the path /home', () => {
    const appEventModel = new AppEventModel();
    const appData = new AppData();
    appEventModel.appState = AppState.PRODUCTVIEW;
    appEventModel.appEvent = AppEvent.home;
    appEventModel.appData = new AppData();
    const navigateSpy = spyOn(router, 'navigate');
    //@ts-ignore
    component.doTransition(appEventModel, appDataStore)
    expect(navigateSpy).toHaveBeenCalledWith(['home'], { state: { appEvent: appEventModel } });
  });
});
