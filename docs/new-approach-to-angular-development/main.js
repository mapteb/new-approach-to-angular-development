(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nrsenthil\gitmapteb\new-approach-to-angular-development\src\main.ts */"zUnb");


/***/ }),

/***/ "14IT":
/*!********************************************************!*\
  !*** ./src/app/product/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base/base.component */ "d4jW");
/* harmony import */ var src_app_state_transitions_config_app_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state-transitions-config/app-data.model */ "uVom");
/* harmony import */ var src_app_state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state-transitions-config/app-states.enum */ "phQ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _state_manager_app_data_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state-manager/app-data-store.service */ "zPF+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ProductsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handlePoductEvent("product", product_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
} }
class ProductsComponent extends src_app_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(router, appDataStoreService) {
        super(router);
        this.router = router;
        this.appDataStoreService = appDataStoreService;
    }
    ngOnInit() {
        this.validateRoutingRequest(src_app_state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_3__["AppState"].PRODUCTSVIEW);
        this.products = this.appDataStoreService.getProducts();
    }
    handlePoductEvent(evt, productId) {
        const appData = new src_app_state_transitions_config_app_data_model__WEBPACK_IMPORTED_MODULE_2__["AppData"]();
        appData.product.id = productId;
        this.handlePostEvent(evt, src_app_state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_3__["AppState"].PRODUCTSVIEW, appData);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_manager_app_data_store_service__WEBPACK_IMPORTED_MODULE_5__["AppDataStoreService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink", "click"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_2_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _state_manager_app_data_store_service__WEBPACK_IMPORTED_MODULE_5__["AppDataStoreService"] }]; }, null); })();


/***/ }),

/***/ "9p6y":
/*!*************************************************************!*\
  !*** ./src/app/state-transitions-config/app-event.model.ts ***!
  \*************************************************************/
/*! exports provided: AppEventModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEventModel", function() { return AppEventModel; });
/* harmony import */ var _app_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-events.enum */ "cIQc");
/* harmony import */ var _app_states_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-states.enum */ "phQ/");
/* harmony import */ var _app_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-data.model */ "uVom");



class AppEventModel {
    constructor() {
        this.appState = _app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].UNKNOWN;
        this.appEvent = _app_events_enum__WEBPACK_IMPORTED_MODULE_0__["AppEvent"].onload;
        this.appData = new _app_data_model__WEBPACK_IMPORTED_MODULE_2__["AppData"]();
    }
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "d4jW");
/* harmony import */ var _state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state-transitions-config/app-states.enum */ "phQ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeComponent extends _base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(router) {
        super(router);
        this.router = router;
    }
    ngOnInit() {
        this.validateRoutingRequest(_state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_2__["AppState"].HOMEVIEW);
    }
    handleProductsEvent(evt) {
        this.handlePostEvent(evt, _state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_2__["AppState"].HOMEVIEW);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 0, consts: [[1, "leftm"], [1, "content"], [1, "row"], [1, "col-2"], [3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home Works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.handleProductsEvent("products"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cu4k":
/*!***************************************************************!*\
  !*** ./src/app/state-transitions-config/state-transitions.ts ***!
  \***************************************************************/
/*! exports provided: PreEventToInitialStatesConfig, PreEventToProcessConfig, PostEventToFinalStateConfig, FinalStateToPathConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreEventToInitialStatesConfig", function() { return PreEventToInitialStatesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreEventToProcessConfig", function() { return PreEventToProcessConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEventToFinalStateConfig", function() { return PostEventToFinalStateConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalStateToPathConfig", function() { return FinalStateToPathConfig; });
/* harmony import */ var _app_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-events.enum */ "cIQc");
/* harmony import */ var _app_states_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-states.enum */ "phQ/");
/**
 *
  UNKNOWN       -> onload   -> processOnload()   s-> onload_success   -> HOMEVIEW
  HOMEVIEW      -> products -> processProducts() -> products_success -> PRODUCTSVIEW
  PRODUCTSVIEW  -> product  -> processProduct()  -> product_success  -> PODUCTVIEW
  PODUCTVIEW    -> products -> processProducts() -> products_success -> PRODUCTSVIEW
 *
*/


const PreEventToInitialStatesConfig = {
    onload: [_app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].UNKNOWN],
    products: [_app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].HOMEVIEW, _app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].PRODUCTVIEW],
    product: [_app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].PRODUCTSVIEW]
};
const PreEventToProcessConfig = {
    onload: {
        process: function (appEventModel, appDataStore) {
            //TODO: check whether the user is signed in and has required ROLE
            //TODO: pre-fetch data if needed 
            appEventModel.appEvent = _app_events_enum__WEBPACK_IMPORTED_MODULE_0__["AppEvent"].onload_success;
            return appEventModel;
        }
    },
    products: {
        process: function (appEventModel, appDataStore) {
            //TODO: check whether the user is signed in and has required ROLE
            //TODO: pre-fetch data if needed
            appDataStore.loadProducts();
            appEventModel.appEvent = _app_events_enum__WEBPACK_IMPORTED_MODULE_0__["AppEvent"].products_success;
            return appEventModel;
        }
    },
    product: {
        process: function (appEventModel, appDataStore) {
            //TODO: check whether the user is signed in and has required ROLE
            //TODO: pre-fetch data if needed
            appDataStore.loadProduct(appEventModel.appData.product.id);
            appEventModel.appEvent = _app_events_enum__WEBPACK_IMPORTED_MODULE_0__["AppEvent"].product_success;
            return appEventModel;
        }
    }
};
const PostEventToFinalStateConfig = {
    onload_success: _app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].HOMEVIEW,
    products_success: _app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].PRODUCTSVIEW,
    product_success: _app_states_enum__WEBPACK_IMPORTED_MODULE_1__["AppState"].PRODUCTVIEW
};
const FinalStateToPathConfig = {
    HOMEVIEW: "home",
    PRODUCTSVIEW: "products",
    PRODUCTVIEW: "product",
};


/***/ }),

/***/ "JFRm":
/*!******************************************************!*\
  !*** ./src/app/product/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base/base.component */ "d4jW");
/* harmony import */ var src_app_state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state-transitions-config/app-states.enum */ "phQ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_state_manager_app_data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state-manager/app-data-store.service */ "zPF+");






class ProductComponent extends src_app_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(router, appDataStore) {
        super(router);
        this.router = router;
        this.appDataStore = appDataStore;
    }
    ngOnInit() {
        this.validateRoutingRequest(src_app_state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_2__["AppState"].PRODUCTVIEW);
        this.product = this.appDataStore.getProduct();
    }
    handlePoductsEvent(evt) {
        this.handlePostEvent(evt, src_app_state_transitions_config_app_states_enum__WEBPACK_IMPORTED_MODULE_2__["AppState"].PRODUCTVIEW);
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_state_manager_app_data_store_service__WEBPACK_IMPORTED_MODULE_4__["AppDataStoreService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [[3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_6_listener() { return ctx.handlePoductsEvent("products"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.product.name, " Price: ", ctx.product.price, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_state_manager_app_data_store_service__WEBPACK_IMPORTED_MODULE_4__["AppDataStoreService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = "Angular View Transitions";
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [[1, "leftm"], [1, "title"], [1, "content"], [1, "row"], [1, "col-2"], [1, "col-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fancy Products Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["section.leftm[_ngcontent-%COMP%] {\r\n    margin-left: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uLmxlZnRtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styleUrls: ['app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _product_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/products/products.component */ "14IT");
/* harmony import */ var _product_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product/product.component */ "JFRm");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base/base.component */ "d4jW");












class AppModule {
    // Diagnostic only: inspect router configuration
    constructor() {
        // Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
        _product_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
        _product_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
        _base_base_component__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                    _product_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                    _product_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                    _base_base_component__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cIQc":
/*!*************************************************************!*\
  !*** ./src/app/state-transitions-config/app-events.enum.ts ***!
  \*************************************************************/
/*! exports provided: AppEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEvent", function() { return AppEvent; });
var AppEvent;
(function (AppEvent) {
    AppEvent["onload"] = "onload";
    AppEvent["onload_success"] = "onload_success";
    AppEvent["products"] = "products";
    AppEvent["products_success"] = "products_success";
    AppEvent["product"] = "product";
    AppEvent["product_success"] = "product_success";
})(AppEvent || (AppEvent = {}));


/***/ }),

/***/ "d4jW":
/*!****************************************!*\
  !*** ./src/app/base/base.component.ts ***!
  \****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_transitions_config_app_events_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state-transitions-config/app-events.enum */ "cIQc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class BaseComponent {
    constructor(router) {
        this.router = router;
        const navigationExtras = this.router.getCurrentNavigation().extras;
        if (navigationExtras && navigationExtras.state) {
            this.appEventModel = navigationExtras.state.appEvent;
        }
    }
    ngOnInit() {
        if (!this.appEventModel)
            this.handlePostEvent(null, null);
    }
    validateRoutingRequest(appState) {
        if (!this.appEventModel || this.appEventModel.appState !== appState) {
            this.handlePostEvent(null, null);
        }
    }
    handlePostEvent(evt, appState, appData) {
        if (evt) {
            this.appEventModel.appEvent = _state_transitions_config_app_events_enum__WEBPACK_IMPORTED_MODULE_1__["AppEvent"][evt];
            this.appEventModel.appState = appState;
            if (appData)
                this.appEventModel.appData = appData;
        }
        this.router.navigate(['/state-manager'], { state: { appEvent: this.appEventModel } });
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 0, vars: 0, template: function BaseComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base', template: ``
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "dTJj":
/*!**********************************************************!*\
  !*** ./src/app/state-manager/state-manager.component.ts ***!
  \**********************************************************/
/*! exports provided: StateManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateManagerComponent", function() { return StateManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_transitions_config_app_event_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state-transitions-config/app-event.model */ "9p6y");
/* harmony import */ var _state_transitions_config_state_transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state-transitions-config/state-transitions */ "Cu4k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-data-store.service */ "zPF+");






class StateManagerComponent {
    constructor(router, appDataStore) {
        this.router = router;
        this.appDataStore = appDataStore;
        this.appEventModel = new _state_transitions_config_app_event_model__WEBPACK_IMPORTED_MODULE_1__["AppEventModel"]();
        const navigationExtras = this.router.getCurrentNavigation().extras;
        if (navigationExtras && navigationExtras.state) {
            this.appEventModel = navigationExtras.state.appEvent;
        }
    }
    ngOnInit() {
        if (this.appEventModel && this.appEventModel.appEvent && this.appEventModel.appState &&
            _state_transitions_config_state_transitions__WEBPACK_IMPORTED_MODULE_2__["PreEventToInitialStatesConfig"][this.appEventModel.appEvent].includes(this.appEventModel.appState)) {
            console.log(">> pre event: ", this.appEventModel.appEvent);
            this.appEventModel = _state_transitions_config_state_transitions__WEBPACK_IMPORTED_MODULE_2__["PreEventToProcessConfig"][this.appEventModel.appEvent]
                .process(this.appEventModel, this.appDataStore);
            this.appEventModel.appState = _state_transitions_config_state_transitions__WEBPACK_IMPORTED_MODULE_2__["PostEventToFinalStateConfig"][this.appEventModel.appEvent];
            const path = _state_transitions_config_state_transitions__WEBPACK_IMPORTED_MODULE_2__["FinalStateToPathConfig"][this.appEventModel.appState];
            this.router.navigate([path], { state: { appEvent: this.appEventModel } });
        }
        else {
            const appEventModel = new _state_transitions_config_app_event_model__WEBPACK_IMPORTED_MODULE_1__["AppEventModel"]();
            appEventModel.message = { error: "Illegal access" };
            this.router.navigate(["/**"], { state: { appEvent: appEventModel } });
        }
    }
}
StateManagerComponent.ɵfac = function StateManagerComponent_Factory(t) { return new (t || StateManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_data_store_service__WEBPACK_IMPORTED_MODULE_4__["AppDataStoreService"])); };
StateManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateManagerComponent, selectors: [["app-state-manager"]], decls: 0, vars: 0, template: function StateManagerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-state-manager',
                template: ``
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_data_store_service__WEBPACK_IMPORTED_MODULE_4__["AppDataStoreService"] }]; }, null); })();


/***/ }),

/***/ "phQ/":
/*!*************************************************************!*\
  !*** ./src/app/state-transitions-config/app-states.enum.ts ***!
  \*************************************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
var AppState;
(function (AppState) {
    AppState["UNKNOWN"] = "UNKNOWN";
    AppState["HOMEVIEW"] = "HOMEVIEW";
    AppState["PRODUCTSVIEW"] = "PRODUCTSVIEW";
    AppState["PRODUCTVIEW"] = "PRODUCTVIEW";
})(AppState || (AppState = {}));


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.component */ "d4jW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class PageNotFoundComponent extends _base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(router) {
        super(router);
        this.router = router;
        this.message = '';
    }
    ngOnInit() {
        if (this.appEventModel) {
            this.message = this.appEventModel.message.error;
        }
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 1, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "uVom":
/*!************************************************************!*\
  !*** ./src/app/state-transitions-config/app-data.model.ts ***!
  \************************************************************/
/*! exports provided: AppData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppData", function() { return AppData; });
/* harmony import */ var _product_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product/product.model */ "vVUf");

class AppData {
    constructor() {
        this.products = [];
        this.product = new _product_product_model__WEBPACK_IMPORTED_MODULE_0__["Product"]();
    }
}


/***/ }),

/***/ "vVUf":
/*!******************************************!*\
  !*** ./src/app/product/product.model.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, name, price) {
        this.name = "";
        this.price = 0.00;
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _state_manager_state_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-manager/state-manager.component */ "dTJj");
/* harmony import */ var _product_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/products/products.component */ "14IT");
/* harmony import */ var _product_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product/product.component */ "JFRm");









const appRoutes = [
    { path: 'product', component: _product_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'products', component: _product_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'state-manager', component: _state_manager_state_manager_component__WEBPACK_IMPORTED_MODULE_4__["StateManagerComponent"] },
    { path: '', redirectTo: '/state-manager', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xNt9":
/*!*********************************************!*\
  !*** ./src/app/product/products.service.ts ***!
  \*********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.model */ "vVUf");




class ProductsService {
    constructor() {
        this.productsCount = 0;
    }
    getProducts() {
        //TODO: call a REST service to get the products
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](1, "product_1", 12.11), new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](2, "product_2", 22.70)]);
    }
    getProduct(id) {
        //TODO: call a REST service to get the product
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](id, "product_" + id, 12.11 * id));
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zPF+":
/*!*********************************************************!*\
  !*** ./src/app/state-manager/app-data-store.service.ts ***!
  \*********************************************************/
/*! exports provided: AppDataStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataStoreService", function() { return AppDataStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _product_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/products.service */ "xNt9");





class AppDataStoreService {
    constructor(productsService) {
        this.productsService = productsService;
        this.productsStore = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.productStore = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    setProducts(products) {
        this.productsStore.next(products);
    }
    getProducts() {
        return this.productsStore.getValue();
    }
    setProduct(product) {
        this.productStore.next(product);
    }
    getProduct() {
        return this.productStore.getValue();
    }
    loadProducts() {
        this.productsService.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(res => this.setProducts(res));
    }
    loadProduct(id) {
        this.productsService.getProduct(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(res => this.setProduct(res));
    }
}
AppDataStoreService.ɵfac = function AppDataStoreService_Factory(t) { return new (t || AppDataStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"])); };
AppDataStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppDataStoreService, factory: AppDataStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDataStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _product_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map