(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ImageryLayer-js~ImageryTileLayer-js~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2~d03e9ec2"],{

/***/ "Piei":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/PixelBlock.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var n;const p=_core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.layers.support.PixelBlock");let c=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"]{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(n.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let s=0;s<t.length;s++)t[s]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[s,i]=e,r=this.pixels,l=this.width*this.height,a=r.length;let o,h,p;const c=[];for(let u=0;u<a;u++){p=n.createEmptyBand(t,l),o=r[u];for(let t=0;t<l;t++)h=o[t],p[t]=h>i?i:h<s?s:h;c.push(p)}this.pixels=c,this.pixelType=t}extractBands(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isNone"])(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,s=t.some((t=>t>=this.pixels.length)),i=e===t.length&&!t.some(((t,e)=>t!==e));return s||i?this:new n({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new n({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const s=n.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const i=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=i?this.pixels[e].slice(0,this.pixels[e].length):new s(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:s,pixels:i}=this;if(!t||!i||!i.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let r,l,a,o;r=l=a=i[0],i.length>=3?(l=i[1],a=i[2]):2===i.length&&(l=i[1]);const h=new Uint32Array(t),n=this.width*this.height;if(r.length===n)if(e&&e.length===n)if(s)for(o=0;o<n;o++)e[o]&&(h[o]=e[o]<<24|a[o]<<16|l[o]<<8|r[o]);else for(o=0;o<n;o++)e[o]&&(h[o]=255<<24|a[o]<<16|l[o]<<8|r[o]);else for(o=0;o<n;o++)h[o]=255<<24|a[o]<<16|l[o]<<8|r[o];else p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:s,statistics:i}=this;if(!t||!e||!e.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const r=this.pixelType;let l=1,a=0,o=1;if(i&&i.length>0)a=i.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=i.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),l=255/o;else{let t=255;"s8"===r?(a=-128,t=127):"u16"===r?t=65535:"s16"===r?(a=-32768,t=32767):"u32"===r?t=4294967295:"s32"===r?(a=-2147483648,t=2147483647):"f32"===r?(a=-34e38,t=34e38):"f64"===r&&(a=-Number.MAX_VALUE,t=Number.MAX_VALUE),l=255/(t-a)}const h=new Uint32Array(t),n=this.width*this.height;let c,u,m,x,f;if(c=u=m=e[0],c.length!==n)return p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(m=e[2]),s&&s.length===n)for(x=0;x<n;x++)s[x]&&(h[x]=255<<24|(m[x]-a)*l<<16|(u[x]-a)*l<<8|(c[x]-a)*l);else for(x=0;x<n;x++)h[x]=255<<24|(m[x]-a)*l<<16|(u[x]-a)*l<<8|(c[x]-a)*l;else if(s&&s.length===n)for(x=0;x<n;x++)f=(c[x]-a)*l,s[x]&&(h[x]=255<<24|f<<16|f<<8|f);else for(x=0;x<n;x++)f=(c[x]-a)*l,h[x]=255<<24|f<<16|f<<8|f}_fillFrom32Bit(t){const{pixels:e,mask:s}=this;if(!t||!e||!e.length)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let i,r,l,a;i=r=l=e[0],e.length>=3?(r=e[1],l=e[2]):2===e.length&&(r=e[1]);const o=this.width*this.height;if(i.length!==o)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let h=0;if(s&&s.length===o)for(a=0;a<o;a++)t[h++]=i[a],t[h++]=r[a],t[h++]=l[a],t[h++]=1&s[a];else for(a=0;a<o;a++)t[h++]=i[a],t[h++]=r[a],t[h++]=l[a],t[h++]=1}_calculateBandStatistics(t,e){let s=1/0,i=-1/0;const r=t.length;let l,a=0;if(e)for(l=0;l<r;l++)e[l]&&(a=t[l],s=a<s?a:s,i=a>i?a:i);else for(l=0;l<r;l++)a=t[l],s=a<s?a:s,i=a>i?a:i;return{minValue:s,maxValue:i}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"width",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"height",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"pixelType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__["cast"])("pixelType")],c.prototype,"castPixelType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"validPixelCount",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"mask",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"maskIsAlpha",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"pixels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{write:!0}})],c.prototype,"statistics",void 0),c=n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.support.PixelBlock")],c);const u=c;


/***/ }),

/***/ "ne7T":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js ***!
  \********************************************************************************/
/*! exports provided: approximateTransform, clip, colorize, createColormapLUT, createContrastBrightnessLUT, createHistogramEqualizationLUT, createStretchLUT, estimateStatisticsFromHistograms, estimateStatisticsHistograms, extractBands, getClipBounds, getLocalArithmeticNorthRotations, isValidPixelBlock, lookupPixels, mosaic, mosaicPixelData, remapColor, resampleByMajority, setValidBoundary, split, stretch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approximateTransform", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clip", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorize", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColormapLUT", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContrastBrightnessLUT", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistogramEqualizationLUT", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStretchLUT", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStatisticsFromHistograms", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStatisticsHistograms", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractBands", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipBounds", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalArithmeticNorthRotations", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPixelBlock", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupPixels", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mosaic", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mosaicPixelData", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remapColor", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resampleByMajority", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValidBoundary", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stretch", function() { return u; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PixelBlock.js */ "Piei");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function i(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0}function l(t,e){if(null==e||!e.length||!i(t))return t;const l=t.pixels.length;return e&&e.some((t=>t>=l))||1===l&&1===e.length&&0===e[0]?t:l!==e.length||e.some(((t,e)=>t!==e))?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function o(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const n=e.sort(((t,e)=>t[0]-e[0]));let i=0;n[0][0]<0&&(i=n[0][0]);const l=Math.max(256,n[n.length-1][0]-i+1),o=new Uint8Array(4*l),r=[];let s,a=0,f=0;const h=5===n[0].length;if(l>65536)return n.forEach((t=>{r[t[0]-i]=h?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:i,alphaSpecified:h};if(t.fillUnspecified)for(s=n[f],a=s[0]-i;a<l;a++)o[4*a]=s[1],o[4*a+1]=s[2],o[4*a+2]=s[3],o[4*a+3]=h?s[4]:255,a===s[0]-i&&(s=f===n.length-1?s:n[++f]);else for(a=0;a<n.length;a++)s=n[a],f=4*(s[0]-i),o[f]=s[1],o[f+1]=s[2],o[f+2]=s[3],o[f+3]=h?s[4]:255;return{indexedColormap:o,offset:i,alphaSpecified:h}}function r(t,e){if(!i(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const n=t.clone(),l=n.pixels;let o=n.mask;const r=n.width*n.height;if(1!==l.length)return t;const{indexedColormap:s,indexed2DColormap:a,offset:f,alphaSpecified:h}=e,c=s.length-1;let u=0;const x=l[0],p=new Uint8Array(x.length),m=new Uint8Array(x.length),d=new Uint8Array(x.length);let g,y=0;if(s)if(o)for(u=0;u<r;u++)o[u]&&(y=4*(x[u]-f),y<f||y>c?o[u]=0:(p[u]=s[y],m[u]=s[y+1],d[u]=s[y+2],o[u]=s[y+3]));else{for(o=new Uint8Array(r),u=0;u<r;u++)y=4*(x[u]-f),y<f||y>c?o[u]=0:(p[u]=s[y],m[u]=s[y+1],d[u]=s[y+2],o[u]=s[y+3]);n.mask=o}else if(o)for(u=0;u<r;u++)o[u]&&(g=a[x[u]],p[u]=g[0],m[u]=g[1],d[u]=g[2],o[u]=g[3]);else{for(o=new Uint8Array(r),u=0;u<r;u++)g=a[x[u]],p[u]=g[0],m[u]=g[1],d[u]=g[2],o[u]=g[3];n.mask=o}return n.pixels=[p,m,d],n.statistics=null,n.pixelType="u8",n.maskIsAlpha=h,n}function s(t){if(!i(t))return null;t.statistics||t.updateStatistics();const{pixels:e,mask:n,pixelType:l,statistics:o}=t,r=t.width*t.height,s=e.length;let a,f,h,c,u;const x=[],p=[];let m,d,g,y,w,M,k,A,U,C;const T=256;for(c=0;c<s;c++){if(m=new Uint32Array(T),g=e[c],"u8"===l)if(a=-.5,f=255.5,n)for(u=0;u<r;u++)n[u]&&m[g[u]]++;else for(u=0;u<r;u++)m[g[u]]++;else{if(a=o[c].minValue,f=o[c].maxValue,h=(f-a)/T,d=new Uint32Array(T+1),n)for(u=0;u<r;u++)n[u]&&d[Math.floor((g[u]-a)/h)]++;else for(u=0;u<r;u++)d[Math.floor((g[u]-a)/h)]++;for(u=0;u<255;u++)m[u]=d[u];m[255]=d[255]+d[256]}for(x.push({min:a,max:f,size:T,counts:m}),y=0,w=0,A=0,u=0;u<T;u++)y+=m[u],w+=u*m[u];for(U=w/y,u=0;u<T;u++)A+=m[u]*(u-U)**2;C=Math.sqrt(A/(y-1)),h=(f-a)/T,M=(U+.5)*h+a,k=C*h,p.push({min:a,max:f,avg:M,stddev:k})}return{statistics:p,histograms:x}}function a(t){const e=[];for(let n=0;n<t.length;n++){const{min:i,max:l,size:o,counts:r}=t[n];let s=0,a=0;for(let t=0;t<o;t++)s+=r[t],a+=t*r[t];const f=a/s;let h=0;for(let t=0;t<o;t++)h+=r[t]*(t-f)**2;const c=(l-i)/o,u=(f+.5)*c+i,x=Math.sqrt(h/(s-1))*c;e.push({min:i,max:l,avg:u,stddev:x})}return e}function f(t){const{minCutOff:e,maxCutOff:n,gamma:i,pixelType:l}=t,o=t.outMin||0,r=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(l))return null;const s=e.length;let a,f,c=0;"s8"===l?c=-127:"s16"===l&&(c=-32767);let u=256;["u16","s16"].indexOf(l)>-1&&(u=65536);const x=[],p=[],m=r-o;for(a=0;a<s;a++)p[a]=n[a]-e[a],x[a]=m/(n[a]-e[a]);const d=i&&i.length>=s,g=[];if(d)for(a=0;a<s;a++)i[a]>1?i[a]>2?g[a]=6.5+(i[a]-2)**2.5:g[a]=6.5+100*(2-i[a])**4:g[a]=1;let y;const w=[];let M,k,A;if(d)for(a=0;a<s;a++){for(A=[],f=0;f<u;f++)M=f+c,y=(M-e[a])/p[a],k=1,i[a]>1&&(k-=(1/m)**(y*g[a])),M<n[a]&&M>e[a]?A[f]=Math.floor(k*m*y**(1/i[a]))+o:M>=n[a]?A[f]=r:A[f]=o;w[a]=A}else for(a=0;a<s;a++){for(A=[],f=0;f<u;f++)M=f+c,M<=e[a]?A[f]=o:M>=n[a]?A[f]=r:A[f]=Math.floor((M-e[a])/p[a]*m)+o;w[a]=A}if(null!=t.contrastOffset){const e=h(t.contrastOffset,t.brightnessOffset);for(a=0;a<s;a++)for(A=w[a],f=0;f<u;f++)A[f]=e[A[f]]}return{lut:w,offset:c}}function h(t,e){const n=Math.min(Math.max(t,-100),100),i=Math.min(Math.max(e,-100),100),l=255,o=128;let r,s;const a=new Uint8Array(256);for(r=0;r<256;r++)n>0&&n<100?s=(200*r-100*l+2*l*i)/(2*(100-n))+o:n<=0&&n>-100?s=(200*r-100*l+2*l*i)*(100+n)/2e4+o:100===n?(s=200*r-100*l+(l+1)*(100-n)+2*l*i,s=s>0?l:0):-100===n&&(s=o),a[r]=s>l?l:s<0?0:s;return a}function c(t,e=256){e=Math.min(e,256);const{size:n,counts:i}=t,l=new Uint8Array(n),o=i.reduce(((t,n)=>t+n/e),0);let r=0,s=0,a=0,f=o;for(let h=0;h<n;h++)if(a+=i[h],!(h<n-1&&a+i[h+1]<f)){for(;r<e-1&&f<a;)r++,f+=o;for(let t=s;t<=h;t++)l[t]=r;s=h+1}for(let h=s;h<n;h++)l[h]=e-1;return l}function u(t,e){if(!i(t))return null;const n=t.clone(),{pixels:l,mask:o}=n,{minCutOff:r,maxCutOff:s,gamma:a}=e,f=e.outMin||0,h=e.outMax||255,c=n.width*n.height,u=l.length;let x,p,m,d,g;const y=h-f,w=[],M=[];for(x=0;x<u;x++)M[x]=s[x]-r[x],w[x]=y/(s[x]-r[x]);const k=a&&a.length>=u,A=[];if(k)for(x=0;x<u;x++)a[x]>1?a[x]>2?A[x]=6.5+(a[x]-2)**2.5:A[x]=6.5+100*(2-a[x])**4:A[x]=1;if(k)if(null!=o){for(p=0;p<c;p++)if(o[p])for(x=0;x<u;x++)m=l[x][p],g=(m-r[x])/M[x],d=1,a[x]>1&&(d-=(1/y)**(g*A[x])),m<s[x]&&m>r[x]?l[x][p]=Math.floor(d*y*g**(1/a[x]))+f:m>=s[x]?l[x][p]=h:l[x][p]=f}else for(p=0;p<c;p++)for(x=0;x<u;x++)m=l[x][p],g=(m-r[x])/M[x],d=1,a[x]>1&&(d-=(1/y)**(g*A[x])),m<s[x]&&m>r[x]?l[x][p]=Math.floor(d*y*g**(1/a[x]))+f:m>=s[x]?l[x][p]=h:l[x][p]=f;else if(null!=o){for(p=0;p<c;p++)if(o[p])for(x=0;x<u;x++)m=l[x][p],m<s[x]&&m>r[x]?l[x][p]=Math.floor((m-r[x])/M[x]*y)+f:m>=s[x]?l[x][p]=h:l[x][p]=f}else for(p=0;p<c;p++)for(x=0;x<u;x++)m=l[x][p],m<s[x]&&m>r[x]?l[x][p]=Math.floor((m-r[x])/M[x]*y)+f:m>=s[x]?l[x][p]=h:l[x][p]=f;return n.pixelType="u8",n.updateStatistics(),n}function x(t,e){if(!i(t))return null;const{pixels:l,mask:o}=t,r=t.width*t.height,s=l.length;let a=e.lut;const{offset:f}=e;let h,c;a&&1===a[0].length&&(a=l.map((()=>a)));const u=[];let x,p,m;if(f)if(null==o)for(h=0;h<s;h++){for(x=l[h],p=a[h],m=new Uint8Array(r),c=0;c<r;c++)m[c]=p[x[c]-f];u.push(m)}else for(h=0;h<s;h++){for(x=l[h],p=a[h],m=new Uint8Array(r),c=0;c<r;c++)o[c]&&(m[c]=p[x[c]-f]);u.push(m)}else if(null==o)for(h=0;h<s;h++){for(x=l[h],p=a[h],m=new Uint8Array(r),c=0;c<r;c++)m[c]=p[x[c]];u.push(m)}else for(h=0;h<s;h++){for(x=l[h],p=a[h],m=new Uint8Array(r),c=0;c<r;c++)o[c]&&(m[c]=p[x[c]]);u.push(m)}const d=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({width:t.width,height:t.height,pixels:u,mask:o,pixelType:"u8"});return d.updateStatistics(),d}function p(t,e){if(!i(t))return null;const n=t.clone(),{pixels:l}=n,o=n.width*n.height,r=e.length,s=Math.floor(r/2),a=e[Math.floor(s)],f=l[0];let h,c,u,x,p,m,d=!1;const g=new Uint8Array(o),y=new Uint8Array(o),w=new Uint8Array(o);let M=n.mask;const k=4===e[0].mappedColor.length;for(M||(M=new Uint8Array(o),M.fill(k?255:1),n.mask=M),p=0;p<o;p++)if(M[p]){for(h=f[p],d=!1,m=s,c=a,u=0,x=r-1;x-u>1;){if(h===c.value){d=!0;break}h>c.value?u=m:x=m,m=Math.floor((u+x)/2),c=e[Math.floor(m)]}d||(h===e[u].value?(c=e[u],d=!0):h===e[x].value?(c=e[x],d=!0):h<e[u].value?(d=!1,c=null):h>e[u].value&&(h<e[x].value?(c=e[u],d=!0):x===r-1?(d=!1,c=null):(c=e[x],d=!0))),d?(g[p]=c.mappedColor[0],y[p]=c.mappedColor[1],w[p]=c.mappedColor[2],M[p]=c.mappedColor[3]):g[p]=y[p]=w[p]=M[p]=0}return n.pixels=[g,y,w],n.mask=M,n.pixelType="u8",n.maskIsAlpha=k,n}function m(t,e,n,i,l,o,r,s){return{xmin:l<=n*t?0:l<n*t+t?l-n*t:t,ymin:o<=i*e?0:o<i*e+e?o-i*e:e,xmax:l+r<=n*t?0:l+r<n*t+t?l+r-n*t:t,ymax:o+s<=i*e?0:o+s<i*e+e?o+s-i*e:e}}function d(t,n){if(!t||0===t.length)return null;const i=t.find((t=>t.pixelBlock));if(!i||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i.pixelBlock))return null;const l=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,o=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,r=.01*Math.min(l,o),s=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>r?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>r?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,s.map((t=>t.extent.xmin))),f=Math.min.apply(null,s.map((t=>t.extent.ymin))),h=Math.max.apply(null,s.map((t=>t.extent.xmax))),c=Math.max.apply(null,s.map((t=>t.extent.ymax))),u={x:Math.round((n.xmin-a)/l),y:Math.round((c-n.ymax)/o)},x={width:Math.round((h-a)/l),height:Math.round((c-f)/o)},p={width:Math.round((n.xmax-n.xmin)/l),height:Math.round((n.ymax-n.ymin)/o)};if(Math.round(x.width/i.pixelBlock.width)*Math.round(x.height/i.pixelBlock.height)!==s.length||u.x<0||u.y<0||x.width<p.width||x.height<p.height)return null;return{extent:n,pixelBlock:y(s.map((t=>t.pixelBlock)),x,{clipOffset:u,clipSize:p})}}function g(t,e,n,i,l,o){const{width:r,height:s}=n.block,{x:a,y:f}=n.offset,{width:h,height:c}=n.mosaic,u=m(r,s,i,l,a,f,h,c);let x=0,p=0;if(o){const t=o.hasGCSSShiftTransform?360:o.halfWorldWidth,e=r*o.resolutionX,n=o.startX+i*e,l=n+e;n<t&&l>t?p=o.rightPadding:n>=t&&(x=o.leftMargin-o.rightPadding,p=0)}if(u.xmax-=p,"number"!=typeof e)for(let m=u.ymin;m<u.ymax;m++){const n=(l*s+m-f)*h+(i*r-a)+x,o=m*r;for(let i=u.xmin;i<u.xmax;i++)t[n+i]=e[o+i]}else for(let m=u.ymin;m<u.ymax;m++){const n=(l*s+m-f)*h+(i*r-a)+x;for(let i=u.xmin;i<u.xmax;i++)t[n+i]=e}}function y(l,o,r={}){const{clipOffset:s,clipSize:a,alignmentInfo:f,blockWidths:h}=r;if(h)return w(l,o,{blockWidths:h});const c=l.find((t=>i(t)));if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c))return null;const u=a?a.width:o.width,x=a?a.height:o.height,p=c.width,m=c.height,d=o.width/p,y=o.height/m,M={offset:s||{x:0,y:0},mosaic:a||o,block:{width:p,height:m}},k=c.pixelType,A=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPixelArrayConstructor(k),U=c.pixels.length,C=[];let T,S;for(let t=0;t<U;t++){S=new A(u*x);for(let e=0;e<y;e++)for(let n=0;n<d;n++){const o=l[e*d+n];i(o)&&(T=o.pixels[t],g(S,T,M,n,e,f))}C.push(S)}let v;if(l.some((t=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)||t.mask&&t.mask.length>0))){v=new Uint8Array(u*x);for(let e=0;e<y;e++)for(let n=0;n<d;n++){const i=l[e*d+n],o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)?i.mask:null;g(v,o||(i?1:0),M,n,e,f)}}const B=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({width:u,height:x,pixels:C,pixelType:k,mask:v});return B.updateStatistics(),B}function w(e,l,o){const r=e.find((e=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)));if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r))return null;const s=e.some((e=>!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)||!!e.mask)),{width:a,height:f}=l,h=s?new Uint8Array(a*f):null,{blockWidths:c}=o,u=[],x=r.getPlaneCount(),p=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPixelArrayConstructor(r.pixelType);if(s)for(let t=0,n=0;t<e.length;n+=c[t],t++){const l=e[t];if(!i(l))continue;const o=l.mask;for(let e=0;e<f;e++)for(let i=0;i<c[t];i++)h[e*a+i+n]=null==o?255:o[e*l.width+i]}for(let t=0;t<x;t++){const n=new p(a*f);for(let l=0,o=0;l<e.length;o+=c[l],l++){const r=e[l];if(!i(r))continue;const s=r.pixels[t];if(null!=s)for(let t=0;t<f;t++)for(let e=0;e<c[l];e++)n[t*a+e+o]=s[t*r.width+e]}u.push(n)}const m=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({width:a,height:f,mask:h,pixels:u,pixelType:r.pixelType});return m.updateStatistics(),m}function M(t,e,n){if(!i(t))return null;const{width:l,height:o}=t,r=e.x,s=e.y,a=n.width+r,f=n.height+s;if(r<0||s<0||a>l||f>o)return t;if(0===r&&0===s&&a===l&&f===o)return t;t.mask||(t.mask=new Uint8Array(l*o));const h=t.mask;for(let i=0;i<o;i++){const t=i*l;for(let e=0;e<l;e++)h[t+e]=i<s||i>=f||e<r||e>=a?0:1}return t.updateStatistics(),t}function k(t){if(!i(t))return null;const e=t.clone(),{width:n,height:l,pixels:o,mask:r}=t,s=o[0],a=e.pixels[0];for(let i=2;i<l-1;i++){const t=new Map;for(let l=i-2;l<i+2;l++)for(let e=0;e<4;e++){const i=l*n+e;C(t,s[i],r?r[i]:1)}a[i*n]=A(t),a[i*n+1]=a[i*n+2]=a[i*n];let e=3;for(;e<n-1;e++){let l=(i-2)*n+e+1;C(t,s[l],r?r[l]:1),l=(i-1)*n+e+1,C(t,s[l],r?r[l]:1),l=i*n+e+1,C(t,s[l],r?r[l]:1),l=(i+1)*n+e+1,C(t,s[l],r?r[l]:1),l=(i-2)*n+e-3,U(t,s[l],r?r[l]:1),l=(i-1)*n+e-3,U(t,s[l],r?r[l]:1),l=i*n+e-3,U(t,s[l],r?r[l]:1),l=(i+1)*n+e-3,U(t,s[l],r?r[l]:1),a[i*n+e]=A(t)}a[i*n+e+1]=a[i*n+e]}for(let i=0;i<n;i++)a[i]=a[n+i]=a[2*n+i],a[(l-1)*n+i]=a[(l-2)*n+i];return e.updateStatistics(),e}function A(t){if(0===t.size)return 0;let e=0,n=-1,i=0;const l=t.keys();let o=l.next();for(;!o.done;)i=t.get(o.value),i>e&&(n=o.value,e=i),o=l.next();return n}function U(t,e,n){if(0===n)return;const i=t.get(e);1===i?t.delete(e):t.set(e,i-1)}function C(t,e,n){0!==n&&t.set(e,t.has(e)?t.get(e)+1:1)}function T(t,e,l){let{x:o,y:r}=e;const{width:s,height:a}=l;if(0===o&&0===r&&a===t.height&&s===t.width)return t;const{width:f,height:h}=t,c=Math.max(0,r),u=Math.max(0,o),x=Math.min(o+s,f),p=Math.min(r+a,h);if(x<0||p<0||!i(t))return null;o=Math.max(0,-o),r=Math.max(0,-r);const{pixels:m,mask:d}=t,g=s*a,y=m.length,w=[];for(let i=0;i<y;i++){const e=m[i],l=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].createEmptyBand(t.pixelType,g);for(let t=c;t<p;t++){const n=t*f;let i=(t+r-c)*s+o;for(let t=u;t<x;t++)l[i++]=e[n+t]}w.push(l)}const M=new Uint8Array(g);for(let n=c;n<p;n++){const t=n*f;let e=(n+r-c)*s+o;for(let n=u;n<x;n++)M[e++]=d?d[t+n]:1}const k=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({width:l.width,height:l.height,pixelType:t.pixelType,pixels:w,mask:M});return k.updateStatistics(),k}function S(t,e=!0){if(!i(t))return null;const{pixels:l,width:o,height:r,mask:s,pixelType:a}=t,f=[],h=Math.round(o/2),c=Math.round(r/2),u=r-1,x=o-1;for(let i=0;i<l.length;i++){const t=l[i],s=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].createEmptyBand(a,h*c);let p=0;for(let n=0;n<r;n+=2)for(let i=0;i<o;i+=2){const l=t[n*o+i];if(e){const e=i===x?l:t[n*o+i+1],r=n===u?l:t[n*o+i+o],a=i===x?r:n===u?e:t[n*o+i+o+1];s[p++]=(l+e+r+a)/4}else s[p++]=l}f.push(s)}let p=null;if(s){p=new Uint8Array(h*c);let t=0;for(let n=0;n<r;n+=2)for(let i=0;i<o;i+=2){const l=s[n*o+i];if(e){const e=i===x?l:s[n*o+i+1],r=n===u?l:s[n*o+i+o],a=i===x?r:n===u?e:s[n*o+i+o+1];p[t++]=l*e*r*a?1:0}else p[t++]=l}}return new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({width:h,height:c,pixelType:a,pixels:f,mask:p})}function v(t,e,n){if(!i(t))return null;const{width:l,height:o}=e;let{width:r,height:s}=t;const a=new Map,f={x:0,y:0},h=null==n?1:1+n;let c=t;for(let i=0;i<h;i++){const t=Math.ceil(r/l),n=Math.ceil(s/o);for(let r=0;r<n;r++){f.y=r*o;for(let n=0;n<t;n++){f.x=n*l;const t=T(c,f,e);a.set(`${i}/${r}/${n}`,t)}}i<h-1&&(c=S(c)),r=Math.round(r/2),s=Math.round(s/2)}return a}function B(t,e,n,i,l=.5){const{width:o,height:r}=t,{width:s,height:a}=e,f=i.cols,h=i.rows,c=Math.ceil(s/f-.1/f),u=Math.ceil(a/h-.1/h);let x,p,m,d,g,y,w;const M=c*f,k=M*u*h,A=new Float32Array(k),U=new Float32Array(k),C=new Uint32Array(k),T=new Uint32Array(k);let S,v,B=0;for(let b=0;b<u;b++)for(let t=0;t<c;t++){x=12*(b*c+t),p=n[x],m=n[x+1],d=n[x+2],g=n[x+3],y=n[x+4],w=n[x+5];for(let e=0;e<h;e++){B=(b*h+e)*M+t*f,v=(e+.5)/h;for(let t=0;t<e;t++)S=(t+.5)/f,A[B+t]=(p*S+m*v+d)*o-l,U[B+t]=(g*S+y*v+w)*r-l,C[B+t]=Math.round(A[B+t]),T[B+t]=Math.round(U[B+t])}x+=6,p=n[x],m=n[x+1],d=n[x+2],g=n[x+3],y=n[x+4],w=n[x+5];for(let e=0;e<h;e++){B=(b*h+e)*M+t*f,v=(e+.5)/h;for(let t=e;t<f;t++)S=(t+.5)/f,A[B+t]=(p*S+m*v+d)*o-l,U[B+t]=(g*S+y*v+w)*r-l,C[B+t]=Math.round(A[B+t]),T[B+t]=Math.round(U[B+t])}}return{offsets_x:A,offsets_y:U,offsets_xi:C,offsets_yi:T,gridWidth:M}}function b(t,e){const{coefficients:n,spacing:i}=e,{offsets_x:l,offsets_y:o,gridWidth:r}=B(t,t,n,{rows:i[0],cols:i[1]},.5),{width:s,height:a}=t,f=new Float32Array(s*a),h=180/Math.PI;for(let c=0;c<a;c++)for(let t=0;t<s;t++){const e=c*r+t,n=0===c?e:e-r,i=c===a-1?e:e+r,u=l[n]-l[i],x=o[i]-o[n];if(isNaN(u)||isNaN(x))f[c*s+t]=90;else{let e=Math.atan2(x,u)*h;e=(360+e)%360,f[c*s+t]=e}}return f}function O(t,e,l,o,r="nearest"){if(!i(t))return null;"majority"===r&&(t=k(t));const{pixels:s,mask:a,pixelType:f}=t,h=t.width,c=t.height,u=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPixelArrayConstructor(f),x=s.length,{width:p,height:m}=e;let d=!1;for(let n=0;n<l.length;n+=3)-1===l[n]&&-1===l[n+1]&&-1===l[n+2]&&(d=!0);const{offsets_x:g,offsets_y:y,offsets_xi:w,offsets_yi:M,gridWidth:A}=B({width:h,height:c},e,l,o,"majority"===r?0:.5);let U;const C=(t,e,n)=>{const i=t instanceof Float32Array||t instanceof Float64Array?0:.5;for(let l=0;l<m;l++){U=l*A;for(let o=0;o<p;o++){if(g[U]<0||y[U]<0)t[l*p+o]=0;else if(n)t[l*p+o]=e[w[U]+M[U]*h];else{const n=Math.floor(g[U]),r=Math.floor(y[U]),s=Math.ceil(g[U]),f=Math.ceil(y[U]),c=g[U]-n,u=y[U]-r;if(!a||a[n+r*h]&&a[n+r*h]&&a[n+f*h]&&a[s+f*h]){const a=(1-c)*e[n+r*h]+c*e[s+r*h],x=(1-c)*e[n+f*h]+c*e[s+f*h];t[l*p+o]=(1-u)*a+u*x+i}else t[l*p+o]=e[w[U]+M[U]*h]}U++}}},T=[];let S;for(let n=0;n<x;n++)S=new u(p*m),C(S,s[n],"nearest"===r||"majority"===r),T.push(S);const v=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({width:p,height:m,pixelType:f,pixels:T});if(a)v.mask=new Uint8Array(p*m),C(v.mask,a,!0);else if(d){v.mask=new Uint8Array(p*m);for(let t=0;t<p*m;t++)v.mask[t]=g[t]<0||y[t]<0?0:1}return v.updateStatistics(),v}


/***/ })

}]);
//# sourceMappingURL=default~ImageryLayer-js~ImageryTileLayer-js~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2~d03e9ec2.js.map