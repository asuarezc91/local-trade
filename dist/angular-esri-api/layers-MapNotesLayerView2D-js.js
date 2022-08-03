(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-MapNotesLayerView2D-js"],{

/***/ "eRoJ":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapNotesLayerView2D.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return m; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ "q03O");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const g="sublayers",d="layerView",u=Object.freeze({remove(){},pause(){},resume(){}});let f=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__["default"])){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,i){const s=Array.from(this.graphicsViews(),(async i=>{const s=await i.hitTest(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate)}return s}));return(await Promise.all(s)).flat()}highlight(e){let t;return"number"==typeof e?t=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):u}update(e){for(const i of this.graphicsViews())i.processUpdate(e)}attach(){const e=this.view,i=()=>this.requestUpdate(),s=this.layer.featureCollections;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(t,"visible",(e=>r.container.visible=e)),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(r,"updating",(()=>this.notifyChange("updating")))],d)}this._updateHighlight()}else Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.layer.sublayers)&&this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["on"])(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),g)}detach(){this._destroyGraphicsViews(),this.handles.remove(g)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this.layer.sublayers))return;const e=[],i=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]({view:i,graphics:t.graphics,requestUpdateCallback:s,container:r});this.handles.add([t.on("graphic-update",a.graphicUpdateHandler),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(t,"visible",(e=>a.container.visible=e)),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(a,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(a.container),e.push(a)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e)}};f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.MapNotesLayerView2D")],f);const m=f;


/***/ })

}]);
//# sourceMappingURL=layers-MapNotesLayerView2D-js.js.map