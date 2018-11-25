(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _config_spotify_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/spotify-api.config */ "./src/app/config/spotify-api.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _config_spotify_auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/spotify-auth.config */ "./src/app/config/spotify-auth.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
        this.configureSpotifyAuth();
    }
    AppComponent.prototype.configureSpotifyAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isSuccess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.oauthService.configure(_config_spotify_auth_config__WEBPACK_IMPORTED_MODULE_3__["spotifyAuthConfig"]);
                        this.oauthService.setStorage(sessionStorage);
                        return [4 /*yield*/, this.oauthService.tryLogin()];
                    case 1:
                        isSuccess = _a.sent();
                        if (isSuccess) {
                            _config_spotify_api_config__WEBPACK_IMPORTED_MODULE_0__["spotify"].setAccessToken(this.oauthService.getAccessToken());
                            this.router.navigate(['/home']);
                        }
                        else {
                            this.oauthService.initImplicitFlow();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_library_tree_library_tree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/library-tree/library-tree.component */ "./src/app/components/library-tree/library-tree.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-virtual-scroller */ "./node_modules/ngx-virtual-scroller/dist/virtual-scroller.js");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_library_tree_library_tree_component__WEBPACK_IMPORTED_MODULE_9__["LibraryTreeComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__["VirtualScrollerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-library-tree>\r\n</app-library-tree>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_spotify_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/spotify-api.config */ "./src/app/config/spotify-api.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'wikidata-spotify-matcher';
        this.username = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_config_spotify_api_config__WEBPACK_IMPORTED_MODULE_1__["spotify"].getMe()];
                    case 1:
                        me = _a.sent();
                        this.username = me.display_name;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/components/home/home.component.sass")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/library-tree/library-tree.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/library-tree/library-tree.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  <h3>Please be patient while we are getting your spotify library</h3>\r\n</div>\r\n<div *ngIf=\"!isLoading\" class=\"row\">\r\n  <div class=\"loading-indicator\">\r\n    <mat-spinner *ngIf=\"wikiDetailsLoadMask\"></mat-spinner>\r\n  </div>\r\n  <div class=\"column\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <form>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Type to filter artists\" [ngModel]=\"artistSearchTerm\" (ngModelChange)=\"filterArtists($event)\"\r\n              name=\"artistSearchTerm\">\r\n          </mat-form-field>\r\n        </form>\r\n      </mat-card-header>\r\n      <mat-action-list>\r\n        <virtual-scroller #scroll [items]=\"library\">\r\n          <button *ngFor=\"let artist of scroll.viewPortItems\" mat-list-item (click)=\"artistClicked(artist)\">{{artist.name}}</button>\r\n        </virtual-scroller>\r\n      </mat-action-list>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"column\" *ngIf=\"selectedArtist\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>{{selectedArtist.name}}</mat-card-title>\r\n        <mat-card-subtitle>ARTIST</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-action-list>\r\n        <button *ngFor=\"let album of selectedArtist.albums\" mat-list-item (click)=\"albumClicked(album)\">{{album.name}}</button>\r\n      </mat-action-list>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"column\" *ngIf=\"selectedAlbum\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>{{selectedAlbum.name}}</mat-card-title>\r\n        <mat-card-subtitle>ALBUM</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-action-list>\r\n        <button *ngFor=\"let track of selectedAlbum.tracks\" mat-list-item (click)=\"onTrackSelected(track)\">{{track.name}}</button>\r\n      </mat-action-list>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"details-column\" *ngIf=\"selectedTrack\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>Wikidata matches</mat-card-title>\r\n        <mat-card-subtitle>{{selectedArtist.name}}: {{selectedTrack.name}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div *ngIf=\"matchFound && !exactMatch\">\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let track of matchingWikidataSongs\">\r\n            <div>\r\n              {{getArtists(track)}}{{':'}}{{' ' + track.name}}\r\n            </div>\r\n            <div class=\"auto-align\">\r\n              <button mat-raised-button color=\"accent\" (click)=\"updateSpotifyIdForSong(track)\">Yep, this is it.</button>\r\n            </div>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <button mat-raised-button color=\"primary\" style=\"width: 100%\" (click)=\"createSong(selectedTrack)\">\r\n              Can't find your track? Click here to create a new one in Wikidata.\r\n            </button>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n\r\n      <div *ngIf=\"matchFound && exactMatch && matchingWikidataSongs[0]\">\r\n        <mat-list>\r\n          <mat-list-item>\r\n            <span>Track found in Wikidata! It is an exact match!</span>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <span>{{matchingWikidataSongs[0].name}}</span>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <span>{{matchingWikidataSongs[0].description}}</span>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n\r\n      <div *ngIf=\"!matchFound && !exactMatch\">\r\n        <mat-list>\r\n          <mat-list-item>\r\n            <span>No matching track found in Wikidata!</span>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <button mat-raised-button color=\"primary\" style=\"width: 100%\" (click)=\"createSong(selectedTrack)\">\r\n              Save this to wikidata.\r\n            </button>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/library-tree/library-tree.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/library-tree/library-tree.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "virtual-scroller {\n  width: 100%;\n  height: 75vh; }\n\nmat-action-list {\n  height: 75vh;\n  overflow-y: auto; }\n\nmat-list {\n  height: 75vh;\n  overflow-y: auto; }\n\n.row {\n  white-space: nowrap;\n  height: 90vh; }\n\n.column {\n  display: inline-block;\n  height: 100%;\n  margin: 0.5rem;\n  width: 500px; }\n\n.details-column {\n  display: inline-block;\n  height: 100%;\n  margin: 0.5rem;\n  width: 800px; }\n\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.auto-align {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LXRyZWUvRDpcXFdvcmtzcGFjZVxcd2lraWRhdGEtc3BvdGlmeS1tYXRjaGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsaWJyYXJ5LXRyZWVcXGxpYnJhcnktdHJlZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQUc7O0FBRWpCO0VBQ0ksYUFBWTtFQUNaLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLGFBQVk7RUFDWixpQkFBZ0IsRUFBRzs7QUFFdkI7RUFDSSxvQkFBbUI7RUFDbkIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osZUFBYztFQUNkLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxzQkFBcUI7RUFDckIsYUFBWTtFQUNaLGVBQWM7RUFDZCxhQUFZLEVBQUc7O0FBRW5CO0VBQ0UsZ0JBQWU7RUFDZixhQUFZO0VBQ1osWUFBVztFQUNYLFdBQVU7RUFDVixlQUFjO0VBQ2QsYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPO0VBQ1AsVUFBUztFQUNULFNBQVEsRUFBRzs7QUFFYjtFQUNJLGFBQVksRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS10cmVlL2xpYnJhcnktdHJlZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInZpcnR1YWwtc2Nyb2xsZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXZoOyB9XG5cbm1hdC1hY3Rpb24tbGlzdCB7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cblxubWF0LWxpc3Qge1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbi5yb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiA5MHZoOyB9XG5cbi5jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgd2lkdGg6IDUwMHB4OyB9XG5cbi5kZXRhaWxzLWNvbHVtbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICB3aWR0aDogODAwcHg7IH1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBvdmVyZmxvdzogc2hvdztcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7IH1cblxuLmF1dG8tYWxpZ24ge1xuICAgIG1hcmdpbjogYXV0bzsgfVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/library-tree/library-tree.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/library-tree/library-tree.component.ts ***!
  \*******************************************************************/
/*! exports provided: LibraryTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryTreeComponent", function() { return LibraryTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_spotify_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/spotify-api.config */ "./src/app/config/spotify-api.config.ts");
/* harmony import */ var src_app_services_wikidata_wikidata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wikidata/wikidata.service */ "./src/app/services/wikidata/wikidata.service.ts");
/* harmony import */ var src_app_models_wikidata_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/wikidata-models */ "./src/app/models/wikidata-models.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LibraryTreeComponent = /** @class */ (function () {
    function LibraryTreeComponent(wdk) {
        this.wdk = wdk;
        this.artistSearchTerm = '';
        this.isLoading = false;
        this.wikiDetailsLoadMask = false;
        this.library = [];
        this.tracks = [];
        this.matchingWikidataSongs = [];
        this.matchFound = false;
        this.exactMatch = false;
    }
    LibraryTreeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isLoading = true;
                        _a = this;
                        return [4 /*yield*/, this.getFullLibrary()];
                    case 1:
                        _a.tracks = _b.sent();
                        this.unfilteredLibrary = this.groupByArtistAndAlbum(this.tracks);
                        this.library = this.unfilteredLibrary.slice();
                        this.isLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LibraryTreeComponent.prototype.ngAfterViewChecked = function () {
        if (typeof this.viewCheckedCallback === 'function') {
            this.viewCheckedCallback();
        }
    };
    LibraryTreeComponent.prototype.waitForUpdate = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            _this.viewCheckedCallback = resolve;
        });
    };
    LibraryTreeComponent.prototype.artistClicked = function (artist) {
        this.waitForUpdate().then(this.scrollToTheRight);
        this.selectedArtist = artist;
        if (artist.albums.length === 1) {
            this.selectedAlbum = artist.albums[0];
        }
        else {
            this.selectedAlbum = null;
        }
        this.selectedTrack = null;
    };
    LibraryTreeComponent.prototype.albumClicked = function (album) {
        this.waitForUpdate().then(this.scrollToTheRight);
        this.selectedAlbum = album;
        this.selectedTrack = null;
    };
    LibraryTreeComponent.prototype.filterArtists = function (term) {
        this.artistSearchTerm = term;
        if (!term) {
            return;
        }
        this.library = this.unfilteredLibrary
            .filter(function (a) { return a.name.toLowerCase().includes(term.toLowerCase()); });
    };
    LibraryTreeComponent.prototype.groupByArtistAndAlbum = function (library) {
        var albumLib = library.reduce(function (albums, track) {
            var album = albums.find(function (a) { return a.id === track.album.id; });
            if (album) {
                album.tracks.push(track);
            }
            else {
                albums.push(__assign({}, track.album, { artist: track.artists[0], tracks: [track] }));
            }
            return albums;
        }, []);
        var artistLib = albumLib.reduce(function (artists, album) {
            var artist = artists.find(function (a) { return a.id === album.artist.id; });
            if (artist) {
                artist.albums.push(album);
            }
            else {
                artists.push(__assign({}, album.artist, { albums: [album] }));
            }
            return artists;
        }, []);
        return artistLib;
    };
    LibraryTreeComponent.prototype.getFullLibrary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var limit, firstResponse, library, promises, offset, promise, responses, itemsList, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        limit = 50;
                        return [4 /*yield*/, src_app_config_spotify_api_config__WEBPACK_IMPORTED_MODULE_1__["spotify"].getMySavedTracks({ limit: limit })];
                    case 1:
                        firstResponse = _a.sent();
                        library = firstResponse.items;
                        promises = [];
                        for (offset = limit; offset < firstResponse.total; offset += limit) {
                            promise = src_app_config_spotify_api_config__WEBPACK_IMPORTED_MODULE_1__["spotify"].getMySavedTracks({ limit: limit, offset: offset });
                            promises.push(promise);
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.all(promises)];
                    case 3:
                        responses = _a.sent();
                        itemsList = responses.map(function (r) { return r.items; });
                        library = library.concat.apply(library, itemsList);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, library.map(function (t) { return t.track; })];
                }
            });
        });
    };
    LibraryTreeComponent.prototype.scrollToTheRight = function () {
        window.scrollTo({
            top: 0,
            left: window.outerWidth,
            behavior: 'smooth',
        });
    };
    LibraryTreeComponent.prototype.onTrackSelected = function (track) {
        return __awaiter(this, void 0, void 0, function () {
            var entity, song, entities;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.matchingWikidataSongs = [];
                        this.selectedTrack = track;
                        this.wikiDetailsLoadMask = true;
                        console.log('Selected track: ', this.selectedTrack);
                        return [4 /*yield*/, this.wdk.getSongBySpotifyId(track.id)];
                    case 1:
                        entity = _a.sent();
                        if (entity) {
                            console.log('Yeah we found a song in wikidata by its spotify id!');
                            song = new src_app_models_wikidata_models__WEBPACK_IMPORTED_MODULE_3__["WdkSongWrapper"](entity, this.wdk);
                            this.matchingWikidataSongs.push(song);
                            console.log('The song:', song);
                            this.waitForUpdate().then(this.scrollToTheRight);
                            this.wikiDetailsLoadMask = false;
                            this.matchFound = true;
                            this.exactMatch = true;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.wdk.findSongsByTitle(track.name)];
                    case 2:
                        entities = _a.sent();
                        if (!entities || entities.length === 0) {
                            console.warn('Not found in wikidata: ' + track.name);
                            this.waitForUpdate().then(this.scrollToTheRight);
                            this.wikiDetailsLoadMask = false;
                            this.matchFound = false;
                            this.exactMatch = false;
                            return [2 /*return*/];
                        }
                        console.log('Found songs in wikidata for: ' + track.name);
                        Object.values(entities).forEach(function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var song;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        song = new src_app_models_wikidata_models__WEBPACK_IMPORTED_MODULE_3__["WdkSongWrapper"](e, this.wdk);
                                        return [4 /*yield*/, song.waitData];
                                    case 1:
                                        _a.sent();
                                        this.matchingWikidataSongs.push(song);
                                        this.waitForUpdate().then(this.scrollToTheRight);
                                        this.wikiDetailsLoadMask = false;
                                        this.matchFound = true;
                                        this.exactMatch = false;
                                        console.log('The song:', song);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    LibraryTreeComponent.prototype.getArtists = function (song) {
        return song.artists.map(function (a) { return a.labels['en']; }).join(', ');
    };
    LibraryTreeComponent.prototype.createSong = function (song) {
        var _this = this;
        this.wikiDetailsLoadMask = true;
        this.wdk.createSong(song.name, song.artists.map(function (a) { return a.name; }), song.id).then(function (onSuccess) {
            _this.wikiDetailsLoadMask = false;
            _this.onTrackSelected(song);
        }).catch(function (onError) {
            console.error('Failed to create song:', song);
        });
    };
    LibraryTreeComponent.prototype.updateSpotifyIdForSong = function (song) {
        var _this = this;
        this.wikiDetailsLoadMask = true;
        this.wdk.setSpotifyTrackIdForEntity(song.entityId, this.selectedTrack.id).then(function (onSuccess) {
            _this.wikiDetailsLoadMask = false;
            _this.onTrackSelected(_this.selectedTrack);
        }).catch(function (onError) {
            console.error('Failed to update song:', song);
        });
    };
    LibraryTreeComponent.prototype.hasArtist = function (song) {
        return song.artists !== undefined && song.artists.length > 0;
    };
    LibraryTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-library-tree',
            template: __webpack_require__(/*! ./library-tree.component.html */ "./src/app/components/library-tree/library-tree.component.html"),
            styles: [__webpack_require__(/*! ./library-tree.component.sass */ "./src/app/components/library-tree/library-tree.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_wikidata_wikidata_service__WEBPACK_IMPORTED_MODULE_2__["WikidataService"]])
    ], LibraryTreeComponent);
    return LibraryTreeComponent;
}());



/***/ }),

/***/ "./src/app/config/backend-config.ts":
/*!******************************************!*\
  !*** ./src/app/config/backend-config.ts ***!
  \******************************************/
/*! exports provided: backendConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backendConfig", function() { return backendConfig; });
var backendConfig = {
    host: '/',
};


/***/ }),

/***/ "./src/app/config/spotify-api.config.ts":
/*!**********************************************!*\
  !*** ./src/app/config/spotify-api.config.ts ***!
  \**********************************************/
/*! exports provided: spotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spotify", function() { return spotify; });
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spotify-web-api-js */ "./node_modules/spotify-web-api-js/src/spotify-web-api.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_0__);

var spotify = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_0___default.a();


/***/ }),

/***/ "./src/app/config/spotify-auth.config.ts":
/*!***********************************************!*\
  !*** ./src/app/config/spotify-auth.config.ts ***!
  \***********************************************/
/*! exports provided: spotifyAuthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spotifyAuthConfig", function() { return spotifyAuthConfig; });
var spotifyAuthConfig = {
    loginUrl: 'https://accounts.spotify.com/authorize',
    redirectUri: window.location.origin + '/index.html',
    clientId: '1b93280bddbd4807bf755f609beccea4',
    scope: 'user-library-read',
    responseType: 'token',
    oidc: false,
};


/***/ }),

/***/ "./src/app/config/wikidata.config.ts":
/*!*******************************************!*\
  !*** ./src/app/config/wikidata.config.ts ***!
  \*******************************************/
/*! exports provided: propertyIds, classIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyIds", function() { return propertyIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classIds", function() { return classIds; });
var propertyIds = {
    performer: 'P175',
    partOf: 'P361',
    instanceOf: 'P31',
    genre: 'P136',
    releaseDate: 'P577',
    spotifyTrackId: 'P2207',
    spotifyAlbumId: 'P2205',
    spotifyArtistId: 'P1902',
};
var classIds = {
    human: 'Q5',
    song: 'Q7366',
    single: 'Q134556',
    studioAlbum: 'Q208569',
    album: 'Q482994',
};


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/wikidata-models.ts":
/*!*******************************************!*\
  !*** ./src/app/models/wikidata-models.ts ***!
  \*******************************************/
/*! exports provided: ByIdQueryOptions, WdkSongWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByIdQueryOptions", function() { return ByIdQueryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdkSongWrapper", function() { return WdkSongWrapper; });
/* harmony import */ var _config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/wikidata.config */ "./src/app/config/wikidata.config.ts");

var ByIdQueryOptions = /** @class */ (function () {
    function ByIdQueryOptions(ids) {
        this.languages = ['en'];
        this.props = ['info', 'claims', 'id', 'descriptions', 'labels'];
        this.format = 'json';
        this.ids = ids;
    }
    return ByIdQueryOptions;
}());

var WdkSongWrapper = /** @class */ (function () {
    function WdkSongWrapper(entity, service) {
        var _this = this;
        this.entity = entity;
        this.relatedEntites = [];
        var ids = [];
        WdkSongWrapper.relatedPropIds.forEach(function (propId) {
            if (entity.claims[propId]) {
                ids = ids.concat(entity.claims[propId]);
            }
        });
        if (ids.length === 0) {
            this.waitData = Promise.resolve();
            return;
        }
        this.waitData = service.getEntities(new ByIdQueryOptions(ids))
            .then(function (entites) { return _this.relatedEntites = Object.values(entites); });
    }
    Object.defineProperty(WdkSongWrapper.prototype, "name", {
        get: function () {
            return this.entity.labels.en;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WdkSongWrapper.prototype, "description", {
        get: function () {
            return this.entity.descriptions.en;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WdkSongWrapper.prototype, "artists", {
        get: function () {
            var ids = this.entity.claims[_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].performer];
            return ids
                ? this.findEntitesByIds(ids)
                : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WdkSongWrapper.prototype, "albums", {
        get: function () {
            var ids = this.entity.claims[_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].partOf];
            return ids
                ? this.findEntitesByIds(ids)
                : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WdkSongWrapper.prototype, "genres", {
        get: function () {
            var ids = this.entity.claims[_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].genre];
            return ids
                ? this.findEntitesByIds(ids)
                : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WdkSongWrapper.prototype, "spotifyId", {
        get: function () {
            var ids = this.entity.claims[_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].spotifyTrackId];
            return this.entity.claims[_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].spotifyTrackId]
                ? ids[0]
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WdkSongWrapper.prototype, "entityId", {
        get: function () {
            return this.entity.id;
        },
        enumerable: true,
        configurable: true
    });
    WdkSongWrapper.prototype.findEntitesByIds = function (ids) {
        return this.relatedEntites.filter(function (e) { return ids.includes(e.id); });
    };
    WdkSongWrapper.relatedPropIds = [
        _config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].genre,
        _config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].partOf,
        _config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].performer,
    ];
    return WdkSongWrapper;
}());



/***/ }),

/***/ "./src/app/services/wikidata/sparql-queries.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/wikidata/sparql-queries.ts ***!
  \*****************************************************/
/*! exports provided: findSongsByTitleSparql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSongsByTitleSparql", function() { return findSongsByTitleSparql; });
/* harmony import */ var src_app_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/wikidata.config */ "./src/app/config/wikidata.config.ts");

var findSongsByTitleSparql = function (title, limit) {
    if (limit === void 0) { limit = 20; }
    return "\n  SELECT ?item WHERE {\n    ?item wdt:" + src_app_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["propertyIds"].instanceOf + " ?type.\n    FILTER(?type = wd:" + src_app_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["classIds"].song + " || ?type = wd:" + src_app_config_wikidata_config__WEBPACK_IMPORTED_MODULE_0__["classIds"].single + ").\n    ?item ?label \"" + title + "\"@en.\n    SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n  } LIMIT " + limit;
};


/***/ }),

/***/ "./src/app/services/wikidata/wikidata.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/wikidata/wikidata.service.ts ***!
  \*******************************************************/
/*! exports provided: WikidataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikidataService", function() { return WikidataService; });
/* harmony import */ var _config_backend_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/backend-config */ "./src/app/config/backend-config.ts");
/* harmony import */ var _models_wikidata_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/wikidata-models */ "./src/app/models/wikidata-models.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wikidata_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wikidata-sdk */ "./node_modules/wikidata-sdk/lib/index.js");
/* harmony import */ var wikidata_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wikidata_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_wikidata_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/wikidata.config */ "./src/app/config/wikidata.config.ts");
/* harmony import */ var _sparql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sparql-queries */ "./src/app/services/wikidata/sparql-queries.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var WikidataService = /** @class */ (function () {
    function WikidataService() {
    }
    WikidataService.prototype.createSong = function (name, artists, spotifyId) {
        return fetch(_config_backend_config__WEBPACK_IMPORTED_MODULE_0__["backendConfig"].host, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, artists: artists, spotifyId: spotifyId }),
        });
    };
    WikidataService.prototype.setSpotifyTrackIdForEntity = function (entityId, spotifyId) {
        return fetch(_config_backend_config__WEBPACK_IMPORTED_MODULE_0__["backendConfig"].host, {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entityId: entityId, spotifyId: spotifyId }),
        });
    };
    WikidataService.prototype.getSongBySpotifyId = function (spotifyId) {
        return this.getEntityByClaim(_config_wikidata_config__WEBPACK_IMPORTED_MODULE_4__["propertyIds"].spotifyTrackId, spotifyId);
    };
    WikidataService.prototype.getArtistBySpotifyId = function (spotifyId) {
        return this.getEntityByClaim(_config_wikidata_config__WEBPACK_IMPORTED_MODULE_4__["propertyIds"].spotifyArtistId, spotifyId);
    };
    WikidataService.prototype.getAlbumBySpotifyId = function (spotifyId) {
        return this.getEntityByClaim(_config_wikidata_config__WEBPACK_IMPORTED_MODULE_4__["propertyIds"].spotifyAlbumId, spotifyId);
    };
    WikidataService.prototype.findSongsByTitle = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            var sparql, ids, entities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sparql = Object(_sparql_queries__WEBPACK_IMPORTED_MODULE_5__["findSongsByTitleSparql"])(title);
                        return [4 /*yield*/, this.executeSparql(sparql)];
                    case 1:
                        ids = _a.sent();
                        if (ids.length === 0) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.getEntities(new _models_wikidata_models__WEBPACK_IMPORTED_MODULE_1__["ByIdQueryOptions"](ids))];
                    case 2:
                        entities = _a.sent();
                        return [2 /*return*/, Object.values(entities)];
                }
            });
        });
    };
    WikidataService.prototype.getEntities = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var queryUrl, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryUrl = wikidata_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.getEntities(query);
                        return [4 /*yield*/, this.getJson(queryUrl)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, wikidata_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.simplify.entities(results.entities)];
                }
            });
        });
    };
    WikidataService.prototype.executeSparql = function (sparql) {
        return __awaiter(this, void 0, void 0, function () {
            var url, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = wikidata_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.sparqlQuery(sparql);
                        return [4 /*yield*/, this.getJson(url)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, wikidata_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.simplifySparqlResults(results)];
                }
            });
        });
    };
    WikidataService.prototype.getEntityByClaim = function (claimId, claimValue) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEntitiesByClaim(claimId, claimValue)];
                    case 1:
                        result = _a.sent();
                        if (!result.ids || result.ids.length === 0) {
                            return [2 /*return*/, null];
                        }
                        if (result.ids.length > 1) {
                            console.warn("multiple match when calling getEntityByClaim. claimId: " + claimId + ",claimValue: " + claimValue);
                            console.warn(result);
                        }
                        return [2 /*return*/, result.entities[result.ids[0]]];
                }
            });
        });
    };
    WikidataService.prototype.getEntitiesByClaim = function (claimId, claimValue) {
        return __awaiter(this, void 0, void 0, function () {
            var url, resultWrapper, body, ids, query, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = wikidata_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.getReverseClaims(claimId, claimValue);
                        resultWrapper = {
                            ids: null,
                            entities: null,
                        };
                        return [4 /*yield*/, this.getJson(url)];
                    case 1:
                        body = _b.sent();
                        ids = wikidata_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.simplify.sparqlResults(body);
                        if (ids.length === 0) {
                            return [2 /*return*/, resultWrapper];
                        }
                        resultWrapper.ids = ids;
                        query = new _models_wikidata_models__WEBPACK_IMPORTED_MODULE_1__["ByIdQueryOptions"](ids);
                        _a = resultWrapper;
                        return [4 /*yield*/, this.getEntities(query)];
                    case 2:
                        _a.entities = _b.sent();
                        return [2 /*return*/, resultWrapper];
                }
            });
        });
    };
    WikidataService.prototype.getJson = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        resp = _a.sent();
                        if (resp.ok) {
                            return [2 /*return*/, resp.json()];
                        }
                        else {
                            throw new Error(resp.status + ": " + resp.statusText);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WikidataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], WikidataService);
    return WikidataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\wikidata-spotify-matcher\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map