webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_module__ = __webpack_require__("../../../../../src/app/signup/signup.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { LoginComponent } from './login/login.component';
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup_module__["a" /* SignupModule */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SB Admin BS 4 Angular2';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { LoginModule } from './login/login.module';


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/accordion-sample/accordion-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Accordion\n    <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/accordion\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>Displays collapsible content panels for presenting information in a limited amount of space</p>\n      <p>The\n        <strong>accordion component</strong> builds on top of the collapse directive to provide a list of items, with collapsible\n        bodies that are collapsed or expanded by clicking on the item's header.</p>\n    </div>\n  </div>\n</div>\n<accordion>\n  <accordion-group heading=\"Static Header, initially expanded\" [panelClass]=\"customClass\" [isOpen]=\"isFirstOpen\">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group heading=\"Content 1\">\n    <p>accordion 1</p>\n  </accordion-group>\n  <accordion-group heading=\"Content 2\" panelClass=\"customClass\">\n    <p>accordion 2</p>\n  </accordion-group>\n</accordion>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/accordion-sample/accordion-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"accordion-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/accordion-sample/accordion-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionSampleComponent = (function () {
    function AccordionSampleComponent() {
        this.customClass = 'customClass';
        this.isFirstOpen = true;
    }
    AccordionSampleComponent.prototype.ngOnInit = function () {
    };
    AccordionSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accordion-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/accordion-sample/accordion-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/accordion-sample/accordion-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionSampleComponent);
    return AccordionSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/alert-sample/alert-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Alerts\n    <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/alerts\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>\n    </div>\n  </div>\n  <p>Alerts are available for any length of text, as well as an optional dismiss\n    button. For proper styling, use one of the four <strong>required</strong>\n    contextual classes (e.g., <code>.alert-success</code>). For inline\n    dismissal, use the <code>dismissproperty</code>.</p>\n</div>\n<div *ngFor=\"let alert of alerts\">\n  <alert [type]=\"alert.type\" [dismissible]=\"dismissible\">{{ alert.msg }}</alert>\n</div>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/alert-sample/alert-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"alert-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/alert-sample/alert-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertSampleComponent = (function () {
    function AlertSampleComponent() {
        this.dismissible = true;
        this.alerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
    }
    AlertSampleComponent.prototype.ngOnInit = function () {
    };
    AlertSampleComponent.prototype.reset = function () {
        this.alerts = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/alert-sample/alert-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/alert-sample/alert-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertSampleComponent);
    return AlertSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/bs-components.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        NGX-Bootstrap\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"active breadcrumb-item\">\n          <i class=\"fa fa-th-list\"></i> ngx-bootstrap\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">Bootstrap components for Angular </h4>\n      <p class=\"card-text\">\n        A demonstration of the components available in ngx-bootstrap from\n        <a href=\"https://github.com/valor-software/ngx-bootstrap\" target=\"_blank\" class=\"card-link\">valour-software</a>\n      </p>\n      <p>\n        Each component is a minimal sample demonstration only. Whilst I endevour to keep these in sync with the latest versions from\n        valor software the user is strongly encouraged to follow each demos link. This will take you to the relevant ngx-bootstrap\n        page where the full demo, information and usage instructions are provided.\n      </p>\n      <p>\n        <em>Note</em>: Bootstrap 4 does not include glyphicons anymore, so if you want to use that font, you will need to add\n        a link to\n        <a href=\"https://github.com/valor-software/ngx-bootstrap/blob/master/demo/src/assets/css/glyphicons.css\">\n          <code>glyphicons.css</code>\n        </a>. This package has been built using Font Awesome and all the icons changed to the nearest Font Awesome equivelent.</p>\n\n    </div>\n    <div class=\"card card-block\">\n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/bs-components.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"bs-components.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/bs-components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BsComponentsComponent = (function () {
    function BsComponentsComponent() {
    }
    BsComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bs-component',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/bs-components.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/bs-components.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BsComponentsComponent);
    return BsComponentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/bs-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_components_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/bs-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_sample_accordion_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/accordion-sample/accordion-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_sample_alert_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/alert-sample/alert-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button_sample_button_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/button-sample/button-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_sample_carousel_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/carousel-sample/carousel-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collapse_sample_collapse_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/collapse-sample/collapse-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__date_sample_date_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/date-sample/date-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dropdown_sample_dropdown_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/dropdown-sample/dropdown-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_sample_modal_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/modal-sample/modal-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pagination_sample_pagination_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/pagination-sample/pagination-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__popover_sample_popover_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/popover-sample/popover-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_sample_progress_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/progress-sample/progress-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rating_sample_rating_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/rating-sample/rating-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sortable_sample_sortable_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/sortable-sample/sortable-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tabs_sample_tabs_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/tabs-sample/tabs-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__timepicker_sample_timepicker_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/timepicker-sample/timepicker-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tooltip_sample_tooltip_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/tooltip-sample/tooltip-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__typeahead_sample_typeahead_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/typeahead-sample/typeahead-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_bs_moment__ = __webpack_require__("../../../../ngx-bootstrap/bs-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var locales = [__WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["a" /* ar */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["b" /* cs */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["c" /* de */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["d" /* enGb */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["e" /* es */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["f" /* esDo */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["g" /* esUs */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["h" /* fr */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["i" /* hi */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["j" /* it */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["k" /* ja */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["l" /* ko */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["m" /* nl */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["n" /* nlBe */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["o" /* pl */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["p" /* ptBr */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["r" /* sv */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["q" /* ru */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["t" /* zhCn */], __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["s" /* tr */]];
locales.forEach(function (locale) { return Object(__WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_bs_moment__["a" /* defineLocale */])(locale.abbr, locale); });
var BsComponentModule = (function () {
    function BsComponentModule() {
    }
    BsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["e" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["f" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["g" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["c" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["d" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["h" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["i" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["j" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["k" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["l" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["m" /* SortableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["n" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["p" /* TimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["q" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["r" /* TypeaheadModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__bs_components_component__["a" /* BsComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__accordion_sample_accordion_sample_component__["a" /* AccordionSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__alert_sample_alert_sample_component__["a" /* AlertSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_7__button_sample_button_sample_component__["a" /* ButtonSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__carousel_sample_carousel_sample_component__["a" /* CarouselSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__collapse_sample_collapse_sample_component__["a" /* CollapseSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__date_sample_date_sample_component__["a" /* DateSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dropdown_sample_dropdown_sample_component__["a" /* DropdownSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__modal_sample_modal_sample_component__["b" /* ModalSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__modal_sample_modal_sample_component__["a" /* ModalContentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pagination_sample_pagination_sample_component__["a" /* PaginationSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__popover_sample_popover_sample_component__["a" /* PopoverSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__progress_sample_progress_sample_component__["a" /* ProgressSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_16__rating_sample_rating_sample_component__["a" /* RatingSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sortable_sample_sortable_sample_component__["a" /* SortableSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__tabs_sample_tabs_sample_component__["a" /* TabsSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_19__timepicker_sample_timepicker_sample_component__["a" /* TimepickerSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_20__tooltip_sample_tooltip_sample_component__["a" /* TooltipSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_21__typeahead_sample_typeahead_sample_component__["a" /* TypeaheadSampleComponent */]
            ],
            exports: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__modal_sample_modal_sample_component__["a" /* ModalContentComponent */]]
        })
    ], BsComponentModule);
    return BsComponentModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/button-sample/button-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Buttons\n    <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/buttons\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid\n        where radio buttons can be unchecked.</p>\n    </div>\n  </div>\n  <p>Radio buttons with checked/unchecked states.</p>\n</div>\n<pre class=\"card card-block card-header\">{{radioModel || 'null'}}</pre>\n<div class=\"btn-group\">\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\">Left</label>\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</label>\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\">Right</label>\n</div>\n<div class=\"btn-group\">\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\" uncheckable>Left</label>\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\" uncheckable>Middle</label>\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\" uncheckable>Right</label>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/button-sample/button-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"button-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/button-sample/button-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonSampleComponent = (function () {
    function ButtonSampleComponent() {
        this.radioModel = 'Middle';
    }
    ButtonSampleComponent.prototype.ngOnInit = function () {
    };
    ButtonSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-button-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/button-sample/button-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/button-sample/button-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonSampleComponent);
    return ButtonSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/carousel-sample/carousel-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Carousel\n    <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/carousel\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n  <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.\n    <em>Nested carousels are not supported.</em>\n  </p>\n  <h3>\n    Examples\n  </h3>\n  <hr>\n  <h4>Optional captions:</h4>\n  <p>Add captions to your slides easily with the\n    <code>.carousel-caption</code> element within any\n    <code>&lt;slide&gt;</code>. Place just about any optional HTML within there and it will be automatically aligned and formatted.</p>\n  <div class=\"container\">\n    <carousel>\n      <slide>\n        <img src=\"assets/img/slider0.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption\">\n          <h3>Reception </h3>\n          <p>Modern office reception area.</p>\n        </div>\n      </slide>\n      <slide>\n        <img src=\"assets/img/slider1.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption\">\n          <h3>Mountains</h3>\n          <p>Here is a stunning mountain scene.</p>\n        </div>\n      </slide>\n      <slide>\n        <img src=\"assets/img/slider2.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption\">\n          <h3>Rainbow</h3>\n          <p>Idylic home after a shower.</p>\n        </div>\n      </slide>\n      <slide>\n        <img src=\"assets/img/slider3.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption\">\n          <h3>Golf course</h3>\n          <p>Nice way to relax.</p>\n        </div>\n      </slide>\n    </carousel>\n  </div>\n  <hr>\n  <h4>Dynamic Slides:</h4>\n  <div class=\"container\">\n    <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\">\n      <slide *ngFor=\"let slide of slides; let index=index\">\n        <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\n\n        <div class=\"carousel-caption\">\n          <h4>Slide {{index}}</h4>\n          <p>{{slide.text}}</p>\n        </div>\n      </slide>\n    </carousel>\n  </div>\n  <br/>\n  <div>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"addSlide()\">Add Slide\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"removeSlide()\">Remove Current\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"removeSlide(2)\">Remove #3\n    </button>\n  </div>\n  <div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"noWrapSlides\">Disable Slide Looping</label>\n    </div>\n\n    <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"myInterval\">\n    <p></p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/carousel-sample/carousel-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"carousel-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/carousel-sample/carousel-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselSampleComponent = (function () {
    function CarouselSampleComponent() {
        this.myInterval = 1500;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    CarouselSampleComponent.prototype.ngOnInit = function () {
    };
    CarouselSampleComponent.prototype.addSlide = function () {
        this.slides.push({
            image: "assets/img/slider" + this.slides.length % 4 + ".jpg"
        });
    };
    CarouselSampleComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    CarouselSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/carousel-sample/carousel-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/carousel-sample/carousel-sample.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], CarouselSampleComponent);
    return CarouselSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/collapse-sample/collapse-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Collapse\n    <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/collapse\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n  <p>Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes. Flexible component\n    that utilizes a handful of classes (from the\n    <strong>required transitions component</strong>(\n    <em>not yet implemented</em>)) for easy toggle behavior.</p>\n  <h3>\n    Example with Otional Captions\n  </h3>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\">Toggle collapse\n  </button>\n  <hr>\n  <div (collapsed)=\"collapsed($event)\" (expanded)=\"expanded($event)\" [collapse]=\"isCollapsed\" class=\"card card-block card-header\">\n    <div class=\"card-text\">Some content</div>\n  </div>\n  <p></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/collapse-sample/collapse-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"collapse-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/collapse-sample/collapse-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapseSampleComponent = (function () {
    function CollapseSampleComponent() {
        this.isCollapsed = false;
    }
    CollapseSampleComponent.prototype.ngOnInit = function () {
    };
    CollapseSampleComponent.prototype.collapsed = function (event) {
        console.log(event);
    };
    CollapseSampleComponent.prototype.expanded = function (event) {
        console.log(event);
    };
    CollapseSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapse-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/collapse-sample/collapse-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/collapse-sample/collapse-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CollapseSampleComponent);
    return CollapseSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/date-sample/date-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Date Picker\n    <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/datepicker\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n  <p>Datepicker is a highly configurable component that adds datepicker functionality to your pages. You can customize the date\n    format and language, restrict the selectable date ranges.</p>\n  <p>The new date picker is in active development and the user is strongly encouraged to refer to the base documentation, especially\n    the changelog.</p>\n  <h3>\n    Example\n  </h3>\n  <div class=\"row\">\n    <p>&nbsp;Colour</p>\n    <div class=\"col-xs-6 col-6 col-md-4 col-lg-4\">\n      <select class=\"custom-select form-control \" [(ngModel)]=\"colorTheme\" (ngModelChange)=\"applyTheme(dp);\">\n        <option value=\"theme-default\">default</option>\n        <option value=\"theme-green\">green</option>\n        <option value=\"theme-blue\">blue</option>\n        <option value=\"theme-dark-blue\">dark-blue</option>\n        <option value=\"theme-red\">red</option>\n        <option value=\"theme-orange\">orange</option>\n      </select>\n    </div>\n    <p>&nbsp;Locale</p>\n    <div class=\"col-xs-4 col-4 col-md-3 col-lg-2 form-group\">\n      <select class=\"custom-select form-control \" [(ngModel)]=\"locale\" (ngModelChange)=\"applyLocale(dp);\">\n        <option *ngFor=\"let loc of locales\" [value]=\"loc\">{{ loc }}</option>\n      </select>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n      <input type=\"text\" class=\"form-control\" bsDatepicker [minDate]=\"minDate\" [maxDate]=\"maxDate\" #dp=\"bsDatepicker\" [(bsValue)]=\"bsValue\"\n        [bsConfig]=\"bsConfig\">\n    </div>\n    <div class=\"col-xs-12 col-12 col-md-3 form-group\">\n      <button class=\"btn btn-success\" (click)=\"dp.toggle()\">Date Picker</button>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n      <input class=\"form-control\" #drp=\"bsDaterangepicker\" bsDaterangepicker [(ngModel)]=\"bsRangeValue\" [bsConfig]=\"bsConfig\">\n    </div>\n    <div class=\"col-xs-12 col-12 col-md-3 form-group\">\n      <button class=\"btn btn-success\" (click)=\"drp.toggle()\">Date Range Picker</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/date-sample/date-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".full button span {\n  background-color: limegreen;\n  border-radius: 32px;\n  color: black; }\n\n.partially button span {\n  background-color: orange;\n  border-radius: 32px;\n  color: black; }\n", "", {"version":3,"sources":["/mnt/Data/DevPackages/SBAdBs4Ng2/src/app/dashboard/bs-components/date-sample/date-sample.component.scss"],"names":[],"mappings":"AAAE;EACE,4BAA2B;EAC3B,oBAAmB;EACnB,aAAY,EACb;;AAED;EACE,yBAAwB;EACxB,oBAAmB;EACnB,aAAY,EACb","file":"date-sample.component.scss","sourcesContent":["  .full button span {\n    background-color: limegreen;\n    border-radius: 32px;\n    color: black;\n  }\n  \n  .partially button span {\n    background-color: orange;\n    border-radius: 32px;\n    color: black;\n  }"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/date-sample/date-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_bs_moment__ = __webpack_require__("../../../../ngx-bootstrap/bs-moment/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateSampleComponent = (function () {
    function DateSampleComponent() {
        this.minDate = new Date(2017, 5, 10);
        this.maxDate = new Date(2018, 9, 15);
        this.bsValue = new Date();
        this.bsRangeValue = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
        this.colorTheme = 'theme-green';
        this.locale = 'en';
        this.locales = Object(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_bs_moment__["b" /* listLocales */])();
    }
    DateSampleComponent.prototype.applyTheme = function (pop) {
        // create new object on each property change
        // so Angular can catch object reference change
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
        setTimeout(function () {
            pop.hide();
            pop.show();
        });
    };
    DateSampleComponent.prototype.applyLocale = function (pop) {
        // create new object on each property change
        // so Angular can catch object reference change
        this.bsConfig = Object.assign({}, { locale: this.locale });
        setTimeout(function () {
            pop.show();
        });
    };
    DateSampleComponent.prototype.ngOnInit = function () {
    };
    DateSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-date-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/date-sample/date-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/date-sample/date-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DateSampleComponent);
    return DateSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/dropdown-sample/dropdown-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dropdowns\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/dropdowns\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included\n  dropdown directives.</p>\n<h3>\n  Example\n</h3>\n<p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within\n  <code>dropdown</code>. Dropdowns can be triggered from\n  <code> &lt;a&gt;</code> or\n  <code> &lt;button&gt;</code> elements to better fit your potential needs.</p>\n<hr>\n<h4>Single button dropdowns</h4>\n<p>Any single\n  <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either\n  <code> &lt;button&gt; </code> elements:</p>\n<div class=\"row\">\n  <div class=\"col-sm-2 btn-group\" dropdown>\n    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n      Button dropdown\n      <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n      </li>\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n      </li>\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n      </li>\n      <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-2\">\n    <p>And with\n      <code> &lt;a&gt;</code> elements:</p>\n  </div>\n  <div class=\"col-sm-2\">\n    <span dropdown (isOpenChange)=\"toggled($event)\">\n      <a href dropdownToggle (click)=\"false\">\n        Click me for a dropdown, yo!\n      </a>\n      <ul *dropdownMenu class=\"dropdown-menu\">\n        <li *ngFor=\"let choice of items\">\n          <a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\n        </li>\n      </ul>\n    </span>\n  </div>\n</div>\n<hr>\n<h4>Split button dropup</h4>\n<div class=\"btn-group\" dropdown [dropup]=\"true\">\n  <button type=\"button\" class=\"btn btn-danger\">Action</button>\n  <button type=\"button\" dropdownToggle class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\">\n    <span class=\"caret\"></span>\n    <span class=\"sr-only\">Split button!</span>\n  </button>\n  <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n    <li role=\"menuitem\">\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\n    </li>\n    <li role=\"menuitem\">\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n    </li>\n    <li role=\"menuitem\">\n      <a class=\"dropdown-item\" href=\"#\">Something else here\n      </a>\n    </li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\">\n      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<p></p>\n<h1>&nbsp;</h1>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/dropdown-sample/dropdown-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"dropdown-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/dropdown-sample/dropdown-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownSampleComponent = (function () {
    function DropdownSampleComponent() {
        this.items = ['The first choice!',
            'And another choice for you.', 'but wait! A third!'];
    }
    DropdownSampleComponent.prototype.ngOnInit = function () {
    };
    DropdownSampleComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    DropdownSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdown-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/dropdown-sample/dropdown-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/dropdown-sample/dropdown-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownSampleComponent);
    return DropdownSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/modal-sample/modal-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Modals\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/modals\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.</p>\n<h3>\n  Examples\n</h3>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <h4>Service Modals</h4>\n  </div>\n  <div class=\"col-sm-3\">\n    <h4>Template</h4>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button>\n\n    <ng-template #template>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Modal</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        This is a modal.\n      </div>\n    </ng-template>\n  </div>\n  <div class=\"col-sm-3\">\n    <h4>Component</h4>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalWithComponent()\">Create modal with component</button>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <h4>Directive Modals</h4>\n  </div>\n  <div class=\"col-sm-3\">\n    <h4>Static modal</h4>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">Static modal</button>\n    <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n      aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Static modal</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            This is static modal, backdrop click will not close it. Click\n            <b>&times;</b> to close modal.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <h4>Otional sizes</h4>\n    <!--Large modal-->\n    <button class=\"btn btn-primary\" (click)=\"lgModal.show()\">Large modal</button>\n\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Large modal</h4>\n            <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            ...\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Small modal-->\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"smModal.show()\">Small modal</button>\n\n    <div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Small modal</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            ...\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <h4>Child modal</h4>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"childModal.show()\">Open child modal</button>\n    <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Child modal</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"childModal.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            I am a child modal, opened from parent component!\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/modal-sample/modal-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"modal-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/modal-sample/modal-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* This is a component which we pass in modal*/
var ModalContentComponent = (function () {
    function ModalContentComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [];
    }
    ModalContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{title}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ul *ngIf=\"list.length\">\n        <li *ngFor=\"let item of list\">{{item}}</li>\n      </ul>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]])
    ], ModalContentComponent);
    return ModalContentComponent;
}());

var ModalSampleComponent = (function () {
    function ModalSampleComponent(modalService) {
        this.modalService = modalService;
    }
    ModalSampleComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ModalSampleComponent.prototype.openModalWithComponent = function () {
        var list = [
            'Open a modal with component',
            'Pass your data',
            'Do something else',
            '...'
        ];
        this.bsModalRef = this.modalService.show(ModalContentComponent);
        this.bsModalRef.content.title = 'Modal with component';
        this.bsModalRef.content.list = list;
        setTimeout(function () {
            list.push('PROFIT!!!');
        }, 2000);
    };
    ModalSampleComponent.prototype.ngOnInit = function () {
    };
    ModalSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/modal-sample/modal-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/modal-sample/modal-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ModalSampleComponent);
    return ModalSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/pagination-sample/pagination-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Pagination\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/pagination\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p><strong>Pagination</strong> - provide pagination links for your site or app with the multi-page pagination component, or\n  the simpler pager alternative.</p>\n<p><strong>Pager</strong> - quick previous and next links for simple pagination implementations with light markup and styles.\n  It's great for simple sites like blogs or magazines.</p>\n<h3>\n  Examples\n</h3>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <h4>Default</h4>\n    <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\">\n    </pagination>\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n      </pagination>\n      <pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\">\n      </pagination>\n      <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (numPages)=\"smallnumPages = $event\">\n      </pagination>\n      <pre class=\"col-sm-6 card card-block card-header\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n      <br/>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\n  </div>\n  <div class=\"col-sm-4\">\n    <h4>States and Limits</h4>\n    <div class=\"col-sm-4\">\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"\n        [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n    </div>\n    <pre class=\"col-sm-4 card card-block card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n  </div>\n  <div class=\"col-sm-4\">\n    <h4>Pager</h4>\n    <div style=\"margin: 20px 0;\">\n      <pagination [directionLinks]=\"false\" [totalItems]=\"totalPagerItems\" [(ngModel)]=\"currentPagerPage\" (numPages)=\"smallnumPagerPages = $event\"></pagination>\n    </div>\n\n    <div>\n      <pager [totalItems]=\"totalPagerItems\" [(ngModel)]=\"currentPagerPage\" (pageChanged)=\"pageChanged($event)\" pageBtnClass=\"btn\"\n        itemsPerPage=\"10\"></pager>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/pagination-sample/pagination-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"pagination-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/pagination-sample/pagination-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationSampleComponent = (function () {
    function PaginationSampleComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.totalPagerItems = 64;
        this.currentPagerPage = 3;
        this.smallnumPagerPages = 0;
    }
    PaginationSampleComponent.prototype.ngOnInit = function () {
    };
    PaginationSampleComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    PaginationSampleComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    PaginationSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/pagination-sample/pagination-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/pagination-sample/pagination-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationSampleComponent);
    return PaginationSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/popover-sample/popover-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Popover\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/popover\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>Four directions</h4>\n    <p>\n      Four positioning options are available: top, right, bottom, and left aligned. Besides that, auto option may be used to detect\n      a position that fits the component on screen.\n    </p>\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      popoverTitle=\"Popover auto\" placement=\"auto\">\n      Popover auto\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      popoverTitle=\"Popover on top\" placement=\"top\">\n      Popover on top\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      popoverTitle=\"Popover on right\" placement=\"right\">\n      Popover on right\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      popoverTitle=\"Popover on left\" placement=\"left\">\n      Popover on left\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      popoverTitle=\"Popover on bottom\" placement=\"bottom\">\n      Popover on bottom\n    </button>\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Dismiss on next click</h4>\n    <p>Use the\n      <code>focus</code> trigger to dismiss popovers on the next click that the user makes.</p>\n    <button type=\"button\" class=\"btn btn-success\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Dismissible popover\"\n      triggers=\"focus\">\n      Dismissible popover\n    </button>\n  </div>\n</div>\n<h4>&nbsp;</h4>\n<h4>&nbsp;</h4>\n<h4>&nbsp;</h4>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/popover-sample/popover-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"popover-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/popover-sample/popover-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopoverSampleComponent = (function () {
    function PopoverSampleComponent() {
    }
    PopoverSampleComponent.prototype.ngOnInit = function () {
    };
    PopoverSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popover-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/popover-sample/popover-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/popover-sample/popover-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopoverSampleComponent);
    return PopoverSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/progress-sample/progress-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Progress Bar\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/progressbar\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<hr>\n<p>This section shows the NG2-bootstrap version of progress bars under BS4</p>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Static</h4>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <progressbar class=\"progress\" [value]=\"55\" [max]=\"100\">&nbsp;</progressbar>\n      </div>\n      <div class=\"col-sm-4\">\n        <progressbar class=\"progress progress-striped\" [value]=\"22\" [max]=\"100\" type=\"warning\">22%</progressbar>\n      </div>\n      <div class=\"col-sm-4\">\n        <progressbar class=\"progress progress-striped active\" [max]=\"200\" [value]=\"166\" type=\"danger\">\n          <i>166 / 200</i>\n        </progressbar>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dynamic (value: {{dynamic}})</h4>\n    <progressbar class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\">\n      <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\n    </progressbar>\n\n    <small>\n      <em>No animation</em>\n    </small>\n    <progressbar class=\"progress progress-success progress-bar-striped\" [value]=\"dynamic\" [max]=\"100\">\n      <b>{{dynamic}}%</b>\n    </progressbar>\n\n    <small>\n      <em>Object (changes type based on value)</em>\n    </small>\n    <progressbar class=\"progress progress-striped progress-animated\" [value]=\"dynamic\" [max]=\"100\" [type]=\"type\">\n      {{type}}\n      <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n    </progressbar>\n    <p></p>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Stacked</h4>\n    <div class=\"row col-lg-12\">\n      <!-- todo: implement as component -->\n      <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\n    </div>\n    <p></p>\n    <div class=\"row col-md-12\">\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomStacked()\">Randomize</button>\n    </div>\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/progress-sample/progress-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"progress-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/progress-sample/progress-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressSampleComponent = (function () {
    function ProgressSampleComponent() {
        this.max = 200;
        this.stacked = [];
        this.random();
        this.randomStacked();
    }
    ProgressSampleComponent.prototype.ngOnInit = function () {
    };
    ProgressSampleComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                type: types[index],
                label: value + ' %'
            });
        }
    };
    ProgressSampleComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ProgressSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/progress-sample/progress-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/progress-sample/progress-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressSampleComponent);
    return ProgressSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/rating-sample/rating-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Rating\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/rating\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Rating component that will take care of visualising a star rating bar</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Static rating</h4>\n    <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\"></rating>\n    <div class=\"card\">\n      <pre class=\"card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b> </pre>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dynamic rating</h4>\n    <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" (onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar()\" [titles]=\"['one','two','three']\"></rating>\n    <span class=\"label\" [ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\"\n      [ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\n    <div class=\"card\">\n      <pre class=\"card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;  Hovering over: <b>{{overStar || \"none\"}}</b></pre>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"rate = 0\" [disabled]=\"isReadonly\">Clear\n    </button>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"isReadonly = ! isReadonly\">Toggle Readonly\n    </button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Custom icons</h4>\n    <rating [max]=\"10\" [(ngModel)]=\"x\" [customTemplate]=\"t\" style=\"color: #0275d8;font-size: 20px;\"></rating>\n    <b>(\n      <i>Rate:</i> {{x}})</b>\n    <ng-template #t let-index=\"index\" let-value=\"value\">{{index\n      < value ? '&#9745;' : '&#9744;'}}</ng-template>\n  </div>\n\n  <div>\n    <rating [max]=\"10\" [(ngModel)]=\"y\" [customTemplate]=\"tt\"></rating>\n    <b>(\n      <i>Rate:</i> {{y}})</b>\n    <ng-template #tt let-i=\"index\" let-v=\"value\">\n      <button class=\"btn btn-{{i < v ? 'warning' : 'default'}}\">\n        {{i\n        < v ? '&#9733;' : '&#9734;'}} </button>\n    </ng-template>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/rating-sample/rating-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"rating-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/rating-sample/rating-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingSampleComponent = (function () {
    function RatingSampleComponent() {
        this.max = 10;
        this.rate = 7;
        this.isReadonly = true;
        this.dynMax = 10;
        this.dynRate = 7;
        this.dynIsReadonly = false;
        this.x = 5;
        this.y = 2;
        this.ratingStates = [
            { stateOn: 'fa fa-check-circle', stateOff: 'fa fa-check-circle-o' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-power-off' }
        ];
    }
    RatingSampleComponent.prototype.ngOnInit = function () {
    };
    RatingSampleComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    RatingSampleComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    RatingSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rating-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/rating-sample/rating-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/rating-sample/rating-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingSampleComponent);
    return RatingSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/sortable-sample/sortable-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Sortable\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/sortable\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>The <strong>sortable component</strong> represents a list of items, with ability to sort them or move to another container\n  via drag&amp;drop. Input collection isn't mutated by the component, so events <code>ngModelChange</code>, <code>onChange</code>  are using new collections.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>String items:</h4>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemStringsLeft\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemStringsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemStringsRight\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemStringsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Complex data model:</h4>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemObjectsLeft\" fieldName=\"name\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>{{ itemObjectsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemObjectsRight\" fieldName=\"name\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>{{ itemObjectsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Custom item template:</h4>\n    <div class=\"row\">\n      <ng-template #itemTemplate let-item=\"item\" let-index=\"index\"><span>{{index}}: {{item.value}}</span></ng-template>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemCuStringsLeft\" [itemTemplate]=\"itemTemplate\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemCuStringsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemCuStringsRight\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemCuStringsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/sortable-sample/sortable-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"sortable-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/sortable-sample/sortable-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableSampleComponent = (function () {
    function SortableSampleComponent() {
        this.itemStringsLeft = [
            'Windstorm',
            'Bombasto',
            'Magneta',
            'Tornado'
        ];
        this.itemStringsRight = [
            'Mr. O',
            'Tomato'
        ];
        this.itemObjectsLeft = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' }
        ];
        this.itemObjectsRight = [
            { id: 4, name: 'Tornado' },
            { id: 5, name: 'Mr. O' },
            { id: 6, name: 'Tomato' }
        ];
        this.itemCuStringsLeft = [
            'Windstorm',
            'Bombasto',
            'Magneta',
            'Tornado'
        ];
        this.itemCuStringsRight = [
            'Mr. O',
            'Tomato'
        ];
    }
    SortableSampleComponent.prototype.ngOnInit = function () {
    };
    SortableSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sortable-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/sortable-sample/sortable-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/sortable-sample/sortable-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SortableSampleComponent);
    return SortableSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/tabs-sample/tabs-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Tabs\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/tabs\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus.\n  <strong>Nested tabs are not supported.</strong>\n</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Static tabs:</h4>\n    <tabset>\n      <tab heading=\"Static title\" id=\"tab1\">Static content</tab>\n      <tab heading=\"Static Title 1\">Static content 1</tab>\n      <tab heading=\"Static Title 2\">Static content 2</tab>\n      <tab (select)=\"alertMe()\">\n        <ng-template tabHeading>\n          <span class=\"badge badge-secondary\">Click here!</span>\n        </ng-template>\n        I've got an HTML heading, and a select callback. Pretty cool!\n      </tab>\n    </tabset>\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Dynamic tabs:</h4>\n    <div (click)=\"$event.preventDefault()\">\n      <p>Select a tab by setting active binding to true:</p>\n      <p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[0].active = true\">Select second tab</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].active = true\">Select third tab</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].disabled = ! tabs[1].disabled\">\n          Enable / Disable third tab\n        </button>\n      </p>\n      <hr/>\n      <tabset>\n        <tab heading=\"Static title\">Static content</tab>\n        <tab *ngFor=\"let tabz of tabs\" [heading]=\"tabz.title\" [active]=\"tabz.active\" (select)=\"tabz.active = true\" (deselect)=\"tabz.active = false\"\n          [disabled]=\"tabz.disabled\" [removable]=\"tabz.removable\" (removed)=\"removeTabHandler(tabz)\" [customClass]=\"tabz.customClass\">\n          {{tabz?.content}}\n        </tab>\n      </tabset>\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <h4>Pills:</h4>\n    <tabset type=\"pills\">\n      <tab heading=\"Pills 1\">Pills content 1</tab>\n      <tab heading=\"Pills 2\">Pills content 2</tab>\n    </tabset>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/tabs-sample/tabs-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tabs-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/tabs-sample/tabs-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsSampleComponent = (function () {
    function TabsSampleComponent() {
        this.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
        ];
    }
    TabsSampleComponent.prototype.ngOnInit = function () {
    };
    TabsSampleComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    TabsSampleComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    TabsSampleComponent.prototype.addNewTab = function () {
        var newTabIndex = this.tabs.length + 1;
        this.tabs.push({
            title: "Dynamic Title " + newTabIndex,
            content: "Dynamic content " + newTabIndex,
            disabled: false,
            removable: true
        });
    };
    TabsSampleComponent.prototype.removeTabHandler = function (tab) {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
        console.log('Remove Tab handler');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('staticTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["o" /* TabsetComponent */])
    ], TabsSampleComponent.prototype, "staticTabs", void 0);
    TabsSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs-sample',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/tabs-sample/tabs-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/tabs-sample/tabs-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSampleComponent);
    return TabsSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/timepicker-sample/timepicker-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Timepicker\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/timepicker\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>A lightweight & configurable timepicker directive.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Timepicker:</h4>\n    <timepicker [(ngModel)]=\"tpMytime\"></timepicker>\n    <pre class=\"alert alert-info\">Time is: {{tpMytime}}</pre>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Meridian:</h4>\n    <timepicker [(ngModel)]=\"mMytime\" [showMeridian]=\"mIsmeridian\"></timepicker>\n    <pre class=\"alert alert-info\">Time is: {{mMytime}}</pre>\n    <hr>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"mToggleMode()\">12H / 24H</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Disabled:</h4>\n    <timepicker [(ngModel)]=\"dMytime\" [showMeridian]=\"true\" [readonlyInput]=\"!dIsEnabled\"></timepicker>\n    <hr>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"dIsEnabled=!dIsEnabled\">Enable / Disable input</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/timepicker-sample/timepicker-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"timepicker-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/timepicker-sample/timepicker-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimepickerSampleComponent = (function () {
    function TimepickerSampleComponent() {
        this.tpMytime = new Date();
        this.mIsmeridian = true;
        this.mMytime = new Date();
        this.dIsEnabled = true;
        this.dMytime = new Date();
    }
    TimepickerSampleComponent.prototype.ngOnInit = function () {
    };
    TimepickerSampleComponent.prototype.mToggleMode = function () {
        this.mIsmeridian = !this.mIsmeridian;
    };
    TimepickerSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timepicker-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/timepicker-sample/timepicker-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/timepicker-sample/timepicker-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimepickerSampleComponent);
    return TimepickerSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/tooltip-sample/tooltip-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Tooltip\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/tooltip\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Inspired by the excellent Tipsy jQuery plugin written by Jason Frame. Tooltips are an updated version, which don’t rely on\n  images, uses CSS3 for animations, and much more.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Simple:</h4>\n    <button type=\"button\" class=\"btn btn-primary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Simple demo\n    </button>\n  </div>\n  <div class=\"col-md-8 col-xs--6\">\n    <h4>Four Directions plus auto</h4>\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      placement=\"top\">\n      Tooltip on top\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      placement=\"right\">\n      Tooltip on right\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      placement=\"auto\">\n      Tooltip auto\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      placement=\"left\">\n      Tooltip on left\n    </button>\n\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      placement=\"bottom\">\n      Tooltip on bottom\n    </button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Dismiss on next click:</h4>\n    <button type=\"button\" class=\"btn btn-success\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" triggers=\"focus\">\n      Dismissible tooltip\n    </button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dynamic Content</h4>\n    <button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\n      Simple binding\n    </button>\n    <ng-template #tolTemplate>Just another: {{content}}</ng-template>\n    <button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\n      TemplateRef binding\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/tooltip-sample/tooltip-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tooltip-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/tooltip-sample/tooltip-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipSampleComponent = (function () {
    function TooltipSampleComponent() {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
    }
    TooltipSampleComponent.prototype.ngOnInit = function () {
    };
    TooltipSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/tooltip-sample/tooltip-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/tooltip-sample/tooltip-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipSampleComponent);
    return TooltipSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/typeahead-sample/typeahead-sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Typeahead\n  <a target=\"_blank\" href=\"http://valor-software.com/ngx-bootstrap/#/typeahead\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<h3>\n  Examples\n</h3>\n<div class=\"row\" style=\"min-height: 20rem\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Static Array:</h4>\n    <pre class=\"card card-block card-header\">Model: {{saSelected | json}}</pre>\n    <input [(ngModel)]=\"saSelected\" [typeahead]=\"states\" class=\"form-control\">\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Item template:</h4>\n    <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\n      <h5>This is: {{model | json}} Index: {{ index }}</h5>\n    </ng-template>\n\n    <pre class=\"card card-block card-header\">Model: {{itSelected | json}}</pre>\n    <input [(ngModel)]=\"itSelected\" [typeahead]=\"states\" [typeaheadItemTemplate]=\"customItemTemplate\" class=\"form-control\">\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Option field:</h4>\n    <pre class=\"card card-block card-header\">Model: {{customSelected | json}}</pre>\n    <input [(ngModel)]=\"customSelected\" [typeahead]=\"statesComplex\" typeaheadOptionField=\"name\" class=\"form-control\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/typeahead-sample/typeahead-sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"typeahead-sample.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-components/typeahead-sample/typeahead-sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadSampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeaheadSampleComponent = (function () {
    function TypeaheadSampleComponent() {
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama', region: 'South' }, { id: 2, name: 'Alaska', region: 'West' }, { id: 3, name: 'Arizona', region: 'West' },
            { id: 4, name: 'Arkansas', region: 'South' }, { id: 5, name: 'California', region: 'West' },
            { id: 6, name: 'Colorado', region: 'West' }, { id: 7, name: 'Connecticut', region: 'Northeast' },
            { id: 8, name: 'Delaware', region: 'South' }, { id: 9, name: 'Florida', region: 'South' },
            { id: 10, name: 'Georgia', region: 'South' }, { id: 11, name: 'Hawaii', region: 'West' },
            { id: 12, name: 'Idaho', region: 'West' }, { id: 13, name: 'Illinois', region: 'Midwest' },
            { id: 14, name: 'Indiana', region: 'Midwest' }, { id: 15, name: 'Iowa', region: 'Midwest' },
            { id: 16, name: 'Kansas', region: 'Midwest' }, { id: 17, name: 'Kentucky', region: 'South' },
            { id: 18, name: 'Louisiana', region: 'South' }, { id: 19, name: 'Maine', region: 'Northeast' },
            { id: 21, name: 'Maryland', region: 'South' }, { id: 22, name: 'Massachusetts', region: 'Northeast' },
            { id: 23, name: 'Michigan', region: 'Midwest' }, { id: 24, name: 'Minnesota', region: 'Midwest' },
            { id: 25, name: 'Mississippi', region: 'South' }, { id: 26, name: 'Missouri', region: 'Midwest' },
            { id: 27, name: 'Montana', region: 'West' }, { id: 28, name: 'Nebraska', region: 'Midwest' },
            { id: 29, name: 'Nevada', region: 'West' }, { id: 30, name: 'New Hampshire', region: 'Northeast' },
            { id: 31, name: 'New Jersey', region: 'Northeast' }, { id: 32, name: 'New Mexico', region: 'West' },
            { id: 33, name: 'New York', region: 'Northeast' }, { id: 34, name: 'North Dakota', region: 'Midwest' },
            { id: 35, name: 'North Carolina', region: 'South' }, { id: 36, name: 'Ohio', region: 'Midwest' },
            { id: 37, name: 'Oklahoma', region: 'South' }, { id: 38, name: 'Oregon', region: 'West' },
            { id: 39, name: 'Pennsylvania', region: 'Northeast' }, { id: 40, name: 'Rhode Island', region: 'Northeast' },
            { id: 41, name: 'South Carolina', region: 'South' }, { id: 42, name: 'South Dakota', region: 'Midwest' },
            { id: 43, name: 'Tennessee', region: 'South' }, { id: 44, name: 'Texas', region: 'South' },
            { id: 45, name: 'Utah', region: 'West' }, { id: 46, name: 'Vermont', region: 'Northeast' },
            { id: 47, name: 'Virginia', region: 'South' }, { id: 48, name: 'Washington', region: 'South' },
            { id: 49, name: 'West Virginia', region: 'South' }, { id: 50, name: 'Wisconsin', region: 'Midwest' },
            { id: 51, name: 'Wyoming', region: 'West' }
        ];
    }
    TypeaheadSampleComponent.prototype.ngOnInit = function () {
    };
    TypeaheadSampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typeahead-sample',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-components/typeahead-sample/typeahead-sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-components/typeahead-sample/typeahead-sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypeaheadSampleComponent);
    return TypeaheadSampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-elements/bs-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2 class=\"page-header\">\n        Bootstrap Elements\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-desktop\"></i> Bootstrap Elements\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Bootstrap Elements</h1>\n    <p class=\"lead\">This is a simple jumbotron-style component for calling extra attention to the following featured content.</p>\n    <hr class=\"my-2\">\n    <p>The following Bootstrap elements require jquery/popper.js to function. These are listed in the Bootstrap documentation\n      as: </p>\n    <ul>\n      <li>Alerts for dismissing</li>\n      <li>Buttons for toggling states and checkbox/radio functionality</li>\n      <li>Carousel for all slide behaviors, controls, and indicators</li>\n      <li>Collapse for toggling visibility of content</li>\n      <li>Dropdowns for displaying and positioning (also requires\n        <a href=\"https://popper.js.org/\">Popper.js</a>)</li>\n      <li>Modals for displaying, positioning, and scroll behavior</li>\n      <li>Navbar for extending our Collapse plugin to implement responsive behavior</li>\n      <li>Tooltips and popovers for displaying and positioning (also requires\n        <a href=\"https://popper.js.org/\">Popper.js</a>)</li>\n      <li>Scrollspy for scroll behavior and navigation updates</li>\n    </ul>\n    <p>For the above bootstrap elements the corresponding ngx-bootstrap elements are briefly detailed in the\n      <a [routerLink]=\"['/dashboard/components']\">components</a> section. Unless there is a need for jquery/popper.js elsewhere in your project it is recommended that\n      you use the the ngx-bootstrap components which do not rely on any external js libraries.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" href=\"http://getbootstrap.com/docs/4.0/components/jumbotron/\" role=\"button\">Learn more</a>\n    </p>\n  </div>\n\n  <div>\n    <h1>Badge</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <h5>Example heading\n        <span class=\"badge badge-secondary\">New</span>\n      </h5>\n    </div>\n    <div class=\"col-sm-2\">\n      <button type=\"button\" class=\"btn btn-primary\">\n        Notifications\n        <span class=\"badge badge-light\">4</span>\n      </button>\n    </div>\n    <div class=\"col-sm-2\">\n      <span class=\"badge badge-pill badge-danger\">Danger</span>\n    </div>\n    <div class=\"col-sm-2\">\n      <a href=\"javascript:;\" class=\"badge badge-warning\">Warning</a>\n    </div>\n    <div class=\"col-sm-2\">\n    </div>\n  </div>\n  <hr>\n  <br>\n  <div>\n    <h1>breadcrumb</h1>\n  </div>\n  <nav aria-label=\"breadcrumb\" role=\"navigation\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>\n    </ol>\n  </nav>\n\n  <nav aria-label=\"breadcrumb\" role=\"navigation\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"#\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n    </ol>\n  </nav>\n\n  <nav aria-label=\"breadcrumb\" role=\"navigation\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"#\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a href=\"#\">Library</a>\n      </li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n    </ol>\n  </nav>\n  <hr>\n  <br>\n\n  <div>\n    <h1>Plain Buttons (no state functionality)</h1>\n  </div>\n  <p>\n    <button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-secondary\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-lg btn-light\">Light</button>\n    <button type=\"button\" class=\"btn btn-lg btn-dark\">Dark</button>\n    <button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\n  </p>\n  <p>\n    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-light\">Light</button>\n    <button type=\"button\" class=\"btn btn-dark\">Dark</button>\n    <button type=\"button\" class=\"btn btn-link\">Link</button>\n  </p>\n  <p>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-sm btn-secondary\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-sm btn-light\">Light</button>\n    <button type=\"button\" class=\"btn btn-sm btn-dark\">Dark</button>\n    <button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\n  </p>\n  <hr>\n  <br>\n\n  <div>\n    <h1>Cards</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <div class=\"card\" style=\"width: 20rem;\">\n        <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Card title</h4>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <a href=\"javascript:;\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-tabs card-header-tabs\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"javascript:;\">Active</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"javascript:;\">Link</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"javascript:;\">Disabled</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Special title treatment</h4>\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n          <a href=\"javascript:;\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n        <div class=\"card-header\">Header</div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Primary card title</h4>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 20rem;\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Secondary card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <br>\n\n  <div>\n    <h1>Thumbnails</h1>\n  </div>\n  <img class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" alt=\"\">\n  <hr>\n  <br>\n\n  <div>\n    <h1>Navbars </h1>\n    <h4>Navbars can be used without popper.js by substituting the use of ngx-collapse for the native bootstrap collapse.</h4>\n  </div>\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"javascript:;\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"darkNavCollapsed = !darkNavCollapsed\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div [collapse]=\"darkNavCollapsed\" class=\"navbar-collapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"javascript:;\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:;\">Link</a>\n        </li>\n        <div class=\"nav-item\" dropdown>\n          <a href dropdownToggle (click)=\"false\" class=\"nav-link dropdown-toggle\">\n            Dropdown\n          </a>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n            </li>\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n            </li>\n            <li class=\"dropdown-divider\"></li>\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n            </li>\n          </ul>\n        </div>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"javascript:;\">Disabled</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  <br>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"javascript:;\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"primaryNavCollapsed = !primaryNavCollapsed\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div [collapse]=\"primaryNavCollapsed\" class=\"navbar-collapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"javascript:;\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:;\">Link</a>\n        </li>\n        <div class=\"nav-item\" dropdown>\n          <a href dropdownToggle (click)=\"false\" class=\"nav-link dropdown-toggle\">\n            Dropdown\n          </a>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n            </li>\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n            </li>\n            <li class=\"dropdown-divider\"></li>\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n            </li>\n          </ul>\n        </div>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"javascript:;\">Disabled</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  <br>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"javascript:;\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"lightNavCollapsed = !lightNavCollapsed\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div [collapse]=\"lightNavCollapsed\" class=\"navbar-collapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"javascript:;\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:;\">Link</a>\n        </li>\n        <div class=\"nav-item\" dropdown>\n          <a href dropdownToggle (click)=\"false\" class=\"nav-link dropdown-toggle\">\n            Dropdown\n          </a>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n            </li>\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n            </li>\n            <li class=\"dropdown-divider\"></li>\n            <li role=\"menuItem\">\n              <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n            </li>\n          </ul>\n        </div>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"javascript:;\">Disabled</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  <hr><br>\n\n  <div>\n    <h1>List groups</h1>\n    <hr>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Cras justo odio</li>\n        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n        <li class=\"list-group-item\">Morbi leo risus</li>\n        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li>\n      </ul>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"list-group\">\n        <a href=\"javascript:;\" class=\"list-group-item active\">Cras justo odio</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Morbi leo risus</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Porta ac consectetur ac</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Vestibulum at eros</a>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"list-group\">\n        <a href=\"javascript:;\" class=\"list-group-item active\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n        <a href=\"javascript:;\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n        <a href=\"javascript:;\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-elements/bs-elements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"bs-elements.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/bs-elements/bs-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsElementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BsElementsComponent = (function () {
    function BsElementsComponent() {
        this.lightNavCollapsed = true;
        this.darkNavCollapsed = true;
        this.primaryNavCollapsed = true;
    }
    BsElementsComponent.prototype.ngOnInit = function () {
    };
    BsElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bs-elements',
            template: __webpack_require__("../../../../../src/app/dashboard/bs-elements/bs-elements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/bs-elements/bs-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BsElementsComponent);
    return BsElementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/bs-elements/bs-elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsElementsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_elements_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-elements/bs-elements.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BsElementsModule = (function () {
    function BsElementsModule() {
    }
    BsElementsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["g" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["d" /* BsDropdownModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__bs_elements_component__["a" /* BsElementsComponent */]]
        })
    ], BsElementsModule);
    return BsElementsModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/charting/charting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Charts\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-fw fa-dashboard\"></i>\n          <a [routerLink]=\"['/dashboard/home']\"> Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-fw fa-bar-chart-o\"></i> NG2-Charts\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row no-gutters\">\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-primary\">\n        <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-success\">\n        <canvas baseChart [datasets]=\"areaChartData\" [labels]=\"areaChartLabels\" [options]=\"areaChartOptions\" [legend]=\"areaChartLegend\"\n          [chartType]=\"areaChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-warning\">\n        <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-danger\">\n        <canvas baseChart [datasets]=\"timeChartData\" [options]=\"timeChartOptions\" [legend]=\"timeChartLegend\" [chartType]=\"timeChartType\"\n          [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/charting/charting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"charting.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/charting/charting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartingComponent = (function () {
    function ChartingComponent() {
        this.ptRadius = 5;
        this.chartColors = [
            {
                backgroundColor: 'rgba(124, 181, 236, 0.75)',
                borderColor: 'rgba(124, 181, 236, 1.0)',
                pointStyle: 'circle',
                pointRadius: this.ptRadius
            },
            {
                backgroundColor: 'rgba(67,67,72, 0.75)',
                borderColor: 'rgba(67,67,72, 1.0)',
                pointStyle: 'rectRot',
                pointRadius: this.ptRadius
            },
            {
                backgroundColor: 'rgba(144,237,125, 0.75)',
                borderColor: 'rgba(144,237,125,1.0)',
                pointStyle: 'rect',
                pointRadius: this.ptRadius
            },
            {
                backgroundColor: 'rgba(247,163,92, 0.75)',
                borderColor: 'rgba(247,163,92, 1.0)',
                pointStyle: 'triangle',
                pointRadius: this.ptRadius
            },
            {
                backgroundColor: 'rgba(147,112,216, 0.75)',
                borderColor: 'rgba(147,112,216, 1.0)',
                pointStyle: 'star',
                pointRadius: this.ptRadius
            }
        ];
        // lineChart
        this.lineChartData = [
            { data: [502, 635, 809, 947, 1402, 3634, 5268], label: 'Asia', lineTension: 0 },
            { data: [106, 107, 111, 133, 221, 767, 1766], label: 'Africa', lineTension: 0 },
            { data: [163, 203, 276, 408, 547, 729, 628], label: 'Europe', lineTension: 0 },
            { data: [18, 31, 54, 156, 339, 818, 1201], label: 'America', lineTension: 0 },
            { data: [2, 2, 2, 6, 13, 30, 46], label: 'Oceania', lineTension: 0 }
        ];
        this.lineChartLabels = ['1750', '1800', '1850', '1900', '1950', '1999', '2050'];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            title: {
                display: true,
                text: 'Historic and Estimated Worldwide Population Distribution by Region'
            },
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Millions'
                        }
                    }]
            },
            tooltips: {
                mode: 'index'
            }
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // area with negative values
        this.areaChartData = [
            { data: [5, 3, 4, 7, 2], label: 'John', lineTension: 0 },
            { data: [2, -2, -3, 2, 1], label: 'Jane', lineTension: 0 },
            { data: [3, 4, 4, -2, 5], label: 'Joe', lineTension: 0 }
        ];
        this.areaChartLabels = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'];
        this.areaChartOptions = {
            animation: false,
            responsive: true,
            title: {
                display: true,
                text: 'Area chart with negative values'
            },
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Values'
                        }
                    }]
            }
        };
        this.areaChartLegend = true;
        this.areaChartType = 'line';
        // bar chart
        this.barChartData = [
            { data: [5, 3, 4, 7, 2], label: 'John' },
            { data: [3, 4, 4, 2, 5], label: 'Joe' },
            { data: [2, 5, 6, 2, 1], label: 'Jane' },
            { data: [3, 0, 4, 4, 3], label: 'Janet' }
        ];
        this.barChartLabels = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'];
        this.barChartOptions = {
            animation: false,
            responsive: true,
            title: {
                display: true,
                text: 'Total fruit consumtion, grouped by gender'
            },
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of fruits'
                        }
                    }]
            }
        };
        this.barChartLegend = true;
        this.barChartType = 'bar';
        // time chart
        this.timeChartData = [{
                label: 'Winter 2012-2013',
                data: [
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-10-21', 'YYYY-MM-DD'), y: 0.00 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-11-04', 'YYYY-MM-DD'), y: 0.28 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-11-09', 'YYYY-MM-DD'), y: 0.25 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-11-27', 'YYYY-MM-DD'), y: 0.20 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-12-02', 'YYYY-MM-DD'), y: 0.28 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-12-26', 'YYYY-MM-DD'), y: 0.28 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-12-29', 'YYYY-MM-DD'), y: 0.47 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-01-11', 'YYYY-MM-DD'), y: 0.79 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-01-26', 'YYYY-MM-DD'), y: 0.72 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-02-03', 'YYYY-MM-DD'), y: 1.02 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-02-11', 'YYYY-MM-DD'), y: 1.12 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-02-25', 'YYYY-MM-DD'), y: 1.20 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-03-11', 'YYYY-MM-DD'), y: 1.18 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-04-11', 'YYYY-MM-DD'), y: 1.19 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-01', 'YYYY-MM-DD'), y: 1.85 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-05', 'YYYY-MM-DD'), y: 2.22 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-19', 'YYYY-MM-DD'), y: 1.15 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-06-03', 'YYYY-MM-DD'), y: 0.00 }
                ],
                fill: false
            }, {
                label: 'Winter 2013-2014',
                data: [
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-10-29', 'YYYY-MM-DD'), y: 0.00 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-11-09', 'YYYY-MM-DD'), y: 0.40 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-12-01', 'YYYY-MM-DD'), y: 0.25 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-01-01', 'YYYY-MM-DD'), y: 1.66 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-01-10', 'YYYY-MM-DD'), y: 1.80 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-02-19', 'YYYY-MM-DD'), y: 1.76 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-03-25', 'YYYY-MM-DD'), y: 2.62 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-04-19', 'YYYY-MM-DD'), y: 2.41 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-04-30', 'YYYY-MM-DD'), y: 2.05 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-14', 'YYYY-MM-DD'), y: 1.70 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-24', 'YYYY-MM-DD'), y: 1.10 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-06-10', 'YYYY-MM-DD'), y: 0.00 }
                ],
                fill: false
            }, {
                label: 'Winter 2014-2015',
                data: [
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-11-25', 'YYYY-MM-DD'), y: 0.00 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-12-06', 'YYYY-MM-DD'), y: 0.25 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-12-20', 'YYYY-MM-DD'), y: 1.41 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1970-12-25', 'YYYY-MM-DD'), y: 1.64 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-01-04', 'YYYY-MM-DD'), y: 1.60 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-01-17', 'YYYY-MM-DD'), y: 2.55 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-01-24', 'YYYY-MM-DD'), y: 2.62 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-02-04', 'YYYY-MM-DD'), y: 2.50 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-02-14', 'YYYY-MM-DD'), y: 2.42 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-03-06', 'YYYY-MM-DD'), y: 2.74 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-03-14', 'YYYY-MM-DD'), y: 2.62 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-03-24', 'YYYY-MM-DD'), y: 2.60 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-04-02', 'YYYY-MM-DD'), y: 2.81 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-04-12', 'YYYY-MM-DD'), y: 2.63 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-04-28', 'YYYY-MM-DD'), y: 2.77 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-05', 'YYYY-MM-DD'), y: 2.68 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-10', 'YYYY-MM-DD'), y: 2.56 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-15', 'YYYY-MM-DD'), y: 2.39 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-05-20', 'YYYY-MM-DD'), y: 2.30 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-06-05', 'YYYY-MM-DD'), y: 2.00 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-06-10', 'YYYY-MM-DD'), y: 1.85 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-06-15', 'YYYY-MM-DD'), y: 1.49 },
                    { x: __WEBPACK_IMPORTED_MODULE_1_moment__('1971-06-23', 'YYYY-MM-DD'), y: 1.08 }
                ],
                fill: false
            }];
        this.timeChartOptions = {
            animation: false,
            title: {
                display: true,
                text: 'Snow depth at Vikjafjellet, Norway'
            },
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true
                }
            },
            scales: {
                xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'month',
                            displayFormats: {
                                month: 'D MMM'
                            },
                            tooltipFormat: 'll'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Snow Depth(m)'
                        },
                        ticks: {
                            min: 0,
                            fixedStepSize: 1.0
                        }
                    }]
            }
        };
        this.timeChartLegend = true;
        this.timeChartType = 'line';
    }
    ChartingComponent.prototype.ngOnInit = function () {
    };
    // events
    ChartingComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartingComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__("../../../../../src/app/dashboard/charting/charting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/charting/charting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartingComponent);
    return ChartingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/charting/charting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charting_component__ = __webpack_require__("../../../../../src/app/dashboard/charting/charting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js__ = __webpack_require__("../../../../chart.js/dist/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartingModule = (function () {
    function ChartingModule() {
    }
    ChartingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__charting_component__["a" /* ChartingComponent */]
            ]
        })
    ], ChartingModule);
    return ChartingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charting_charting_component__ = __webpack_require__("../../../../../src/app/dashboard/charting/charting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tables_tables_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_forms_component__ = __webpack_require__("../../../../../src/app/dashboard/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_elements_bs_elements_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-elements/bs-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_grid_component__ = __webpack_require__("../../../../../src/app/dashboard/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_components_bs_components_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/bs-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_components_accordion_sample_accordion_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/accordion-sample/accordion-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_components_alert_sample_alert_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/alert-sample/alert-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bs_components_button_sample_button_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/button-sample/button-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bs_components_carousel_sample_carousel_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/carousel-sample/carousel-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bs_components_collapse_sample_collapse_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/collapse-sample/collapse-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bs_components_date_sample_date_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/date-sample/date-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bs_components_dropdown_sample_dropdown_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/dropdown-sample/dropdown-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bs_components_modal_sample_modal_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/modal-sample/modal-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bs_components_pagination_sample_pagination_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/pagination-sample/pagination-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bs_components_popover_sample_popover_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/popover-sample/popover-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bs_components_progress_sample_progress_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/progress-sample/progress-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bs_components_rating_sample_rating_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/rating-sample/rating-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bs_components_sortable_sample_sortable_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/sortable-sample/sortable-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bs_components_tabs_sample_tabs_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/tabs-sample/tabs-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__bs_components_timepicker_sample_timepicker_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/timepicker-sample/timepicker-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__bs_components_tooltip_sample_tooltip_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/tooltip-sample/tooltip-sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__bs_components_typeahead_sample_typeahead_sample_component__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/typeahead-sample/typeahead-sample.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var dashboardRoutes = [
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["b" /* HomeComponent */] },
            { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_4__charting_charting_component__["a" /* ChartingComponent */] },
            { path: 'tables', component: __WEBPACK_IMPORTED_MODULE_5__tables_tables_component__["a" /* TablesComponent */] },
            { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_6__forms_forms_component__["a" /* FormsComponent */] },
            { path: 'element', component: __WEBPACK_IMPORTED_MODULE_7__bs_elements_bs_elements_component__["a" /* BsElementsComponent */] },
            { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_8__grid_grid_component__["a" /* GridComponent */] },
            {
                path: 'components', component: __WEBPACK_IMPORTED_MODULE_9__bs_components_bs_components_component__["a" /* BsComponentsComponent */],
                children: [
                    { path: 'accordion', component: __WEBPACK_IMPORTED_MODULE_10__bs_components_accordion_sample_accordion_sample_component__["a" /* AccordionSampleComponent */] },
                    { path: 'alert', component: __WEBPACK_IMPORTED_MODULE_11__bs_components_alert_sample_alert_sample_component__["a" /* AlertSampleComponent */] },
                    { path: 'button', component: __WEBPACK_IMPORTED_MODULE_12__bs_components_button_sample_button_sample_component__["a" /* ButtonSampleComponent */] },
                    { path: 'carousel', component: __WEBPACK_IMPORTED_MODULE_13__bs_components_carousel_sample_carousel_sample_component__["a" /* CarouselSampleComponent */] },
                    { path: 'collapse', component: __WEBPACK_IMPORTED_MODULE_14__bs_components_collapse_sample_collapse_sample_component__["a" /* CollapseSampleComponent */] },
                    { path: 'date_picker', component: __WEBPACK_IMPORTED_MODULE_15__bs_components_date_sample_date_sample_component__["a" /* DateSampleComponent */] },
                    { path: 'dropdown', component: __WEBPACK_IMPORTED_MODULE_16__bs_components_dropdown_sample_dropdown_sample_component__["a" /* DropdownSampleComponent */] },
                    { path: 'modal', component: __WEBPACK_IMPORTED_MODULE_17__bs_components_modal_sample_modal_sample_component__["b" /* ModalSampleComponent */] },
                    { path: 'pagination', component: __WEBPACK_IMPORTED_MODULE_18__bs_components_pagination_sample_pagination_sample_component__["a" /* PaginationSampleComponent */] },
                    { path: 'popover', component: __WEBPACK_IMPORTED_MODULE_19__bs_components_popover_sample_popover_sample_component__["a" /* PopoverSampleComponent */] },
                    { path: 'progress', component: __WEBPACK_IMPORTED_MODULE_20__bs_components_progress_sample_progress_sample_component__["a" /* ProgressSampleComponent */] },
                    { path: 'ratings', component: __WEBPACK_IMPORTED_MODULE_21__bs_components_rating_sample_rating_sample_component__["a" /* RatingSampleComponent */] },
                    { path: 'sortable', component: __WEBPACK_IMPORTED_MODULE_22__bs_components_sortable_sample_sortable_sample_component__["a" /* SortableSampleComponent */] },
                    { path: 'tabs', component: __WEBPACK_IMPORTED_MODULE_23__bs_components_tabs_sample_tabs_sample_component__["a" /* TabsSampleComponent */] },
                    { path: 'timepicker', component: __WEBPACK_IMPORTED_MODULE_24__bs_components_timepicker_sample_timepicker_sample_component__["a" /* TimepickerSampleComponent */] },
                    { path: 'tooltip', component: __WEBPACK_IMPORTED_MODULE_25__bs_components_tooltip_sample_tooltip_sample_component__["a" /* TooltipSampleComponent */] },
                    { path: 'typeahead', component: __WEBPACK_IMPORTED_MODULE_26__bs_components_typeahead_sample_typeahead_sample_component__["a" /* TypeaheadSampleComponent */] }
                ]
            }
        ]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(dashboardRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topnav></app-topnav>\n<app-sidebar></app-sidebar>\n<!--<section class=\"main-container\" [ngClass]=\"{sidebarPushRight: isActive}\">\t-->\n<div class=\"main-container\">\n\t\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4; }\n\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5; }\n\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6; }\n\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n      -ms-flex-order: 7;\n          order: 7; }\n\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n      -ms-flex-order: 8;\n          order: 8; }\n\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n      -ms-flex-order: 9;\n          order: 9; }\n\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n      -ms-flex-order: 10;\n          order: 10; }\n\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n      -ms-flex-order: 11;\n          order: 11; }\n\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n          order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333333%; }\n\n.offset-2 {\n  margin-left: 16.66666667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333333%; }\n\n.offset-5 {\n  margin-left: 41.66666667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333333%; }\n\n.offset-8 {\n  margin-left: 66.66666667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333333%; }\n\n.offset-11 {\n  margin-left: 91.66666667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n\n.main-container {\n  margin-left: 225px;\n  margin-top: 60px;\n  margin-right: 0;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  position: relative; }\n  @media (max-width: 991px) {\n    .main-container {\n      margin-left: 0; } }\n", "", {"version":3,"sources":["/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/_grid.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/mixins/_grid.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/mixins/_breakpoints.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/_variables.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/mixins/_grid-framework.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/src/app/dashboard/dashboard.component.scss"],"names":[],"mappings":"AAKE;ECAA,YAAW;EACX,oBAAuC;EACvC,mBAAsC;EACtC,mBAAkB;EAClB,kBAAiB,EDDhB;EEgDC;IFnDF;MCYI,iBE4JK,EHrKR,EAAA;EEgDC;IFnDF;MCYI,iBE6JK,EHtKR,EAAA;EEgDC;IFnDF;MCYI,iBE8JK,EHvKR,EAAA;EEgDC;IFnDF;MCYI,kBE+JM,EHxKT,EAAA;;AASD;ECZA,YAAW;EACX,oBAAuC;EACvC,mBAAsC;EACtC,mBAAkB;EAClB,kBAAiB,EDUhB;;AAQD;ECJA,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAe;MAAf,gBAAe;EACf,oBAAuC;EACvC,mBAAsC,EDGrC;;AAID;EACE,gBAAe;EACf,eAAc,EAOf;EATD;;IAMI,iBAAgB;IAChB,gBAAe,EAChB;;AIlCH;;;;;;EACE,mBAAkB;EAClB,YAAW;EACX,gBAAe;EACf,oBAA4B;EAC5B,mBAA2B,EAC5B;;AAkBG;EACE,2BAAa;MAAb,cAAa;EACb,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,gBAAe,EAChB;;AACD;EACE,oBAAc;MAAd,mBAAc;UAAd,eAAc;EACd,YAAW;EACX,gBAAe,EAChB;;AAGC;EHFN,oBAAsC;MAAtC,0BAAsC;UAAtC,sBAAsC;EAItC,uBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,2BAAsC;UAAtC,uBAAsC;EAItC,wBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,kBAAsC;UAAtC,cAAsC;EAItC,eAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,2BAAsC;UAAtC,uBAAsC;EAItC,wBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,2BAAsC;UAAtC,uBAAsC;EAItC,wBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,kBAAsC;UAAtC,cAAsC;EAItC,eAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,2BAAsC;UAAtC,uBAAsC;EAItC,wBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,2BAAsC;UAAtC,uBAAsC;EAItC,wBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,kBAAsC;UAAtC,cAAsC;EAItC,eAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,2BAAsC;UAAtC,uBAAsC;EAItC,wBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,2BAAsC;UAAtC,uBAAsC;EAItC,wBAAuC,EGAhC;;AAFD;EHFN,oBAAsC;MAAtC,mBAAsC;UAAtC,eAAsC;EAItC,gBAAuC,EGAhC;;AAGH;EACE,6BAAS;MAAT,mBAAS;UAAT,UAAS,EACV;;AAGC;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,6BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,8BAFU;MAEV,kBAFU;UAEV,SAFU,EAGX;;AAFD;EACE,8BAFU;MAEV,mBAFU;UAEV,UAFU,EAGX;;AAFD;EACE,8BAFU;MAEV,mBAFU;UAEV,UAFU,EAGX;;AAFD;EACE,8BAFU;MAEV,mBAFU;UAEV,UAFU,EAGX;;AAMC;EHXR,yBAA8C,EGarC;;AAFD;EHXR,0BAA8C,EGarC;;AAFD;EHXR,iBAA8C,EGarC;;AAFD;EHXR,0BAA8C,EGarC;;AAFD;EHXR,0BAA8C,EGarC;;AAFD;EHXR,iBAA8C,EGarC;;AAFD;EHXR,0BAA8C,EGarC;;AAFD;EHXR,0BAA8C,EGarC;;AAFD;EHXR,iBAA8C,EGarC;;AAFD;EHXR,0BAA8C,EGarC;;AAFD;EHXR,0BAA8C,EGarC;;AFPP;EEzBE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW;IACX,gBAAe,EAChB;EAGC;IHFN,oBAAsC;QAAtC,0BAAsC;YAAtC,sBAAsC;IAItC,uBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAItC,gBAAuC,EGAhC;EAGH;IACE,6BAAS;QAAT,mBAAS;YAAT,UAAS,EACV;EAGC;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAMC;IHXR,eAA4B,EGanB;EAFD;IHXR,yBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC,EAAA;;AFPP;EEzBE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW;IACX,gBAAe,EAChB;EAGC;IHFN,oBAAsC;QAAtC,0BAAsC;YAAtC,sBAAsC;IAItC,uBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAItC,gBAAuC,EGAhC;EAGH;IACE,6BAAS;QAAT,mBAAS;YAAT,UAAS,EACV;EAGC;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAMC;IHXR,eAA4B,EGanB;EAFD;IHXR,yBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC,EAAA;;AFPP;EEzBE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW;IACX,gBAAe,EAChB;EAGC;IHFN,oBAAsC;QAAtC,0BAAsC;YAAtC,sBAAsC;IAItC,uBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAItC,gBAAuC,EGAhC;EAGH;IACE,6BAAS;QAAT,mBAAS;YAAT,UAAS,EACV;EAGC;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAMC;IHXR,eAA4B,EGanB;EAFD;IHXR,yBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC,EAAA;;AFPP;EEzBE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW;IACX,gBAAe,EAChB;EAGC;IHFN,oBAAsC;QAAtC,0BAAsC;YAAtC,sBAAsC;IAItC,uBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAItC,eAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,2BAAsC;YAAtC,uBAAsC;IAItC,wBAAuC,EGAhC;EAFD;IHFN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAItC,gBAAuC,EGAhC;EAGH;IACE,6BAAS;QAAT,mBAAS;YAAT,UAAS,EACV;EAGC;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,6BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,kBAFU;YAEV,SAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAFD;IACE,8BAFU;QAEV,mBAFU;YAEV,UAFU,EAGX;EAMC;IHXR,eAA4B,EGanB;EAFD;IHXR,yBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,iBAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC;EAFD;IHXR,0BAA8C,EGarC,EAAA;;AC1DX;EAII,mBAAkB;EAClB,iBAAgB;EAChB,gBAAe;EACf,uBAAsB;EACtB,mBAAkB;EAClB,mBAAkB,EACrB;EHsDG;IGhEJ;MAEQ,eAAc,EAQrB,EAAA","file":"dashboard.component.scss","sourcesContent":["// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  .container {\n    @include make-container();\n    @include make-container-max-widths();\n  }\n}\n\n// Fluid container\n//\n// Utilizes the mixin meant for fixed width containers, but with 100% width for\n// fluid, full width layouts.\n\n@if $enable-grid-classes {\n  .container-fluid {\n    @include make-container();\n  }\n}\n\n// Row\n//\n// Rows contain and clear the floats of your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n  }\n\n  // Remove the negative margin from default .row, then the horizontal padding\n  // from all immediate children columns (to prevent runaway style inheritance).\n  .no-gutters {\n    margin-right: 0;\n    margin-left: 0;\n\n    > .col,\n    > [class*=\"col-\"] {\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n}\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","/// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-container() {\n  width: 100%;\n  padding-right: ($grid-gutter-width / 2);\n  padding-left: ($grid-gutter-width / 2);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n\n// For each breakpoint, define the maximum width of the container in a media query\n@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint, $container-max-width in $max-widths {\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      max-width: $container-max-width;\n    }\n  }\n}\n\n@mixin make-row() {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: ($grid-gutter-width / -2);\n  margin-left: ($grid-gutter-width / -2);\n}\n\n@mixin make-col-ready() {\n  position: relative;\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we use `flex` values\n  // later on to override this initial width.\n  width: 100%;\n  min-height: 1px; // Prevent collapsing\n  padding-right: ($grid-gutter-width / 2);\n  padding-left: ($grid-gutter-width / 2);\n}\n\n@mixin make-col($size, $columns: $grid-columns) {\n  flex: 0 0 percentage($size / $columns);\n  // Add a `max-width` to ensure content within each column does not blow out\n  // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari\n  // do not appear to require this.\n  max-width: percentage($size / $columns);\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: $size / $columns;\n  margin-left: if($num == 0, 0, percentage($num));\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.1.\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - 1px, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name) {\n      @content;\n    }\n  }\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n\n//\n// Color system\n//\n\n// stylelint-disable\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #868e96 !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$grays: () !default;\n$grays: map-merge((\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n), $grays);\n\n$blue:    #007bff !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #28a745 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$colors: () !default;\n$colors: map-merge((\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n), $colors);\n\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n$theme-colors: map-merge((\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n), $theme-colors);\n// stylelint-enable\n\n// Set a specific jump point for requesting color jumps\n$theme-color-interval:      8% !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:              true !default;\n$enable-rounded:            true !default;\n$enable-shadows:            false !default;\n$enable-gradients:          false !default;\n$enable-transitions:        true !default;\n$enable-hover-media-query:  false !default;\n$enable-grid-classes:       true !default;\n$enable-print-styles:       true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: ($spacer * .25),\n  2: ($spacer * .5),\n  3: $spacer,\n  4: ($spacer * 1.5),\n  5: ($spacer * 3)\n) !default;\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: (\n  25: 25%,\n  50: 50%,\n  75: 75%,\n  100: 100%\n) !default;\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                theme-color(\"primary\") !default;\n$link-decoration:           none !default;\n$link-hover-color:          darken($link-color, 15%) !default;\n$link-hover-decoration:     underline !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints);\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           30px !default;\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:              1.5 !default;\n$line-height-sm:              1.5 !default;\n\n$border-width:                1px !default;\n$border-color:                $gray-200 !default;\n\n$border-radius:               .25rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-sm:            .2rem !default;\n\n$component-active-color:      $white !default;\n$component-active-bg:         theme-color(\"primary\") !default;\n\n$caret-width:                 .3em !default;\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n$transition-collapse:         height .35s ease !default;\n\n\n// Fonts\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\" !default;\n$font-family-monospace:       \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:            $font-family-sans-serif !default;\n// stylelint-enable value-keyword-case\n\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:                ($font-size-base * 1.25) !default;\n$font-size-sm:                ($font-size-base * .875) !default;\n\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n\n$font-weight-base:            $font-weight-normal !default;\n$line-height-base:            1.5 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n\n$headings-margin-bottom:      ($spacer / 2) !default;\n$headings-font-family:        inherit !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              inherit !default;\n\n$display1-size:               6rem !default;\n$display2-size:               5.5rem !default;\n$display3-size:               4.5rem !default;\n$display4-size:               3.5rem !default;\n\n$display1-weight:             300 !default;\n$display2-weight:             300 !default;\n$display3-weight:             300 !default;\n$display4-weight:             300 !default;\n$display-line-height:         $headings-line-height !default;\n\n$lead-font-size:              ($font-size-base * 1.25) !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             80% !default;\n\n$text-muted:                  $gray-600 !default;\n\n$blockquote-small-color:      $gray-600 !default;\n$blockquote-font-size:        ($font-size-base * 1.25) !default;\n\n$hr-border-color:             rgba($black,.1) !default;\n$hr-border-width:             $border-width !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$kbd-box-shadow:              inset 0 -.1rem 0 rgba($black,.25) !default;\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         5px !default;\n\n$mark-bg: #fcf8e3 !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:          .75rem !default;\n$table-cell-padding-sm:       .3rem !default;\n\n$table-bg:                    transparent !default;\n$table-accent-bg:             rgba($black,.05) !default;\n$table-hover-bg:              rgba($black,.075) !default;\n$table-active-bg:             $table-hover-bg !default;\n\n$table-border-width:          $border-width !default;\n$table-border-color:          $gray-200 !default;\n\n$table-head-bg:               $gray-200 !default;\n$table-head-color:            $gray-700 !default;\n\n$table-dark-bg:               $gray-900 !default;\n$table-dark-accent-bg:        rgba($white, .05) !default;\n$table-dark-hover-bg:         rgba($white, .075) !default;\n$table-dark-border-color:     lighten($gray-900, 7.5%) !default;\n$table-dark-color:            $body-bg !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background and border color.\n\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:       .2rem !default;\n$input-btn-focus-color:       rgba(theme-color(\"primary\"), .25) !default;\n$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-line-height-sm:    $line-height-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-line-height-lg:    $line-height-lg !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white,.15), 0 1px 1px rgba($black,.075) !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black,.125) !default;\n\n$btn-link-disabled-color:     $gray-600 !default;\n\n$btn-block-spacing-y:         .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n\n$btn-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n// Forms\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n\n$input-color:                           $gray-700 !default;\n$input-border-color:                    $gray-400 !default;\n$input-btn-border-width:                $border-width !default; // For form controls and buttons\n$input-box-shadow:                      inset 0 1px 1px rgba($black,.075) !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              lighten(theme-color(\"primary\"), 25%) !default;\n$input-focus-color:                     $input-color !default;\n\n$input-placeholder-color:               $gray-600 !default;\n\n$input-height-border:                   $input-btn-border-width * 2 !default;\n\n$input-height-inner:                    ($font-size-base * $input-btn-line-height) + ($input-btn-padding-y * 2) !default;\n$input-height:                          calc(#{$input-height-inner} + #{$input-height-border}) !default;\n\n$input-height-inner-sm:                 ($font-size-sm * $input-btn-line-height-sm) + ($input-btn-padding-y-sm * 2) !default;\n$input-height-sm:                       calc(#{$input-height-inner-sm} + #{$input-height-border}) !default;\n\n$input-height-inner-lg:                 ($font-size-lg * $input-btn-line-height-lg) + ($input-btn-padding-y-lg * 2) !default;\n$input-height-lg:                       calc(#{$input-height-inner-lg} + #{$input-height-border}) !default;\n\n$input-transition:                      border-color ease-in-out .15s, box-shadow ease-in-out .15s !default;\n\n$form-text-margin-top:                  .25rem !default;\n\n$form-check-margin-bottom:              .5rem !default;\n$form-check-input-gutter:               1.25rem !default;\n$form-check-input-margin-y:             .25rem !default;\n$form-check-input-margin-x:             .25rem !default;\n\n$form-check-inline-margin-x:            .75rem !default;\n\n$form-group-margin-bottom:              1rem !default;\n\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n\n$custom-control-gutter:                 1.5rem !default;\n$custom-control-spacer-y:               .25rem !default;\n$custom-control-spacer-x:               1rem !default;\n\n$custom-control-indicator-size:         1rem !default;\n$custom-control-indicator-bg:           #ddd !default;\n$custom-control-indicator-bg-size:      50% 50% !default;\n$custom-control-indicator-box-shadow:   inset 0 .25rem .25rem rgba($black,.1) !default;\n\n$custom-control-indicator-disabled-bg:          $gray-200 !default;\n$custom-control-description-disabled-color:     $gray-600 !default;\n\n$custom-control-indicator-checked-color:        $white !default;\n$custom-control-indicator-checked-bg:           theme-color(\"primary\") !default;\n$custom-control-indicator-checked-box-shadow:   none !default;\n\n$custom-control-indicator-focus-box-shadow:     0 0 0 1px $body-bg, $input-btn-focus-box-shadow !default;\n\n$custom-control-indicator-active-color:         $white !default;\n$custom-control-indicator-active-bg:            lighten(theme-color(\"primary\"), 35%) !default;\n$custom-control-indicator-active-box-shadow:    none !default;\n\n$custom-checkbox-indicator-border-radius:       $border-radius !default;\n$custom-checkbox-indicator-icon-checked:        str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-checkbox-indicator-indeterminate-bg:    theme-color(\"primary\") !default;\n$custom-checkbox-indicator-indeterminate-color: $custom-control-indicator-checked-color !default;\n$custom-checkbox-indicator-icon-indeterminate:  str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-checkbox-indicator-indeterminate-box-shadow: none !default;\n\n$custom-radio-indicator-border-radius:          50% !default;\n$custom-radio-indicator-icon-checked:           str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#{$custom-control-indicator-checked-color}'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-select-padding-y:           .375rem !default;\n$custom-select-padding-x:          .75rem !default;\n$custom-select-height:              $input-height !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-line-height:         $input-btn-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-600 !default;\n$custom-select-bg:                  $white !default;\n$custom-select-disabled-bg:         $gray-200 !default;\n$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color:     #333 !default;\n$custom-select-indicator:           str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-select-border-width:        $input-btn-border-width !default;\n$custom-select-border-color:        $input-border-color !default;\n$custom-select-border-radius:       $border-radius !default;\n\n$custom-select-focus-border-color:  lighten(theme-color(\"primary\"), 25%) !default;\n$custom-select-focus-box-shadow:    inset 0 1px 2px rgba($black, .075), 0 0 5px rgba($custom-select-focus-border-color, .5) !default;\n\n$custom-select-font-size-sm:        75% !default;\n$custom-select-height-sm:           $input-height-sm !default;\n\n$custom-file-height:                $input-height !default;\n$custom-file-width:                 14rem !default;\n$custom-file-focus-box-shadow:      0 0 0 .075rem $white, 0 0 0 .2rem theme-color(\"primary\") !default;\n\n$custom-file-padding-y:             $input-btn-padding-y !default;\n$custom-file-padding-x:             $input-btn-padding-x !default;\n$custom-file-line-height:           $input-btn-line-height !default;\n$custom-file-color:                 $input-color !default;\n$custom-file-bg:                    $input-bg !default;\n$custom-file-border-width:          $input-btn-border-width !default;\n$custom-file-border-color:          $input-border-color !default;\n$custom-file-border-radius:         $input-border-radius !default;\n$custom-file-box-shadow:            $input-box-shadow !default;\n$custom-file-button-color:          $custom-file-color !default;\n$custom-file-button-bg:             $input-group-addon-bg !default;\n$custom-file-text: (\n  placeholder: (\n    en: \"Choose file...\"\n  ),\n  button-label: (\n    en: \"Browse\"\n  )\n) !default;\n\n\n// Form validation\n$form-feedback-valid-color:         theme-color(\"success\") !default;\n$form-feedback-invalid-color:       theme-color(\"danger\") !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black,.15) !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-divider-bg:               $gray-200 !default;\n$dropdown-box-shadow:               0 .5rem 1rem rgba($black,.175) !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         darken($gray-900, 5%) !default;\n$dropdown-link-hover-bg:            $gray-100 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-600 !default;\n\n$dropdown-item-padding-y:           .25rem !default;\n$dropdown-item-padding-x:           1.5rem !default;\n\n$dropdown-header-color:             $gray-600 !default;\n\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-modal:                      1050 !default;\n$zindex-popover:                    1060 !default;\n$zindex-tooltip:                    1070 !default;\n\n// Navs\n\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             #ddd !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: #ddd !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n// Navbar\n\n$navbar-padding-y:                  ($spacer / 2) !default;\n$navbar-padding-x:                  $spacer !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   ($font-size-base * $line-height-base + $nav-link-padding-y * 2) !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n\n$navbar-dark-color:                 rgba($white,.5) !default;\n$navbar-dark-hover-color:           rgba($white,.75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white,.25) !default;\n$navbar-dark-toggler-icon-bg:       str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-dark-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-dark-toggler-border-color:  rgba($white,.1) !default;\n\n$navbar-light-color:                rgba($black,.5) !default;\n$navbar-light-hover-color:          rgba($black,.7) !default;\n$navbar-light-active-color:         rgba($black,.9) !default;\n$navbar-light-disabled-color:       rgba($black,.3) !default;\n$navbar-light-toggler-icon-bg:      str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-light-toggler-border-color: rgba($black,.1) !default;\n\n// Pagination\n\n$pagination-padding-y:              .5rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n$pagination-line-height:            1.25 !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-color:           #ddd !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     #ddd !default;\n\n$pagination-active-color:           $white !default;\n$pagination-active-bg:              theme-color(\"primary\") !default;\n$pagination-active-border-color:    theme-color(\"primary\") !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  #ddd !default;\n\n\n// Jumbotron\n\n$jumbotron-padding:                 2rem !default;\n$jumbotron-bg:                      $gray-200 !default;\n\n\n// Cards\n\n$card-spacer-y:                     .75rem !default;\n$card-spacer-x:                     1.25rem !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black,.125) !default;\n$card-inner-border-radius:          calc(#{$card-border-radius} - #{$card-border-width}) !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-bg:                           $white !default;\n\n$card-img-overlay-padding:          1.25rem !default;\n\n$card-group-margin:                 ($grid-gutter-width / 2) !default;\n$card-deck-margin:                  $card-group-margin !default;\n\n$card-columns-count:                3 !default;\n$card-columns-gap:                  1.25rem !default;\n$card-columns-margin:               $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 3px !default;\n$tooltip-padding-x:                 8px !default;\n$tooltip-margin:                    0 !default;\n\n\n$tooltip-arrow-width:               5px !default;\n$tooltip-arrow-height:              5px !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n\n\n// Popovers\n\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black,.2) !default;\n$popover-box-shadow:                0 .25rem .5rem rgba($black,.2) !default;\n\n$popover-header-bg:                 darken($popover-bg, 3%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          .75rem !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $popover-header-padding-y !default;\n$popover-body-padding-x:            $popover-header-padding-x !default;\n\n$popover-arrow-width:               .8rem !default;\n$popover-arrow-height:              .4rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n\n\n// Badges\n\n$badge-font-size:                   75% !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-padding-y:                   .25em !default;\n$badge-padding-x:                   .4em !default;\n$badge-border-radius:               $border-radius !default;\n\n$badge-pill-padding-x:              .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:          10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:               15px !default;\n\n$modal-dialog-margin:               10px !default;\n$modal-dialog-margin-y-sm-up:       30px !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black,.2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-box-shadow-xs:       0 3px 9px rgba($black,.5) !default;\n$modal-content-box-shadow-sm-up:    0 5px 15px rgba($black,.5) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $gray-200 !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding:              15px !default;\n\n$modal-lg:                          800px !default;\n$modal-md:                          500px !default;\n$modal-sm:                          300px !default;\n\n$modal-transition:                  transform .3s ease-out !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-y:                   .75rem !default;\n$alert-padding-x:                   1.25rem !default;\n$alert-margin-bottom:               1rem !default;\n$alert-border-radius:               $border-radius !default;\n$alert-link-font-weight:            $font-weight-bold !default;\n$alert-border-width:                $border-width !default;\n\n\n// Progress bars\n\n$progress-height:                   1rem !default;\n$progress-font-size:                ($font-size-base * .75) !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               inset 0 .1rem .1rem rgba($black,.1) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   theme-color(\"primary\") !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n\n// List group\n\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black,.125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         .75rem !default;\n$list-group-item-padding-x:         1.25rem !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            #ddd !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              0 1px 2px rgba($black,.075) !default;\n$thumbnail-transition:              all .2s ease-in-out !default;\n\n\n// Figures\n\n$figure-caption-font-size:          90% !default;\n$figure-caption-color:              $gray-600 !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-padding-y:              .75rem !default;\n$breadcrumb-padding-x:              1rem !default;\n$breadcrumb-item-padding:           .5rem !default;\n\n$breadcrumb-margin-bottom:          1rem !default;\n\n$breadcrumb-bg:                     $gray-200 !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                \"/\" !default;\n\n\n// Carousel\n\n$carousel-control-color:            $white !default;\n$carousel-control-width:            15% !default;\n$carousel-control-opacity:          .5 !default;\n\n$carousel-indicator-width:          30px !default;\n$carousel-indicator-height:         3px !default;\n$carousel-indicator-spacer:         3px !default;\n$carousel-indicator-active-bg:      $white !default;\n\n$carousel-caption-width:            70% !default;\n$carousel-caption-color:            $white !default;\n\n$carousel-control-icon-width:       20px !default;\n\n$carousel-control-prev-icon-bg:     str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$carousel-control-next-icon-bg:     str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$carousel-transition:               transform .6s ease !default;\n\n\n// Close\n\n$close-font-size:                   $font-size-base * 1.5 !default;\n$close-font-weight:                 $font-weight-bold !default;\n$close-color:                       $black !default;\n$close-text-shadow:                 0 1px 0 $white !default;\n\n// Code\n\n$code-font-size:                    90% !default;\n$code-padding-y:                    .2rem !default;\n$code-padding-x:                    .4rem !default;\n$code-color:                        #bd4147 !default;\n$code-bg:                           $gray-100 !default;\n\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         $gray-900 !default;\n$pre-scrollable-max-height:         340px !default;\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  // Common properties for all breakpoints\n  %grid-column {\n    position: relative;\n    width: 100%;\n    min-height: 1px; // Prevent columns from collapsing when empty\n    padding-right: ($gutter / 2);\n    padding-left: ($gutter / 2);\n  }\n\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    // Allow columns to stretch full width below their breakpoints\n    @for $i from 1 through $columns {\n      .col#{$infix}-#{$i} {\n        @extend %grid-column;\n      }\n    }\n    .col#{$infix},\n    .col#{$infix}-auto {\n      @extend %grid-column;\n    }\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n      }\n      .col#{$infix}-auto {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: none; // Reset earlier grid tiers\n      }\n\n      @for $i from 1 through $columns {\n        .col#{$infix}-#{$i} {\n          @include make-col($i, $columns);\n        }\n      }\n\n      .order#{$infix}-first {\n        order: -1;\n      }\n\n      @for $i from 1 through $columns {\n        .order#{$infix}-#{$i} {\n          order: $i;\n        }\n      }\n\n      // `$columns - 1` because offsetting by the width of an entire row isn't possible\n      @for $i from 0 through ($columns - 1) {\n        @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n          .offset#{$infix}-#{$i} {\n            @include make-col-offset($i, $columns);\n          }\n        }\n      }\n    }\n  }\n}\n","@import \"../../../node_modules/bootstrap/scss/functions\";\n@import \"../../../node_modules/bootstrap/scss/variables\";\n@import \"../../../node_modules/bootstrap/scss/mixins\";\n@import \"../../../node_modules/bootstrap/scss/grid\";\n\n.main-container{\n    @include media-breakpoint-down(md) {\n        margin-left: 0;\n    }\n    margin-left: 225px;\n    margin-top: 60px;\n    margin-right: 0;\n    -ms-overflow-x: hidden;\n    overflow-x: hidden;\n    position: relative;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.sidebarCollapsed = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_topnav_topnav_module__ = __webpack_require__("../../../../../src/app/shared/topnav/topnav.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("../../../../../src/app/dashboard/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charting_charting_module__ = __webpack_require__("../../../../../src/app/dashboard/charting/charting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_tables_module__ = __webpack_require__("../../../../../src/app/dashboard/tables/tables.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_forms_module__ = __webpack_require__("../../../../../src/app/dashboard/forms/forms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_elements_bs_elements_module__ = __webpack_require__("../../../../../src/app/dashboard/bs-elements/bs-elements.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_grid_module__ = __webpack_require__("../../../../../src/app/dashboard/grid/grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_components_bs_components_module__ = __webpack_require__("../../../../../src/app/dashboard/bs-components/bs-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_topnav_topnav_module__["a" /* TopnavModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_6__charting_charting_module__["a" /* ChartingModule */],
                __WEBPACK_IMPORTED_MODULE_7__tables_tables_module__["a" /* TablesModule */],
                __WEBPACK_IMPORTED_MODULE_8__forms_forms_module__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__bs_elements_bs_elements_module__["a" /* BsElementsModule */],
                __WEBPACK_IMPORTED_MODULE_10__grid_grid_module__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_11__bs_components_bs_components_module__["a" /* BsComponentModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__dashboard_component__["a" /* DashboardComponent */],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2>\n        Forms\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-edit\"></i> Forms\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n\n      <form>\n        <label for=\"inputPassword5\">Password</label>\n        <input type=\"password\" id=\"inputPassword5\" class=\"form-control\" aria-describedby=\"passwordHelpBlock\">\n        <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n          Help text below the input box. Your password must be 8-20 characters long, contain only letters and numbers.\n        </small>\n        <br>\n\n        <label>Text Input with Placeholder</label>\n        <input class=\"form-control\" placeholder=\"Enter text\">\n        <br>\n\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <label for=\"staticEmail2\" class=\"sr-only\">Email</label>\n            <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"staticEmail2\" value=\"email@example.com\">\n          </div>\n          <div class=\"form-group mx-sm-3\">\n            <label for=\"inputPassword2\" class=\"sr-only\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Confirm identity</button>\n        </form>\n        <br>\n\n        <form>\n          <label class=\"custom-file\">\n            <input type=\"file\" id=\"file2\" class=\"custom-file-input\">\n            <span class=\"custom-file-control\"></span>\n          </label>\n        </form>\n        <fieldset class=\"form-group\">\n          <label>Text area</label>\n          <textarea class=\"form-control\" rows=\"3\"></textarea>\n        </fieldset>\n\n        <div class=\"form-group\">\n          <label>Checkboxes</label>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"\"> Checkbox 1\n            </label>\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"\"> Checkbox 2\n            </label>\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"\"> Checkbox 3\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Inline Checkboxes</label>\n          <label class=\"checkbox-inline\">\n            <input type=\"checkbox\">1\n          </label>\n          <label class=\"checkbox-inline\">\n            <input type=\"checkbox\">2\n          </label>\n          <label class=\"checkbox-inline\">\n            <input type=\"checkbox\">3\n          </label>\n        </div>\n\n        <fieldset class=\"form-group\">\n          <label>Radio Buttons</label>\n          <div class=\"radio\">\n            <label>\n              <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n            </label>\n          </div>\n          <div class=\"radio\">\n            <label>\n              <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n            </label>\n          </div>\n          <div class=\"radio\">\n            <label>\n              <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"> Radio 3\n            </label>\n          </div>\n        </fieldset>\n\n        <fieldset class=\"form-group\">\n          <label>Inline Radio Buttons</label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\n          </label>\n        </fieldset>\n\n        <div class=\"form-group\">\n          <label>Selects</label>\n          <select class=\"form-control\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </select>\n        </div>\n\n        <fieldset class=\"form-group\">\n          <label>Multiple Selects</label>\n          <select multiple=\"\" class=\"form-control\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </select>\n        </fieldset>\n\n        <button type=\"submit\" class=\"btn btn-secondary\">Submit Button</button>\n        <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n      </form>\n\n    </div>\n    <div class=\"col-lg-6\">\n      <h4>Disabled Form States</h4>\n\n      <form role=\"form\">\n\n        <fieldset disabled=\"\">\n\n          <div class=\"form-group\">\n            <label for=\"disabledSelect\">Disabled input</label>\n            <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"disabledSelect\">Disabled select menu</label>\n            <select id=\"disabledSelect\" class=\"form-control\">\n              <option>Disabled select</option>\n            </select>\n          </div>\n\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\"> Disabled Checkbox\n            </label>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\n\n        </fieldset>\n\n      </form>\n      <br>\n\n      <h4>Form Validation</h4>\n\n      <form>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault01\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault01\" placeholder=\"First name\" value=\"Mark\" required>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault02\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault02\" placeholder=\"Last name\" value=\"Otto\" required>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"validationDefault03\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault03\" placeholder=\"City\" required>\n              <div class=\"invalid-feedback\">\n                Please provide a valid city.\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"validationDefault04\">State</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault04\" placeholder=\"State\" required>\n              <div class=\"invalid-feedback\">\n                Please provide a valid state.\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"validationDefault05\">Zip</label>\n              <input type=\"text\" class=\"form-control\" id=\"validationDefault05\" placeholder=\"Zip\" required>\n              <div class=\"invalid-feedback\">\n                Please provide a valid zip.\n              </div>\n            </div>\n          </div>\n        \n          <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n        </form>\n        <br>\n\n      <h4>Input Groups</h4>\n\n      <form role=\"form\">\n\n        <div class=\"form-group input-group\">\n          <span class=\"input-group-addon\">@</span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n        </div>\n\n        <div class=\"form-group input-group\">\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-addon\">.00</span>\n        </div>\n\n        <div class=\"form-group input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-eur\"></i>\n          </span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\n        </div>\n\n        <div class=\"form-group input-group\">\n          <span class=\"input-group-addon\">$</span>\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-addon\">.00</span>\n        </div>\n\n        <div class=\"form-group input-group\">\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-secondary\" type=\"button\">\n              <i class=\"fa fa-search\"></i>\n            </button>\n          </span>\n        </div>\n\n      </form>\n\n      <p>For complete documentation, please visit\n        <a target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's Form Documentation</a>.</p>\n\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/forms/forms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"forms.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__("../../../../../src/app/dashboard/forms/forms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_component__ = __webpack_require__("../../../../../src/app/dashboard/forms/forms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormsModule = (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__forms_component__["a" /* FormsComponent */]]
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Bootstrap Grid\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"active breadcrumb-item\">\n          <i class=\"fa fa-wrench\"></i> Bootstrap Grid\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-12 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-12\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-8 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-8\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"grid.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__("../../../../../src/app/dashboard/grid/grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/grid/grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_component__ = __webpack_require__("../../../../../src/app/dashboard/grid/grid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GridModule = (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__grid_component__["a" /* GridComponent */]]
        })
    ], GridModule);
    return GridModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/home/chat.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\"float-xs-right\" dropdown>\n            <button id=\"chat-dropdown\" type=\"button\" class=\"btn btn-secondary btn-sm\" dropdownToggle [disabled]=\"disabled\">\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"chat-dropdown\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-block\">\n    <ul class=\"chat\">\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n            </small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n  <!-- /.card-footer -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Overview\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-fw fa-dashboard\"></i>\n                    <a [routerLink]=\"['/dashboard/home']\"> Dashboard</a>\n                </li>\n                <li class=\"breadcrumb-item active\">\n                    <i class=\"fa fa-fw fa-eye\"></i> Overview\n                </li>\n            </ol>\n        </div>\n    </div>\n    <hr>\n    <div>\n        <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-primary card-inverse\">\n                    <div class=\"card-header card-primary\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-comments fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">26</div>\n                                <div>New Comments!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-default\">\n                        <a href=\"javascript:;\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-success card-inverse\">\n                    <div class=\"card-header card-success\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-tasks fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">12</div>\n                                <div>New Tasks!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-green\">\n                        <a class=\"text-success\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-warning card-inverse\">\n                    <div class=\"card-header card-warning\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-shopping-cart fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">124</div>\n                                <div>New Orders!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-yellow\">\n                        <a class=\"text-warning\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-danger card-inverse\">\n                    <div class=\"card-header card-danger\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-support fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">13</div>\n                                <div>Support Tickets!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-red\">\n                        <a class=\"text-danger\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <alert *ngFor=\"let alert of alerts; let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            {{ alert?.msg }}\n        </alert>\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n                <div class=\"card card-default\">\n                    <div class=\"card-header\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n                    </div>\n                    <!-- /.card-header -->\n                    <app-timeline-cmp></app-timeline-cmp>\n                    <!-- /.card-body -->\n                </div>\n                <!-- /.card -->\n            </div>\n            <!-- /.col-lg-8 -->\n            <div class=\"col-lg-4\">\n                <div class=\"card card-default\">\n                    <div class=\"card-header\">\n                        <i class=\"fa fa-bell fa-fw\"></i> Notifications card\n                    </div>\n                    <!-- /.card-header -->\n                    <app-notifications-cmp></app-notifications-cmp>\n                    <!-- /.card-body -->\n                </div>\n                <!-- /.card -->\n\n                <app-chat-cmp></app-chat-cmp>\n                <!-- /.card .chat-card -->\n            </div>\n            <!-- /.col-lg-4 -->\n        </div>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline-cmp',
            template: __webpack_require__("../../../../../src/app/dashboard/home/timeline.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/home/timeline.scss")],
        })
    ], TimelineComponent);
    return TimelineComponent;
}());

var ChatComponent = (function () {
    function ChatComponent() {
        this.disabled = false;
    }
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-cmp',
            template: __webpack_require__("../../../../../src/app/dashboard/home/chat.html")
        })
    ], ChatComponent);
    return ChatComponent;
}());

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications-cmp',
            template: __webpack_require__("../../../../../src/app/dashboard/home/notifications.html")
        })
    ], NotificationComponent);
    return NotificationComponent;
}());

var HomeComponent = (function () {
    function HomeComponent() {
        /* Alert component */
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_component__["b" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["d" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["c" /* NotificationComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__home_component__["b" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["d" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["c" /* NotificationComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/home/notifications.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n  <div class=\"list-group\">\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n            </span>\n    </a>\n  </div>\n  <!-- /.list-group -->\n  <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/timeline.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <ul class=\"timeline\">\n    <li>\n      <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n          <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n          </p>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n          <hr>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a href=\"#\">Action</a>\n              </li>\n              <li><a href=\"#\">Another action</a>\n              </li>\n              <li><a href=\"#\">Something else here</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/timeline.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\n  -ms-overflow-x: hidden;\n  overflow-x: hidden; }\n\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n", "", {"version":3,"sources":["/mnt/Data/DevPackages/SBAdBs4Ng2/src/app/dashboard/home/timeline.scss"],"names":[],"mappings":"AAAA;EACI,uBAAsB;EAClB,mBAAkB,EACzB;;AACD;EACI,mBAAkB;EAClB,qBAAoB;EACpB,iBAAgB,EACnB;;AAED;EACI,aAAY;EACZ,mBAAkB;EAClB,OAAM;EACN,UAAS;EACT,UAAS;EACT,WAAU;EACV,oBAAmB;EACnB,0BAAyB,EAC5B;;AAED;EACI,mBAAkB;EAClB,oBAAmB,EACtB;;AAED;;EAEI,aAAY;EACZ,eAAc,EACjB;;AAED;EACI,YAAW,EACd;;AAED;;EAEI,aAAY;EACZ,eAAc,EACjB;;AAED;EACI,YAAW,EACd;;AAED;EACI,YAAW;EACX,mBAAkB;EAClB,WAAU;EACV,cAAa;EACb,0BAAyB;EACzB,mBAAkB;EAElB,2CAAuC,EAC1C;;AAED;EACI,aAAY;EACZ,sBAAqB;EACrB,mBAAkB;EAClB,UAAS;EACT,aAAY;EACZ,mCAAkC;EAClC,2BAA0B;EAC1B,sCAAqC;EACrC,6BAA4B,EAC/B;;AAED;EACI,aAAY;EACZ,sBAAqB;EACrB,mBAAkB;EAClB,UAAS;EACT,aAAY;EACZ,mCAAkC;EAClC,2BAA0B;EAC1B,sCAAqC;EACrC,6BAA4B,EAC/B;;AAED;EACI,aAAY;EACZ,mBAAkB;EAClB,UAAS;EACT,UAAS;EACT,YAAW;EACX,aAAY;EACZ,mBAAkB;EAClB,+BAA8B;EAC9B,mBAAkB;EAClB,iBAAgB;EAChB,kBAAiB;EACjB,YAAW;EACX,0BAAyB,EAC5B;;AAED;EACI,aAAY,EACf;;AAED;EACI,YAAW;EACX,YAAW;EACX,yBAAwB;EACxB,qBAAoB,EACvB;;AAED;EACI,YAAW;EACX,YAAW;EACX,yBAAwB;EACxB,qBAAoB,EACvB;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,cAAa;EACb,eAAc,EACjB;;AAED;;EAEI,iBAAgB,EACnB;;AAED;EACI,gBAAe,EAClB;;AAED;EACI;IACI,WAAU,EACb;EAED;IACI,yBAAwB;IAExB,iCAAgC,EACnC;EAED;IACI,UAAS;IACT,WAAU;IACV,eAAc,EACjB;EAED;IACI,aAAY,EACf;EAED;IACI,YAAW;IACX,YAAW;IACX,yBAAwB;IACxB,qBAAoB,EACvB;EAED;IACI,YAAW;IACX,YAAW;IACX,yBAAwB;IACxB,qBAAoB,EACvB,EAAA","file":"timeline.scss","sourcesContent":["body{\n    -ms-overflow-x: hidden;\n        overflow-x: hidden;\n}\n.timeline {\n    position: relative;\n    padding: 20px 0 20px;\n    list-style: none;\n}\n\n.timeline:before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    width: 3px;\n    margin-left: -1.5px;\n    background-color: #eeeeee;\n}\n\n.timeline > li {\n    position: relative;\n    margin-bottom: 20px;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n    content: \" \";\n    display: table;\n}\n\n.timeline > li:after {\n    clear: both;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n    content: \" \";\n    display: table;\n}\n\n.timeline > li:after {\n    clear: both;\n}\n\n.timeline > li > .timeline-panel {\n    float: left;\n    position: relative;\n    width: 46%;\n    padding: 20px;\n    border: 1px solid #d4d4d4;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,0.175);\n    box-shadow: 0 1px 6px rgba(0,0,0,0.175);\n}\n\n.timeline > li > .timeline-panel:before {\n    content: \" \";\n    display: inline-block;\n    position: absolute;\n    top: 26px;\n    right: -15px;\n    border-top: 15px solid transparent;\n    border-right: 0 solid #ccc;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #ccc;\n}\n\n.timeline > li > .timeline-panel:after {\n    content: \" \";\n    display: inline-block;\n    position: absolute;\n    top: 27px;\n    right: -14px;\n    border-top: 14px solid transparent;\n    border-right: 0 solid #fff;\n    border-bottom: 14px solid transparent;\n    border-left: 14px solid #fff;\n}\n\n.timeline > li > .timeline-badge {\n    z-index: 100;\n    position: absolute;\n    top: 16px;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    margin-left: -25px;\n    border-radius: 50% 50% 50% 50%;\n    text-align: center;\n    font-size: 1.4em;\n    line-height: 50px;\n    color: #fff;\n    background-color: #999999;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n    float: right;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n}\n\n.timeline-badge.primary {\n    background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n    background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n    background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n    background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n    background-color: #5bc0de !important;\n}\n\n.timeline-title {\n    margin-top: 0;\n    color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n    margin-bottom: 0;\n}\n\n.timeline-body > p + p {\n    margin-top: 5px;\n}\n\n@media(max-width:767px) {\n    ul.timeline:before {\n        left: 40px;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        width: calc(100% - 90px);\n        width: -moz-calc(100% - 90px);\n        width: -webkit-calc(100% - 90px);\n    }\n\n    ul.timeline > li > .timeline-badge {\n        top: 16px;\n        left: 15px;\n        margin-left: 0;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        float: right;\n    }\n\n    ul.timeline > li > .timeline-panel:before {\n        right: auto;\n        left: -15px;\n        border-right-width: 15px;\n        border-left-width: 0;\n    }\n\n    ul.timeline > li > .timeline-panel:after {\n        right: auto;\n        left: -14px;\n        border-right-width: 14px;\n        border-left-width: 0;\n    }\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2>\n        Tables\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-table\"></i> Tables\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-12\">\n      <h4>Basic example</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <br>\n      <h4>Table head options</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n          <table class=\"table\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <br>\n      <h4>Bordered table</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@TwBootstrap</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">4</th>\n                <td colspan=\"2\">Larry the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <br>\n      <h4>Small table</h4>\n      <div class=\"card card-block\">\n        <table class=\"table table-sm\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <br>\n    <div class=\"col-xl-6 col-lg-12\">\n      <h4>Inverse table</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-dark\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <br>\n      <h4>Striped Rows</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover table-striped\">\n            <thead>\n              <tr>\n                <th>Page</th>\n                <th>Visits</th>\n                <th>% New Visits</th>\n                <th>Revenue</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>/index.html</td>\n                <td>1265</td>\n                <td>32.3%</td>\n                <td>$321.33</td>\n              </tr>\n              <tr>\n                <td>/about.html</td>\n                <td>261</td>\n                <td>33.3%</td>\n                <td>$234.12</td>\n              </tr>\n              <tr>\n                <td>/sales.html</td>\n                <td>665</td>\n                <td>21.3%</td>\n                <td>$16.34</td>\n              </tr>\n              <tr>\n                <td>/blog.html</td>\n                <td>9516</td>\n                <td>89.3%</td>\n                <td>$1644.43</td>\n              </tr>\n              <tr>\n                <td>/404.html</td>\n                <td>23</td>\n                <td>34.3%</td>\n                <td>$23.52</td>\n              </tr>\n              <tr>\n                <td>/services.html</td>\n                <td>421</td>\n                <td>60.3%</td>\n                <td>$724.32</td>\n              </tr>\n              <tr>\n                <td>/blog/post.html</td>\n                <td>1233</td>\n                <td>93.2%</td>\n                <td>$126.34</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <br>\n      <h4>Hoverable rows</h4>\n      <div class=\"card card-block\">\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <br>\n      \n      <h4>Contextual classes</h4>\n      <div class=\"card card-block\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"table-active\">\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr class=\"table-success\">\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr class=\"table-info\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr class=\"table-warning\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr class=\"table-danger\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/tables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tables.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__("../../../../../src/app/dashboard/tables/tables.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/tables/tables.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/tables.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TablesModule = (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tables_component__["a" /* TablesComponent */]]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(loginRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 offset-lg-4\">\n        \t<img src=\"assets/img/SB-admin.png\" width=\"150px\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" ng-model=\"name\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Log in </a>\t\t\t\t\n\t\t\t\t&nbsp;\n\t\t\t\t<a class=\"btn rounded-btn\" routerLink=\"/signup\">Register</a>\n\t\t\t</form>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #2b292c;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #2b292c;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n", "", {"version":3,"sources":["/mnt/Data/DevPackages/SBAdBs4Ng2/src/app/login/login.component.scss"],"names":[],"mappings":"AACC;EACG,mBAAkB;EAClB,OAAM;EACN,QAAO;EACP,SAAQ;EACR,UAAS;EACT,eAAc;EACd,oBAR6B;EAS7B,mBAAkB;EAClB,YAAW;EACX,aAAY,EAsEf;EAhFA;IAYO,WAAU,EACb;EAbJ;IAeO,aAAY;IACZ,mBAAkB;IAClB,gBAAe;IACf,uBAAsB;IACtB,iBAAgB,EACnB;EApBJ;IAsBO,gBAAe;IACf,aAAY;IACZ,iBAAgB;IAChB,kDAA6C;IAC7C,YAAW;IACX,iBAAgB,EACnB;EA5BJ;IA8BO,8BAA6B;IAC7B,iBAAgB,EACnB;EAhCJ;IAmCe,oBAAmB;IAC3B,gCAA4B;IAC5B,oBAtCyB;IAuCzB,2CAAuC;IACvC,gBAAe;IACf,kBAAiB;IACjB,gBAAe,EAClB;EA1CJ;IA4CO,aAA0B;IAC1B,wBAAqC;IACrC,cAAa,EAChB;EA/CJ;IAkDO,iBAAgB;IAChB,iBAAgB;IAChB,oBAAmB;IACnB,gBAAe,EAIlB;IAzDJ;MAuDW,gCAA4B,EAC/B;EAxDR;IA4DO,eAAc,EAgBjB;IA5EJ;MA8DO,2CAAuC,EACtC;IA/DR;MAiEgC,iBAAiB;MAC1C,2CAAuC,EACtC;IAnER;MAqEkC,iBAAiB;MAC5C,2CAAuC,EACtC;IAvER;MA0EO,2CAAuC,EACtC;EA3ER;IA8EO,gBAAe,EAClB","file":"login.component.scss","sourcesContent":[" $login-background-color: #2b292c;\n .login-page {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: auto;\n    background: $login-background-color;\n    text-align: center;\n    color: #fff;\n    padding: 3em;\n    .col-lg-4{\n        padding :0;\n    }\n    .input-lg {\n        height: 46px;\n        padding: 10px 16px;\n        font-size: 18px;\n        line-height: 1.3333333;\n        border-radius: 0;\n    }\n    .input-underline {\n        background: 0 0;\n        border: none;\n        box-shadow: none;\n        border-bottom: 2px solid rgba(255,255,255,.5);\n        color: #FFF;\n        border-radius: 0;\n    }\n    .input-underline:focus {\n        border-bottom: 2px solid #fff;\n        box-shadow: none;\n    }\n    .rounded-btn{\n        -webkit-border-radius: 50px;\n                border-radius: 50px;\n        color: rgba(255,255,255,0.8);\n        background: $login-background-color;\n        border: 2px solid rgba(255,255,255,0.8);\n        font-size: 18px;\n        line-height: 40px;\n        padding: 0 25px;\n    }\n    .rounded-btn:hover,.rounded-btn:focus,.rounded-btn:active,.rounded-btn:visited{\n        color: rgba(255,255,255,1);\n        border: 2px solid rgba(255,255,255,1);\n        outline: none;\n    }\n\n    h1 {\n        font-weight: 300;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-size: 36px;\n        small {\n            color: rgba(255,255,255,0.7);\n        }\n    }\n\n    .form-group {\n        padding: 8px 0;\n        input::-webkit-input-placeholder {\n        color: rgba(255,255,255,0.6) !important;\n        }\n         \n        input:-moz-placeholder { /* Firefox 18- */\n        color: rgba(255,255,255,0.6) !important;  \n        }\n         \n        input::-moz-placeholder {  /* Firefox 19+ */\n        color: rgba(255,255,255,0.6) !important;  \n        }\n         \n        input:-ms-input-placeholder {  \n        color: rgba(255,255,255,0.6) !important;  \n        }\n    }\n    .form-content {\n        padding: 40px 0;\n    }\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler navbar-toggler-left\" type=\"button\" (click)=\"sidebarCollapsed = !sidebarCollapsed\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n    </button>\n</nav>\n<div [collapse]=\"sidebarCollapsed\" class=\"sidebar-collapse\">\n  <ul class=\"sidebar-inverse-nav bg-dark\">\n    <ng-container *ngFor=\"let item of menuList\">\n      <li class=\"side-item\" *ngIf=\"item.children.length === 0\">\n        <a [routerLink]=\"[item.link]\" [routerLinkActive]=\"['active-link']\" class=\"side-link\">\n          <i class=\"{{item.glyph}}\"></i> &nbsp; {{item.name}}\n        </a>\n      </li>\n      <li class=\"side-item\" *ngIf=\"item.children.length > 0\">\n        <a [routerLink]=\"['components']\" [routerLinkActive]=\"['router-link-active']\" class=\"side-link\" (click)=\"item.collapse = !item.collapse\">\n          <i class=\"fa fa-plus\"></i> &nbsp; {{item.name}}\n          <i *ngIf=\"item.collapse\" class=\"{{subMenuGlyphDown}} float-right\" aria-hidden=\"true\"></i>\n          <i *ngIf=\"!item.collapse\" class=\"{{subMenuGlyphUp}} float-right\" aria-hidden=\"true\"></i>\n        </a>\n        <div [collapse]=\"item.collapse\">\n          <ul>\n            <li class=\"sub-item\" *ngFor=\"let child of item.children\">\n              <a [routerLink]=\"[item.link + '/' + child.link]\" [routerLinkActive]=\"['router-link-active']\" class=\"side-link\">\n                <i class=\"{{child.glyph}}\"></i> &nbsp; {{child.name}}\n              </a>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ng-container>\n    <li class=\"side-item\">\n      <a class=\"side-link\" href=\"https://github.com/DouglasWebster/angular-cli-sb2-bs4\">\n        GitHub Source\n        </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; }\n    .navbar-expand-sm .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 767px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; }\n    .navbar-expand-md .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 991px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; }\n    .navbar-expand-lg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 1199px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; }\n    .navbar-expand-xl .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n  .navbar-expand .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-text a {\n    color: #fff; }\n    .navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {\n      color: #fff; }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #868e96; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs .nav-item, .nav-tabs .side-item, .nav-tabs .sub-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #e9ecef #e9ecef #ddd; }\n    .nav-tabs .nav-link.disabled {\n      color: #868e96;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link,\n  .nav-tabs .show.side-item .nav-link,\n  .nav-tabs .show.sub-item .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n\n.nav-fill .nav-item, .nav-fill .side-item, .nav-fill .sub-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item, .nav-justified .side-item, .nav-justified .sub-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar-toggler-left {\n  position: fixed;\n  top: 8px;\n  z-index: 1020; }\n\n.navbar-toggler-right {\n  position: fixed;\n  top: 8px;\n  z-index: 1020; }\n\n.sidebar-collapse {\n  position: fixed;\n  z-index: 1020;\n  top: 50px;\n  width: 225px;\n  bottom: 0px;\n  border-radius: 0;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  height: 100%;\n  min-height: 100%; }\n  @media (max-width: 991px) {\n    .sidebar-collapse {\n      display: none; } }\n  @media (min-width: 992px) {\n    .sidebar-collapse {\n      display: block !important; } }\n\n.side-item {\n  padding: 8px 0px 0px; }\n\n.sidebar, .sidebar-light-nav, .sidebar-inverse-nav {\n  height: 100%;\n  overflow-y: auto;\n  padding: 1rem 1rem 1rem 1.5rem;\n  margin-bottom: 0; }\n  .sidebar .side-item .side-link, .sidebar-light-nav .side-item .side-link, .sidebar-inverse-nav .side-item .side-link {\n    text-decoration: none; }\n\n.sidebar-light-nav .side-item .side-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .sidebar-light-nav .side-item .side-link:focus, .sidebar-light-nav .side-item .side-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n\n.sidebar-inverse-nav .side-item .side-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .sidebar-inverse-nav .side-item .side-link:focus, .sidebar-inverse-nav .side-item .side-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n", "", {"version":3,"sources":["/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/_navbar.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/_variables.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/mixins/_hover.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/mixins/_border-radius.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/mixins/_breakpoints.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/node_modules/bootstrap/scss/_nav.scss","/mnt/Data/DevPackages/SBAdBs4Ng2/src/app/shared/sidebar/sidebar.component.scss"],"names":[],"mappings":"AAiBA;EACE,mBAAkB;EAClB,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAe;MAAf,gBAAe;EACf,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,0BAA8B;MAA9B,uBAA8B;UAA9B,+BAA8B;EAC9B,qBCuFW,ED5EZ;EAjBD;;IAYI,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,oBAAe;QAAf,gBAAe;IACf,0BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;IACnB,0BAA8B;QAA9B,uBAA8B;YAA9B,+BAA8B,EAC/B;;AAQH;EACE,sBAAqB;EACrB,uBCsf+E;EDrf/E,0BCqf+E;EDpf/E,mBCiEW;EDhEX,mBCkLoD;EDjLpD,qBAAoB;EACpB,oBAAmB,EAKpB;EE9BG;IF4BA,sBAAqB,EEzBpB;;AFkCL;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;EACtB,gBAAe;EACf,iBAAgB;EAChB,iBAAgB,EAWjB;EAhBD;IAQI,iBAAgB;IAChB,gBAAe,EAChB;EAVH;IAaI,iBAAgB;IAChB,YAAW,EACZ;;AAQH;EACE,sBAAqB;EACrB,oBCmbuC;EDlbvC,uBCkbuC,EDjbxC;;AAWD;EACE,8BAAgB;MAAhB,iBAAgB;EAChB,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EAGZ,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB,EACpB;;AAGD;EACE,yBCwbwC;EDvbxC,mBCmHoD;EDlHpD,eAAc;EACd,wBAAuB;EACvB,8BAAuC;EG5GrC,uBFmMgC,EDjFnC;EE/FG;IF6FA,sBAAqB,EE1FpB;;AFgGL;EACE,sBAAqB;EACrB,aAAY;EACZ,cAAa;EACb,uBAAsB;EACtB,YAAW;EACX,oCAAmC;EACnC,2BAA0B,EAC3B;;AI7DG;EJsEA;;IAIM,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AIzFL;EJmFA;IAUI,+BAAqB;IAArB,8BAAqB;QAArB,0BAAqB;YAArB,sBAAqB;IACrB,wBAA2B;QAA3B,qBAA2B;YAA3B,4BAA2B,EA4C9B;IAvDD;MAcM,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAepB;MA7BL;QAiBQ,mBAAkB,EACnB;MAlBP;QAqBQ,SAAQ;QACR,WAAU,EACX;MAvBP;QA0BQ,qBAAoB;QACpB,oBAAmB,EACpB;IA5BP;;MAkCM,sBAAiB;UAAjB,kBAAiB,EAClB;IAnCL;MAsCM,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MAGxB,8BAAgB;UAAhB,iBAAgB,EACjB;IA1CL;MA6CM,cAAa,EACd;IA9CL;MAkDQ,UAAS;MACT,aAAY,EACb,EAAA;;AI1HP;EJsEA;;IAIM,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AIzFL;EJmFA;IAUI,+BAAqB;IAArB,8BAAqB;QAArB,0BAAqB;YAArB,sBAAqB;IACrB,wBAA2B;QAA3B,qBAA2B;YAA3B,4BAA2B,EA4C9B;IAvDD;MAcM,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAepB;MA7BL;QAiBQ,mBAAkB,EACnB;MAlBP;QAqBQ,SAAQ;QACR,WAAU,EACX;MAvBP;QA0BQ,qBAAoB;QACpB,oBAAmB,EACpB;IA5BP;;MAkCM,sBAAiB;UAAjB,kBAAiB,EAClB;IAnCL;MAsCM,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MAGxB,8BAAgB;UAAhB,iBAAgB,EACjB;IA1CL;MA6CM,cAAa,EACd;IA9CL;MAkDQ,UAAS;MACT,aAAY,EACb,EAAA;;AI1HP;EJsEA;;IAIM,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AIzFL;EJmFA;IAUI,+BAAqB;IAArB,8BAAqB;QAArB,0BAAqB;YAArB,sBAAqB;IACrB,wBAA2B;QAA3B,qBAA2B;YAA3B,4BAA2B,EA4C9B;IAvDD;MAcM,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAepB;MA7BL;QAiBQ,mBAAkB,EACnB;MAlBP;QAqBQ,SAAQ;QACR,WAAU,EACX;MAvBP;QA0BQ,qBAAoB;QACpB,oBAAmB,EACpB;IA5BP;;MAkCM,sBAAiB;UAAjB,kBAAiB,EAClB;IAnCL;MAsCM,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MAGxB,8BAAgB;UAAhB,iBAAgB,EACjB;IA1CL;MA6CM,cAAa,EACd;IA9CL;MAkDQ,UAAS;MACT,aAAY,EACb,EAAA;;AI1HP;EJsEA;;IAIM,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AIzFL;EJmFA;IAUI,+BAAqB;IAArB,8BAAqB;QAArB,0BAAqB;YAArB,sBAAqB;IACrB,wBAA2B;QAA3B,qBAA2B;YAA3B,4BAA2B,EA4C9B;IAvDD;MAcM,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAepB;MA7BL;QAiBQ,mBAAkB,EACnB;MAlBP;QAqBQ,SAAQ;QACR,WAAU,EACX;MAvBP;QA0BQ,qBAAoB;QACpB,oBAAmB,EACpB;IA5BP;;MAkCM,sBAAiB;UAAjB,kBAAiB,EAClB;IAnCL;MAsCM,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MAGxB,8BAAgB;UAAhB,iBAAgB,EACjB;IA1CL;MA6CM,cAAa,EACd;IA9CL;MAkDQ,UAAS;MACT,aAAY,EACb,EAAA;;AAzDX;EAeQ,+BAAqB;EAArB,8BAAqB;MAArB,0BAAqB;UAArB,sBAAqB;EACrB,wBAA2B;MAA3B,qBAA2B;UAA3B,4BAA2B,EA4C9B;EA5DL;;IASU,iBAAgB;IAChB,gBAAe,EAChB;EAXT;IAmBU,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB,EAepB;IAlCT;MAsBY,mBAAkB,EACnB;IAvBX;MA0BY,SAAQ;MACR,WAAU,EACX;IA5BX;MA+BY,qBAAoB;MACpB,oBAAmB,EACpB;EAjCX;;IAuCU,sBAAiB;QAAjB,kBAAiB,EAClB;EAxCT;IA2CU,gCAAwB;IAAxB,gCAAwB;IAAxB,yBAAwB;IAGxB,8BAAgB;QAAhB,iBAAgB,EACjB;EA/CT;IAkDU,cAAa,EACd;EAnDT;IAuDY,UAAS;IACT,aAAY,EACb;;AAaX;EAEI,0BCzLW,ED8LZ;EAPH;IAKM,0BC5LS,ECKV;;AFkLL;EAWM,0BClMS,ED2MV;EApBL;IAcQ,0BCrMO,ECKV;EFkLL;IAkBQ,0BCzMO,ED0MR;;AAnBP;;;;EA0BM,0BCjNS,EDkNV;;AA3BL;EA+BI,0BCtNW;EDuNX,iCCvNW,EDwNZ;;AAjCH;EAoCI,sQCmUmS,EDlUpS;;AArCH;EAwCI,0BC/NW,EDuOZ;EAhDH;IA0CM,0BCjOS,EDsOV;IA/CL;MA6CQ,0BCpOO,ECKV;;AFsOL;EAEI,YCvPW,ED4PZ;EAPH;IAKM,YC1PS,ECeV;;AFsOL;EAWM,gCChQS,EDyQV;EApBL;IAcQ,iCCnQO,ECeV;EFsOL;IAkBQ,iCCvQO,EDwQR;;AAnBP;;;;EA0BM,YC/QS,EDgRV;;AA3BL;EA+BI,gCCpRW;EDqRX,uCCrRW,EDsRZ;;AAjCH;EAoCI,4QCwQkS,EDvQnS;;AArCH;EAwCI,gCC7RW,EDqSZ;EAhDH;IA0CM,YC/RS,EDoSV;IA/CL;MA6CQ,YClSO,ECeV;;AGrBL;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAe;MAAf,gBAAe;EACf,gBAAe;EACf,iBAAgB;EAChB,iBAAgB,EACjB;;AAED;EACE,eAAc;EACd,qBJ0fsC,EIhfvC;EHFG;IGLA,sBAAqB,EHQpB;EGbL;IAUI,eJNc,EIOf;;AAOH;EACE,8BJ4esC,EI1cvC;EAnCD;IAII,oBJiK6B,EIhK9B;EALH;IAQI,8BAAgD;IF7BhD,gCF6LgC;IE5LhC,iCF4LgC,EIpJjC;IApBH;MAYM,mCJiekC,EClfnC;IGKL;MAgBM,eJ9BY;MI+BZ,8BAA6B;MAC7B,0BAAyB,EAC1B;EAnBL;;;;IAwBI,eJrCc;IIsCd,uBJ7CW;II8CX,6BJ9CW,EI+CZ;EA3BH;IA+BI,iBJsI6B;IE1L7B,0BEsD4B;IFrD5B,2BEqD4B,EAC7B;;AAQH;EFrEI,uBFmMgC,EI3HjC;;AAHH;;EAOI,YJrEW;EIsEX,0BJ7Ca,EI8Cd;;AAQH;EAEI,oBAAc;MAAd,mBAAc;UAAd,eAAc;EACd,mBAAkB,EACnB;;AAGH;EAEI,2BAAa;MAAb,cAAa;EACb,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,mBAAkB,EACnB;;AAQH;EAEI,cAAa,EACd;;AAHH;EAKI,eAAc,EACf;;ACrGH;EACE,gBAAe;EACf,SAAQ;EACR,cL6esC,EK5evC;;AAED;EACE,gBAAe;EACf,SAAQ;EACR,cLuesC,EKtevC;;AAED;EAOE,gBAAe;EACf,cL4dsC;EK3dtC,UAAS;EACT,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,aAAY;EACZ,iBAAgB;EAChB,iBAAgB;EAChB,mBAAkB;EAClB,qBAAoB;EACpB,aAAY;EACZ,iBAAgB,EACjB;EFsBG;IE1CJ;MAEM,cAAa,EAkBlB,EAAA;EFSG;IE7BJ;MAKI,0BAAyB,EAe5B,EAAA;;AAED;EAEE,qBAAoB,EACrB;;AAMD;EACE,aAAY;EACZ,iBAAgB;EAChB,+BApD0B;EAqD1B,iBAAgB,EAMjB;EAVD;IAOM,sBAAqB,EACtB;;AAIL;EAIM,0BLrDS,EKyDV;EARL;IAMQ,0BLvDO,ECKV;;AIwDL;EAIM,gCL3ES,EK+EV;EARL;IAMQ,iCL7EO,ECeV","file":"sidebar.component.scss","sourcesContent":["// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Navbar divider\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding: $navbar-padding-y $navbar-padding-x;\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properities so that content nested within behave properly.\n  > .container,\n  > .container-fluid {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: $navbar-brand-padding-y;\n  padding-bottom: $navbar-brand-padding-y;\n  margin-right: $navbar-padding-x;\n  font-size: $navbar-brand-font-size;\n  line-height: inherit;\n  white-space: nowrap;\n\n  @include hover-focus {\n    text-decoration: none;\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .dropdown-menu {\n    position: static;\n    float: none;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  display: inline-block;\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orienation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  font-size: $navbar-toggler-font-size;\n  line-height: 1;\n  background: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n\n  @include hover-focus {\n    text-decoration: none;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        > .container,\n        > .container-fluid {\n          padding-right: 0;\n          padding-left: 0;\n        }\n      }\n\n      @include media-breakpoint-up($next) {\n        flex-flow: row nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .dropdown-menu-right {\n            right: 0;\n            left: auto; // Reset the default from `.dropdown-menu`\n          }\n\n          .nav-link {\n            padding-right: .5rem;\n            padding-left: .5rem;\n          }\n        }\n\n        // For nesting containers, have to redeclare for alignment purposes\n        > .container,\n        > .container-fluid {\n          flex-wrap: nowrap;\n        }\n\n        .navbar-collapse {\n          display: flex !important;  // stylelint-disable-line declaration-no-important\n\n          // Changes flex-bases to auto because of an IE10 bug\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n\n        .dropup {\n          .dropdown-menu {\n            top: auto;\n            bottom: 100%;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand {\n    color: $navbar-light-active-color;\n\n    @include hover-focus {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      @include hover-focus {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-light-color;\n    border-color: $navbar-light-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: $navbar-light-toggler-icon-bg;\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n    a {\n      color: $navbar-light-active-color;\n\n      @include hover-focus {\n        color: $navbar-light-active-color;\n      }\n    }\n  }\n}\n\n// White links against a dark background\n.navbar-dark {\n  .navbar-brand {\n    color: $navbar-dark-active-color;\n\n    @include hover-focus {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-dark-color;\n\n      @include hover-focus {\n        color: $navbar-dark-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-dark-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-dark-color;\n    border-color: $navbar-dark-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: $navbar-dark-toggler-icon-bg;\n  }\n\n  .navbar-text {\n    color: $navbar-dark-color;\n    a {\n      color: $navbar-dark-active-color;\n\n      @include hover-focus {\n        color: $navbar-dark-active-color;\n      }\n    }\n  }\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n\n//\n// Color system\n//\n\n// stylelint-disable\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #868e96 !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$grays: () !default;\n$grays: map-merge((\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n), $grays);\n\n$blue:    #007bff !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #28a745 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$colors: () !default;\n$colors: map-merge((\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n), $colors);\n\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n$theme-colors: map-merge((\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n), $theme-colors);\n// stylelint-enable\n\n// Set a specific jump point for requesting color jumps\n$theme-color-interval:      8% !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:              true !default;\n$enable-rounded:            true !default;\n$enable-shadows:            false !default;\n$enable-gradients:          false !default;\n$enable-transitions:        true !default;\n$enable-hover-media-query:  false !default;\n$enable-grid-classes:       true !default;\n$enable-print-styles:       true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: ($spacer * .25),\n  2: ($spacer * .5),\n  3: $spacer,\n  4: ($spacer * 1.5),\n  5: ($spacer * 3)\n) !default;\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: (\n  25: 25%,\n  50: 50%,\n  75: 75%,\n  100: 100%\n) !default;\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                theme-color(\"primary\") !default;\n$link-decoration:           none !default;\n$link-hover-color:          darken($link-color, 15%) !default;\n$link-hover-decoration:     underline !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints);\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           30px !default;\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:              1.5 !default;\n$line-height-sm:              1.5 !default;\n\n$border-width:                1px !default;\n$border-color:                $gray-200 !default;\n\n$border-radius:               .25rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-sm:            .2rem !default;\n\n$component-active-color:      $white !default;\n$component-active-bg:         theme-color(\"primary\") !default;\n\n$caret-width:                 .3em !default;\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n$transition-collapse:         height .35s ease !default;\n\n\n// Fonts\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\" !default;\n$font-family-monospace:       \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:            $font-family-sans-serif !default;\n// stylelint-enable value-keyword-case\n\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:                ($font-size-base * 1.25) !default;\n$font-size-sm:                ($font-size-base * .875) !default;\n\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n\n$font-weight-base:            $font-weight-normal !default;\n$line-height-base:            1.5 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n\n$headings-margin-bottom:      ($spacer / 2) !default;\n$headings-font-family:        inherit !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              inherit !default;\n\n$display1-size:               6rem !default;\n$display2-size:               5.5rem !default;\n$display3-size:               4.5rem !default;\n$display4-size:               3.5rem !default;\n\n$display1-weight:             300 !default;\n$display2-weight:             300 !default;\n$display3-weight:             300 !default;\n$display4-weight:             300 !default;\n$display-line-height:         $headings-line-height !default;\n\n$lead-font-size:              ($font-size-base * 1.25) !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             80% !default;\n\n$text-muted:                  $gray-600 !default;\n\n$blockquote-small-color:      $gray-600 !default;\n$blockquote-font-size:        ($font-size-base * 1.25) !default;\n\n$hr-border-color:             rgba($black,.1) !default;\n$hr-border-width:             $border-width !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$kbd-box-shadow:              inset 0 -.1rem 0 rgba($black,.25) !default;\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         5px !default;\n\n$mark-bg: #fcf8e3 !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:          .75rem !default;\n$table-cell-padding-sm:       .3rem !default;\n\n$table-bg:                    transparent !default;\n$table-accent-bg:             rgba($black,.05) !default;\n$table-hover-bg:              rgba($black,.075) !default;\n$table-active-bg:             $table-hover-bg !default;\n\n$table-border-width:          $border-width !default;\n$table-border-color:          $gray-200 !default;\n\n$table-head-bg:               $gray-200 !default;\n$table-head-color:            $gray-700 !default;\n\n$table-dark-bg:               $gray-900 !default;\n$table-dark-accent-bg:        rgba($white, .05) !default;\n$table-dark-hover-bg:         rgba($white, .075) !default;\n$table-dark-border-color:     lighten($gray-900, 7.5%) !default;\n$table-dark-color:            $body-bg !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background and border color.\n\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:       .2rem !default;\n$input-btn-focus-color:       rgba(theme-color(\"primary\"), .25) !default;\n$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-line-height-sm:    $line-height-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-line-height-lg:    $line-height-lg !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white,.15), 0 1px 1px rgba($black,.075) !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black,.125) !default;\n\n$btn-link-disabled-color:     $gray-600 !default;\n\n$btn-block-spacing-y:         .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n\n$btn-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n// Forms\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n\n$input-color:                           $gray-700 !default;\n$input-border-color:                    $gray-400 !default;\n$input-btn-border-width:                $border-width !default; // For form controls and buttons\n$input-box-shadow:                      inset 0 1px 1px rgba($black,.075) !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              lighten(theme-color(\"primary\"), 25%) !default;\n$input-focus-color:                     $input-color !default;\n\n$input-placeholder-color:               $gray-600 !default;\n\n$input-height-border:                   $input-btn-border-width * 2 !default;\n\n$input-height-inner:                    ($font-size-base * $input-btn-line-height) + ($input-btn-padding-y * 2) !default;\n$input-height:                          calc(#{$input-height-inner} + #{$input-height-border}) !default;\n\n$input-height-inner-sm:                 ($font-size-sm * $input-btn-line-height-sm) + ($input-btn-padding-y-sm * 2) !default;\n$input-height-sm:                       calc(#{$input-height-inner-sm} + #{$input-height-border}) !default;\n\n$input-height-inner-lg:                 ($font-size-lg * $input-btn-line-height-lg) + ($input-btn-padding-y-lg * 2) !default;\n$input-height-lg:                       calc(#{$input-height-inner-lg} + #{$input-height-border}) !default;\n\n$input-transition:                      border-color ease-in-out .15s, box-shadow ease-in-out .15s !default;\n\n$form-text-margin-top:                  .25rem !default;\n\n$form-check-margin-bottom:              .5rem !default;\n$form-check-input-gutter:               1.25rem !default;\n$form-check-input-margin-y:             .25rem !default;\n$form-check-input-margin-x:             .25rem !default;\n\n$form-check-inline-margin-x:            .75rem !default;\n\n$form-group-margin-bottom:              1rem !default;\n\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n\n$custom-control-gutter:                 1.5rem !default;\n$custom-control-spacer-y:               .25rem !default;\n$custom-control-spacer-x:               1rem !default;\n\n$custom-control-indicator-size:         1rem !default;\n$custom-control-indicator-bg:           #ddd !default;\n$custom-control-indicator-bg-size:      50% 50% !default;\n$custom-control-indicator-box-shadow:   inset 0 .25rem .25rem rgba($black,.1) !default;\n\n$custom-control-indicator-disabled-bg:          $gray-200 !default;\n$custom-control-description-disabled-color:     $gray-600 !default;\n\n$custom-control-indicator-checked-color:        $white !default;\n$custom-control-indicator-checked-bg:           theme-color(\"primary\") !default;\n$custom-control-indicator-checked-box-shadow:   none !default;\n\n$custom-control-indicator-focus-box-shadow:     0 0 0 1px $body-bg, $input-btn-focus-box-shadow !default;\n\n$custom-control-indicator-active-color:         $white !default;\n$custom-control-indicator-active-bg:            lighten(theme-color(\"primary\"), 35%) !default;\n$custom-control-indicator-active-box-shadow:    none !default;\n\n$custom-checkbox-indicator-border-radius:       $border-radius !default;\n$custom-checkbox-indicator-icon-checked:        str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-checkbox-indicator-indeterminate-bg:    theme-color(\"primary\") !default;\n$custom-checkbox-indicator-indeterminate-color: $custom-control-indicator-checked-color !default;\n$custom-checkbox-indicator-icon-indeterminate:  str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-checkbox-indicator-indeterminate-box-shadow: none !default;\n\n$custom-radio-indicator-border-radius:          50% !default;\n$custom-radio-indicator-icon-checked:           str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#{$custom-control-indicator-checked-color}'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-select-padding-y:           .375rem !default;\n$custom-select-padding-x:          .75rem !default;\n$custom-select-height:              $input-height !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-line-height:         $input-btn-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-600 !default;\n$custom-select-bg:                  $white !default;\n$custom-select-disabled-bg:         $gray-200 !default;\n$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color:     #333 !default;\n$custom-select-indicator:           str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-select-border-width:        $input-btn-border-width !default;\n$custom-select-border-color:        $input-border-color !default;\n$custom-select-border-radius:       $border-radius !default;\n\n$custom-select-focus-border-color:  lighten(theme-color(\"primary\"), 25%) !default;\n$custom-select-focus-box-shadow:    inset 0 1px 2px rgba($black, .075), 0 0 5px rgba($custom-select-focus-border-color, .5) !default;\n\n$custom-select-font-size-sm:        75% !default;\n$custom-select-height-sm:           $input-height-sm !default;\n\n$custom-file-height:                $input-height !default;\n$custom-file-width:                 14rem !default;\n$custom-file-focus-box-shadow:      0 0 0 .075rem $white, 0 0 0 .2rem theme-color(\"primary\") !default;\n\n$custom-file-padding-y:             $input-btn-padding-y !default;\n$custom-file-padding-x:             $input-btn-padding-x !default;\n$custom-file-line-height:           $input-btn-line-height !default;\n$custom-file-color:                 $input-color !default;\n$custom-file-bg:                    $input-bg !default;\n$custom-file-border-width:          $input-btn-border-width !default;\n$custom-file-border-color:          $input-border-color !default;\n$custom-file-border-radius:         $input-border-radius !default;\n$custom-file-box-shadow:            $input-box-shadow !default;\n$custom-file-button-color:          $custom-file-color !default;\n$custom-file-button-bg:             $input-group-addon-bg !default;\n$custom-file-text: (\n  placeholder: (\n    en: \"Choose file...\"\n  ),\n  button-label: (\n    en: \"Browse\"\n  )\n) !default;\n\n\n// Form validation\n$form-feedback-valid-color:         theme-color(\"success\") !default;\n$form-feedback-invalid-color:       theme-color(\"danger\") !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black,.15) !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-divider-bg:               $gray-200 !default;\n$dropdown-box-shadow:               0 .5rem 1rem rgba($black,.175) !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         darken($gray-900, 5%) !default;\n$dropdown-link-hover-bg:            $gray-100 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-600 !default;\n\n$dropdown-item-padding-y:           .25rem !default;\n$dropdown-item-padding-x:           1.5rem !default;\n\n$dropdown-header-color:             $gray-600 !default;\n\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-modal:                      1050 !default;\n$zindex-popover:                    1060 !default;\n$zindex-tooltip:                    1070 !default;\n\n// Navs\n\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             #ddd !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: #ddd !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n// Navbar\n\n$navbar-padding-y:                  ($spacer / 2) !default;\n$navbar-padding-x:                  $spacer !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   ($font-size-base * $line-height-base + $nav-link-padding-y * 2) !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n\n$navbar-dark-color:                 rgba($white,.5) !default;\n$navbar-dark-hover-color:           rgba($white,.75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white,.25) !default;\n$navbar-dark-toggler-icon-bg:       str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-dark-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-dark-toggler-border-color:  rgba($white,.1) !default;\n\n$navbar-light-color:                rgba($black,.5) !default;\n$navbar-light-hover-color:          rgba($black,.7) !default;\n$navbar-light-active-color:         rgba($black,.9) !default;\n$navbar-light-disabled-color:       rgba($black,.3) !default;\n$navbar-light-toggler-icon-bg:      str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-light-toggler-border-color: rgba($black,.1) !default;\n\n// Pagination\n\n$pagination-padding-y:              .5rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n$pagination-line-height:            1.25 !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-color:           #ddd !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     #ddd !default;\n\n$pagination-active-color:           $white !default;\n$pagination-active-bg:              theme-color(\"primary\") !default;\n$pagination-active-border-color:    theme-color(\"primary\") !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  #ddd !default;\n\n\n// Jumbotron\n\n$jumbotron-padding:                 2rem !default;\n$jumbotron-bg:                      $gray-200 !default;\n\n\n// Cards\n\n$card-spacer-y:                     .75rem !default;\n$card-spacer-x:                     1.25rem !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black,.125) !default;\n$card-inner-border-radius:          calc(#{$card-border-radius} - #{$card-border-width}) !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-bg:                           $white !default;\n\n$card-img-overlay-padding:          1.25rem !default;\n\n$card-group-margin:                 ($grid-gutter-width / 2) !default;\n$card-deck-margin:                  $card-group-margin !default;\n\n$card-columns-count:                3 !default;\n$card-columns-gap:                  1.25rem !default;\n$card-columns-margin:               $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 3px !default;\n$tooltip-padding-x:                 8px !default;\n$tooltip-margin:                    0 !default;\n\n\n$tooltip-arrow-width:               5px !default;\n$tooltip-arrow-height:              5px !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n\n\n// Popovers\n\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black,.2) !default;\n$popover-box-shadow:                0 .25rem .5rem rgba($black,.2) !default;\n\n$popover-header-bg:                 darken($popover-bg, 3%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          .75rem !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $popover-header-padding-y !default;\n$popover-body-padding-x:            $popover-header-padding-x !default;\n\n$popover-arrow-width:               .8rem !default;\n$popover-arrow-height:              .4rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n\n\n// Badges\n\n$badge-font-size:                   75% !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-padding-y:                   .25em !default;\n$badge-padding-x:                   .4em !default;\n$badge-border-radius:               $border-radius !default;\n\n$badge-pill-padding-x:              .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:          10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:               15px !default;\n\n$modal-dialog-margin:               10px !default;\n$modal-dialog-margin-y-sm-up:       30px !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black,.2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-box-shadow-xs:       0 3px 9px rgba($black,.5) !default;\n$modal-content-box-shadow-sm-up:    0 5px 15px rgba($black,.5) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $gray-200 !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding:              15px !default;\n\n$modal-lg:                          800px !default;\n$modal-md:                          500px !default;\n$modal-sm:                          300px !default;\n\n$modal-transition:                  transform .3s ease-out !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-y:                   .75rem !default;\n$alert-padding-x:                   1.25rem !default;\n$alert-margin-bottom:               1rem !default;\n$alert-border-radius:               $border-radius !default;\n$alert-link-font-weight:            $font-weight-bold !default;\n$alert-border-width:                $border-width !default;\n\n\n// Progress bars\n\n$progress-height:                   1rem !default;\n$progress-font-size:                ($font-size-base * .75) !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               inset 0 .1rem .1rem rgba($black,.1) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   theme-color(\"primary\") !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n\n// List group\n\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black,.125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         .75rem !default;\n$list-group-item-padding-x:         1.25rem !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            #ddd !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              0 1px 2px rgba($black,.075) !default;\n$thumbnail-transition:              all .2s ease-in-out !default;\n\n\n// Figures\n\n$figure-caption-font-size:          90% !default;\n$figure-caption-color:              $gray-600 !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-padding-y:              .75rem !default;\n$breadcrumb-padding-x:              1rem !default;\n$breadcrumb-item-padding:           .5rem !default;\n\n$breadcrumb-margin-bottom:          1rem !default;\n\n$breadcrumb-bg:                     $gray-200 !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                \"/\" !default;\n\n\n// Carousel\n\n$carousel-control-color:            $white !default;\n$carousel-control-width:            15% !default;\n$carousel-control-opacity:          .5 !default;\n\n$carousel-indicator-width:          30px !default;\n$carousel-indicator-height:         3px !default;\n$carousel-indicator-spacer:         3px !default;\n$carousel-indicator-active-bg:      $white !default;\n\n$carousel-caption-width:            70% !default;\n$carousel-caption-color:            $white !default;\n\n$carousel-control-icon-width:       20px !default;\n\n$carousel-control-prev-icon-bg:     str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$carousel-control-next-icon-bg:     str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$carousel-transition:               transform .6s ease !default;\n\n\n// Close\n\n$close-font-size:                   $font-size-base * 1.5 !default;\n$close-font-weight:                 $font-weight-bold !default;\n$close-color:                       $black !default;\n$close-text-shadow:                 0 1px 0 $white !default;\n\n// Code\n\n$code-font-size:                    90% !default;\n$code-padding-y:                    .2rem !default;\n$code-padding-x:                    .4rem !default;\n$code-color:                        #bd4147 !default;\n$code-bg:                           $gray-100 !default;\n\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         $gray-900 !default;\n$pre-scrollable-max-height:         340px !default;\n","// stylelint-disable indentation\n@mixin hover {\n  // TODO: re-enable along with mq4-hover-shim\n//  @if $enable-hover-media-query {\n//    // See Media Queries Level 4: https://drafts.csswg.org/mediaqueries/#hover\n//    // Currently shimmed by https://github.com/twbs/mq4-hover-shim\n//    @media (hover: hover) {\n//      &:hover { @content }\n//    }\n//  }\n//  @else {\n    &:hover { @content; }\n//  }\n}\n\n\n@mixin hover-focus {\n  @if $enable-hover-media-query {\n    &:focus {\n      @content;\n    }\n    @include hover { @content; }\n  } @else {\n    &:focus,\n    &:hover {\n      @content;\n    }\n  }\n}\n\n@mixin plain-hover-focus {\n  @if $enable-hover-media-query {\n    &,\n    &:focus {\n      @content;\n    }\n    @include hover { @content; }\n  } @else {\n    &,\n    &:focus,\n    &:hover {\n      @content;\n    }\n  }\n}\n\n@mixin hover-focus-active {\n  @if $enable-hover-media-query {\n    &:focus,\n    &:active {\n      @content;\n    }\n    @include hover { @content; }\n  } @else {\n    &:focus,\n    &:active,\n    &:hover {\n      @content;\n    }\n  }\n}\n","// Single side border-radius\n\n@mixin border-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-radius: $radius;\n  }\n}\n\n@mixin border-top-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n    border-top-right-radius: $radius;\n  }\n}\n\n@mixin border-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: $radius;\n    border-bottom-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: $radius;\n    border-bottom-left-radius: $radius;\n  }\n}\n\n@mixin border-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n    border-bottom-left-radius: $radius;\n  }\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.1.\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - 1px, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name) {\n      @content;\n    }\n  }\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s or `<ul>`s.\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding-y $nav-link-padding-x;\n\n  @include hover-focus {\n    text-decoration: none;\n  }\n\n  // Disabled state lightens text\n  &.disabled {\n    color: $nav-link-disabled-color;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-item {\n    margin-bottom: -$nav-tabs-border-width;\n  }\n\n  .nav-link {\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    @include hover-focus {\n      border-color: $nav-tabs-link-hover-border-color $nav-tabs-link-hover-border-color $nav-tabs-border-color;\n    }\n\n    &.disabled {\n      color: $nav-link-disabled-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-link-active-color;\n    background-color: $nav-tabs-link-active-bg;\n    border-color: $nav-tabs-link-active-border-color $nav-tabs-link-active-border-color $nav-tabs-link-active-bg;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: $nav-pills-link-active-color;\n    background-color: $nav-pills-link-active-bg;\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","@import \"../../../../node_modules/bootstrap/scss/_functions\";\n@import \"../../../../node_modules/bootstrap/scss/variables\";\n@import \"../../../../node_modules/bootstrap/scss/mixins\";\n@import \"../../../../node_modules/bootstrap/scss/navbar\";\n@import \"../../../../node_modules/bootstrap/scss/nav\";\n\n$link-padding-top:    1rem;\n$link-padding-right:  1rem;\n$link-padding-bottom: 1rem;\n$link-padding-left:   1.5rem;\n\n$side-link-padding: $link-padding-top $link-padding-right $link-padding-bottom $link-padding-left;\n\n$zindex-sidebar: $zindex-sticky;\n\n.navbar-toggler-left{\n  position: fixed;\n  top: 8px;\n  z-index: $zindex-sidebar;\n}\n\n.navbar-toggler-right{\n  position: fixed;\n  top: 8px;\n  z-index: $zindex-sidebar;\n}\n\n.sidebar-collapse{\n  @include media-breakpoint-down(md) {\n      display: none;\n  }\n  @include media-breakpoint-up(lg) {\n    display: block !important;\n  }\n  position: fixed;\n  z-index: $zindex-sidebar;\n  top: 50px;\n  width: 225px;\n  bottom: 0px;\n  border-radius: 0;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  height: 100%;\n  min-height: 100%;\n}\n\n.side-item {\n  @extend .nav-item;\n  padding: 8px 0px 0px;\n}\n\n.sub-item {\n  @extend .nav-item;\n}\n\n.sidebar {\n  height: 100%;\n  overflow-y: auto;\n  padding: $side-link-padding;\n  margin-bottom: 0;\n  .side-item {\n    .side-link {\n      text-decoration: none;\n    }\n  }\n}\n\n.sidebar-light-nav {\n  @extend .sidebar;\n  .side-item {\n    .side-link {\n      color: $navbar-light-color;\n      @include hover-focus {\n        color: $navbar-light-hover-color;\n      }\n    }\n  }\n}\n\n.sidebar-inverse-nav {\n  @extend .sidebar;\n  .side-item {\n    .side-link {\n      color: $navbar-dark-color;\n      @include hover-focus {\n        color: $navbar-dark-hover-color;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_service__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(menuService) {
        this.menuService = menuService;
        this.sidebarCollapsed = true;
        this.subMenu1Collapsed = true;
        this.subMenuGlyphUp = 'fa fa-caret-left';
        this.subMenuGlyphDown = 'fa fa-caret-down';
        this.menuList = [];
        this.remoteMenuList = [];
        this.hardCodedItems = [
            { name: 'Blank Page', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [], collapse: false },
            {
                name: 'Dummy Menu', link: 'home', glyph: 'fa fa-fw fa-file-o', children: [
                    { name: 'Dummy 1', link: '', glyph: 'fa fa-fw fa-dashboard' },
                    { name: 'Dummy 2', link: '', glyph: 'fa fa-fw fa-dashboard' }
                ], collapse: true
            }
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // console.log('Sidebar component initiating');
        this.setDefaultMenu();
        this.getMenu();
    };
    SidebarComponent.prototype.getMenu = function (url) {
        var _this = this;
        this.menuService.getMenu(url)
            .subscribe(function (menu) {
            // console.log('getting menu from server with ', url);
            _this.remoteMenuList = menu;
            // console.log('menu: ', this.remoteMenuList);
        }, function (error) {
            _this.errorMessage = error;
            console.error('error getting data: ', _this.errorMessage);
            _this.setDefaultMenu();
        }, function () {
            _this.mergeMenus();
        });
    };
    SidebarComponent.prototype.setDefaultMenu = function () {
        var _this = this;
        // console.log(`setting default menu with`, this.hardCodedItems)
        this.menuList = [];
        this.hardCodedItems.map(function (x) {
            _this.menuList.push(x);
        });
        // console.log('menu is now ', this.menuList);
    };
    SidebarComponent.prototype.mergeMenus = function () {
        var _this = this;
        this.menuList = [];
        this.remoteMenuList.map(function (x) {
            _this.menuList.push(x);
        });
        this.hardCodedItems.map(function (x) {
            _this.menuList.push(x);
        });
        console.log("menu is now " + this.menuList);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_service__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__["a" /* CollapseModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sidebar_component__["a" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sidebar_component__["a" /* SidebarComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__sidebar_service__["a" /* SidebarService */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarService = (function () {
    function SidebarService(http) {
        this.http = http;
        this.defaultURL = 'assets/defaultSideMenu.json';
    }
    SidebarService.prototype.getMenu = function (menuUrl) {
        if (menuUrl === void 0) { menuUrl = this.defaultURL; }
        console.log('url: ', menuUrl);
        return this.http.get(menuUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SidebarService.prototype.extractData = function (res) {
        console.log('response: ', res);
        var body = res.json();
        console.log('body: ', body);
        console.log('data: ', body.data);
        return body.data || {};
    };
    SidebarService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    SidebarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark sticky-top\">\n  <span></span>\n  <span class=\"navbar-brand\" href=\"#\">SB Admin BS4 NG2+</span>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"topNavCollapsed = !topNavCollapsed\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div [collapse]=\"topNavCollapsed\" class=\"navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a href=\"https://github.com/DouglasWebster/angular_cli-sb2-bs4/archive/master.zip\" class=\"btn btn-outline-secondary\" role=\"button\">\n          Download Now\n        </a>\n      </li>\n      <div class=\"nav-item\" dropdown>\n        <a href dropdownToggle (click)=\"false\" class=\"nav-link dropdown-toggle\">\n          <i class=\"fa fa-envelope\"></i>\n          <b class=\"caret\"></b>\n        </a>\n        <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                  <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">\n                    <strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\">\n                    <i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                  <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">\n                    <strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\">\n                    <i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                  <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">\n                    <strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\">\n                    <i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              Read All New Messages\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"nav-item\" dropdown>\n        <a href dropdownToggle (click)=\"false\" class=\"nav-link dropdown-toggle\">\n          <i class=\"fa fa-bell\"></i>\n          <b class=\"caret\"></b>\n        </a>\n        <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n          <li role=\"menuItem\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name\n              <span class=\"label label-default\"> Alert Badge</span>\n            </a>\n          </li>\n          <li role=\"menuItem\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name\n              <span class=\"label label-default\"> Alert Badge</span>\n            </a>\n          </li>\n          <li role=\"menuItem\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name\n              <span class=\"label label-default\"> Alert Badge</span>\n            </a>\n          </li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuItem\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">View All</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"nav-item\" dropdown>\n        <a href dropdownToggle (click)=\"false\" class=\"nav-link dropdown-toggle\">\n          <i class=\"fa fa-user\"></i> John Smith\n          <b class=\"caret\"></b>\n        </a>\n        <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n          <li role=\"menuItem\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"fa fa-fw fa-user\"></i> Profile</a>\n          </li>\n          <li role=\"menuItem\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\n          </li>\n          <li role=\"menuItem\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li role=\"menuItem\">\n            <a class=\"dropdown-item\" href=\"/login\">\n              <i class=\"fa fa-fw fa-power-off\"></i> Log Out\n            </a>\n          </li>\n        </ul>\n      </div>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/topnav/topnav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"topnav.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/topnav/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopnavComponent = (function () {
    function TopnavComponent() {
        this.topNavCollapsed = true;
        this.status = { isopen: false };
        this.items = ['The first choice!',
            'And another choice for you.', 'but wait! A third!'];
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    TopnavComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    TopnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__("../../../../../src/app/shared/topnav/topnav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/topnav/topnav.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnav_component__ = __webpack_require__("../../../../../src/app/shared/topnav/topnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TopnavModule = (function () {
    function TopnavModule() {
    }
    TopnavModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_collapse__["a" /* CollapseModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__topnav_component__["a" /* TopnavComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__topnav_component__["a" /* TopnavComponent */]]
        })
    ], TopnavModule);
    return TopnavModule;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */] }
];
var SignupRoutingModule = (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(loginRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 offset-lg-4\">\n        \t<img src=\"assets/img/SB-admin.png\" width=\"150px;\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Full Name\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Repeat Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a  class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Register </a>&nbsp;\n\t\t\t\t<a  class=\"btn rounded-btn\" routerLink=\"/\"> Log in </a>\n\t\t\t</form>\n\t\t</div>\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"signup.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_routing_module__ = __webpack_require__("../../../../../src/app/signup/signup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__signup_routing_module__["a" /* SignupRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map