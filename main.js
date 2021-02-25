(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_checkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/checkers.service */ "./src/app/services/checkers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/states */ "./src/assets/states.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");


















function AppComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const gameId_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gameId_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameId_r6);
} }
function AppComponent_ng_container_7_app_board_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-board", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function AppComponent_ng_container_7_app_board_13_Template_app_board_refresh_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.playedMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("board", ctx_r7.state.board == null ? null : ctx_r7.state.board.squares)("currentPlayerIndex", ctx_r7.state.currentPlayerIndex)("playerIndex", ctx_r7.playeridx);
} }
function AppComponent_ng_container_7_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function AppComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_7_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextMove(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.nextMove(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_ng_container_7_app_board_13_Template, 1, 3, "app-board", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last state change:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "chip: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Last Move:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_ng_container_7_div_33_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Removed chips:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Client player: ", ctx_r1.state == null ? null : ctx_r1.state.currentPlayer == null ? null : ctx_r1.state.currentPlayer.nickname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time ", ctx_r1.version == null ? null : ctx_r1.version.turnClock, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Player index: ", ctx_r1.server.playerIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current index: ", ctx_r1.state == null ? null : ctx_r1.state.currentplayerindex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.state.version, " Next Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.state.version, " Prev Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Playerid: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, ctx_r1.state.laststatechange == null ? null : ctx_r1.state.laststatechange.playerid), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, ctx_r1.state.laststatechange == null ? null : ctx_r1.state.laststatechange.chipmoved == null ? null : ctx_r1.state.laststatechange.chipmoved.chip));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Old Position: [x: ", ctx_r1.state.laststatechange.chipmoved == null ? null : ctx_r1.state.laststatechange.chipmoved.oldposition == null ? null : ctx_r1.state.laststatechange.chipmoved.oldposition.x, " , y: ", ctx_r1.state.laststatechange.chipmoved == null ? null : ctx_r1.state.laststatechange.chipmoved.oldposition == null ? null : ctx_r1.state.laststatechange.chipmoved.oldposition.y, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("New Position: [x: ", ctx_r1.state.laststatechange.chipmoved == null ? null : ctx_r1.state.laststatechange.chipmoved.newposition == null ? null : ctx_r1.state.laststatechange.chipmoved.newposition.x, " , y: ", ctx_r1.state.laststatechange.chipmoved == null ? null : ctx_r1.state.laststatechange.chipmoved.newposition == null ? null : ctx_r1.state.laststatechange.chipmoved.newposition.y, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.state.laststatechange.chipmoved == null ? null : ctx_r1.state.laststatechange.chipmoved.lastmove == null ? null : ctx_r1.state.laststatechange.chipmoved.lastmove.length) > 1)("ngIfThen", _r2)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 21, ctx_r1.state.laststatechange == null ? null : ctx_r1.state.laststatechange.removedchips));
} }
function AppComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" position number ", i_r16 + 1, ": [x: ", move_r15.x, " , y: ", move_r15.y, "]");
} }
function AppComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_8_div_0_Template, 3, 3, "div", 3);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.state.laststatechange.chipmoved == null ? null : ctx_r3.state.laststatechange.chipmoved.lastmove);
} }
function AppComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" position: [x: ", ctx_r5.state.laststatechange.chipmoved == null ? null : ctx_r5.state.laststatechange.chipmoved.lastmove[0] == null ? null : ctx_r5.state.laststatechange.chipmoved.lastmove[0].x, " , y: ", ctx_r5.state.laststatechange.chipmoved == null ? null : ctx_r5.state.laststatechange.chipmoved.lastmove[0] == null ? null : ctx_r5.state.laststatechange.chipmoved.lastmove[0].y, "]");
} }
class AppComponent {
    constructor(server, snackBar) {
        this.server = server;
        this.snackBar = snackBar;
        this.checked = true;
        this.title = 'checkers-client';
        this.gameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Game_Demo_1');
        this.serverUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.playeridx = 1;
        this.localServerFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
        this.selectGame = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.logFile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.stepNum = 0;
    }
    ngOnInit() {
        this.refreshView();
        this.localServerFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((val) => this.localServer(val))).subscribe();
        this.serverUrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.localServer(this.checked))).subscribe();
        this.selectGame.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((a) => this.selectedGame = a), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(a => this.refreshView())).subscribe();
        this.logFile.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => a.split('\n')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => a.map(b => b.split(' | '))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => a.filter(b => b.length >= 6 && b.length <= 7)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => a.filter(b => b[2] === 'INFO')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => a.filter(b => b[4].includes('state:'))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => a.map(b => ({
            time: new Date(b[0]),
            state: Object(_assets_states__WEBPACK_IMPORTED_MODULE_6__["keysToLowerCase"])(JSON.parse(b[4].split('state: ').join('')))
        }))), 
        // map(arr => arr.filter((v, i, a) => a.findIndex(t => (t.state.version === v.state.version)) === i)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(arr => arr.map(b => {
            const state = b.state;
            b.time.setTime(b.time.getTime() + (2 * 60 * 60 * 1000));
            state.timelogged = b.time;
            return b.state;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(states => Object(_assets_states__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(states, 'id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(groupedStates => this.selectableGames = Object.keys(groupedStates)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(groupedStates => Object.keys(groupedStates).forEach(key => groupedStates[key] = groupedStates[key].filter((x, xi) => !groupedStates[key].slice(xi + 1).some(y => y['version'] === x['version'])))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.stepNum = 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(a => this.statesByGroup = a), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.refreshView()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(a => console.log(a))).subscribe();
    }
    connectToGame() {
        this.server.connectToGame(this.gameFormControl.value, 'Player_Demo_' + this.playeridx)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.server.version()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((obj) => obj), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((versionObj) => {
            this.version = versionObj;
            const version = versionObj.version;
            if (_services_checkers_service__WEBPACK_IMPORTED_MODULE_1__["CheckersService"].currentVersion !== version) {
                _services_checkers_service__WEBPACK_IMPORTED_MODULE_1__["CheckersService"].currentVersion = version;
                return this.refreshViewObservable();
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }
        }))))
            .subscribe();
    }
    refreshViewObservable() {
        if (!this.statesByGroup || !this.selectedGame) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.statesByGroup[this.selectedGame][this.stepNum]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.state = res;
            const arr = [...new Array(14)].map(() => [...new Array(14)]);
            this.state.board.squares.flat().map((item) => {
                if (item.chip) {
                    const player = this.state.players.find(pl => !!(Object.values(pl.chips).find((chip) => chip['Id'] === item.chip.id)));
                    arr[14 - item.position.y][item.position.x - 1] = Object.assign(Object.assign({}, item), { playerId: player === null || player === void 0 ? void 0 : player.index });
                }
                else {
                    arr[14 - item.position.y][item.position.x - 1] = item;
                }
            });
            this.state.board.squares = arr;
        }));
        // return this.server.connectToGame(this.gameFormControl.value, 'Player_Demo_' + this.playeridx).pipe(
        //   switchMap(() => this.server.state().pipe(
        //     tap((res) => {
        //       this.state = res;
        //       const arr = [...new Array(14)].map(() => [...new Array(14)]);
        //       this.state.board.squares.map((item) => {
        //         if (item.chip) {
        //           const player = this.state.players.find(pl => !!(Object.values(pl.chips).find((chip) => chip.id === item.chip.id)));
        //           arr[14 - item.position.y][item.position.x - 1] = {
        //             ...item,
        //             playerId: player.index
        //           };
        //         } else {
        //           arr[14 - item.position.y][item.position.x - 1] = item;
        //         }
        //       });
        //       this.state.board.squares = arr as [];
        //     })
        //   ))
        // );
    }
    refreshView() {
        this.refreshViewObservable().subscribe();
    }
    nextPlayer() {
        if (this.playeridx + 1 > 4) {
            this.playeridx = 1;
        }
        else {
            this.playeridx++;
        }
        this.refreshView();
    }
    playedMove() {
        this.nextPlayer();
    }
    localServer(val) {
        this.checked = val;
        this.server.serverUrl = this.checked ? _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl : this.serverUrl.value;
    }
    nextMove(rev) {
        const selectedState = this.statesByGroup[this.selectedGame];
        console.log(selectedState);
        if ((!rev && (this.stepNum + 1 >= selectedState.length)) || (rev && (this.stepNum - 1 < 0))) {
            if ((!rev && (this.stepNum + 1 >= selectedState.length))) {
                this.snackBar.open('Reached end', '', { duration: 1000 });
            }
            else {
                this.snackBar.open('Reached start', '', { duration: 1000 });
            }
            return;
        }
        this.stepNum += rev ? -1 : 1;
        this.refreshView();
    }
    getCurrentPlayer(state) {
        return state === null || state === void 0 ? void 0 : state.players.find(a => Number(a.index) === Number(state.currentplayerindex));
    }
    convertToDate(timeA) {
        return new Date(timeA);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_checkers_service__WEBPACK_IMPORTED_MODULE_1__["CheckersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 4, consts: [[2, "display", "flex", "flex-direction", "column"], ["placeholder", "insert log here and scroll down", "type", "text", "matInput", "", 2, "height", "500px", 3, "formControl"], [3, "formControl"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["moreThanOneMove", ""], ["oneMove", ""], [3, "value"], ["mat-raised-button", "", 3, "click"], [3, "board", "currentPlayerIndex", "playerIndex", "refresh", 4, "ngIf"], [1, "game-details"], [1, "last-move-list"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "board", "currentPlayerIndex", "playerIndex", "refresh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_container_6_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_container_7_Template, 39, 23, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ng_template_8_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_template_10_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.logFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.selectGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectableGames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.state);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _board_board_component__WEBPACK_IMPORTED_MODULE_14__["BoardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"]], styles: [".game-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.last-move-list[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.last-move-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtZGV0YWlsc1xyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBhbGlnbi1pdGVtczogc3RhcnRcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICBnYXA6IDAuM3JlbVxyXG5cclxuaDRcclxuICBtYXJnaW46IDBcclxuXHJcbi5sYXN0LW1vdmUtbGlzdFxyXG4gIG1hcmdpbi10b3A6IDFyZW1cclxuICBkaXZcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _services_checkers_service__WEBPACK_IMPORTED_MODULE_1__["CheckersService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_clienthttp_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/clienthttp.interceptor */ "./src/app/services/clienthttp.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _board_square_square_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./board/square/square.component */ "./src/app/board/square/square.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_clienthttp_interceptor__WEBPACK_IMPORTED_MODULE_4__["ClientHttpInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"],
        _board_square_square_component__WEBPACK_IMPORTED_MODULE_11__["SquareComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _board_board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"],
                    _board_square_square_component__WEBPACK_IMPORTED_MODULE_11__["SquareComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_clienthttp_interceptor__WEBPACK_IMPORTED_MODULE_4__["ClientHttpInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: GAME_STATE, BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_STATE", function() { return GAME_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_checkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/checkers.service */ "./src/app/services/checkers.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _square_square_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./square/square.component */ "./src/app/board/square/square.component.ts");






const _c0 = function (a0) { return { "last-row": a0 }; };
function BoardComponent_div_1_app_square_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-square", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function BoardComponent_div_1_app_square_1_Template_app_square_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const square_r4 = ctx.$implicit;
    const x_r5 = ctx.index;
    const y_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, 14 - y_r2 == 1))("square", square_r4)("X", x_r5)("Y", y_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("column-number", x_r5 + 1)("row-number", x_r5 == 0 ? 14 - y_r2 : "");
} }
function BoardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_1_app_square_1_Template, 1, 8, "app-square", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", col_r1);
} }
var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["IDLE"] = 0] = "IDLE";
    GAME_STATE[GAME_STATE["MOVE"] = 1] = "MOVE";
})(GAME_STATE || (GAME_STATE = {}));
class BoardComponent {
    constructor(service, snackbar) {
        this.service = service;
        this.snackbar = snackbar;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = GAME_STATE.IDLE;
    }
    ngOnInit() {
    }
    selected($event) {
        const x = $event.x - 1;
        const y = $event.y - 1;
        const sq = this.board[x][y];
        switch (this.state) {
            case GAME_STATE.IDLE:
                if (!!sq) {
                    this.selectedChip = $event.id;
                    this.state = GAME_STATE.MOVE;
                }
                break;
            case GAME_STATE.MOVE:
                this.service.move({
                    chipId: this.selectedChip,
                    nextPositions: [{ x: x + 1, y: y + 1 }]
                }).subscribe((res) => {
                    if (!res) {
                        this.snackbar.open('Invalid move', '', { verticalPosition: 'top', horizontalPosition: 'center', duration: 3000 });
                    }
                    this.refresh.emit(true);
                });
                this.state = GAME_STATE.IDLE;
                break;
        }
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_checkers_service__WEBPACK_IMPORTED_MODULE_1__["CheckersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], inputs: { board: "board", currentPlayerIndex: "currentPlayerIndex", playerIndex: "playerIndex" }, outputs: { refresh: "refresh" }, decls: 2, vars: 1, consts: [[1, "board"], ["style", "margin: 0; height: 1rem;", 4, "ngFor", "ngForOf"], [2, "margin", "0", "height", "1rem"], [3, "ngClass", "square", "X", "Y", "selected", 4, "ngFor", "ngForOf"], [3, "ngClass", "square", "X", "Y", "selected"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.board);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _square_square_component__WEBPACK_IMPORTED_MODULE_4__["SquareComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["div.board[_ngcontent-%COMP%] {\n  padding: 2rem;\n  height: 16rem;\n  width: 16rem;\n  background: greenyellow;\n}\n\napp-square[_ngcontent-%COMP%]:first-of-type:after {\n  content: attr(row-number);\n  position: absolute;\n  transform: translate(-2.5rem);\n  background: #91ffeb;\n  width: 1.1rem;\n  height: 1rem;\n  border: 1px solid black;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 1rem;\n  font-family: monospace;\n}\n\napp-square.last-row[_ngcontent-%COMP%]:before {\n  content: attr(column-number);\n  position: absolute;\n  transform: translate(0px, 20px);\n  background: #d684bd;\n  color: white;\n  width: 0.9rem;\n  height: 1rem;\n  border: 1px solid black;\n  text-align: center;\n  line-height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQUZBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJvYXJkXHJcbiAgcGFkZGluZzogMnJlbVxyXG4gIGhlaWdodDogMTZyZW1cclxuICB3aWR0aDogMTZyZW1cclxuICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvd1xyXG5hcHAtc3F1YXJlOmZpcnN0LW9mLXR5cGU6YWZ0ZXJcclxuICBjb250ZW50OiBhdHRyKHJvdy1udW1iZXIpXHJcbiAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIuNXJlbSlcclxuICBiYWNrZ3JvdW5kOiAjOTFmZmViXHJcbiAgd2lkdGg6IDEuMXJlbVxyXG4gIGhlaWdodDogMXJlbVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgbGluZS1oZWlnaHQ6IDFyZW1cclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlXHJcbmFwcC1zcXVhcmUubGFzdC1yb3c6YmVmb3JlXHJcbiAgY29udGVudDogYXR0cihjb2x1bW4tbnVtYmVyKVxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMjBweClcclxuICBiYWNrZ3JvdW5kOiAjZDY4NGJkXHJcbiAgY29sb3I6IHdoaXRlXHJcbiAgd2lkdGg6IDAuOXJlbVxyXG4gIGhlaWdodDogMXJlbVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgbGluZS1oZWlnaHQ6IDFyZW1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.sass']
            }]
    }], function () { return [{ type: _services_checkers_service__WEBPACK_IMPORTED_MODULE_1__["CheckersService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, { board: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentPlayerIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/board/square/square.component.ts":
/*!**************************************************!*\
  !*** ./src/app/board/square/square.component.ts ***!
  \**************************************************/
/*! exports provided: SquareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareComponent", function() { return SquareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "black": a0, "white": a1, "chip": a2, "clicked": a3, "isFirstPlayer": a4, "isSecondPlayer": a5, "isThirdPlayer": a6, "isFourthPlayer": a7 }; };
class SquareComponent {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.isWhite = !this.square['isvalid'];
        this.isBlack = this.square['isvalid'];
        this.hasChip = !!this.square.chip;
        this.isFirstPlayer = this.square.playerId === 0;
        this.isSecondPlayer = this.square.playerId === 1;
        this.isThirdPlayer = this.square.playerId === 2;
        this.isFourthPlayer = this.square.playerId === 3;
    }
    click() {
        this.clicked = !this.clicked;
        this.selected.emit({
            hasChip: this.hasChip,
            id: this.hasChip ? this.square.chip.id : null,
            isSelected: this.clicked,
            x: this.square.position.x,
            y: this.square.position.y
        });
    }
}
SquareComponent.ɵfac = function SquareComponent_Factory(t) { return new (t || SquareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SquareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SquareComponent, selectors: [["app-square"]], inputs: { Y: "Y", X: "X", playerIdx: "playerIdx", square: "square" }, outputs: { selected: "selected" }, decls: 1, vars: 13, consts: [[1, "square", 3, "matTooltip", "ngClass", "click"]], template: function SquareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SquareComponent_Template_div_click_0_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("matTooltip", "id:", ctx.square.chip == null ? null : ctx.square.chip.id, ", x:", ctx.square.position.x, ", y:", ctx.square.position.y, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction8"](4, _c0, ctx.isBlack, ctx.isWhite, ctx.hasChip, ctx.clicked, ctx.isFirstPlayer, ctx.isSecondPlayer, ctx.isThirdPlayer, ctx.isFourthPlayer));
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["div.square[_ngcontent-%COMP%] {\n  display: inline-block;\n  flex-direction: row;\n  width: 1rem;\n  height: 1rem;\n  box-shadow: black;\n  border: 1px solid black;\n}\ndiv.square.black[_ngcontent-%COMP%] {\n  background: #333333ff;\n}\ndiv.square.white[_ngcontent-%COMP%] {\n  background: white;\n}\ndiv.square.chip[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 0.9rem;\n  width: 0.9rem;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transform: translate(1px, -2.3px);\n}\ndiv.square.chip.isFirstPlayer[_ngcontent-%COMP%]::after {\n  background-color: #3764a4;\n}\ndiv.square.chip.isSecondPlayer[_ngcontent-%COMP%]::after {\n  background-color: #81acc7;\n}\ndiv.square.chip.isThirdPlayer[_ngcontent-%COMP%]::after {\n  background-color: #a8dadc;\n}\ndiv.square.chip.isFourthPlayer[_ngcontent-%COMP%]::after {\n  background-color: #e63946;\n}\ndiv.square.chip[_ngcontent-%COMP%]:hover::after {\n  background-color: darkblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvc3F1YXJlL3NxdWFyZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7QUFFSjtBQURFO0VBQ0UsaUJBQUE7QUFHSjtBQUZFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFJSjtBQUhFO0VBQ0UseUJBQUE7QUFLSjtBQUpFO0VBQ0UseUJBQUE7QUFNSjtBQUxFO0VBQ0UseUJBQUE7QUFPSjtBQU5FO0VBQ0UseUJBQUE7QUFRSjtBQVBFO0VBQ0UsMEJBQUE7QUFTSiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL3NxdWFyZS9zcXVhcmUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuc3F1YXJlXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gIHdpZHRoOiAxcmVtXHJcbiAgaGVpZ2h0OiAxcmVtXHJcbiAgYm94LXNoYWRvdzogYmxhY2tcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFja1xyXG4gICYuYmxhY2tcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzNmZlxyXG4gICYud2hpdGVcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlXHJcbiAgJi5jaGlwOjphZnRlclxyXG4gICAgY29udGVudDogJydcclxuICAgIGhlaWdodDogLjlyZW1cclxuICAgIHdpZHRoOiAuOXJlbVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYlxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTIuM3B4KVxyXG4gICYuY2hpcC5pc0ZpcnN0UGxheWVyOjphZnRlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMWQzNTU3LCAyMCUpXHJcbiAgJi5jaGlwLmlzU2Vjb25kUGxheWVyOjphZnRlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjNDU3YjlkLCAyMCUpXHJcbiAgJi5jaGlwLmlzVGhpcmRQbGF5ZXI6OmFmdGVyXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThkYWRjXHJcbiAgJi5jaGlwLmlzRm91cnRoUGxheWVyOjphZnRlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2Mzk0NlxyXG4gICYuY2hpcDpob3Zlcjo6YWZ0ZXJcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SquareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-square',
                templateUrl: './square.component.html',
                styleUrls: ['./square.component.sass']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, { Y: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], X: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerIdx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], square: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/checkers.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkers.service.ts ***!
  \**********************************************/
/*! exports provided: AppResponse, CheckersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppResponse", function() { return AppResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckersService", function() { return CheckersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class AppResponse {
}
class CheckersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl;
    }
    connectToGame(gameId, playerId) {
        return this.post('Game/Connect', { gameId, playerId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.playerIndex = res.playerIndex;
            this.connectionHeaders = {
                refreshToken: res.refreshToken,
                authorization: 'Bearer ' + res.accessToken
            };
        }));
    }
    move(move) {
        return this.post('Game/Move', move);
    }
    version() {
        return this.get('Game/Version');
    }
    state(stepNum) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]); //states[stepNum])// this.get<IState>('Game/State');
    }
    post(url, body, options) {
        return this.httpClient.post(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data));
    }
    get(url, options) {
        return this.httpClient.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data));
    }
    delete(url, options) {
        return this.httpClient.delete(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data));
    }
    put(url, body, options) {
        return this.httpClient.put(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data));
    }
}
CheckersService.currentVersion = 0;
CheckersService.ɵfac = function CheckersService_Factory(t) { return new (t || CheckersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CheckersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckersService, factory: CheckersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/clienthttp.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/services/clienthttp.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ClientHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHttpInterceptor", function() { return ClientHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _checkers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkers.service */ "./src/app/services/checkers.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");






class ClientHttpInterceptor {
    constructor(checkers, snackbar) {
        this.checkers = checkers;
        this.snackbar = snackbar;
    }
    intercept(request, next) {
        let headers = request.headers;
        if (this.checkers.connectionHeaders) {
            for (const [key, val] of Object.entries(this.checkers.connectionHeaders)) {
                headers = headers.append(key, val);
            }
        }
        const req = request.clone({ url: this.checkers.serverUrl + '/' + request.url, headers });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.snackbar.open(err.message, '', { duration: 1000, horizontalPosition: 'center', verticalPosition: 'top' });
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        }));
    }
}
ClientHttpInterceptor.ɵfac = function ClientHttpInterceptor_Factory(t) { return new (t || ClientHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_checkers_service__WEBPACK_IMPORTED_MODULE_3__["CheckersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
ClientHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientHttpInterceptor, factory: ClientHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _checkers_service__WEBPACK_IMPORTED_MODULE_3__["CheckersService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/states.ts":
/*!******************************!*\
  !*** ./src/assets/states.ts ***!
  \******************************/
/*! exports provided: keysToLowerCase, groupBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keysToLowerCase", function() { return keysToLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
const keysToLowerCase = (obj) => {
    if (!obj) {
        return obj;
    }
    if (obj instanceof Array) {
        // tslint:disable-next-line:forin
        for (let i in obj) {
            obj[i] = keysToLowerCase(obj[i]);
        }
    }
    if ((typeof (obj) === 'string' || typeof (obj) === 'number' || typeof (obj) === 'boolean')) {
        return obj;
    }
    let keys = Object.keys(obj);
    let n = keys.length;
    let lowKey;
    while (n--) {
        let key = keys[n];
        if (key === (lowKey = key.toLowerCase())) {
            continue;
        }
        obj[lowKey] = keysToLowerCase(obj[key]);
        delete obj[key];
    }
    return (obj);
};
const groupBy = (xs, key) => {
    return Array.from(xs).reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};


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
const environment = {
    production: false,
    serverUrl: 'https://localhost:44303'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\Checkers\checkers-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map