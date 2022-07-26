(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geometry-geometryEngineJSON-js"],{

/***/ "1kEK":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js ***!
  \*********************************************************************/
/*! exports provided: jsonAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonAdapter", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:s,exportPoint:n,exportPolygon:o,exportPolyline:a,exportMultipoint:c,exportExtent:m};function s(t,s){return null==s?null:t.convertJSONToGeometry(s)}class i{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}function n(t,s,n){const e=new i(t.getPointX(s),t.getPointY(s),n),o=t.hasZ(s),h=t.hasM(s);return o&&(e.z=t.getPointZ(s)),h&&(e.m=t.getPointM(s)),e}class e{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function o(t,s,i){return new e(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class h{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function a(t,s,i){return new h(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class r{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function c(t,s,i){return new r(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))}class x{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function m(t,s,i){const n=t.hasZ(s),e=t.hasM(s),o=new x(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);o.zmin=i.vmin,o.zmax=i.vmax}if(e){const i=t.getMExtent(s);o.mmin=i.vmin,o.mmax=i.vmax}return o}


/***/ }),

/***/ "AKzY":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryEngineJSON.js ***!
  \******************************************************************/
/*! exports provided: buffer, clip, contains, convexHull, crosses, cut, densify, difference, disjoint, distance, equals, extendedSpatialReferenceInfo, flipHorizontal, flipVertical, generalize, geodesicArea, geodesicBuffer, geodesicDensify, geodesicLength, intersect, intersects, isSimple, nearestCoordinate, nearestVertex, nearestVertices, offset, overlaps, planarArea, planarLength, relate, rotate, simplify, symmetricDifference, touches, union, within */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/geometryEngineBase.js */ "9gar");
/* harmony import */ var _geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometryAdapters/json.js */ "1kEK");
/* harmony import */ var _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/geometryEngineJSON.js */ "l5Tg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clip", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convexHull", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crosses", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cut", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "densify", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disjoint", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendedSpatialReferenceInfo", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipHorizontal", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipVertical", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generalize", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geodesicArea", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geodesicBuffer", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geodesicDensify", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geodesicLength", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersects", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSimple", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nearestCoordinate", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nearestVertex", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nearestVertices", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "overlaps", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarArea", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarLength", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relate", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symmetricDifference", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "within", function() { return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["w"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/



/***/ })

}]);
//# sourceMappingURL=geometry-geometryEngineJSON-js.js.map