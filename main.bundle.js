webpackJsonp([1,5],{

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(612);


/***/ }),

/***/ 229:
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
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline-cmp',
        template: __webpack_require__(989),
        styles: [__webpack_require__(956)],
    })
], TimelineComponent);

var ChatComponent = (function () {
    function ChatComponent() {
        this.disabled = false;
    }
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-cmp',
        template: __webpack_require__(986)
    })
], ChatComponent);

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notifications-cmp',
        template: __webpack_require__(988)
    })
], NotificationComponent);

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
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(987),
        styles: [__webpack_require__(955)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/home.component.js.map

/***/ }),

/***/ 367:
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
    return AccordionSampleComponent;
}());
AccordionSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accordion-sample',
        template: __webpack_require__(963),
        styles: [__webpack_require__(932)]
    }),
    __metadata("design:paramtypes", [])
], AccordionSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/accordion-sample.component.js.map

/***/ }),

/***/ 368:
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
    return AlertSampleComponent;
}());
AlertSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert-sample',
        template: __webpack_require__(964),
        styles: [__webpack_require__(933)]
    }),
    __metadata("design:paramtypes", [])
], AlertSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/alert-sample.component.js.map

/***/ }),

/***/ 369:
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
    return BsComponentsComponent;
}());
BsComponentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bs-component',
        // changeDetection: ChangeDetectionStrategy.OnPush,  // <-- this does not seem to be needed any more
        template: __webpack_require__(965),
        styles: [__webpack_require__(934)]
    }),
    __metadata("design:paramtypes", [])
], BsComponentsComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/bs-components.component.js.map

/***/ }),

/***/ 370:
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
    return ButtonSampleComponent;
}());
ButtonSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-button-sample',
        template: __webpack_require__(966),
        styles: [__webpack_require__(935)]
    }),
    __metadata("design:paramtypes", [])
], ButtonSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/button-sample.component.js.map

/***/ }),

/***/ 371:
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
    return CarouselSampleComponent;
}());
CarouselSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carousel-sample',
        template: __webpack_require__(967),
        styles: [__webpack_require__(936)],
    }),
    __metadata("design:paramtypes", [])
], CarouselSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/carousel-sample.component.js.map

/***/ }),

/***/ 372:
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
    return CollapseSampleComponent;
}());
CollapseSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-collapse-sample',
        template: __webpack_require__(968),
        styles: [__webpack_require__(937)]
    }),
    __metadata("design:paramtypes", [])
], CollapseSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/collapse-sample.component.js.map

/***/ }),

/***/ 373:
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
    return DateSampleComponent;
}());
DateSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-date-sample',
        template: __webpack_require__(969),
        styles: [__webpack_require__(938)]
    }),
    __metadata("design:paramtypes", [])
], DateSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/date-sample.component.js.map

/***/ }),

/***/ 374:
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
    return DropdownSampleComponent;
}());
DropdownSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dropdown-sample',
        template: __webpack_require__(970),
        styles: [__webpack_require__(939)]
    }),
    __metadata("design:paramtypes", [])
], DropdownSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/dropdown-sample.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(563);
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
    return ModalSampleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], ModalSampleComponent.prototype, "childModal", void 0);
ModalSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-sample',
        template: __webpack_require__(971),
        styles: [__webpack_require__(940)]
    }),
    __metadata("design:paramtypes", [])
], ModalSampleComponent);

var _a;
//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/modal-sample.component.js.map

/***/ }),

/***/ 376:
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
    return PaginationSampleComponent;
}());
PaginationSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagination-sample',
        template: __webpack_require__(972),
        styles: [__webpack_require__(941)]
    }),
    __metadata("design:paramtypes", [])
], PaginationSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/pagination-sample.component.js.map

/***/ }),

/***/ 377:
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
    return PopoverSampleComponent;
}());
PopoverSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-popover-sample',
        template: __webpack_require__(973),
        styles: [__webpack_require__(942)]
    }),
    __metadata("design:paramtypes", [])
], PopoverSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/popover-sample.component.js.map

/***/ }),

/***/ 378:
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
    return ProgressSampleComponent;
}());
ProgressSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-progress-sample',
        template: __webpack_require__(974),
        styles: [__webpack_require__(943)]
    }),
    __metadata("design:paramtypes", [])
], ProgressSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/progress-sample.component.js.map

/***/ }),

/***/ 379:
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
    return RatingSampleComponent;
}());
RatingSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rating-sample',
        template: __webpack_require__(975),
        styles: [__webpack_require__(944)]
    }),
    __metadata("design:paramtypes", [])
], RatingSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/rating-sample.component.js.map

/***/ }),

/***/ 380:
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
    return SortableSampleComponent;
}());
SortableSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sortable-sample',
        template: __webpack_require__(976),
        styles: [__webpack_require__(945)]
    }),
    __metadata("design:paramtypes", [])
], SortableSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/sortable-sample.component.js.map

/***/ }),

/***/ 381:
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
    return TabsSampleComponent;
}());
TabsSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tabs-sample',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(977),
        styles: [__webpack_require__(946)]
    }),
    __metadata("design:paramtypes", [])
], TabsSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/tabs-sample.component.js.map

/***/ }),

/***/ 382:
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
    return TimepickerSampleComponent;
}());
TimepickerSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timepicker-sample',
        template: __webpack_require__(978),
        styles: [__webpack_require__(947)]
    }),
    __metadata("design:paramtypes", [])
], TimepickerSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/timepicker-sample.component.js.map

/***/ }),

/***/ 383:
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
    return TooltipSampleComponent;
}());
TooltipSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tooltip-sample',
        template: __webpack_require__(979),
        styles: [__webpack_require__(948)]
    }),
    __metadata("design:paramtypes", [])
], TooltipSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/tooltip-sample.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(1000);
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
            { id: 51, name: 'Wyoming', region: 'West' }
        ];
    }
    TypeaheadSampleComponent.prototype.ngOnInit = function () {
    };
    return TypeaheadSampleComponent;
}());
TypeaheadSampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typeahead-sample',
        template: __webpack_require__(980),
        styles: [__webpack_require__(949)]
    }),
    __metadata("design:paramtypes", [])
], TypeaheadSampleComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/typeahead-sample.component.js.map

/***/ }),

/***/ 385:
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
    return BsElementsComponent;
}());
BsElementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bs-elements',
        template: __webpack_require__(981),
        styles: [__webpack_require__(950)]
    }),
    __metadata("design:paramtypes", [])
], BsElementsComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/bs-elements.component.js.map

/***/ }),

/***/ 386:
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
    return ChartingComponent;
}());
ChartingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-charts',
        template: __webpack_require__(982),
        styles: [__webpack_require__(951)]
    }),
    __metadata("design:paramtypes", [])
], ChartingComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/charting.component.js.map

/***/ }),

/***/ 387:
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
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(983),
        styles: [__webpack_require__(952)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/dashboard.component.js.map

/***/ }),

/***/ 388:
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
    return FormsComponent;
}());
FormsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forms',
        template: __webpack_require__(984),
        styles: [__webpack_require__(953)]
    }),
    __metadata("design:paramtypes", [])
], FormsComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/forms.component.js.map

/***/ }),

/***/ 389:
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
    return GridComponent;
}());
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-grid',
        template: __webpack_require__(985),
        styles: [__webpack_require__(954)]
    }),
    __metadata("design:paramtypes", [])
], GridComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/grid.component.js.map

/***/ }),

/***/ 390:
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
    return TablesComponent;
}());
TablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__(990),
        styles: [__webpack_require__(957)]
    }),
    __metadata("design:paramtypes", [])
], TablesComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/tables.component.js.map

/***/ }),

/***/ 391:
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(991),
        styles: [__webpack_require__(958)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/login.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
        this.menuUrl = 'assets/sideMenu.json'; // URL to web API
    }
    SidebarService.prototype.getMenu = function () {
        return this.http.get(this.menuUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SidebarService.prototype.extractData = function (res) {
        var body = res.json();
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
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return SidebarService;
}());
SidebarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SidebarService);

var _a;
//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/sidebar.service.js.map

/***/ }),

/***/ 393:
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
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(994),
        styles: [__webpack_require__(961)]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/signup.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 611;


/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(735);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/main.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_module__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_module__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__ = __webpack_require__(740);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
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
    return AppRoutingModule;
}());
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
    })
], AppRoutingModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/app-routing.module.js.map

/***/ }),

/***/ 734:
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SB Admin BS 4 Angular2';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(962),
        styles: [__webpack_require__(931)]
    })
], AppComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/app.component.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(733);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    return AppModule;
}());
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
    })
], AppModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/app.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_components_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_sample_accordion_sample_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_sample_alert_sample_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button_sample_button_sample_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_sample_carousel_sample_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collapse_sample_collapse_sample_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__date_sample_date_sample_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dropdown_sample_dropdown_sample_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_sample_modal_sample_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pagination_sample_pagination_sample_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__popover_sample_popover_sample_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_sample_progress_sample_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rating_sample_rating_sample_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sortable_sample_sortable_sample_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tabs_sample_tabs_sample_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__timepicker_sample_timepicker_sample_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tooltip_sample_tooltip_sample_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__typeahead_sample_typeahead_sample_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap__ = __webpack_require__(562);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var BsComponentModule = (function () {
    function BsComponentModule() {
    }
    return BsComponentModule;
}());
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
    })
], BsComponentModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/bs-components.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_elements_component__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsElementsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BsElementsModule = (function () {
    function BsElementsModule() {
    }
    return BsElementsModule;
}());
BsElementsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__bs_elements_component__["a" /* BsElementsComponent */]]
    })
], BsElementsModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/bs-elements.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charting_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js_dist_Chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartingModule = (function () {
    function ChartingModule() {
    }
    return ChartingModule;
}());
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
    })
], ChartingModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/charting.module.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charting_charting_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tables_tables_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_forms_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_elements_bs_elements_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_grid_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_components_bs_components_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_components_accordion_sample_accordion_sample_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_components_alert_sample_alert_sample_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bs_components_button_sample_button_sample_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bs_components_carousel_sample_carousel_sample_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bs_components_collapse_sample_collapse_sample_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bs_components_date_sample_date_sample_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bs_components_dropdown_sample_dropdown_sample_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bs_components_modal_sample_modal_sample_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bs_components_pagination_sample_pagination_sample_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bs_components_popover_sample_popover_sample_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bs_components_progress_sample_progress_sample_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bs_components_rating_sample_rating_sample_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bs_components_sortable_sample_sortable_sample_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bs_components_tabs_sample_tabs_sample_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__bs_components_timepicker_sample_timepicker_sample_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__bs_components_tooltip_sample_tooltip_sample_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__bs_components_typeahead_sample_typeahead_sample_component__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
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
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(dashboardRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], DashboardRoutingModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/dashboard-routing.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sidebar_sidebar_module__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_topnav_topnav_module__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charting_charting_module__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_tables_module__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_forms_module__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_elements_bs_elements_module__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_grid_module__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_components_bs_components_module__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_component__ = __webpack_require__(387);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
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
    })
], DashboardModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/dashboard.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_component__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__forms_component__["a" /* FormsComponent */]]
    })
], FormsModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/forms.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_component__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__grid_component__["a" /* GridComponent */]]
    })
], GridModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/grid.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* AlertModule */],
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
    })
], HomeModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/home.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_component__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__tables_component__["a" /* TablesComponent */]]
    })
], TablesModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/tables.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
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
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(loginRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], LoginRoutingModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/login-routing.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/login.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_service__ = __webpack_require__(392);
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
        this.getMenu();
    };
    SidebarComponent.prototype.getMenu = function () {
        var _this = this;
        this.menuService.getMenu()
            .subscribe(function (menu) {
            _this.menuList = menu;
        }, function (error) {
            _this.errorMessage = error;
            _this.mergeMenus();
        }, function () {
            _this.mergeMenus();
        });
    };
    SidebarComponent.prototype.mergeMenus = function () {
        var _this = this;
        this.hardCodedItems.map(function (x) {
            _this.menuList.push(x);
        });
    };
    SidebarComponent.prototype.eventCalled = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(992),
        styles: [__webpack_require__(959)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/sidebar.component.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_component__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_collapse__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_service__ = __webpack_require__(392);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
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
    })
], SidebarModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/sidebar.module.js.map

/***/ }),

/***/ 749:
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
    return TopnavComponent;
}());
TopnavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topnav',
        template: __webpack_require__(993),
        styles: [__webpack_require__(960)]
    }),
    __metadata("design:paramtypes", [])
], TopnavComponent);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/topnav.component.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnav_component__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_dropdown__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_collapse__ = __webpack_require__(254);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TopnavModule = (function () {
    function TopnavModule() {
    }
    return TopnavModule;
}());
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
    })
], TopnavModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/topnav.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__(393);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutingModule; });
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
    return SignupRoutingModule;
}());
SignupRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(loginRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], SignupRoutingModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/signup-routing.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_routing_module__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_component__ = __webpack_require__(393);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__signup_routing_module__["a" /* SignupRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]
        ]
    })
], SignupModule);

//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/signup.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/mnt/Data/DevPackages/SBAdBS4Ng2/src/environment.js.map

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 431,
	"./af.js": 431,
	"./ar": 437,
	"./ar-dz": 432,
	"./ar-dz.js": 432,
	"./ar-ly": 433,
	"./ar-ly.js": 433,
	"./ar-ma": 434,
	"./ar-ma.js": 434,
	"./ar-sa": 435,
	"./ar-sa.js": 435,
	"./ar-tn": 436,
	"./ar-tn.js": 436,
	"./ar.js": 437,
	"./az": 438,
	"./az.js": 438,
	"./be": 439,
	"./be.js": 439,
	"./bg": 440,
	"./bg.js": 440,
	"./bn": 441,
	"./bn.js": 441,
	"./bo": 442,
	"./bo.js": 442,
	"./br": 443,
	"./br.js": 443,
	"./bs": 444,
	"./bs.js": 444,
	"./ca": 445,
	"./ca.js": 445,
	"./cs": 446,
	"./cs.js": 446,
	"./cv": 447,
	"./cv.js": 447,
	"./cy": 448,
	"./cy.js": 448,
	"./da": 449,
	"./da.js": 449,
	"./de": 451,
	"./de-at": 450,
	"./de-at.js": 450,
	"./de.js": 451,
	"./dv": 452,
	"./dv.js": 452,
	"./el": 453,
	"./el.js": 453,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 455,
	"./en-ca.js": 455,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 457,
	"./en-ie.js": 457,
	"./en-nz": 458,
	"./en-nz.js": 458,
	"./eo": 459,
	"./eo.js": 459,
	"./es": 461,
	"./es-do": 460,
	"./es-do.js": 460,
	"./es.js": 461,
	"./et": 462,
	"./et.js": 462,
	"./eu": 463,
	"./eu.js": 463,
	"./fa": 464,
	"./fa.js": 464,
	"./fi": 465,
	"./fi.js": 465,
	"./fo": 466,
	"./fo.js": 466,
	"./fr": 469,
	"./fr-ca": 467,
	"./fr-ca.js": 467,
	"./fr-ch": 468,
	"./fr-ch.js": 468,
	"./fr.js": 469,
	"./fy": 470,
	"./fy.js": 470,
	"./gd": 471,
	"./gd.js": 471,
	"./gl": 472,
	"./gl.js": 472,
	"./he": 473,
	"./he.js": 473,
	"./hi": 474,
	"./hi.js": 474,
	"./hr": 475,
	"./hr.js": 475,
	"./hu": 476,
	"./hu.js": 476,
	"./hy-am": 477,
	"./hy-am.js": 477,
	"./id": 478,
	"./id.js": 478,
	"./is": 479,
	"./is.js": 479,
	"./it": 480,
	"./it.js": 480,
	"./ja": 481,
	"./ja.js": 481,
	"./jv": 482,
	"./jv.js": 482,
	"./ka": 483,
	"./ka.js": 483,
	"./kk": 484,
	"./kk.js": 484,
	"./km": 485,
	"./km.js": 485,
	"./ko": 486,
	"./ko.js": 486,
	"./ky": 487,
	"./ky.js": 487,
	"./lb": 488,
	"./lb.js": 488,
	"./lo": 489,
	"./lo.js": 489,
	"./lt": 490,
	"./lt.js": 490,
	"./lv": 491,
	"./lv.js": 491,
	"./me": 492,
	"./me.js": 492,
	"./mi": 493,
	"./mi.js": 493,
	"./mk": 494,
	"./mk.js": 494,
	"./ml": 495,
	"./ml.js": 495,
	"./mr": 496,
	"./mr.js": 496,
	"./ms": 498,
	"./ms-my": 497,
	"./ms-my.js": 497,
	"./ms.js": 498,
	"./my": 499,
	"./my.js": 499,
	"./nb": 500,
	"./nb.js": 500,
	"./ne": 501,
	"./ne.js": 501,
	"./nl": 503,
	"./nl-be": 502,
	"./nl-be.js": 502,
	"./nl.js": 503,
	"./nn": 504,
	"./nn.js": 504,
	"./pa-in": 505,
	"./pa-in.js": 505,
	"./pl": 506,
	"./pl.js": 506,
	"./pt": 508,
	"./pt-br": 507,
	"./pt-br.js": 507,
	"./pt.js": 508,
	"./ro": 509,
	"./ro.js": 509,
	"./ru": 510,
	"./ru.js": 510,
	"./se": 511,
	"./se.js": 511,
	"./si": 512,
	"./si.js": 512,
	"./sk": 513,
	"./sk.js": 513,
	"./sl": 514,
	"./sl.js": 514,
	"./sq": 515,
	"./sq.js": 515,
	"./sr": 517,
	"./sr-cyrl": 516,
	"./sr-cyrl.js": 516,
	"./sr.js": 517,
	"./ss": 518,
	"./ss.js": 518,
	"./sv": 519,
	"./sv.js": 519,
	"./sw": 520,
	"./sw.js": 520,
	"./ta": 521,
	"./ta.js": 521,
	"./te": 522,
	"./te.js": 522,
	"./tet": 523,
	"./tet.js": 523,
	"./th": 524,
	"./th.js": 524,
	"./tl-ph": 525,
	"./tl-ph.js": 525,
	"./tlh": 526,
	"./tlh.js": 526,
	"./tr": 527,
	"./tr.js": 527,
	"./tzl": 528,
	"./tzl.js": 528,
	"./tzm": 530,
	"./tzm-latn": 529,
	"./tzm-latn.js": 529,
	"./tzm.js": 530,
	"./uk": 531,
	"./uk.js": 531,
	"./uz": 532,
	"./uz.js": 532,
	"./vi": 533,
	"./vi.js": 533,
	"./x-pseudo": 534,
	"./x-pseudo.js": 534,
	"./yo": 535,
	"./yo.js": 535,
	"./zh-cn": 536,
	"./zh-cn.js": 536,
	"./zh-hk": 537,
	"./zh-hk.js": 537,
	"./zh-tw": 538,
	"./zh-tw.js": 538
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
webpackContext.id = 906;


/***/ }),

/***/ 931:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 932:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 933:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 934:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 935:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 936:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 938:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 939:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 940:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 942:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 943:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 945:
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ 946:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 950:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .container {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 576px) {\n    .container {\n      width: 540px;\n      max-width: 100%; } }\n  @media (min-width: 768px) {\n    .container {\n      width: 720px;\n      max-width: 100%; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 960px;\n      max-width: 100%; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1140px;\n      max-width: 100%; } }\n\n.container-fluid {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .container-fluid {\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 576px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 768px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 992px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n  @media (min-width: 1200px) {\n    .row {\n      margin-right: -15px;\n      margin-left: -15px; } }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n  @media (min-width: 576px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 768px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 992px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n  @media (min-width: 1200px) {\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto; }\n\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n.pull-0 {\n  right: auto; }\n\n.pull-1 {\n  right: 8.33333%; }\n\n.pull-2 {\n  right: 16.66667%; }\n\n.pull-3 {\n  right: 25%; }\n\n.pull-4 {\n  right: 33.33333%; }\n\n.pull-5 {\n  right: 41.66667%; }\n\n.pull-6 {\n  right: 50%; }\n\n.pull-7 {\n  right: 58.33333%; }\n\n.pull-8 {\n  right: 66.66667%; }\n\n.pull-9 {\n  right: 75%; }\n\n.pull-10 {\n  right: 83.33333%; }\n\n.pull-11 {\n  right: 91.66667%; }\n\n.pull-12 {\n  right: 100%; }\n\n.push-0 {\n  left: auto; }\n\n.push-1 {\n  left: 8.33333%; }\n\n.push-2 {\n  left: 16.66667%; }\n\n.push-3 {\n  left: 25%; }\n\n.push-4 {\n  left: 33.33333%; }\n\n.push-5 {\n  left: 41.66667%; }\n\n.push-6 {\n  left: 50%; }\n\n.push-7 {\n  left: 58.33333%; }\n\n.push-8 {\n  left: 66.66667%; }\n\n.push-9 {\n  left: 75%; }\n\n.push-10 {\n  left: 83.33333%; }\n\n.push-11 {\n  left: 91.66667%; }\n\n.push-12 {\n  left: 100%; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-sm-0 {\n    right: auto; }\n  .pull-sm-1 {\n    right: 8.33333%; }\n  .pull-sm-2 {\n    right: 16.66667%; }\n  .pull-sm-3 {\n    right: 25%; }\n  .pull-sm-4 {\n    right: 33.33333%; }\n  .pull-sm-5 {\n    right: 41.66667%; }\n  .pull-sm-6 {\n    right: 50%; }\n  .pull-sm-7 {\n    right: 58.33333%; }\n  .pull-sm-8 {\n    right: 66.66667%; }\n  .pull-sm-9 {\n    right: 75%; }\n  .pull-sm-10 {\n    right: 83.33333%; }\n  .pull-sm-11 {\n    right: 91.66667%; }\n  .pull-sm-12 {\n    right: 100%; }\n  .push-sm-0 {\n    left: auto; }\n  .push-sm-1 {\n    left: 8.33333%; }\n  .push-sm-2 {\n    left: 16.66667%; }\n  .push-sm-3 {\n    left: 25%; }\n  .push-sm-4 {\n    left: 33.33333%; }\n  .push-sm-5 {\n    left: 41.66667%; }\n  .push-sm-6 {\n    left: 50%; }\n  .push-sm-7 {\n    left: 58.33333%; }\n  .push-sm-8 {\n    left: 66.66667%; }\n  .push-sm-9 {\n    left: 75%; }\n  .push-sm-10 {\n    left: 83.33333%; }\n  .push-sm-11 {\n    left: 91.66667%; }\n  .push-sm-12 {\n    left: 100%; }\n  .offset-sm-0 {\n    margin-left: 0%; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-md-0 {\n    right: auto; }\n  .pull-md-1 {\n    right: 8.33333%; }\n  .pull-md-2 {\n    right: 16.66667%; }\n  .pull-md-3 {\n    right: 25%; }\n  .pull-md-4 {\n    right: 33.33333%; }\n  .pull-md-5 {\n    right: 41.66667%; }\n  .pull-md-6 {\n    right: 50%; }\n  .pull-md-7 {\n    right: 58.33333%; }\n  .pull-md-8 {\n    right: 66.66667%; }\n  .pull-md-9 {\n    right: 75%; }\n  .pull-md-10 {\n    right: 83.33333%; }\n  .pull-md-11 {\n    right: 91.66667%; }\n  .pull-md-12 {\n    right: 100%; }\n  .push-md-0 {\n    left: auto; }\n  .push-md-1 {\n    left: 8.33333%; }\n  .push-md-2 {\n    left: 16.66667%; }\n  .push-md-3 {\n    left: 25%; }\n  .push-md-4 {\n    left: 33.33333%; }\n  .push-md-5 {\n    left: 41.66667%; }\n  .push-md-6 {\n    left: 50%; }\n  .push-md-7 {\n    left: 58.33333%; }\n  .push-md-8 {\n    left: 66.66667%; }\n  .push-md-9 {\n    left: 75%; }\n  .push-md-10 {\n    left: 83.33333%; }\n  .push-md-11 {\n    left: 91.66667%; }\n  .push-md-12 {\n    left: 100%; }\n  .offset-md-0 {\n    margin-left: 0%; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-lg-0 {\n    right: auto; }\n  .pull-lg-1 {\n    right: 8.33333%; }\n  .pull-lg-2 {\n    right: 16.66667%; }\n  .pull-lg-3 {\n    right: 25%; }\n  .pull-lg-4 {\n    right: 33.33333%; }\n  .pull-lg-5 {\n    right: 41.66667%; }\n  .pull-lg-6 {\n    right: 50%; }\n  .pull-lg-7 {\n    right: 58.33333%; }\n  .pull-lg-8 {\n    right: 66.66667%; }\n  .pull-lg-9 {\n    right: 75%; }\n  .pull-lg-10 {\n    right: 83.33333%; }\n  .pull-lg-11 {\n    right: 91.66667%; }\n  .pull-lg-12 {\n    right: 100%; }\n  .push-lg-0 {\n    left: auto; }\n  .push-lg-1 {\n    left: 8.33333%; }\n  .push-lg-2 {\n    left: 16.66667%; }\n  .push-lg-3 {\n    left: 25%; }\n  .push-lg-4 {\n    left: 33.33333%; }\n  .push-lg-5 {\n    left: 41.66667%; }\n  .push-lg-6 {\n    left: 50%; }\n  .push-lg-7 {\n    left: 58.33333%; }\n  .push-lg-8 {\n    left: 66.66667%; }\n  .push-lg-9 {\n    left: 75%; }\n  .push-lg-10 {\n    left: 83.33333%; }\n  .push-lg-11 {\n    left: 91.66667%; }\n  .push-lg-12 {\n    left: 100%; }\n  .offset-lg-0 {\n    margin-left: 0%; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .pull-xl-0 {\n    right: auto; }\n  .pull-xl-1 {\n    right: 8.33333%; }\n  .pull-xl-2 {\n    right: 16.66667%; }\n  .pull-xl-3 {\n    right: 25%; }\n  .pull-xl-4 {\n    right: 33.33333%; }\n  .pull-xl-5 {\n    right: 41.66667%; }\n  .pull-xl-6 {\n    right: 50%; }\n  .pull-xl-7 {\n    right: 58.33333%; }\n  .pull-xl-8 {\n    right: 66.66667%; }\n  .pull-xl-9 {\n    right: 75%; }\n  .pull-xl-10 {\n    right: 83.33333%; }\n  .pull-xl-11 {\n    right: 91.66667%; }\n  .pull-xl-12 {\n    right: 100%; }\n  .push-xl-0 {\n    left: auto; }\n  .push-xl-1 {\n    left: 8.33333%; }\n  .push-xl-2 {\n    left: 16.66667%; }\n  .push-xl-3 {\n    left: 25%; }\n  .push-xl-4 {\n    left: 33.33333%; }\n  .push-xl-5 {\n    left: 41.66667%; }\n  .push-xl-6 {\n    left: 50%; }\n  .push-xl-7 {\n    left: 58.33333%; }\n  .push-xl-8 {\n    left: 66.66667%; }\n  .push-xl-9 {\n    left: 75%; }\n  .push-xl-10 {\n    left: 83.33333%; }\n  .push-xl-11 {\n    left: 91.66667%; }\n  .push-xl-12 {\n    left: 100%; }\n  .offset-xl-0 {\n    margin-left: 0%; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.main-container {\n  margin-left: 225px;\n  margin-top: 60px;\n  margin-right: 0;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  position: relative; }\n  @media (max-width: 991px) {\n    .main-container {\n      margin-left: 0; } }\n"

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "body {\n  -ms-overflow-x: hidden;\n  overflow-x: hidden; }\n\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n"

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = ".login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #2b292c;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #2b292c;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = ".navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0.5rem 1rem; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: .425rem;\n  padding-bottom: .425rem; }\n\n.navbar-toggler {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n.navbar-toggler-left {\n  position: absolute;\n  left: 1rem; }\n\n.navbar-toggler-right {\n  position: absolute;\n  right: 1rem; }\n\n@media (max-width: 575px) {\n  .navbar-toggleable .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-toggleable {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767px) {\n  .navbar-toggleable-sm .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-sm > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable-sm > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991px) {\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-md > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable-md > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199px) {\n  .navbar-toggleable-lg .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-lg > .container {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-toggleable-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .navbar-toggleable-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-toggleable-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-toggleable-lg > .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .navbar-toggleable-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      width: 100%; }\n    .navbar-toggleable-lg .navbar-toggler {\n      display: none; } }\n\n.navbar-toggleable-xl {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .navbar-toggleable-xl .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n  .navbar-toggleable-xl > .container {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-toggleable-xl .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .navbar-toggleable-xl .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n  .navbar-toggleable-xl > .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .navbar-toggleable-xl .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    width: 100%; }\n  .navbar-toggleable-xl .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand,\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover,\n  .navbar-light .navbar-toggler:focus,\n  .navbar-light .navbar-toggler:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .open > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-inverse .navbar-brand,\n.navbar-inverse .navbar-toggler {\n  color: white; }\n  .navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover,\n  .navbar-inverse .navbar-toggler:focus,\n  .navbar-inverse .navbar-toggler:hover {\n    color: white; }\n\n.navbar-inverse .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-inverse .navbar-nav .nav-link:focus, .navbar-inverse .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-inverse .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-inverse .navbar-nav .open > .nav-link,\n.navbar-inverse .navbar-nav .active > .nav-link,\n.navbar-inverse .navbar-nav .nav-link.open,\n.navbar-inverse .navbar-nav .nav-link.active {\n  color: white; }\n\n.navbar-inverse .navbar-toggler {\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-inverse .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); }\n\n.navbar-inverse .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5em 1em; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #636c72;\n    cursor: not-allowed; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs .nav-item, .nav-tabs .side-item, .nav-tabs .sub-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-right-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #eceeef #eceeef #ddd; }\n    .nav-tabs .nav-link.disabled {\n      color: #636c72;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link,\n  .nav-tabs .show.side-item .nav-link,\n  .nav-tabs .show.sub-item .nav-link {\n    color: #464a4c;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .nav-item.show .nav-link,\n.nav-pills .show.side-item .nav-link,\n.nav-pills .show.sub-item .nav-link {\n  color: #fff;\n  cursor: default;\n  background-color: #0275d8; }\n\n.nav-fill .nav-item, .nav-fill .side-item, .nav-fill .sub-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item, .nav-justified .side-item, .nav-justified .sub-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar-toggler-left {\n  position: fixed;\n  top: 8px;\n  z-index: 1030; }\n\n.navbar-toggler-right {\n  position: fixed;\n  top: 8px;\n  z-index: 1030; }\n\n.sidebar-collapse {\n  position: fixed;\n  z-index: 1030;\n  top: 50px;\n  width: 225px;\n  bottom: 0px;\n  border-radius: 0;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  height: 100%;\n  min-height: 100%; }\n  @media (max-width: 991px) {\n    .sidebar-collapse {\n      display: none; } }\n  @media (min-width: 992px) {\n    .sidebar-collapse {\n      display: block !important; } }\n\n.side-item {\n  padding: 8px 0px 0px; }\n\n.sidebar, .sidebar-light-nav, .sidebar-inverse-nav {\n  height: 100%;\n  overflow-y: auto;\n  padding: 1rem 1rem 1rem 1.5rem;\n  margin-bottom: 0; }\n  .sidebar .side-item .side-link, .sidebar-light-nav .side-item .side-link, .sidebar-inverse-nav .side-item .side-link {\n    text-decoration: none; }\n\n.sidebar-light-nav .side-item .side-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .sidebar-light-nav .side-item .side-link:focus, .sidebar-light-nav .side-item .side-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n\n.sidebar-inverse-nav .side-item .side-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .sidebar-inverse-nav .side-item .side-link:focus, .sidebar-inverse-nav .side-item .side-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n"

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Accordion\n    <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/accordion\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>Displays collapsible content panels for presenting information in a limited amount of space</p>\n      <p>The <strong>accordion component</strong> builds on top of the collapse directive to provide a list of items, with collapsible\n        bodies that are collapsed or expanded by clicking on the item's header.</p>\n    </div>\n  </div>\n</div>\n<accordion>\n  <accordion-group heading=\"Static Header, initially expanded\">\n    This content is straight in the template.\n  </accordion-group>\n  <accordion-group #group>\n    <div accordion-heading>\n      I can have markup, too!\n      <i class=\"pull-right float-xs-right glyphicon\" [ngClass]=\"{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}\"></i>\n    </div>\n    This is just some content to illustrate fancy headings.\n  </accordion-group>\n  <accordion-group heading=\"Content 1\">\n    <p>Content 1</p>\n  </accordion-group>\n  <accordion-group heading=\"Content 2\">\n    <p>Content 2</p>\n  </accordion-group>\n</accordion>"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Alerts\n    <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/alerts\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>\n    </div>\n  </div>\n  <p>Alerts are available for any length of text, as well as an optional dismiss\n    button. For proper styling, use one of the four <strong>required</strong>\n    contextual classes (e.g., <code>.alert-success</code>). For inline\n    dismissal, use the <code>dismissproperty</code>.</p>\n</div>\n<div *ngFor=\"let alert of alerts\">\n  <alert [type]=\"alert.type\" dismissible=\"true\">{{ alert.msg }}</alert>\n</div>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n"

/***/ }),

/***/ 965:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        NG2-Bootstrap\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"active breadcrumb-item\">\n          <i class=\"fa fa-th-list\"></i> ng2-bootstrap\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">Bootstrap components for Angular </h4>\n      <p class=\"card-text\">\n        A demonstration of the components available in ng2-bootstrap from\n        <a href=\"https://github.com/valor-software/ng2-bootstrap\" target=\"_blank\" class=\"card-link\">valour-software</a>\n      </p>\n      <p>\n        Each component is a minimal sample demonstration only. Whilst I endevour to keep these in sync with the latest versions from\n        valor software the user is strongly encouraged to follow each demos link. This will take you to the relevant ng2-bootstrap\n        page where the full demo, information and usage instructions are provided.\n      </p>\n      <p><em>Note</em>: Bootstrap 4 does not include glyphicons anymore, so if you want to use that font, you will need to add\n        a link to <a href=\"https://github.com/valor-software/ng2-bootstrap/blob/master/demo/src/assets/css/glyphicons.css\"><code>glyphicons.css</code></a>.\n        This package has been built using Font Awesome and all the icons changed to the nearest Font Awesome equivelent.</p>\n\n    </div>\n    <div class=\"card card-block\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 966:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h1>Buttons\n    <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/buttons\">\n      <img alt=\"\" src=\"assets/img//link-doc.png\">\n    </a>\n  </h1>\n</div>\n<div class=\"content-box\" id=\"content\">\n  <div class=\"section\" id=\"example\">\n    <div class=\"item\">\n      <p>There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked.</p>\n    </div>\n  </div>\n    <p>Radio buttons with checked/unchecked states.</p>\n</div>\n<pre class=\"card card-block card-header\">{{radioModel || 'null'}}</pre>\n<div class=\"btn-group\">\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\n         btnRadio=\"Left\">Left</label>\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</label>\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\n         btnRadio=\"Right\">Right</label>\n</div>\n<div class=\"btn-group\">\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\"\n         uncheckable>Left</label>\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\"\n         uncheckable>Middle</label>\n  <label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\"\n         uncheckable>Right</label>\n</div>"

/***/ }),

/***/ 967:
/***/ (function(module, exports) {

module.exports = "<h1>Carousel\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/carousel\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>A slideshow component for cycling through elements—images or slides of text—like a carousel. <em>Nested carousels are not supported.</em></p>\n<h3>\n  Examples\n</h3>\n<hr>\n<h4>Optional captions:</h4>\n<p>Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>&lt;slide&gt;</code>.\n  Place just about any optional HTML within there and it will be automatically aligned and formatted.</p>\n<div class=\"container\">\n  <carousel>\n    <slide>\n      <img src=\"assets/img/slider0.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Reception </h3>\n        <p>Modern office reception area.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"assets/img/slider1.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Mountains</h3>\n        <p>Here is a stunning mountain scene.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"assets/img/slider2.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Rainbow</h3>\n        <p>Idylic home after a shower.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"assets/img/slider3.jpg\" alt=\"First slide\">\n      <div class=\"carousel-caption\">\n        <h3>Golf course</h3>\n        <p>Nice way to relax.</p>\n      </div>\n    </slide>\n  </carousel>\n</div>\n<hr>\n<h4>Dynamic Slides:</h4>\n<div class=\"container\">\n  <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\">\n    <slide *ngFor=\"let slide of slides; let index=index\">\n      <img [src]=\"slide.image\">\n\n      <div class=\"carousel-caption\">\n        <h4>Slide {{index}}</h4>\n        <p>{{slide.text}}</p>\n      </div>\n    </slide>\n  </carousel>\n  <br/>\n  <div>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"addSlide()\">Add Slide\n  </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"removeSlide()\">Remove Current\n  </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"removeSlide(2)\">Remove #3\n  </button>\n  </div>\n  <div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\" [(ngModel)]=\"noWrapSlides\">Disable Slide Looping</label>\n    </div>\n\n    <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"myInterval\">\n  </div>\n</div>"

/***/ }),

/***/ 968:
/***/ (function(module, exports) {

module.exports = "<h1>Collapse\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/collapse\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes. Flexible component that utilizes a handful of classes (from the <strong>required transitions component</strong>(<em>not yet implemented</em>)) for easy toggle behavior.</p>\n<h3>\n  Example with Otional Captions\n</h3>\n<button type=\"button\" class=\"btn btn-primary\"\n        (click)=\"isCollapsed = !isCollapsed\">Toggle collapse\n</button>\n<hr>\n<div (collapsed)=\"collapsed($event)\"\n     (expanded)=\"expanded($event)\"\n     [collapse]=\"isCollapsed\"\n     class=\"card card-block card-header\">\n  <div class=\"well well-lg\">Some content</div>\n</div>\n"

/***/ }),

/***/ 969:
/***/ (function(module, exports) {

module.exports = "<h1>Date Picker\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/datepicker\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Datepicker is a highly configurable component that adds datepicker functionality to your pages. You can customize the date format and language, restrict the selectable date ranges.</p>\n<h3>\n  Example\n</h3>\n<style>\n  .full button span {\n    background-color: limegreen;\n    border-radius: 32px;\n    color: black;\n  }\n  .partially button span {\n    background-color: orange;\n    border-radius: 32px;\n    color: black;\n  }\n</style>\n \n<div>\n  <pre class=\"card card-block card-header\">Selected date is: <em *ngIf=\"dt\">{{ getDate() | date:'fullDate'}}</em></pre>\n  <h4>Inline</h4>\n  <div style=\"display:inline-block; min-height:290px;\">\n    <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\" [dateDisabled]=\"dateDisabled\"></datepicker>\n  </div>\n \n  <hr />\n  <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"today()\">Today</button>\n  <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"d20090824();\">2009-08-24</button>\n  <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\n  <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"toggleMin()\" tooltip=\"After today restriction\">Min date</button>\n  <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"disableTomorrow()\">Disable Tomorrow</button>\n</div>"

/***/ }),

/***/ 970:
/***/ (function(module, exports) {

module.exports = "<h1>Dropdowns\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/dropdowns\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included\n  dropdown directives.</p>\n<h3>\n  Example\n</h3>\n<p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>dropdown</code>. Dropdowns can be triggered\n  from <code> &lt;a&gt;</code> or <code> &lt;button&gt;</code> elements to better fit your potential needs.</p>\n<hr>\n<h4>Single button dropdowns</h4>\n<p>Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to\n  work with either <code> &lt;button&gt; </code> elements:</p>\n<div class=\"row\">\n  <div class=\"col-sm-2 btn-group\" dropdown>\n    <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdownToggle>\n    Button dropdown <span class=\"caret\"></span>\n  </button>\n    <ul dropdownMenu role=\"menu\" aria-labelledby=\"single-button\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n      <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n    </ul>\n  </div>\n  <div class=\"col-sm-2\">\n    <p>And with <code> &lt;a&gt;</code> elements:</p>\n  </div>\n  <div class=\"col-sm-2\">\n    <span dropdown (onToggle)=\"toggled($event)\">\n      <a href id=\"simple-dropdown\" dropdownToggle>\n        Click me for a dropdown, yo!\n      </a>\n      <ul class=\"dropdown-menu\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <li *ngFor=\"let choice of items\">\n          <a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\n        </li>\n      </ul>\n    </span>\n  </div>\n</div>\n<hr>\n<h4>Split button dropdowns</h4>\n<div class=\"btn-group\" dropdown>\n  <button id=\"split-button\" type=\"button\" class=\"btn btn-danger\">Action</button>\n  <button type=\"button\" class=\"btn btn-danger dropdown-toggle-split\" dropdownToggle>\n    <span class=\"caret\"></span>\n    <span class=\"sr-only\">Split button!</span>\n  </button>\n  <ul class=\"dropdown-menu\" dropdownMenu role=\"menu\" aria-labelledby=\"split-button\">\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n    <li class=\"divider dropdown-divider\"></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ 971:
/***/ (function(module, exports) {

module.exports = "<h1>Modals\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/modals\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.</p>\n<h3>\n  Examples\n</h3>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <h4>Static modal</h4>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">Static modal</button>\n    <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n      aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Static modal</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            This is static modal, backdrop click will not close it. Click <b>&times;</b> to close modal.\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n<div class=\"col-sm-3\">\n  <h4>Otional sizes</h4>\n  <!--Large modal-->\n  <button class=\"btn btn-primary\" (click)=\"lgModal.show()\">Large modal</button>\n\n  <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Large modal</h4>\n          <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n        <div class=\"modal-body\">\n          ...\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Small modal-->\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"smModal.show()\">Small modal</button>\n\n  <div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Small modal</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n        <div class=\"modal-body\">\n          ...\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-sm-2\">\n  <h4>Child modal</h4>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"showChildModal()\">Open child modal</button>\n  <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Child modal</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        </div>\n        <div class=\"modal-body\">\n          I am a child modal, opened from parent component!\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 972:
/***/ (function(module, exports) {

module.exports = "<h1>Pagination\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/pagination\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p><strong>Pagination</strong> - provide pagination links for your site or app with the multi-page pagination component, or\n  the simpler pager alternative.</p>\n<p><strong>Pager</strong> - quick previous and next links for simple pagination implementations with light markup and styles.\n  It's great for simple sites like blogs or magazines.</p>\n<h3>\n  Examples\n</h3>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <h4>Default</h4>\n    <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\">\n    </pagination>\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n      </pagination>\n      <pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\">\n      </pagination>\n      <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (numPages)=\"smallnumPages = $event\">\n      </pagination>\n      <pre class=\"col-sm-6 card card-block card-header\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n      <br/>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\n  </div>\n  <div class=\"col-sm-4\">\n    <h4>States and Limits</h4>\n    <div class=\"col-sm-4\">\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"\n        [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n    </div>\n    <pre class=\"col-sm-4 card card-block card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n  </div>\n  <div class=\"col-sm-4\">\n    <h4>Pager</h4>\n    <div style=\"margin: 20px 0;\">\n      <pagination [directionLinks]=\"false\" [totalItems]=\"totalPagerItems\" [(ngModel)]=\"currentPagerPage\" (numPages)=\"smallnumPagerPages = $event\"></pagination>\n    </div>\n\n    <div>\n      <pager [totalItems]=\"totalPagerItems\" [(ngModel)]=\"currentPagerPage\" (pageChanged)=\"pageChanged($event)\" pageBtnClass=\"btn\"\n        itemsPerPage=\"10\"></pager>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 973:
/***/ (function(module, exports) {

module.exports = "<h1>Popover\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/popover\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>Four directions</h4>\n    <p>\n      Four positioning options are available: top, right, bottom, and left aligned.\n    </p>\n    <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      popoverTitle=\"Popover on right\" placement=\"right\">\n      Popover on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n        popoverTitle=\"Popover on top\" placement=\"top\">\n        Popover on top\n        </button>\n\n        <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n          popoverTitle=\"Popover on bottom\" placement=\"bottom\">\n          Popover on bottom\n          </button>\n\n          <button type=\"button\" class=\"btn btn-default btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            popoverTitle=\"Popover on left\" placement=\"left\">\n            Popover on left\n            </button>\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Dismiss on next click</h4>\n    <p>Use the <code>focus</code> trigger to dismiss popovers on the next click that the user makes.</p>\n    <button type=\"button\" class=\"btn btn-success\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Dismissible popover\"\n      triggers=\"focus\">\n      Dismissible popover\n      </button>\n  </div>\n</div>"

/***/ }),

/***/ 974:
/***/ (function(module, exports) {

module.exports = "<h1>Progress Bar\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/progressbar\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<em>As of this implenetation NG2-bootstrap progress bars are not working correctly for BS4.  I recommend using BS4 progresss bars until this is fixed. </em>\n<p></p>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Static</h4>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <progress class=\"progress\" value=\"55\" max=\"100\"></progress>\n      </div>\n      <div class=\"col-sm-4\">\n        <progress class=\"progress progress-striped\" value=\"22\" max=\"100\" type=\"warning\">22%</progress>\n      </div>\n      <div class=\"col-sm-4\">\n        <progress class=\"progress progress-striped active\" max=\"200\" value=\"166\" type=\"danger\"><i>166 / 200</i></progress>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <h4>Dynamic</h4>\n    <progress class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\" style=\"height: 15px\">\n      <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\n    </progress>\n\n    <small><em>No animation</em></small>\n    <progress class=\"progress progress-success progress-bar-striped\" [value]=\"dynamic\" [max]=\"100\"><b>{{dynamic}}%</b></progress>\n\n    <small><em>Object (changes type based on value)</em></small>\n    <progress class=\"progress progress-striped progress-animated active progress-{{ type }}\" [value]=\"dynamic\" [max]=\"max\">\n      {{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n    </progress>\n    <p></p>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Stacked</h4>\n    <div class=\"row col-lg-12\">\n      <!-- todo: implement as component -->\n      <progress *ngFor=\"let baz of stacked\" class=\"progress progress-{{ baz?.type }}\" style=\"float: left; height: 1rem\" [ngStyle]=\"{width: baz.value + '%'}\"\n        [value]=\"baz.value\" [max]=\"baz.max\">\n        <span *ngIf=\"baz.value > 3\">{{baz?.value}}%</span>\n        </progress>\n        <!-- gray background -->\n        <progress class=\"progress\" value=\"0\" max=\"100\" style=\"width: 100%; height: 1rem\"></progress>\n    </div>\n    <p></p>\n    <div class=\"row col-md-12\">\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomStacked()\">Randomize</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 975:
/***/ (function(module, exports) {

module.exports = "<h1>Rating\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/rating\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Rating component that will take care of visualising a star rating bar</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h4>Static rating</h4>\n    <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" stateOn=\"fa fa-star\" stateOff=\"fa fa-star-o\"></rating>\n    <div class=\"card\">\n      <pre class=\"card-block card-text\">Rate: <b>7</b></pre>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dynamic rating</h4>\n    <rating [(ngModel)]=\"dynRate\" [max]=\"dynMax\" [readonly]=\"dynIsReadonly\" (onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar()\"\n      [titles]=\"['one','two','three']\" stateOn=\"fa fa-star\" stateOff=\"fa fa-star-o\"></rating>\n      <span class=\"label\" [ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\"\n        [ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\n        <div class=\"card\">\n          <pre class=\"card-block card-text\">Rate: <strong>{{dynRate}}</strong>;  Readonly is: <em>{{dynIsReadonly}}</em>;  Hovering over: <strong>{{overStar || \"none\"}}</strong></pre>\n        </div>\n        <p></p>\n\n        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"dynRate = 0\" [disabled]=\"dynIsReadonly\">Clear</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"dynIsReadonly = ! dynIsReadonly\">Toggle Readonly</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Custom icons</h4>\n    <div>\n      <rating [(ngModel)]=\"x\" max=\"15\" stateOn=\"fa fa-check-circle\" stateOff=\"fa fa-check-circle-o\" style=\"color: #0275d8;\"></rating>\n      <b>(<i>Rate:</i> {{x}})</b>\n    </div>\n    <div>\n      <rating [(ngModel)]=\"y\" [ratingStates]=\"ratingStates\"></rating>\n      <b>(<i>Rate:</i> {{y}})</b>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 976:
/***/ (function(module, exports) {

module.exports = "<h1>Sortable\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/sortable\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>The <strong>sortable component</strong> represents a list of items, with ability to sort them or move to another container\n  via drag&amp;drop. Input collection isn't mutated by the component, so events <code>ngModelChange</code>, <code>onChange</code>  are using new collections.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>String items:</h4>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemStringsLeft\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemStringsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemStringsRight\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemStringsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Complex data model:</h4>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemObjectsLeft\" fieldName=\"name\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>{{ itemObjectsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemObjectsRight\" fieldName=\"name\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>{{ itemObjectsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Custom item template:</h4>\n    <div class=\"row\">\n      <template #itemTemplate let-item=\"item\" let-index=\"index\"><span>{{index}}: {{item.value}}</span></template>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemCuStringsLeft\" [itemTemplate]=\"itemTemplate\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\"\n          placeholderItem=\"Drag here\" placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemCuStringsLeft | json }}</pre>\n      </div>\n      <div class=\"col-xs-6 col-md-6\">\n        <bs-sortable [(ngModel)]=\"itemCuStringsRight\" itemClass=\"sortable-item\" itemActiveClass=\"sortable-item-active\" placeholderItem=\"Drag here\"\n          placeholderClass=\"sortable-item\" wrapperClass=\"sortable-wrapper\"></bs-sortable>\n          <pre>model: {{ itemCuStringsRight | json }}</pre>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

module.exports = "<h1>Tabs\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/tabs\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. <strong>Nested tabs are not supported.</strong></p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-3\">\n    <h4>Static tabs:</h4>\n    <tabset>\n      <tab heading=\"Static title\">Static content</tab>\n      <tab (select)=\"alertMe()\">\n        <template tabHeading>\n          <i class=\"fa fa-bell\"></i> Alert!\n        </template>\n        I've got an HTML heading, and a select callback. Pretty cool!\n      </tab>\n    </tabset>\n\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Dynamic tabs:</h4>\n    <div (click)=\"$event.preventDefault()\">\n      <p>Select a tab by setting active binding to true:</p>\n      <p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[0].active = true\">Select second tab</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].active = true\">Select third tab</button>\n      </p>\n      <p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].disabled = ! tabs[1].disabled\">\n      Enable / Disable third tab\n    </button>\n      </p>\n      <hr/>\n      <tabset>\n        <tab heading=\"Static title\">Static content</tab>\n        <tab *ngFor=\"let tabz of tabs\" [heading]=\"tabz.title\" [active]=\"tabz.active\" (select)=\"tabz.active = true\" (deselect)=\"tabz.active = false\"\n          [disabled]=\"tabz.disabled\" [removable]=\"tabz.removable\" (removed)=\"removeTabHandler(tabz)\" [customClass]=\"tabz.customClass\">\n          {{tabz?.content}}\n          </tab>\n      </tabset>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <h4>Pills:</h4>\n    <tabset type=\"pills\">\n      <tab heading=\"Pills 1\">Pills content 1</tab>\n      <tab heading=\"Pills 2\">Pills content 2</tab>\n    </tabset>\n\n  </div>\n</div>"

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

module.exports = "<h1>Timepicker\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/timepicker\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>A lightweight & configurable timepicker directive.</p>\n<p><em>This relies on the <strong>.hidden</strong> attribute which is no longer used in bootstrap 4 so </em>\n<code>.hidden {{'{'}}  display: none !important;}</code>\n<em>has to be included the styles path.</em></p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Timepicker:</h4>\n    <timepicker [(ngModel)]=\"tpMytime\"></timepicker>\n    <pre class=\"alert alert-info\">Time is: {{tpMytime}}</pre>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Meridian:</h4>\n    <timepicker [(ngModel)]=\"mMytime\" [showMeridian]=\"mIsmeridian\"></timepicker>\n    <pre class=\"alert alert-info\">Time is: {{mMytime}}</pre>\n    <hr>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"mToggleMode()\">12H / 24H</button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Disabled:</h4>\n    <timepicker [(ngModel)]=\"dMytime\" [showMeridian]=\"true\" [readonlyInput]=\"!dIsEnabled\"></timepicker>\n    <hr>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"dIsEnabled=!dIsEnabled\">Enable / Disable input</button>\n  </div>\n</div>"

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "<h1>Tooltip\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/tooltip\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<p>Inspired by the excellent Tipsy jQuery plugin written by Jason Frame. Tooltips are an updated version, which don’t rely on\n  images, uses CSS3 for animations, and much more.</p>\n<hr>\n<h3>\n  Examples\n</h3>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Simple:</h4>\n    <button type=\"button\" class=\"btn btn-primary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n      Simple demo\n    </button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dismiss on next click:</h4>\n    <button type=\"button\" class=\"btn btn-success\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" triggers=\"focus\">\n      Dismissible tooltip\n    </button>\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Dynamic Content</h4>\n    <button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\n      Simple binding\n    </button>\n    <template #tolTemplate>Just another: {{content}}</template>\n    <button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\n      TemplateRef binding\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ 980:
/***/ (function(module, exports) {

module.exports = "<h1>Typeahead\n  <a target=\"_blank\" href=\"http://valor-software.com/ng2-bootstrap/#/typeahead\">\n    <img alt=\"\" src=\"assets/img//link-doc.png\">\n  </a>\n</h1>\n<h3>\n  Examples\n</h3>\n<div class=\"row\" style=\"min-height: 20rem\">\n  <div class=\"col-xs-6 col-md-4\">\n    <h4>Static Array:</h4>\n    <pre class=\"card card-block card-header\">Model: {{saSelected | json}}</pre>\n    <input [(ngModel)]=\"saSelected\" [typeahead]=\"states\" class=\"form-control\">\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Item template:</h4>\n    <template #customItemTemplate let-model=\"item\" let-index=\"index\">\n      <h5>This is: {{model | json}} Index: {{ index }}</h5>\n    </template>\n\n    <pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\n    <input [(ngModel)]=\"itSelected\" [typeahead]=\"states\" [typeaheadItemTemplate]=\"customItemTemplate\" class=\"form-control\">\n  </div>\n  <div class=\"col-md-4\">\n    <h4>Option field:</h4>\n    <pre class=\"card card-block card-header\">Model: {{customSelected | json}}</pre>\n    <input [(ngModel)]=\"customSelected\" [typeahead]=\"statesComplex\" typeaheadOptionField=\"name\" class=\"form-control\">\n  </div>\n</div>"

/***/ }),

/***/ 981:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h2 class=\"page-header\">\n        Bootstrap Elements\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-desktop\"></i> Bootstrap Elements\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Hello, world!</h1>\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n    <hr class=\"my-2\">\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" href=\"http://v4-alpha.getbootstrap.com/components/jumbotron/\" role=\"button\">Learn more</a>\n    </p>\n  </div>\n\n  <div class=\"page-header\">\n    <h1>Buttons</h1>\n    <hr>\n  </div>\n  <p>\n    <button type=\"button\" class=\"btn btn-lg btn-secondary\">Default</button>\n    <button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\n  </p>\n  <p>\n    <button type=\"button\" class=\"btn btn-secondary\">Default</button>\n    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-link\">Link</button>\n  </p>\n  <p>\n    <button type=\"button\" class=\"btn btn-sm btn-secondary\">Default</button>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\n    <button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\n  </p>\n\n  <br>\n\n  <div class=\"page-header\">\n    <h1>Thumbnails</h1>\n    <hr>\n  </div>\n  <img class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" alt=\"\">\n\n  <div class=\"page-header\">\n    <h1>Dropdown menus</h1>\n    <hr>\n  </div>\n  <div class=\"dropdown theme-dropdown clearfix\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n            Dropdown\n        </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n      <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n      <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n      <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"page-header\">\n    <h1>Navbars</h1>\n  </div>\n\n  <nav class=\"navbar navbar-light bg-faded\">\n    <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar2\">\n            ☰\n        </button>\n    <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n      <a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item-elements nav-item active\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item-elements nav-item\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n        </li>\n        <li class=\"nav-item-elements nav-item\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n        </li>\n        <li class=\"nav-item-elements nav-item\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <br>\n  <nav class=\"navbar navbar-dark bg-inverse\">\n    <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar3\">\n            ☰\n        </button>\n    <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar3\">\n      <a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item nav-item-elements active\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item nav-item-elements\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n        </li>\n        <li class=\"nav-item nav-item-elements\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n        </li>\n        <li class=\"nav-item nav-item-elements\">\n          <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"page-header\">\n    <h1>Alerts</h1>\n    <hr>\n  </div>\n  <div class=\"alert alert-success\">\n    <strong>Well done!</strong> You successfully read this important alert message.\n  </div>\n  <div class=\"alert alert-info\">\n    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n  </div>\n  <div class=\"alert alert-warning\">\n    <strong>Warning!</strong> Best check yo self, you're not looking too good.\n  </div>\n  <div class=\"alert alert-danger\">\n    <strong>Oh snap!</strong> Change a few things up and try submitting again.\n  </div>\n\n  <div class=\"page-header\">\n    <h1>Progress bars</h1>\n    <hr>\n  </div>\n  <progress class=\"progress\" value=\"25\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 25%;\">25%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-success\" value=\"50\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 50%;\">50%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-info\" value=\"65\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 65%;\">65%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-warning\" value=\"80\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 80%;\">80%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-danger\" value=\"95\" max=\"100\">\n    <div class=\"progress\">\n      <span class=\"progress-bar\" style=\"width: 95%;\">95%</span>\n    </div>\n  </progress>\n  <progress class=\"progress progress-striped progress-animated\" value=\"25\" max=\"100\">25%</progress>\n  <br>\n\n  <div class=\"page-header\">\n    <h1>List groups</h1>\n    <hr>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Cras justo odio</li>\n        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n        <li class=\"list-group-item\">Morbi leo risus</li>\n        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li>\n      </ul>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"list-group\">\n        <a href=\"javascript:;\" class=\"list-group-item active\">Cras justo odio</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Morbi leo risus</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Porta ac consectetur ac</a>\n        <a href=\"javascript:;\" class=\"list-group-item\">Vestibulum at eros</a>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"list-group\">\n        <a href=\"javascript:;\" class=\"list-group-item active\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n        <a href=\"javascript:;\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n        <a href=\"javascript:;\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n        </a>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n  </div>\n\n  <div class=\"page-header\">\n    <h1>Cards</h1>\n    <hr>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header card-default\">\n          Card title\n        </div>\n        <div class=\"card-block\">\n          Card content\n        </div>\n      </div>\n      <div class=\"card card-primary card-inverse\">\n        <div class=\"card-header card-primary\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-success card-inverse\">\n        <div class=\"card-header card-success\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n      <div class=\"card card-info card-inverse\">\n        <div class=\"card-header card-info\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-warning card-inverse\">\n        <div class=\"card-header card-warning\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n      <div class=\"card card-danger card-inverse\">\n        <div class=\"card-header card-danger\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-success card-inverse\">\n        <div class=\"card-header card-success\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-warning card-inverse\">\n        <div class=\"card-header card-warning\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n    <div class=\"col-sm-4\">\n      <div class=\"card card-danger card-inverse\">\n        <div class=\"card-header card-danger\">\n          Card title\n        </div>\n        <div class=\"card-block bg-white\">\n          Card content\n        </div>\n      </div>\n    </div>\n    <!-- /.col-sm-4 -->\n  </div>\n\n</div>"

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Charts\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-fw fa-dashboard\"></i>\n          <a [routerLink]=\"['/dashboard/home']\"> Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-fw fa-bar-chart-o\"></i> NG2-Charts\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row no-gutters\">\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-primary\">\n        <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-success\">\n        <canvas baseChart [datasets]=\"areaChartData\" [labels]=\"areaChartLabels\" [options]=\"areaChartOptions\" [legend]=\"areaChartLegend\"\n          [chartType]=\"areaChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-warning\">\n        <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\" [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <div class=\"card card-block card-outline-danger\">\n        <canvas baseChart [datasets]=\"timeChartData\" [options]=\"timeChartOptions\" [legend]=\"timeChartLegend\" [chartType]=\"timeChartType\"\n          [colors]=\"chartColors\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports = "<app-topnav></app-topnav>\n<app-sidebar></app-sidebar>\n<!--<section class=\"main-container\" [ngClass]=\"{sidebarPushRight: isActive}\">\t-->\n<div class=\"main-container\">\n\t\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">\n                Forms\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-dashboard\"></i>\n                    <a routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"breadcrumb-item active\">\n                    <i class=\"fa fa-edit\"></i> Forms\n                </li>\n            </ol>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <label>Text Input</label>\n                    <input class=\"form-control\">\n                    <p class=\"form-text\">Example block-level help text here.</p>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text Input with Placeholder</label>\n                    <input class=\"form-control\" placeholder=\"Enter text\">\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Static Control</label>\n                    <p class=\"form-control-static\">email@example.com</p>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label for=\"exampleInputFile\">File input</label>\n                    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\">\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text area</label>\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Checkboxes</label>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 1\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 2\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 3\n                        </label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Inline Checkboxes</label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">1\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">2\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">3\n                    </label>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Radio Buttons</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"> Radio 3\n                        </label>\n                    </div>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Inline Radio Buttons</label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\n                    </label>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Selects</label>\n                    <select class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Multiple Selects</label>\n                    <select multiple=\"\" class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </fieldset>\n\n                <button type=\"submit\" class=\"btn btn-secondary\">Submit Button</button>\n                <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n            </form>\n\n        </div>\n        <div class=\"col-lg-6\">\n            <h4>Disabled Form States</h4>\n\n            <form role=\"form\">\n\n                <fieldset disabled=\"\">\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled input</label>\n                        <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled select menu</label>\n                        <select id=\"disabledSelect\" class=\"form-control\">\n                            <option>Disabled select</option>\n                        </select>\n                    </div>\n\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\"> Disabled Checkbox\n                        </label>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\n\n                </fieldset>\n\n            </form>\n            <br>\n\n            <h4>Form Validation</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group has-success\">\n                    <label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n                </div>\n\n                <div class=\"form-group has-warning\">\n                    <label class=\"form-control-label\" for=\"inputWarning\">Input with warning</label>\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning\">\n                </div>\n\n                <div class=\"form-group has-danger\">\n                    <label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError\">\n                </div>\n\n            </form>\n\n            <h4>Input Groups</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-addon\">.00</span>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-eur\"></i></span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\">$</span>\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-addon\">.00</span>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-btn\"><button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button></span>\n                </div>\n\n            </form>\n\n            <p>For complete documentation, please visit <a target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's Form Documentation</a>.</p>\n\n        </div>\n    </div>\n    <!-- /.row -->\n\n</div>"

/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Bootstrap Grid\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"active breadcrumb-item\">\n          <i class=\"fa fa-wrench\"></i> Bootstrap Grid\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-12 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-12\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-2 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-2\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-1 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-1\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-8 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-8\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-4\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-6 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-6\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 text-xs-center\">\n      <div class=\"card card-default\">\n        <div class=\"card-block\">\n          .col-xl-3\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>"

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\"float-xs-right\" dropdown>\n            <button id=\"chat-dropdown\" type=\"button\" class=\"btn btn-secondary btn-sm\" dropdownToggle [disabled]=\"disabled\">\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"chat-dropdown\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-block\">\n    <ul class=\"chat\">\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n            </small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n  <!-- /.card-footer -->\n</div>"

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Overview\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-fw fa-dashboard\"></i>\n                    <a [routerLink]=\"['/dashboard/home']\"> Dashboard</a>\n                </li>\n                <li class=\"breadcrumb-item active\">\n                    <i class=\"fa fa-fw fa-eye\"></i> Overview\n                </li>\n            </ol>\n        </div>\n    </div>\n    <hr>\n    <div>\n        <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-primary card-inverse\">\n                    <div class=\"card-header card-primary\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-comments fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">26</div>\n                                <div>New Comments!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-default\">\n                        <a href=\"javascript:;\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-success card-inverse\">\n                    <div class=\"card-header card-success\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-tasks fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">12</div>\n                                <div>New Tasks!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-green\">\n                        <a class=\"text-success\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-warning card-inverse\">\n                    <div class=\"card-header card-warning\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-shopping-cart fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">124</div>\n                                <div>New Orders!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-yellow\">\n                        <a class=\"text-warning\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <div class=\"card card-danger card-inverse\">\n                    <div class=\"card-header card-danger\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-3\">\n                                <i class=\"fa fa-support fa-5x\"></i>\n                            </div>\n                            <div class=\"col-xs-9 text-xs-right\">\n                                <div class=\"huge\">13</div>\n                                <div>Support Tickets!</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer card-red\">\n                        <a class=\"text-danger\" href=\"javascript:void(0);\">\n                            <span class=\"pull-xs-left\">View Details</span>\n                            <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <alert *ngFor=\"let alert of alerts; let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n            {{ alert?.msg }}\n        </alert>\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n                <div class=\"card card-default\">\n                    <div class=\"card-header\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n                    </div>\n                    <!-- /.card-header -->\n                    <app-timeline-cmp></app-timeline-cmp>\n                    <!-- /.card-body -->\n                </div>\n                <!-- /.card -->\n            </div>\n            <!-- /.col-lg-8 -->\n            <div class=\"col-lg-4\">\n                <div class=\"card card-default\">\n                    <div class=\"card-header\">\n                        <i class=\"fa fa-bell fa-fw\"></i> Notifications card\n                    </div>\n                    <!-- /.card-header -->\n                    <app-notifications-cmp></app-notifications-cmp>\n                    <!-- /.card-body -->\n                </div>\n                <!-- /.card -->\n\n                <app-chat-cmp></app-chat-cmp>\n                <!-- /.card .chat-card -->\n            </div>\n            <!-- /.col-lg-4 -->\n        </div>\n\n    </div>"

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n  <div class=\"list-group\">\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n            </span>\n    </a>\n  </div>\n  <!-- /.list-group -->\n  <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <ul class=\"timeline\">\n    <li>\n      <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n          <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n          </p>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n          <hr>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a href=\"#\">Action</a>\n              </li>\n              <li><a href=\"#\">Another action</a>\n              </li>\n              <li><a href=\"#\">Something else here</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n      <h2 class=\"page-header\">\n        Tables\n      </h2>\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <i class=\"fa fa-dashboard\"></i>\n          <a routerLink=\"/dashboard/home\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">\n          <i class=\"fa fa-table\"></i> Tables\n        </li>\n      </ol>\n    </div>\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-12\">\n      <h4>Basic example</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Table head options</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\"thead-inverse\">\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n          <table class=\"table\">\n            <thead class=\"thead-default\">\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Bordered table</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@TwBootstrap</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">4</th>\n                <td colspan=\"2\">Larry the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Small table</h4>\n      <div class=\"card card-block\">\n        <table class=\"table table-sm\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-12\">\n      <h4>Inverse table</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-inverse\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Username</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Mark</td>\n                <td>Otto</td>\n                <td>@mdo</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Jacob</td>\n                <td>Thornton</td>\n                <td>@fat</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Larry</td>\n                <td>the Bird</td>\n                <td>@twitter</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Striped Rows</h4>\n      <div class=\"card card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover table-striped\">\n            <thead>\n              <tr>\n                <th>Page</th>\n                <th>Visits</th>\n                <th>% New Visits</th>\n                <th>Revenue</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>/index.html</td>\n                <td>1265</td>\n                <td>32.3%</td>\n                <td>$321.33</td>\n              </tr>\n              <tr>\n                <td>/about.html</td>\n                <td>261</td>\n                <td>33.3%</td>\n                <td>$234.12</td>\n              </tr>\n              <tr>\n                <td>/sales.html</td>\n                <td>665</td>\n                <td>21.3%</td>\n                <td>$16.34</td>\n              </tr>\n              <tr>\n                <td>/blog.html</td>\n                <td>9516</td>\n                <td>89.3%</td>\n                <td>$1644.43</td>\n              </tr>\n              <tr>\n                <td>/404.html</td>\n                <td>23</td>\n                <td>34.3%</td>\n                <td>$23.52</td>\n              </tr>\n              <tr>\n                <td>/services.html</td>\n                <td>421</td>\n                <td>60.3%</td>\n                <td>$724.32</td>\n              </tr>\n              <tr>\n                <td>/blog/post.html</td>\n                <td>1233</td>\n                <td>93.2%</td>\n                <td>$126.34</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <h4>Hoverable rows</h4>\n      <div class=\"card card-block\">\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td colspan=\"2\">Larry the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <h4>Contextual classes</h4>\n      <div class=\"card card-block\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"table-active\">\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr class=\"table-success\">\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr class=\"table-info\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr class=\"table-warning\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n            <tr class=\"table-danger\">\n              <th scope=\"row\">3</th>\n              <td>Larry</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 offset-lg-4\">\n        \t<img src=\"assets/img/SB-admin.png\" width=\"150px\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" ng-model=\"name\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Log in </a>\t\t\t\t\n\t\t\t\t&nbsp;\n\t\t\t\t<a class=\"btn rounded-btn\" routerLink=\"/signup\">Register</a>\n\t\t\t</form>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-left\" type=\"button\" (click)=\"sidebarCollapsed = !sidebarCollapsed\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n    </button>\n</nav>\n<div [collapse]=\"sidebarCollapsed\" class=\"sidebar-collapse\">\n  <ul class=\"sidebar-inverse-nav bg-inverse\">\n    <ng-container *ngFor=\"let item of menuList\">\n      <li class=\"side-item\" *ngIf=\"item.children.length === 0\">\n        <a [routerLink]=\"[item.link]\" [routerLinkActive]=\"['active-link']\" class=\"side-link\">\n          <i class=\"{{item.glyph}}\"></i> &nbsp; {{item.name}}\n        </a>\n      </li>\n      <li class=\"side-item\" *ngIf=\"item.children.length > 0\">\n        <a [routerLink]=\"['components']\" [routerLinkActive]=\"['router-link-active']\" class=\"side-link\" (click)=\"item.collapse = !item.collapse\">\n          <i class=\"fa fa-plus\"></i> &nbsp; {{item.name}}\n          <i *ngIf=\"item.collapse\" class=\"{{subMenuGlyphDown}} float-right\" aria-hidden=\"true\"></i>\n          <i *ngIf=\"!item.collapse\" class=\"{{subMenuGlyphUp}} float-right\" aria-hidden=\"true\"></i>\n        </a>\n        <div [collapse]=\"item.collapse\">\n          <ul>\n            <li class=\"sub-item\" *ngFor=\"let child of item.children\">\n              <a [routerLink]=\"[item.link + '/' + child.link]\" [routerLinkActive]=\"['router-link-active']\" class=\"side-link\">\n                <i class=\"{{child.glyph}}\"></i> &nbsp; {{child.name}}\n              </a>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ng-container>\n    <li class=\"side-item\">\n      <a class=\"side-link\" href=\"https://github.com/DouglasWebster/angular-cli-sb2-bs4\">\n        GitHub Source\n        </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse topnav\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"topNavCollapsed = !topNavCollapsed\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand text-center text-lg-left\" href=\"#\">SB Admin BS 4 Angular2</a>\n\n  <div [collapse]=\"topNavCollapsed\" class=\"navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a href=\"https://github.com/DouglasWebster/angular_cli-sb2-bs4/archive/master.zip\" class=\"btn btn-outline-secondary\" role=\"button\">\n          Download Now\n        </a>\n      </li>\n      <li class=\"nav-item\" dropdown>\n        <a href id=\"dropdownMenu1\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n          <i class=\"fa fa-envelope\"></i>\n          <b class=\"caret\"></b>\n          <span class=\"sr-only\">(current)</span>\n        </a>\n        <ul class=\"dropdown-menu message-dropdown dropdown-menu-right\" aria-labelledby=\"dropdownMenu1\">\n          <li class=\"message-preview\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                              <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                          </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\"><strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <hr>\n          <li class=\"message-preview\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                              <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                          </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\"><strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <hr>\n          <li class=\"message-preview\">\n            <a href=\"javascript:;\" class=\"dropdown-item\">\n              <div class=\"media\">\n                <span class=\"media-left hidden-md-down\">\n                              <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                          </span>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\"><strong>John Smith</strong>\n                  </h5>\n                  <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                  <p class=\"last hidden-md-down\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                </div>\n              </div>\n            </a>\n          </li>\n          <hr>\n          <li class=\"dropdown-item message-footer\">\n            <a href=\"javascript:;\" class=\"dropdown-item text-center\">Read All New Messages</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\" dropdown>\n        <a href id=\"dropdownMenu2\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n          <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n        </a>\n        <ul class=\"dropdown-menu alert-dropdown dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\">\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n          </li>\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n          </li>\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a href=\"javascript:;\" class=\"dropdown-item\">View All</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\" dropdown>\n        <a href id=\"dropdownMenu3\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n          <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu3\">\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\n          </li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"fa fa-fw fa-power-off\"></i> Log Out\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 offset-lg-4\">\n        \t<img src=\"assets/img/SB-admin.png\" width=\"150px;\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Full Name\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Repeat Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a  class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Register </a>&nbsp;\n\t\t\t\t<a  class=\"btn rounded-btn\" routerLink=\"/\"> Log in </a>\n\t\t\t</form>\n\t\t</div>\t\n\t</div>\n</div>\n"

/***/ })

},[1024]);
//# sourceMappingURL=main.bundle.map