(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graphics-editingSupport-js"],{

/***/ "CJn3":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/editingSupport.js ***!
  \*********************************************************************/
/*! exports provided: applyEdits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdits", function() { return l; });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ "qNUd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(e){return e&&null!=e.applyEdits}async function l(e,t,a,i={}){let s,d;const n={edits:a,result:new Promise(((e,t)=>{s=e,d=t}))};e.emit("apply-edits",n);try{var l;const{results:d,edits:n}=await o(e,t,a,i),u=e=>e.filter((e=>!e.error)).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"]),p={edits:n,addedFeatures:u(d.addFeatureResults),updatedFeatures:u(d.updateFeatureResults),deletedFeatures:u(d.deleteFeatureResults),addedAttachments:u(d.addAttachmentResults),updatedAttachments:u(d.updateAttachmentResults),deletedAttachments:u(d.deleteAttachmentResults)};return null!=(l=d.editedFeatureResults)&&l.length&&(p.editedFeatures=d.editedFeatureResults),(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&e.emit("edits",p),s(p),d}catch(u){throw d(u),u}}async function o(e,t,r,i){if(await e.load(),!n(t))return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:d}=await u(e,r,i);return s.addFeatures.length||s.updateFeatures.length||s.deleteFeatures.length||s.addAttachments.length||s.updateAttachments.length||s.deleteAttachments.length?{edits:s,results:await t.applyEdits(s,d)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function u(e,r,i){const s=r&&(r.addFeatures||r.updateFeatures||r.deleteFeatures),d=r&&(r.addAttachments||r.updateAttachments||r.deleteAttachments);if(!r||!s&&!d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&i&&i.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&i&&i.rollbackOnFailureEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&i&&i.globalIdUsed)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!i||!i.globalIdUsed)&&d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const n={...i};if(null!=n.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(n.rollbackOnFailureEnabled=!0),!1===n.rollbackOnFailureEnabled&&"original-and-current-features"===n.returnServiceEditsOption)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&n.returnServiceEditsInSourceSR)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(n.returnServiceEditsInSourceSR&&"original-and-current-features"!==n.returnServiceEditsOption)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const l={...r};if(l.addFeatures=r&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].isCollection(r.addFeatures)?r.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=r&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].isCollection(r.updateFeatures)?r.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=r&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].isCollection(r.deleteFeatures)?r.deleteFeatures.toArray():l.deleteFeatures||[],l.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(l.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(l.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(g),l.updateFeatures=l.updateFeatures.map(g);const o=i&&i.globalIdUsed;l.addFeatures.forEach((t=>c(t,e,o))),l.updateFeatures.forEach((t=>m(t,e,o))),l.deleteFeatures.forEach((t=>h(t,e,o))),l.addAttachments.forEach((t=>y(t,e))),l.updateAttachments.forEach((t=>y(t,e)));return{edits:await f(l),options:n}}function p(e,t,r){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function c(e,t,a){p(e,t,a)}function h(e,t,a){p(e,t,a)}function m(e,t,r){if(p(e,t,r),"geometry"in e&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function y(e,t){const{feature:r,attachment:i}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!i.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!i.data&&!i.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(i.data instanceof File&&!!i.data.name)&&!i.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&i.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof i.data){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["dataComponents"])(i.data);if(e&&!e.isBase64)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function f(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map((e=>e.geometry)),i=await Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__["normalizeCentralMeridian"])(r),s=t.length,n=a.length;return i.slice(0,s).forEach(((t,a)=>e.addFeatures[a].geometry=t)),i.slice(s,s+n).forEach(((t,a)=>e.updateFeatures[a].geometry=t)),e}function g(t){const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"];return t.attributes||(t.attributes={}),a.geometry=t.geometry,a.attributes=t.attributes,a}


/***/ })

}]);
//# sourceMappingURL=graphics-editingSupport-js.js.map