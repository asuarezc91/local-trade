(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tileRenderers-SymbolTileRenderer-js"],{

/***/ "98J/":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js ***!
  \*******************************************************************************/
/*! exports provided: FeatureDisplayList, FeatureDisplayListInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDisplayList", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDisplayListInfo", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpuMapped/FreeList.js */ "Wmhs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class n{constructor(t,e,i,n,a){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=n,this.indexCount=a}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}}class a{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(e,i,n,d){const r=new a(e,i);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d))for(const t of d)n.seekIndex(t),r.addRecord(n);else for(;n.next();)r.addRecord(n);return r}addRecord(t){const a=this._target,d=this.geometryType,r=t.materialKey;let s=t.indexFrom,o=t.indexCount;const h=t.vertexFrom,x=t.vertexCount;if(o||(s=h,o=x),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head)){const t=new n(a,d,r,s,o);return void(this._head=new _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_1__["List"](t))}let m=null,c=this._head;for(;c;){if(s<c.data.indexFrom)return this._insert(r,s,o,m,c);m=c,c=c.next}this._insert(r,s,o,m,null)}forEach(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._head)&&this._head.forEach(e)}*infos(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._head))for(const t of this._head.values())yield t}_insert(a,d,r,s,o){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o)){const t=new n(this._target,this.geometryType,a,d,r);this._head=new _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_1__["List"](t)}return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)?this._insertAtHead(a,d,r,o):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o)?this._insertAtEnd(a,d,r,s):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)?this._insertAtMiddle(a,d,r,s,o):void 0}_insertAtHead(t,e,a,d){const r=e+a;if(t===d.data.materialKey&&r===d.data.indexFrom)d.data.indexFrom=e,d.data.indexCount+=a;else{const r=new n(this._target,this.geometryType,t,e,a);this._head=new _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_1__["List"](r),this._head.next=d}}_insertAtEnd(t,e,a,d){if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a;else{const r=new n(this._target,this.geometryType,t,e,a),s=new _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_1__["List"](r);d.next=s}}_insertAtMiddle(t,e,a,d,r){const s=e+a;if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a,d.data.materialKey===r.data.materialKey&&d.data.indexEnd===r.data.indexFrom&&(d.data.indexCount+=r.data.indexCount,d.next=r.next);else if(t===r.data.materialKey&&s===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=a;else{const s=new n(this._target,this.geometryType,t,e,a),o=new _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_1__["List"](s);d.next=o,o.next=r}}}


/***/ }),

/***/ "BI/k":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/MetricReader.js ***!
  \************************************************************************************/
/*! exports provided: MetricReader, MetricReaderNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricReader", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricReaderNode", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e=6,r=4294967296;class o{constructor(t){this._head=t,this._cursor=t}static from(t){const s=i.from(new Float32Array(t));return new o(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(r._link=e._link),!0;r=e,e=e._link}return!1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e+0]=s}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e+1]=s}boundsX(t){return this._buffer[this._offset+10+t*e+2]}boundsY(t){return this._buffer[this._offset+10+t*e+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t){const e=this._offset;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}


/***/ }),

/***/ "F16J":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayId.js ***!
  \**********************************************************************/
/*! exports provided: AGGREGATE_VALID_FILTERS_MASK, DISPLAY_ID_TEXEL_MASK, DISPLAY_ID_TYPE_AGGREGATE, DISPLAY_ID_TYPE_FEATURE, DISPLAY_ID_TYPE_MASK, NONAGGREGATE_VALID_FILTERS_MASK, createDisplayId, getDisplayIdFilterMask, getDisplayIdTexel, getDisplayIdType, isAggregateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGGREGATE_VALID_FILTERS_MASK", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TEXEL_MASK", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TYPE_AGGREGATE", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TYPE_FEATURE", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TYPE_MASK", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NONAGGREGATE_VALID_FILTERS_MASK", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDisplayId", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayIdFilterMask", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayIdTexel", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayIdType", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAggregateId", function() { return p; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=8388607,t=8388608,r=254,o=255,u=0,c=1,e=n=>(n&t)>>>23,f=t=>t&n,i=n=>e(n)===c?r:o;function p(n){return e(n)===c}function s(n,r){return((r?t:0)|n)>>>0}


/***/ }),

/***/ "PL4a":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FeatureTile.js ***!
  \************************************************************************/
/*! exports provided: FeatureTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTile", function() { return w; });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "lx5q");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _WGLTile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLTile.js */ "KFVX");
/* harmony import */ var _collisions_MetricReader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collisions/MetricReader.js */ "BI/k");
/* harmony import */ var _cpuMapped_Geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cpuMapped/Geometry.js */ "jo7+");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const p=50,l=4,f=8,S=100;let y=0;class w extends _WGLTile_js__WEBPACK_IMPORTED_MODULE_9__["WGLTile"]{constructor(t,r,s,i,a){super(t,r,s),this.instanceId=y++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__["default"](S),this._bufferPatches=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__["default"](S),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),this._store=i,this._requestLabelUpdate=a}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),n=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])();Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["t"])(n,[this.x,this.y],s),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_3__["a"])(r,n),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_3__["m"])(r,e.viewMat2d,r)}patch(e,t){if(this.patchCount++,e.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=p&&this._dropPatches();const r=e,s=r.addOrUpdate&&this.key.id!==r.addOrUpdate.tileKeyOrigin;t&&s?this._bufferPatches.enqueue(r):(r.sort=r.sort&&!t,this._patches.enqueue(r)),this.requestRender()}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<l;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=f,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&this._patchBuffer(e)}}_updateMesh(){const e=this._patches.peek();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&e.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r)){if(!0===r.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates())}}_patch(e){Object(_Utils_js__WEBPACK_IMPORTED_MODULE_8__["forEachGeometryType"])((t=>{this._remove(t,e.remove),this._insert(t,e,!1)}))}_patchBuffer(e){Object(_Utils_js__WEBPACK_IMPORTED_MODULE_8__["forEachGeometryType"])((t=>{this._insert(t,e,!0)}))}_insert(e,t,i){try{var a;const n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(this._renderState.next,this._renderState.current),h=null==(a=t.addOrUpdate)?void 0:a.data[e],c=n.geometry;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(h))return;c.has(e)||c.set(e,new _cpuMapped_Geometry_js__WEBPACK_IMPORTED_MODULE_11__["Geometry"](e,this.stage)),c.get(e).insert(h,t.sort,i),e===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].LABEL&&this._insertLabelMetrics(t.type,h.metrics,t.clear)}catch(n){}}_insertLabelMetrics(e,t,i){const a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(this._renderState.next,this._renderState.current);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t))return;const n=_collisions_MetricReader_js__WEBPACK_IMPORTED_MODULE_10__["MetricReader"].from(t);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(a.metrics))a.metrics=n;else{if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id)}a.metrics.link(n)}}_remove(e,t){const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(this._renderState.next,this._renderState.current);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)&&e.length)for(const r of e)for(;t.delete(r););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r))break;if(r.clear){if(t)break;t=!0}e.push(r)}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)))}}


/***/ }),

/***/ "Wmhs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js ***!
  \*******************************************************************************/
/*! exports provided: FreeList, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeList", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return a; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class a{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let n=1;n<t.length;n++)e.next=new a([t[n]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let a=this;for(;a;)t(a.data),a=a.next}find(t){var a;return t(this.data)?this:null==(a=this.next)?void 0:a.find(t)}max(t,a=this){const e=t(this.data)>t(a.data)?this:a;return this.next?this.next.max(t,e):e}remove(t,a=null){return this===t?a?(a.next=this.next,a):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class e{constructor(e){this._head=null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)||(this._head=new a(e))}get head(){return this._head}maxAvailableSpace(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head))return 0;const a=this._head.max((t=>t.end-t.start));return a.data.end-a.data.start}firstFit(a){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head))return null;let e=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===a)return e?e.next=n.next:this._head=n.next,n.data.start;if(t>a){const t=n.data.start;return n.data.start+=a,t}e=n,n=n.next}return null}free(e,n){const r=e+n;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head)){const t=new a({start:e,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new a({start:e,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,d=s.next;for(;d;){if(d.data.start>=r){if(s.data.end===e){if(s.data.end+=n,s.data.end===d.data.start){const t=d.data.end-d.data.start;return s.data.end+=t,void(s.next=d.next)}return}if(d.data.start===r)return void(d.data.start-=n);const t=new a({start:e,end:r});return t.next=s.next,void(s.next=t)}s=d,d=d.next}if(e===s.data.end)return void(s.data.end+=n);const i=new a({start:e,end:r});s.next=i}}


/***/ }),

/***/ "YeA2":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js ***!
  \*****************************************************************************/
/*! exports provided: Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return f; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _BufferPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BufferPool.js */ "mtKI");
/* harmony import */ var _FreeList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreeList.js */ "Wmhs");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a=1.25,u=32767,d=u<<16|u;class f{constructor(t,i,e){const s=_BufferPool_js__WEBPACK_IMPORTED_MODULE_1__["TypedBuffer"].create(i*e*Uint32Array.BYTES_PER_ELEMENT);this.size=i,this.strideInt=e,this.bufferType=t,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=s,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}invalidate(){this._invalidateTriangleBuffer(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(this._gpu,(t=>t.dispose())),this._gpu=null}_invalidateTriangleBuffer(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(this._gpuComputeTriangles,(t=>t.dispose())),this._gpuComputeTriangles=null}destroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(this._gpu,(t=>t.dispose())),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(this._gpuComputeTriangles,(t=>t.dispose())),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(this._cpu,(t=>t.destroy())),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(this._cpu2,(t=>t.destroy()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"]({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(this.maxAvailableSpace()>=t)return;if(t*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const i=this._cpu.length/this.strideInt,e=Math.round((i+t)*a),r=e*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(i,e-i)}}set(t,i){this._cpu.array[t]!==i&&(this._cpu.array[t]=i,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getGPUBuffer(t,e=!1){if(!this.bufferSize)return null;if(e){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer");return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(t)),this._gpuComputeTriangles}return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._gpu)&&(this._gpu=this._createBuffer(t)),this._gpu}getCPUBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,i,r,s){const h=r*this.strideInt;if(!h)return 0;const n=i*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(t,n,h),u=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOrThrow"])(this.freeList.firstFit(r),"First fit region must be defined")*this.strideInt,d=h,f=u/this.strideInt-i;if(0!==s)for(let e=0;e<a.length;e++)a[e]+=s;return this._cpu.array.set(a,u),this.dirty.start=Math.min(this.dirty.start,u),this.dirty.end=Math.max(this.dirty.end,u+d),this.fillPointer=Math.max(this.fillPointer,u+d),f}free(t,i,e){const r=t*this.strideInt,s=(t+i)*this.strideInt;if(!0===e)for(let h=t;h!==t+i;h++)this._cpu.array[h*this.strideInt]=d;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,s),this.freeList.free(t,i)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const i=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["Usage"].DYNAMIC_DRAW;return"index"===this.bufferType?_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["BufferObject"].createIndex(t,i,this._cpu.array):_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["BufferObject"].createVertex(t,i,this._cpu.array)}_createComputeBuffer(t){const i=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["Usage"].DYNAMIC_DRAW,e=new Uint32Array(this.fillPointer/3);for(let r=0;r<this.fillPointer;r+=3)e[r/3]=this._cpu.array[r];return _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["BufferObject"].createIndex(t,i,e)}}


/***/ }),

/***/ "bdHb":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js ***!
  \****************************************************************************************************/
/*! exports provided: WGLFeatureView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLFeatureView", function() { return l; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../engine/brushes.js */ "Oxob");
/* harmony import */ var _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../engine/FeatureContainer.js */ "by2V");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../engine/webgl/enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("featurelayer-order-by-server-enabled");class l extends _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__["FeatureContainer"]{constructor(e,t,s,i){super(e),this._pointToCallbacks=[],this._layer=s,this._layerView=t,this._onUpdate=i}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView)}super.renderChildren(e)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(e){const s=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createResolver"])();return this._pointToCallbacks.push({point:e,resolver:s}),this.requestRender(),s.promise}onTileData(e,t){const s=a&&"orderBy"in this._layer&&this._layer.orderBy,i=(null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,r=s&&this._layerView.orderByFields===i;e.patch(t,r),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(e){const{minScale:t,maxScale:s}=this._layer,i=e.state.scale;i<=(t||1/0)&&i>=s&&super.doRender(e)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(e){if(e.rendererInfo.ddDotSize>1){const e=1;for(const t of this.children)t.stencilRef=t.key.level+e}else super.setStencilReference(e)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].label],target:()=>this.hasLabels?this.children:null,drawPhase:_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].LABEL|_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].LABEL_ALPHA}),i=e.registerRenderPass({name:"geometry",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.length,args:()=>this._pointToCallbacks}]}),a=e.registerRenderPass({name:"highlight",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],target:()=>this.children,drawPhase:_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),i,a,t]}}


/***/ }),

/***/ "gzK8":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js ***!
  \**********************************************************************************************************/
/*! exports provided: convertColorVariable, convertVisualVariables, getVisualVariableSizeValueRepresentationRatio, getVisualVariablesFields, normalizeSizeElement, normalizeSizeStops, stopToSizeStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertColorVariable", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertVisualVariables", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualVariableSizeValueRepresentationRatio", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualVariablesFields", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSizeElement", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSizeStops", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopToSizeStop", function() { return a; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../engine/webgl/color.js */ "qaIE");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../engine/webgl/visualVariablesUtils.js */ "NIRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function a(e){return{value:e.value,size:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size)}}function u(e){return e.map((e=>a(e)))}function c(e){if("string"==typeof e||"number"==typeof e)return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e);const s=e;return{type:"size",expression:s.expression,stops:u(s.stops)}}function p(e){const t=e&&e.length>0?{}:null;return t&&e.forEach((e=>{const s=e.type;e.field&&(t[s]=e.field)})),t}const f=e=>{const t=[],n=[],i=u(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];t.push(e.value),n.push(null==e.size?_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__["NAN_MAGIC_NUMBER"]:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.size))}return{values:new Float32Array(t),sizes:new Float32Array(n)}};function m(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch(Object(_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__["getTypeOfSizeVisualVariable"])(e)){case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLVVFlag"].SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLVVFlag"].SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLVVFlag"].SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...f(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLVVFlag"].SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===n.type)s.color=y(n);else if("opacity"===n.type)s.opacity=v(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function v(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function g(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function y(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return null;if(t.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;s.field=t.field;const e=t.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,g(s.colors,t,n.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const e=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,g(s.colors,t,e)}}for(let e=0;e<32;e+=4)Object(_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_2__["premultiplyAlpha"])(s.colors,e,!0);return s}


/***/ }),

/***/ "jo7+":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Geometry.js ***!
  \*******************************************************************************/
/*! exports provided: Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return c; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _FeatureDisplayList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FeatureDisplayList.js */ "98J/");
/* harmony import */ var _Buffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buffer.js */ "YeA2");
/* harmony import */ var _DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayRecordReader.js */ "n21L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const h=0,u=1;class c{constructor(e,t){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=e}destroy(){for(const[t,r]of this._vaos)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.dispose(!1);this._indexBuffer=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["destroyMaybe"])(this._indexBuffer),this._vertexBuffer=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["destroyMaybe"])(this._vertexBuffer)}insert(e,t,s){if(!e.records.byteLength)return;const i=e.stride;if(this._vertexBuffer&&this._indexBuffer){const s=e.indices.byteLength/4,f=e.vertices.byteLength/i;this._indexBuffer.ensure(s),this._vertexBuffer.ensure(f);const{vertices:n,indices:d}=e,h=_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_3__["DisplayRecordReader"].from(e.records),u=this._vertexBuffer.insert(n,0,n.byteLength/i,0),c=this._indexBuffer.insert(d,0,d.byteLength/4,u);if(h.forEach((e=>{e.indexFrom+=c,e.vertexFrom+=u})),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOrThrow"])(this._records,"Expected records to be defined").link(h),t)this._indicesInvalid=!0;else if(this._displayList){const e=h.getCursor();for(;e.next();)this._displayList.addRecord(e)}}else{const r=e.indices.byteLength/4,s=e.vertices.byteLength/i,f=i/Uint32Array.BYTES_PER_ELEMENT;this._records=_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_3__["DisplayRecordReader"].from(e.records),this._indexBuffer=new _Buffer_js__WEBPACK_IMPORTED_MODULE_2__["Buffer"]("index",r,1),this._vertexBuffer=new _Buffer_js__WEBPACK_IMPORTED_MODULE_2__["Buffer"]("vertex",s,f),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/i,0),t&&(this._indicesInvalid=!0)}}remove(e){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const r=e.indexFrom,s=e.vertexFrom;let i=e.indexCount,f=e.vertexCount;for(;e.next()&&e.id===t;)i+=e.indexCount,f+=e.vertexCount;this._indexBuffer.free(r,i),this._vertexBuffer.free(s,f,!0),this._records.delete(t)}}getVAO(e,t,r,f){if(!this._vertexBuffer||!this._indexBuffer||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._records)||!this._vertexBuffer.bufferSize)return null;const n=f?u:h;let o=this._vaos.get(n);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated)&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(o,(e=>e.dispose(!1))),o=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const c=this._indexBuffer.getGPUBuffer(e,1===n),_=this._vertexBuffer.getGPUBuffer(e);return o||(o=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["VertexArrayObject"](e,r,t,{geometry:_},c),this._vaos.set(n,o)),o}forEachCommand(e){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=_FeatureDisplayList_js__WEBPACK_IMPORTED_MODULE_1__["FeatureDisplayList"].from(this,this.geometryType,this._records.getCursor(),e)}this._displayList.forEach(e)}}_sortIndices(e){const t=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let r=0;const s=e.getCursor(),i=[],f=[],n=[];for(;s.next();)f.push(s.index),n.push(s.sortKey),i.push(s.id);f.sort(((e,t)=>{const r=n[t],s=n[e];return s===r?i[t]-i[e]:r-s}));const o=e.getCursor(),d=t?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const h of f){if(!o.seekIndex(h))throw new Error("Expected to find index");if(t){const{indexFrom:e,indexCount:t}=o;o.indexFrom=r;for(let s=0;s<t;s++)this._indexBuffer.set(r++,d.array[e+s])}else{const{vertexFrom:e,vertexCount:t}=o,s=this._vertexBuffer.strideInt,i=e*s,f=i+t*s;o.vertexFrom=r/s;for(let n=i;n<f;n++)this._vertexBuffer.set(r++,d.array[n])}}this._cursorIndexOrder=f,this._displayList=null}}


/***/ }),

/***/ "l8tk":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js ***!
  \***********************************************************************/
/*! exports provided: DEBUG_ATTR_UPDATES, createDebugLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_ATTR_UPDATES", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDebugLogger", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1;


/***/ }),

/***/ "lx5q":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/CircularArray.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const e of this._buffer)if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&s(e))return e;return null}clear(s){let e=this.dequeue();for(;Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e);)s&&s(e),e=this.dequeue()}}


/***/ }),

/***/ "mtKI":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/BufferPool.js ***!
  \***********************************************************************/
/*! exports provided: TypedBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedBuffer", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpuMapped/FreeList.js */ "Wmhs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-log-allocations");class n{constructor(t){this._array=t}get array(){return this._array}get length(){return this._array.length}static create(t){const e=_.acquire(t);return new n(e)}expand(t){const e=_.acquire(t);e.set(this._array),_.release(this._array),this._array=e}destroy(){_.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=_.acquire(this._array.byteLength);return t.set(this._array),new n(t)}}class o{constructor(){this._data=new ArrayBuffer(o.BYTE_LENGTH),this._freeList=new _cpuMapped_FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"]({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}class c{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}get _bytesTotal(){return this._pages.length*o.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,i&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>o.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const r of this._pages){const s=r.allocate(t);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s))return s}return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOrThrow"])(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,i&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t)}_addPage(){const t=new o;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}const _=new c;


/***/ }),

/***/ "wfc5":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _engine_webgl_FeatureTile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../engine/webgl/FeatureTile.js */ "PL4a");
/* harmony import */ var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/rendererUtils.js */ "tDOP");
/* harmony import */ var _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BaseTileRenderer.js */ "4xTw");
/* harmony import */ var _support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/visualVariablesUtils.js */ "gzK8");
/* harmony import */ var _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/WGLFeatureView.js */ "bdHb");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let p=class extends _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]{install(e){const t=()=>this.notifyChange("updating"),i=new _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_13__["WGLFeatureView"](this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null}fetchResource(e,t){const{url:s}=e,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:t.signal})}catch(a){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(a)?Promise.resolve({width:0,height:0}):Promise.reject(a)}}isUpdating(){var e;const i=super.isUpdating(),s=!this.featuresView||this.featuresView.isUpdating(),r=null==(e=this.featuresView)?void 0:e.hasEmptyAttributeView(),a=i||s||i&&r;return Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${a}\n  -> updatingTiles ${i}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${s}`),a}hitTest(e){return this.featuresView.hitTest(e)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const i=(Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_10__["simplifyVVRenderer"])(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=Object(_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertVisualVariables"])(i)}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["create"])(),e),i=()=>this.layerView.view.labelManager.requestUpdate();return new _engine_webgl_FeatureTile_js__WEBPACK_IMPORTED_MODULE_9__["FeatureTile"](e,t[0],t[3],this.featuresView.attributeView,i)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],p);const c=p;


/***/ })

}]);
//# sourceMappingURL=tileRenderers-SymbolTileRenderer-js.js.map