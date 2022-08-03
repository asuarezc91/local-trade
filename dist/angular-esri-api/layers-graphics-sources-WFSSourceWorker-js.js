(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-sources-WFSSourceWorker-js"],{

/***/ "cnqU":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/WFSSourceWorker.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return E; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/FeatureStore.js */ "ZRfE");
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/projectionSupport.js */ "HsO1");
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/QueryEngine.js */ "ZBG3");
/* harmony import */ var _geojson_geojson_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geojson/geojson.js */ "46M0");
/* harmony import */ var _support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/sourceUtils.js */ "IcpP");
/* harmony import */ var _ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ogc/wfsUtils.js */ "ZZzz");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/FieldsIndex.js */ "gLc9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await Object(_ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_11__["getFeature"])(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await Object(_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_9__["validateGeoJSON"])(s),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAborted"])(e);const i=Object(_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_9__["createOptimizedFeatures"])(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["equals"])(this._queryEngine.spatialReference,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["WGS84"]))for(const a of i)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(a.geometry)&&(a.geometry=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["convertFromGeometry"])(Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["project"])(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["convertToGeometry"])(a.geometry,this._queryEngine.geometryType,!1,!1),_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["WGS84"],this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["mixAttributes"])(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++)}return i}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h,customParameters:l}=e;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_12__["default"](o),await this._checkProjection(n),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAborted"])(t),this._queryEngine=new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_8__["default"]({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:n,timeInfo:null,featureStore:new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_6__["default"]({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s;return this._customParameters=r,null==(s=this._snapshotTask)||s.abort(),this._snapshotTask=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["createTask"])(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(r=>{this._queryEngine.featureStore.clear(),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["isAbortError"])(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.WFSLayer").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["checkProjectionSupport"])(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["WGS84"],t)}catch{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("unsupported-projection","Projection not supported",{spatialReference:t})}}}


/***/ })

}]);
//# sourceMappingURL=layers-graphics-sources-WFSSourceWorker-js.js.map