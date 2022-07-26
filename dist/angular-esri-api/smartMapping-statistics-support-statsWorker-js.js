(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["smartMapping-statistics-support-statsWorker-js"],{

/***/ "Ww8Z":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/smartMapping/statistics/support/utils.js ***!
  \****************************************************************************/
/*! exports provided: createError, getDataValues, getRangeExpr, getSQLFilterForNormalization, mergeWhereClauses, verifyBasicFieldValidity, verifyFieldType, verifyNumericField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createError", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataValues", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeExpr", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSQLFilterForNormalization", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWhereClauses", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyBasicFieldValidity", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyFieldType", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNumericField", function() { return p; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ "wdpY");
/* harmony import */ var _statistics_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../statistics/utils.js */ "Vc03");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../support/arcadeOnDemand.js */ "gvqN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=null;async function a(e,t){if(!t)return[];const i=e.field,o=e.valueExpression,a=e.normalizationType,f=e.normalizationField,c=e.normalizationTotal,u=[],d=e.viewInfoParams;let p=null,m=null;if(o){if(!s){const{arcadeUtils:e}=await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_5__["loadArcade"])();s=e}p=s.createFunction(o),m=d&&s.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"](d.spatialReference)})}return t.forEach((e=>{const t=e.attributes;let n;if(o){const t=s.createExecContext(e,m);n=s.executeFunction(p,t)}else t&&(n=t[i]);if(a&&isFinite(n)){const e=t&&parseFloat(t[f]);n=Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_4__["getNormalizedValue"])(n,a,e,c)}u.push(n)})),u}function f(e){const t=e.field,n=e.normalizationType,i=e.normalizationField;let o;return"field"===n?o="(NOT "+i+" = 0)":"log"!==n&&"natural-log"!==n&&"square-root"!==n||(o=`(${t} > 0)`),o}function c(t,n){return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](t,n)}function u(e,t,n){const i=null!=t?e+" >= "+t:"",o=null!=n?e+" <= "+n:"";let r="";return r=i&&o?m(i,o):i||o,r?"("+r+")":""}function d(e,t,n,i){let o=null;return t?t.name!==e.objectIdField&&-1!==i.indexOf(t.type)||(o=c(n,"'field' should be one of these types: "+i.join(","))):o=c(n,"'field' is not defined in the layer schema"),o}function p(e,t,n){let r;return t?t.name!==e.objectIdField&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["isNumericField"])(t)||(r=c(n,"'field' should be one of these numeric types: "+_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["numericTypes"].join(","))):r=c(n,"'field' is not defined in the layer schema"),r}function m(e,n){let i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)?e:"";return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)&&n&&(i=i?"("+i+") AND ("+n+")":n),i}function y(e,t,n){const i=h({layer:e,fields:t});if(i.length)return c(n,"Unknown fields: "+i.join(", ")+". You can only use fields defined in the layer schema");const o=g({layer:e,fields:t});return o.length?c(n,"Unsupported fields: "+o.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function h(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}function g(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsStatistics}))}


/***/ }),

/***/ "kmuY":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js ***!
  \**********************************************************************************/
/*! exports provided: classBreaks, histogram, summaryStatistics, uniqueValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classBreaks", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summaryStatistics", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueValues", function() { return d; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "Ww8Z");
/* harmony import */ var _statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../statistics/utils.js */ "Vc03");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function u(l){const{attribute:t,features:r}=l,{normalizationType:s,normalizationField:m,minValue:u,maxValue:d,fieldType:f}=t,p=await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getDataValues"])({field:t.field,valueExpression:t.valueExpression,normalizationType:s,normalizationField:m,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},r),v=Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["isNullCountSupported"])({normalizationType:s,normalizationField:m,minValue:u,maxValue:d}),z={value:.5,fieldType:f},c="esriFieldTypeString"===f?Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["calculateStringStatistics"])({values:p,supportsNullCount:v,percentileParams:z}):Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["calculateStatistics"])({values:p,minValue:u,maxValue:d,useSampleStdDev:!s,supportsNullCount:v,percentileParams:z});return Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["processSummaryStatisticsResult"])(c,"esriFieldTypeDate"===f)}async function d(i){const{attribute:n,features:e}=i,o=await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getDataValues"])({field:n.field,valueExpression:n.valueExpression,viewInfoParams:n.viewInfoParams},e),r=Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["calculateUniqueValuesCount"])(o);return Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["createUVResult"])(r,n.domain,n.returnAllCodedValues)}async function f(i){const{attribute:n,features:e}=i,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:m,classificationMethod:u}=n,d=await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getDataValues"])({field:o,valueExpression:n.valueExpression,normalizationType:l,normalizationField:t,normalizationTotal:m,viewInfoParams:n.viewInfoParams},e),f=Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["calculateClassBreaks"])(d,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:m,classificationMethod:u,standardDeviationInterval:n.standardDeviationInterval,numClasses:n.numClasses,minValue:n.minValue,maxValue:n.maxValue});return Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["resolveCBResult"])(f,u)}async function p(i){const{attribute:n,features:e}=i,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s}=n,u=await Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getDataValues"])({field:o,valueExpression:n.valueExpression,normalizationType:l,normalizationField:t,normalizationTotal:r,viewInfoParams:n.viewInfoParams},e);return Object(_statistics_utils_js__WEBPACK_IMPORTED_MODULE_1__["calculateHistogram"])(u,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s,standardDeviationInterval:n.standardDeviationInterval,numBins:n.numBins,minValue:n.minValue,maxValue:n.maxValue})}


/***/ })

}]);
//# sourceMappingURL=smartMapping-statistics-support-statsWorker-js.js.map