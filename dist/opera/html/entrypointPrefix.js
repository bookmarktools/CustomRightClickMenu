!function(t,e,n){e[t]=e[t]||n(),"undefined"!=typeof module&&module.exports?module.exports=e[t]:"function"==typeof define&&define.amd&&define(function(){return e[t]})}("Promise","undefined"!=typeof global?global:window,function(){"use strict";var e,n,r,o,i,a,t=Object.prototype.toString,c="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(t,e,n,r){return Object.defineProperty(t,e,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(t,e,n){return t[e]=n,t}}function s(t,e){r.add(t,e),n||(n=c(r.drain))}function u(t){var e,n=typeof t;return null==t||"object"!=n&&"function"!=n||(e=t.then),"function"==typeof e&&e}function f(){for(var t=0;t<this.chain.length;t++)p(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function p(t,e,n){var r,o;try{!1===e?n.reject(t.msg):(r=!0===e?t.msg:e.call(void 0,t.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(t){n.reject(t)}}function h(t){var e=this;e.triggered||(e.triggered=!0,e.def&&(e=e.def),e.msg=t,e.state=2,0<e.chain.length&&s(f,e))}function l(t,n,r,o){for(var e=0;e<n.length;e++)!function(e){t.resolve(n[e]).then(function(t){r(e,t)},o)}(e)}function d(t){this.def=t,this.triggered=!1}function y(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new function(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}(this);this.then=function(t,e){var n={success:"function"!=typeof t||t,failure:"function"==typeof e&&e};return n.promise=new this.constructor(function(t,e){if("function"!=typeof t||"function"!=typeof e)throw TypeError("Not a function");n.resolve=t,n.reject=e}),r.chain.push(n),0!==r.state&&s(f,r),n.promise},this.catch=function(t){return this.then(void 0,t)};try{t.call(void 0,function(t){(function t(n){var r,o=this;if(!o.triggered){o.triggered=!0,o.def&&(o=o.def);try{(r=u(n))?s(function(){var e=new d(o);try{r.call(n,function(){t.apply(e,arguments)},function(){h.apply(e,arguments)})}catch(t){h.call(e,t)}}):(o.msg=n,o.state=1,0<o.chain.length&&s(f,o))}catch(t){h.call(new d(o),t)}}}).call(r,t)},function(t){h.call(r,t)})}catch(t){h.call(r,t)}}r={add:function(t,e){a=new function(t,e){this.fn=t,this.self=e,this.next=void 0}(t,e),i?i.next=a:o=a,i=a,a=void 0},drain:function(){var t=o;for(o=i=n=void 0;t;)t.fn.call(t.self),t=t.next}};var _=e({},"constructor",y,!1);return e(y.prototype=_,"__NPO__",0,!1),e(y,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(t,e){if("function"!=typeof t||"function"!=typeof e)throw TypeError("Not a function");t(n)})}),e(y,"reject",function(n){return new this(function(t,e){if("function"!=typeof t||"function"!=typeof e)throw TypeError("Not a function");e(n)})}),e(y,"all",function(e){var a=this;return"[object Array]"!=t.call(e)?a.reject(TypeError("Not an array")):0===e.length?a.resolve([]):new a(function(n,t){if("function"!=typeof n||"function"!=typeof t)throw TypeError("Not a function");var r=e.length,o=Array(r),i=0;l(a,e,function(t,e){o[t]=e,++i===r&&n(o)},t)})}),e(y,"race",function(e){var r=this;return"[object Array]"!=t.call(e)?r.reject(TypeError("Not an array")):new r(function(n,t){if("function"!=typeof n||"function"!=typeof t)throw TypeError("Not a function");l(r,e,function(t,e){n(e)},t)})}),y});var MapIterator=function(){function t(t){this._data=t,this._index=0}return t.prototype.next=function(){var t=this._data[this._index];return this._index++,t},t}(),MapPolyfill=function(){function e(t){var r=this;if(this._data=[],!(this instanceof e))throw new TypeError("Constructor requires new");if(t&&!this._isIterable(t))throw new TypeError("Passed value is not iterable");Object.defineProperty(this,"size",{get:this._getSize}),t&&Array.prototype.slice.apply(t).forEach(function(t){var e=t[0],n=t[1];r.set(e,n)})}return e.prototype.clear=function(){for(;0<this._data.length;)this._data.pop();return this},e.prototype.delete=function(t){if(void 0===t)throw new Error("No key supplied");var e=this._get(t)[0];return-1!==e&&(this._data.splice(e,1),!0)},e.prototype.entries=function(){return new MapIterator(this._data)},e.prototype.forEach=function(r,o){var i=this;if(void 0===r||"function"!=typeof r)throw new Error("Please supply a function parameter");this._data.forEach(function(t){var e=t[0],n=t[1];void 0!==o?r.apply(o,[n,e,i]):r(n,e,i)})},e.prototype.get=function(t){if(void 0===t)throw new Error("No key supplied");return this._get(t)[1]},e.prototype.has=function(t){if(void 0===t)throw new Error("No key supplied");return-1!==this._get(t)[0]},e.prototype.keys=function(){return new MapIterator(this._data.map(function(t){return t[0]}))},e.prototype.set=function(t,e){if(void 0===t)throw new Error("No key supplied");if(void 0===e)throw new Error("No value supplied");var n=this._get(t)[0];return-1!==n?this._data[n]=[t,e]:this._data.push([t,e]),this},e.prototype.values=function(){return new MapIterator(this._data.map(function(t){t[0];return t[1]}))},e.prototype._get=function(t){for(var e=0;e<this._data.length;e++){var n=this._data[e],r=n[0],o=n[1];if(r===t&&NaN!==t&&NaN!==r)return[e,o]}return[-1,void 0]},e.prototype._getSize=function(){return this._data.length},e.prototype._isIterable=function(t){return!(!Array.isArray(t)&&"string"!=typeof t&&t.toString()!==Object.prototype.toString.call(function(){return arguments}))},e}();window.Map=window.Map||MapPolyfill;var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),WeakMapPolyfill=function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t}(MapPolyfill);window.WeakMap=window.WeakMap||WeakMapPolyfill;var SetIterator=function(){function t(t){this._data=t,this._index=0}return t.prototype.next=function(){var t=this._data[this._index];return this._index++,t},t}(),SetPolyfill=function(){function n(t){var e=this;if(this._data=[],!(this instanceof n))throw new TypeError("Constructor requires new");if(t&&!this._isIterable(t))throw new TypeError("Passed value is not iterable");Object.defineProperty(this,"size",{get:this._getSize}),t&&Array.prototype.slice.apply(t).forEach(function(t){e.add(t)})}return n.prototype.add=function(t){return this.has(t)||this._data.push(t),this},n.prototype.clear=function(){for(;0<this._data.length;)this._data.pop();return this},n.prototype.delete=function(t){return!!this.has(t)&&(this._data.splice(this._data.indexOf(t,1)),!0)},n.prototype.entries=function(){return new SetIterator(this._data.map(function(t){return[t,t]}))},n.prototype.forEach=function(e,n){this._data.forEach(function(t){void 0!==n?e.apply(n,[t]):e(t)})},n.prototype.has=function(t){return-1<this._data.indexOf(t)},n.prototype.keys=function(){return this.values()},n.prototype.values=function(){return new SetIterator(this._data)},n.prototype._getSize=function(){return this._data.length},n.prototype._isIterable=function(t){return!(!Array.isArray(t)&&"string"!=typeof t&&t.toString()!==Object.prototype.toString.call(function(){return arguments}))},n}();window.Set=window.Set||SetPolyfill,function(){function getCurrentPage(){var t=location.pathname.split("/").pop();return-1<t.indexOf("options")?"options":-1<t.indexOf("logging")?"logging":-1<t.indexOf("install")?"install":"options"}function supportsClasses(){try{return eval("class TESTCLASS {}"),!0}catch(t){return!1}}var tag=document.createElement("script"),page=getCurrentPage();supportsClasses()?tag.src=page+".js":tag.src=page+".es3.js",document.addEventListener("DOMContentLoaded",function(){document.body.appendChild(tag)})}();