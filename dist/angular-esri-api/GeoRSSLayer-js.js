(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GeoRSSLayer-js"],{

/***/ "AP+b":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/GeoRSSLayer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return F; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "EyXx");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../symbols.js */ "H9eC");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../symbols/Symbol.js */ "DZP5");
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ "21Ip");
/* harmony import */ var _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../symbols/PictureMarkerSymbol.js */ "N+cL");
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../symbols/SimpleMarkerSymbol.js */ "Tcmu");
/* harmony import */ var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../symbols/SimpleFillSymbol.js */ "DXYb");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_23__["default"],key:"type",typeMap:{"simple-line":_symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_24__["default"]},errorContext:"symbol"},k={base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_23__["default"],key:"type",typeMap:{"picture-marker":_symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_25__["default"],"simple-marker":_symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_26__["default"]},errorContext:"symbol"},_={base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_23__["default"],key:"type",typeMap:{"simple-fill":_symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_27__["default"]},errorContext:"symbol"};let w=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_20__["RefreshableLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_21__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_16__["default"]))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach((e=>{var r;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&null!=(r=o.outline)&&r.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid")})),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["getFilename"])(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAbortError"]).then((()=>this._fetchService(r))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const s=this.spatialReference,{data:i}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_15__["isWGS84"])(s)?void 0:null!=(t=s.wkid)?t:JSON.stringify(s)},signal:e});return i}_hasGeometry(e){var r,o;return null!=(r=null==(o=this.featureCollections)?void 0:o.some((r=>{var o,t;return(null==(o=r.featureSet)?void 0:o.geometryType)===e&&(null==(t=r.featureSet.features)?void 0:t.length)>0})))&&r}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],w.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],w.prototype,"featureCollections",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__["reader"])("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"],json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__["id"])],w.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__["legendEnabled"])],w.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:["show","hide"]})],w.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__["url"])],w.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__["subclass"])("esri.layers.GeoRSSLayer")],w);const F=w;


/***/ })

}]);
//# sourceMappingURL=GeoRSSLayer-js.js.map