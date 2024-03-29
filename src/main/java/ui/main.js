"use strict";
(self["webpackChunkui_store"] = self["webpackChunkui_store"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-category-menu/product-category-menu.component */ 5428);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart-status/cart-status.component */ 2769);
/* harmony import */ var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-status/login-status.component */ 3946);







class AppComponent {
  constructor(productService) {
    this.productService = productService;
    this.title = 'ui-store';
    this.productCategories = [];
  }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(data => {
      this.productCategories = data;
    });
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 60,
  vars: 0,
  consts: [[1, "page-wrapper"], [1, "menu-sidebar", "d-none", "d-lg-block"], [1, "logo"], ["routerLink", "/products"], ["src", "assets/images/logo.jpg", "alt", "luv2shop", "width", "80px", "height", "60px", 1, "img-responsive"], [1, "page-container"], [1, "header-desktop"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "header-wrap"], [1, "account-wrap"], ["routerLink", "product/getProducts/1", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Filter Coffee", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/fc.jpg", "width", "150px", "height", "80px", 1, "img-responsive"], ["routerLink", "product/getProducts/2", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Instant Coffee", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/ic.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/3", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Chicory Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/chi.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/4", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Filter Coffee Decoction", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/dec.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/5", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Vermicelli Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/ver.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/6", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Premix Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/pmx.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/7", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Tea Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/tea.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/8", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Sukku Coffee", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/sku.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/9", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Sugar Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/sgr.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/10", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Dairy Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/dry.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/11", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "OIL Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/oil.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/12", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Masala Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/mla.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/13", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Rudhram Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/rdm.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/14", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Eatable-Noodles,Chilli Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/nood.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/15", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Wheat Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/wht.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/16", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Sooji Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["routerLink", "product/getProducts/17", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Dals Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/dals.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], ["routerLink", "product/getProducts/18", "routerLinkActive", "active-link", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Nuts Products", 1, "au-btn-submit", 2, "margin-left", "10px", "margin-bottom", "10px"], ["src", "assets/images/products/HDR/nuts.jpg", "width", "150px", "height", "110px", 1, "img-responsive"], [1, "ms-auto"], ["routerLink", "/about", "routerLinkActive", "active-link"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-product-category-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "header", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-search")(12, "app-login-status")(13, "app-cart-status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div")(17, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Categories:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "footer")(56, "ul")(57, "li", 46)(58, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_1__.ProductCategoryMenuComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_3__.CartStatusComponent, _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_4__.LoginStatusComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 4646);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product.service */ 6082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-category-menu/product-category-menu.component */ 5428);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-details/product-details.component */ 6525);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart-status/cart-status.component */ 2769);
/* harmony import */ var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cart-details/cart-details.component */ 1201);
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkout/checkout.component */ 8149);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login-status/login-status.component */ 3946);
/* harmony import */ var src_app_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth-interceptor.service */ 2993);
/* harmony import */ var _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/order-history/order-history.component */ 8767);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/alert/alert.component */ 9803);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/slider/slider.component */ 6052);
/* harmony import */ var _components_animate_animate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/animate/animate.component */ 8270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);


































const routes = [{
  path: 'login/callback',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent
}, {
  path: 'product/getInfo/:id',
  component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailsComponent
}, {
  path: 'product/getProducts/search/:keyword',
  component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: 'product/getProducts/:id',
  component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: 'product/getProducts',
  component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: 'checkout',
  component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__.CheckoutComponent
}, {
  path: 'cart-details',
  component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_7__.CartDetailsComponent
}, {
  path: 'order-history',
  component: _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_12__.OrderHistoryComponent
}, {
  path: 'alert',
  component: _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__.AlertComponent
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__.AboutComponent
}, {
  path: '',
  redirectTo: 'product/getProducts',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'product/getProducts',
  pathMatch: 'full'
}];
class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
    useClass: src_app_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptorService,
    multi: true
  }],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__.MatBadgeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_29__.ToastrModule.forRoot()]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent, _components_product_category_menu_product_category_menu_component__WEBPACK_IMPORTED_MODULE_3__.ProductCategoryMenuComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailsComponent, _components_cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_6__.CartStatusComponent, _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_7__.CartDetailsComponent, _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__.CheckoutComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent, _components_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_10__.LoginStatusComponent, _components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_12__.OrderHistoryComponent, _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__.AlertComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__.AboutComponent, _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_15__.SliderComponent, _components_animate_animate_component__WEBPACK_IMPORTED_MODULE_16__.AnimateComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__.MatBadgeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_29__.ToastrModule]
  });
})();

/***/ }),

/***/ 593:
/*!***********************************!*\
  !*** ./src/app/common/address.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* binding */ Address)
/* harmony export */ });
class Address {}

/***/ }),

/***/ 3162:
/*!*************************************!*\
  !*** ./src/app/common/cart-item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItem": () => (/* binding */ CartItem)
/* harmony export */ });
class CartItem {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.discountPrice = product.discountPrice;
    this.quantity = 1;
  }

}

/***/ }),

/***/ 1385:
/*!************************************!*\
  !*** ./src/app/common/customer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer": () => (/* binding */ Customer)
/* harmony export */ });
class Customer {}

/***/ }),

/***/ 5447:
/*!*****************************************!*\
  !*** ./src/app/common/message-model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageModel": () => (/* binding */ MessageModel)
/* harmony export */ });
class MessageModel {}

/***/ }),

/***/ 9197:
/*!**************************************!*\
  !*** ./src/app/common/order-item.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
  constructor(cartItem) {
    this.imageUrl = cartItem.imageUrl;
    this.discountPrice = cartItem.discountPrice;
    this.unitPrice = cartItem.unitPrice;
    this.quantity = cartItem.quantity;
    this.productId = cartItem.id;
  }

}

/***/ }),

/***/ 2759:
/*!*********************************!*\
  !*** ./src/app/common/order.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {}

/***/ }),

/***/ 9658:
/*!************************************!*\
  !*** ./src/app/common/purchase.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Purchase": () => (/* binding */ Purchase)
/* harmony export */ });
class Purchase {}

/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {}

AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};

AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 28,
  vars: 0,
  consts: [["src", "assets/images/logo.jpg", 1, "center"], [1, "bi", "bi-geo"], [1, "bi", "bi-mailbox"], [1, "bi", "bi-phone"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr")(1, "hr")(2, "hr")(3, "hr")(4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nandini Cafe Treats!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Only Shop in wholesale price through online for the End Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " NCT Supermarket offer Customers the best service. We make sure to give low prices with the best value.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Narasus Products Available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For Delivery and any queries, please contact 9944370922/8754084538.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div")(19, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div")(22, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " No:R-77, Ground Floor, MMDA Colony, Water Tank Road, Arumbakkam,Near Poorvika Showroom, Chennai - 600106 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " nctmegastore@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 9944370922/8754084538. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".center[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9803:
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AlertComponent {}

AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)();
};

AlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["app-alert"]],
  decls: 2,
  vars: 0,
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Order has been received.\\nWe will get back you soon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8270:
/*!*********************************************************!*\
  !*** ./src/app/components/animate/animate.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateComponent": () => (/* binding */ AnimateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slider/slider.component */ 6052);


class AnimateComponent {
  constructor() {
    this.sliderData = [{
      index: 0,
      headline: 'In The Wilderness',
      src: 'assets/images/products/FC/filter-coffee-pb.jpg'
    }, {
      index: 1,
      headline: 'In The Wilderness',
      src: 'assets/images/products/FC/filter-coffee-pb.jpg'
    }];
  }

}

AnimateComponent.ɵfac = function AnimateComponent_Factory(t) {
  return new (t || AnimateComponent)();
};

AnimateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AnimateComponent,
  selectors: [["app-animate"]],
  decls: 1,
  vars: 1,
  consts: [[3, "sliderData"]],
  template: function AnimateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-slider", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sliderData", ctx.sliderData);
    }
  },
  dependencies: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_0__.SliderComponent],
  styles: [".container[_ngcontent-%COMP%] {\r\n  background: #78A3F2;\r\n  height: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbmltYXRlL2FuaW1hdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzhBM0YyO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1201:
/*!*******************************************************************!*\
  !*** ./src/app/components/cart-details/cart-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartDetailsComponent": () => (/* binding */ CartDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function CartDetailsComponent_div_3_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p")(10, "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_9_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const temp_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.incrementQuantity(temp_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16)(22, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_9_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const temp_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.decrementQuantity(temp_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDetailsComponent_div_3_tr_9_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const temp_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.remove(temp_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const temp_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", temp_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](temp_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 6, temp_r4.discountPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 9, temp_r4.unitPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", temp_r4.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Subtotal:", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 12, temp_r4.quantity * temp_r4.discountPrice, "INR"), "");
  }
}

function CartDetailsComponent_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delivery Charges:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Applicable for below 1000 Rupees.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}

function CartDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "table", 5)(2, "tr")(3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Product Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CartDetailsComponent_div_3_tr_9_Template, 31, 15, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td")(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p")(22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CartDetailsComponent_div_3_div_25_Template, 6, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div")(27, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx_r0.totalQuantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total MRP: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 6, ctx_r0.totalDiscount + ctx_r0.totalPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Discount: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 9, ctx_r0.totalDiscount, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Grand Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 12, ctx_r0.totalPrice, "INR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.shippingFees);
  }
}

function CartDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your Shopping Cart is Empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

class CartDetailsComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartItems = [];
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalQuantity = 0;
    this.shippingFees = true;
  }

  ngOnInit() {
    this.listCartDetails();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalDiscount.subscribe(data => this.totalDiscount = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.computeCartTotals();

    if (this.totalPrice > 1000) {
      this.shippingFees = false;
    }
  }

  incrementQuantity(item) {
    this.cartService.addToCart(item);
  }

  decrementQuantity(item) {
    this.cartService.decrementQuantity(item);
  }

  remove(item) {
    this.cartService.remove(item);
  }

}

CartDetailsComponent.ɵfac = function CartDetailsComponent_Factory(t) {
  return new (t || CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};

CartDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CartDetailsComponent,
  selectors: [["app-cart-details"]],
  decls: 5,
  vars: 2,
  consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "table", "table-bordered"], ["width", "20%"], ["width", "50%"], ["width", "30%"], [4, "ngFor", "ngForOf"], ["colspan", "2"], ["routerLink", "/checkout", 1, "btn", "btn-primary"], ["width", "150px", 1, "image-responsive", 3, "src"], [1, "price"], [1, "items"], [1, "row", "no-gutters"], [1, "col"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fan", "fa-plus"], [1, "col", "ml-4", "mr-2"], [1, "fan", "fa-minus"], [1, "col-8"], [1, "btn", "btn-primary", "btn-sm", "mt-2", 3, "click"], [1, "mt-2"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
  template: function CartDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CartDetailsComponent_div_3_Template, 29, 15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CartDetailsComponent_div_4_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length == 0);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2769:
/*!*****************************************************************!*\
  !*** ./src/app/components/cart-status/cart-status.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStatusComponent": () => (/* binding */ CartStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class CartStatusComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.totalPrice = 0.00;
    this.totalDiscount = 0.00;
    this.totalQuantity = 0;
  }

  ngOnInit() {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.totalDiscount.subscribe(data => this.totalDiscount = data);
  }

}

CartStatusComponent.ɵfac = function CartStatusComponent_Factory(t) {
  return new (t || CartStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};

CartStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CartStatusComponent,
  selectors: [["app-cart-status"]],
  decls: 8,
  vars: 5,
  consts: [[1, "cart-area", "d-n"], ["routerLink", "/cart-details"], [1, "total"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart", 2, "color", "white", "font-size", "28px"]],
  template: function CartStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, ctx.totalPrice, "INR"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.totalQuantity, "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8149:
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/validators/shop-validators */ 1562);
/* harmony import */ var src_app_common_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/address */ 593);
/* harmony import */ var src_app_common_purchase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/purchase */ 9658);
/* harmony import */ var src_app_common_order_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/order-item */ 9197);
/* harmony import */ var src_app_common_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/order */ 2759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_shop_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shop-form.service */ 8303);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/checkout.service */ 8106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);















function CheckoutComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " First Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " First Name atLeast 2 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_14_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_14_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.firstName.errors.required || ctx_r0.firstName.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.firstName.errors.minLength);
  }
}

function CheckoutComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Last Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Last Name atLeast 1 Character Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_22_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_22_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors.required || ctx_r1.lastName.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors.minLength);
  }
}

function CheckoutComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Phone Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Phone Number must be 10 digits Long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_30_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_30_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.phone.errors.required || ctx_r2.phone.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.phone.errors.minLength);
  }
}

function CheckoutComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Street is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Street atLeast 2 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_41_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_41_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.shippingAddressStreet.errors.required || ctx_r3.shippingAddressStreet.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.shippingAddressStreet.errors.minLength);
  }
}

function CheckoutComponent_div_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Location atLeast 2 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_49_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_49_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.shippingAddressCity.errors.required || ctx_r4.shippingAddressCity.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.shippingAddressCity.errors.minLength);
  }
}

function CheckoutComponent_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " ZipCode is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_57_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " ZipCode atLeast 6 Characters Long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CheckoutComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutComponent_div_57_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutComponent_div_57_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressZipCode.errors.required || ctx_r5.shippingAddressZipCode.errors.notOnlyWhiteSpace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.shippingAddressZipCode.errors.minLength);
  }
}

function CheckoutComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Delivery Charge: \u20B950");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function CheckoutComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Final Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 1, ctx_r7.totalPrice + 50, "INR"), "");
  }
}

class CheckoutComponent {
  constructor(formBuilder, shopFormService, cartService, checkoutService, router, toastr) {
    this.formBuilder = formBuilder;
    this.shopFormService = shopFormService;
    this.cartService = cartService;
    this.checkoutService = checkoutService;
    this.router = router;
    this.toastr = toastr;
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalQuantity = 0;
    this.shippingFees = true;
    this.phones = null;
    this.customerValidate = false;
    this.checkDisk = false;
    this.isDisabled = false;
    this.address = new src_app_common_address__WEBPACK_IMPORTED_MODULE_1__.Address();
    this.storage = localStorage;
  }

  ngOnInit() {
    this.reviewCartDetails();
    this.getAddressDetails();
    this.isDisabled = false;
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2), src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),
        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('[0-9]{10}')]),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('') //email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9._]+\\.[a-z]{2,4}$')])

      }),
      shippingAddress: this.formBuilder.group({
        /* country: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]), */
        street: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),
        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace]),

        /* state: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]), */
        zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6), src_app_validators_shop_validators__WEBPACK_IMPORTED_MODULE_0__.ShopValidators.notOnlyWhiteSpace])
      }) //,

      /* billingAddress: this.formBuilder.group({
      country: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      street: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      city: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      state: new FormControl('',[Validators.required,ShopValidators.notOnlyWhiteSpace]),
      zipCode: new FormControl('',[Validators.required,Validators.minLength(6),ShopValidators.notOnlyWhiteSpace]),
      }) */

      /* creditCard: this.formBuilder.group({
      cardType: new FormControl('',[Validators.required]),
      nameOnCard: new FormControl('',[Validators.required,Validators.minLength(2),ShopValidators.notOnlyWhiteSpace]),
      cardNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{16}')]),
      securityCode: new FormControl('',[Validators.required,Validators.pattern('[0-9]{3}')]),
      expirationMonth: new FormControl('',[Validators.required]),
      expirationYear: new FormControl('',[Validators.required])
      }) */

    }); //populate creditCard months

    /* const startMonth: number = new Date().getMonth()+1;
    
    this.shopFormService.getCreditCardMonths(startMonth).subscribe(
    data=>{
    this.creditCardMonths = data;
    });
    
    this.shopFormService.getCreditCardYears().subscribe(
    data=>{
    this.creditCardYears = data;
    }); */
  }

  onSubmit() {
    this.isDisabled = true; //alert(this.checkoutFormGroup.get('customer').value.email);

    let location = ['600106', '600094', '600034', '600030', '600026', '600093', '600024', '600092', '600102', '600107', '600010', '600040', '600031', '600029'];

    if (this.checkoutFormGroup.invalid) {
      //alert('test');
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    if (!location.includes(this.checkoutFormGroup.get('shippingAddress.zipCode').value)) {
      this.toastr.info("Currently we are not serving to this location.\nWe will get back you soon.", "Invalid Location!"); //this.router.navigateByUrl("/product/getProducts");
    }

    this.phones = this.checkoutFormGroup.get('customer.phone').value; //this.phones = JSON.parse(this.storage.getItem('phone'));
    //alert(this.phones);

    this.checkoutService.validateCustomer(this.phones).subscribe({
      next: response => {
        if (response != null && response.identity != null && response.identity.length > 0) {
          let order = new src_app_common_order__WEBPACK_IMPORTED_MODULE_4__.Order();

          if (this.totalPrice < 1000) {
            order.totalPrice = this.totalPrice + 50;
          } else {
            order.totalPrice = this.totalPrice;
          }

          order.totalQuantity = this.totalQuantity;
          const cartItems = this.cartService.cartItems;
          let orderItems = cartItems.map(temp => new src_app_common_order_item__WEBPACK_IMPORTED_MODULE_3__.OrderItem(temp));
          let purchase = new src_app_common_purchase__WEBPACK_IMPORTED_MODULE_2__.Purchase();
          purchase.customer = this.checkoutFormGroup.controls['customer'].value; //purchase.customer.identity = genUniqueId();

          purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value; //const shippingState: string = JSON.parse(JSON.stringify(purchase.shippingAddress.state));

          /* const shippingCountry: string = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
          purchase.shippingAddress.state = shippingState;
          purchase.shippingAddress.country = shippingCountry;  */

          /*    purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
             const billingState: string = JSON.parse(JSON.stringify(purchase.billingAddress.state));
             const billingCountry: string = JSON.parse(JSON.stringify(purchase.billingAddress.country));
             purchase.billingAddress.state = billingState;
             purchase.billingAddress.country = billingCountry; */

          purchase.order = order;
          purchase.orderItems = orderItems;
          this.checkoutService.placeOrder(purchase).subscribe({
            next: response => {
              //alert(`Your Order has been received.\nOrder Tracking Number:${response.orderTrackingNumber}`);
              //alert(`Your Order has been received.\nWe will get back you soon.`);
              this.resetCart();
              this.toastr.success("Your Order has been received.\nWe will get back you soon.", "Ordered Successfully!");

              if (JSON.parse(this.storage.getItem('authError')) == "false") {
                this.router.navigateByUrl("/order-history");
              } else {
                this.router.navigateByUrl("/product/getProducts/1");
              }
            },
            error: err => {
              //alert(`There was an error:${err.message}`);
              console.log(`There was an error:${err.message}`);
            }
          });
        } else {
          this.toastr.warning("Please Verify your mobile number.", "Need Verification!");
          this.router.navigateByUrl("login");
        }
      },
      error: err => {
        //alert(`There was an error:${err.message}`);
        console.log(`There was an error:${err.message}`);
        return;
      }
    });
  }

  get firstName() {
    return this.checkoutFormGroup.get('customer.firstName');
  }

  get lastName() {
    return this.checkoutFormGroup.get('customer.lastName');
  }

  get phone() {
    return this.checkoutFormGroup.get('customer.phone');
  }

  get email() {
    return this.checkoutFormGroup.get('customer.email');
  }

  get shippingAddressStreet() {
    return this.checkoutFormGroup.get('shippingAddress.street');
  }

  get shippingAddressCity() {
    return this.checkoutFormGroup.get('shippingAddress.city');
  }
  /* get shippingAddressState(){ return this.checkoutFormGroup.get('shippingAddress.state');} */


  get shippingAddressZipCode() {
    return this.checkoutFormGroup.get('shippingAddress.zipCode');
  }
  /* get shippingAddressCountry(){ return this.checkoutFormGroup.get('shippingAddress.country');} */

  /*
  get billingAddressStreet(){ return this.checkoutFormGroup.get('billingAddress.street');}
  get billingAddressCity(){ return this.checkoutFormGroup.get('billingAddress.city');}
  get billingAddressState(){ return this.checkoutFormGroup.get('billingAddress.state');}
  get billingAddressZipCode(){ return this.checkoutFormGroup.get('billingAddress.zipCode');}
  get billingAddressCountry(){ return this.checkoutFormGroup.get('billingAddress.country');}
   */

  /*
  get creditCardType(){ return this.checkoutFormGroup.get('creditCard.cardType');}
  get creditCardNameOnCard(){ return this.checkoutFormGroup.get('creditCard.nameOnCard');}
  get creditCardNumber(){ return this.checkoutFormGroup.get('creditCard.cardNumber');}
  get creditCardSecurityCode(){ return this.checkoutFormGroup.get('creditCard.securityCode');}
   */

  /* copyShippingAddressToBillingAddress(event){
  if(event.target.checked){
  this.checkoutFormGroup.controls.billingAddress.setValue(this.checkoutFormGroup.controls.shippingAddress.value);
  }else{
  this.checkoutFormGroup.controls.billingAddress.reset();
  }
  } */


  resetCart() {
    this.cartService.cartItems = [];
    this.cartService.totalQuantity.next(0);
    this.cartService.totalPrice.next(0);
    this.cartService.totalDiscount.next(0);
    this.checkoutFormGroup.reset();
    this.storage.removeItem('cartItems');
    this.router.navigateByUrl("/product/getProducts");
  }

  handleMonthsAndYears() {
    /* const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);
    
    let startMonth: number;
    if(currentYear==selectedYear){
      startMonth = new Date().getMonth()+1;
    }else{
      startMonth = 1;
    }
    
    this.shopFormService.getCreditCardMonths(startMonth).subscribe(
    data=>{
    this.creditCardMonths = data;
    }
    ); */
  }

  reviewCartDetails() {
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalDiscount.subscribe(data => this.totalDiscount = data);

    if (this.totalPrice > 1000) {
      this.shippingFees = false;
    }
  }

  getAddressDetails() {
    this.phones = JSON.parse(this.storage.getItem('phone'));

    if (this.phones && this.phones.length > 0) {
      this.cartService.getProfile(this.phones).subscribe({
        next: response => {
          if (response != null) {
            this.address.street = response.shippingAddress.street;
            this.address.city = response.shippingAddress.city;
            this.address.zipCode = response.shippingAddress.zipCode;
            this.checkoutFormGroup.get('customer.firstName').setValue(response.customer.firstName);
            this.checkoutFormGroup.get('customer.lastName').setValue(response.customer.lastName);

            if (response.customer.phone != null) {
              this.checkDisk = true;
            }

            this.checkoutFormGroup.get('customer.phone').setValue(response.customer.phone);
            this.checkoutFormGroup.get('customer.email').setValue(response.customer.email);
            this.checkoutFormGroup.get('shippingAddress.city').setValue(response.shippingAddress.city);
            this.checkoutFormGroup.get('shippingAddress.street').setValue(response.shippingAddress.street);
            this.checkoutFormGroup.get('shippingAddress.zipCode').setValue(response.shippingAddress.zipCode);
          } else {
            this.checkoutFormGroup.get('customer.phone').setValue(this.phones);
            this.checkDisk = true;
          }
        },
        error: err => {
          //alert(`There was an error:${err.message}`);
          console.log(`There was an error:${err.message}`);
        }
      });
    }
  }

}

CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
  return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_shop_form_service__WEBPACK_IMPORTED_MODULE_5__.ShopFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_7__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
};

CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CheckoutComponent,
  selectors: [["app-checkout"]],
  decls: 71,
  vars: 16,
  consts: [[1, "main-content", "page-m"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [3, "formGroup", "ngSubmit"], ["formGroupName", "customer", 1, "form-area"], [1, "row"], [1, "col-md-2"], [1, "col-md-9"], [1, "input-space"], ["formControlName", "firstName", "type", "text"], ["class", "alert alert-danger mt-1", 4, "ngIf"], ["formControlName", "lastName", "type", "text"], ["formControlName", "phone", "type", "text", 3, "readonly"], ["formGroupName", "shippingAddress", 1, "form-area"], ["formControlName", "street", "type", "text"], ["formControlName", "city", "type", "text"], ["formControlName", "zipCode", "type", "text"], [1, "form-area"], [4, "ngIf"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], [1, "alert", "alert-danger", "mt-1"]],
  template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, CheckoutComponent_div_14_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, CheckoutComponent_div_22_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 5)(24, "div", 6)(25, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 7)(28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, CheckoutComponent_div_30_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 13)(32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Shipping Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 5)(35, "div", 6)(36, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 7)(39, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, CheckoutComponent_div_41_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 5)(43, "div", 6)(44, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 7)(47, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, CheckoutComponent_div_49_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 5)(51, "div", 6)(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Zip Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 7)(55, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, CheckoutComponent_div_57_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 17)(59, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Review Your Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, CheckoutComponent_div_66_Template, 3, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, CheckoutComponent_div_67_Template, 6, 4, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 19)(69, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "Purchase");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.firstName.invalid && (ctx.firstName.dirty || ctx.firstName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.lastName.invalid && (ctx.lastName.dirty || ctx.lastName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.checkDisk);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.phone.invalid && (ctx.phone.dirty || ctx.phone.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingAddressStreet.invalid && (ctx.shippingAddressStreet.dirty || ctx.shippingAddressStreet.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingAddressCity.invalid && (ctx.shippingAddressCity.dirty || ctx.shippingAddressCity.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingAddressZipCode.invalid && (ctx.shippingAddressZipCode.dirty || ctx.shippingAddressZipCode.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx.totalQuantity, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](65, 13, ctx.totalPrice, "INR"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingFees);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.shippingFees);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.isDisabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

function genUniqueId() {
  const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

  const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

/***/ }),

/***/ 3946:
/*!*******************************************************************!*\
  !*** ./src/app/components/login-status/login-status.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginStatusComponent": () => (/* binding */ LoginStatusComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/customer */ 1385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function LoginStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Welcome Back ", ctx_r0.userFullName, "! ");
  }
}

function LoginStatusComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function LoginStatusComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

class LoginStatusComponent {
  constructor(route, authService, router) {
    this.route = route;
    this.authService = authService;
    this.router = router;
    this.isAuthenticated = false;
    this.userFullName = '';
    this.orderHistory = false;
    this.storage = localStorage;
  }

  ngOnInit() {
    let customer = new src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__.Customer();
    customer.phone = JSON.parse(this.storage.getItem('phone'));
    customer.identity = JSON.parse(this.storage.getItem('identity'));
    this.orderHistory = JSON.parse(this.storage.getItem('orderHistory'));
  }

  getUserDetails() {
    this.ngOnInit();
  }

  logout() {
    this.storage.clear(); //window.location.href = window.location.href;
    //this.router.navigateByUrl("product/getProducts/1");

    window.location.reload();
  }

}

LoginStatusComponent.ɵfac = function LoginStatusComponent_Factory(t) {
  return new (t || LoginStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

LoginStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginStatusComponent,
  selectors: [["app-login-status"]],
  decls: 13,
  vars: 3,
  consts: [[1, "login-status-header"], ["class", "login-status-user-info", 4, "ngIf"], ["routerLink", "/products", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Home Page", 1, "material-icons", 2, "color", "white", "font-size", "40px"], [4, "ngIf"], ["routerLink", "/cart-details", "data-toggle", "tooltip", "data-placement", "bottom", "title", "View Cart Details", 1, "security-btn"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Log Off", 1, "material-icons", 2, "color", "white", "font-size", "45px", 3, "click"], [1, "login-status-user-info"], ["routerLink", "/login", 1, "security-btn"], ["routerLink", "/order-history", "data-toggle", "tooltip", "data-placement", "bottom", "title", "View Order History", 1, "security-btn", "ml-3"]],
  template: function LoginStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginStatusComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LoginStatusComponent_div_5_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LoginStatusComponent_div_6_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " View Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginStatusComponent_Template_button_click_11_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userFullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.orderHistory);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orderHistory);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".security-btn[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    right:0;\r\n    min-width:95px;\r\n    color:#fff;\r\n    border:10px solid #205b8d;\r\n    border-radius:43px;\r\n    background:#205b8d\r\n}\r\n\r\n.login-status-header[_ngcontent-%COMP%]{\r\n    display:flex\r\n}\r\n\r\n.security-btns[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    right:0;\r\n    min-width:40px;\r\n    color:#fff;\r\n    border:10px solid #205b8d;\r\n    border-radius:10px;\r\n    background:#205b8d;\r\n    border-bottom: double;\r\n}\r\n\r\n.login-status-user-info[_ngcontent-%COMP%] {\r\n    line-height:43px;\r\n    border:1px;\r\n    padding:0 17px;\r\n    border-radius:3px;\r\n    transition:all .5s ease\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1zdGF0dXMvbG9naW4tc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLGNBQWM7SUFDZCxVQUFVO0lBQ1YseUJBQXlCO0lBR3pCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBS0k7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsY0FBYztJQUNkLFVBQVU7SUFDVix5QkFBeUI7SUFHekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7SUFHZCxpQkFBaUI7SUFJakI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN1cml0eS1idG4ge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICByaWdodDowO1xyXG4gICAgbWluLXdpZHRoOjk1cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyOjEwcHggc29saWQgIzIwNWI4ZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0M3B4O1xyXG4gICAgYmFja2dyb3VuZDojMjA1YjhkXHJcbn1cclxuXHJcbi5sb2dpbi1zdGF0dXMtaGVhZGVye1xyXG4gICAgZGlzcGxheTotd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTotbW96LWJveDtcclxuICAgIGRpc3BsYXk6LW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OmZsZXhcclxufVxyXG5cclxuLnNlY3VyaXR5LWJ0bnMge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICByaWdodDowO1xyXG4gICAgbWluLXdpZHRoOjQwcHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyOjEwcHggc29saWQgIzIwNWI4ZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgYmFja2dyb3VuZDojMjA1YjhkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xyXG59XHJcblxyXG4ubG9naW4tc3RhdHVzLXVzZXItaW5mbyB7XHJcbiAgICBsaW5lLWhlaWdodDo0M3B4O1xyXG4gICAgYm9yZGVyOjFweDtcclxuICAgIHBhZGRpbmc6MCAxN3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/message-model */ 5447);
/* harmony import */ var src_app_common_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/customer */ 1385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_otp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/otp.service */ 8369);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);












class LoginComponent {
  constructor(route, router, otpService, authService, toastr) {
    this.route = route;
    this.router = router;
    this.otpService = otpService;
    this.authService = authService;
    this.toastr = toastr;
    this.username = "";
    this.password = "";
    this.phone = "";
    this.errorMsg = "Please Enter Mobile Number to Proceed.";
    this.otp = "";
    this.isDisabled = true;
    this.storage = localStorage;
    this.storage.setItem('authError', JSON.stringify("true"));

    if (JSON.parse(this.storage.getItem('orderHistory'))) {
      this.router.navigateByUrl("product/getProducts");
    }

    if (JSON.parse(this.storage.getItem('phone')) != null) {
      this.phone = JSON.parse(this.storage.getItem('phone'));
      this.isDisabled = false;
    }
  }

  ngOnInit() {
    /* this.router.navigateByUrl('/LoginStatusComponent', { skipLocationChange: false }).then(() => {
        //this.router.navigate(['product/getProducts']);
    }); */
  }

  submit() {
    if (this.otp == "" || this.otp == null) {
      this.errorMsg = "Please Enter OTP to Proceed";
      this.storage.setItem('orderHistory', JSON.stringify("false"));
    } else {
      let message = new src_app_common_message_model__WEBPACK_IMPORTED_MODULE_0__.MessageModel();
      let customer = new src_app_common_customer__WEBPACK_IMPORTED_MODULE_1__.Customer();
      message.phone = this.phone;
      message.otp = this.otp;
      message.identity = genUniqueId();
      customer.phone = this.phone;
      customer.identity = message.identity;

      if (message.phone == null) {
        message.phone = JSON.parse(this.storage.getItem('phone'));
      }

      this.otpService.ValidateOtp(message).subscribe({
        next: response => {
          this.storage.setItem('identity', JSON.stringify(message.identity));
          this.storage.setItem('phone', JSON.stringify(message.phone));
          this.authService.getAuthenticateDetail(customer).subscribe({
            next: response => {
              this.storage.setItem('authToken', JSON.stringify(`${response.data}`));
              this.storage.setItem('authError', JSON.stringify("false"));
              window.location.href = window.location.href;
            },
            error: err => {
              console.log(`There was an error:${err.message}`);
              this.storage.setItem('phone', JSON.stringify(message.phone));
              this.errorMsg = "OTP is wrong, please enter correct one.";
              return;
            }
          });
          this.storage.setItem('orderHistory', JSON.stringify("true")); //window.location.reload();

          this.router.navigateByUrl("product/getProducts/1");
          window.location.href = window.location.href;
        },
        error: err => {
          //alert(`There was an error:${err.message}`);
          console.log(`There was an error:${err.message}`); //this.router.navigateByUrl("/login");

          this.errorMsg = "OTP is wrong, please enter correct one.";
          return;
        }
      }); //this.errorMsg="";

      this.router.navigateByUrl("product/getProducts/1"); //this.storage.setItem('orderHistory',JSON.stringify("true"));
    }

    this.clear();
  }

  clear() {
    this.phone = "";
    this.password = "";
  }

  keyPress(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  check(value) {
    if (value.length == 10) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  otpCall() {
    let message = new src_app_common_message_model__WEBPACK_IMPORTED_MODULE_0__.MessageModel();
    message.phone = this.phone; //message.identity = genUniqueId();

    this.storage.setItem('phone', JSON.stringify(this.phone));

    if (this.storage.getItem('oco') && this.storage.getItem('today') && parseInt(this.storage.getItem('oco')) === 5 && this.storage.getItem('today') == JSON.stringify(new Date().toISOString().split('T')[0])) {
      this.toastr.warning("Exceeds the OTP limit Today.\nPlease try on tomorrow.", "OTP Exceeds!");
      return;
    } else {
      if (this.storage.getItem('oco') != null && parseInt(this.storage.getItem('oco')) < 5) {
        this.storage.setItem('oco', JSON.stringify(parseInt(this.storage.getItem('oco')) + 1));
      } else {
        this.storage.setItem('today', JSON.stringify(new Date().toISOString().split('T')[0]));
        this.storage.setItem('oco', JSON.stringify(1));
      }
    }

    this.otpService.RequestOtp(message).subscribe({
      next: response => {
        this.errorMsg = "OTP has been sent Successfully, Please enter the same.";
        this.isDisabled = true;
      },
      error: err => {
        //alert(`There was an error:${err.message}`);
        console.log(`There was an error:${err.message}`);
      }
    });
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_otp_service__WEBPACK_IMPORTED_MODULE_2__.OtpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 30,
  vars: 4,
  consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-main"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Enter your number", "name", "phone", 3, "ngModel", "keypress", "keyup", "ngModelChange"], ["box", ""], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["matInput", "", "placeholder", "Enter otp", "name", "otp", 3, "ngModel", "keypress", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent"], [1, "image_block"], ["src", "assets/images/products/main.jpg", "width", "1000px", "height", "500px", 1, "img-responsive", 2, "border-radius", "40px"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table")(1, "tr")(2, "div", 0)(3, "mat-card")(4, "mat-card-header")(5, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-content")(8, "mat-form-field", 1)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_11_listener($event) {
        return ctx.keyPress($event);
      })("keyup", function LoginComponent_Template_input_keyup_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.check(_r0.value));
      })("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-actions", 4)(14, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
        return ctx.otpCall();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Request Otp");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-card-actions", 4)(17, "mat-card")(18, "input", 6, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_18_listener($event) {
        return ctx.keyPress($event);
      })("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.otp = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span")(23, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tr")(27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.otp);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorMsg);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle],
  styles: ["[_nghost-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 100px 0px;\r\n      }\r\n\r\n      .mat-form-field[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        min-width: 300px;\r\n      }\r\n\r\n      mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n\r\n      .error[_ngcontent-%COMP%] {\r\n        padding: 16px;\r\n        width: 300px;\r\n        color: white;\r\n        background-color: red;\r\n      }\r\n\r\n      .button[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n      }\r\n\r\n.image_block[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxXQUFXO1FBQ1gsZ0JBQWdCO01BQ2xCOztNQUVBOztRQUVFLGFBQWE7UUFDYix1QkFBdUI7TUFDekI7O01BRUE7UUFDRSxhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixxQkFBcUI7TUFDdkI7O01BRUE7UUFDRSxhQUFhO1FBQ2IseUJBQXlCO01BQzNCOztBQUVOO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTAwcHggMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1jYXJkLXRpdGxlLFxyXG4gICAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXJyb3Ige1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG5cclxuLmltYWdlX2Jsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

function genUniqueId() {
  const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

  const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

/***/ }),

/***/ 8767:
/*!*********************************************************************!*\
  !*** ./src/app/components/order-history/order-history.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryComponent": () => (/* binding */ OrderHistoryComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/customer */ 1385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/order-history.service */ 6015);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function OrderHistoryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function OrderHistoryComponent_div_6_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td")(14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderHistoryComponent_div_6_tr_16_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const temp_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.invoiceDetails(temp_r5.orderTrackingNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const temp_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r5.orderTrackingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 5, temp_r5.totalPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r5.totalQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 8, temp_r5.dateCreated, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r5.status);
  }
}

function OrderHistoryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "table", 10)(3, "tr")(4, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, OrderHistoryComponent_div_6_tr_16_Template, 16, 11, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.orderHistoryList);
  }
}

function OrderHistoryComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.authError, ". ");
  }
}

function OrderHistoryComponent_div_9_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const temp_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](temp_r9.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 3, temp_r9.price, "INR"));
  }
}

function OrderHistoryComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Order Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 10)(4, "tr")(5, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, OrderHistoryComponent_div_9_tr_11_Template, 8, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.orderInvoiceList);
  }
}

class OrderHistoryComponent {
  constructor(orderHistoryService, authService, route, router) {
    this.orderHistoryService = orderHistoryService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.orderInvoiceList = [];
    this.storage = localStorage;
    this.authError = "Please Login To View The Order Details.";
    this.spinner = false;
  }

  ngOnInit() {
    this.loadAuth();
    this.spinner = true;
    setTimeout(() => {
      this.handleOrderHistory();
      this.spinner = false;
    }, 4000);
    this.router.navigateByUrl("/order-history");
  }

  loadAuth() {
    let customer = new src_app_common_customer__WEBPACK_IMPORTED_MODULE_0__.Customer();
    customer.phone = JSON.parse(this.storage.getItem('phone'));
    customer.identity = JSON.parse(this.storage.getItem('identity'));
    this.authService.getAuthenticateDetail(customer).subscribe({
      next: response => {
        this.storage.setItem('authToken', JSON.stringify(`${response.data}`));
      },
      error: err => {
        console.log(`There was an error:${err.message}`);
      }
    });
  }

  handleOrderHistory() {
    const thePhone = JSON.parse(this.storage.getItem('phone'));
    /* this.orderHistoryService.getOrderHistory1(thePhone).subscribe(
      data => {
        this.orderHistoryList = data.content;
      }
    ); */

    this.orderHistoryService.getOrderHistory1(thePhone).subscribe({
      next: response => {
        this.orderHistoryList = response;
        this.storage.setItem('authError', JSON.stringify("false"));
        this.authError = 'No Records Found.Please Create the Order.';
      },
      error: err => {
        console.log(`There was an error:${err.message}`);

        if (err.status == 401) {
          this.storage.setItem('authError', JSON.stringify("true"));
          this.authError = 'Not Authenticated! Please login again.';
        } else {
          this.authError = 'No Records Found.Please Create the Order.';
        }
      }
    });
  }

  invoiceDetails(id) {
    this.orderHistoryService.updateInvoice(id).subscribe(data => {
      this.orderInvoiceList = data;
    });
    document.querySelector('#target').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

}

OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) {
  return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_order_history_service__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

OrderHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: OrderHistoryComponent,
  selectors: [["app-order-history"]],
  decls: 10,
  vars: 4,
  consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], ["class", "spinner-border", "role", "status", 4, "ngIf"], [4, "ngIf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], ["id", "target"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [2, "overflow-x", "auto"], [1, "table", "table-bordered"], ["width", "15%"], ["width", "10%"], ["width", "5%", 2, "text-align", "center", "vertical-align", "middle"], ["width", "10%", 2, "text-align", "center", "vertical-align", "middle"], ["width", "5%"], [4, "ngFor", "ngForOf"], [2, "text-align", "center", "vertical-align", "middle"], [1, "material-icons", "blue-color", 2, "color", "blue", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"], ["width", "20%"], [2, "padding", "10px"]],
  template: function OrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Your Orders:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OrderHistoryComponent_div_5_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrderHistoryComponent_div_6_Template, 17, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, OrderHistoryComponent_div_7_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, OrderHistoryComponent_div_9_Template, 12, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.spinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderHistoryList != null && ctx.orderHistoryList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderHistoryList != null && ctx.orderHistoryList.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderInvoiceList != null && ctx.orderInvoiceList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid white;\r\n  border-collapse: collapse;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  background-color: #B8E2F2;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxudGgsIHRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjhFMkYyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5428:
/*!*************************************************************************************!*\
  !*** ./src/app/components/product-category-menu/product-category-menu.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCategoryMenuComponent": () => (/* binding */ ProductCategoryMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ProductCategoryMenuComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "product/getProducts/", category_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1.categoryName, " ");
  }
}

class ProductCategoryMenuComponent {
  constructor(productService) {
    this.productService = productService;
    this.productCategories = [];
  }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(data => {
      this.productCategories = data;
    });
  }

}

ProductCategoryMenuComponent.ɵfac = function ProductCategoryMenuComponent_Factory(t) {
  return new (t || ProductCategoryMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};

ProductCategoryMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProductCategoryMenuComponent,
  selectors: [["app-product-category-menu"]],
  decls: 4,
  vars: 1,
  consts: [[1, "menu-sidebar-content", "js-scrollbar1"], [1, "navbar-sidebar"], [1, "list-unstyled", "navbar-list"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active-link", 3, "routerLink"]],
  template: function ProductCategoryMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductCategoryMenuComponent_li_3_Template, 3, 2, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productCategories);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6525:
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/cart-item */ 3162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function ProductDetailsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, ctx_r0.product.unitPrice, "INR"));
  }
}

class ProductDetailsComponent {
  constructor(productService, cartService, route, router) {
    this.productService = productService;
    this.cartService = cartService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    const theProductId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductInfo(theProductId).subscribe(data => {
      this.product = data;
    });
  }

  goHome() {
    this.router.navigateByUrl("product/getProducts");
  }

  addToCart() {
    //alert(this.product.name);
    const theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__.CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

}

ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
  return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

ProductDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductDetailsComponent,
  selectors: [["app-product-details"]],
  decls: 18,
  vars: 8,
  consts: [[1, "detail-section"], [1, "container-fluid"], [1, "detail-img", 3, "src"], [1, "price"], [4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
  template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProductDetailsComponent_div_8_Template, 4, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_9_listener() {
        return ctx.addToCart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Add to cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_16_listener() {
        return ctx.goHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Back to Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 5, ctx.product.discountPrice, "INR"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.unitPrice > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product.description);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4646:
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/cart-item */ 3162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 3335);











function ProductListComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const prod_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, prod_r3.unitPrice, "INR"));
  }
}

function ProductListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductListComponent_div_4_div_12_Template, 4, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_div_4_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const prod_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.addToCart(prod_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const prod_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matBadge", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 5, (prod_r3.unitPrice - prod_r3.discountPrice) / prod_r3.unitPrice * 100, "1.0-0"), "% OFF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", prod_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prod_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 8, prod_r3.discountPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", prod_r3.unitPrice != prod_r3.discountPrice);
  }
}

function ProductListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No Products Found! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class ProductListComponent {
  constructor(productService, cartService, route, router, toastr) {
    this.productService = productService;
    this.cartService = cartService;
    this.route = route;
    this.router = router;
    this.toastr = toastr;
    this.products = [];
    this.currentCategoryId = 1;
    this.previousCategoryId = 1;
    this.searchMode = false;
    this.thePageNumber = 1;
    this.thePageSize = 50;
    this.theTotalElements = 0;
    this.previousKeyword = "";
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword = this.route.snapshot.paramMap.get('keyword');

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;
    this.productService.getSearchListPaginate(this.thePageNumber - 1, this.thePageSize, theKeyword).subscribe(data => {
      this.products = data.content;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    });
  }

  handleListProducts() {
    const categoryId = this.route.snapshot.paramMap.has('id');

    if (categoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;
    this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize, this.currentCategoryId).subscribe(data => {
      this.products = data.content;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    });
  }

  doSearch(value) {
    this.router.navigateByUrl(`product/getInfo/${value}`);
  }

  updatePageSize(value) {
    this.thePageSize = +value;
    this.thePageNumber = 1;
    this.listProducts();
  }

  addToCart(product) {
    this.toastr.success("Added Successfully.", "Cart Status");
    const theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_0__.CartItem(product);
    this.cartService.addToCart(theCartItem);
  }

}

ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
  return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};

ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductListComponent,
  selectors: [["app-product-list"]],
  decls: 26,
  vars: 7,
  consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning col-md-12", "role", "alert", 4, "ngIf"], [1, "footer-pagination"], [1, "col-md-6"], [1, "col-md-9", 2, "padding-left", "30%"], [3, "page", "pageSize", "collectionSize", "maxSize", "boundaryLinks", "pageChange", "pageSizeChange"], [1, "col-md-3", "mt-2", 2, "text-align", "right"], [1, "mr-5"], [3, "change"], ["myPageSelect", ""], ["selected", "true"], [1, "col-md-3"], [1, "product-box"], ["matBadgeOverlap", "false", "matBadgePosition", "after", "matBadgeColor", "DodgerBlue", 3, "matBadge"], [1, "img-responsive", 3, "src"], [1, "price"], [4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "col-md-12"]],
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 15, 11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProductListComponent_div_5_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div", 3)(11, "div", 8)(12, "ngb-pagination", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener($event) {
        return ctx.thePageNumber = $event;
      })("pageSizeChange", function ProductListComponent_Template_ngb_pagination_pageSizeChange_12_listener($event) {
        return ctx.thePageSize = $event;
      })("pageChange", function ProductListComponent_Template_ngb_pagination_pageChange_12_listener() {
        return ctx.listProducts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Page Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProductListComponent_Template_select_change_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);

        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.updatePageSize(_r2.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.products == null ? null : ctx.products.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("page", ctx.thePageNumber)("pageSize", ctx.thePageSize)("collectionSize", ctx.theTotalElements)("maxSize", 5)("boundaryLinks", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
  styles: [".mat-badge-content[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 35px;\r\n  line-height: 40px;\r\n}\r\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\r\n    left: 120px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1iYWRnZS1jb250ZW50IHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgICBsZWZ0OiAxMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9055:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class SearchComponent {
  constructor(router) {
    this.router = router;
  }

  ngOnInit() {}

  doSearch(value) {
    this.router.navigateByUrl(`product/getProducts/search/${value}`);
  }

}

SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};

SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 9,
  vars: 0,
  consts: [[1, "form-header"], ["routerLink", "/about", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Call Us For Enquiry or Delivery!\n    R-77, Ground Floor,\n    MMDA Colony, Water Tank Road,\n    Arumbakkam - Chennai - 600106.\n    LandMark: Poorvika Showroom,Imatrix Technologies,\n    Mobile:9944370922,8754084538", 1, "au-btn-submit", 2, "margin-right", "0px", "margin-left", "30px", "border-top-right-radius", "70px"], [1, "bi", "bi-geo"], [1, "bi", "bi-phone"], ["type", "text", "placeholder", "Search for products ...", 1, "au-input", "au-input-xl", 3, "keyup.enter"], ["myInput", ""], [1, "au-btn-submit", 2, "height", "45px", "margin-right", "20px", "margin-left", "10px", "border-top-right-radius", "50px", "border-bottom-right-radius", "50px", 3, "click"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.doSearch(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span")(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.doSearch(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6052:
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function SliderComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_li_2_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const slide_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onSlideClick(slide_r1.index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("slide--current", slide_r1.index === ctx_r0.currentSlide)("slide--next", slide_r1.index === ctx_r0.currentSlide + 1)("slide--previous", slide_r1.index === ctx_r0.currentSlide - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("alt", slide_r1.headline);
  }
}

class SliderComponent {
  constructor() {
    this.currentSlide = 0;
  }

  ngOnInit() {}

  onSlideClick(index) {
    if (this.currentSlide !== index) {
      this.currentSlide = index;
    }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.sliderData.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.sliderData.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }

}

SliderComponent.ɵfac = function SliderComponent_Factory(t) {
  return new (t || SliderComponent)();
};

SliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SliderComponent,
  selectors: [["app-slider"]],
  inputs: {
    sliderData: "sliderData"
  },
  decls: 10,
  vars: 3,
  consts: [[1, "slider"], [1, "slider__wrapper"], ["class", "slide", 3, "slide--current", "slide--next", "slide--previous", "click", 4, "ngFor", "ngForOf"], [1, "slider__controls"], ["title", "Go to previous slide", 1, "btn", "btn--previous", 3, "click"], ["viewBox", "0 0 24 24", 1, "icon"], ["d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["title", "Go to next slide", 1, "btn", "btn--next", 3, "click"], [1, "slide", 3, "click"], [1, "slide__image-wrapper"], [1, "slide__image", 2, "opacity", "1", 3, "src"]],
  template: function SliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SliderComponent_li_2_Template, 3, 8, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_4_listener() {
        return ctx.onPreviousClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_7_listener() {
        return ctx.onNextClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-" + ctx.currentSlide * (100 / ctx.sliderData.length) + "%)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliderData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["[_nghost-%COMP%] {\r\n  align-items: center;\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: center;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]:root {\r\n  --color-primary: #6B7A8F;\r\n  --color-secondary: #101118;\r\n  --color-accent: #1D1F2F;\r\n  --color-focus: #6D64F7;\r\n  --base-duration: 600ms;\r\n  --base-ease: cubic-bezier(0.25, 0.46, 0.45, 0.84);\r\n}\r\n\r\n//[_ngcontent-%COMP%]   =========================\r\n//[_ngcontent-%COMP%]   Global\r\n//[_ngcontent-%COMP%]   =========================\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n//[_ngcontent-%COMP%]   =========================\r\n//[_ngcontent-%COMP%]   Icons\r\n//[_ngcontent-%COMP%]   =========================\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n  fill: var(--color-primary);\r\n  width: 100%;\r\n}\r\n\r\n\r\n//[_ngcontent-%COMP%]   =========================\r\n//[_ngcontent-%COMP%]   Slider[_ngcontent-%COMP%]   controls\r\n//[_ngcontent-%COMP%]   =========================\r\n\r\n.slider__controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: calc(100% + 1rem);\r\n  width: 100%;\r\n\r\n  .btn {\r\n    --size: 3rem;\r\n\r\n    align-items: center;\r\n    background-color: transparent;\r\n    border: 3px solid transparent;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    height: var(--size);\r\n    padding: 0;\r\n    width: var(--size);\r\n\r\n    &:focus {\r\n      border-color: var(--color-focus);\r\n      outline: none;\r\n    }\r\n\r\n    &--previous > * {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n//[_ngcontent-%COMP%]   =========================\r\n//[_ngcontent-%COMP%]   Slider\r\n//[_ngcontent-%COMP%]   =========================\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n  --slide-size: 70vmin;\r\n  --slide-margin: 4vmin;\r\n\r\n  height: var(--slide-size);\r\n  margin: 0 auto;\r\n  position: relative;\r\n  width: var(--slide-size);\r\n}\r\n\r\n.slider__wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 0 calc(var(--slide-margin) * -1);\r\n  position: absolute;\r\n  transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);\r\n  padding: 0;\r\n}\r\n\r\n\r\n//[_ngcontent-%COMP%]   =========================\r\n//[_ngcontent-%COMP%]   Slide\r\n//[_ngcontent-%COMP%]   =========================\r\n\r\n.slide[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  height: var(--slide-size);\r\n  justify-content: center;\r\n  margin: 0 var(--slide-margin);\r\n  opacity: 0.25;\r\n  position: relative;\r\n  text-align: center;\r\n  transition:\r\n    opacity calc(var(--base-duration) / 2) var(--base-ease),\r\n    transform calc(var(--base-duration) / 2) var(--base-ease);\r\n  width: var(--slide-size);\r\n  z-index: 1;\r\n\r\n  &--previous,\r\n  &--next {\r\n    &:hover {\r\n      opacity: 0.5;\r\n    }\r\n  }\r\n\r\n  &--previous {\r\n    cursor: w-resize;\r\n\r\n    &:hover {\r\n      transform: translateX(2%);\r\n    }\r\n  }\r\n\r\n  &--next {\r\n    cursor: e-resize;\r\n\r\n    &:hover {\r\n      transform: translateX(-2%);\r\n    }\r\n  }\r\n}\r\n\r\n.slide--current[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  &:hover .slide__image-wrapper {\r\n    transform: scale(1.025);\r\n  }\r\n}\r\n\r\n.slide__image-wrapper[_ngcontent-%COMP%] {\r\n  background-color: var(--color-accent);\r\n  border-radius: 1%;\r\n  height: 100%;\r\n  left: 0%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0%;\r\n  transition: transform calc(var(--base-duration) / 4) var(--base-ease);\r\n  width: 100%;\r\n}\r\n\r\n.slide__image[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0%;\r\n  object-fit: cover;\r\n  position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGlEQUFpRDtBQUNuRDs7QUFFQTs7Ozs7RUFLRSxzQkFBc0I7QUFDeEI7Ozs7Ozs7QUFPQTs7Ozs7RUFLRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOzs7QUFHQTs7Ozs7RUFLRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVzs7RUFFWDtJQUNFLFlBQVk7O0lBRVosbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjs7SUFFbEI7TUFDRSxnQ0FBZ0M7TUFDaEMsYUFBYTtJQUNmOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7QUFDRjs7O0FBR0E7Ozs7O0VBS0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjs7RUFFckIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIseUVBQXlFO0VBQ3pFLFVBQVU7QUFDWjs7O0FBR0E7Ozs7O0VBS0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCOzs2REFFMkQ7RUFDM0Qsd0JBQXdCO0VBQ3hCLFVBQVU7O0VBRVY7O0lBRUU7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjs7SUFFaEI7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjs7SUFFaEI7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AscUVBQXFFO0VBQ3JFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuOnJvb3Qge1xyXG4gIC0tY29sb3ItcHJpbWFyeTogIzZCN0E4RjtcclxuICAtLWNvbG9yLXNlY29uZGFyeTogIzEwMTExODtcclxuICAtLWNvbG9yLWFjY2VudDogIzFEMUYyRjtcclxuICAtLWNvbG9yLWZvY3VzOiAjNkQ2NEY3O1xyXG4gIC0tYmFzZS1kdXJhdGlvbjogNjAwbXM7XHJcbiAgLS1iYXNlLWVhc2U6IGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHbG9iYWxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJY29uc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4uaWNvbiB7XHJcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNsaWRlciBjb250cm9sc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4uc2xpZGVyX19jb250cm9scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDEwMCUgKyAxcmVtKTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICAtLXNpemU6IDNyZW07XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWZvY3VzKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1wcmV2aW91cyA+ICoge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2xpZGVyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi5zbGlkZXIge1xyXG4gIC0tc2xpZGUtc2l6ZTogNzB2bWluO1xyXG4gIC0tc2xpZGUtbWFyZ2luOiA0dm1pbjtcclxuXHJcbiAgaGVpZ2h0OiB2YXIoLS1zbGlkZS1zaXplKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IHZhcigtLXNsaWRlLXNpemUpO1xyXG59XHJcblxyXG4uc2xpZGVyX193cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCBjYWxjKHZhcigtLXNsaWRlLW1hcmdpbikgKiAtMSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1iYXNlLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoMC4yNSwgMSwgMC4zNSwgMSk7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2xpZGVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLnNsaWRlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogdmFyKC0tc2xpZGUtc2l6ZSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIHZhcigtLXNsaWRlLW1hcmdpbik7XHJcbiAgb3BhY2l0eTogMC4yNTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICBvcGFjaXR5IGNhbGModmFyKC0tYmFzZS1kdXJhdGlvbikgLyAyKSB2YXIoLS1iYXNlLWVhc2UpLFxyXG4gICAgdHJhbnNmb3JtIGNhbGModmFyKC0tYmFzZS1kdXJhdGlvbikgLyAyKSB2YXIoLS1iYXNlLWVhc2UpO1xyXG4gIHdpZHRoOiB2YXIoLS1zbGlkZS1zaXplKTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmLS1wcmV2aW91cyxcclxuICAmLS1uZXh0IHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLS1wcmV2aW91cyB7XHJcbiAgICBjdXJzb3I6IHctcmVzaXplO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMiUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tbmV4dCB7XHJcbiAgICBjdXJzb3I6IGUtcmVzaXplO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS0tY3VycmVudCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAmOmhvdmVyIC5zbGlkZV9faW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZV9faW1hZ2Utd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiAxJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYyh2YXIoLS1iYXNlLWR1cmF0aW9uKSAvIDQpIHZhcigtLWJhc2UtZWFzZSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZV9faW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2993:
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var D_angular_ui_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service.service */ 410);




class AuthInterceptorService {
  constructor(authService) {
    this.authService = authService; //accessToken: string= null;

    this.storage = localStorage;
  }

  intercept(req, next) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.handleAccess(req, next));
  }

  handleAccess(req, next) {
    var _this = this;

    return (0,D_angular_ui_store_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const urlOrder = ['order/findByCustomerPhone', 'order/findAllOrders', 'order/status/upgrade', 'order/findCustomerProfile', 'order/invoice'];

      if (urlOrder.some(url => req.urlWithParams.includes(url))) {
        /* let customer = new Customer();
        customer.phone = JSON.parse(this.storage.getItem('phone'));
        customer.identity = JSON.parse(this.storage.getItem('identity'));
         this.authService.getAuthenticateDetail(customer).subscribe({
                             next: response => {
                             this.accessToken = JSON.stringify(`${response.data}`);
                             },
                             error: err => {
                              console.log(`There was an error:${err.message}`);
                             }
                             }); */
        req = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + JSON.parse(_this.storage.getItem('authToken')) //this.accessToken

          }
        });
      }

      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(next.handle(req)).toPromise();
    })();
  }

}

AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
  return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
};

AuthInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthInterceptorService,
  factory: AuthInterceptorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 410:
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServiceService": () => (/* binding */ AuthServiceService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', 'http://localhost:8085');
class AuthServiceService {
  //private baseUrl = 'http://localhost:8085/authenticate';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/authenticate';
  }

  getAuthenticateDetail(customer) {
    return this.httpClient.post(this.authUrl, customer).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response));
  }

}

AuthServiceService.ɵfac = function AuthServiceService_Factory(t) {
  return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};

AuthServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthServiceService,
  factory: AuthServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class CartService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.profileUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/order/findCustomerProfile'; //private profileUrl = "http://localhost:8085/order/findCustomerProfile";

    this.cartItems = [];
    this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.totalDiscount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.storage = localStorage;
    let data = JSON.parse(this.storage.getItem('cartItems'));

    if (data != null) {
      this.cartItems = data;
      this.computeCartTotals();
    }
  }

  getProfile(phone) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append("phone", phone);
    return this.httpClient.get(this.profileUrl, {
      params: queryParams
    });
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(theCartItem) {
    let alreadyExistInCart = false;
    let existingCartItem = undefined;

    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
      alreadyExistInCart = existingCartItem != undefined;
    }

    if (alreadyExistInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue = 0;
    let totalDiscountValue = 0;
    let totalQuantityValue = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.discountPrice;
      totalDiscountValue += currentCartItem.quantity * (currentCartItem.unitPrice - currentCartItem.discountPrice);
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalDiscount.next(totalDiscountValue);
    this.totalQuantity.next(totalQuantityValue);
    this.persistCartItems();
  }

  decrementQuantity(item) {
    item.quantity--;

    if (item.quantity == 0) {
      this.remove(item);
    } else {
      this.computeCartTotals();
    }
  }

  remove(item) {
    const itemIndex = this.cartItems.findIndex(temp => temp.id == item.id);

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }

}

CartService.ɵfac = function CartService_Factory(t) {
  return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CartService,
  factory: CartService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8106:
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutService": () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class CheckoutService {
  /* private purchaseUrl = "http://localhost:8085/checkout/purchase";
  private validateUrl = "http://localhost:8085/customer/validate/getDetail"; */
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/customer/validate/getDetail';
    this.purchaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/checkout/purchase';
  }

  placeOrder(purchase) {
    return this.httpClient.post(this.purchaseUrl, purchase);
  }

  validateCustomer(phone) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    queryParams = queryParams.append("phone", phone);
    return this.httpClient.get(this.validateUrl, {
      params: queryParams
    });
  }

}

CheckoutService.ɵfac = function CheckoutService_Factory(t) {
  return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};

CheckoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CheckoutService,
  factory: CheckoutService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6015:
/*!***************************************************!*\
  !*** ./src/app/services/order-history.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryService": () => (/* binding */ OrderHistoryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class OrderHistoryService {
  //private baseUrl = 'http://localhost:8085';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.storage = localStorage;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  } //GetResponseOrderHistory replaced OrderHistory


  getOrderHistory1(thePhone) {
    const orderHistoryUrl = `${this.baseUrl}/order/findByCustomerPhone/${thePhone}`;
    return this.httpClient.get(orderHistoryUrl);
  }

  getOrders() {
    const orderUrl = `${this.baseUrl}/order/findAllOrders`;
    return this.httpClient.get(orderUrl);
  }

  updateOrder(id) {
    return this.httpClient.post(`${this.baseUrl}/order/status/upgrade`, id);
  }

  updateInvoice(id) {
    return this.httpClient.post(`${this.baseUrl}/order/invoice`, id);
  }

}

OrderHistoryService.ɵfac = function OrderHistoryService_Factory(t) {
  return new (t || OrderHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

OrderHistoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OrderHistoryService,
  factory: OrderHistoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8369:
/*!*****************************************!*\
  !*** ./src/app/services/otp.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpService": () => (/* binding */ OtpService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class OtpService {
  //private baseUrl = 'http://localhost:8085/mobile';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.mobileUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/mobile';
  }

  RequestOtp(message) {
    return this.httpClient.post(`${this.mobileUrl}/sendOtp`, message).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

  ValidateOtp(message) {
    return this.httpClient.post(`${this.mobileUrl}/validateOtp`, message).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

}

OtpService.ɵfac = function OtpService_Factory(t) {
  return new (t || OtpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

OtpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: OtpService,
  factory: OtpService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProductService {
  //private baseUrl = 'http://localhost:8085/nct/store';
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.nctUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/nct/store';
  }

  getProductCategories() {
    const categoryUrl = `${this.nctUrl}/product/getAllCategory`;
    return this.httpClient.get(categoryUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

  getProductListPaginate(thePage, thePageSize, categoryId) {
    const searchUrl = `${this.nctUrl}/product/getProducts/${categoryId}` + `?page=${thePage}&pageSize=${thePageSize}`;
    return this.httpClient.get(searchUrl);
  }

  getSearchListPaginate(thePage, thePageSize, keyword) {
    const filterUrl = `${this.nctUrl}/product/getProducts/search/${keyword}` + `?page=${thePage}&pageSize=${thePageSize}`;
    return this.httpClient.get(filterUrl);
  }

  getProductInfo(productId) {
    const infoUrl = `${this.nctUrl}/product/getInfo/${productId}`;
    return this.httpClient.get(infoUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }

}

ProductService.ɵfac = function ProductService_Factory(t) {
  return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProductService,
  factory: ProductService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8303:
/*!***********************************************!*\
  !*** ./src/app/services/shop-form.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopFormService": () => (/* binding */ ShopFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ShopFormService {
  constructor() {}

  getCreditCardMonths(startMonth) {
    let data = [];

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(data);
  }

  getCreditCardYears() {
    let data = [];
    const startYear = new Date().getFullYear();
    const endYear = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(data);
  }

}

ShopFormService.ɵfac = function ShopFormService_Factory(t) {
  return new (t || ShopFormService)();
};

ShopFormService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShopFormService,
  factory: ShopFormService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1562:
/*!***********************************************!*\
  !*** ./src/app/validators/shop-validators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopValidators": () => (/* binding */ ShopValidators)
/* harmony export */ });
class ShopValidators {
  static notOnlyWhiteSpace(control) {
    if (control.value != null && control.value.trim().length === 0) {
      return {
        'notOnlyWhiteSpace': true
      };
    } else {
      return null;
    }
  }

}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  //baseUrl: "http://localhost:8085"
  //baseUrl: "https://ec2-54-146-9-127.compute-1.amazonaws.com:8085"
  baseUrl: "https://1enbpfkvxh.execute-api.us-east-1.amazonaws.com/development"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/// <reference types="@angular/localize" />





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map