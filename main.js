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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    display: block;\r\n    padding:3%;\r\n    color:white;\r\n    font-size:26px;\r\n    background-color: #04192E;\r\n   \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <div class=\"container\">\n    <div class=\"row header\">\n      <div class=\"col-md-12\">\n        <a>Game of Thrones</a>\n      </div>\n    </div>\n    \n  </div>\n</div>-->\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-view/book-view.component */ "./src/app/book-view/book-view.component.ts");
/* harmony import */ var _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./character-view/character-view.component */ "./src/app/character-view/character-view.component.ts");
/* harmony import */ var _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./house-view/house-view.component */ "./src/app/house-view/house-view.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//routerModule used for setting up the application level route 











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_6__["BookViewComponent"],
                _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_7__["CharacterViewComponent"],
                _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_8__["HouseViewComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //routerModule for root method to declare the possible routes in application
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'books/:bookId', component: _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_6__["BookViewComponent"] },
                    { path: 'characters/:characterId', component: _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_7__["CharacterViewComponent"] },
                    { path: 'house/:houseId', component: _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_8__["HouseViewComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] }
                ])
            ],
            providers: [_blog_http_service__WEBPACK_IMPORTED_MODULE_11__["BlogHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-http.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog-http.service.ts ***!
  \**************************************/
/*! exports provided: BlogHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHttpService", function() { return BlogHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogHttpService = /** @class */ (function () {
    function BlogHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://anapioficeandfire.com/api';
        console.log("Blog Http Service is called");
    }
    //Method to return all blogs
    BlogHttpService.prototype.getAllBooks = function () {
        return this.allBooks = this._http.get(this.baseUrl + "/books");
    };
    BlogHttpService.prototype.getCurrentBook = function (bookId) {
        return this.currentBook = this._http.get(this.baseUrl + "/books/" + bookId);
    };
    //Method to return all blogs
    BlogHttpService.prototype.getAllCharacters = function () {
        return this.allCharacters = this._http.get(this.baseUrl + '/characters');
    };
    BlogHttpService.prototype.getCurrentCharacter = function (characterId) {
        return this.currentCharacter = this._http.get(this.baseUrl + "/characters/" + characterId);
    };
    //Method to return all blogs
    BlogHttpService.prototype.getAllHouses = function () {
        return this.allHouse = this._http.get(this.baseUrl + '/houses');
    };
    BlogHttpService.prototype.getCurrentHouse = function (houseId) {
        return this.currentHouse = this._http.get(this.baseUrl + "/houses/" + houseId);
    };
    BlogHttpService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || "Server Error");
    };
    BlogHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogHttpService);
    return BlogHttpService;
}());



/***/ }),

/***/ "./src/app/book-view/book-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-view/book-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageBooks{\r\n    height: 300px;\r\n    width: 330px;\r\n}\r\n\r\n\r\n/* Xtra Small Devices */\r\n\r\n\r\n@media screen and (max-width:575px){\r\n \r\n    .imageBooks{\r\n        height: 200px;\r\n        width: 230px;\r\n    }\r\n    \r\n}\r\n\r\n\r\n/* Small Devices */\r\n\r\n\r\n@media screen and (min-width:576px) and (max-width:767px){\r\n\r\n    .imageBooks{\r\n        height: 200px;\r\n        width: 230px;\r\n    }\r\n\r\n}\r\n\r\n\r\n/* Medium Devices */\r\n\r\n\r\n@media screen and (min-width:768px) and (max-width:991px){\r\n   \r\n    .imageBooks{\r\n        height: 200px;\r\n        width: 230px;\r\n    }\r\n    \r\n}\r\n\r\n\r\n/* Large Devices */\r\n\r\n\r\n@media screen and (min-width:992px) and (max-width:1199px){ \r\n  \r\n    .imageBooks{\r\n        height: 200px;\r\n        width: 230px;\r\n    }\r\n\r\n}\r\n\r\n\r\n/* Xtra Large Devices */\r\n\r\n\r\n@media screen and (min-width:1200px){ \r\n  \r\n    .imageBooks{\r\n        height: 300px;\r\n        width: 330px;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/book-view/book-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-view/book-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"card card-primary\" *ngIf=\"currentBook\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\" style=\"text-align: center\">{{currentBook.name}}</h3>\r\n      <h6 class=\"card-title\" style=\"text-align: center\">(ISBN: {{currentBook.isbn}})</h6>\r\n    </div>\r\n    <div class=\"card body\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <img class=imageBooks src=\"../assets/images/book3.jpg\" />\r\n            <br>\r\n            <br>\r\n            <div class=\"row\" style=\"text-align: center\">\r\n              <div class=\"col-md-6\">\r\n                <a [routerLink]=\"['/home']\">\r\n                  <button class=\"btn btn-success btn-small\">Go Back</button>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br/>\r\n          <br/>\r\n          <br/>\r\n          <div class=\"col-md-8\">\r\n            <div class=\"row\">\r\n              <table class=\"table table-responsive table-condensed table-bordered col-md-6\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <b>Name :</b>\r\n                    </td>\r\n                    <td>{{currentBook.name}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <b>Media Type :</b>\r\n                    </td>\r\n                    <td>{{currentBook.mediaType}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <b>Country :</b>\r\n                    </td>\r\n                    <td>{{currentBook.country}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <b>No.of Pages :</b>\r\n                    </td>\r\n                    <td>{{currentBook.numberOfPages}}</td>\r\n                  </tr>\r\n                  <!---->\r\n                  <tr>\r\n                    <td>\r\n                      <b>Author :</b>\r\n                    </td>\r\n                    <td>{{currentBook.authors}}</td>\r\n                  </tr>\r\n                  <!---->\r\n                  <!---->\r\n                  <tr>\r\n                    <td>\r\n                      <b>No.of Characters :</b>\r\n                    </td>\r\n                    <td>{{currentBook.characters.length}}</td>\r\n                  </tr>\r\n                  <!---->\r\n                  <tr>\r\n                    <td>\r\n                      <b>No.of Pov Characters :</b>\r\n                    </td>\r\n                    <td>{{currentBook.povCharacters.length}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <b>Publisher :</b>\r\n                    </td>\r\n                    <td>{{currentBook.publisher}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <b>Released Date :</b>\r\n                    </td>\r\n                    <td>{{currentBook.released |date}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <!-- <td>\r\n                      <b> Characters :</b>\r\n                    </td>\r\n                    <td>{{currentBook.characters}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <b>Pov Characters :</b>\r\n                    </td>\r\n                    <td>{{currentBook.povCharacters}}</td>\r\n                  </tr>-->\r\n                </tbody>\r\n              </table>\r\n              <br/>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"row\">\r\n                  Characters \r\n                </div>\r\n                <div *ngFor=\"let characters of currentBook.characters\">\r\n                    <p class=\"border border-white text-truncate\">{{characters}}</p>\r\n                </div>\r\n                <div class=\"row\">\r\n                    POV Characters\r\n                  </div>\r\n                  <div *ngFor=\"let povCharacters of currentBook.povCharacters\">\r\n                      <p class=\"border border-white text-truncate\">{{currentBook.povCharacters}}</p>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/book-view/book-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-view/book-view.component.ts ***!
  \**************************************************/
/*! exports provided: BookViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookViewComponent", function() { return BookViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookViewComponent = /** @class */ (function () {
    function BookViewComponent(_route, router, blogHttpService) {
        this._route = _route;
        this.router = router;
        this.blogHttpService = blogHttpService;
        console.log('book constructor called');
    }
    BookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = this._route.snapshot.paramMap.get('bookId');
        this.blogHttpService.getCurrentBook(bookId).subscribe(function (data) {
            console.log(data);
            _this.currentBook = data;
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    BookViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./book-view.component.html */ "./src/app/book-view/book-view.component.html"),
            styles: [__webpack_require__(/*! ./book-view.component.css */ "./src/app/book-view/book-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _blog_http_service__WEBPACK_IMPORTED_MODULE_2__["BlogHttpService"]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "./src/app/character-view/character-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/character-view/character-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    margin: 15px;\r\n}\r\n/* Xtra Small Devices */\r\n@media screen and (max-width:575px){\r\n    h1{\r\n        font-size:1.3rem;\r\n    }\r\n    p{\r\n        font-size:1rem;\r\n    }\r\n    .imageCharacter{\r\n        width:200px;\r\n        height:280px;\r\n    }\r\n\r\n}\r\n/* Small Devices */\r\n@media screen and (min-width:576px) and (max-width:767px){\r\n    h1{\r\n        font-size:1.4rem;\r\n    }\r\n    p{\r\n        font-size: 1rem;\r\n    }\r\n    .imageCharacter{\r\n        width:200px;\r\n        height:280px;\r\n    }\r\n}\r\n/* Medium Devices */\r\n@media screen and (min-width:768px) and (max-width:991px){\r\n    h1{\r\n        font-size:1.5rem;\r\n    }\r\n    p{\r\n        font-size: 1.1rem;\r\n    }\r\n    .imageCharacter{\r\n        width:250px;\r\n        height:380px;\r\n    }\r\n}\r\n/* Large Devices */\r\n@media screen and (min-width:992px) and (max-width:1199px){ \r\n    h1{\r\n        font-size:1.8rem;\r\n    }\r\n    p{\r\n        font-size: 1.2rem;\r\n    }\r\n    .imageCharacter{\r\n        width:400px;\r\n        height:580px;\r\n    }\r\n}\r\n/* Xtra Large Devices */\r\n@media screen and (min-width:1200px){ \r\n    h1{\r\n        font-size: 2rem;\r\n    }\r\n    p{\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n}\r\n.body{\r\n    padding:15px;\r\n    width:100%;\r\n    height:100%;\r\n    background-color: #1c1d1e;\r\n    color:white;\r\n}\r\n.word-break{\r\n    overflow-wrap: break-word;\r\n}"

/***/ }),

/***/ "./src/app/character-view/character-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/character-view/character-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card card-primary\" *ngIf=\"currentCharacter\">\r\n        <div class=\"card-header\">\r\n            <div *ngIf=\"currentCharacter.name==''; then thenblock; else elseblock\">\r\n            </div>\r\n            <ng-template #thenblock>\r\n                <h3 class=\"card-title\" style=\"text-align: center\">Aliases-{{currentCharacter.aliases}}</h3>\r\n            </ng-template>\r\n            <ng-template #elseblock>\r\n                <h3 class=\"card-title\" style=\"text-align: center\">Name-{{currentCharacter.name}}</h3>\r\n            </ng-template>\r\n\r\n        </div>\r\n        <div class=\"card body\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"col-md-6\" *ngIf=\"currentCharacter.gender==='Male'\">\r\n                            <img class=imageCharacter src=\"../assets/images/male5.png\" />\r\n                        </div>\r\n                        <div class=\"col-md-6\" *ngIf=\"currentCharacter.gender==='Female'\">\r\n                            <img class=imageCharacter  style=\"width:300px;height:500px\" src=\"../assets/images/female1.png\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <table class=\"table table-responsive table-bordered\">\r\n                            <tbody>\r\n                                <tr *ngIf='currentCharacter.culture !== \"\" && currentCharacter.culture !== null && currentCharacter.culture !== undefined'>\r\n                                    <td>\r\n                                        Culture\r\n                                    </td>\r\n                                    <td>\r\n                                        {{currentCharacter.culture}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf='currentCharacter.playedBy.length >0 && currentCharacter.playedBy[0] !== \"\" '>\r\n                                    <td>\r\n                                        Played By\r\n                                    </td>\r\n                                    <td>\r\n                                        {{currentCharacter.playedBy}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf='currentCharacter.books.length >0 && currentCharacter.books[0] !== \"\" '>\r\n                                    <td>\r\n                                        Books\r\n                                    </td>\r\n                                    <td>{{currentCharacter.books}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf='currentCharacter.allegiances.length >0 && currentCharacter.allegiances[0] !== \"\" '>\r\n                                    <td>\r\n                                        Allegiances\r\n                                    </td>\r\n                                    <td>\r\n                                        {{currentCharacter.allegiances}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf='currentCharacter.tvSeries.length >0 && currentCharacter.tvSeries[0] !== \"\" '>\r\n                                    <td>\r\n                                        Tv Series\r\n                                    </td>\r\n                                    <td>\r\n                                        {{currentCharacter.tvSeries}}\r\n                                    </td>\r\n                                </tr>\r\n\r\n\r\n                            </tbody>\r\n                        </table>\r\n                        <br/>\r\n                        <div class=\"row\" style=\"text-align: center\">\r\n                            <div class=\"col-md-6\">\r\n                                <a [routerLink]=\"['/home']\">\r\n                                    <button class=\"btn btn-success btn-small\">Go Back</button>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/character-view/character-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/character-view/character-view.component.ts ***!
  \************************************************************/
/*! exports provided: CharacterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterViewComponent", function() { return CharacterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterViewComponent = /** @class */ (function () {
    function CharacterViewComponent(_route, router, blogHttpService) {
        this._route = _route;
        this.router = router;
        this.blogHttpService = blogHttpService;
        console.log('character constructor called');
    }
    CharacterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var characterId = this._route.snapshot.paramMap.get('characterId');
        this.blogHttpService.getCurrentCharacter(characterId).subscribe(function (data) {
            console.log(data);
            _this.currentCharacter = data;
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    CharacterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-characterdetails',
            template: __webpack_require__(/*! ./character-view.component.html */ "./src/app/character-view/character-view.component.html"),
            styles: [__webpack_require__(/*! ./character-view.component.css */ "./src/app/character-view/character-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _blog_http_service__WEBPACK_IMPORTED_MODULE_2__["BlogHttpService"]])
    ], CharacterViewComponent);
    return CharacterViewComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (allData, myfilter) {
        if (myfilter === undefined || myfilter === "all") {
            return allData;
        }
        return allData.filter(function (allData) {
            console.log(allData.name);
            console.log(myfilter);
            console.log(allData.name.toLowerCase().includes(myfilter.toLowerCase()));
            return allData.name.toLowerCase().includes(myfilter.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-responsive{\r\n    display: block;\r\n    height: auto;\r\n    max-width: 100%;\r\n    margin:0 auto;\r\n    padding-left: 40px;\r\n}\r\n.image{\r\n    padding-left: 50px;\r\n    width:420px;\r\n    height: 64px;\r\n}\r\n.imageCharacter{\r\n    height: 200px;\r\n    width: 130px;\r\n}\r\n.books{\r\n    background-color: red;\r\n    color:white;\r\n}\r\n.character{\r\n    background-color: blue;\r\n    color:white;\r\n}\r\n.house{\r\n    background-color: green;\r\n    color:white;\r\n}\r\n.imageBooks{\r\n    height: 150px;\r\n    width:200px;\r\n}\r\n.imageHouse{\r\n    height: 200px;\r\n    width:220px;\r\n}\r\n.btn-books{\r\n    background-color:red;\r\n    color:white;\r\n}\r\n.btn-character{\r\n    background-color:blue;\r\n    color:white;\r\n}\r\n.btn-house{\r\n    background-color:green;\r\n    color:white;\r\n}\r\n/* Xtra Small Devices */\r\n@media screen and (max-width:575px){\r\n    h1{\r\n        font-size:2rem;\r\n    }\r\n    h2,h3,h4,h5,h6{\r\n        font-size:0.9rem;\r\n    }\r\n    p{\r\n        font-size: 0.8rem;\r\n    }\r\n    .book-image{\r\n        width:80px;\r\n        height:110px;\r\n        padding-left:30px;\r\n    }\r\n    .char-image{\r\n        width:80px;\r\n        height:150px;\r\n    }\r\n   .text{\r\n       padding-left: 20px;\r\n       margin: 20px;\r\n   }\r\n \r\n    \r\n}\r\n/* Small Devices */\r\n@media screen and (min-width:576px) and (max-width:767px){\r\n    h1{\r\n        font-size:2.5rem;\r\n    }\r\n    h2,h3,h4,h5,h6{\r\n        font-size:1rem;\r\n    }\r\n    p{\r\n        font-size: 0.8rem;\r\n    }\r\n    .book-image{\r\n        width:70px;\r\n        height:100px;\r\n    }\r\n    .char-image{\r\n        width:120px;\r\n        height:130px;\r\n    }\r\n    .text{\r\n        padding-left: 20px;\r\n        margin: 20px;\r\n    }\r\n}\r\n/* Medium Devices */\r\n@media screen and (min-width:768px) and (max-width:991px){\r\n    h1{\r\n        font-size:2.6rem;\r\n    }\r\n    h2,h3,h4,h5,h6{\r\n        font-size:1.1rem;\r\n    }\r\n    p{\r\n        font-size: 0.9rem;\r\n    }\r\n    .book-image{\r\n        width:80px;\r\n        height:90px;\r\n    }\r\n    .char-image{\r\n        width:90px;\r\n        height:130px;\r\n    }\r\n    .text{\r\n        padding-left: 20px;\r\n        margin: 20px;\r\n    }\r\n}\r\n/* Large Devices */\r\n@media screen and (min-width:992px) and (max-width:1199px){ \r\n    h1{\r\n        font-size:3rem;\r\n    }\r\n    h2,h3,h4,h5,h6{\r\n        font-size:1.2rem;\r\n    }\r\n    p,i{\r\n        font-size: 1rem;\r\n    }\r\n    .book-image{\r\n        width:80px;\r\n        height:100px;\r\n    }\r\n    .char-image{\r\n        width:100px;\r\n        height:130px;\r\n    }\r\n\r\n}\r\n/* Xtra Large Devices */\r\n@media screen and (min-width:1200px){ \r\n    h1{\r\n        font-size: 3rem;\r\n    }\r\n    h2,h3,h4,h5,h6{\r\n        font-size:1.2rem;\r\n    }\r\n    p{\r\n        font-size: 1rem;\r\n    }\r\n    .book-image{\r\n        width:90px;\r\n        height:100px;\r\n        /* filter: grayscale(60%); */\r\n        -webkit-filter: contrast(100%);\r\n                filter: contrast(100%);\r\n    }\r\n    .char-image{\r\n        width:120px;\r\n        height:200px;\r\n        -webkit-filter: contrast(200%);\r\n                filter: contrast(200%);\r\n    }\r\n\r\n    \r\n}\r\na:hover{\r\n    text-decoration: underline;\r\n    color:white\r\n}\r\n.castle-image{\r\n    margin-bottom:-5px;\r\n    -webkit-filter: grayscale(60%);\r\n            filter: grayscale(60%);\r\n    -webkit-filter:contrast(200%);\r\n            filter:contrast(200%);\r\n}\r\n.heading{\r\n  background-color: white;\r\n  height:150px;\r\n}\r\n.body{\r\n  width:100%;\r\n}\r\n.crd{\r\n    background-color:black;\r\n    color:white;\r\n}\r\n.main{\r\n    /* width:90%;\r\n    padding:50px;\r\n    margin-right:auto;\r\n    margin-left:auto; */\r\n    margin-top:300px;\r\n    /* background-color:white; */\r\n    \r\n}\r\n.details{\r\n    width:90%;\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n    background-color: white;\r\n}\r\na{\r\n    text-decoration:none;\r\n    color:black;\r\n}\r\nh5{\r\n    margin:0;\r\n}\r\n.card-img-left{\r\n  background-color: white;\r\n   border:1px solid black;\r\n  height:auto;\r\n}\r\n.filter{\r\n    top:150px;\r\n    border-bottom:5px solid black;  \r\n}\r\n.filter-input{\r\n    border: 2px solid black;\r\n}\r\n.filter-button{\r\n    border-left:0px;\r\n    border-top: 2px solid black;\r\n    border-bottom: 2px solid black;\r\n    border-right: 2px solid black;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div>\r\n        <img class=\"img-responsive image\" src=\"../assets/images/got2.png\" />\r\n    </div>\r\n    <img class=\"img-responsive\" alt=\"got logo\" src=\"../assets/images/logo.png\" />\r\n\r\n    <div class=\"bg-white\">\r\n        <form action=\"\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"filter-input text-black form-control\" name=\"term\" [(ngModel)]=\"myfilter\" placeholder=\"Search for books....,characters...and  house name\">\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <br/>\r\n    <div class=\"card-header books\">\r\n        <h3>Books</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card card-primary col-md-6 col-sm-12\" *ngFor=\"let books of allBooks |filter:myfilter\">\r\n            <div class=\"card-header\" *ngIf=\"books.name==''\">\r\n                <h5 class=\"card-title\">No Name</h5>\r\n            </div>\r\n            <div class=\"card-header\" *ngIf=\"books.name!=''\">\r\n                <h5 class=\"card-title\">{{books.name}}</h5>\r\n            </div>\r\n            <div class=\"card body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12\">\r\n                        <img class=imageBooks src=\"../assets/images/book4.jpg\" />\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12 text\">\r\n                        <div class=\"row text\">\r\n                            <div>\r\n                                Authors :\r\n                            </div>\r\n                            <div>\r\n                                {{ books.authors}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text\">\r\n                            <div>\r\n                                Number of Pages :\r\n                            </div>\r\n                            <div>\r\n                                {{ books.numberOfPages}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text\">\r\n                            <div>\r\n                                Publisher :\r\n                            </div>\r\n                            <div>\r\n                                {{ books.publisher}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text\">\r\n                            <div>\r\n                                Country :\r\n                            </div>\r\n                            <div>\r\n                                {{ books.country}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text\">\r\n                            <div>\r\n                                Released on :\r\n                            </div>\r\n                            <div>\r\n                                {{ books.released|date}}\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                        <div class=\"row\" style=\"text-align: center\">\r\n                            <div class=\"col-md-6 col-sm-12\">\r\n                                <a [routerLink]=\"['/books',books.bookId]\">\r\n                                    <button class=\"btn btn-small books\">Read More</button>\r\n                                </a>\r\n                                <br>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <br/>\r\n\r\n    <!--Characters starts from here-->\r\n    <div class=\"card-header character\">\r\n        <h3>Characters</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card card-primary col-md-6 col-sm-12\" *ngFor=\"let characters of allCharacters |filter:myfilter\">\r\n            <div class=\"card-header\">\r\n                <div *ngIf=\"characters.name==''; then noNameBlock; else nameBlock\">\r\n                </div>\r\n                <ng-template class=\"card-header\" #noNameBlock>\r\n                    <h5 class=\"card-title\">No Name</h5>\r\n                </ng-template>\r\n                <ng-template class=\"card-header\" #nameBlock>\r\n                    <h5 class=\"card-title\">{{characters.name}}</h5>\r\n                </ng-template>\r\n            </div>\r\n            <div class=\"card body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-5\" *ngIf=\"characters.gender==='Male'\">\r\n                        <img class=imageCharacter src=\"../assets/images/male5.png\" />\r\n                    </div>\r\n                    <div class=\"col-md-5\" *ngIf=\"characters.gender==='Female'\">\r\n                        <img class=imageCharacter src=\"../assets/images/female1.png\" />\r\n                    </div>\r\n                    <div class=\"col-md-7 col-sm-12\">\r\n                        <div class=\"row text\">\r\n                            <div>\r\n                                Gender :\r\n                            </div>\r\n                            <div>{{characters.gender}}\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text\">\r\n                            <div>\r\n                                Culture :\r\n                            </div>\r\n                            <div *ngIf=\"characters.culture==''; then thenBlock; else elseBlock\">\r\n                            </div>\r\n                            <ng-template #thenBlock>\r\n                                <div>N/A</div>\r\n                            </ng-template>\r\n                            <ng-template #elseBlock>\r\n                                <div>{{characters.culture}}</div>\r\n                            </ng-template>\r\n                        </div>\r\n                        <div class=\"row text\">\r\n                            <div>Aliases : </div>\r\n                            <div>\r\n                                <b> {{characters.aliases}}</b>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                        <div class=\"row\" style=\"text-align:center\">\r\n                            <div class=\"col-md-6 col-sm-12\">\r\n                                <a [routerLink]=\"['/characters',characters.characterId]\">\r\n                                    <button class=\"btn btn-small character\">Read More</button>\r\n                                </a>\r\n                                <br>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--End of character-->\r\n\r\n    <br/>\r\n    <br/>\r\n    <!--Start of House-->\r\n    <div class=\"card-header house\">\r\n        <h3>House</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card card-primary col-md-6 col-sm-12\" *ngFor=\"let house of allHouses |filter:myfilter\">\r\n            <div class=\"card-header\">\r\n                <h5 class=\"card-title\">{{house.name}}</h5>\r\n            </div>\r\n            <div class=\"card body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-6\">\r\n                        <img class=imageHouse src=\"../assets/images/house2.jpg\" />\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-6\">\r\n                        <div class=\"row text\">\r\n                            Region\r\n                            <div>\r\n                                : {{house.region}}\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                        <div class=\"row\" style=\"text-align: center\">\r\n                            <div class=\"col-md-6 col-sm-12\">\r\n                                <a [routerLink]=\"['/house',house.houseId]\">\r\n                                    <button class=\"btn btn-small house\">Read More</button>\r\n                                </a>\r\n                                <br>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--End of House-->\r\n</div>\r\n<!--End of Container-->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//this is a by default statement 


//decorator
var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogHttpService) {
        this.blogHttpService = blogHttpService;
        this.allData = [];
        this.allBooks = [];
        this.allCharacters = [];
        this.allHouses = [];
        console.log("Home Component Constructor is called");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home Component inIt called");
        this.blogHttpService.getAllBooks()
            .subscribe(function (data) {
            console.log(data);
            _this.allBooks = data;
            for (var i = 0; i < data.length; i++) {
                _this.allBooks[i].bookId = i + 1;
            }
            // Sorting the data alpahbetically.
            _this.allBooks.sort(function (name1, name2) {
                if (name1.name < name2.name) {
                    return -1;
                }
                else if (name1.name > name2.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }, function (error) {
            console.log("Some Error occured");
            console.log(error.errorMessage);
        });
        this.blogHttpService.getAllCharacters()
            .subscribe(function (data) {
            console.log(data);
            _this.allCharacters = data;
            for (var j = 0; j < data.length; j++) {
                _this.allCharacters[j].characterId = j + 1;
            }
            _this.allCharacters.sort(function (name1, name2) {
                if (name1.name < name2.name) {
                    return -1;
                }
                else if (name1.name > name2.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }, function (error) {
            console.log("Some Error occured");
            console.log(error.errorMessage);
        });
        this.blogHttpService.getAllHouses()
            .subscribe(function (data) {
            console.log(data);
            _this.allHouses = data;
            for (var k = 0; k < data.length; k++) {
                _this.allHouses[k].houseId = k + 1;
            }
            _this.allHouses.sort(function (name1, name2) {
                if (name1.name < name2.name) {
                    return -1;
                }
                else if (name1.name > name2.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }, function (error) {
            console.log("Some Error occured");
            console.log(error.errorMessage);
        });
        this.allData = this.allBooks.concat(this.allCharacters, this.allHouses);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log(" Home Component Destroy");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
        //a simple class
        ,
        __metadata("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_1__["BlogHttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house-view/house-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/house-view/house-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageHouse{\r\n    height: 300px;\r\n    width: 280px;\r\n}\r\n/* Xtra Small Devices */\r\n@media screen and (max-width:575px){\r\n    h1{\r\n        font-size:1.3rem;\r\n    }\r\n    p{\r\n        font-size:1rem;\r\n    }\r\n    \r\n    .image-title{\r\n       width:250px;\r\n       height: 50px;\r\n   }\r\n}\r\n/* Small Devices */\r\n@media screen and (min-width:576px) and (max-width:767px){\r\n    h1{\r\n        font-size:1.4rem;\r\n    }\r\n    p{\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .image-title{\r\n       width:300px;\r\n       height: 64px;\r\n   }\r\n}\r\n/* Medium Devices */\r\n@media screen and (min-width:768px) and (max-width:991px){\r\n    h1{\r\n        font-size:1.5rem;\r\n    }\r\n    p{\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n    .image-title{\r\n       width:320px;\r\n       height: 64px;\r\n   }\r\n}\r\n/* Large Devices */\r\n@media screen and (min-width:992px) and (max-width:1199px){ \r\n    h1{\r\n        font-size:1.8rem;\r\n    }\r\n    p,i{\r\n        font-size: 1.1rem;\r\n    }\r\n    .image-title{\r\n       width:342px;\r\n       height: 64px;\r\n   }\r\n}\r\n/* Xtra Large Devices */\r\n@media screen and (min-width:1200px){ \r\n    h1{\r\n        font-size: 2rem;\r\n    }\r\n    p{\r\n        font-size: 1.2rem;\r\n    }\r\n    .image-title{\r\n       width:342px;\r\n       height: 64px;\r\n   }\r\n\r\n}\r\n.heading{\r\n  background-color: white;\r\n  height:80px;\r\n  border-bottom:5px solid black;\r\n}\r\n.heads{\r\n    background-color:black;\r\n}\r\n.body{\r\n    margin-top:65px;\r\n    width:90%;\r\n    height:100%;\r\n    background-color: white;\r\n}\r\n.word-break{\r\n    overflow-wrap: break-word;\r\n}"

/***/ }),

/***/ "./src/app/house-view/house-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/house-view/house-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card card-primary\" *ngIf=\"currentHouse\">\r\n        <div class=\"card-header\">\r\n            <h3 class=\"card-title\" style=\"text-align: center\">{{currentHouse.name}}</h3>\r\n        </div>    \r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <img class=imageHouse src=\"../assets/images/house2.jpg\" />\r\n                        <br>\r\n                        <br>\r\n                        <div class=\"row\" style=\"padding-left: 20px\">\r\n                            <a [routerLink]=\"['/home']\">\r\n                                <button class=\"btn btn-success btn-small\">Go Back</button>\r\n                            </a>\r\n                        </div>\r\n                        <br/>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <table class=\"table table-responsive table-bordered\">\r\n                            <tr *ngIf='currentHouse.region !== \"\" && currentHouse.region !== null && currentHouse.region !== undefined'>\r\n                                <td>\r\n                                    <b>Region :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.region}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.coatOfArms !== \"\" && currentHouse.coatOfArms !== null && currentHouse.coatOfArms !== undefined'>\r\n                                <td>\r\n                                    <b>Coat of Arms :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.coatOfArms}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.words !== \"\" && currentHouse.words !== null && currentHouse.words !== undefined'>\r\n                                <td>\r\n                                    <b>Words :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.words}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.titles.length >0 && currentHouse.titles[0] !== \"\" '>\r\n                                <td>\r\n                                    <b>Titles :</b>\r\n                                </td>\r\n                                <td *ngFor=\"let titles of currentHouse.titles;let first=first;let last=last\">{{titles}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.seats !== \"\" && currentHouse.seats !== null && currentHouse.seats !== undefined'>\r\n                                <td>\r\n                                    <b>Seats :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.seats}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.currentLord !== \"\" && currentHouse.currentLord !== null && currentHouse.currentLord !== undefined'>\r\n                                <td>\r\n                                    <b>Current lord :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.currentLord}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.overload !== \"\" && currentHouse.overload !== null && currentHouse.overload !== undefined'>\r\n                                <td>\r\n                                    <b>Overload :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.overload}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.heir !== \"\" && currentHouse.heir !== null && currentHouse.heir !== undefined'>\r\n                                <td>\r\n                                    <b>Heir :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.heir}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.founded !== \"\" && currentHouse.founded !== null && currentHouse.founded !== undefined'>\r\n                                <td>\r\n                                    <b>Founded :</b>\r\n                                </td>\r\n                                <td>{{currentHouse.founded}}</td>\r\n                            </tr>\r\n                            <tr *ngIf='currentHouse.founder !== \"\" && currentHouse.founder !== null && currentHouse.founder !== undefined'>\r\n                                <td>\r\n                                    <b>Founder :</b>\r\n                                </td>\r\n                                <td class=\"wordWrap\">{{currentHouse.founder}}</td>\r\n                            </tr>\r\n                            <!--<tr *ngIf='currentHouse.swornMembers.length >0 && currentHouse.swornMembers[0] !== \"\" '>\r\n                                <td>\r\n                                    <b>Sworn Members :</b>\r\n                                </td>\r\n                                <th rowspan=\"2\" *ngFor=\"let swornMembers of currentHouse.swornMembers;let first=first;let last=last\">\r\n                                    <p style=\"word-wrap: break-word\">{{swornMembers}}{{last ? '' : ','}}</p>\r\n                                </th>\r\n                            </tr>-->\r\n                        \r\n                        </table>\r\n                        <br/>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/house-view/house-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/house-view/house-view.component.ts ***!
  \****************************************************/
/*! exports provided: HouseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseViewComponent", function() { return HouseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HouseViewComponent = /** @class */ (function () {
    function HouseViewComponent(_route, router, blogHttpService) {
        this._route = _route;
        this.router = router;
        this.blogHttpService = blogHttpService;
        console.log('character constructor called');
    }
    HouseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var houseId = this._route.snapshot.paramMap.get('houseId');
        this.blogHttpService.getCurrentHouse(houseId).subscribe(function (data) {
            console.log(data);
            _this.currentHouse = data;
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    HouseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./house-view.component.html */ "./src/app/house-view/house-view.component.html"),
            styles: [__webpack_require__(/*! ./house-view.component.css */ "./src/app/house-view/house-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _blog_http_service__WEBPACK_IMPORTED_MODULE_2__["BlogHttpService"]])
    ], HouseViewComponent);
    return HouseViewComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Xtra Small Devices */\n@media screen and (max-width:575px){\n    h1{\n        font-size:1.8rem;\n    }\n    h2,h3,h4,h5,h6{\n        font-size:0.9rem;\n    }\n    p{\n        font-size: 0.8rem;\n    }\n    .image-title{\n       width:250px;\n       height: 50px;\n   }\n\n    \n}\n/* Small Devices */\n@media screen and (min-width:576px) and (max-width:767px){\n    h1{\n        font-size:2.5rem;\n    }\n    h2,h3,h4,h5,h6{\n        font-size:1rem;\n    }\n    p{\n        font-size: 0.8rem;\n    }\n    .image-title{\n       width:300px;\n       height: 64px;\n   }\n}\n/* Medium Devices */\n@media screen and (min-width:768px) and (max-width:991px){\n    h1{\n        font-size:2.6rem;\n    }\n    h2,h3,h4,h5,h6{\n        font-size:1.1rem;\n    }\n    p{\n        font-size: 0.9rem;\n    }\n    .image-title{\n       width:320px;\n       height: 64px;\n   }\n}\n/* Large Devices */\n@media screen and (min-width:992px) and (max-width:1199px){ \n    h1{\n        font-size:3rem;\n    }\n    h2,h3,h4,h5,h6{\n        font-size:1.2rem;\n    }\n    p,i{\n        font-size: 1rem;\n    }\n    .image-title{\n       width:342px;\n       height: 64px;\n   }\n}\n/* Xtra Large Devices */\n@media screen and (min-width:1200px){ \n    h1{\n        font-size: 3rem;\n    }\n    h2,h3,h4,h5,h6{\n        font-size:1.2rem;\n    }\n    p{\n        font-size: 1.1rem;\n    }\n    .image-title{\n       width:342px;\n       height: 64px;\n       \n   }\n   \n    \n}\n.heading{\n  background-color: white;\n  height:80px;\n  border-bottom:5px solid black;\n}\n.body{\n    background-color: white;\n    margin-top:100px;\n    height:400px;\n}\n.word-break{\n    overflow-wrap: break-word;\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav fixed-top heading\">\n  <div class=\"container d-flex justify-content-center align-items-center\">\n    <a [routerLink]=\"['/home']\">\n      <img src=\"assets/images/got1.jpg\" class=\"image-title\" alt=\"\">\n    </a>\n  </div>\n</nav>\n\n<div class=\"container body d-flex justify-content-center align-items-center\">\n  <h1>Page 404 Not Found</h1>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\My-Proj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map