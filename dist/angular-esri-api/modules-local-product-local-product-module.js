(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-local-product-local-product-module"],{

/***/ "5fQp":
/*!******************************************************************************************************!*\
  !*** ./src/app/+modules/local-product/components/local-product-list/local-product-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LocalProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalProductListComponent", function() { return LocalProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/app-urls.config */ "Don0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_modals_google_map_dialog_google_map_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/modals/google-map-dialog/google-map-dialog.component */ "osYl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/map-sidebar/map-sidebar.service */ "VMWZ");
/* harmony import */ var src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/to-detail-page-service/to-detail-page.service */ "JwAH");
/* harmony import */ var src_app_services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/paginator-info-to-search/paginator-info-to-search.service */ "tx6e");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../pipes/paginate.pipe */ "6yyQ");

























const _c0 = ["paginator"];
function LocalProductListComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Choose a type of shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hotelera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Extrahotelera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LocalProductListComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LocalProductListComponent_mat_form_field_10_Template_mat_form_field_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onSearchTerm($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Search by term");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LocalProductListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LocalProductListComponent_div_35_section_1_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r9.distance, " km");
} }
function LocalProductListComponent_div_35_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-panel-title", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LocalProductListComponent_div_35_section_1_p_7_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_div_35_section_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.zoomToMap(item_r9.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_div_35_section_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.goToDetail(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_div_35_section_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r9 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.openDialog(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.NOMBRE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.sortBy === "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Municipalitie: ", item_r9.MUNICIPIO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Places: ", item_r9.PLAZAS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Phone: ", item_r9.TELEFONO, "");
} }
function LocalProductListComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LocalProductListComponent_div_35_section_1_Template, 18, 5, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r5.localProductShops, ctx_r5.pageSize, ctx_r5.pageNumber));
} }
class LocalProductListComponent {
    constructor(router, mapSidebarService, toDetailService, paginatorInfoToSearchService, dialog) {
        this.router = router;
        this.mapSidebarService = mapSidebarService;
        this.toDetailService = toDetailService;
        this.paginatorInfoToSearchService = paginatorInfoToSearchService;
        this.dialog = dialog;
        this.show = false;
        this.formDetailPage = false;
        this.hasDataOnForm = false;
        this.routesArray = [];
        this.pageSizeOptions = [5, 10, 20];
        this.ordersData = [];
        this.changePage = true;
        this.byMunicipalitie = true;
        this.isSubmit = false;
        this.canChangePage = true;
        this.sortByLocation = false;
        this.isTermSelected = true;
        this.isLoading = false;
        this.orderAlphaOption = {
            label: 'Alpha', value: 'alpha', checked: true
        };
        this.orderLocationOption = {
            label: 'Location', value: 'location', checked: false
        };
        this.localForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            shopping: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            muni: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            radioLocationMuni: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            test: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            byTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.mapSidebarService.formDetailPage$.subscribe(response => {
            this.formDetailPage = response;
        });
        if (!this.formDetailPage) {
            localStorage.removeItem('filterFormLocal');
            localStorage.removeItem('pageChangeClick');
            localStorage.removeItem('page');
            sessionStorage.removeItem('sort');
        }
        this.getDataShops();
        if (!this.formDetailPage) {
            this.localForm.controls['shopping'].setValue('All');
            const shoppingValue = this.localForm.get('shopping').value;
            const radioButtonsValue = this.localForm.get('radioLocationMuni').value;
            const filterFormLocal = [shoppingValue];
            localStorage.setItem('filterFormLocal', JSON.stringify(filterFormLocal));
        }
        const formFilter = JSON.parse(localStorage.getItem('filterFormLocal'));
        if (formFilter && this.formDetailPage) {
            this.localForm.controls['shopping'].setValue(formFilter[0]);
        }
        this.mapSidebarService.isLoadingLogo$.subscribe(data => {
            this.isLoading = true;
        });
    }
    getDataShops() {
        this.mapSidebarService.dataToLocalProductLayer$.subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.originalData = data;
            const localSPage = localStorage.getItem('page');
            if (localSPage && this.formDetailPage) {
                this.pageNumber = Number(localSPage);
            }
            else {
                this.pageNumber = 1;
            }
            this.pageSize = 20;
            const dataMap = data.map((feature) => feature.attributes);
            this.orderShops(dataMap);
        }));
    }
    orderShops(dataMap) {
        this.sortBy = sessionStorage.getItem('sort') ? sessionStorage.getItem('sort') : 'alpha';
        if (this.sortBy === 'location') {
            this.localProductShops = [];
            setTimeout(() => {
                this.sortLocation(dataMap);
                this.isLoading = false;
            }, 2000);
        }
        else if (!this.sortBy || this.sortBy === 'alpha') {
            const orderDataMap = dataMap.sort((a, b) => {
                return (a.NOMBRE > b.NOMBRE) ? 1 : -1;
            });
            this.localProductShops = orderDataMap;
            this.onSearchShops = orderDataMap;
            this.isLoading = false;
        }
    }
    handlePage(event) {
        this.pageSize = event.pageSize;
        this.pageNumber = event.pageIndex + 1;
        if (this.changePage) {
            localStorage.setItem('page', this.pageNumber);
        }
        else {
            this.changePage = true;
        }
        this.paginatorInfoToSearchService.isHandle$.emit(true);
    }
    pageChange() {
        const pageChangeClick = [this.paginator.pageIndex, this.pageNumber];
        localStorage.setItem('pageChangeClick', JSON.stringify(pageChangeClick));
    }
    goToDetail(event) {
        const shopToEmit = this.localProductShops.filter(shop => shop.NOMBRE === event.NOMBRE);
        this.toDetailService.shopToDetailPage.next(shopToEmit);
        this.router.navigate([src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__["AppUrls"].AppLocalProductList, 'detail']);
    }
    zoomToMap(event) {
        this.mapSidebarService.idItemToMap$.emit(event);
    }
    onSearchChange(filterValue) {
        this.changePage = false;
        if (filterValue === '') {
            this.localProductShops = this.onSearchShops;
            const pageChangeClick = JSON.parse(localStorage.getItem('pageChangeClick'));
            if (pageChangeClick) {
                this.paginator.pageIndex = pageChangeClick[0];
                this.pageNumber = pageChangeClick[1];
            }
        }
        else {
            const shopsFilteredBySearch = this.onSearchShops.filter(shop => shop.NOMBRE.toLowerCase().includes(filterValue.toLowerCase()));
            this.localProductShops = shopsFilteredBySearch;
            this.paginator.firstPage();
        }
    }
    onSearchTerm(event) {
    }
    onSubmit() {
        const userLatLon = JSON.parse(sessionStorage.getItem('userUbication'));
        if (userLatLon || this.sortBy === 'alpha') {
            this.isLoading = true;
        }
        if (this.isTermSelected) {
            const byTermValue = this.localForm.get('byTerm').value;
            const dataFilter = [this.removeAccents(byTermValue), this.pageNumber, true];
            this.mapSidebarService.filtersToMap(dataFilter);
        }
        else {
            const shoppingValue = this.localForm.get('shopping').value;
            const dataFilter = [shoppingValue, this.pageNumber, false];
            this.mapSidebarService.filtersToMap(dataFilter);
            const filterFormLocal = [shoppingValue];
            localStorage.setItem('filterFormLocal', JSON.stringify(filterFormLocal));
        }
        setTimeout(() => {
            //THE PROBLEM TO OBTAIN THE DISTANCES ON SEARCH BY TERM!!!!!!!!
            if (this.sortBy === 'location') {
                this.obtainLocation();
            }
        }, 2000);
        this.paginator.firstPage();
    }
    removeAccents(byTermValue) {
        return byTermValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    obtainLocation() {
        this.orderAlphaOption.checked = false;
        this.orderLocationOption.checked = true;
        this.returnFormDetail = false;
        //this.getCoordinates();
        // setTimeout(() => {
        // if (this.coordinatesLocation) {
        const userLatLon = JSON.parse(sessionStorage.getItem('userUbication'));
        if (userLatLon) {
            this.isLoading = true;
            this.mapSidebarService.orderDataByLocation(userLatLon);
            this.sortByLocation = true;
            sessionStorage.setItem('sort', 'location');
            this.sortBy = sessionStorage.getItem('sort');
        }
        else {
            this.mapSidebarService.requestUserLocation(true);
        }
        // } 
        // else {
        //   console.log('There is a problem with the coordinates');
        // }
        // }, 2000);
    }
    orderByAlpha() {
        this.orderAlphaOption.checked = true;
        this.orderLocationOption.checked = false;
        this.localProductShops = [];
        setTimeout(() => {
            const data = this.onSearchShops;
            const orderDataMap = data.sort((a, b) => {
                return (a.NOMBRE > b.NOMBRE) ? 1 : -1;
            });
            this.localProductShops = orderDataMap;
            sessionStorage.setItem('sort', 'alpha');
            this.sortBy = sessionStorage.getItem('sort');
            //firtPage not respond without setTimeout
            this.paginator.firstPage();
        }, 1000);
    }
    sortLocation(dataMap) {
        const orderDataMap = dataMap.sort((a, b) => {
            return parseFloat(a.distance) - parseFloat(b.distance);
        });
        this.localProductShops = orderDataMap;
        this.onSearchShops = dataMap;
        if (!this.returnFormDetail) {
            this.paginator.firstPage();
        }
    }
    byCatOrTerm(event) {
        if (event.value === "term") {
            this.isTermSelected = true;
        }
        else {
            this.isTermSelected = false;
        }
    }
    openDialog(item) {
        const userLatLon = JSON.parse(sessionStorage.getItem('userUbication'));
        if (userLatLon) {
            this.openMapDialog(userLatLon, item);
        }
        else {
            alert('You need allow the coordinates position');
        }
    }
    openMapDialog(coordinates, item) {
        let shopChoosen;
        this.originalData.map((shop) => {
            if (shop.attributes.NOMBRE === item.NOMBRE) {
                shopChoosen = shop;
            }
        });
        const dialogRef = this.dialog.open(src_app_core_modals_google_map_dialog_google_map_dialog_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapDialogComponent"], {
            width: '60%',
            data: {
                dataKey: coordinates,
                shop: {
                    latitude: shopChoosen.geometry.latitude,
                    longitude: shopChoosen.geometry.longitude
                }
            }
            //TO PHONE SCREEN:
            // maxWidth: '100vw',
            // maxHeight: '100vh',
            // height: '100%',
            // width: '100%',
            // panelClass: 'full-screen-modal'
        });
    }
    ngAfterViewInit() {
        const page = localStorage.getItem('page');
        const updatePage = Number(page);
        if (this.formDetailPage && updatePage) {
            setTimeout(() => {
                this.paginator.pageIndex = updatePage - 1;
                this.returnFormDetail = this.formDetailPage;
                this.mapSidebarService.detailPage(false);
                this.canChangePage = false;
            }, 1000);
        }
        else {
            setTimeout(() => {
                this.canChangePage = false;
            }, 1000);
        }
        if (this.formDetailPage) {
            if (this.sortBy === 'alpha') {
                this.orderAlphaOption.checked = true;
                this.orderLocationOption.checked = false;
            }
            else {
                this.orderAlphaOption.checked = false;
                this.orderLocationOption.checked = true;
            }
        }
    }
    ngOnDestroy() {
        this.mapSidebarService.detailPage(false);
    }
}
LocalProductListComponent.ɵfac = function LocalProductListComponent_Factory(t) { return new (t || LocalProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["MapSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_7__["ToDetailPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_8__["PaginatorInfoToSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
LocalProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LocalProductListComponent, selectors: [["app-local-product"]], viewQuery: function LocalProductListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 36, vars: 17, consts: [[1, "local-product-panel"], [3, "formGroup"], ["aria-label", "Select an option", 1, "radioGroupFilter", 3, "change"], ["value", "category", 1, "byCategorie"], ["value", "term", 3, "checked"], ["class", "selectorFilterTypeOfShop", "appearance", "fill", 4, "ngIf"], ["style", "width:90%", "class", "example-full-width", 3, "input", 4, "ngIf"], ["mat-flat-button", "", 3, "click"], [1, "example-full-width", 2, "width", "90%", 3, "input"], ["matInput", "", "placeholder", "", 1, "searchShops"], [1, "listItems"], [1, "paginator-container"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 2, "height", "fit-content", 3, "click"], [1, "grid"], [3, "checked", "value"], ["aria-label", "Select page", 3, "disabled", "length", "pageSize", "pageSizeOptions", "page", "click"], ["paginator", ""], ["class", "spinnerBox", 4, "ngIf"], [4, "ngIf"], ["appearance", "fill", 1, "selectorFilterTypeOfShop"], ["formControlName", "shopping", 3, "disabled"], ["value", "All"], ["value", "Hotelera"], ["value", "Extrahotelera"], ["formControlName", "byTerm", "matInput", "", "placeholder", "", 1, "searchShops"], [1, "spinnerBox"], [4, "ngFor", "ngForOf"], [1, "card-tittle"], [1, "detailAndZoomButtons"], ["title", "Zoom to Shop", "mat-raised-button", "", 1, "zoomButton", 3, "click"], ["title", "Detail", "mat-raised-button", "", 1, "detailButton", 3, "click"], ["title", "Route", "mat-raised-button", "", 1, "googleMapButton", 3, "click"]], template: function LocalProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LocalProductListComponent_Template_mat_radio_group_change_4_listener($event) { return ctx.byCatOrTerm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "By Categorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "By Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LocalProductListComponent_mat_form_field_9_Template, 10, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LocalProductListComponent_mat_form_field_10_Template, 4, 0, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Consult");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LocalProductListComponent_Template_mat_form_field_input_13_listener($event) { return ctx.onSearchChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_Template_button_click_24_listener() { return ctx.orderByAlpha(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_Template_button_click_28_listener() { return ctx.obtainLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-paginator", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function LocalProductListComponent_Template_mat_paginator_page_32_listener($event) { return ctx.handlePage($event); })("click", function LocalProductListComponent_Template_mat_paginator_click_32_listener() { return ctx.pageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LocalProductListComponent_div_34_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LocalProductListComponent_div_35_Template, 3, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.localForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTermSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTermSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.orderAlphaOption.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.orderAlphaOption.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.orderAlphaOption.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.orderLocationOption.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.orderLocationOption.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.orderLocationOption.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.canChangePage)("length", ctx.localProductShops.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelTitle"]], pipes: [_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_22__["PaginatePipe"]], styles: [".local-product-panel[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      right: 0%;\r\n      width: 95%;\r\n      height: 100%;\r\n      background: white;\r\n      top: 0;\r\n      z-index: 1;\r\n  }\r\n\r\n  .checkbox-allergens[_ngcontent-%COMP%] {\r\n      margin-right: 10px;\r\n  }\r\n\r\n  .listItems[_ngcontent-%COMP%] {\r\n      overflow-y: scroll;\r\n      height: 650px;\r\n  }\r\n\r\n  .selectorFilterMuni[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n      margin-top: 5%;\r\n  }\r\n\r\n  .selectorFilterTypeOfShop[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n      margin-top: 5%;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n      height: 30%;\r\n      display: flex;\r\n      justify-content: center;\r\n      flex-direction: column;\r\n      align-items: center;\r\n  }\r\n\r\n  \r\n\r\n    .mat-paginator-page-size ng-star-inserted {\r\n      display: none !important;\r\n  }\r\n\r\n    .mat-paginator-page-size-label {\r\n      display: none !important;\r\n  }\r\n\r\n  .searchByLocation[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n  }\r\n\r\n  .selectDistanceText[_ngcontent-%COMP%] {\r\n      margin: 0 0 0px;\r\n      margin-top: 10px;\r\n  }\r\n\r\n  .radioButtonLocation[_ngcontent-%COMP%] {\r\n      margin-left: 10px;\r\n  }\r\n\r\n  .detailAndZoomButtons[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: flex-end;\r\n  }\r\n\r\n  .zoomButton[_ngcontent-%COMP%] {\r\n      color: white;\r\n      background: url(https://i.ibb.co/VwkZBkF/loupe.png) no-repeat;\r\n      background-color: white;\r\n      background-size: 20px;\r\n      background-position: center;\r\n      text-align: center;\r\n      height: 30px;\r\n      width: 0px !important;\r\n      min-width: unset !important;\r\n  }\r\n\r\n  .detailButton[_ngcontent-%COMP%] {\r\n      color: white;\r\n      background: url(https://i.ibb.co/8cYy8yV/list-1.png) no-repeat;\r\n      background-color: white;\r\n      background-size: 20px;\r\n      background-position: center;\r\n      text-align: center;\r\n      height: 30px;\r\n      margin-left: 10px;\r\n      width: 0px !important;\r\n      min-width: unset !important;\r\n  }\r\n\r\n  .googleMapButton[_ngcontent-%COMP%] {\r\n      color: white;\r\n      background: url(https://i.ibb.co/q9vHMM5/ruta-1.png) no-repeat;\r\n      background-color: white;\r\n      background-size: 20px;\r\n      background-position: center;\r\n      text-align: center;\r\n      height: 30px;\r\n      margin-left: 10px;\r\n      width: 0px !important;\r\n      min-width: unset !important;\r\n  }\r\n\r\n    .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\r\n      border-color: #B6D93B;\r\n  }\r\n\r\n    .mat-radio-button.mat-accent .mat-radio-inner-circle {\r\n      color: #B6D93B;\r\n      background-color: #B6D93B;\r\n  }\r\n\r\n    .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\r\n      background-color: #B6D93B;\r\n  }\r\n\r\n    .mat-accent .mat-slider-track-fill {\r\n      color: #B6D93B;\r\n      background-color: #B6D93B !important;\r\n  }\r\n\r\n    .mat-slider-thumb-label {\r\n      color: #B6D93B;\r\n      background-color: #B6D93B !important;\r\n  }\r\n\r\n    .mat-slider-thumb {\r\n      color: #B6D93B;\r\n      background-color: #B6D93B !important;\r\n  }\r\n\r\n    .mat-accent .mat-slider-thumb-label {\r\n      color: #B6D93B;\r\n      background-color: #B6D93B !important;\r\n  }\r\n\r\n  .card-tittle[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n  }\r\n\r\n  .description-panel[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: flex-end;\r\n  }\r\n\r\n  .paginator-container[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n  }\r\n\r\n    .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n      stroke: #B6D93B;\r\n  }\r\n\r\n  .spinnerBox[_ngcontent-%COMP%] {\r\n      height: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-content: center;\r\n      justify-content: center;\r\n      align-items: center;\r\n  }\r\n\r\n  .byCategorie[_ngcontent-%COMP%] {\r\n\r\n  }\r\n\r\n  .byCategorie[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .radioGroupFilter[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO01BQ0ksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVO01BQ1YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixNQUFNO01BQ04sVUFBVTtFQUNkOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGFBQWE7RUFDakI7O0VBRUE7TUFDSSxVQUFVO01BQ1YsY0FBYztFQUNsQjs7RUFFQTtNQUNJLFVBQVU7TUFDVixjQUFjO0VBQ2xCOztFQUVBO01BQ0ksV0FBVztNQUNYLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsc0JBQXNCO01BQ3RCLG1CQUFtQjtFQUN2Qjs7RUFFQTs7O0tBR0c7O0VBRUg7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxlQUFlO01BQ2YsZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix5QkFBeUI7RUFDN0I7O0VBRUE7TUFDSSxZQUFZO01BQ1osNkRBQTZEO01BQzdELHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsMkJBQTJCO01BQzNCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1oscUJBQXFCO01BQ3JCLDJCQUEyQjtFQUMvQjs7RUFFQTtNQUNJLFlBQVk7TUFDWiw4REFBOEQ7TUFDOUQsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLDJCQUEyQjtFQUMvQjs7RUFFQTtNQUNJLFlBQVk7TUFDWiw4REFBOEQ7TUFDOUQsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLDJCQUEyQjtFQUMvQjs7RUFFQTtNQUNJLHFCQUFxQjtFQUN6Qjs7RUFFQTtNQUNJLGNBQWM7TUFDZCx5QkFBeUI7RUFDN0I7O0VBRUE7TUFDSSx5QkFBeUI7RUFDN0I7O0VBRUE7TUFDSSxjQUFjO01BQ2Qsb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksY0FBYztNQUNkLG9DQUFvQztFQUN4Qzs7RUFFQTtNQUNJLGNBQWM7TUFDZCxvQ0FBb0M7RUFDeEM7O0VBRUE7TUFDSSxjQUFjO01BQ2Qsb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7RUFDbEM7O0VBRUE7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHFCQUFxQjtFQUN6Qjs7RUFFQTtNQUNJLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksZUFBZTtFQUNuQjs7RUFFQTtNQUNJLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIsbUJBQW1CO0VBQ3ZCOztFQUdBOztFQUVBOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6ImxvY2FsLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAubG9jYWwtcHJvZHVjdC1wYW5lbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuY2hlY2tib3gtYWxsZXJnZW5zIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3RJdGVtcyB7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RvckZpbHRlck11bmkge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RvckZpbHRlclR5cGVPZlNob3Age1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZEOTNCO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSAqL1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIG5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLWxhYmVsIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaEJ5TG9jYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWxlY3REaXN0YW5jZVRleHQge1xyXG4gICAgICBtYXJnaW46IDAgMCAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucmFkaW9CdXR0b25Mb2NhdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbEFuZFpvb21CdXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC56b29tQnV0dG9uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmliYi5jby9Wd2taQmtGL2xvdXBlLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxCdXR0b24ge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kuaWJiLmNvLzhjWXk4eVYvbGlzdC0xLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZ29vZ2xlTWFwQnV0dG9uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmliYi5jby9xOXZITU01L3J1dGEtMS5wbmcpIG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNCNkQ5M0I7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZEOTNCO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCNkQ5M0I7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZEOTNCICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgICBjb2xvcjogI0I2RDkzQjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RDkzQiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICAgICAgY29sb3I6ICNCNkQ5M0I7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCNkQ5M0IgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZEOTNCICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXR0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24tcGFuZWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdG9yLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICAgIHN0cm9rZTogI0I2RDkzQjtcclxuICB9XHJcblxyXG4gIC5zcGlubmVyQm94IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5ieUNhdGVnb3JpZSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLmJ5Q2F0ZWdvcmlle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvR3JvdXBGaWx0ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-local-product',
                templateUrl: './local-product-list.component.html',
                styleUrls: ['./local-product-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["MapSidebarService"] }, { type: src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_7__["ToDetailPageService"] }, { type: src_app_services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_8__["PaginatorInfoToSearchService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['paginator']
        }] }); })();


/***/ }),

/***/ "JwAH":
/*!***************************************************************************!*\
  !*** ./src/app/services/to-detail-page-service/to-detail-page.service.ts ***!
  \***************************************************************************/
/*! exports provided: ToDetailPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDetailPageService", function() { return ToDetailPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ToDetailPageService {
    constructor() {
        this.shopToDetailPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.shopToDetailPage$ = this.shopToDetailPage.asObservable();
    }
}
ToDetailPageService.ɵfac = function ToDetailPageService_Factory(t) { return new (t || ToDetailPageService)(); };
ToDetailPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToDetailPageService, factory: ToDetailPageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDetailPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XmWs":
/*!****************************************************************!*\
  !*** ./src/app/+modules/local-product/local-product.module.ts ***!
  \****************************************************************/
/*! exports provided: LocalProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalProductModule", function() { return LocalProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/local-product-list/local-product-list.component */ "5fQp");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/local-product-detail/local-product-detail.component */ "fKYo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");












// import { VisualsModule } from 'src/app/shared/visuals/visuals.module';
//Because is the "local-product" page  ----> "RouterModule.forChild(["   in imports 
class LocalProductModule {
}
LocalProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LocalProductModule });
LocalProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LocalProductModule_Factory(t) { return new (t || LocalProductModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"]
                },
                {
                    path: 'detail',
                    component: _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]
                }
            ]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            // VisualsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LocalProductModule, { declarations: [_components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"], _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        // VisualsModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"], _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"]
                        },
                        {
                            path: 'detail',
                            component: _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]
                        }
                    ]),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                    // VisualsModule
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "fKYo":
/*!**********************************************************************************************************!*\
  !*** ./src/app/+modules/local-product/components/local-product-detail/local-product-detail.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LocalProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalProductDetailComponent", function() { return LocalProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/app-urls.config */ "Don0");
/* harmony import */ var src_app_shared_components_dialog_photo_gallery_dialog_photo_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/dialog-photo-gallery/dialog-photo-gallery.component */ "9bNl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/to-detail-page-service/to-detail-page.service */ "JwAH");
/* harmony import */ var src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/map-sidebar/map-sidebar.service */ "VMWZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class LocalProductDetailComponent {
    constructor(router, toDetailService, mapSidebarService, dialog) {
        this.router = router;
        this.toDetailService = toDetailService;
        this.mapSidebarService = mapSidebarService;
        this.dialog = dialog;
        this.images = [944, 1011].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    ngOnInit() {
        this.toDetailService.shopToDetailPage$.subscribe(shop => {
            this.shopShowed = shop[0];
        });
        this.mapSidebarService.detailPage(true);
    }
    goToBackPage() {
        this.router.navigate([src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_1__["AppUrls"].AppLocalProductList]);
    }
    openDialog() {
        // width: '100vw',
        // maxWidth: '100vw',
        this.dialog.open(src_app_shared_components_dialog_photo_gallery_dialog_photo_gallery_component__WEBPACK_IMPORTED_MODULE_2__["DialogPhotoGalleryComponent"], {
            width: '800px'
            // maxWidth: '100vw',
        });
    }
}
LocalProductDetailComponent.ɵfac = function LocalProductDetailComponent_Factory(t) { return new (t || LocalProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_4__["ToDetailPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["MapSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
LocalProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalProductDetailComponent, selectors: [["app-local-product-detail"]], decls: 14, vars: 4, consts: [[1, "local-product-detail"], [3, "click"], [1, "attributesShop"], ["mat-button", "", 3, "click"]], template: function LocalProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalProductDetailComponent_Template_button_click_1_listener() { return ctx.goToBackPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalProductDetailComponent_Template_button_click_12_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Open dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.NOMBRE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.PLAZAS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.TELEFONO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.MUNICIPIO);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".local-product-detail[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: white;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n\r\n  .attributesShop[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCIiwiZmlsZSI6ImxvY2FsLXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYWwtcHJvZHVjdC1kZXRhaWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuYXR0cmlidXRlc1Nob3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-local-product-detail',
                templateUrl: './local-product-detail.component.html',
                styleUrls: ['./local-product-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_4__["ToDetailPageService"] }, { type: src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["MapSidebarService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-local-product-local-product-module.js.map