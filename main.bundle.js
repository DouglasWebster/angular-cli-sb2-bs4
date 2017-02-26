webpackJsonp([0,5],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline-cmp',
            template: __webpack_require__(838),
            styles: [__webpack_require__(780)],
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
var ChatComponent = (function () {
    function ChatComponent() {
        this.disabled = false;
    }
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-cmp',
            template: __webpack_require__(835)
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications-cmp',
            template: __webpack_require__(837)
        }), 
        __metadata('design:paramtypes', [])
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(836),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionSampleComponent; });
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
    }
    AccordionSampleComponent.prototype.ngOnInit = function () {
    };
    AccordionSampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accordion-sample',
            template: __webpack_require__(812),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionSampleComponent);
    return AccordionSampleComponent;
}());
//# sourceMappingURL=accordion-sample.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert-sample',
            template: __webpack_require__(813),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertSampleComponent);
    return AlertSampleComponent;
}());
//# sourceMappingURL=alert-sample.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsComponentsComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bs-component',
            // changeDetection: ChangeDetectionStrategy.OnPush,  // <-- this does not seem to be needed any more
            template: __webpack_require__(814),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [])
    ], BsComponentsComponent);
    return BsComponentsComponent;
}());
//# sourceMappingURL=bs-components.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-button-sample',
            template: __webpack_require__(815),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonSampleComponent);
    return ButtonSampleComponent;
}());
//# sourceMappingURL=button-sample.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel-sample',
            template: __webpack_require__(816),
            styles: [__webpack_require__(760)],
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselSampleComponent);
    return CarouselSampleComponent;
}());
//# sourceMappingURL=carousel-sample.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapse-sample',
            template: __webpack_require__(817),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], CollapseSampleComponent);
    return CollapseSampleComponent;
}());
//# sourceMappingURL=collapse-sample.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateSampleComponent; });
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
        this.dt = new Date();
        this.minDate = void 0;
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
            'shortDate'];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.opened = false;
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
        (this.dateDisabled = []);
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
    }
    DateSampleComponent.prototype.getDate = function () {
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    DateSampleComponent.prototype.today = function () {
        this.dt = new Date();
    };
    DateSampleComponent.prototype.d20090824 = function () {
        this.dt = __WEBPACK_IMPORTED_MODULE_1_moment__('2009-08-24', 'YYYY-MM-DD')
            .toDate();
    };
    DateSampleComponent.prototype.disableTomorrow = function () {
        this.dateDisabled = [{ date: this.tomorrow, mode: 'day' }];
    };
    // todo: implement custom class cases
    DateSampleComponent.prototype.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var event = _a[_i];
                var currentDay = new Date(event.date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return event.status;
                }
            }
        }
        return '';
    };
    DateSampleComponent.prototype.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };
    DateSampleComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    DateSampleComponent.prototype.clear = function () {
        this.dt = void 0;
        this.dateDisabled = undefined;
    };
    DateSampleComponent.prototype.toggleMin = function () {
        this.dt = new Date(this.minDate.valueOf());
    };
    DateSampleComponent.prototype.ngOnInit = function () {
    };
    DateSampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-date-sample',
            template: __webpack_require__(818),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], DateSampleComponent);
    return DateSampleComponent;
}());
//# sourceMappingURL=date-sample.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdown-sample',
            template: __webpack_require__(819),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownSampleComponent);
    return DropdownSampleComponent;
}());
//# sourceMappingURL=dropdown-sample.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalSampleComponent = (function () {
    function ModalSampleComponent() {
    }
    ModalSampleComponent.prototype.ngOnInit = function () {
    };
    ModalSampleComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    ModalSampleComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["a" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["a" /* ModalDirective */]) === 'function' && _a) || Object)
    ], ModalSampleComponent.prototype, "childModal", void 0);
    ModalSampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-sample',
            template: __webpack_require__(820),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalSampleComponent);
    return ModalSampleComponent;
    var _a;
}());
//# sourceMappingURL=modal-sample.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationSampleComponent; });
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
    PaginationSampleComponent.prototype.page2Changed = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    PaginationSampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination-sample',
            template: __webpack_require__(821),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationSampleComponent);
    return PaginationSampleComponent;
}());
//# sourceMappingURL=pagination-sample.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popover-sample',
            template: __webpack_require__(822),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [])
    ], PopoverSampleComponent);
    return PopoverSampleComponent;
}());
//# sourceMappingURL=popover-sample.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSampleComponent; });
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
                max: value,
                type: types[index]
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-sample',
            template: __webpack_require__(823),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressSampleComponent);
    return ProgressSampleComponent;
}());
//# sourceMappingURL=progress-sample.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingSampleComponent; });
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
    ;
    RatingSampleComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    RatingSampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rating-sample',
            template: __webpack_require__(824),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [])
    ], RatingSampleComponent);
    return RatingSampleComponent;
}());
//# sourceMappingURL=rating-sample.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sortable-sample',
            template: __webpack_require__(825),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [])
    ], SortableSampleComponent);
    return SortableSampleComponent;
}());
//# sourceMappingURL=sortable-sample.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsSampleComponent; });
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
    TabsSampleComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    TabsSampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs-sample',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(826),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsSampleComponent);
    return TabsSampleComponent;
}());
//# sourceMappingURL=tabs-sample.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timepicker-sample',
            template: __webpack_require__(827),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], TimepickerSampleComponent);
    return TimepickerSampleComponent;
}());
//# sourceMappingURL=timepicker-sample.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipSampleComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip-sample',
            template: __webpack_require__(828),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipSampleComponent);
    return TooltipSampleComponent;
}());
//# sourceMappingURL=tooltip-sample.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadSampleComponent; });
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
            { id: 51, name: 'Wyoming', region: 'West' }];
    }
    TypeaheadSampleComponent.prototype.ngOnInit = function () {
    };
    TypeaheadSampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typeahead-sample',
            template: __webpack_require__(829),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [])
    ], TypeaheadSampleComponent);
    return TypeaheadSampleComponent;
}());
//# sourceMappingURL=typeahead-sample.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsElementsComponent; });
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
    }
    BsElementsComponent.prototype.ngOnInit = function () {
    };
    BsElementsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bs-elements',
            template: __webpack_require__(830),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [])
    ], BsElementsComponent);
    return BsElementsComponent;
}());
//# sourceMappingURL=bs-elements.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartingComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(831),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartingComponent);
    return ChartingComponent;
}());
//# sourceMappingURL=charting.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(832),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(833),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormsComponent);
    return FormsComponent;
}());
//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(834),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(839),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [])
    ], TablesComponent);
    return TablesComponent;
}());
//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(840),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarService; });
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    SidebarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SidebarService);
    return SidebarService;
    var _a;
}());
//# sourceMappingURL=sidebar.service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(843),
            styles: [__webpack_require__(785)]
        }), 
        __metadata('design:paramtypes', [])
    ], SignupComponent);
    return SignupComponent;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 559;


/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(701);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_module__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_module__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__ = __webpack_require__(688);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup_module__["a" /* SignupModule */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__["a" /* DashboardModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SB Admin BS 4 Angular2';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(811),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(681);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_components_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_sample_accordion_sample_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_sample_alert_sample_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button_sample_button_sample_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_sample_carousel_sample_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collapse_sample_collapse_sample_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__date_sample_date_sample_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dropdown_sample_dropdown_sample_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_sample_modal_sample_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pagination_sample_pagination_sample_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__popover_sample_popover_sample_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_sample_progress_sample_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rating_sample_rating_sample_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sortable_sample_sortable_sample_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tabs_sample_tabs_sample_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__timepicker_sample_timepicker_sample_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tooltip_sample_tooltip_sample_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__typeahead_sample_typeahead_sample_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var BsComponentModule = (function () {
    function BsComponentModule() {
    }
    BsComponentModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["c" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["d" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["e" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["f" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["g" /* DropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["h" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["i" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["j" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["k" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["l" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["m" /* SortableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["n" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["o" /* TimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["p" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__["q" /* TypeaheadModule */].forRoot(),
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
                __WEBPACK_IMPORTED_MODULE_12__modal_sample_modal_sample_component__["a" /* ModalSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pagination_sample_pagination_sample_component__["a" /* PaginationSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__popover_sample_popover_sample_component__["a" /* PopoverSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__progress_sample_progress_sample_component__["a" /* ProgressSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_16__rating_sample_rating_sample_component__["a" /* RatingSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sortable_sample_sortable_sample_component__["a" /* SortableSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__tabs_sample_tabs_sample_component__["a" /* TabsSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_19__timepicker_sample_timepicker_sample_component__["a" /* TimepickerSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_20__tooltip_sample_tooltip_sample_component__["a" /* TooltipSampleComponent */],
                __WEBPACK_IMPORTED_MODULE_21__typeahead_sample_typeahead_sample_component__["a" /* TypeaheadSampleComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BsComponentModule);
    return BsComponentModule;
}());
//# sourceMappingURL=bs-components.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_elements_component__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsElementsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BsElementsModule = (function () {
    function BsElementsModule() {
    }
    BsElementsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__bs_elements_component__["a" /* BsElementsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], BsElementsModule);
    return BsElementsModule;
}());
//# sourceMappingURL=bs-elements.module.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charting_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChartingModule = (function () {
    function ChartingModule() {
    }
    ChartingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__charting_component__["a" /* ChartingComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartingModule);
    return ChartingModule;
}());
//# sourceMappingURL=charting.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charting_charting_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tables_tables_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_forms_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_elements_bs_elements_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_grid_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_components_bs_components_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_components_accordion_sample_accordion_sample_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_components_alert_sample_alert_sample_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bs_components_button_sample_button_sample_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bs_components_carousel_sample_carousel_sample_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bs_components_collapse_sample_collapse_sample_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bs_components_date_sample_date_sample_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bs_components_dropdown_sample_dropdown_sample_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bs_components_modal_sample_modal_sample_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bs_components_pagination_sample_pagination_sample_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bs_components_popover_sample_popover_sample_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bs_components_progress_sample_progress_sample_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bs_components_rating_sample_rating_sample_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bs_components_sortable_sample_sortable_sample_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bs_components_tabs_sample_tabs_sample_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__bs_components_timepicker_sample_timepicker_sample_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__bs_components_tooltip_sample_tooltip_sample_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__bs_components_typeahead_sample_typeahead_sample_component__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var dashboardRoutes = [
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
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
                    { path: 'modal', component: __WEBPACK_IMPORTED_MODULE_17__bs_components_modal_sample_modal_sample_component__["a" /* ModalSampleComponent */] },
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(dashboardRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sidebar_sidebar_module__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_topnav_topnav_module__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charting_charting_module__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_tables_module__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_forms_module__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_elements_bs_elements_module__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_grid_module__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_components_bs_components_module__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_component__ = __webpack_require__(359);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
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
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_component__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormsModule = (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__forms_component__["a" /* FormsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FormsModule);
    return FormsModule;
}());
//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_component__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridModule = (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__grid_component__["a" /* GridComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], GridModule);
    return GridModule;
}());
//# sourceMappingURL=grid.module.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_alert__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["b" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["c" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["d" /* NotificationComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["b" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["c" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["d" /* NotificationComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_component__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TablesModule = (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tables_component__["a" /* TablesComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TablesModule);
    return TablesModule;
}());
//# sourceMappingURL=tables.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var loginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(loginRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_service__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(841),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_collapse__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_service__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_collapse__["a" /* CollapseModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sidebar_component__["a" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sidebar_component__["a" /* SidebarComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__sidebar_service__["a" /* SidebarService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarModule);
    return SidebarModule;
}());
//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(842),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [])
    ], TopnavComponent);
    return TopnavComponent;
}());
//# sourceMappingURL=topnav.component.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnav_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_dropdown__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_collapse__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopnavModule = (function () {
    function TopnavModule() {
    }
    TopnavModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_dropdown__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_collapse__["a" /* CollapseModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__topnav_component__["a" /* TopnavComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__topnav_component__["a" /* TopnavComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TopnavModule);
    return TopnavModule;
}());
//# sourceMappingURL=topnav.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var loginRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */] }
];
var SignupRoutingModule = (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(loginRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());
//# sourceMappingURL=signup-routing.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_routing_module__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_component__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__signup_routing_module__["a" /* SignupRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SignupModule);
    return SignupModule;
}());
//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 701:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"accordion-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"alert-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"bs-components.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"button-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"carousel-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"collapse-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"date-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"dropdown-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"modal-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"pagination-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"popover-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"progress-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"rating-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, " ", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"sortable-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tabs-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"timepicker-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tooltip-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"typeahead-sample.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"bs-elements.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"charting.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".container {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 576px) {\n    .container {\n      width: 540px;\n      max-width: 100%; } }\n  @media (min-width: 768px) {\n    .container {\n      width: 720px;\n      max-width: 100%; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 960px;\n      max-width: 100%; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1140px;\n      max-width: 100%; } }\n\n.container-fluid {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 576px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 768px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 992px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 1200px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto; }\n\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n.pull-0 {\n  right: auto; }\n\n.pull-1 {\n  right: 8.33333%; }\n\n.pull-2 {\n  right: 16.66667%; }\n\n.pull-3 {\n  right: 25%; }\n\n.pull-4 {\n  right: 33.33333%; }\n\n.pull-5 {\n  right: 41.66667%; }\n\n.pull-6 {\n  right: 50%; }\n\n.pull-7 {\n  right: 58.33333%; }\n\n.pull-8 {\n  right: 66.66667%; }\n\n.pull-9 {\n  right: 75%; }\n\n.pull-10 {\n  right: 83.33333%; }\n\n.pull-11 {\n  right: 91.66667%; }\n\n.pull-12 {\n  right: 100%; }\n\n.push-0 {\n  left: auto; }\n\n.push-1 {\n  left: 8.33333%; }\n\n.push-2 {\n  left: 16.66667%; }\n\n.push-3 {\n  left: 25%; }\n\n.push-4 {\n  left: 33.33333%; }\n\n.push-5 {\n  left: 41.66667%; }\n\n.push-6 {\n  left: 50%; }\n\n.push-7 {\n  left: 58.33333%; }\n\n.push-8 {\n  left: 66.66667%; }\n\n.push-9 {\n  left: 75%; }\n\n.push-10 {\n  left: 83.33333%; }\n\n.push-11 {\n  left: 91.66667%; }\n\n.push-12 {\n  left: 100%; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-sm-0 {\n    right: auto; }\n  .pull-sm-1 {\n    right: 8.33333%; }\n  .pull-sm-2 {\n    right: 16.66667%; }\n  .pull-sm-3 {\n    right: 25%; }\n  .pull-sm-4 {\n    right: 33.33333%; }\n  .pull-sm-5 {\n    right: 41.66667%; }\n  .pull-sm-6 {\n    right: 50%; }\n  .pull-sm-7 {\n    right: 58.33333%; }\n  .pull-sm-8 {\n    right: 66.66667%; }\n  .pull-sm-9 {\n    right: 75%; }\n  .pull-sm-10 {\n    right: 83.33333%; }\n  .pull-sm-11 {\n    right: 91.66667%; }\n  .pull-sm-12 {\n    right: 100%; }\n  .push-sm-0 {\n    left: auto; }\n  .push-sm-1 {\n    left: 8.33333%; }\n  .push-sm-2 {\n    left: 16.66667%; }\n  .push-sm-3 {\n    left: 25%; }\n  .push-sm-4 {\n    left: 33.33333%; }\n  .push-sm-5 {\n    left: 41.66667%; }\n  .push-sm-6 {\n    left: 50%; }\n  .push-sm-7 {\n    left: 58.33333%; }\n  .push-sm-8 {\n    left: 66.66667%; }\n  .push-sm-9 {\n    left: 75%; }\n  .push-sm-10 {\n    left: 83.33333%; }\n  .push-sm-11 {\n    left: 91.66667%; }\n  .push-sm-12 {\n    left: 100%; }\n  .offset-sm-0 {\n    margin-left: 0%; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-md-0 {\n    right: auto; }\n  .pull-md-1 {\n    right: 8.33333%; }\n  .pull-md-2 {\n    right: 16.66667%; }\n  .pull-md-3 {\n    right: 25%; }\n  .pull-md-4 {\n    right: 33.33333%; }\n  .pull-md-5 {\n    right: 41.66667%; }\n  .pull-md-6 {\n    right: 50%; }\n  .pull-md-7 {\n    right: 58.33333%; }\n  .pull-md-8 {\n    right: 66.66667%; }\n  .pull-md-9 {\n    right: 75%; }\n  .pull-md-10 {\n    right: 83.33333%; }\n  .pull-md-11 {\n    right: 91.66667%; }\n  .pull-md-12 {\n    right: 100%; }\n  .push-md-0 {\n    left: auto; }\n  .push-md-1 {\n    left: 8.33333%; }\n  .push-md-2 {\n    left: 16.66667%; }\n  .push-md-3 {\n    left: 25%; }\n  .push-md-4 {\n    left: 33.33333%; }\n  .push-md-5 {\n    left: 41.66667%; }\n  .push-md-6 {\n    left: 50%; }\n  .push-md-7 {\n    left: 58.33333%; }\n  .push-md-8 {\n    left: 66.66667%; }\n  .push-md-9 {\n    left: 75%; }\n  .push-md-10 {\n    left: 83.33333%; }\n  .push-md-11 {\n    left: 91.66667%; }\n  .push-md-12 {\n    left: 100%; }\n  .offset-md-0 {\n    margin-left: 0%; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-lg-0 {\n    right: auto; }\n  .pull-lg-1 {\n    right: 8.33333%; }\n  .pull-lg-2 {\n    right: 16.66667%; }\n  .pull-lg-3 {\n    right: 25%; }\n  .pull-lg-4 {\n    right: 33.33333%; }\n  .pull-lg-5 {\n    right: 41.66667%; }\n  .pull-lg-6 {\n    right: 50%; }\n  .pull-lg-7 {\n    right: 58.33333%; }\n  .pull-lg-8 {\n    right: 66.66667%; }\n  .pull-lg-9 {\n    right: 75%; }\n  .pull-lg-10 {\n    right: 83.33333%; }\n  .pull-lg-11 {\n    right: 91.66667%; }\n  .pull-lg-12 {\n    right: 100%; }\n  .push-lg-0 {\n    left: auto; }\n  .push-lg-1 {\n    left: 8.33333%; }\n  .push-lg-2 {\n    left: 16.66667%; }\n  .push-lg-3 {\n    left: 25%; }\n  .push-lg-4 {\n    left: 33.33333%; }\n  .push-lg-5 {\n    left: 41.66667%; }\n  .push-lg-6 {\n    left: 50%; }\n  .push-lg-7 {\n    left: 58.33333%; }\n  .push-lg-8 {\n    left: 66.66667%; }\n  .push-lg-9 {\n    left: 75%; }\n  .push-lg-10 {\n    left: 83.33333%; }\n  .push-lg-11 {\n    left: 91.66667%; }\n  .push-lg-12 {\n    left: 100%; }\n  .offset-lg-0 {\n    margin-left: 0%; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-xl-0 {\n    right: auto; }\n  .pull-xl-1 {\n    right: 8.33333%; }\n  .pull-xl-2 {\n    right: 16.66667%; }\n  .pull-xl-3 {\n    right: 25%; }\n  .pull-xl-4 {\n    right: 33.33333%; }\n  .pull-xl-5 {\n    right: 41.66667%; }\n  .pull-xl-6 {\n    right: 50%; }\n  .pull-xl-7 {\n    right: 58.33333%; }\n  .pull-xl-8 {\n    right: 66.66667%; }\n  .pull-xl-9 {\n    right: 75%; }\n  .pull-xl-10 {\n    right: 83.33333%; }\n  .pull-xl-11 {\n    right: 91.66667%; }\n  .pull-xl-12 {\n    right: 100%; }\n  .push-xl-0 {\n    left: auto; }\n  .push-xl-1 {\n    left: 8.33333%; }\n  .push-xl-2 {\n    left: 16.66667%; }\n  .push-xl-3 {\n    left: 25%; }\n  .push-xl-4 {\n    left: 33.33333%; }\n  .push-xl-5 {\n    left: 41.66667%; }\n  .push-xl-6 {\n    left: 50%; }\n  .push-xl-7 {\n    left: 58.33333%; }\n  .push-xl-8 {\n    left: 66.66667%; }\n  .push-xl-9 {\n    left: 75%; }\n  .push-xl-10 {\n    left: 83.33333%; }\n  .push-xl-11 {\n    left: 91.66667%; }\n  .push-xl-12 {\n    left: 100%; }\n  .offset-xl-0 {\n    margin-left: 0%; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.main-container {\n  margin-left: 225px;\n  margin-top: 60px;\n  margin-right: 0;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  position: relative; }\n  @media (max-width: 991px) {\n    .main-container {\n      margin-left: 0; } }\n", "", {"version":3,"sources":["/./src/app/dashboard/node_modules/bootstrap/scss/_grid.scss","/./src/app/dashboard/node_modules/bootstrap/scss/mixins/_grid.scss","/./src/app/dashboard/node_modules/bootstrap/scss/mixins/_breakpoints.scss","/./src/app/dashboard/node_modules/bootstrap/scss/_variables.scss","/./src/app/dashboard/node_modules/bootstrap/scss/mixins/_grid-framework.scss","/./src/app/dashboard/src/app/dashboard/dashboard.component.scss"],"names":[],"mappings":"AAKE;ECAA,mBAAkB;EAClB,kBAAiB;EACjB,mBAAkB;EAKd,oBAA4B;EAC5B,mBAA4B,EDL/B;EEgDC;IFnDF;MCOI,oBAA4B;MAC5B,mBAA4B,EDL/B,EAAA;EEgDC;IFnDF;MCOI,oBAA4B;MAC5B,mBAA4B,EDL/B,EAAA;EEgDC;IFnDF;MCOI,oBAA4B;MAC5B,mBAA4B,EDL/B,EAAA;EEgDC;IFnDF;MCOI,oBAA4B;MAC5B,mBAA4B,EDL/B,EAAA;EEgDC;IFnDF;MCkBI,aEqMK;MFpML,gBAAe,EDhBlB,EAAA;EEgDC;IFnDF;MCkBI,aEsMK;MFrML,gBAAe,EDhBlB,EAAA;EEgDC;IFnDF;MCkBI,aEuMK;MFtML,gBAAe,EDhBlB,EAAA;EEgDC;IFnDF;MCkBI,cEwMM;MFvMN,gBAAe,EDhBlB,EAAA;;AASD;ECZA,mBAAkB;EAClB,kBAAiB;EACjB,mBAAkB;EAKd,oBAA4B;EAC5B,mBAA4B,EDM/B;EEqCC;IFvCF;MCLI,oBAA4B;MAC5B,mBAA4B,EDM/B,EAAA;EEqCC;IFvCF;MCLI,oBAA4B;MAC5B,mBAA4B,EDM/B,EAAA;EEqCC;IFvCF;MCLI,oBAA4B;MAC5B,mBAA4B,EDM/B,EAAA;EEqCC;IFvCF;MCLI,oBAA4B;MAC5B,mBAA4B,EDM/B,EAAA;;AAQD;ECaA,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAe;MAAf,gBAAe;EAKX,oBAA4B;EAC5B,mBAA4B,EDlB/B;EE2BC;IF7BF;MCmBI,oBAA4B;MAC5B,mBAA4B,EDlB/B,EAAA;EE2BC;IF7BF;MCmBI,oBAA4B;MAC5B,mBAA4B,EDlB/B,EAAA;EE2BC;IF7BF;MCmBI,oBAA4B;MAC5B,mBAA4B,EDlB/B,EAAA;EE2BC;IF7BF;MCmBI,oBAA4B;MAC5B,mBAA4B,EDlB/B,EAAA;;AAID;EACE,gBAAe;EACf,eAAc,EAOf;EATD;;IAMI,iBAAgB;IAChB,gBAAe,EAChB;;AIlCH;EACE,mBAAkB;EAClB,YAAW;EACX,gBAAe;EHuBb,oBAA4B;EAC5B,mBAA4B,EGrB/B;EF2CC;IEjDF;MH0BI,oBAA4B;MAC5B,mBAA4B,EGrB/B,EAAA;EF2CC;IEjDF;MH0BI,oBAA4B;MAC5B,mBAA4B,EGrB/B,EAAA;EF2CC;IEjDF;MH0BI,oBAA4B;MAC5B,mBAA4B,EGrB/B,EAAA;EF2CC;IEjDF;MH0BI,oBAA4B;MAC5B,mBAA4B,EGrB/B,EAAA;;AAiBG;EACE,2BAAa;MAAb,cAAa;EACb,oBAAY;MAAZ,qBAAY;UAAZ,aAAY;EACZ,gBAAe,EAChB;;AACD;EACE,oBAAc;MAAd,mBAAc;UAAd,eAAc;EACd,YAAW,EACZ;;AAGC;EH6BN,oBAAsC;MAAtC,uBAAsC;UAAtC,mBAAsC;EAKtC,oBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,wBAAsC;UAAtC,oBAAsC;EAKtC,qBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,kBAAsC;UAAtC,cAAsC;EAKtC,eAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,wBAAsC;UAAtC,oBAAsC;EAKtC,qBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,wBAAsC;UAAtC,oBAAsC;EAKtC,qBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,kBAAsC;UAAtC,cAAsC;EAKtC,eAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,wBAAsC;UAAtC,oBAAsC;EAKtC,qBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,wBAAsC;UAAtC,oBAAsC;EAKtC,qBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,kBAAsC;UAAtC,cAAsC;EAKtC,eAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,wBAAsC;UAAtC,oBAAsC;EAKtC,qBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,wBAAsC;UAAtC,oBAAsC;EAKtC,qBAAuC,EGhChC;;AAFD;EH6BN,oBAAsC;MAAtC,mBAAsC;UAAtC,eAAsC;EAKtC,gBAAuC,EGhChC;;AAKC;EHuCR,YAAuD,EGrC9C;;AAFD;EHuCR,gBAAiD,EGrCxC;;AAFD;EHuCR,iBAAiD,EGrCxC;;AAFD;EHuCR,WAAiD,EGrCxC;;AAFD;EHuCR,iBAAiD,EGrCxC;;AAFD;EHuCR,iBAAiD,EGrCxC;;AAFD;EHuCR,WAAiD,EGrCxC;;AAFD;EHuCR,iBAAiD,EGrCxC;;AAFD;EHuCR,iBAAiD,EGrCxC;;AAFD;EHuCR,WAAiD,EGrCxC;;AAFD;EHuCR,iBAAiD,EGrCxC;;AAFD;EHuCR,iBAAiD,EGrCxC;;AAFD;EHuCR,YAAiD,EGrCxC;;AAFD;EHmCR,WAAsD,EGjC7C;;AAFD;EHmCR,eAAgD,EGjCvC;;AAFD;EHmCR,gBAAgD,EGjCvC;;AAFD;EHmCR,UAAgD,EGjCvC;;AAFD;EHmCR,gBAAgD,EGjCvC;;AAFD;EHmCR,gBAAgD,EGjCvC;;AAFD;EHmCR,UAAgD,EGjCvC;;AAFD;EHmCR,gBAAgD,EGjCvC;;AAFD;EHmCR,gBAAgD,EGjCvC;;AAFD;EHmCR,UAAgD,EGjCvC;;AAFD;EHmCR,gBAAgD,EGjCvC;;AAFD;EHmCR,gBAAgD,EGjCvC;;AAFD;EHmCR,WAAgD,EGjCvC;;AAOD;EHsBR,sBAAyC,EGpBhC;;AAFD;EHsBR,uBAAyC,EGpBhC;;AAFD;EHsBR,iBAAyC,EGpBhC;;AAFD;EHsBR,uBAAyC,EGpBhC;;AAFD;EHsBR,uBAAyC,EGpBhC;;AAFD;EHsBR,iBAAyC,EGpBhC;;AAFD;EHsBR,uBAAyC,EGpBhC;;AAFD;EHsBR,uBAAyC,EGpBhC;;AAFD;EHsBR,iBAAyC,EGpBhC;;AAFD;EHsBR,uBAAyC,EGpBhC;;AAFD;EHsBR,uBAAyC,EGpBhC;;AFHP;EE1BE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW,EACZ;EAGC;IH6BN,oBAAsC;QAAtC,uBAAsC;YAAtC,mBAAsC;IAKtC,oBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAKtC,gBAAuC,EGhChC;EAKC;IHuCR,YAAuD,EGrC9C;EAFD;IHuCR,gBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,YAAiD,EGrCxC;EAFD;IHmCR,WAAsD,EGjC7C;EAFD;IHmCR,eAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,WAAgD,EGjCvC;EAOD;IHsBR,gBAAyC,EGpBhC;EAFD;IHsBR,sBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC,EAAA;;AFHP;EE1BE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW,EACZ;EAGC;IH6BN,oBAAsC;QAAtC,uBAAsC;YAAtC,mBAAsC;IAKtC,oBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAKtC,gBAAuC,EGhChC;EAKC;IHuCR,YAAuD,EGrC9C;EAFD;IHuCR,gBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,YAAiD,EGrCxC;EAFD;IHmCR,WAAsD,EGjC7C;EAFD;IHmCR,eAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,WAAgD,EGjCvC;EAOD;IHsBR,gBAAyC,EGpBhC;EAFD;IHsBR,sBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC,EAAA;;AFHP;EE1BE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW,EACZ;EAGC;IH6BN,oBAAsC;QAAtC,uBAAsC;YAAtC,mBAAsC;IAKtC,oBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAKtC,gBAAuC,EGhChC;EAKC;IHuCR,YAAuD,EGrC9C;EAFD;IHuCR,gBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,YAAiD,EGrCxC;EAFD;IHmCR,WAAsD,EGjC7C;EAFD;IHmCR,eAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,WAAgD,EGjCvC;EAOD;IHsBR,gBAAyC,EGpBhC;EAFD;IHsBR,sBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC,EAAA;;AFHP;EE1BE;IACE,2BAAa;QAAb,cAAa;IACb,oBAAY;QAAZ,qBAAY;YAAZ,aAAY;IACZ,gBAAe,EAChB;EACD;IACE,oBAAc;QAAd,mBAAc;YAAd,eAAc;IACd,YAAW,EACZ;EAGC;IH6BN,oBAAsC;QAAtC,uBAAsC;YAAtC,mBAAsC;IAKtC,oBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,kBAAsC;YAAtC,cAAsC;IAKtC,eAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,wBAAsC;YAAtC,oBAAsC;IAKtC,qBAAuC,EGhChC;EAFD;IH6BN,oBAAsC;QAAtC,mBAAsC;YAAtC,eAAsC;IAKtC,gBAAuC,EGhChC;EAKC;IHuCR,YAAuD,EGrC9C;EAFD;IHuCR,gBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,WAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,iBAAiD,EGrCxC;EAFD;IHuCR,YAAiD,EGrCxC;EAFD;IHmCR,WAAsD,EGjC7C;EAFD;IHmCR,eAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,UAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,gBAAgD,EGjCvC;EAFD;IHmCR,WAAgD,EGjCvC;EAOD;IHsBR,gBAAyC,EGpBhC;EAFD;IHsBR,sBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,iBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC;EAFD;IHsBR,uBAAyC,EGpBhC,EAAA;;ACvDX;EAII,mBAAkB;EAClB,iBAAgB;EAChB,gBAAe;EACf,uBAAsB;EACtB,mBAAkB;EAClB,mBAAkB,EACrB;EHuDG;IGjEJ;MAEQ,eAAc,EAQrB,EAAA","file":"dashboard.component.scss","sourcesContent":["// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  .container {\n    @include make-container();\n    @include make-container-max-widths();\n  }\n}\n\n// Fluid container\n//\n// Utilizes the mixin meant for fixed width containers, but without any defined\n// width for fluid, full width layouts.\n\n@if $enable-grid-classes {\n  .container-fluid {\n    @include make-container();\n  }\n}\n\n// Row\n//\n// Rows contain and clear the floats of your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n  }\n\n  // Remove the negative margin from default .row, then the horizontal padding\n  // from all immediate children columns (to prevent runaway style inheritance).\n  .no-gutters {\n    margin-right: 0;\n    margin-left: 0;\n\n    > .col,\n    > [class*=\"col-\"] {\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n}\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","/// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-container($gutters: $grid-gutter-widths) {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n\n  @each $breakpoint in map-keys($gutters) {\n    @include media-breakpoint-up($breakpoint) {\n      $gutter: map-get($gutters, $breakpoint);\n      padding-right: ($gutter / 2);\n      padding-left:  ($gutter / 2);\n    }\n  }\n}\n\n\n// For each breakpoint, define the maximum width of the container in a media query\n@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint, $container-max-width in $max-widths {\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      width: $container-max-width;\n      max-width: 100%;\n    }\n  }\n}\n\n@mixin make-gutters($gutters: $grid-gutter-widths) {\n  @each $breakpoint in map-keys($gutters) {\n    @include media-breakpoint-up($breakpoint) {\n      $gutter: map-get($gutters, $breakpoint);\n      padding-right: ($gutter / 2);\n      padding-left:  ($gutter / 2);\n    }\n  }\n}\n\n@mixin make-row($gutters: $grid-gutter-widths) {\n  display: flex;\n  flex-wrap: wrap;\n\n  @each $breakpoint in map-keys($gutters) {\n    @include media-breakpoint-up($breakpoint) {\n      $gutter: map-get($gutters, $breakpoint);\n      margin-right: ($gutter / -2);\n      margin-left:  ($gutter / -2);\n    }\n  }\n}\n\n@mixin make-col-ready($gutters: $grid-gutter-widths) {\n  position: relative;\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we use `flex` values\n  // later on to override this initial width.\n  width: 100%;\n  min-height: 1px; // Prevent collapsing\n\n  @each $breakpoint in map-keys($gutters) {\n    @include media-breakpoint-up($breakpoint) {\n      $gutter: map-get($gutters, $breakpoint);\n      padding-right: ($gutter / 2);\n      padding-left:  ($gutter / 2);\n    }\n  }\n}\n\n@mixin make-col($size, $columns: $grid-columns) {\n  flex: 0 0 percentage($size / $columns);\n  // width: percentage($size / $columns);\n  // Add a `max-width` to ensure content within each column does not blow out\n  // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari\n  // do not appear to require this.\n  max-width: percentage($size / $columns);\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  margin-left: percentage($size / $columns);\n}\n\n@mixin make-col-push($size, $columns: $grid-columns) {\n  left: if($size > 0, percentage($size / $columns), auto);\n}\n\n@mixin make-col-pull($size, $columns: $grid-columns) {\n  right: if($size > 0, percentage($size / $columns), auto);\n}\n\n@mixin make-col-modifier($type, $size, $columns) {\n  // Work around the lack of dynamic mixin @include support (https://github.com/sass/sass/issues/626)\n  @if $type == push {\n    @include make-col-push($size, $columns);\n  } @else if $type == pull {\n    @include make-col-pull($size, $columns);\n  } @else if $type == offset {\n    @include make-col-offset($size, $columns);\n  }\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.1.\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px))\n//    767px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - 1px, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  @include media-breakpoint-up($lower, $breakpoints) {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  @include media-breakpoint-between($name, $name, $breakpoints) {\n    @content;\n  }\n}\n","// Variables\n//\n// Copy settings from this file into the provided `_custom.scss` to override\n// the Bootstrap defaults without modifying key, versioned files.\n\n\n// Table of Contents\n//\n// Colors\n// Options\n// Spacing\n// Body\n// Links\n// Grid breakpoints\n// Grid containers\n// Grid columns\n// Fonts\n// Components\n// Tables\n// Buttons\n// Forms\n// Dropdowns\n// Z-index master list\n// Navbar\n// Navs\n// Pagination\n// Jumbotron\n// Form states and alerts\n// Cards\n// Tooltips\n// Popovers\n// Badges\n// Modals\n// Alerts\n// Progress bars\n// List group\n// Image thumbnails\n// Figures\n// Breadcrumbs\n// Carousel\n// Close\n// Code\n\n@mixin _assert-ascending($map, $map-name) {\n  $prev-key: null;\n  $prev-num: null;\n  @each $key, $num in $map {\n    @if $prev-num == null {\n      // Do nothing\n    } @else if not comparable($prev-num, $num) {\n      @warn \"Potentially invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} whose unit makes it incomparable to #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    } @else if $prev-num >= $num {\n      @warn \"Invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} which isn't greater than #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    }\n    $prev-key: $key;\n    $prev-num: $num;\n  }\n}\n\n// Replace `$search` with `$replace` in `$string`\n// @author Hugo Giraudel\n// @param {String} $string - Initial string\n// @param {String} $search - Substring to replace\n// @param {String} $replace ('') - New value\n// @return {String} - Updated string\n@function str-replace($string, $search, $replace: \"\") {\n  $index: str-index($string, $search);\n\n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n\n  @return $string;\n}\n\n@mixin _assert-starts-at-zero($map) {\n  $values: map-values($map);\n  $first-value: nth($values, 1);\n  @if $first-value != 0 {\n    @warn \"First breakpoint in `$grid-breakpoints` must start at 0, but starts at #{$first-value}.\";\n  }\n}\n\n\n// General variable structure\n//\n// Variable format should follow the `$component-modifier-state-property` order.\n\n\n// Colors\n//\n// Grayscale and brand colors for use across Bootstrap.\n\n// Start with assigning color names to specific hex values.\n$white:  #fff !default;\n$black:  #000 !default;\n$red:    #d9534f !default;\n$orange: #f0ad4e !default;\n$yellow: #ffd500 !default;\n$green:  #5cb85c !default;\n$blue:   #0275d8 !default;\n$teal:   #5bc0de !default;\n$pink:   #ff5b77 !default;\n$purple: #613d7c !default;\n\n// Create grayscale\n$gray-dark:                 #292b2c !default;\n$gray:                      #464a4c !default;\n$gray-light:                #636c72 !default;\n$gray-lighter:              #eceeef !default;\n$gray-lightest:             #f7f7f9 !default;\n\n// Reassign color vars to semantic color scheme\n$brand-primary:             $blue !default;\n$brand-success:             $green !default;\n$brand-info:                $teal !default;\n$brand-warning:             $orange !default;\n$brand-danger:              $red !default;\n$brand-inverse:             $gray-dark !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-rounded:            true !default;\n$enable-shadows:            false !default;\n$enable-gradients:          false !default;\n$enable-transitions:        true !default;\n$enable-hover-media-query:  false !default;\n$enable-grid-classes:       true !default;\n$enable-print-styles:       true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer:   1rem !default;\n$spacer-x: $spacer !default;\n$spacer-y: $spacer !default;\n$spacers: (\n  0: (\n    x: 0,\n    y: 0\n  ),\n  1: (\n    x: ($spacer-x * .25),\n    y: ($spacer-y * .25)\n  ),\n  2: (\n    x: ($spacer-x * .5),\n    y: ($spacer-y * .5)\n  ),\n  3: (\n    x: $spacer-x,\n    y: $spacer-y\n  ),\n  4: (\n    x: ($spacer-x * 1.5),\n    y: ($spacer-y * 1.5)\n  ),\n  5: (\n    x: ($spacer-x * 3),\n    y: ($spacer-y * 3)\n  )\n) !default;\n$border-width: 1px !default;\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: (\n  25: 25%,\n  50: 50%,\n  75: 75%,\n  100: 100%\n) !default;\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:       $white !default;\n$body-color:    $gray-dark !default;\n$inverse-bg:    $gray-dark !default;\n$inverse-color: $gray-lighter !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:            $brand-primary !default;\n$link-decoration:       none !default;\n$link-hover-color:      darken($link-color, 15%) !default;\n$link-hover-decoration: underline !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints);\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:               12 !default;\n$grid-gutter-width-base:     30px !default;\n$grid-gutter-widths: (\n  xs: $grid-gutter-width-base,\n  sm: $grid-gutter-width-base,\n  md: $grid-gutter-width-base,\n  lg: $grid-gutter-width-base,\n  xl: $grid-gutter-width-base\n) !default;\n\n// Fonts\n//\n// Font, line-height, and color for body text, headings, and more.\n\n$font-family-sans-serif: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif !default;\n$font-family-serif:      Georgia, \"Times New Roman\", Times, serif !default;\n$font-family-monospace:  Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:       $font-family-sans-serif !default;\n\n$font-size-base: 1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:   1.25rem !default;\n$font-size-sm:   .875rem !default;\n$font-size-xs:   .75rem !default;\n\n$font-weight-normal: normal !default;\n$font-weight-bold: bold !default;\n\n$font-weight-base: $font-weight-normal !default;\n$line-height-base: 1.5 !default;\n\n$font-size-h1: 2.5rem !default;\n$font-size-h2: 2rem !default;\n$font-size-h3: 1.75rem !default;\n$font-size-h4: 1.5rem !default;\n$font-size-h5: 1.25rem !default;\n$font-size-h6: 1rem !default;\n\n$headings-margin-bottom: ($spacer / 2) !default;\n$headings-font-family:   inherit !default;\n$headings-font-weight:   500 !default;\n$headings-line-height:   1.1 !default;\n$headings-color:         inherit !default;\n\n$display1-size: 6rem !default;\n$display2-size: 5.5rem !default;\n$display3-size: 4.5rem !default;\n$display4-size: 3.5rem !default;\n\n$display1-weight:     300 !default;\n$display2-weight:     300 !default;\n$display3-weight:     300 !default;\n$display4-weight:     300 !default;\n$display-line-height: $headings-line-height !default;\n\n$lead-font-size:   1.25rem !default;\n$lead-font-weight: 300 !default;\n\n$small-font-size: 80% !default;\n\n$text-muted: $gray-light !default;\n\n$abbr-border-color: $gray-light !default;\n\n$blockquote-small-color:  $gray-light !default;\n$blockquote-font-size:    ($font-size-base * 1.25) !default;\n$blockquote-border-color: $gray-lighter !default;\n$blockquote-border-width: .25rem !default;\n\n$hr-border-color: rgba($black,.1) !default;\n$hr-border-width: $border-width !default;\n\n$mark-padding: .2em !default;\n\n$dt-font-weight: $font-weight-bold !default;\n\n$kbd-box-shadow:         inset 0 -.1rem 0 rgba($black,.25) !default;\n$nested-kbd-font-weight: $font-weight-bold !default;\n\n$list-inline-padding: 5px !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:         (4 / 3) !default;\n$line-height-sm:         1.5 !default;\n\n$border-radius:          .25rem !default;\n$border-radius-lg:       .3rem !default;\n$border-radius-sm:       .2rem !default;\n\n$component-active-color: $white !default;\n$component-active-bg:    $brand-primary !default;\n\n$caret-width:            .3em !default;\n\n$transition-base:        all .2s ease-in-out !default;\n$transition-fade:        opacity .15s linear !default;\n$transition-collapse:    height .35s ease !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:            .75rem !default;\n$table-sm-cell-padding:         .3rem !default;\n\n$table-bg:                      transparent !default;\n\n$table-inverse-bg:              $gray-dark !default;\n$table-inverse-color:           $body-bg !default;\n\n$table-bg-accent:               rgba($black,.05) !default;\n$table-bg-hover:                rgba($black,.075) !default;\n$table-bg-active:               $table-bg-hover !default;\n\n$table-head-bg:                 $gray-lighter !default;\n$table-head-color:              $gray !default;\n\n$table-border-width:            $border-width !default;\n$table-border-color:            $gray-lighter !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background and border color.\n\n$btn-padding-x:                  1rem !default;\n$btn-padding-y:                  .5rem !default;\n$btn-line-height:                1.25 !default;\n$btn-font-weight:                $font-weight-normal !default;\n$btn-box-shadow:                 inset 0 1px 0 rgba($white,.15), 0 1px 1px rgba($black,.075) !default;\n$btn-focus-box-shadow:           0 0 0 2px rgba($brand-primary, .25) !default;\n$btn-active-box-shadow:          inset 0 3px 5px rgba($black,.125) !default;\n\n$btn-primary-color:              $white !default;\n$btn-primary-bg:                 $brand-primary !default;\n$btn-primary-border:             $btn-primary-bg !default;\n\n$btn-secondary-color:            $gray-dark !default;\n$btn-secondary-bg:               $white !default;\n$btn-secondary-border:           #ccc !default;\n\n$btn-info-color:                 $white !default;\n$btn-info-bg:                    $brand-info !default;\n$btn-info-border:                $btn-info-bg !default;\n\n$btn-success-color:              $white !default;\n$btn-success-bg:                 $brand-success !default;\n$btn-success-border:             $btn-success-bg !default;\n\n$btn-warning-color:              $white !default;\n$btn-warning-bg:                 $brand-warning !default;\n$btn-warning-border:             $btn-warning-bg !default;\n\n$btn-danger-color:               $white !default;\n$btn-danger-bg:                  $brand-danger !default;\n$btn-danger-border:              $btn-danger-bg !default;\n\n$btn-link-disabled-color:        $gray-light !default;\n\n$btn-padding-x-sm:               .5rem !default;\n$btn-padding-y-sm:               .25rem !default;\n\n$btn-padding-x-lg:               1.5rem !default;\n$btn-padding-y-lg:               .75rem !default;\n\n$btn-block-spacing-y:            .5rem !default;\n$btn-toolbar-margin:             .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:              $border-radius !default;\n$btn-border-radius-lg:           $border-radius-lg !default;\n$btn-border-radius-sm:           $border-radius-sm !default;\n\n$btn-transition:                 all .2s ease-in-out !default;\n\n\n// Forms\n\n$input-padding-x:                .75rem !default;\n$input-padding-y:                .5rem !default;\n$input-line-height:              1.25 !default;\n\n$input-bg:                       $white !default;\n$input-bg-disabled:              $gray-lighter !default;\n\n$input-color:                    $gray !default;\n$input-border-color:             rgba($black,.15) !default;\n$input-btn-border-width:         $border-width !default; // For form controls and buttons\n$input-box-shadow:               inset 0 1px 1px rgba($black,.075) !default;\n\n$input-border-radius:            $border-radius !default;\n$input-border-radius-lg:         $border-radius-lg !default;\n$input-border-radius-sm:         $border-radius-sm !default;\n\n$input-bg-focus:                 $input-bg !default;\n$input-border-focus:             lighten($brand-primary, 25%) !default;\n$input-box-shadow-focus:         $input-box-shadow, rgba($input-border-focus, .6) !default;\n$input-color-focus:              $input-color !default;\n\n$input-color-placeholder:        $gray-light !default;\n\n$input-padding-x-sm:             .5rem !default;\n$input-padding-y-sm:             .25rem !default;\n\n$input-padding-x-lg:             1.5rem !default;\n$input-padding-y-lg:             .75rem !default;\n\n$input-height:                   (($font-size-base * $input-line-height) + ($input-padding-y * 2)) !default;\n$input-height-lg:                (($font-size-lg * $line-height-lg) + ($input-padding-y-lg * 2)) !default;\n$input-height-sm:                (($font-size-sm * $line-height-sm) + ($input-padding-y-sm * 2)) !default;\n\n$input-transition:               border-color ease-in-out .15s, box-shadow ease-in-out .15s !default;\n\n$form-text-margin-top:     .25rem !default;\n$form-feedback-margin-top: $form-text-margin-top !default;\n\n$form-check-margin-bottom:  .5rem !default;\n$form-check-input-gutter:   1.25rem !default;\n$form-check-input-margin-y: .25rem !default;\n$form-check-input-margin-x: .25rem !default;\n\n$form-check-inline-margin-x: .75rem !default;\n\n$form-group-margin-bottom:       $spacer-y !default;\n\n$input-group-addon-bg:           $gray-lighter !default;\n$input-group-addon-border-color: $input-border-color !default;\n\n$cursor-disabled:                not-allowed !default;\n\n$custom-control-gutter:   1.5rem !default;\n$custom-control-spacer-x: 1rem !default;\n$custom-control-spacer-y: .25rem !default;\n\n$custom-control-indicator-size:       1rem !default;\n$custom-control-indicator-margin-y:   (($line-height-base * 1rem) - $custom-control-indicator-size) / -2 !default;\n$custom-control-indicator-bg:         #ddd !default;\n$custom-control-indicator-bg-size:    50% 50% !default;\n$custom-control-indicator-box-shadow: inset 0 .25rem .25rem rgba($black,.1) !default;\n\n$custom-control-disabled-cursor:             $cursor-disabled !default;\n$custom-control-disabled-indicator-bg:       $gray-lighter !default;\n$custom-control-disabled-description-color:  $gray-light !default;\n\n$custom-control-checked-indicator-color:      $white !default;\n$custom-control-checked-indicator-bg:         $brand-primary !default;\n$custom-control-checked-indicator-box-shadow: none !default;\n\n$custom-control-focus-indicator-box-shadow: 0 0 0 1px $body-bg, 0 0 0 3px $brand-primary !default;\n\n$custom-control-active-indicator-color:      $white !default;\n$custom-control-active-indicator-bg:         lighten($brand-primary, 35%) !default;\n$custom-control-active-indicator-box-shadow: none !default;\n\n$custom-checkbox-radius: $border-radius !default;\n$custom-checkbox-checked-icon: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$custom-control-checked-indicator-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-checkbox-indeterminate-bg: $brand-primary !default;\n$custom-checkbox-indeterminate-indicator-color: $custom-control-checked-indicator-color !default;\n$custom-checkbox-indeterminate-icon: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#{$custom-checkbox-indeterminate-indicator-color}' d='M0 2h4'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-checkbox-indeterminate-box-shadow: none !default;\n\n$custom-radio-radius: 50% !default;\n$custom-radio-checked-icon: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#{$custom-control-checked-indicator-color}'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-select-padding-x:          .75rem  !default;\n$custom-select-padding-y:          .375rem !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-line-height:         $input-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-light !default;\n$custom-select-bg:            $white !default;\n$custom-select-disabled-bg:   $gray-lighter !default;\n$custom-select-bg-size:       8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color: #333 !default;\n$custom-select-indicator:     str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-select-border-width:  $input-btn-border-width !default;\n$custom-select-border-color:  $input-border-color !default;\n$custom-select-border-radius: $border-radius !default;\n\n$custom-select-focus-border-color: lighten($brand-primary, 25%) !default;\n$custom-select-focus-box-shadow:   inset 0 1px 2px rgba($black, .075), 0 0 5px rgba($custom-select-focus-border-color, .5) !default;\n\n$custom-select-sm-padding-y:  .2rem !default;\n$custom-select-sm-font-size:  75% !default;\n\n$custom-file-height:           2.5rem !default;\n$custom-file-width:            14rem !default;\n$custom-file-focus-box-shadow: 0 0 0 .075rem $white, 0 0 0 .2rem $brand-primary !default;\n\n$custom-file-padding-x:     .5rem !default;\n$custom-file-padding-y:     1rem !default;\n$custom-file-line-height:   1.5 !default;\n$custom-file-color:         $gray !default;\n$custom-file-bg:            $white !default;\n$custom-file-border-width:  $border-width !default;\n$custom-file-border-color:  $input-border-color !default;\n$custom-file-border-radius: $border-radius !default;\n$custom-file-box-shadow:    inset 0 .2rem .4rem rgba($black,.05) !default;\n$custom-file-button-color:  $custom-file-color !default;\n$custom-file-button-bg:     $gray-lighter !default;\n$custom-file-text: (\n  placeholder: (\n    en: \"Choose file...\"\n  ),\n  button-label: (\n    en: \"Browse\"\n  )\n) !default;\n\n\n// Form validation icons\n$form-icon-success-color: $brand-success !default;\n$form-icon-success: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$form-icon-success-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$form-icon-warning-color: $brand-warning !default;\n$form-icon-warning: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$form-icon-warning-color}' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$form-icon-danger-color: $brand-danger !default;\n$form-icon-danger: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$form-icon-danger-color}' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:             10rem !default;\n$dropdown-padding-y:             .5rem !default;\n$dropdown-margin-top:            .125rem !default;\n$dropdown-bg:                    $white !default;\n$dropdown-border-color:          rgba($black,.15) !default;\n$dropdown-border-width:          $border-width !default;\n$dropdown-divider-bg:            $gray-lighter !default;\n$dropdown-box-shadow:            0 .5rem 1rem rgba($black,.175) !default;\n\n$dropdown-link-color:            $gray-dark !default;\n$dropdown-link-hover-color:      darken($gray-dark, 5%) !default;\n$dropdown-link-hover-bg:         $gray-lightest !default;\n\n$dropdown-link-active-color:     $component-active-color !default;\n$dropdown-link-active-bg:        $component-active-bg !default;\n\n$dropdown-link-disabled-color:   $gray-light !default;\n\n$dropdown-item-padding-x:        1.5rem !default;\n\n$dropdown-header-color:          $gray-light !default;\n\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown-backdrop:  990 !default;\n$zindex-navbar:             1000 !default;\n$zindex-dropdown:           1000 !default;\n$zindex-fixed:              1030 !default;\n$zindex-sticky:             1030 !default;\n$zindex-modal-backdrop:     1040 !default;\n$zindex-modal:              1050 !default;\n$zindex-popover:            1060 !default;\n$zindex-tooltip:            1070 !default;\n\n\n// Navbar\n\n$navbar-border-radius:              $border-radius !default;\n$navbar-padding-x:                  $spacer !default;\n$navbar-padding-y:                  ($spacer / 2) !default;\n\n$navbar-brand-padding-y:            .25rem !default;\n\n$navbar-toggler-padding-x:           .75rem !default;\n$navbar-toggler-padding-y:           .25rem !default;\n$navbar-toggler-font-size:           $font-size-lg !default;\n$navbar-toggler-border-radius:       $btn-border-radius !default;\n\n$navbar-inverse-color:                 rgba($white,.5) !default;\n$navbar-inverse-hover-color:           rgba($white,.75) !default;\n$navbar-inverse-active-color:          rgba($white,1) !default;\n$navbar-inverse-disabled-color:        rgba($white,.25) !default;\n$navbar-inverse-toggler-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-inverse-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-inverse-toggler-border:        rgba($white,.1) !default;\n\n$navbar-light-color:                rgba($black,.5) !default;\n$navbar-light-hover-color:          rgba($black,.7) !default;\n$navbar-light-active-color:         rgba($black,.9) !default;\n$navbar-light-disabled-color:       rgba($black,.3) !default;\n$navbar-light-toggler-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-light-toggler-border:       rgba($black,.1) !default;\n\n// Navs\n\n$nav-item-margin:               .2rem !default;\n$nav-item-inline-spacer:        1rem !default;\n$nav-link-padding:              .5em 1em !default;\n$nav-link-hover-bg:             $gray-lighter !default;\n$nav-disabled-link-color:       $gray-light !default;\n\n$nav-tabs-border-color:                       #ddd !default;\n$nav-tabs-border-width:                       $border-width !default;\n$nav-tabs-border-radius:                      $border-radius !default;\n$nav-tabs-link-hover-border-color:            $gray-lighter !default;\n$nav-tabs-active-link-hover-color:            $gray !default;\n$nav-tabs-active-link-hover-bg:               $body-bg !default;\n$nav-tabs-active-link-hover-border-color:     #ddd !default;\n$nav-tabs-justified-link-border-color:        #ddd !default;\n$nav-tabs-justified-active-link-border-color: $body-bg !default;\n\n$nav-pills-border-radius:     $border-radius !default;\n$nav-pills-active-link-color: $component-active-color !default;\n$nav-pills-active-link-bg:    $component-active-bg !default;\n\n\n// Pagination\n\n$pagination-padding-x:                .75rem !default;\n$pagination-padding-y:                .5rem !default;\n$pagination-padding-x-sm:             .5rem !default;\n$pagination-padding-y-sm:             .25rem !default;\n$pagination-padding-x-lg:             1.5rem !default;\n$pagination-padding-y-lg:             .75rem !default;\n$pagination-line-height:              1.25 !default;\n\n$pagination-color:                     $link-color !default;\n$pagination-bg:                        $white !default;\n$pagination-border-width:              $border-width !default;\n$pagination-border-color:              #ddd !default;\n\n$pagination-hover-color:               $link-hover-color !default;\n$pagination-hover-bg:                  $gray-lighter !default;\n$pagination-hover-border:              #ddd !default;\n\n$pagination-active-color:              $white !default;\n$pagination-active-bg:                 $brand-primary !default;\n$pagination-active-border:             $brand-primary !default;\n\n$pagination-disabled-color:            $gray-light !default;\n$pagination-disabled-bg:               $white !default;\n$pagination-disabled-border:           #ddd !default;\n\n\n// Jumbotron\n\n$jumbotron-padding:              2rem !default;\n$jumbotron-bg:                   $gray-lighter !default;\n\n\n// Form states and alerts\n//\n// Define colors for form feedback states and, by default, alerts.\n\n$state-success-text:             #3c763d !default;\n$state-success-bg:               #dff0d8 !default;\n$state-success-border:           darken($state-success-bg, 5%) !default;\n\n$state-info-text:                #31708f !default;\n$state-info-bg:                  #d9edf7 !default;\n$state-info-border:              darken($state-info-bg, 7%) !default;\n\n$state-warning-text:             #8a6d3b !default;\n$state-warning-bg:               #fcf8e3 !default;\n$mark-bg:                        $state-warning-bg !default;\n$state-warning-border:           darken($state-warning-bg, 5%) !default;\n\n$state-danger-text:              #a94442 !default;\n$state-danger-bg:                #f2dede !default;\n$state-danger-border:            darken($state-danger-bg, 5%) !default;\n\n\n// Cards\n\n$card-spacer-x:            1.25rem !default;\n$card-spacer-y:            .75rem !default;\n$card-border-width:        1px !default;\n$card-border-radius:       $border-radius !default;\n$card-border-color:        rgba($black,.125) !default;\n$card-border-radius-inner: calc(#{$card-border-radius} - #{$card-border-width}) !default;\n$card-cap-bg:              $gray-lightest !default;\n$card-bg:                  $white !default;\n\n$card-link-hover-color:    $white !default;\n\n$card-img-overlay-padding: 1.25rem !default;\n\n$card-deck-margin:          ($grid-gutter-width-base / 2) !default;\n\n$card-columns-count:        3 !default;\n$card-columns-gap:          1.25rem !default;\n$card-columns-margin:       $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-max-width:           200px !default;\n$tooltip-color:               $white !default;\n$tooltip-bg:                  $black !default;\n$tooltip-opacity:             .9 !default;\n$tooltip-padding-y:           3px !default;\n$tooltip-padding-x:           8px !default;\n$tooltip-margin:              3px !default;\n\n$tooltip-arrow-width:         5px !default;\n$tooltip-arrow-color:         $tooltip-bg !default;\n\n\n// Popovers\n\n$popover-inner-padding:               1px !default;\n$popover-bg:                          $white !default;\n$popover-max-width:                   276px !default;\n$popover-border-width:                $border-width !default;\n$popover-border-color:                rgba($black,.2) !default;\n$popover-box-shadow:                  0 5px 10px rgba($black,.2) !default;\n\n$popover-title-bg:                    darken($popover-bg, 3%) !default;\n$popover-title-padding-x:             14px !default;\n$popover-title-padding-y:             8px !default;\n\n$popover-content-padding-x:           14px !default;\n$popover-content-padding-y:           9px !default;\n\n$popover-arrow-width:                 10px !default;\n$popover-arrow-color:                 $popover-bg !default;\n\n$popover-arrow-outer-width:           ($popover-arrow-width + 1px) !default;\n$popover-arrow-outer-color:           fade-in($popover-border-color, .05) !default;\n\n\n// Badges\n\n$badge-default-bg:            $gray-light !default;\n$badge-primary-bg:            $brand-primary !default;\n$badge-success-bg:            $brand-success !default;\n$badge-info-bg:               $brand-info !default;\n$badge-warning-bg:            $brand-warning !default;\n$badge-danger-bg:             $brand-danger !default;\n\n$badge-color:                 $white !default;\n$badge-link-hover-color:      $white !default;\n$badge-font-size:             75% !default;\n$badge-font-weight:           $font-weight-bold !default;\n$badge-padding-x:             .4em !default;\n$badge-padding-y:             .25em !default;\n\n$badge-pill-padding-x:        .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:    10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:         15px !default;\n\n$modal-dialog-margin:         10px !default;\n$modal-dialog-sm-up-margin-y: 30px !default;\n\n$modal-title-line-height:     $line-height-base !default;\n\n$modal-content-bg:               $white !default;\n$modal-content-border-color:     rgba($black,.2) !default;\n$modal-content-border-width:     $border-width !default;\n$modal-content-xs-box-shadow:    0 3px 9px rgba($black,.5) !default;\n$modal-content-sm-up-box-shadow: 0 5px 15px rgba($black,.5) !default;\n\n$modal-backdrop-bg:           $black !default;\n$modal-backdrop-opacity:      .5 !default;\n$modal-header-border-color:   $gray-lighter !default;\n$modal-footer-border-color:   $modal-header-border-color !default;\n$modal-header-border-width:   $modal-content-border-width !default;\n$modal-footer-border-width:   $modal-header-border-width !default;\n$modal-header-padding:        15px !default;\n\n$modal-lg:                    800px !default;\n$modal-md:                    500px !default;\n$modal-sm:                    300px !default;\n\n$modal-transition:            transform .3s ease-out !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-x:             1.25rem !default;\n$alert-padding-y:             .75rem !default;\n$alert-margin-bottom:         $spacer-y !default;\n$alert-border-radius:         $border-radius !default;\n$alert-link-font-weight:      $font-weight-bold !default;\n$alert-border-width:          $border-width !default;\n\n$alert-success-bg:            $state-success-bg !default;\n$alert-success-text:          $state-success-text !default;\n$alert-success-border:        $state-success-border !default;\n\n$alert-info-bg:               $state-info-bg !default;\n$alert-info-text:             $state-info-text !default;\n$alert-info-border:           $state-info-border !default;\n\n$alert-warning-bg:            $state-warning-bg !default;\n$alert-warning-text:          $state-warning-text !default;\n$alert-warning-border:        $state-warning-border !default;\n\n$alert-danger-bg:             $state-danger-bg !default;\n$alert-danger-text:           $state-danger-text !default;\n$alert-danger-border:         $state-danger-border !default;\n\n\n// Progress bars\n\n$progress-height:               1rem !default;\n$progress-font-size:            .75rem !default;\n$progress-bg:                   $gray-lighter !default;\n$progress-border-radius:        $border-radius !default;\n$progress-box-shadow:           inset 0 .1rem .1rem rgba($black,.1) !default;\n$progress-bar-color:            $white !default;\n$progress-bar-bg:               $brand-primary !default;\n$progress-bar-animation-timing: 1s linear infinite !default;\n\n// List group\n\n$list-group-color:               $body-color !default;\n$list-group-bg:                  $white !default;\n$list-group-border-color:        rgba($black,.125) !default;\n$list-group-border-width:        $border-width !default;\n$list-group-border-radius:       $border-radius !default;\n\n$list-group-item-padding-x:      1.25rem !default;\n$list-group-item-padding-y:      .75rem !default;\n\n$list-group-hover-bg:            $gray-lightest !default;\n$list-group-active-color:        $component-active-color !default;\n$list-group-active-bg:           $component-active-bg !default;\n$list-group-active-border:       $list-group-active-bg !default;\n$list-group-active-text-color:   lighten($list-group-active-bg, 50%) !default;\n\n$list-group-disabled-color:      $gray-light !default;\n$list-group-disabled-bg:         $list-group-bg !default;\n$list-group-disabled-text-color: $list-group-disabled-color !default;\n\n$list-group-link-color:          $gray !default;\n$list-group-link-heading-color:  $gray-dark !default;\n$list-group-link-hover-color:    $list-group-link-color !default;\n\n$list-group-link-active-color:   $list-group-color !default;\n$list-group-link-active-bg:      $gray-lighter !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:           .25rem !default;\n$thumbnail-bg:                $body-bg !default;\n$thumbnail-border-width:      $border-width !default;\n$thumbnail-border-color:      #ddd !default;\n$thumbnail-border-radius:     $border-radius !default;\n$thumbnail-box-shadow:        0 1px 2px rgba($black,.075) !default;\n$thumbnail-transition:        all .2s ease-in-out !default;\n\n\n// Figures\n\n$figure-caption-font-size: 90% !default;\n$figure-caption-color:     $gray-light !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-padding-y:          .75rem !default;\n$breadcrumb-padding-x:          1rem !default;\n$breadcrumb-item-padding:       .5rem !default;\n\n$breadcrumb-bg:                 $gray-lighter !default;\n$breadcrumb-divider-color:      $gray-light !default;\n$breadcrumb-active-color:       $gray-light !default;\n$breadcrumb-divider:            \"/\" !default;\n\n\n// Carousel\n\n$carousel-control-color:                      $white !default;\n$carousel-control-width:                      15% !default;\n$carousel-control-opacity:                    .5 !default;\n\n$carousel-indicator-width:                    30px !default;\n$carousel-indicator-height:                   3px !default;\n$carousel-indicator-spacer:                   3px !default;\n$carousel-indicator-active-bg:                $white !default;\n\n$carousel-caption-width:                      70% !default;\n$carousel-caption-color:                      $white !default;\n\n$carousel-control-icon-width:                 20px !default;\n\n$carousel-control-prev-icon-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$carousel-control-next-icon-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$carousel-transition:           transform .6s ease-in-out !default;\n\n\n// Close\n\n$close-font-size:             $font-size-base * 1.5 !default;\n$close-font-weight:           $font-weight-bold !default;\n$close-color:                 $black !default;\n$close-text-shadow:           0 1px 0 $white !default;\n\n\n// Code\n\n$code-font-size:              90% !default;\n$code-padding-x:              .4rem !default;\n$code-padding-y:              .2rem !default;\n$code-color:                  #bd4147 !default;\n$code-bg:                     $gray-lightest !default;\n\n$kbd-color:                   $white !default;\n$kbd-bg:                      $gray-dark !default;\n\n$pre-bg:                      $gray-lightest !default;\n$pre-color:                   $gray-dark !default;\n$pre-border-color:            #ccc !default;\n$pre-scrollable-max-height:   340px !default;\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutters: $grid-gutter-widths, $breakpoints: $grid-breakpoints) {\n  // Common properties for all breakpoints\n  %grid-column {\n    position: relative;\n    width: 100%;\n    min-height: 1px; // Prevent columns from collapsing when empty\n\n    @include make-gutters($gutters);\n  }\n\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    // Allow columns to stretch full width below their breakpoints\n    @for $i from 1 through $columns {\n      .col#{$infix}-#{$i} {\n        @extend %grid-column;\n      }\n    }\n    .col#{$infix} {\n      @extend %grid-column;\n    }\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n      }\n      .col#{$infix}-auto {\n        flex: 0 0 auto;\n        width: auto;\n      }\n\n      @for $i from 1 through $columns {\n        .col#{$infix}-#{$i} {\n          @include make-col($i, $columns);\n        }\n      }\n\n      @each $modifier in (pull, push) {\n        @for $i from 0 through $columns {\n          .#{$modifier}#{$infix}-#{$i} {\n            @include make-col-modifier($modifier, $i, $columns)\n          }\n        }\n      }\n\n      // `$columns - 1` because offsetting by the width of an entire row isn't possible\n      @for $i from 0 through ($columns - 1) {\n        @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-xs-0\n          .offset#{$infix}-#{$i} {\n            @include make-col-modifier(offset, $i, $columns)\n          }\n        }\n      }\n    }\n  }\n}\n","@import \"../../../node_modules/bootstrap/scss/_variables\";\n@import \"../../../node_modules/bootstrap/scss/_mixins\";\n@import \"../../../node_modules/bootstrap/scss/_grid\";\n\n.main-container{\n    @include media-breakpoint-down(md) {\n        margin-left: 0;\n    }\n    margin-left: 225px;\n    margin-top: 60px;\n    margin-right: 0;\n    -ms-overflow-x: hidden;\n    overflow-x: hidden;\n    position: relative;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"forms.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"grid.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "body {\n  -ms-overflow-x: hidden;\n  overflow-x: hidden; }\n\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n", "", {"version":3,"sources":["/./src/app/dashboard/home/src/app/dashboard/home/timeline.scss"],"names":[],"mappings":"AAAA;EACI,uBAAsB;EAClB,mBAAkB,EACzB;;AACD;EACI,mBAAkB;EAClB,qBAAoB;EACpB,iBAAgB,EACnB;;AAED;EACI,aAAY;EACZ,mBAAkB;EAClB,OAAM;EACN,UAAS;EACT,UAAS;EACT,WAAU;EACV,oBAAmB;EACnB,0BAAyB,EAC5B;;AAED;EACI,mBAAkB;EAClB,oBAAmB,EACtB;;AAED;;EAEI,aAAY;EACZ,eAAc,EACjB;;AAED;EACI,YAAW,EACd;;AAED;;EAEI,aAAY;EACZ,eAAc,EACjB;;AAED;EACI,YAAW,EACd;;AAED;EACI,YAAW;EACX,mBAAkB;EAClB,WAAU;EACV,cAAa;EACb,0BAAyB;EACzB,mBAAkB;EAElB,2CAAuC,EAC1C;;AAED;EACI,aAAY;EACZ,sBAAqB;EACrB,mBAAkB;EAClB,UAAS;EACT,aAAY;EACZ,mCAAkC;EAClC,2BAA0B;EAC1B,sCAAqC;EACrC,6BAA4B,EAC/B;;AAED;EACI,aAAY;EACZ,sBAAqB;EACrB,mBAAkB;EAClB,UAAS;EACT,aAAY;EACZ,mCAAkC;EAClC,2BAA0B;EAC1B,sCAAqC;EACrC,6BAA4B,EAC/B;;AAED;EACI,aAAY;EACZ,mBAAkB;EAClB,UAAS;EACT,UAAS;EACT,YAAW;EACX,aAAY;EACZ,mBAAkB;EAClB,+BAA8B;EAC9B,mBAAkB;EAClB,iBAAgB;EAChB,kBAAiB;EACjB,YAAW;EACX,0BAAyB,EAC5B;;AAED;EACI,aAAY,EACf;;AAED;EACI,YAAW;EACX,YAAW;EACX,yBAAwB;EACxB,qBAAoB,EACvB;;AAED;EACI,YAAW;EACX,YAAW;EACX,yBAAwB;EACxB,qBAAoB,EACvB;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,qCAAoC,EACvC;;AAED;EACI,cAAa;EACb,eAAc,EACjB;;AAED;;EAEI,iBAAgB,EACnB;;AAED;EACI,gBAAe,EAClB;;AAED;EACI;IACI,WAAU,EACb;EAED;IACI,yBAAwB;IAExB,iCAAgC,EACnC;EAED;IACI,UAAS;IACT,WAAU;IACV,eAAc,EACjB;EAED;IACI,aAAY,EACf;EAED;IACI,YAAW;IACX,YAAW;IACX,yBAAwB;IACxB,qBAAoB,EACvB;EAED;IACI,YAAW;IACX,YAAW;IACX,yBAAwB;IACxB,qBAAoB,EACvB,EAAA","file":"timeline.scss","sourcesContent":["body{\n    -ms-overflow-x: hidden;\n        overflow-x: hidden;\n}\n.timeline {\n    position: relative;\n    padding: 20px 0 20px;\n    list-style: none;\n}\n\n.timeline:before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    width: 3px;\n    margin-left: -1.5px;\n    background-color: #eeeeee;\n}\n\n.timeline > li {\n    position: relative;\n    margin-bottom: 20px;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n    content: \" \";\n    display: table;\n}\n\n.timeline > li:after {\n    clear: both;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n    content: \" \";\n    display: table;\n}\n\n.timeline > li:after {\n    clear: both;\n}\n\n.timeline > li > .timeline-panel {\n    float: left;\n    position: relative;\n    width: 46%;\n    padding: 20px;\n    border: 1px solid #d4d4d4;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,0.175);\n    box-shadow: 0 1px 6px rgba(0,0,0,0.175);\n}\n\n.timeline > li > .timeline-panel:before {\n    content: \" \";\n    display: inline-block;\n    position: absolute;\n    top: 26px;\n    right: -15px;\n    border-top: 15px solid transparent;\n    border-right: 0 solid #ccc;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #ccc;\n}\n\n.timeline > li > .timeline-panel:after {\n    content: \" \";\n    display: inline-block;\n    position: absolute;\n    top: 27px;\n    right: -14px;\n    border-top: 14px solid transparent;\n    border-right: 0 solid #fff;\n    border-bottom: 14px solid transparent;\n    border-left: 14px solid #fff;\n}\n\n.timeline > li > .timeline-badge {\n    z-index: 100;\n    position: absolute;\n    top: 16px;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    margin-left: -25px;\n    border-radius: 50% 50% 50% 50%;\n    text-align: center;\n    font-size: 1.4em;\n    line-height: 50px;\n    color: #fff;\n    background-color: #999999;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n    float: right;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n}\n\n.timeline-badge.primary {\n    background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n    background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n    background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n    background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n    background-color: #5bc0de !important;\n}\n\n.timeline-title {\n    margin-top: 0;\n    color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n    margin-bottom: 0;\n}\n\n.timeline-body > p + p {\n    margin-top: 5px;\n}\n\n@media(max-width:767px) {\n    ul.timeline:before {\n        left: 40px;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        width: calc(100% - 90px);\n        width: -moz-calc(100% - 90px);\n        width: -webkit-calc(100% - 90px);\n    }\n\n    ul.timeline > li > .timeline-badge {\n        top: 16px;\n        left: 15px;\n        margin-left: 0;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        float: right;\n    }\n\n    ul.timeline > li > .timeline-panel:before {\n        right: auto;\n        left: -15px;\n        border-right-width: 15px;\n        border-left-width: 0;\n    }\n\n    ul.timeline > li > .timeline-panel:after {\n        right: auto;\n        left: -14px;\n        border-right-width: 14px;\n        border-left-width: 0;\n    }\n}"],"sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"tables.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #2b292c;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #2b292c;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n", "", {"version":3,"sources":["/./src/app/login/src/app/login/login.component.scss"],"names":[],"mappings":"AACC;EACG,mBAAkB;EAClB,OAAM;EACN,QAAO;EACP,SAAQ;EACR,UAAS;EACT,eAAc;EACd,oBAR6B;EAS7B,mBAAkB;EAClB,YAAW;EACX,aAAY,EAsEf;EAhFA;IAYO,WAAU,EACb;EAbJ;IAeO,aAAY;IACZ,mBAAkB;IAClB,gBAAe;IACf,uBAAsB;IACtB,iBAAgB,EACnB;EApBJ;IAsBO,gBAAe;IACf,aAAY;IACZ,iBAAgB;IAChB,kDAA6C;IAC7C,YAAW;IACX,iBAAgB,EACnB;EA5BJ;IA8BO,8BAA6B;IAC7B,iBAAgB,EACnB;EAhCJ;IAmCe,oBAAmB;IAC3B,gCAA4B;IAC5B,oBAtCyB;IAuCzB,2CAAuC;IACvC,gBAAe;IACf,kBAAiB;IACjB,gBAAe,EAClB;EA1CJ;IA4CO,aAA0B;IAC1B,wBAAqC;IACrC,cAAa,EAChB;EA/CJ;IAkDO,iBAAgB;IAChB,iBAAgB;IAChB,oBAAmB;IACnB,gBAAe,EAIlB;IAzDJ;MAuDW,gCAA4B,EAC/B;EAxDR;IA4DO,eAAc,EAgBjB;IA5EJ;MA8DO,2CAAuC,EACtC;IA/DR;MAiEgC,iBAAiB;MAC1C,2CAAuC,EACtC;IAnER;MAqEkC,iBAAiB;MAC5C,2CAAuC,EACtC;IAvER;MA0EO,2CAAuC,EACtC;EA3ER;IA8EO,gBAAe,EAClB","file":"login.component.scss","sourcesContent":[" $login-background-color: #2b292c;\n .login-page {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: auto;\n    background: $login-background-color;\n    text-align: center;\n    color: #fff;\n    padding: 3em;\n    .col-lg-4{\n        padding :0;\n    }\n    .input-lg {\n        height: 46px;\n        padding: 10px 16px;\n        font-size: 18px;\n        line-height: 1.3333333;\n        border-radius: 0;\n    }\n    .input-underline {\n        background: 0 0;\n        border: none;\n        box-shadow: none;\n        border-bottom: 2px solid rgba(255,255,255,.5);\n        color: #FFF;\n        border-radius: 0;\n    }\n    .input-underline:focus {\n        border-bottom: 2px solid #fff;\n        box-shadow: none;\n    }\n    .rounded-btn{\n        -webkit-border-radius: 50px;\n                border-radius: 50px;\n        color: rgba(255,255,255,0.8);\n        background: $login-background-color;\n        border: 2px solid rgba(255,255,255,0.8);\n        font-size: 18px;\n        line-height: 40px;\n        padding: 0 25px;\n    }\n    .rounded-btn:hover,.rounded-btn:focus,.rounded-btn:active,.rounded-btn:visited{\n        color: rgba(255,255,255,1);\n        border: 2px solid rgba(255,255,255,1);\n        outline: none;\n    }\n\n    h1 {\n        font-weight: 300;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-size: 36px;\n        small {\n            color: rgba(255,255,255,0.7);\n        }\n    }\n\n    .form-group {\n        padding: 8px 0;\n        input::-webkit-input-placeholder {\n        color: rgba(255,255,255,0.6) !important;\n        }\n         \n        input:-moz-placeholder { /* Firefox 18- */\n        color: rgba(255,255,255,0.6) !important;  \n        }\n         \n        input::-moz-placeholder {  /* Firefox 19+ */\n        color: rgba(255,255,255,0.6) !important;  \n        }\n         \n        input:-ms-input-placeholder {  \n        color: rgba(255,255,255,0.6) !important;  \n        }\n    }\n    .form-content {\n        padding: 40px 0;\n    }\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0.5rem 1rem; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: .425rem;\n  padding-bottom: .425rem; }\n\n.navbar-toggler {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n.navbar-toggler-left {\n  position: absolute;\n  left: 1rem; }\n\n.navbar-toggler-right {\n  position: absolute;\n  right: 1rem; }\n\n@media (max-width: 575px) {\n  .navbar-toggleable .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-toggleable {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767px) {\n  .navbar-toggleable-sm .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-sm > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable-sm > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991px) {\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-md > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable-md > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199px) {\n  .navbar-toggleable-lg .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-lg > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-toggleable-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable-lg > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable-lg .navbar-toggler {\n      display: none; } }\n\n.navbar-toggleable-xl {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .navbar-toggleable-xl .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-xl > .container {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-toggleable-xl .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .navbar-toggleable-xl .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n  .navbar-toggleable-xl > .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .navbar-toggleable-xl .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    width: 100%; }\n  .navbar-toggleable-xl .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand,\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover,\n  .navbar-light .navbar-toggler:focus,\n  .navbar-light .navbar-toggler:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .open > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-inverse .navbar-brand,\n.navbar-inverse .navbar-toggler {\n  color: white; }\n  .navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover,\n  .navbar-inverse .navbar-toggler:focus,\n  .navbar-inverse .navbar-toggler:hover {\n    color: white; }\n\n.navbar-inverse .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-inverse .navbar-nav .nav-link:focus, .navbar-inverse .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-inverse .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-inverse .navbar-nav .open > .nav-link,\n.navbar-inverse .navbar-nav .active > .nav-link,\n.navbar-inverse .navbar-nav .nav-link.open,\n.navbar-inverse .navbar-nav .nav-link.active {\n  color: white; }\n\n.navbar-inverse .navbar-toggler {\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-inverse .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); }\n\n.navbar-inverse .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5em 1em; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #636c72;\n    cursor: not-allowed; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs .nav-item, .nav-tabs .side-item, .nav-tabs .sub-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-right-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #eceeef #eceeef #ddd; }\n    .nav-tabs .nav-link.disabled {\n      color: #636c72;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link,\n  .nav-tabs .show.side-item .nav-link,\n  .nav-tabs .show.sub-item .nav-link {\n    color: #464a4c;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .nav-item.show .nav-link,\n.nav-pills .show.side-item .nav-link,\n.nav-pills .show.sub-item .nav-link {\n  color: #fff;\n  cursor: default;\n  background-color: #0275d8; }\n\n.nav-fill .nav-item, .nav-fill .side-item, .nav-fill .sub-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item, .nav-justified .side-item, .nav-justified .sub-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar-toggler-left {\n  position: fixed;\n  top: 8px;\n  z-index: 1030; }\n\n.navbar-toggler-right {\n  position: fixed;\n  top: 8px;\n  z-index: 1030; }\n\n.sidebar-collapse {\n  position: fixed;\n  z-index: 1030;\n  top: 50px;\n  width: 225px;\n  bottom: 0px;\n  border-radius: 0;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  height: 100%;\n  min-height: 100%; }\n  @media (max-width: 991px) {\n    .sidebar-collapse {\n      display: none; } }\n  @media (min-width: 992px) {\n    .sidebar-collapse {\n      display: block !important; } }\n\n.side-item {\n  padding: 8px 0px 0px; }\n\n.sidebar, .sidebar-light-nav, .sidebar-inverse-nav {\n  height: 100%;\n  overflow-y: auto;\n  padding: 1rem 1rem 1rem 1.5rem;\n  margin-bottom: 0; }\n  .sidebar .side-item .side-link, .sidebar-light-nav .side-item .side-link, .sidebar-inverse-nav .side-item .side-link {\n    text-decoration: none; }\n\n.sidebar-light-nav .side-item .side-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .sidebar-light-nav .side-item .side-link:focus, .sidebar-light-nav .side-item .side-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n\n.sidebar-inverse-nav .side-item .side-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .sidebar-inverse-nav .side-item .side-link:focus, .sidebar-inverse-nav .side-item .side-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n", "", {"version":3,"sources":["/./src/app/shared/sidebar/node_modules/bootstrap/scss/_navbar.scss","/./src/app/shared/sidebar/node_modules/bootstrap/scss/_variables.scss","/./src/app/shared/sidebar/node_modules/bootstrap/scss/mixins/_hover.scss","/./src/app/shared/sidebar/node_modules/bootstrap/scss/mixins/_border-radius.scss","/./src/app/shared/sidebar/node_modules/bootstrap/scss/mixins/_breakpoints.scss","/./src/app/shared/sidebar/node_modules/bootstrap/scss/_nav.scss","/./src/app/shared/sidebar/src/app/shared/sidebar/sidebar.component.scss"],"names":[],"mappings":"AAiBA;EACE,mBAAkB;EAClB,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;EACtB,qBCuHa,EDtHd;;AAOD;EACE,sBAAqB;EACrB,oBAAmB;EACnB,uBAAsB;EACtB,mBC2Ga;ED1Gb,mBC0NsB;EDzNtB,qBAAoB;EACpB,oBAAmB,EAKpB;EErBG;IFmBA,sBAAqB,EEhBpB;;AFyBL;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;EACtB,gBAAe;EACf,iBAAgB;EAChB,iBAAgB,EAMjB;EAXD;IAQI,iBAAgB;IAChB,gBAAe,EAChB;;AAQH;EACE,sBAAqB;EACrB,qBAAuB;EACvB,wBAAuB,EACxB;;AASD;EACE,2BAAsB;MAAtB,uBAAsB;EACtB,yBCghByC;ED/gBzC,mBC0KsB;EDzKtB,eAAc;EACd,wBAAuB;EACvB,8BAAuC;EGjFrC,uBF4T2B,EDrO9B;EEvEG;IFqEA,sBAAqB,EElEpB;;AFwEL;EACE,sBAAqB;EACrB,aAAY;EACZ,cAAa;EACb,uBAAsB;EACtB,YAAW;EACX,oCAAmC;EACnC,2BAA0B,EAC3B;;AAID;EACE,mBAAkB;EAClB,WC+Ba,ED9Bd;;AACD;EACE,mBAAkB;EAClB,YC2Ba,ED1Bd;;AI7CG;EJiDJ;IASY,iBAAgB;IAChB,YAAW,EACZ;EAXX;IAeU,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AI/EL;EJ8DJ;IAqBQ,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,sBAAiB;QAAjB,kBAAiB;IACjB,0BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB,EA6BtB;IApDL;MA0BU,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAMpB;MAhCT;QA6BY,qBAAoB;QACpB,oBAAmB,EACpB;IA/BX;MAoCU,qBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,sBAAiB;UAAjB,kBAAiB;MACjB,0BAAmB;UAAnB,uBAAmB;cAAnB,oBAAmB,EACpB;IAvCT;MA2CU,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MACxB,YAAW,EACZ;IA7CT;MAiDU,cAAa,EACd,EAAA;;AInGL;EJsDA;IAIQ,iBAAgB;IAChB,YAAW,EACZ;EANP;IAUM,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AI/EL;EJmEA;IAgBI,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,sBAAiB;QAAjB,kBAAiB;IACjB,0BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB,EA6BtB;IA/CD;MAqBM,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAMpB;MA3BL;QAwBQ,qBAAoB;QACpB,oBAAmB,EACpB;IA1BP;MA+BM,qBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,sBAAiB;UAAjB,kBAAiB;MACjB,0BAAmB;UAAnB,uBAAmB;cAAnB,oBAAmB,EACpB;IAlCL;MAsCM,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MACxB,YAAW,EACZ;IAxCL;MA4CM,cAAa,EACd,EAAA;;AInGL;EJsDA;IAIQ,iBAAgB;IAChB,YAAW,EACZ;EANP;IAUM,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AI/EL;EJmEA;IAgBI,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,sBAAiB;QAAjB,kBAAiB;IACjB,0BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB,EA6BtB;IA/CD;MAqBM,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAMpB;MA3BL;QAwBQ,qBAAoB;QACpB,oBAAmB,EACpB;IA1BP;MA+BM,qBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,sBAAiB;UAAjB,kBAAiB;MACjB,0BAAmB;UAAnB,uBAAmB;cAAnB,oBAAmB,EACpB;IAlCL;MAsCM,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MACxB,YAAW,EACZ;IAxCL;MA4CM,cAAa,EACd,EAAA;;AInGL;EJsDA;IAIQ,iBAAgB;IAChB,YAAW,EACZ;EANP;IAUM,iBAAgB;IAChB,gBAAe,EAChB,EAAA;;AI/EL;EJmEA;IAgBI,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB;IACnB,sBAAiB;QAAjB,kBAAiB;IACjB,0BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB,EA6BtB;IA/CD;MAqBM,+BAAmB;MAAnB,8BAAmB;UAAnB,wBAAmB;cAAnB,oBAAmB,EAMpB;MA3BL;QAwBQ,qBAAoB;QACpB,oBAAmB,EACpB;IA1BP;MA+BM,qBAAa;MAAb,qBAAa;MAAb,cAAa;MACb,sBAAiB;UAAjB,kBAAiB;MACjB,0BAAmB;UAAnB,uBAAmB;cAAnB,oBAAmB,EACpB;IAlCL;MAsCM,gCAAwB;MAAxB,gCAAwB;MAAxB,yBAAwB;MACxB,YAAW,EACZ;IAxCL;MA4CM,cAAa,EACd,EAAA;;AA7CL;EAgBI,+BAAmB;EAAnB,8BAAmB;MAAnB,wBAAmB;UAAnB,oBAAmB;EACnB,sBAAiB;MAAjB,kBAAiB;EACjB,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB,EA6BtB;EA/CD;IAIQ,iBAAgB;IAChB,YAAW,EACZ;EANP;IAUM,iBAAgB;IAChB,gBAAe,EAChB;EAZL;IAqBM,+BAAmB;IAAnB,8BAAmB;QAAnB,wBAAmB;YAAnB,oBAAmB,EAMpB;IA3BL;MAwBQ,qBAAoB;MACpB,oBAAmB,EACpB;EA1BP;IA+BM,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,sBAAiB;QAAjB,kBAAiB;IACjB,0BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB,EACpB;EAlCL;IAsCM,gCAAwB;IAAxB,gCAAwB;IAAxB,yBAAwB;IACxB,YAAW,EACZ;EAxCL;IA4CM,cAAa,EACd;;AAYT;;EAGI,0BCxFS,ED6FV;EARH;;;IAMM,0BC3FO,ECxER;;AF6JL;EAYM,0BCjGO,ED0GR;EArBL;IAeQ,0BCpGK,ECxER;EF6JL;IAmBQ,0BCxGK,EDyGN;;AApBP;;;;EA2BM,0BChHO,EDiHR;;AA5BL;EAgCI,iCCrHS,EDsHV;;AAjCH;EAoCI,sQCyZyR,EDxZ1R;;AArCH;EAwCI,0BC7HS,ED8HV;;AAIH;;EAGI,aCtIS,ED2IV;EARH;;;IAMM,aCzIO,ECvER;;AF0ML;EAYM,gCC/IO,EDwJR;EArBL;IAeQ,iCClJK,ECvER;EF0ML;IAmBQ,iCCtJK,EDuJN;;AApBP;;;;EA2BM,aC9JO,ED+JR;;AA5BL;EAgCI,uCCnKS,EDoKV;;AAjCH;EAoCI,4QCqW6R,EDpW9R;;AArCH;EAwCI,gCC3KS,ED4KV;;AKrQH;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,gBAAe;EACf,iBAAgB;EAChB,iBAAgB,EACjB;;AAED;EACE,eAAc;EACd,mBJ0mBsC,EI/lBvC;EHLG;IGHA,sBAAqB,EHMpB;EGXL;IAUI,eJsF+B;IIrF/B,oBJybwC,EIxbzC;;AAQH;EACE,8BJ2lBgD,EIzjBjD;EAnCD;IAII,oBJqIc,EIpIf;EALH;IAQI,8BAAgD;IF9BhD,iCFsT2B;IErT3B,gCFqT2B,EI5Q5B;IApBH;MAYM,mCJglB4C,ECrmB7C;IGSL;MAgBM,eJ4D6B;MI3D7B,8BAA6B;MAC7B,0BAAyB,EAC1B;EAnBL;;;;IAwBI,eJmD+B;IIlD/B,uBJqCS;IIpCT,6BJoCS,EInCV;EA3BH;IA+BI,iBJ0Gc;IE/Jd,2BEuD4B;IFtD5B,0BEsD4B,EAC7B;;AAQH;EFtEI,uBF4T2B,EInP5B;;AAHH;;;;EAOI,YJaS;EIZT,gBAAe;EACf,0BJiBY,EIhBb;;AAQH;EAEI,oBAAc;MAAd,mBAAc;UAAd,eAAc;EACd,mBAAkB,EACnB;;AAGH;EAEI,oBAAc;MAAd,mBAAc;UAAd,eAAc;EACd,mBAAkB,EACnB;;AAQH;EAEI,cAAa,EACd;;AAHH;EAKI,eAAc,EACf;;ACvGH;EACE,gBAAe;EACf,SAAQ;EACR,cLikB8B,EKhkB/B;;AAED;EACE,gBAAe;EACf,SAAQ;EACR,cL2jB8B,EK1jB/B;;AAED;EAOE,gBAAe;EACf,cLgjB8B;EK/iB9B,UAAS;EACT,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,aAAY;EACZ,iBAAgB;EAChB,iBAAgB;EAChB,mBAAkB;EAClB,qBAAoB;EACpB,aAAY;EACZ,iBAAgB,EACjB;EFuBG;IE3CJ;MAEM,cAAa,EAkBlB,EAAA;EFUG;IE9BJ;MAKI,0BAAyB,EAe5B,EAAA;;AAED;EAEE,qBAAoB,EACrB;;AAMD;EACE,aAAY;EACZ,iBAAgB;EAChB,+BApD0B;EAqD1B,iBAAgB,EAMjB;EAVD;IAOM,sBAAqB,EACtB;;AAIL;EAIM,0BLsBO,EKlBR;EARL;IAMQ,0BLoBK,ECxER;;AI0DL;EAIM,gCLSO,EKLR;EARL;IAMQ,iCLOK,ECvER","file":"sidebar.component.scss","sourcesContent":["// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Navbar divider\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: $navbar-padding-y $navbar-padding-x;\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: $navbar-padding-x;\n  font-size: $font-size-lg;\n  line-height: inherit;\n  white-space: nowrap;\n\n  @include hover-focus {\n    text-decoration: none;\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  display: inline-block;\n  padding-top:    .425rem;\n  padding-bottom: .425rem;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  align-self: flex-start; // Prevent toggler from growing to full width when it's the only visible navbar child\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  font-size: $navbar-toggler-font-size;\n  line-height: 1;\n  background: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n\n  @include hover-focus {\n    text-decoration: none;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n// Use `position` on the toggler to prevent it from being auto placed as a flex\n// item and allow easy placement.\n.navbar-toggler-left {\n  position: absolute;\n  left: $navbar-padding-x;\n}\n.navbar-toggler-right {\n  position: absolute;\n  right: $navbar-padding-x;\n}\n\n// Generate series of `.navbar-toggleable-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-toggleable {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        .navbar-nav {\n          .dropdown-menu {\n            position: static;\n            float: none;\n          }\n        }\n\n        > .container {\n          padding-right: 0;\n          padding-left: 0;\n        }\n      }\n\n      @include media-breakpoint-up($next) {\n        flex-direction: row;\n        flex-wrap: nowrap;\n        align-items: center;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .nav-link {\n            padding-right: .5rem;\n            padding-left: .5rem;\n          }\n        }\n\n        // For nesting containers, have to redeclare for alignment purposes\n        > .container {\n          display: flex;\n          flex-wrap: nowrap;\n          align-items: center;\n        }\n\n        // scss-lint:disable ImportantRule\n        .navbar-collapse {\n          display: flex !important;\n          width: 100%;\n        }\n        // scss-lint:enable ImportantRule\n\n        .navbar-toggler {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand,\n  .navbar-toggler {\n    color: $navbar-light-active-color;\n\n    @include hover-focus {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      @include hover-focus {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .open > .nav-link,\n    .active > .nav-link,\n    .nav-link.open,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    border-color: $navbar-light-toggler-border;\n  }\n\n  .navbar-toggler-icon {\n    background-image: $navbar-light-toggler-bg;\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n  }\n}\n\n// White links against a dark background\n.navbar-inverse {\n  .navbar-brand,\n  .navbar-toggler {\n    color: $navbar-inverse-active-color;\n\n    @include hover-focus {\n      color: $navbar-inverse-active-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-inverse-color;\n\n      @include hover-focus {\n        color: $navbar-inverse-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-inverse-disabled-color;\n      }\n    }\n\n    .open > .nav-link,\n    .active > .nav-link,\n    .nav-link.open,\n    .nav-link.active {\n      color: $navbar-inverse-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    border-color: $navbar-inverse-toggler-border;\n  }\n\n  .navbar-toggler-icon {\n    background-image: $navbar-inverse-toggler-bg;\n  }\n\n  .navbar-text {\n    color: $navbar-inverse-color;\n  }\n}\n","// Variables\n//\n// Copy settings from this file into the provided `_custom.scss` to override\n// the Bootstrap defaults without modifying key, versioned files.\n\n\n// Table of Contents\n//\n// Colors\n// Options\n// Spacing\n// Body\n// Links\n// Grid breakpoints\n// Grid containers\n// Grid columns\n// Fonts\n// Components\n// Tables\n// Buttons\n// Forms\n// Dropdowns\n// Z-index master list\n// Navbar\n// Navs\n// Pagination\n// Jumbotron\n// Form states and alerts\n// Cards\n// Tooltips\n// Popovers\n// Badges\n// Modals\n// Alerts\n// Progress bars\n// List group\n// Image thumbnails\n// Figures\n// Breadcrumbs\n// Carousel\n// Close\n// Code\n\n@mixin _assert-ascending($map, $map-name) {\n  $prev-key: null;\n  $prev-num: null;\n  @each $key, $num in $map {\n    @if $prev-num == null {\n      // Do nothing\n    } @else if not comparable($prev-num, $num) {\n      @warn \"Potentially invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} whose unit makes it incomparable to #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    } @else if $prev-num >= $num {\n      @warn \"Invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} which isn't greater than #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    }\n    $prev-key: $key;\n    $prev-num: $num;\n  }\n}\n\n// Replace `$search` with `$replace` in `$string`\n// @author Hugo Giraudel\n// @param {String} $string - Initial string\n// @param {String} $search - Substring to replace\n// @param {String} $replace ('') - New value\n// @return {String} - Updated string\n@function str-replace($string, $search, $replace: \"\") {\n  $index: str-index($string, $search);\n\n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n\n  @return $string;\n}\n\n@mixin _assert-starts-at-zero($map) {\n  $values: map-values($map);\n  $first-value: nth($values, 1);\n  @if $first-value != 0 {\n    @warn \"First breakpoint in `$grid-breakpoints` must start at 0, but starts at #{$first-value}.\";\n  }\n}\n\n\n// General variable structure\n//\n// Variable format should follow the `$component-modifier-state-property` order.\n\n\n// Colors\n//\n// Grayscale and brand colors for use across Bootstrap.\n\n// Start with assigning color names to specific hex values.\n$white:  #fff !default;\n$black:  #000 !default;\n$red:    #d9534f !default;\n$orange: #f0ad4e !default;\n$yellow: #ffd500 !default;\n$green:  #5cb85c !default;\n$blue:   #0275d8 !default;\n$teal:   #5bc0de !default;\n$pink:   #ff5b77 !default;\n$purple: #613d7c !default;\n\n// Create grayscale\n$gray-dark:                 #292b2c !default;\n$gray:                      #464a4c !default;\n$gray-light:                #636c72 !default;\n$gray-lighter:              #eceeef !default;\n$gray-lightest:             #f7f7f9 !default;\n\n// Reassign color vars to semantic color scheme\n$brand-primary:             $blue !default;\n$brand-success:             $green !default;\n$brand-info:                $teal !default;\n$brand-warning:             $orange !default;\n$brand-danger:              $red !default;\n$brand-inverse:             $gray-dark !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-rounded:            true !default;\n$enable-shadows:            false !default;\n$enable-gradients:          false !default;\n$enable-transitions:        true !default;\n$enable-hover-media-query:  false !default;\n$enable-grid-classes:       true !default;\n$enable-print-styles:       true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer:   1rem !default;\n$spacer-x: $spacer !default;\n$spacer-y: $spacer !default;\n$spacers: (\n  0: (\n    x: 0,\n    y: 0\n  ),\n  1: (\n    x: ($spacer-x * .25),\n    y: ($spacer-y * .25)\n  ),\n  2: (\n    x: ($spacer-x * .5),\n    y: ($spacer-y * .5)\n  ),\n  3: (\n    x: $spacer-x,\n    y: $spacer-y\n  ),\n  4: (\n    x: ($spacer-x * 1.5),\n    y: ($spacer-y * 1.5)\n  ),\n  5: (\n    x: ($spacer-x * 3),\n    y: ($spacer-y * 3)\n  )\n) !default;\n$border-width: 1px !default;\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: (\n  25: 25%,\n  50: 50%,\n  75: 75%,\n  100: 100%\n) !default;\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:       $white !default;\n$body-color:    $gray-dark !default;\n$inverse-bg:    $gray-dark !default;\n$inverse-color: $gray-lighter !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:            $brand-primary !default;\n$link-decoration:       none !default;\n$link-hover-color:      darken($link-color, 15%) !default;\n$link-hover-decoration: underline !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints);\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:               12 !default;\n$grid-gutter-width-base:     30px !default;\n$grid-gutter-widths: (\n  xs: $grid-gutter-width-base,\n  sm: $grid-gutter-width-base,\n  md: $grid-gutter-width-base,\n  lg: $grid-gutter-width-base,\n  xl: $grid-gutter-width-base\n) !default;\n\n// Fonts\n//\n// Font, line-height, and color for body text, headings, and more.\n\n$font-family-sans-serif: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif !default;\n$font-family-serif:      Georgia, \"Times New Roman\", Times, serif !default;\n$font-family-monospace:  Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:       $font-family-sans-serif !default;\n\n$font-size-base: 1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:   1.25rem !default;\n$font-size-sm:   .875rem !default;\n$font-size-xs:   .75rem !default;\n\n$font-weight-normal: normal !default;\n$font-weight-bold: bold !default;\n\n$font-weight-base: $font-weight-normal !default;\n$line-height-base: 1.5 !default;\n\n$font-size-h1: 2.5rem !default;\n$font-size-h2: 2rem !default;\n$font-size-h3: 1.75rem !default;\n$font-size-h4: 1.5rem !default;\n$font-size-h5: 1.25rem !default;\n$font-size-h6: 1rem !default;\n\n$headings-margin-bottom: ($spacer / 2) !default;\n$headings-font-family:   inherit !default;\n$headings-font-weight:   500 !default;\n$headings-line-height:   1.1 !default;\n$headings-color:         inherit !default;\n\n$display1-size: 6rem !default;\n$display2-size: 5.5rem !default;\n$display3-size: 4.5rem !default;\n$display4-size: 3.5rem !default;\n\n$display1-weight:     300 !default;\n$display2-weight:     300 !default;\n$display3-weight:     300 !default;\n$display4-weight:     300 !default;\n$display-line-height: $headings-line-height !default;\n\n$lead-font-size:   1.25rem !default;\n$lead-font-weight: 300 !default;\n\n$small-font-size: 80% !default;\n\n$text-muted: $gray-light !default;\n\n$abbr-border-color: $gray-light !default;\n\n$blockquote-small-color:  $gray-light !default;\n$blockquote-font-size:    ($font-size-base * 1.25) !default;\n$blockquote-border-color: $gray-lighter !default;\n$blockquote-border-width: .25rem !default;\n\n$hr-border-color: rgba($black,.1) !default;\n$hr-border-width: $border-width !default;\n\n$mark-padding: .2em !default;\n\n$dt-font-weight: $font-weight-bold !default;\n\n$kbd-box-shadow:         inset 0 -.1rem 0 rgba($black,.25) !default;\n$nested-kbd-font-weight: $font-weight-bold !default;\n\n$list-inline-padding: 5px !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:         (4 / 3) !default;\n$line-height-sm:         1.5 !default;\n\n$border-radius:          .25rem !default;\n$border-radius-lg:       .3rem !default;\n$border-radius-sm:       .2rem !default;\n\n$component-active-color: $white !default;\n$component-active-bg:    $brand-primary !default;\n\n$caret-width:            .3em !default;\n\n$transition-base:        all .2s ease-in-out !default;\n$transition-fade:        opacity .15s linear !default;\n$transition-collapse:    height .35s ease !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:            .75rem !default;\n$table-sm-cell-padding:         .3rem !default;\n\n$table-bg:                      transparent !default;\n\n$table-inverse-bg:              $gray-dark !default;\n$table-inverse-color:           $body-bg !default;\n\n$table-bg-accent:               rgba($black,.05) !default;\n$table-bg-hover:                rgba($black,.075) !default;\n$table-bg-active:               $table-bg-hover !default;\n\n$table-head-bg:                 $gray-lighter !default;\n$table-head-color:              $gray !default;\n\n$table-border-width:            $border-width !default;\n$table-border-color:            $gray-lighter !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background and border color.\n\n$btn-padding-x:                  1rem !default;\n$btn-padding-y:                  .5rem !default;\n$btn-line-height:                1.25 !default;\n$btn-font-weight:                $font-weight-normal !default;\n$btn-box-shadow:                 inset 0 1px 0 rgba($white,.15), 0 1px 1px rgba($black,.075) !default;\n$btn-focus-box-shadow:           0 0 0 2px rgba($brand-primary, .25) !default;\n$btn-active-box-shadow:          inset 0 3px 5px rgba($black,.125) !default;\n\n$btn-primary-color:              $white !default;\n$btn-primary-bg:                 $brand-primary !default;\n$btn-primary-border:             $btn-primary-bg !default;\n\n$btn-secondary-color:            $gray-dark !default;\n$btn-secondary-bg:               $white !default;\n$btn-secondary-border:           #ccc !default;\n\n$btn-info-color:                 $white !default;\n$btn-info-bg:                    $brand-info !default;\n$btn-info-border:                $btn-info-bg !default;\n\n$btn-success-color:              $white !default;\n$btn-success-bg:                 $brand-success !default;\n$btn-success-border:             $btn-success-bg !default;\n\n$btn-warning-color:              $white !default;\n$btn-warning-bg:                 $brand-warning !default;\n$btn-warning-border:             $btn-warning-bg !default;\n\n$btn-danger-color:               $white !default;\n$btn-danger-bg:                  $brand-danger !default;\n$btn-danger-border:              $btn-danger-bg !default;\n\n$btn-link-disabled-color:        $gray-light !default;\n\n$btn-padding-x-sm:               .5rem !default;\n$btn-padding-y-sm:               .25rem !default;\n\n$btn-padding-x-lg:               1.5rem !default;\n$btn-padding-y-lg:               .75rem !default;\n\n$btn-block-spacing-y:            .5rem !default;\n$btn-toolbar-margin:             .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:              $border-radius !default;\n$btn-border-radius-lg:           $border-radius-lg !default;\n$btn-border-radius-sm:           $border-radius-sm !default;\n\n$btn-transition:                 all .2s ease-in-out !default;\n\n\n// Forms\n\n$input-padding-x:                .75rem !default;\n$input-padding-y:                .5rem !default;\n$input-line-height:              1.25 !default;\n\n$input-bg:                       $white !default;\n$input-bg-disabled:              $gray-lighter !default;\n\n$input-color:                    $gray !default;\n$input-border-color:             rgba($black,.15) !default;\n$input-btn-border-width:         $border-width !default; // For form controls and buttons\n$input-box-shadow:               inset 0 1px 1px rgba($black,.075) !default;\n\n$input-border-radius:            $border-radius !default;\n$input-border-radius-lg:         $border-radius-lg !default;\n$input-border-radius-sm:         $border-radius-sm !default;\n\n$input-bg-focus:                 $input-bg !default;\n$input-border-focus:             lighten($brand-primary, 25%) !default;\n$input-box-shadow-focus:         $input-box-shadow, rgba($input-border-focus, .6) !default;\n$input-color-focus:              $input-color !default;\n\n$input-color-placeholder:        $gray-light !default;\n\n$input-padding-x-sm:             .5rem !default;\n$input-padding-y-sm:             .25rem !default;\n\n$input-padding-x-lg:             1.5rem !default;\n$input-padding-y-lg:             .75rem !default;\n\n$input-height:                   (($font-size-base * $input-line-height) + ($input-padding-y * 2)) !default;\n$input-height-lg:                (($font-size-lg * $line-height-lg) + ($input-padding-y-lg * 2)) !default;\n$input-height-sm:                (($font-size-sm * $line-height-sm) + ($input-padding-y-sm * 2)) !default;\n\n$input-transition:               border-color ease-in-out .15s, box-shadow ease-in-out .15s !default;\n\n$form-text-margin-top:     .25rem !default;\n$form-feedback-margin-top: $form-text-margin-top !default;\n\n$form-check-margin-bottom:  .5rem !default;\n$form-check-input-gutter:   1.25rem !default;\n$form-check-input-margin-y: .25rem !default;\n$form-check-input-margin-x: .25rem !default;\n\n$form-check-inline-margin-x: .75rem !default;\n\n$form-group-margin-bottom:       $spacer-y !default;\n\n$input-group-addon-bg:           $gray-lighter !default;\n$input-group-addon-border-color: $input-border-color !default;\n\n$cursor-disabled:                not-allowed !default;\n\n$custom-control-gutter:   1.5rem !default;\n$custom-control-spacer-x: 1rem !default;\n$custom-control-spacer-y: .25rem !default;\n\n$custom-control-indicator-size:       1rem !default;\n$custom-control-indicator-margin-y:   (($line-height-base * 1rem) - $custom-control-indicator-size) / -2 !default;\n$custom-control-indicator-bg:         #ddd !default;\n$custom-control-indicator-bg-size:    50% 50% !default;\n$custom-control-indicator-box-shadow: inset 0 .25rem .25rem rgba($black,.1) !default;\n\n$custom-control-disabled-cursor:             $cursor-disabled !default;\n$custom-control-disabled-indicator-bg:       $gray-lighter !default;\n$custom-control-disabled-description-color:  $gray-light !default;\n\n$custom-control-checked-indicator-color:      $white !default;\n$custom-control-checked-indicator-bg:         $brand-primary !default;\n$custom-control-checked-indicator-box-shadow: none !default;\n\n$custom-control-focus-indicator-box-shadow: 0 0 0 1px $body-bg, 0 0 0 3px $brand-primary !default;\n\n$custom-control-active-indicator-color:      $white !default;\n$custom-control-active-indicator-bg:         lighten($brand-primary, 35%) !default;\n$custom-control-active-indicator-box-shadow: none !default;\n\n$custom-checkbox-radius: $border-radius !default;\n$custom-checkbox-checked-icon: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$custom-control-checked-indicator-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-checkbox-indeterminate-bg: $brand-primary !default;\n$custom-checkbox-indeterminate-indicator-color: $custom-control-checked-indicator-color !default;\n$custom-checkbox-indeterminate-icon: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#{$custom-checkbox-indeterminate-indicator-color}' d='M0 2h4'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-checkbox-indeterminate-box-shadow: none !default;\n\n$custom-radio-radius: 50% !default;\n$custom-radio-checked-icon: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#{$custom-control-checked-indicator-color}'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$custom-select-padding-x:          .75rem  !default;\n$custom-select-padding-y:          .375rem !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-line-height:         $input-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-light !default;\n$custom-select-bg:            $white !default;\n$custom-select-disabled-bg:   $gray-lighter !default;\n$custom-select-bg-size:       8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color: #333 !default;\n$custom-select-indicator:     str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$custom-select-border-width:  $input-btn-border-width !default;\n$custom-select-border-color:  $input-border-color !default;\n$custom-select-border-radius: $border-radius !default;\n\n$custom-select-focus-border-color: lighten($brand-primary, 25%) !default;\n$custom-select-focus-box-shadow:   inset 0 1px 2px rgba($black, .075), 0 0 5px rgba($custom-select-focus-border-color, .5) !default;\n\n$custom-select-sm-padding-y:  .2rem !default;\n$custom-select-sm-font-size:  75% !default;\n\n$custom-file-height:           2.5rem !default;\n$custom-file-width:            14rem !default;\n$custom-file-focus-box-shadow: 0 0 0 .075rem $white, 0 0 0 .2rem $brand-primary !default;\n\n$custom-file-padding-x:     .5rem !default;\n$custom-file-padding-y:     1rem !default;\n$custom-file-line-height:   1.5 !default;\n$custom-file-color:         $gray !default;\n$custom-file-bg:            $white !default;\n$custom-file-border-width:  $border-width !default;\n$custom-file-border-color:  $input-border-color !default;\n$custom-file-border-radius: $border-radius !default;\n$custom-file-box-shadow:    inset 0 .2rem .4rem rgba($black,.05) !default;\n$custom-file-button-color:  $custom-file-color !default;\n$custom-file-button-bg:     $gray-lighter !default;\n$custom-file-text: (\n  placeholder: (\n    en: \"Choose file...\"\n  ),\n  button-label: (\n    en: \"Browse\"\n  )\n) !default;\n\n\n// Form validation icons\n$form-icon-success-color: $brand-success !default;\n$form-icon-success: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$form-icon-success-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$form-icon-warning-color: $brand-warning !default;\n$form-icon-warning: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$form-icon-warning-color}' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$form-icon-danger-color: $brand-danger !default;\n$form-icon-danger: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$form-icon-danger-color}' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:             10rem !default;\n$dropdown-padding-y:             .5rem !default;\n$dropdown-margin-top:            .125rem !default;\n$dropdown-bg:                    $white !default;\n$dropdown-border-color:          rgba($black,.15) !default;\n$dropdown-border-width:          $border-width !default;\n$dropdown-divider-bg:            $gray-lighter !default;\n$dropdown-box-shadow:            0 .5rem 1rem rgba($black,.175) !default;\n\n$dropdown-link-color:            $gray-dark !default;\n$dropdown-link-hover-color:      darken($gray-dark, 5%) !default;\n$dropdown-link-hover-bg:         $gray-lightest !default;\n\n$dropdown-link-active-color:     $component-active-color !default;\n$dropdown-link-active-bg:        $component-active-bg !default;\n\n$dropdown-link-disabled-color:   $gray-light !default;\n\n$dropdown-item-padding-x:        1.5rem !default;\n\n$dropdown-header-color:          $gray-light !default;\n\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown-backdrop:  990 !default;\n$zindex-navbar:             1000 !default;\n$zindex-dropdown:           1000 !default;\n$zindex-fixed:              1030 !default;\n$zindex-sticky:             1030 !default;\n$zindex-modal-backdrop:     1040 !default;\n$zindex-modal:              1050 !default;\n$zindex-popover:            1060 !default;\n$zindex-tooltip:            1070 !default;\n\n\n// Navbar\n\n$navbar-border-radius:              $border-radius !default;\n$navbar-padding-x:                  $spacer !default;\n$navbar-padding-y:                  ($spacer / 2) !default;\n\n$navbar-brand-padding-y:            .25rem !default;\n\n$navbar-toggler-padding-x:           .75rem !default;\n$navbar-toggler-padding-y:           .25rem !default;\n$navbar-toggler-font-size:           $font-size-lg !default;\n$navbar-toggler-border-radius:       $btn-border-radius !default;\n\n$navbar-inverse-color:                 rgba($white,.5) !default;\n$navbar-inverse-hover-color:           rgba($white,.75) !default;\n$navbar-inverse-active-color:          rgba($white,1) !default;\n$navbar-inverse-disabled-color:        rgba($white,.25) !default;\n$navbar-inverse-toggler-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-inverse-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-inverse-toggler-border:        rgba($white,.1) !default;\n\n$navbar-light-color:                rgba($black,.5) !default;\n$navbar-light-hover-color:          rgba($black,.7) !default;\n$navbar-light-active-color:         rgba($black,.9) !default;\n$navbar-light-disabled-color:       rgba($black,.3) !default;\n$navbar-light-toggler-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$navbar-light-toggler-border:       rgba($black,.1) !default;\n\n// Navs\n\n$nav-item-margin:               .2rem !default;\n$nav-item-inline-spacer:        1rem !default;\n$nav-link-padding:              .5em 1em !default;\n$nav-link-hover-bg:             $gray-lighter !default;\n$nav-disabled-link-color:       $gray-light !default;\n\n$nav-tabs-border-color:                       #ddd !default;\n$nav-tabs-border-width:                       $border-width !default;\n$nav-tabs-border-radius:                      $border-radius !default;\n$nav-tabs-link-hover-border-color:            $gray-lighter !default;\n$nav-tabs-active-link-hover-color:            $gray !default;\n$nav-tabs-active-link-hover-bg:               $body-bg !default;\n$nav-tabs-active-link-hover-border-color:     #ddd !default;\n$nav-tabs-justified-link-border-color:        #ddd !default;\n$nav-tabs-justified-active-link-border-color: $body-bg !default;\n\n$nav-pills-border-radius:     $border-radius !default;\n$nav-pills-active-link-color: $component-active-color !default;\n$nav-pills-active-link-bg:    $component-active-bg !default;\n\n\n// Pagination\n\n$pagination-padding-x:                .75rem !default;\n$pagination-padding-y:                .5rem !default;\n$pagination-padding-x-sm:             .5rem !default;\n$pagination-padding-y-sm:             .25rem !default;\n$pagination-padding-x-lg:             1.5rem !default;\n$pagination-padding-y-lg:             .75rem !default;\n$pagination-line-height:              1.25 !default;\n\n$pagination-color:                     $link-color !default;\n$pagination-bg:                        $white !default;\n$pagination-border-width:              $border-width !default;\n$pagination-border-color:              #ddd !default;\n\n$pagination-hover-color:               $link-hover-color !default;\n$pagination-hover-bg:                  $gray-lighter !default;\n$pagination-hover-border:              #ddd !default;\n\n$pagination-active-color:              $white !default;\n$pagination-active-bg:                 $brand-primary !default;\n$pagination-active-border:             $brand-primary !default;\n\n$pagination-disabled-color:            $gray-light !default;\n$pagination-disabled-bg:               $white !default;\n$pagination-disabled-border:           #ddd !default;\n\n\n// Jumbotron\n\n$jumbotron-padding:              2rem !default;\n$jumbotron-bg:                   $gray-lighter !default;\n\n\n// Form states and alerts\n//\n// Define colors for form feedback states and, by default, alerts.\n\n$state-success-text:             #3c763d !default;\n$state-success-bg:               #dff0d8 !default;\n$state-success-border:           darken($state-success-bg, 5%) !default;\n\n$state-info-text:                #31708f !default;\n$state-info-bg:                  #d9edf7 !default;\n$state-info-border:              darken($state-info-bg, 7%) !default;\n\n$state-warning-text:             #8a6d3b !default;\n$state-warning-bg:               #fcf8e3 !default;\n$mark-bg:                        $state-warning-bg !default;\n$state-warning-border:           darken($state-warning-bg, 5%) !default;\n\n$state-danger-text:              #a94442 !default;\n$state-danger-bg:                #f2dede !default;\n$state-danger-border:            darken($state-danger-bg, 5%) !default;\n\n\n// Cards\n\n$card-spacer-x:            1.25rem !default;\n$card-spacer-y:            .75rem !default;\n$card-border-width:        1px !default;\n$card-border-radius:       $border-radius !default;\n$card-border-color:        rgba($black,.125) !default;\n$card-border-radius-inner: calc(#{$card-border-radius} - #{$card-border-width}) !default;\n$card-cap-bg:              $gray-lightest !default;\n$card-bg:                  $white !default;\n\n$card-link-hover-color:    $white !default;\n\n$card-img-overlay-padding: 1.25rem !default;\n\n$card-deck-margin:          ($grid-gutter-width-base / 2) !default;\n\n$card-columns-count:        3 !default;\n$card-columns-gap:          1.25rem !default;\n$card-columns-margin:       $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-max-width:           200px !default;\n$tooltip-color:               $white !default;\n$tooltip-bg:                  $black !default;\n$tooltip-opacity:             .9 !default;\n$tooltip-padding-y:           3px !default;\n$tooltip-padding-x:           8px !default;\n$tooltip-margin:              3px !default;\n\n$tooltip-arrow-width:         5px !default;\n$tooltip-arrow-color:         $tooltip-bg !default;\n\n\n// Popovers\n\n$popover-inner-padding:               1px !default;\n$popover-bg:                          $white !default;\n$popover-max-width:                   276px !default;\n$popover-border-width:                $border-width !default;\n$popover-border-color:                rgba($black,.2) !default;\n$popover-box-shadow:                  0 5px 10px rgba($black,.2) !default;\n\n$popover-title-bg:                    darken($popover-bg, 3%) !default;\n$popover-title-padding-x:             14px !default;\n$popover-title-padding-y:             8px !default;\n\n$popover-content-padding-x:           14px !default;\n$popover-content-padding-y:           9px !default;\n\n$popover-arrow-width:                 10px !default;\n$popover-arrow-color:                 $popover-bg !default;\n\n$popover-arrow-outer-width:           ($popover-arrow-width + 1px) !default;\n$popover-arrow-outer-color:           fade-in($popover-border-color, .05) !default;\n\n\n// Badges\n\n$badge-default-bg:            $gray-light !default;\n$badge-primary-bg:            $brand-primary !default;\n$badge-success-bg:            $brand-success !default;\n$badge-info-bg:               $brand-info !default;\n$badge-warning-bg:            $brand-warning !default;\n$badge-danger-bg:             $brand-danger !default;\n\n$badge-color:                 $white !default;\n$badge-link-hover-color:      $white !default;\n$badge-font-size:             75% !default;\n$badge-font-weight:           $font-weight-bold !default;\n$badge-padding-x:             .4em !default;\n$badge-padding-y:             .25em !default;\n\n$badge-pill-padding-x:        .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:    10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:         15px !default;\n\n$modal-dialog-margin:         10px !default;\n$modal-dialog-sm-up-margin-y: 30px !default;\n\n$modal-title-line-height:     $line-height-base !default;\n\n$modal-content-bg:               $white !default;\n$modal-content-border-color:     rgba($black,.2) !default;\n$modal-content-border-width:     $border-width !default;\n$modal-content-xs-box-shadow:    0 3px 9px rgba($black,.5) !default;\n$modal-content-sm-up-box-shadow: 0 5px 15px rgba($black,.5) !default;\n\n$modal-backdrop-bg:           $black !default;\n$modal-backdrop-opacity:      .5 !default;\n$modal-header-border-color:   $gray-lighter !default;\n$modal-footer-border-color:   $modal-header-border-color !default;\n$modal-header-border-width:   $modal-content-border-width !default;\n$modal-footer-border-width:   $modal-header-border-width !default;\n$modal-header-padding:        15px !default;\n\n$modal-lg:                    800px !default;\n$modal-md:                    500px !default;\n$modal-sm:                    300px !default;\n\n$modal-transition:            transform .3s ease-out !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-x:             1.25rem !default;\n$alert-padding-y:             .75rem !default;\n$alert-margin-bottom:         $spacer-y !default;\n$alert-border-radius:         $border-radius !default;\n$alert-link-font-weight:      $font-weight-bold !default;\n$alert-border-width:          $border-width !default;\n\n$alert-success-bg:            $state-success-bg !default;\n$alert-success-text:          $state-success-text !default;\n$alert-success-border:        $state-success-border !default;\n\n$alert-info-bg:               $state-info-bg !default;\n$alert-info-text:             $state-info-text !default;\n$alert-info-border:           $state-info-border !default;\n\n$alert-warning-bg:            $state-warning-bg !default;\n$alert-warning-text:          $state-warning-text !default;\n$alert-warning-border:        $state-warning-border !default;\n\n$alert-danger-bg:             $state-danger-bg !default;\n$alert-danger-text:           $state-danger-text !default;\n$alert-danger-border:         $state-danger-border !default;\n\n\n// Progress bars\n\n$progress-height:               1rem !default;\n$progress-font-size:            .75rem !default;\n$progress-bg:                   $gray-lighter !default;\n$progress-border-radius:        $border-radius !default;\n$progress-box-shadow:           inset 0 .1rem .1rem rgba($black,.1) !default;\n$progress-bar-color:            $white !default;\n$progress-bar-bg:               $brand-primary !default;\n$progress-bar-animation-timing: 1s linear infinite !default;\n\n// List group\n\n$list-group-color:               $body-color !default;\n$list-group-bg:                  $white !default;\n$list-group-border-color:        rgba($black,.125) !default;\n$list-group-border-width:        $border-width !default;\n$list-group-border-radius:       $border-radius !default;\n\n$list-group-item-padding-x:      1.25rem !default;\n$list-group-item-padding-y:      .75rem !default;\n\n$list-group-hover-bg:            $gray-lightest !default;\n$list-group-active-color:        $component-active-color !default;\n$list-group-active-bg:           $component-active-bg !default;\n$list-group-active-border:       $list-group-active-bg !default;\n$list-group-active-text-color:   lighten($list-group-active-bg, 50%) !default;\n\n$list-group-disabled-color:      $gray-light !default;\n$list-group-disabled-bg:         $list-group-bg !default;\n$list-group-disabled-text-color: $list-group-disabled-color !default;\n\n$list-group-link-color:          $gray !default;\n$list-group-link-heading-color:  $gray-dark !default;\n$list-group-link-hover-color:    $list-group-link-color !default;\n\n$list-group-link-active-color:   $list-group-color !default;\n$list-group-link-active-bg:      $gray-lighter !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:           .25rem !default;\n$thumbnail-bg:                $body-bg !default;\n$thumbnail-border-width:      $border-width !default;\n$thumbnail-border-color:      #ddd !default;\n$thumbnail-border-radius:     $border-radius !default;\n$thumbnail-box-shadow:        0 1px 2px rgba($black,.075) !default;\n$thumbnail-transition:        all .2s ease-in-out !default;\n\n\n// Figures\n\n$figure-caption-font-size: 90% !default;\n$figure-caption-color:     $gray-light !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-padding-y:          .75rem !default;\n$breadcrumb-padding-x:          1rem !default;\n$breadcrumb-item-padding:       .5rem !default;\n\n$breadcrumb-bg:                 $gray-lighter !default;\n$breadcrumb-divider-color:      $gray-light !default;\n$breadcrumb-active-color:       $gray-light !default;\n$breadcrumb-divider:            \"/\" !default;\n\n\n// Carousel\n\n$carousel-control-color:                      $white !default;\n$carousel-control-width:                      15% !default;\n$carousel-control-opacity:                    .5 !default;\n\n$carousel-indicator-width:                    30px !default;\n$carousel-indicator-height:                   3px !default;\n$carousel-indicator-spacer:                   3px !default;\n$carousel-indicator-active-bg:                $white !default;\n\n$carousel-caption-width:                      70% !default;\n$carousel-caption-color:                      $white !default;\n\n$carousel-control-icon-width:                 20px !default;\n\n$carousel-control-prev-icon-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n$carousel-control-next-icon-bg: str-replace(url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"), \"#\", \"%23\") !default;\n\n$carousel-transition:           transform .6s ease-in-out !default;\n\n\n// Close\n\n$close-font-size:             $font-size-base * 1.5 !default;\n$close-font-weight:           $font-weight-bold !default;\n$close-color:                 $black !default;\n$close-text-shadow:           0 1px 0 $white !default;\n\n\n// Code\n\n$code-font-size:              90% !default;\n$code-padding-x:              .4rem !default;\n$code-padding-y:              .2rem !default;\n$code-color:                  #bd4147 !default;\n$code-bg:                     $gray-lightest !default;\n\n$kbd-color:                   $white !default;\n$kbd-bg:                      $gray-dark !default;\n\n$pre-bg:                      $gray-lightest !default;\n$pre-color:                   $gray-dark !default;\n$pre-border-color:            #ccc !default;\n$pre-scrollable-max-height:   340px !default;\n","@mixin hover {\n  // TODO: re-enable along with mq4-hover-shim\n//  @if $enable-hover-media-query {\n//    // See Media Queries Level 4: https://drafts.csswg.org/mediaqueries/#hover\n//    // Currently shimmed by https://github.com/twbs/mq4-hover-shim\n//    @media (hover: hover) {\n//      &:hover { @content }\n//    }\n//  }\n//  @else {\n    &:hover { @content }\n//  }\n}\n\n@mixin hover-focus {\n  @if $enable-hover-media-query {\n    &:focus { @content }\n    @include hover { @content }\n  }\n  @else {\n    &:focus,\n    &:hover {\n      @content\n    }\n  }\n}\n\n@mixin plain-hover-focus {\n  @if $enable-hover-media-query {\n    &,\n    &:focus {\n      @content\n    }\n    @include hover { @content }\n  }\n  @else {\n    &,\n    &:focus,\n    &:hover {\n      @content\n    }\n  }\n}\n\n@mixin hover-focus-active {\n  @if $enable-hover-media-query {\n    &:focus,\n    &:active {\n      @content\n    }\n    @include hover { @content }\n  }\n  @else {\n    &:focus,\n    &:active,\n    &:hover {\n      @content\n    }\n  }\n}\n","// Single side border-radius\n\n@mixin border-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-radius: $radius;\n  }\n}\n\n@mixin border-top-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: $radius;\n    border-top-left-radius: $radius;\n  }\n}\n\n@mixin border-right-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: $radius;\n    border-top-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: $radius;\n    border-bottom-left-radius: $radius;\n  }\n}\n\n@mixin border-left-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: $radius;\n    border-top-left-radius: $radius;\n  }\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.1.\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px))\n//    767px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - 1px, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  @include media-breakpoint-up($lower, $breakpoints) {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  @include media-breakpoint-between($name, $name, $breakpoints) {\n    @content;\n  }\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s or `<ul>`s.\n\n.nav {\n  display: flex;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding;\n\n  @include hover-focus {\n    text-decoration: none;\n  }\n\n  // Disabled state lightens text and removes hover/tab effects\n  &.disabled {\n    color: $nav-disabled-link-color;\n    cursor: $cursor-disabled;\n  }\n}\n\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-item {\n    margin-bottom: -$nav-tabs-border-width;\n  }\n\n  .nav-link {\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    @include hover-focus {\n      border-color: $nav-tabs-link-hover-border-color $nav-tabs-link-hover-border-color $nav-tabs-border-color;\n    }\n\n    &.disabled {\n      color: $nav-disabled-link-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-active-link-hover-color;\n    background-color: $nav-tabs-active-link-hover-bg;\n    border-color: $nav-tabs-active-link-hover-border-color $nav-tabs-active-link-hover-border-color $nav-tabs-active-link-hover-bg;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-pills-active-link-color;\n    cursor: default;\n    background-color: $nav-pills-active-link-bg;\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  .nav-item {\n    flex: 1 1 100%;\n    text-align: center;\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","@import \"../../../../node_modules/bootstrap/scss/_variables\";\n@import \"../../../../node_modules/bootstrap/scss/_mixins\";\n@import \"../../../../node_modules/bootstrap/scss/_navbar\";\n@import \"../../../../node_modules/bootstrap/scss/_nav\";\n\n$link-padding-top:    1rem;\n$link-padding-right:  1rem;\n$link-padding-bottom: 1rem;\n$link-padding-left:   1.5rem;\n\n$side-link-padding: $link-padding-top $link-padding-right $link-padding-bottom $link-padding-left;\n\n$zindex-sidebar: $zindex-sticky;\n\n.navbar-toggler-left{\n  position: fixed;\n  top: 8px;\n  z-index: $zindex-sidebar;\n}\n\n.navbar-toggler-right{\n  position: fixed;\n  top: 8px;\n  z-index: $zindex-sidebar;\n}\n\n.sidebar-collapse{\n  @include media-breakpoint-down(md) {\n      display: none;\n  }\n  @include media-breakpoint-up(lg) {\n    display: block !important;\n  }\n  position: fixed;\n  z-index: $zindex-sidebar;\n  top: 50px;\n  width: 225px;\n  bottom: 0px;\n  border-radius: 0;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  height: 100%;\n  min-height: 100%;\n}\n\n.side-item {\n  @extend .nav-item;\n  padding: 8px 0px 0px;\n}\n\n.sub-item {\n  @extend .nav-item;\n}\n\n.sidebar {\n  height: 100%;\n  overflow-y: auto;\n  padding: $side-link-padding;\n  margin-bottom: 0;\n  .side-item {\n    .side-link {\n      text-decoration: none;\n    }\n  }\n}\n\n.sidebar-light-nav {\n  @extend .sidebar;\n  .side-item {\n    .side-link {\n      color: $navbar-light-color;\n      @include hover-focus {\n        color: $navbar-light-hover-color;\n      }\n    }\n  }\n}\n\n.sidebar-inverse-nav {\n  @extend .sidebar;\n  .side-item {\n    .side-link {\n      color: $navbar-inverse-color;\n      @include hover-focus {\n        color: $navbar-inverse-hover-color;\n      }\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"topnav.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"signup.component.scss","sourceRoot":"webpack://"}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 377,
	"./af.js": 377,
	"./ar": 383,
	"./ar-dz": 378,
	"./ar-dz.js": 378,
	"./ar-ly": 379,
	"./ar-ly.js": 379,
	"./ar-ma": 380,
	"./ar-ma.js": 380,
	"./ar-sa": 381,
	"./ar-sa.js": 381,
	"./ar-tn": 382,
	"./ar-tn.js": 382,
	"./ar.js": 383,
	"./az": 384,
	"./az.js": 384,
	"./be": 385,
	"./be.js": 385,
	"./bg": 386,
	"./bg.js": 386,
	"./bn": 387,
	"./bn.js": 387,
	"./bo": 388,
	"./bo.js": 388,
	"./br": 389,
	"./br.js": 389,
	"./bs": 390,
	"./bs.js": 390,
	"./ca": 391,
	"./ca.js": 391,
	"./cs": 392,
	"./cs.js": 392,
	"./cv": 393,
	"./cv.js": 393,
	"./cy": 394,
	"./cy.js": 394,
	"./da": 395,
	"./da.js": 395,
	"./de": 397,
	"./de-at": 396,
	"./de-at.js": 396,
	"./de.js": 397,
	"./dv": 398,
	"./dv.js": 398,
	"./el": 399,
	"./el.js": 399,
	"./en-au": 400,
	"./en-au.js": 400,
	"./en-ca": 401,
	"./en-ca.js": 401,
	"./en-gb": 402,
	"./en-gb.js": 402,
	"./en-ie": 403,
	"./en-ie.js": 403,
	"./en-nz": 404,
	"./en-nz.js": 404,
	"./eo": 405,
	"./eo.js": 405,
	"./es": 407,
	"./es-do": 406,
	"./es-do.js": 406,
	"./es.js": 407,
	"./et": 408,
	"./et.js": 408,
	"./eu": 409,
	"./eu.js": 409,
	"./fa": 410,
	"./fa.js": 410,
	"./fi": 411,
	"./fi.js": 411,
	"./fo": 412,
	"./fo.js": 412,
	"./fr": 415,
	"./fr-ca": 413,
	"./fr-ca.js": 413,
	"./fr-ch": 414,
	"./fr-ch.js": 414,
	"./fr.js": 415,
	"./fy": 416,
	"./fy.js": 416,
	"./gd": 417,
	"./gd.js": 417,
	"./gl": 418,
	"./gl.js": 418,
	"./he": 419,
	"./he.js": 419,
	"./hi": 420,
	"./hi.js": 420,
	"./hr": 421,
	"./hr.js": 421,
	"./hu": 422,
	"./hu.js": 422,
	"./hy-am": 423,
	"./hy-am.js": 423,
	"./id": 424,
	"./id.js": 424,
	"./is": 425,
	"./is.js": 425,
	"./it": 426,
	"./it.js": 426,
	"./ja": 427,
	"./ja.js": 427,
	"./jv": 428,
	"./jv.js": 428,
	"./ka": 429,
	"./ka.js": 429,
	"./kk": 430,
	"./kk.js": 430,
	"./km": 431,
	"./km.js": 431,
	"./ko": 432,
	"./ko.js": 432,
	"./ky": 433,
	"./ky.js": 433,
	"./lb": 434,
	"./lb.js": 434,
	"./lo": 435,
	"./lo.js": 435,
	"./lt": 436,
	"./lt.js": 436,
	"./lv": 437,
	"./lv.js": 437,
	"./me": 438,
	"./me.js": 438,
	"./mi": 439,
	"./mi.js": 439,
	"./mk": 440,
	"./mk.js": 440,
	"./ml": 441,
	"./ml.js": 441,
	"./mr": 442,
	"./mr.js": 442,
	"./ms": 444,
	"./ms-my": 443,
	"./ms-my.js": 443,
	"./ms.js": 444,
	"./my": 445,
	"./my.js": 445,
	"./nb": 446,
	"./nb.js": 446,
	"./ne": 447,
	"./ne.js": 447,
	"./nl": 449,
	"./nl-be": 448,
	"./nl-be.js": 448,
	"./nl.js": 449,
	"./nn": 450,
	"./nn.js": 450,
	"./pa-in": 451,
	"./pa-in.js": 451,
	"./pl": 452,
	"./pl.js": 452,
	"./pt": 454,
	"./pt-br": 453,
	"./pt-br.js": 453,
	"./pt.js": 454,
	"./ro": 455,
	"./ro.js": 455,
	"./ru": 456,
	"./ru.js": 456,
	"./se": 457,
	"./se.js": 457,
	"./si": 458,
	"./si.js": 458,
	"./sk": 459,
	"./sk.js": 459,
	"./sl": 460,
	"./sl.js": 460,
	"./sq": 461,
	"./sq.js": 461,
	"./sr": 463,
	"./sr-cyrl": 462,
	"./sr-cyrl.js": 462,
	"./sr.js": 463,
	"./ss": 464,
	"./ss.js": 464,
	"./sv": 465,
	"./sv.js": 465,
	"./sw": 466,
	"./sw.js": 466,
	"./ta": 467,
	"./ta.js": 467,
	"./te": 468,
	"./te.js": 468,
	"./tet": 469,
	"./tet.js": 469,
	"./th": 470,
	"./th.js": 470,
	"./tl-ph": 471,
	"./tl-ph.js": 471,
	"./tlh": 472,
	"./tlh.js": 472,
	"./tr": 473,
	"./tr.js": 473,
	"./tzl": 474,
	"./tzl.js": 474,
	"./tzm": 476,
	"./tzm-latn": 475,
	"./tzm-latn.js": 475,
	"./tzm.js": 476,
	"./uk": 477,
	"./uk.js": 477,
	"./uz": 478,
	"./uz.js": 478,
	"./vi": 479,
	"./vi.js": 479,
	"./x-pseudo": 480,
	"./x-pseudo.js": 480,
	"./yo": 481,
	"./yo.js": 481,
	"./zh-cn": 482,
	"./zh-cn.js": 482,
	"./zh-hk": 483,
	"./zh-hk.js": 483,
	"./zh-tw": 484,
	"./zh-tw.js": 484
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 786;


/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Accordion\n    <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/accordion\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>Displays collapsible content panels for presenting information in a limited amount of space</p>\n      <p>The <strong>accordion component</strong> builds on top of the collapse directive to provide a list of items, with collapsible\n        bodies that are collapsed or expanded by clicking on the item's header.</p>\n    </div>\n  </div>\n</div>\n<accordion>\n  <accordion-group heading=\"Static Header, initially expanded\">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group #group>\n    <div accordion-heading>\n      I can have markup, too!\n      <i class=\"pull-right float-xs-right glyphicon\" [ngClass]=\"{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}\"></i>\n    </div>\n    This is just some content to illustrate fancy headings.\n  </accordion-group>\n  <accordion-group heading=\"Content 1\">\n    <p>Content 1</p>\n  </accordion-group>\n  <accordion-group heading=\"Content 2\">\n    <p>Content 2</p>\n  </accordion-group>\n</accordion>"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Alerts\n    <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/alerts\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>\n    </div>\n  </div>\n  <p>Alerts are available for any length of text, as well as an optional dismiss\n    button. For proper styling, use one of the four <strong>required</strong>\n    contextual classes (e.g., <code>.alert-success</code>). For inline\n    dismissal, use the <code>dismissproperty</code>.</p>\n</div>\n<div *ngFor=\"let alert of alerts\">\n  <alert [type]=\"alert.type\" dismissible=\"true\">{{ alert.msg }}</alert>\n</div>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        NG2-Bootstrap\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"active breadcrumb-item\">\n          <i class=\"fa fa-th-list\"></i> ng2-bootstrap\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">Bootstrap components for Angular </h4>\n      <p class=\"card-text\">\n        A demonstration of the components available in ng2-bootstrap from\n        <a href=\"https://github.com/valor-software/ng2-bootstrap\" target=\"_blank\" class=\"card-link\">valour-software</a>\n      </p>\n      <p>\n        Each component is a minimal sample demonstration only. Whilst I endevour to keep these in sync with the latest versions from\n        valor software the user is strongly encouraged to follow each demos link. This will take you to the relevant ng2-bootstrap\n        page where the full demo, information and usage instructions are provided.\n      </p>\n      <p><em>Note</em>: Bootstrap 4 does not include glyphicons anymore, so if you want to use that font, you will need to add\n        a link to <a href=\"https://github.com/valor-software/ng2-bootstrap/blob/master/demo/src/assets/css/glyphicons.css\"><code>glyphicons.css</code></a>.\n        This package has been built using Font Awesome and all the icons changed to the nearest Font Awesome equivelent.</p>\n\n    </div>\n    <div class=\"card card-block\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Buttons\n    <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/buttons\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked.</p>\n    </div>\n  </div>\n    <p>Radio buttons with checked/unchecked states.</p>\n</div>\n<pre class=\"card card-block card-header\">{{radioModel || 'null'}}</pre>\n<div class=\"btn-group\">\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\n         btnRadio=\"Left\">Left</label>\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</label>\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\n         btnRadio=\"Right\">Right</label>\n</div>\n<div class=\"btn-group\">\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\"\n         uncheckable>Left</label>\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\"\n         uncheckable>Middle</label>\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\"\n         uncheckable>Right</label>\n</div>"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<h1>Carousel\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/carousel\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>A slideshow component for cycling through elements—images or slides of text—like a carousel. <em>Nested carousels are not supported.</em></p>\n<h3>\n  Examples\n</h3>\n<hr>\n<h4>Optional captions:</h4>\n<p>Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>&lt;slide&gt;</code>.\n  Place just about any optional HTML within there and it will be automatically aligned and formatted.</p>\n<div class=\"container\">\n  <carousel>\n    <slide>\n      <img src=\"assets/img/slider0.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Reception </h3>\n        <p>Modern office reception area.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"assets/img/slider1.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Mountains</h3>\n        <p>Here is a stunning mountain scene.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"assets/img/slider2.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Rainbow</h3>\n        <p>Idylic home after a shower.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"assets/img/slider3.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Golf course</h3>\n        <p>Nice way to relax.</p>\n      </div>\n    </slide>\n  </carousel>\n</div>\n<hr>\n<h4>Dynamic Slides:</h4>\n<div class=\"container\">\n  <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\">\n    <slide *ngFor=\"let slide of slides; let index=index\">\n      <img [src]=\"slide.image\">\n\n      <div class=\"carousel-caption\">\n        <h4>Slide {{index}}</h4>\n        <p>{{slide.text}}</p>\n      </div>\n    </slide>\n  </carousel>\n  <br/>\n  <div>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"addSlide()\">Add Slide\n  </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"removeSlide()\">Remove Current\n  </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"removeSlide(2)\">Remove #3\n  </button>\n  </div>\n  <div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\" [(ngModel)]=\"noWrapSlides\">Disable Slide Looping</label>\n    </div>\n\n    <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"myInterval\">\n  </div>\n</div>"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<h1>Collapse\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/collapse\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes. Flexible component that utilizes a handful of classes (from the <strong>required transitions component</strong>(<em>not yet implemented</em>)) for easy toggle behavior.</p>\n<h3>\n  Example with Otional Captions\n</h3>\n<button type=\"button\" class=\"btn btn-primary\"\n        (click)=\"isCollapsed = !isCollapsed\">Toggle collapse\n</button>\n<hr>\n<div (collapsed)=\"collapsed($event)\"\n     (expanded)=\"expanded($event)\"\n     [collapse]=\"isCollapsed\"\n     class=\"card card-block card-header\">\n  <div class=\"well well-lg\">Some content</div>\n</div>\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<h1>Date Picker\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/datepicker\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Datepicker is a highly configurable component that adds datepicker functionality to your pages. You can customize the date format and language, restrict the selectable date ranges.</p>\n<h3>\n  Example\n</h3>\n<style>\n  .full button span {\n    background-color: limegreen;\n    border-radius: 32px;\n    color: black;\n  }\n  .partially button span {\n    background-color: orange;\n    border-radius: 32px;\n    color: black;\n  }\n</style>\n \n<div>\n  <pre class=\"card card-block card-header\">Selected date is: <em *ngIf=\"dt\">{{ getDate() | date:'fullDate'}}</em></pre>\n  <h4>Inline</h4>\n  <div style=\"display:inline-block; min-height:290px;\">\n    <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\" [dateDisabled]=\"dateDisabled\"></datepicker>\n  </div>\n \n  <hr />\n  <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"today()\">Today</button>\n  <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"d20090824();\">2009-08-24</button>\n  <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\n  <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"toggleMin()\" tooltip=\"After today restriction\">Min date</button>\n  <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"disableTomorrow()\">Disable Tomorrow</button>\n</div>"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<h1>Dropdowns\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/dropdowns\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included\n  dropdown directives.</p>\n<h3>\n  Example\n</h3>\n<p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>dropdown</code>. Dropdowns can be triggered\n  from <code> &lt;a&gt;</code> or <code> &lt;button&gt;</code> elements to better fit your potential needs.</p>\n<hr>\n<h4>Single button dropdowns</h4>\n<p>Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to\n  work with either <code> &lt;button&gt; </code> elements:</p>\n<div class=\"row\">\n  <div class=\"col-sm-2 btn-group\" dropdown>\n    <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdownToggle>\n    Button dropdown <span class=\"caret\"></span>\n  </button>\n    <ul dropdownMenu role=\"menu\" aria-labelledby=\"single-button\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n      <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n    </ul>\n  </div>\n  <div class=\"col-sm-2\">\n    <p>And with <code> &lt;a&gt;</code> elements:</p>\n  </div>\n  <div class=\"col-sm-2\">\n    <span dropdown (onToggle)=\"toggled($event)\">\n      <a href id=\"simple-dropdown\" dropdownToggle>\n        Click me for a dropdown, yo!\n      </a>\n      <ul class=\"dropdown-menu\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <li *ngFor=\"let choice of items\">\n          <a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\n        </li>\n      </ul>\n    </span>\n  </div>\n</div>\n<hr>\n<h4>Split button dropdowns</h4>\n<div class=\"btn-group\" dropdown>\n  <button id=\"split-button\" type=\"button\" class=\"btn btn-danger\">Action</button>\n  <button type=\"button\" class=\"btn btn-danger dropdown-toggle-split\" dropdownToggle>\n    <span class=\"caret\"></span>\n    <span class=\"sr-only\">Split button!</span>\n  </button>\n  <ul class=\"dropdown-menu\" dropdownMenu role=\"menu\" aria-labelledby=\"split-button\">\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<h1>Modals\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/modals\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.</p>\n<h3>\n  Examples\n</h3>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <h4>Static modal</h4>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">Static modal</button>\n    <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n      aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Static modal</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            This is static modal, backdrop click will not close it. Click <b>&times;</b> to close modal.\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n<div class=\"col-sm-3\">\n  <h4>Otional sizes</h4>\n  <!--Large modal-->\n  <button class=\"btn btn-primary\" (click)=\"lgModal.show()\">Large modal</button>\n\n  <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Large modal</h4>\n          <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n        <div class=\"modal-body\">\n          ...\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Small modal-->\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"smModal.show()\">Small modal</button>\n\n  <div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Small modal</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n        <div class=\"modal-body\">\n          ...\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-sm-2\">\n  <h4>Child modal</h4>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"showChildModal()\">Open child modal</button>\n  <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Child modal</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n        <div class=\"modal-body\">\n          I am a child modal, opened from parent component!\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<h1>Pagination\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/pagination\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p><strong>Pagination</strong> - provide pagination links for your site or app with the multi-page pagination component, or\n  the simpler pager alternative.</p>\n<p><strong>Pager</strong> - quick previous and next links for simple pagination implementations with light markup and styles.\n  It's great for simple sites like blogs or magazines.</p>\n<h3>\n  Examples\n</h3>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <h4>Default</h4>\n    <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\">\n    </pagination>\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n      </pagination>\n      <pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\">\n      </pagination>\n      <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (numPages)=\"smallnumPages = $event\">\n      </pagination>\n      <pre class=\"col-sm-6 card card-block card-header\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n      <br/>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\n  </div>\n  <div class=\"col-sm-4\">\n    <h4>States and Limits</h4>\n    <div class=\"col-sm-4\">\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"\n        [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n    </div>\n    <pre class=\"col-sm-4 card card-block card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n  </div>\n  <div class=\"col-sm-4\">\n    <h4>Pager</h4>\n    <div style=\"margin: 20px 0;\">\n      <pagination [directionLinks]=\"false\" [totalItems]=\"totalPagerItems\" [(ngModel)]=\"currentPagerPage\" (numPages)=\"smallnumPagerPages = $event\"></pagination>\n    </div>\n\n    <div>\n      <pager [totalItems]=\"totalPagerItems\" [(ngModel)]=\"currentPagerPage\" (pageChanged)=\"pageChanged($event)\" pageBtnClass=\"btn\"\n        itemsPerPage=\"10\"></pager>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<h1>Popover\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/popover\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>Four directions</h4>\n    <p>\n      Four positioning options are available: top, right, bottom, and left aligned.\n    </p>\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      popoverTitle=\"Popover on right\" placement=\"right\">\n      Popover on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n        popoverTitle=\"Popover on top\" placement=\"top\">\n        Popover on top\n        </button>\n\n        <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n          popoverTitle=\"Popover on bottom\" placement=\"bottom\">\n          Popover on bottom\n          </button>\n\n          <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            popoverTitle=\"Popover on left\" placement=\"left\">\n            Popover on left\n            </button>\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Dismiss on next click</h4>\n    <p>Use the <code>focus</code> trigger to dismiss popovers on the next click that the user makes.</p>\n    <button type=\"button\" class=\"btn btn-success\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Dismissible popover\"\n      triggers=\"focus\">\n      Dismissible popover\n      </button>\n  </div>\n</div>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<h1>Progress Bar\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/progressbar\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<em>As of this implenetation NG2-bootstrap progress bars are not working correctly for BS4.  I recommend using BS4 progresss bars until this is fixed. </em>\n<p></p>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Static</h4>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <progress class=\"progress\" value=\"55\" max=\"100\"></progress>\n      </div>\n      <div class=\"col-sm-4\">\n        <progress class=\"progress progress-striped\" value=\"22\" max=\"100\" type=\"warning\">22%</progress>\n      </div>\n      <div class=\"col-sm-4\">\n        <progress class=\"progress progress-striped active\" max=\"200\" value=\"166\" type=\"danger\"><i>166 / 200</i></progress>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <h4>Dynamic</h4>\n    <progress class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\" style=\"height: 15px\">\n      <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\n    </progress>\n\n    <small><em>No animation</em></small>\n    <progress class=\"progress progress-success progress-bar-striped\" [value]=\"dynamic\" [max]=\"100\"><b>{{dynamic}}%</b></progress>\n\n    <small><em>Object (changes type based on value)</em></small>\n    <progress class=\"progress progress-striped progress-animated active progress-{{ type }}\" [value]=\"dynamic\" [max]=\"max\">\n      {{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n    </progress>\n    <p></p>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Stacked</h4>\n    <div class=\"row col-lg-12\">\n      <!-- todo: implement as component -->\n      <progress *ngFor=\"let baz of stacked\" class=\"progress progress-{{ baz?.type }}\" style=\"float: left; height: 1rem\" [ngStyle]=\"{width: baz.value + '%'}\"\n        [value]=\"baz.value\" [max]=\"baz.max\">\n        <span *ngIf=\"baz.value > 3\">{{baz?.value}}%</span>\n        </progress>\n        <!-- gray background -->\n        <progress class=\"progress\" value=\"0\" max=\"100\" style=\"width: 100%; height: 1rem\"></progress>\n    </div>\n    <p></p>\n    <div class=\"row col-md-12\">\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomStacked()\">Randomize</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<h1>Rating\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/rating\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Rating component that will take care of visualising a star rating bar</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Static rating</h4>\n    <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" stateOn=\"fa fa-star\" stateOff=\"fa fa-star-o\"></rating>\n    <div class=\"card\">\n      <pre class=\"card-block card-text\">Rate: <b>7</b></pre>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dynamic rating</h4>\n    <rating [(ngModel)]=\"dynRate\" [max]=\"dynMax\" [readonly]=\"dynIsReadonly\" (onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar()\"\n      [titles]=\"['one','two','three']\" stateOn=\"fa fa-star\" stateOff=\"fa fa-star-o\"></rating>\n      <span class=\"label\" [ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\"\n        [ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\n        <div class=\"card\">\n          <pre class=\"card-block card-text\">Rate: <strong>{{dynRate}}</strong>;  Readonly is: <em>{{dynIsReadonly}}</em>;  Hovering over: <strong>{{overStar || \"none\"}}</strong></pre>\n        </div>\n        <p></p>\n\n        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"dynRate = 0\" [disabled]=\"dynIsReadonly\">Clear</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"dynIsReadonly = ! dynIsReadonly\">Toggle Readonly</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Custom icons</h4>\n    <div>\n      <rating [(ngModel)]=\"x\" max=\"15\" stateOn=\"fa fa-check-circle\" stateOff=\"fa fa-check-circle-o\" style=\"color: #0275d8;\"></rating>\n      <b>(<i>Rate:</i> {{x}})</b>\n    </div>\n    <div>\n      <rating [(ngModel)]=\"y\" [ratingStates]=\"ratingStates\"></rating>\n      <b>(<i>Rate:</i> {{y}})</b>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<h1>Sortable\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/sortable\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>The <strong>sortable component</strong> represents a list of items, with ability to sort them or move to another container\n  via drag&amp;drop. Input collection isn't mutated by the component, so events <code>ngModelChange</code>, <code>onChange</code>  are using new collections.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>String items:</h4>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemStringsLeft\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemStringsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemStringsRight\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemStringsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Complex data model:</h4>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemObjectsLeft\" fieldName=\"name\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>{{ itemObjectsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemObjectsRight\" fieldName=\"name\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>{{ itemObjectsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Custom item template:</h4>\n    <div class=\"row\">\n      <template #itemTemplate let-item=\"item\" let-index=\"index\"><span>{{index}}: {{item.value}}</span></template>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemCuStringsLeft\" [itemTemplate]=\"itemTemplate\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemCuStringsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemCuStringsRight\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemCuStringsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<h1>Tabs\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/tabs\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. <strong>Nested tabs are not supported.</strong></p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-3\">\n    <h4>Static tabs:</h4>\n    <tabset>\n      <tab heading=\"Static title\">Static content</tab>\n      <tab (select)=\"alertMe()\">\n        <template tabHeading>\n          <i class=\"fa fa-bell\"></i> Alert!\n        </template>\n        I've got an HTML heading, and a select callback. Pretty cool!\n      </tab>\n    </tabset>\n\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Dynamic tabs:</h4>\n    <div (click)=\"$event.preventDefault()\">\n      <p>Select a tab by setting active binding to true:</p>\n      <p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[0].active = true\">Select second tab</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].active = true\">Select third tab</button>\n      </p>\n      <p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].disabled = ! tabs[1].disabled\">\n      Enable / Disable third tab\n    </button>\n      </p>\n      <hr/>\n      <tabset>\n        <tab heading=\"Static title\">Static content</tab>\n        <tab *ngFor=\"let tabz of tabs\" [heading]=\"tabz.title\" [active]=\"tabz.active\" (select)=\"tabz.active = true\" (deselect)=\"tabz.active = false\"\n          [disabled]=\"tabz.disabled\" [removable]=\"tabz.removable\" (removed)=\"removeTabHandler(tabz)\" [customClass]=\"tabz.customClass\">\n          {{tabz?.content}}\n          </tab>\n      </tabset>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <h4>Pills:</h4>\n    <tabset type=\"pills\">\n      <tab heading=\"Pills 1\">Pills content 1</tab>\n      <tab heading=\"Pills 2\">Pills content 2</tab>\n    </tabset>\n\n  </div>\n</div>"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<h1>Timepicker\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/timepicker\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>A lightweight & configurable timepicker directive.</p>\n<p><em>This relies on the <strong>.hidden</strong> attribute which is no longer used in bootstrap 4 so </em>\n<code>.hidden {{'{'}}  display: none !important;}</code>\n<em>has to be included the styles path.</em></p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Timepicker:</h4>\n    <timepicker [(ngModel)]=\"tpMytime\"></timepicker>\n    <pre class=\"alert alert-info\">Time is: {{tpMytime}}</pre>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Meridian:</h4>\n    <timepicker [(ngModel)]=\"mMytime\" [showMeridian]=\"mIsmeridian\"></timepicker>\n    <pre class=\"alert alert-info\">Time is: {{mMytime}}</pre>\n    <hr>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"mToggleMode()\">12H / 24H</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Disabled:</h4>\n    <timepicker [(ngModel)]=\"dMytime\" [showMeridian]=\"true\" [readonlyInput]=\"!dIsEnabled\"></timepicker>\n    <hr>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"dIsEnabled=!dIsEnabled\">Enable / Disable input</button>\n  </div>\n</div>"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<h1>Tooltip\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/tooltip\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Inspired by the excellent Tipsy jQuery plugin written by Jason Frame. Tooltips are an updated version, which don’t rely on\n  images, uses CSS3 for animations, and much more.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Simple:</h4>\n    <button type=\"button\" class=\"btn btn-primary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Simple demo\n    </button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dismiss on next click:</h4>\n    <button type=\"button\" class=\"btn btn-success\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" triggers=\"focus\">\n      Dismissible tooltip\n    </button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dynamic Content</h4>\n    <button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\n      Simple binding\n    </button>\n    <template #tolTemplate>Just another: {{content}}</template>\n    <button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\n      TemplateRef binding\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<h1>Typeahead\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/typeahead\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<h3>\n  Examples\n</h3>\n<div class=\"row\" style=\"min-height: 20rem\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Static Array:</h4>\n    <pre class=\"card card-block card-header\">Model: {{saSelected | json}}</pre>\n    <input [(ngModel)]=\"saSelected\" [typeahead]=\"states\" class=\"form-control\">\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Item template:</h4>\n    <template #customItemTemplate let-model=\"item\" let-index=\"index\">\n      <h5>This is: {{model | json}} Index: {{ index }}</h5>\n    </template>\n\n    <pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\n    <input [(ngModel)]=\"itSelected\" [typeahead]=\"states\" [typeaheadItemTemplate]=\"customItemTemplate\" class=\"form-control\">\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Option field:</h4>\n    <pre class=\"card card-block card-header\">Model: {{customSelected | json}}</pre>\n    <input [(ngModel)]=\"customSelected\" [typeahead]=\"statesComplex\" typeaheadOptionField=\"name\" class=\"form-control\">\n  </div>\n</div>"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2 class=\"page-header\">\n        Bootstrap Elements\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-desktop\"></i> Bootstrap Elements\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Hello, world!</h1>\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n    <hr class=\"my-2\">\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" href=\"http://v4-alpha.getbootstrap.com/components/jumbotron/\" role=\"button\">Learn more</a>\n    </p>\n  </div>\n\n  <div class=\"page-header\">\n    <h1>Buttons</h1>\n    <hr>\n  </div>\n  <p>\n    <button type=\"button\" class=\"btn btn-lg btn-secondary\">Default</button>\n    <button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\n  </p>\n  <p>\n    <button type=\"button\" class=\"btn btn-secondary\">Default</button>\n    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-link\">Link</button>\n  </p>\n  <p>\n    <button type=\"button\" class=\"btn btn-sm btn-secondary\">Default</button>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\n  </p>\n\n  <br>\n\n  <div class=\"page-header\">\n    <h1>Thumbnails</h1>\n    <hr>\n  </div>\n  <img class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" alt=\"\">\n\n  <div class=\"page-header\">\n    <h1>Dropdown menus</h1>\n    <hr>\n  </div>\n  <div class=\"dropdown theme-dropdown clearfix\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n            Dropdown\n        </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n      <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n      <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n      <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"page-header\">\n    <h1>Navbars</h1>\n  </div>\n\n  <nav class=\"navbar navbar-light bg-faded\">\n    <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar2\">\n            ☰\n        </button>\n    <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n      <a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item-elements nav-item active\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item-elements nav-item\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n        </li>\n        <li class=\"nav-item-elements nav-item\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n        </li>\n        <li class=\"nav-item-elements nav-item\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <br>\n  <nav class=\"navbar navbar-dark bg-inverse\">\n    <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar3\">\n            ☰\n        </button>\n    <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar3\">\n      <a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item nav-item-elements active\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item nav-item-elements\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n        </li>\n        <li class=\"nav-item nav-item-elements\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n        </li>\n        <li class=\"nav-item nav-item-elements\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"page-header\">\n    <h1>Alerts</h1>\n    <hr>\n  </div>\n  <div class=\"alert alert-success\">\n    <strong>Well done!</strong> You successfully read this important alert message.\n  </div>\n  <div class=\"alert alert-info\">\n    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n  </div>\n  <div class=\"alert alert-warning\">\n    <strong>Warning!</strong> Best check yo self, you're not looking too good.\n  </div>\n  <div class=\"alert alert-danger\">\n    <strong>Oh snap!</strong> Change a few things up and try submitting again.\n  </div>\n\n  <div class=\"page-header\">\n    <h1>Progress bars</h1>\n    <hr>\n  </div>\n  <progress class=\"progress\" value=\"25\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 25%;\">25%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-success\" value=\"50\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 50%;\">50%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-info\" value=\"65\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 65%;\">65%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-warning\" value=\"80\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 80%;\">80%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-danger\" value=\"95\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 95%;\">95%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-striped progress-animated\" value=\"25\" max=\"100\">25%</progress>\n  <br>\n\n  <div class=\"page-header\">\n    <h1>List groups</h1>\n    <hr>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Cras justo odio</li>\n        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n        <li class=\"list-group-item\">Morbi leo risus</li>\n        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li>\n      </ul>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"list-group\">\n        <a href=\"javascript:;\" class=\"list-group-item active\">Cras justo odio</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Morbi leo risus</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Porta ac consectetur ac</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Vestibulum at eros</a>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"list-group\">\n        <a href=\"javascript:;\" class=\"list-group-item active\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n        <a href=\"javascript:;\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n        <a href=\"javascript:;\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n  </div>\n\n  <div class=\"page-header\">\n    <h1>Cards</h1>\n    <hr>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header card-default\">\n          Card title\n        </div>\n        <div class=\"card-block\">\n          Card content\n        </div>\n      </div>\n      <div class=\"card card-primary card-inverse\">\n        <div class=\"card-header card-primary\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-success card-inverse\">\n        <div class=\"card-header card-success\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n      <div class=\"card card-info card-inverse\">\n        <div class=\"card-header card-info\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-warning card-inverse\">\n        <div class=\"card-header card-warning\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n      <div class=\"card card-danger card-inverse\">\n        <div class=\"card-header card-danger\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-success card-inverse\">\n        <div class=\"card-header card-success\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-warning card-inverse\">\n        <div class=\"card-header card-warning\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-danger card-inverse\">\n        <div class=\"card-header card-danger\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n  </div>\n\n</div>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Charts\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-fw fa-dashboard\"></i>\n          <a [routerLink]=\"['/dashboard/home']\"> Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-fw fa-bar-chart-o\"></i> NG2-Charts\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row no-gutters\">\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-primary\">\n        <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-success\">\n        <canvas baseChart [datasets]=\"areaChartData\" [labels]=\"areaChartLabels\" [options]=\"areaChartOptions\" [legend]=\"areaChartLegend\"\n          [chartType]=\"areaChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-warning\">\n        <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-danger\">\n        <canvas baseChart [datasets]=\"timeChartData\" [options]=\"timeChartOptions\" [legend]=\"timeChartLegend\" [chartType]=\"timeChartType\"\n          [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<app-topnav></app-topnav>\n<app-sidebar></app-sidebar>\n<!--<section class=\"main-container\" [ngClass]=\"{sidebarPushRight: isActive}\">\t-->\n<div class=\"main-container\">\n\t\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">\n                Forms\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-dashboard\"></i>\n                    <a routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"breadcrumb-item active\">\n                    <i class=\"fa fa-edit\"></i> Forms\n                </li>\n            </ol>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <label>Text Input</label>\n                    <input class=\"form-control\">\n                    <p class=\"form-text\">Example block-level help text here.</p>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text Input with Placeholder</label>\n                    <input class=\"form-control\" placeholder=\"Enter text\">\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Static Control</label>\n                    <p class=\"form-control-static\">email@example.com</p>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label for=\"exampleInputFile\">File input</label>\n                    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\">\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text area</label>\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Checkboxes</label>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 1\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 2\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 3\n                        </label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Inline Checkboxes</label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">1\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">2\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">3\n                    </label>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Radio Buttons</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"> Radio 3\n                        </label>\n                    </div>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Inline Radio Buttons</label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\n                    </label>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Selects</label>\n                    <select class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Multiple Selects</label>\n                    <select multiple=\"\" class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </fieldset>\n\n                <button type=\"submit\" class=\"btn btn-secondary\">Submit Button</button>\n                <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n            </form>\n\n        </div>\n        <div class=\"col-lg-6\">\n            <h4>Disabled Form States</h4>\n\n            <form role=\"form\">\n\n                <fieldset disabled=\"\">\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled input</label>\n                        <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled select menu</label>\n                        <select id=\"disabledSelect\" class=\"form-control\">\n                            <option>Disabled select</option>\n                        </select>\n                    </div>\n\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\"> Disabled Checkbox\n                        </label>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\n\n                </fieldset>\n\n            </form>\n            <br>\n\n            <h4>Form Validation</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group has-success\">\n                    <label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n                </div>\n\n                <div class=\"form-group has-warning\">\n                    <label class=\"form-control-label\" for=\"inputWarning\">Input with warning</label>\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning\">\n                </div>\n\n                <div class=\"form-group has-danger\">\n                    <label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError\">\n                </div>\n\n            </form>\n\n            <h4>Input Groups</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-addon\">.00</span>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-eur\"></i></span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\">$</span>\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-addon\">.00</span>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-btn\"><button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button></span>\n                </div>\n\n            </form>\n\n            <p>For complete documentation, please visit <a target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's Form Documentation</a>.</p>\n\n        </div>\n    </div>\n    <!-- /.row -->\n\n</div>"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Bootstrap Grid\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"active breadcrumb-item\">\n          <i class=\"fa fa-wrench\"></i> Bootstrap Grid\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-12 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-12\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-8 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-8\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\"float-xs-right\" dropdown>\n            <button id=\"chat-dropdown\" type=\"button\" class=\"btn btn-secondary btn-sm\" dropdownToggle [disabled]=\"disabled\">\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"chat-dropdown\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-block\">\n    <ul class=\"chat\">\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n            </small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n  <!-- /.card-footer -->\n</div>"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Overview\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-fw fa-dashboard\"></i>\n                    <a [routerLink]=\"['/dashboard/home']\"> Dashboard</a>\n                </li>\n                <li class=\"breadcrumb-item active\">\n                    <i class=\"fa fa-fw fa-eye\"></i> Overview\n                </li>\n            </ol>\n        </div>\n    </div>\n    <hr>\n    <div>\n        <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-primary card-inverse\">\n                    <div class=\"card-header card-primary\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-comments fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">26</div>\n                                <div>New Comments!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-default\">\n                        <a href=\"javascript:;\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-success card-inverse\">\n                    <div class=\"card-header card-success\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-tasks fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">12</div>\n                                <div>New Tasks!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-green\">\n                        <a class=\"text-success\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-warning card-inverse\">\n                    <div class=\"card-header card-warning\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-shopping-cart fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">124</div>\n                                <div>New Orders!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-yellow\">\n                        <a class=\"text-warning\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-danger card-inverse\">\n                    <div class=\"card-header card-danger\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-support fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">13</div>\n                                <div>Support Tickets!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-red\">\n                        <a class=\"text-danger\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <alert *ngFor=\"let alert of alerts; let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            {{ alert?.msg }}\n        </alert>\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n                <div class=\"card card-default\">\n                    <div class=\"card-header\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n                    </div>\n                    <!-- /.card-header -->\n                    <app-timeline-cmp></app-timeline-cmp>\n                    <!-- /.card-body -->\n                </div>\n                <!-- /.card -->\n            </div>\n            <!-- /.col-lg-8 -->\n            <div class=\"col-lg-4\">\n                <div class=\"card card-default\">\n                    <div class=\"card-header\">\n                        <i class=\"fa fa-bell fa-fw\"></i> Notifications card\n                    </div>\n                    <!-- /.card-header -->\n                    <app-notifications-cmp></app-notifications-cmp>\n                    <!-- /.card-body -->\n                </div>\n                <!-- /.card -->\n\n                <app-chat-cmp></app-chat-cmp>\n                <!-- /.card .chat-card -->\n            </div>\n            <!-- /.col-lg-4 -->\n        </div>\n\n    </div>"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n  <div class=\"list-group\">\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n            </span>\n    </a>\n  </div>\n  <!-- /.list-group -->\n  <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <ul class=\"timeline\">\n    <li>\n      <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n          <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n          </p>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n          <hr>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a href=\"#\">Action</a>\n              </li>\n              <li><a href=\"#\">Another action</a>\n              </li>\n              <li><a href=\"#\">Something else here</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Tables\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-table\"></i> Tables\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-12\">\n      <h4>Basic example</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Table head options</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\"thead-inverse\">\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n          <table class=\"table\">\n            <thead class=\"thead-default\">\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Bordered table</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@TwBootstrap</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">4</th>\n                <td colspan=\"2\">Larry the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Small table</h4>\n      <div class=\"card card-block\">\n        <table class=\"table table-sm\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-12\">\n      <h4>Inverse table</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-inverse\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Striped Rows</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover table-striped\">\n            <thead>\n              <tr>\n                <th>Page</th>\n                <th>Visits</th>\n                <th>% New Visits</th>\n                <th>Revenue</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>/index.html</td>\n                <td>1265</td>\n                <td>32.3%</td>\n                <td>$321.33</td>\n              </tr>\n              <tr>\n                <td>/about.html</td>\n                <td>261</td>\n                <td>33.3%</td>\n                <td>$234.12</td>\n              </tr>\n              <tr>\n                <td>/sales.html</td>\n                <td>665</td>\n                <td>21.3%</td>\n                <td>$16.34</td>\n              </tr>\n              <tr>\n                <td>/blog.html</td>\n                <td>9516</td>\n                <td>89.3%</td>\n                <td>$1644.43</td>\n              </tr>\n              <tr>\n                <td>/404.html</td>\n                <td>23</td>\n                <td>34.3%</td>\n                <td>$23.52</td>\n              </tr>\n              <tr>\n                <td>/services.html</td>\n                <td>421</td>\n                <td>60.3%</td>\n                <td>$724.32</td>\n              </tr>\n              <tr>\n                <td>/blog/post.html</td>\n                <td>1233</td>\n                <td>93.2%</td>\n                <td>$126.34</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Hoverable rows</h4>\n      <div class=\"card card-block\">\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <h4>Contextual classes</h4>\n      <div class=\"card card-block\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"table-active\">\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr class=\"table-success\">\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr class=\"table-info\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr class=\"table-warning\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr class=\"table-danger\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 offset-lg-4\">\n        \t<img src=\"assets/img/SB-admin.png\" width=\"150px\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" ng-model=\"name\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Log in </a>\t\t\t\t\n\t\t\t\t&nbsp;\n\t\t\t\t<a class=\"btn rounded-btn\" routerLink=\"/signup\">Register</a>\n\t\t\t</form>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-left\" type=\"button\" (click)=\"sidebarCollapsed = !sidebarCollapsed\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n    </button>\n</nav>\n<div [collapse]=\"sidebarCollapsed\" class=\"sidebar-collapse\">\n  <ul class=\"sidebar-inverse-nav bg-inverse\">\n    <ng-container *ngFor=\"let item of menuList\">\n      <li class=\"side-item\" *ngIf=\"item.children.length === 0\">\n        <a [routerLink]=\"[item.link]\" [routerLinkActive]=\"['active-link']\" class=\"side-link\">\n          <i class=\"{{item.glyph}}\"></i> &nbsp; {{item.name}}\n        </a>\n      </li>\n      <li class=\"side-item\" *ngIf=\"item.children.length > 0\">\n        <a [routerLink]=\"['components']\" [routerLinkActive]=\"['router-link-active']\" class=\"side-link\" (click)=\"item.collapse = !item.collapse\">\n          <i class=\"fa fa-plus\"></i> &nbsp; {{item.name}}\n          <i *ngIf=\"item.collapse\" class=\"{{subMenuGlyphDown}} float-right\" aria-hidden=\"true\"></i>\n          <i *ngIf=\"!item.collapse\" class=\"{{subMenuGlyphUp}} float-right\" aria-hidden=\"true\"></i>\n        </a>\n        <div [collapse]=\"item.collapse\">\n          <ul>\n            <li class=\"sub-item\" *ngFor=\"let child of item.children\">\n              <a [routerLink]=\"[item.link + '/' + child.link]\" [routerLinkActive]=\"['router-link-active']\" class=\"side-link\">\n                <i class=\"{{child.glyph}}\"></i> &nbsp; {{child.name}}\n              </a>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ng-container>\n    <li class=\"side-item\">\n      <a class=\"side-link\" href=\"https://github.com/DouglasWebster/angular-cli-sb2-bs4\">\n        GitHub Source\n        </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse topnav\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"topNavCollapsed = !topNavCollapsed\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand text-center text-lg-left\" href=\"#\">SB Admin BS 4 Angular2</a>\n\n  <div [collapse]=\"topNavCollapsed\" class=\"navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a href=\"https://github.com/DouglasWebster/angular_cli-sb2-bs4/archive/master.zip\" class=\"btn btn-outline-secondary\" role=\"button\">\n          Download Now\n        </a>\n      </li>\n      <li class=\"nav-item\" dropdown>\n        <a href id=\"dropdownMenu1\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n          <i class=\"fa fa-envelope\"></i>\n          <b class=\"caret\"></b>\n          <span class=\"sr-only\">(current)</span>\n        </a>\n        <ul class=\"dropdown-menu message-dropdown dropdown-menu-right\" aria-labelledby=\"dropdownMenu1\">\n          <li class=\"message-preview\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                              <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                          </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\"><strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <hr>\n          <li class=\"message-preview\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                              <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                          </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\"><strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <hr>\n          <li class=\"message-preview\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                              <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                          </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\"><strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <hr>\n          <li class=\"dropdown-item message-footer\">\n            <a href=\"javascript:;\" class=\"dropdown-item text-center\">Read All New Messages</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\" dropdown>\n        <a href id=\"dropdownMenu2\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n          <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n        </a>\n        <ul class=\"dropdown-menu alert-dropdown dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\">\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n          </li>\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n          </li>\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">View All</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\" dropdown>\n        <a href id=\"dropdownMenu3\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n          <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu3\">\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"fa fa-fw fa-power-off\"></i> Log Out\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 offset-lg-4\">\n        \t<img src=\"assets/img/SB-admin.png\" width=\"150px;\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Full Name\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Repeat Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a  class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Register </a>&nbsp;\n\t\t\t\t<a  class=\"btn rounded-btn\" routerLink=\"/\"> Log in </a>\n\t\t\t</form>\n\t\t</div>\t\n\t</div>\n</div>\n"

/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(560);


/***/ })

},[877]);
//# sourceMappingURL=main.bundle.js.map