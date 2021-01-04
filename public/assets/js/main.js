(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "assets/js/" + ({}[chunkId]||chunkId) + "." + chunkId + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue, $) {'use strict';

	__webpack_require__(6);

	__webpack_require__(7);

	var _vueRouter = __webpack_require__(9);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(11);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	__webpack_require__(13);

	__webpack_require__(21);

	__webpack_require__(26);

	__webpack_require__(31);

	__webpack_require__(36);

	__webpack_require__(46);

	__webpack_require__(50);

	__webpack_require__(55);

	__webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_vueRouter2.default);

	// filters


	// components

	Vue.use(_vueResource2.default);

	var router = new _vueRouter2.default({
		// mode: 'history',

		routes: [{
			path: '/',
			component: function component(resolve) {
				return __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(61)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
			},
			children: [{
				path: '',
				name: 'home',
				component: function component(resolve) {
					return __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(64)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
				},
				meta: {
					ignoreScroll: true
				}
			}, {
				path: 'post/:id',
				name: 'post',
				component: function component(resolve) {
					return __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(70)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
				}
			}]
		}, {
			path: '/about',
			name: 'about',
			component: function component(resolve) {
				return __webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(75)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
			}
		}, {
			path: '/contacts',
			name: 'contacts',
			component: function component(resolve) {
				return __webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(78)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
			}
		}, {
			path: '*',
			redirect: '/'
		}]
	});

	new Vue({
		el: '#app-root',

		router: router,

		data: {
			aside: {
				temp: 'here'
			}
		},

		mounted: function mounted() {
			var vm = this;

			vm.$router.afterEach(function (to, from) {
				setTimeout(function () {
					var $banner = $('div:not(.fade-leave-active) > .js-banner');
					var offset = 0;

					if ($banner.length && !(to.meta && to.meta.ignoreScroll)) {
						offset = $banner.outerHeight() + $banner.offset().top - $('.js-main-header').outerHeight();
					}

					$('html, body').stop().animate({
						scrollTop: offset + 'px'
					}, 300);
				}, 10);
			});
		}
	});

	document.querySelector('.boot-loader').style.display = 'none';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v2.2.1
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e);return isNaN(t)?e:t}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Ei.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return Mi.call(e)===Pi}function p(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function d(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){var n=l(e),r=l(t);return n&&r?JSON.stringify(e)===JSON.stringify(t):!n&&!r&&String(e)===String(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=!1;return function(){t||(t=!0,e())}}function y(e){return/native code/.test(e.toString())}function _(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function b(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function $(e){if(!to.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function w(e){io.target&&oo.push(io.target),io.target=e}function C(){io.target=oo.pop()}function x(e,t){e.__proto__=t}function k(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];b(e,o,t[o])}}function A(e,t){if(l(e)){var n;return i(e,"__ob__")&&e.__ob__ instanceof lo?n=e.__ob__:uo.shouldConvert&&!Gi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new lo(e)),t&&n&&n.vmCount++,n}}function O(e,t,n,r){var i=new io,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=A(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return io.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&E(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=A(t),i.notify())}})}}function S(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(O(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function T(e,t){if(Array.isArray(e))return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function E(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&E(t)}function j(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&j(r,o):S(e,n,o);return e}function N(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function I(e,t){var n=Object.create(e||null);return t?u(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=Ni(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Ni(a),o[i]=f(r)?r:{type:r};e.props=o}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function M(e,t,n){function r(r){var i=fo[r]||po;l[r]=i(e[r],t[r],n,r)}L(t),D(t);var o=t.extends;if(o&&(e="function"==typeof o?M(e,o.options,n):M(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof ut&&(c=c.options),e=M(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function P(e,t,n,r){if("string"==typeof n){var o=e[t];if(i(o,n))return o[n];var a=Ni(n);if(i(o,a))return o[a];var s=Ii(a);if(i(o,s))return o[s];var c=o[n]||o[a]||o[s];return c}}function R(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(U(Boolean,o.type)&&(a&&!i(o,"default")?s=!1:U(String,o.type)||""!==s&&s!==Di(e)||(s=!0)),void 0===s){s=F(r,o,e);var c=uo.shouldConvert;uo.shouldConvert=!0,A(s),uo.shouldConvert=c}return s}function F(e,t,n){if(i(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==H(t.type)?r.call(e):r}}function H(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function U(e,t){if(!Array.isArray(t))return H(t)===H(e);for(var n=0,r=t.length;n<r;n++)if(H(t[n])===H(e))return!0;return!1}function B(e,t,n){if(Hi.errorHandler)Hi.errorHandler.call(null,e,t,n);else{if(!Bi||"undefined"==typeof console)throw e;console.error(e)}}function V(e){return new vo(void 0,void 0,void 0,String(e))}function z(e){var t=new vo(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function J(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=z(e[n]);return t}function K(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=0;r<n.length;r++)n[r].apply(null,e)}return t.fns=e,t}function q(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=yo(o),a&&(s?a!==s&&(s.fns=a,e[o]=s):(a.fns||(a=e[o]=K(a)),n(c.name,a,c.once,c.capture)));for(o in t)e[o]||(c=yo(o),r(c.name,t[o],c.capture))}function W(e,t,n){function i(){n.apply(this,arguments),r(o.fns,i)}var o,a=e[t];a?a.fns&&a.merged?(o=a,o.fns.push(i)):o=K([a,i]):o=K([i]),o.merged=!0,e[t]=o}function Z(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function G(e){return o(e)?[V(e)]:Array.isArray(e)?Y(e):void 0}function Y(e,t){var n,r,i,a=[];for(n=0;n<e.length;n++)r=e[n],null!=r&&"boolean"!=typeof r&&(i=a[a.length-1],Array.isArray(r)?a.push.apply(a,Y(r,(t||"")+"_"+n)):o(r)?i&&i.text?i.text+=String(r):""!==r&&a.push(V(r)):r.text&&i&&i.text?a[a.length-1]=V(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),a.push(r)));return a}function Q(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function X(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&ne(e,t)}function ee(e,t,n){n?mo.$once(e,t):mo.$on(e,t)}function te(e,t){mo.$off(e,t)}function ne(e,t,n){mo=e,q(t,n||{},ee,te,e)}function re(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function ie(e,t){var n={};if(!e)return n;for(var r,i,o=[],a=0,s=e.length;a<s;a++)if(i=e[a],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i)}else o.push(i);return o.length&&(1!==o.length||" "!==o[0].text&&!o[0].isComment)&&(n.default=o),n}function oe(e){for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];return t}function ae(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function se(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&de(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=_o;_o=n,n._vnode=e,i?n.$el=n.__patch__(i,e):n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),_o=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){de(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,de(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function ce(e,t,n){e.$el=t,e.$options.render||(e.$options.render=go),de(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new Ao(e,r,d),n=!1,null==e.$vnode&&(e._isMounted=!0,de(e,"mounted")),e}function ue(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==eo);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,t&&e.$options.props){uo.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=R(u,e.$options.props,t,e)}uo.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,ne(e,n,l)}o&&(e.$slots=ie(i,r.context),e.$forceUpdate())}function le(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function fe(e,t){if(t){if(e._directInactive=!1,le(e))return}else if(e._directInactive)return;if(e._inactive||null==e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)fe(e.$children[n]);de(e,"activated")}}function pe(e,t){if(!(t&&(e._directInactive=!0,le(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)pe(e.$children[n]);de(e,"deactivated")}}function de(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){B(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function ve(){bo.length=0,$o={},wo=Co=!1}function he(){Co=!0;var e,t,n;for(bo.sort(function(e,t){return e.id-t.id}),xo=0;xo<bo.length;xo++)e=bo[xo],t=e.id,$o[t]=null,e.run();for(xo=bo.length;xo--;)e=bo[xo],n=e.vm,n._watcher===e&&n._isMounted&&de(n,"updated");Yi&&Hi.devtools&&Yi.emit("flush"),ve()}function me(e){var t=e.id;if(null==$o[t]){if($o[t]=!0,Co){for(var n=bo.length-1;n>=0&&bo[n].id>e.id;)n--;bo.splice(Math.max(n,xo)+1,0,e)}else bo.push(e);wo||(wo=!0,Xi(he))}}function ge(e){Oo.clear(),ye(e,Oo)}function ye(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)ye(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)ye(e[r[n]],t)}}function _e(e,t,n){So.get=function(){return this[t][n]},So.set=function(e){this[t][n]=e},Object.defineProperty(e,n,So)}function be(e){e._watchers=[];var t=e.$options;t.props&&$e(e,t.props),t.methods&&Ae(e,t.methods),t.data?we(e):A(e._data={},!0),t.computed&&Ce(e,t.computed),t.watch&&Oe(e,t.watch)}function $e(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;uo.shouldConvert=o;var a=function(o){i.push(o);var a=R(o,t,n,e);O(r,o,a),o in e||_e(e,"_props",o)};for(var s in t)a(s);uo.shouldConvert=!0}function we(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||_(n[o])||_e(e,"_data",n[o]);A(t,!0)}function Ce(e,t){var n=e._computedWatchers=Object.create(null);for(var r in t){var i=t[r],o="function"==typeof i?i:i.get;n[r]=new Ao(e,o,d,To),r in e||xe(e,r,i)}}function xe(e,t,n){"function"==typeof n?(So.get=ke(t),So.set=d):(So.get=n.get?n.cache!==!1?ke(t):n.get:d,So.set=n.set?n.set:d),Object.defineProperty(e,t,So)}function ke(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),io.target&&t.depend(),t.value}}function Ae(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?d:s(t[n],e)}function Oe(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Se(e,n,r[i]);else Se(e,n,r)}}function Se(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Te(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=S,e.prototype.$delete=T,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Ao(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function Ee(e,t,n,r,i){if(e){var o=n.$options._base;if(l(e)&&(e=o.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=Pe(e,o,function(){n.$forceUpdate()}),!e)return;at(e),t=t||{},t.model&&Be(e.options,t);var a=Re(t,e);if(e.options.functional)return je(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),He(t);var c=e.options.name||i,u=new vo("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r});return u}}}function je(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var s in a)o[s]=R(s,a,t);var c=Object.create(r),u=function(e,t,n,r){return Ve(c,e,t,n,r,!0)},l=e.options.render.call(null,u,{props:o,data:n,parent:r,children:i,slots:function(){return ie(i,r)}});return l instanceof vo&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function Ne(e,t,n,r){var i=e.componentOptions,o={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},a=e.data.inlineTemplate;return a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new i.Ctor(o)}function Ie(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){var i=e.componentInstance=Ne(e,_o,n,r);i.$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var o=e;Le(o,o)}}function Le(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;ue(r,n.propsData,n.listeners,t,n.children)}function De(e){e.componentInstance._isMounted||(e.componentInstance._isMounted=!0,de(e.componentInstance,"mounted")),e.data.keepAlive&&fe(e.componentInstance,!0)}function Me(e){e.componentInstance._isDestroyed||(e.data.keepAlive?pe(e.componentInstance,!0):e.componentInstance.$destroy())}function Pe(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(l(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&"function"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function Re(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Di(s);Fe(r,o,s,c,!0)||Fe(r,i,s,c)||Fe(r,a,s,c)}return r}}function Fe(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function He(e){e.hook||(e.hook={});for(var t=0;t<jo.length;t++){var n=jo[t],r=e.hook[n],i=Eo[n];e.hook[n]=r?Ue(i,r):i}}function Ue(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function Be(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});i[r]?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}function Ve(e,t,n,r,i,a){return(Array.isArray(n)||o(n))&&(i=r,r=n,n=void 0),a&&(i=Io),ze(e,t,n,r,i)}function ze(e,t,n,r,i){if(n&&n.__ob__)return go();if(!t)return go();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===Io?r=G(r):i===No&&(r=Z(r));var o,a;if("string"==typeof t){var s;a=Hi.getTagNamespace(t),o=Hi.isReservedTag(t)?new vo(Hi.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=P(e.$options,"components",t))?Ee(s,n,e,r,t):new vo(t,n,r,void 0,void 0,e)}else o=Ee(t,n,e,r);return o?(a&&Je(o,a),o):go()}function Je(e,t){if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Je(i,t)}}function Ke(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n}function qe(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&u(n,r),i(n)||t;var o=this.$slots[e];return o||t}function We(e){return P(this.$options,"filters",e,!0)||Fi}function Ze(e,t,n){var r=Hi.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e}function Ge(e,t,n,r){if(n)if(l(n)){Array.isArray(n)&&(n=p(n));for(var i in n)if("class"===i||"style"===i)e[i]=n[i];else{var o=e.attrs&&e.attrs.type,a=r||Hi.mustUseProp(t,o,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});a[i]=n[i]}}else;return e}function Ye(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?J(n):z(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),Xe(n,"__static__"+e,!1),n)}function Qe(e,t,n){return Xe(e,"__once__"+t+(n?"_"+n:""),!0),e}function Xe(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&et(e[r],t+"_"+r,n);else et(e,t,n)}function et(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function tt(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=ie(e.$options._renderChildren,n),e.$scopedSlots=eo,e._c=function(t,n,r,i){return Ve(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ve(e,t,n,r,i,!0)}}function nt(n){n.prototype.$nextTick=function(e){return Xi(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=J(e.$slots[o]);e.$scopedSlots=i&&i.data.scopedSlots||eo,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){B(t,e,"render function"),a=e._vnode}return a instanceof vo||(a=go()),a.parent=i,a},n.prototype._o=Qe,n.prototype._n=t,n.prototype._s=e,n.prototype._l=Ke,n.prototype._t=qe,n.prototype._q=h,n.prototype._i=m,n.prototype._m=Ye,n.prototype._f=We,n.prototype._k=Ze,n.prototype._b=Ge,n.prototype._v=V,n.prototype._e=go,n.prototype._u=oe}function rt(e){var t=e.$options.provide,n=e.$options.inject;if(t&&(e._provided="function"==typeof t?t.call(e):t),n)for(var r=Array.isArray(n),i=r?n:Qi?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++)for(var a=i[o],s=r?a:n[a],c=e;c;){if(c._provided&&c._provided[s]){e[a]=c._provided[s];break}c=c.$parent}}function it(e){e.prototype._init=function(e){var t=this;t._uid=Lo++,t._isVue=!0,e&&e._isComponent?ot(t,e):t.$options=M(at(t.constructor),e||{},t),t._renderProxy=t,t._self=t,ae(t),X(t),tt(t),de(t,"beforeCreate"),be(t),rt(t),de(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function ot(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function at(e){var t=e.options;if(e.super){var n=at(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=st(e);i&&u(e.extendOptions,i),t=e.options=M(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function st(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=ct(n[i],r[i]));return t}function ct(e,t){if(Array.isArray(e)){var n=[];t=Array.isArray(t)?t:[t];for(var r=0;r<e.length;r++)t.indexOf(e[r])<0&&n.push(e[r]);return n}return e}function ut(e){this._init(e)}function lt(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),e.installed=!0,this}}}function ft(e){e.mixin=function(e){this.options=M(this.options,e)}}function pt(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=M(n.options,e),a.super=n,a.options.props&&dt(a),a.options.computed&&vt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Hi._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=u({},a.options),i[r]=a,a}}function dt(e){var t=e.options.props;for(var n in t)_e(e.prototype,"_props",n)}function vt(e){var t=e.options.computed;for(var n in t)xe(e.prototype,n,t[n])}function ht(e){Hi._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function gt(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e instanceof RegExp&&e.test(t)}function yt(e,t){for(var n in e){var r=e[n];if(r){var i=mt(r.componentOptions);i&&!t(i)&&(_t(r),e[n]=null)}}}function _t(e){e&&(e.componentInstance._inactive||de(e.componentInstance,"deactivated"),e.componentInstance.$destroy())}function bt(e){var t={};t.get=function(){return Hi},Object.defineProperty(e,"config",t),e.util={warn:no,extend:u,mergeOptions:M,defineReactive:O},e.set=S,e.delete=T,e.nextTick=Xi,e.options=Object.create(null),Hi._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,u(e.options.components,Po),lt(e),ft(e),pt(e),ht(e)}function $t(e){for(var t=e.data,n=e,r=e;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(t=wt(r.data,t));for(;n=n.parent;)n.data&&(t=wt(t,n.data));return Ct(t)}function wt(e,t){return{staticClass:xt(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ct(e){var t=e.class,n=e.staticClass;return n||t?xt(n,kt(t)):""}function xt(e,t){return e?t?e+" "+t:e:t||""}function kt(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=kt(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function At(e){return ra(e)?"svg":"math"===e?"math":void 0}function Ot(e){if(!Bi)return!0;if(oa(e))return!1;if(e=e.toLowerCase(),null!=aa[e])return aa[e];var t=document.createElement(e);return e.indexOf("-")>-1?aa[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:aa[e]=/HTMLUnknownElement/.test(t.toString())}function St(e){if("string"==typeof e){var t=document.querySelector(e);return t?t:document.createElement("div")}return e}function Tt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function Et(e,t){return document.createElementNS(ta[e],t)}function jt(e){return document.createTextNode(e)}function Nt(e){return document.createComment(e)}function It(e,t,n){e.insertBefore(t,n)}function Lt(e,t){e.removeChild(t)}function Dt(e,t){e.appendChild(t)}function Mt(e){return e.parentNode}function Pt(e){return e.nextSibling}function Rt(e){return e.tagName}function Ft(e,t){e.textContent=t}function Ht(e,t,n){e.setAttribute(t,n)}function Ut(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function Bt(e){return null==e}function Vt(e){return null!=e}function zt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function Jt(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,Vt(i)&&(o[i]=r);return o}function Kt(e){function t(e){return new vo(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0===--n.listeners&&i(e)}return n.listeners=t,n}function i(e){var t=O.parentNode(e);t&&O.removeChild(t,e)}function a(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var o=e.data,a=e.children,c=e.tag;Vt(c)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),f(e,a,t),Vt(o)&&d(e,t),l(n,e.elm,r)):e.isComment?(e.elm=O.createComment(e.text),l(n,e.elm,r)):(e.elm=O.createTextNode(e.text),l(n,e.elm,r))}}function s(e,t,n,r){var i=e.data;if(Vt(i)){var o=Vt(e.componentInstance)&&i.keepAlive;if(Vt(i=i.hook)&&Vt(i=i.init)&&i(e,!1,n,r),Vt(e.componentInstance))return c(e,t),o&&u(e,t,n,r),!0}}function c(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.componentInstance.$el,p(e)?(d(e,t),v(e)):(Ut(e),t.push(e))}function u(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,Vt(i=o.data)&&Vt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](ua,o);t.push(o);break}l(n,e.elm,r)}function l(e,t,n){e&&(n?O.insertBefore(e,t,n):O.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)a(t[r],n,e.elm,null,!0);else o(e.text)&&O.appendChild(e.elm,O.createTextNode(e.text))}function p(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return Vt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](ua,e);C=e.data.hook,Vt(C)&&(C.create&&C.create(ua,e),C.insert&&t.push(e))}function v(e){for(var t,n=e;n;)Vt(t=n.context)&&Vt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,""),n=n.parent;Vt(t=_o)&&t!==e.context&&Vt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"")}function h(e,t,n,r,i,o){for(;r<=i;++r)a(n[r],o,e,t)}function m(e){var t,n,r=e.data;if(Vt(r))for(Vt(t=r.hook)&&Vt(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(Vt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n])}function g(e,t,n,r){for(;n<=r;++n){var o=t[n];Vt(o)&&(Vt(o.tag)?(y(o),m(o)):i(o.elm))}}function y(e,t){if(t||Vt(e.data)){var n=k.remove.length+1;for(t?t.listeners+=n:t=r(e.elm,n),Vt(C=e.componentInstance)&&Vt(C=C._vnode)&&Vt(C.data)&&y(C,t),C=0;C<k.remove.length;++C)k.remove[C](e,t);Vt(C=e.data.hook)&&Vt(C=C.remove)?C(e,t):t()}else i(e.elm)}function _(e,t,n,r,i){for(var o,s,c,u,l=0,f=0,p=t.length-1,d=t[0],v=t[p],m=n.length-1,y=n[0],_=n[m],$=!i;l<=p&&f<=m;)Bt(d)?d=t[++l]:Bt(v)?v=t[--p]:zt(d,y)?(b(d,y,r),d=t[++l],y=n[++f]):zt(v,_)?(b(v,_,r),v=t[--p],_=n[--m]):zt(d,_)?(b(d,_,r),$&&O.insertBefore(e,d.elm,O.nextSibling(v.elm)),d=t[++l],_=n[--m]):zt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,d.elm),v=t[--p],y=n[++f]):(Bt(o)&&(o=Jt(t,l,p)),s=Vt(y.key)?o[y.key]:null,Bt(s)?(a(y,r,e,d.elm),y=n[++f]):(c=t[s],zt(c,y)?(b(c,y,r),t[s]=void 0,$&&O.insertBefore(e,y.elm,d.elm),y=n[++f]):(a(y,r,e,d.elm),y=n[++f])));l>p?(u=Bt(n[m+1])?null:n[m+1].elm,h(e,u,n,f,m,r)):f>m&&g(e,t,l,p)}function b(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.componentInstance=e.componentInstance);var i,o=t.data,a=Vt(o);a&&Vt(i=o.hook)&&Vt(i=i.prepatch)&&i(e,t);var s=t.elm=e.elm,c=e.children,u=t.children;if(a&&p(t)){for(i=0;i<k.update.length;++i)k.update[i](e,t);Vt(i=o.hook)&&Vt(i=i.update)&&i(e,t)}Bt(t.text)?Vt(c)&&Vt(u)?c!==u&&_(s,c,u,n,r):Vt(u)?(Vt(e.text)&&O.setTextContent(s,""),h(s,null,u,0,u.length-1,n)):Vt(c)?g(s,c,0,c.length-1):Vt(e.text)&&O.setTextContent(s,""):e.text!==t.text&&O.setTextContent(s,t.text),a&&Vt(i=o.hook)&&Vt(i=i.postpatch)&&i(e,t)}}function $(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(Vt(i)&&(Vt(C=i.hook)&&Vt(C=C.init)&&C(t,!0),Vt(C=t.componentInstance)))return c(t,n),!0;if(Vt(r)){if(Vt(o))if(e.hasChildNodes()){for(var a=!0,s=e.firstChild,u=0;u<o.length;u++){if(!s||!w(s,o[u],n)){a=!1;break}s=s.nextSibling}if(!a||s)return!1}else f(t,o,n);if(Vt(i))for(var l in i)if(!S(l)){d(t,n);break}}else e.data!==t.text&&(e.data=t.text);return!0}var C,x,k={},A=e.modules,O=e.nodeOps;for(C=0;C<la.length;++C)for(k[la[C]]=[],x=0;x<A.length;++x)void 0!==A[x][la[C]]&&k[la[C]].push(A[x][la[C]]);var S=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,o,s){if(!n)return void(e&&m(e));var c=!1,u=[];if(e){var l=Vt(e.nodeType);if(!l&&zt(e,n))b(e,n,u,i);else{if(l){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&w(e,n,u))return $(n,u,!0),e;e=t(e)}var f=e.elm,d=O.parentNode(f);if(a(n,u,f._leaveCb?null:d,O.nextSibling(f)),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(p(n))for(var h=0;h<k.create.length;++h)k.create[h](ua,n.parent)}null!==d?g(d,[e],0,0):Vt(e.tag)&&m(e)}}else c=!0,a(n,u,o,s);return $(n,u,c),n.elm}}function qt(e,t){(e.data.directives||t.data.directives)&&Wt(e,t)}function Wt(e,t){var n,r,i,o=e===ua,a=t===ua,s=Zt(e.data.directives,e.context),c=Zt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,Yt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Yt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Yt(u[n],"inserted",t,e)};o?W(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&W(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)Yt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||Yt(s[n],"unbind",e,e,a)}function Zt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=pa),n[Gt(i)]=i,i.def=P(t.$options,"directives",i.name,!0);return n}function Gt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Yt(e,t,n,r,i){var o=e.def&&e.def[t];o&&o(n.elm,e,n,r,i)}function Qt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=u({},s));for(n in s)r=s[n],i=a[n],i!==r&&Xt(o,n,r);Ji&&s.value!==a.value&&Xt(o,"value",s.value);for(n in a)null==s[n]&&(Qo(n)?o.removeAttributeNS(Yo,Xo(n)):Zo(n)||o.removeAttribute(n))}}function Xt(e,t,n){Go(t)?ea(n)?e.removeAttribute(t):e.setAttribute(t,t):Zo(t)?e.setAttribute(t,ea(n)||"false"===n?"false":"true"):Qo(t)?ea(n)?e.removeAttributeNS(Yo,Xo(t)):e.setAttributeNS(Yo,t,n):ea(n)?e.removeAttribute(t):e.setAttribute(t,n)}function en(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=$t(t),a=n._transitionClasses;a&&(o=xt(o,kt(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function tn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);m&&ma.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=nn(o,a[i]);return o}function nn(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function rn(e){console.error("[Vue compiler]: "+e);
	}function on(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function an(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function sn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function cn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function un(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function ln(e,t,n){var r=fn(e,":"+t)||fn(e,"v-bind:"+t);if(null!=r)return tn(r);if(n!==!1){var i=fn(e,t);if(null!=i)return JSON.stringify(i)}}function fn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function pn(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v",s=a;o&&(s="(typeof "+a+" === 'string'? "+a+".trim(): "+a+")"),i&&(s="_n("+s+")");var c=dn(t,s);e.model={value:"("+t+")",callback:"function ("+a+") {"+c+"}"}}function dn(e,t){var n=vn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function vn(e){if(Fo=e,Ro=Fo.length,Uo=Bo=Vo=0,e.indexOf("[")<0||e.lastIndexOf("]")<Ro-1)return{exp:e,idx:null};for(;!mn();)Ho=hn(),gn(Ho)?_n(Ho):91===Ho&&yn(Ho);return{exp:e.substring(0,Bo),idx:e.substring(Bo+1,Vo)}}function hn(){return Fo.charCodeAt(++Uo)}function mn(){return Uo>=Ro}function gn(e){return 34===e||39===e}function yn(e){var t=1;for(Bo=Uo;!mn();)if(e=hn(),gn(e))_n(e);else if(91===e&&t++,93===e&&t--,0===t){Vo=Uo;break}}function _n(e){for(var t=e;!mn()&&(e=hn(),e!==t););}function bn(e,t,n){zo=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if("select"===o)Cn(e,r,i);else if("input"===o&&"checkbox"===a)$n(e,r,i);else if("input"===o&&"radio"===a)wn(e,r,i);else if("input"===o||"textarea"===o)xn(e,r,i);else if(!Hi.isReservedTag(o))return pn(e,r,i),!1;return!0}function $n(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null",o=ln(e,"true-value")||"true",a=ln(e,"false-value")||"false";an(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),un(e,ya,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function wn(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null";i=r?"_n("+i+")":i,an(e,"checked","_q("+t+","+i+")"),un(e,ya,dn(t,i),null,!0)}function Cn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",a="var $$selectedVal = "+i+";";a=a+" "+dn(t,o),un(e,"change",a,null,!0)}function xn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ga:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=dn(t,l);c&&(f="if($event.target.composing)return;"+f),an(e,"value","("+t+")"),un(e,u,f,null,!0),(s||a||"number"===r)&&un(e,"blur","$forceUpdate()")}function kn(e){var t;e[ga]&&(t=zi?"change":"input",e[t]=[].concat(e[ga],e[t]||[]),delete e[ga]),e[ya]&&(t=Zi?"click":"change",e[t]=[].concat(e[ya],e[t]||[]),delete e[ya])}function An(e,t,n,r){if(n){var i=t,o=Jo;t=function(n){var a=1===arguments.length?i(n):i.apply(null,arguments);null!==a&&On(e,t,r,o)}}Jo.addEventListener(e,t,r)}function On(e,t,n,r){(r||Jo).removeEventListener(e,t,n)}function Sn(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};Jo=t.elm,kn(n),q(n,r,An,On,t.context)}}function Tn(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if(r=a[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==o[n]))if("value"===n){i._value=r;var s=null==r?"":String(r);En(i,t,s)&&(i.value=s)}else i[n]=r}}function En(e,t,n){return!e.composing&&("option"===t.tag||jn(e,n)||Nn(e,n))}function jn(e,t){return document.activeElement!==e&&e.value!==t}function Nn(e,n){var r=e.value,i=e._vModifiers;return i&&i.number||"number"===e.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function In(e){var t=Ln(e.style);return e.staticStyle?u(e.staticStyle,t):t}function Ln(e){return Array.isArray(e)?p(e):"string"==typeof e?$a(e):e}function Dn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=In(i.data))&&u(r,n);(n=In(e.data))&&u(r,n);for(var o=e;o=o.parent;)o.data&&(n=In(o.data))&&u(r,n);return r}function Mn(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},l=s||c,f=Ln(t.data.style)||{};t.data.style=f.__ob__?u({},f):f;var p=Dn(t,!0);for(o in l)null==p[o]&&xa(a,o,"");for(o in p)i=p[o],i!==l[o]&&xa(a,o,null==i?"":i)}}function Pn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Rn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Fn(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,Sa(e.name||"v")),u(t,e),t}return"string"==typeof e?Sa(e):void 0}}function Hn(e){Ma(function(){Ma(e)})}function Un(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Pn(e,t)}function Bn(e,t){e._transitionClasses&&r(e._transitionClasses,t),Rn(e,t)}function Vn(e,t,n){var r=zn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ea?Ia:Da,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function zn(e,t){var n,r=window.getComputedStyle(e),i=r[Na+"Delay"].split(", "),o=r[Na+"Duration"].split(", "),a=Jn(i,o),s=r[La+"Delay"].split(", "),c=r[La+"Duration"].split(", "),u=Jn(s,c),l=0,f=0;t===Ea?a>0&&(n=Ea,l=a,f=o.length):t===ja?u>0&&(n=ja,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?Ea:ja:null,f=n?n===Ea?o.length:c.length:0);var p=n===Ea&&Pa.test(r[Na+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:p}}function Jn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Kn(t)+Kn(e[n])}))}function Kn(e){return 1e3*Number(e.slice(0,-1))}function qn(e,n){var r=e.elm;r._leaveCb&&(r._leaveCb.cancelled=!0,r._leaveCb());var i=Fn(e.data.transition);if(i&&!r._enterCb&&1===r.nodeType){for(var o=i.css,a=i.type,s=i.enterClass,c=i.enterToClass,u=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,d=i.appearActiveClass,v=i.beforeEnter,h=i.enter,m=i.afterEnter,y=i.enterCancelled,_=i.beforeAppear,b=i.appear,$=i.afterAppear,w=i.appearCancelled,C=i.duration,x=_o,k=_o.$vnode;k&&k.parent;)k=k.parent,x=k.context;var A=!x._isMounted||!e.isRootInsert;if(!A||b||""===b){var O=A&&f?f:s,S=A&&d?d:u,T=A&&p?p:c,E=A?_||v:v,j=A&&"function"==typeof b?b:h,N=A?$||m:m,I=A?w||y:y,L=t(l(C)?C.enter:C),D=o!==!1&&!Ji,M=Gn(j),P=r._enterCb=g(function(){D&&(Bn(r,T),Bn(r,S)),P.cancelled?(D&&Bn(r,O),I&&I(r)):N&&N(r),r._enterCb=null});e.data.show||W(e.data.hook||(e.data.hook={}),"insert",function(){var t=r.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(r,P)}),E&&E(r),D&&(Un(r,O),Un(r,S),Hn(function(){Un(r,T),Bn(r,O),P.cancelled||M||(Zn(L)?setTimeout(P,L):Vn(r,a,P))})),e.data.show&&(n&&n(),j&&j(r,P)),D||M||P()}}}function Wn(e,n){function r(){w.cancelled||(e.data.show||((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),p&&p(i),_&&(Un(i,c),Un(i,f),Hn(function(){Un(i,u),Bn(i,c),w.cancelled||b||(Zn($)?setTimeout(w,$):Vn(i,s,w))})),d&&d(i,w),_||b||w())}var i=e.elm;i._enterCb&&(i._enterCb.cancelled=!0,i._enterCb());var o=Fn(e.data.transition);if(!o)return n();if(!i._leaveCb&&1===i.nodeType){var a=o.css,s=o.type,c=o.leaveClass,u=o.leaveToClass,f=o.leaveActiveClass,p=o.beforeLeave,d=o.leave,v=o.afterLeave,h=o.leaveCancelled,m=o.delayLeave,y=o.duration,_=a!==!1&&!Ji,b=Gn(d),$=t(l(y)?y.leave:y),w=i._leaveCb=g(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Bn(i,u),Bn(i,f)),w.cancelled?(_&&Bn(i,c),h&&h(i)):(n(),v&&v(i)),i._leaveCb=null});m?m(r):r()}}function Zn(e){return"number"==typeof e&&!isNaN(e)}function Gn(e){if(!e)return!1;var t=e.fns;return t?Gn(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Yn(e,t){t.data.show||qn(t)}function Qn(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,er(a))>-1,a.selected!==o&&(a.selected=o);else if(h(er(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Xn(e,t){for(var n=0,r=t.length;n<r;n++)if(h(er(t[n]),e))return!1;return!0}function er(e){return"_value"in e?e._value:e.value}function tr(e){e.target.composing=!0}function nr(e){e.target.composing=!1,rr(e.target,"input")}function rr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ir(e){return!e.componentInstance||e.data&&e.data.transition?e:ir(e.componentInstance._vnode)}function or(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?or(Q(t.children)):e}function ar(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Ni(o)]=i[o];return t}function sr(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function cr(e){for(;e=e.parent;)if(e.data.transition)return!0}function ur(e,t){return t.key===e.key&&t.tag===e.tag}function lr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function fr(e){e.data.newPos=e.elm.getBoundingClientRect()}function pr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function dr(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function vr(e){return Ga=Ga||document.createElement("div"),Ga.innerHTML=e,Ga.textContent}function hr(e,t){var n=t?Ms:Ds;return e.replace(n,function(e){return Ls[e]})}function mr(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(ss);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(cs))&&(o=e.match(is));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;u&&("p"===s&&es(n)&&o(s),Xa(n)&&s===n&&o(n));for(var i=l(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),p=0;p<a;p++){var d=e.attrs[p];ds&&d[0].indexOf('""')===-1&&(""===d[3]&&delete d[3],""===d[4]&&delete d[4],""===d[5]&&delete d[5]);var v=d[3]||d[4]||d[5]||"";f[p]={name:d[1],value:hr(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f}),s=n),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r){var i,o;if(null==n&&(n=f),null==r&&(r=f),e&&(o=e.toLowerCase()),e)for(i=c.length-1;i>=0&&c[i].lowerCasedTag!==o;i--);else i=0;if(i>=0){for(var a=c.length-1;a>=i;a--)t.end&&t.end(c[a].tag,n,r);c.length=i,s=i&&c[i-1].tag}else"br"===o?t.start&&t.start(e,[],!0,n,r):"p"===o&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Ri,f=0;e;){if(a=e,s&&Ns(s)){var p=s.toLowerCase(),d=Is[p]||(Is[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=0,h=e.replace(d,function(e,n,r){return v=r.length,"script"!==p&&"style"!==p&&"noscript"!==p&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,o(p,f-v,f)}else{var m=e.indexOf("<");if(0===m){if(fs.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(ps.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(ls);if(_){n(_[0].length);continue}var b=e.match(us);if(b){var $=f;n(b[0].length),o(b[1],$,f);continue}var w=r();if(w){i(w);continue}}var C=void 0,x=void 0,k=void 0;if(m>=0){for(x=e.slice(m);!(us.test(x)||ss.test(x)||fs.test(x)||ps.test(x)||(k=x.indexOf("<",1),k<0));)m+=k,x=e.slice(m);C=e.substring(0,m),n(m)}m<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===a){t.chars&&t.chars(e);break}}o()}function gr(e,t){var n=t?Fs(t):Ps;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=tn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function yr(e,t){function n(e){e.pre&&(s=!1),gs(e.tag)&&(c=!1)}vs=t.warn||rn,hs=t.getTagNamespace||Ri,ms=t.mustUseProp||Ri,gs=t.isPreTag||Ri,ys=on(t.modules,"preTransformNode"),_s=on(t.modules,"transformNode"),bs=on(t.modules,"postTransformNode"),$s=t.delimiters;var r,i,o=[],a=t.preserveWhitespace!==!1,s=!1,c=!1;return mr(e,{warn:vs,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,u){function l(e){}var f=i&&i.ns||hs(e);zi&&"svg"===f&&(a=Mr(a));var p={type:1,tag:e,attrsList:a,attrsMap:Lr(a),parent:i,children:[]};f&&(p.ns=f),Dr(p)&&!Gi()&&(p.forbidden=!0);for(var d=0;d<ys.length;d++)ys[d](p,t);if(s||(_r(p),p.pre&&(s=!0)),gs(p.tag)&&(c=!0),s)br(p);else{Cr(p),xr(p),Sr(p),$r(p),p.plain=!p.key&&!a.length,wr(p),Tr(p),Er(p);for(var v=0;v<_s.length;v++)_s[v](p,t);jr(p)}if(r?o.length||r.if&&(p.elseif||p.else)&&(l(p),Or(r,{exp:p.elseif,block:p})):(r=p,l(r)),i&&!p.forbidden)if(p.elseif||p.else)kr(p,i);else if(p.slotScope){i.plain=!1;var h=p.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[h]=p}else i.children.push(p),p.parent=i;u?n(p):(i=p,o.push(p));for(var m=0;m<bs.length;m++)bs[m](p,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!zi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?qs(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=gr(e,$s))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}}}),r}function _r(e){null!=fn(e,"v-pre")&&(e.pre=!0)}function br(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function $r(e){var t=ln(e,"key");t&&(e.key=t)}function wr(e){var t=ln(e,"ref");t&&(e.ref=t,e.refInFor=Nr(e))}function Cr(e){var t;if(t=fn(e,"v-for")){var n=t.match(Us);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Bs);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function xr(e){var t=fn(e,"v-if");if(t)e.if=t,Or(e,{exp:t,block:e});else{null!=fn(e,"v-else")&&(e.else=!0);var n=fn(e,"v-else-if");n&&(e.elseif=n)}}function kr(e,t){var n=Ar(t.children);n&&n.if&&Or(n,{exp:e.elseif,block:e})}function Ar(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Or(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Sr(e){var t=fn(e,"v-once");null!=t&&(e.once=!0)}function Tr(e){if("slot"===e.tag)e.slotName=ln(e,"name");else{var t=ln(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=fn(e,"scope"))}}function Er(e){var t;(t=ln(e,"is"))&&(e.component=t),null!=fn(e,"inline-template")&&(e.inlineTemplate=!0)}function jr(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Hs.test(r))if(e.hasBindings=!0,s=Ir(r),s&&(r=r.replace(Ks,"")),Vs.test(r))r=r.replace(Vs,""),o=tn(o),c=!1,s&&(s.prop&&(c=!0,r=Ni(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&(r=Ni(r))),c||ms(e.tag,e.attrsMap.type,r)?an(e,r,o):sn(e,r,o);else if(zs.test(r))r=r.replace(zs,""),un(e,r,o,s);else{r=r.replace(Hs,"");var l=r.match(Js);l&&(a=l[1])&&(r=r.slice(0,-(a.length+1))),cn(e,r,i,o,a,s)}else sn(e,r,JSON.stringify(o))}function Nr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Ir(e){var t=e.match(Ks);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Lr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Dr(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Mr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ws.test(r.name)||(r.name=r.name.replace(Zs,""),t.push(r))}return t}function Pr(e,t){e&&(ws=Gs(t.staticKeys||""),Cs=t.isReservedTag||Ri,Fr(e),Hr(e,!1))}function Rr(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Fr(e){if(e.static=Br(e),1===e.type){if(!Cs(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Fr(r),r.static||(e.static=!1)}}}function Hr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Hr(e.children[n],t||!!e.for);e.ifConditions&&Ur(e.ifConditions,t)}}function Ur(e,t){for(var n=1,r=e.length;n<r;n++)Hr(e[n].block,t)}function Br(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Ti(e.tag)||!Cs(e.tag)||Vr(e)||!Object.keys(e).every(ws))))}function Vr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function zr(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+Jr(r,e[r])+",";return n.slice(0,-1)+"}"}function Jr(e,t){if(t){if(Array.isArray(t))return"["+t.map(function(t){return Jr(e,t)}).join(",")+"]";if(t.modifiers){var n="",r=[];for(var i in t.modifiers)tc[i]?n+=tc[i]:r.push(i);r.length&&(n=Kr(r)+n);var o=Qs.test(t.value)?t.value+"($event)":t.value;return"function($event){"+n+o+"}"}return Ys.test(t.value)||Qs.test(t.value)?t.value:"function($event){"+t.value+"}"}return"function(){}"}function Kr(e){return"if("+e.map(qr).join("&&")+")return null;"}function qr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Xs[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Wr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Zr(e,t){var n=Ts,r=Ts=[],i=Es;Es=0,js=t,xs=t.warn||rn,ks=on(t.modules,"transformCode"),As=on(t.modules,"genData"),Os=t.directives||{},Ss=t.isReservedTag||Ri;var o=e?Gr(e):'_c("div")';return Ts=n,Es=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Gr(e){if(e.staticRoot&&!e.staticProcessed)return Yr(e);if(e.once&&!e.onceProcessed)return Qr(e);if(e.for&&!e.forProcessed)return ti(e);if(e.if&&!e.ifProcessed)return Xr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return di(e);var t;if(e.component)t=vi(e.component,e);else{var n=e.plain?void 0:ni(e),r=e.inlineTemplate?null:si(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<ks.length;i++)t=ks[i](e,t);return t}return si(e)||"void 0"}function Yr(e){return e.staticProcessed=!0,Ts.push("with(this){return "+Gr(e)+"}"),"_m("+(Ts.length-1)+(e.staticInFor?",true":"")+")"}function Qr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Xr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Gr(e)+","+Es++ +(t?","+t:"")+")":Gr(e)}return Yr(e)}function Xr(e){return e.ifProcessed=!0,ei(e.ifConditions.slice())}function ei(e){function t(e){return e.once?Qr(e):Gr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+ei(e):""+t(n.block)}function ti(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Gr(e)+"})"}function ni(e){var t="{",n=ri(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<As.length;r++)t+=As[r](e);if(e.attrs&&(t+="attrs:{"+hi(e.attrs)+"},"),e.props&&(t+="domProps:{"+hi(e.props)+"},"),e.events&&(t+=zr(e.events)+","),e.nativeEvents&&(t+=zr(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=oi(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+"},"),e.inlineTemplate){var i=ii(e);i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function ri(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=Os[i.name]||nc[i.name];c&&(o=!!c(e,i,xs)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function ii(e){var t=e.children[0];if(1===t.type){var n=Zr(t,js);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function oi(e){return"scopedSlots:_u(["+Object.keys(e).map(function(t){return ai(t,e[t])}).join(",")+"])"}function ai(e,t){return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?si(t)||"void 0":Gr(t))+"}]"}function si(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return Gr(r);var i=ci(n);return"["+n.map(fi).join(",")+"]"+(t&&i?","+i:"")}}function ci(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(1===r.type){if(ui(r)||r.ifConditions&&r.ifConditions.some(function(e){return ui(e.block)})){t=2;break}(li(r)||r.ifConditions&&r.ifConditions.some(function(e){return li(e.block)}))&&(t=1)}}return t}function ui(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function li(e){return!Ss(e.tag)}function fi(e){return 1===e.type?Gr(e):pi(e)}function pi(e){return"_v("+(2===e.type?e.expression:mi(JSON.stringify(e.text)))+")"}function di(e){var t=e.slotName||'"default"',n=si(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return Ni(e.name)+":"+e.value}).join(",")+"}",o=e.attrsMap["v-bind"];return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")"}function vi(e,t){var n=t.inlineTemplate?null:si(t,!0);return"_c("+e+","+ni(t)+(n?","+n:"")+")"}function hi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+mi(r.value)+","}return t.slice(0,-1)}function mi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function gi(e,t){var n=yr(e.trim(),t);Pr(n,t);var r=Zr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function yi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),d}}function _i(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n){n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=u(Object.create(e.directives),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=gi(t,r);return s.errors=i,s.tips=o,s}function n(e,n,i){n=n||{};var o=n.delimiters?String(n.delimiters)+e:e;if(r[o])return r[o];var a=t(e,n),s={},c=[];s.render=yi(a.render,c);var u=a.staticRenderFns.length;s.staticRenderFns=new Array(u);for(var l=0;l<u;l++)s.staticRenderFns[l]=yi(a.staticRenderFns[l],c);return r[o]=s}var r=Object.create(null);return{compile:t,compileToFunctions:n}}function bi(e,t){var n=(t.warn||rn,fn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=ln(e,"class",!1);r&&(e.classBinding=r)}function $i(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function wi(e,t){var n=(t.warn||rn,fn(e,"style"));n&&(e.staticStyle=JSON.stringify($a(n)));var r=ln(e,"style",!1);r&&(e.styleBinding=r)}function Ci(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function xi(e,t){t.value&&an(e,"textContent","_s("+t.value+")")}function ki(e,t){t.value&&an(e,"innerHTML","_s("+t.value+")")}function Ai(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Oi,Si,Ti=n("slot,component",!0),Ei=Object.prototype.hasOwnProperty,ji=/-(\w)/g,Ni=a(function(e){return e.replace(ji,function(e,t){return t?t.toUpperCase():""})}),Ii=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Li=/([^-])([A-Z])/g,Di=a(function(e){return e.replace(Li,"$1-$2").replace(Li,"$1-$2").toLowerCase()}),Mi=Object.prototype.toString,Pi="[object Object]",Ri=function(){return!1},Fi=function(e){return e},Hi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ri,isUnknownElement:Ri,getTagNamespace:d,parsePlatformTagName:Fi,mustUseProp:Ri,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},Ui="__proto__"in{},Bi="undefined"!=typeof window,Vi=Bi&&window.navigator.userAgent.toLowerCase(),zi=Vi&&/msie|trident/.test(Vi),Ji=Vi&&Vi.indexOf("msie 9.0")>0,Ki=Vi&&Vi.indexOf("edge/")>0,qi=Vi&&Vi.indexOf("android")>0,Wi=Vi&&/iphone|ipad|ipod|ios/.test(Vi),Zi=Vi&&/chrome\/\d+/.test(Vi)&&!Ki,Gi=function(){return void 0===Oi&&(Oi=!Bi&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Oi},Yi=Bi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Qi="undefined"!=typeof Symbol&&y(Symbol)&&"undefined"!=typeof Reflect&&y(Reflect.ownKeys),Xi=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&y(Promise)){var i=Promise.resolve(),o=function(e){console.error(e)};t=function(){i.then(e).catch(o),Wi&&setTimeout(d)}}else if("undefined"==typeof MutationObserver||!y(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){o=e})}}();Si="undefined"!=typeof Set&&y(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var eo=Object.freeze({}),to=/[^\w.$]/,no=d,ro=0,io=function(){this.id=ro++,this.subs=[]};io.prototype.addSub=function(e){this.subs.push(e)},io.prototype.removeSub=function(e){r(this.subs,e)},io.prototype.depend=function(){io.target&&io.target.addDep(this)},io.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},io.target=null;var oo=[],ao=Array.prototype,so=Object.create(ao);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ao[e];b(so,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var co=Object.getOwnPropertyNames(so),uo={shouldConvert:!0,isSettingProps:!1},lo=function(e){if(this.value=e,this.dep=new io,this.vmCount=0,b(e,"__ob__",this),Array.isArray(e)){var t=Ui?x:k;t(e,so,co),this.observeArray(e)}else this.walk(e)};lo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)O(e,t[n],e[t[n]])},lo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)A(e[t])};var fo=Hi.optionMergeStrategies;fo.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?j(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return j(t.call(this),e.call(this))}:t:e},Hi._lifecycleHooks.forEach(function(e){fo[e]=N}),Hi._assetTypes.forEach(function(e){fo[e+"s"]=I}),fo.watch=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},fo.props=fo.methods=fo.computed=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var po=function(e,t){return void 0===t?e:t},vo=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},ho={child:{}};ho.child.get=function(){return this.componentInstance},Object.defineProperties(vo.prototype,ho);var mo,go=function(){var e=new vo;return e.text="",e.isComment=!0,e},yo=a(function(e){var t="~"===e.charAt(0);e=t?e.slice(1):e;var n="!"===e.charAt(0);return e=n?e.slice(1):e,{name:e,once:t,capture:n}}),_o=null,bo=[],$o={},wo=!1,Co=!1,xo=0,ko=0,Ao=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ko,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Si,this.newDepIds=new Si,this.expression="","function"==typeof t?this.getter=t:(this.getter=$(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ao.prototype.get=function(){w(this);var e,t=this.vm;if(this.user)try{e=this.getter.call(t,t)}catch(e){B(e,t,'getter for watcher "'+this.expression+'"')}else e=this.getter.call(t,t);return this.deep&&ge(e),C(),this.cleanupDeps(),e},Ao.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Ao.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Ao.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():me(this)},Ao.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){B(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Ao.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ao.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Ao.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Oo=new Si,So={enumerable:!0,configurable:!0,get:d,set:d},To={lazy:!0},Eo={init:Ie,prepatch:Le,insert:De,destroy:Me},jo=Object.keys(Eo),No=1,Io=2,Lo=0;it(ut),Te(ut),re(ut),
	se(ut),nt(ut);var Do=[String,RegExp],Mo={name:"keep-alive",abstract:!0,props:{include:Do,exclude:Do},created:function(){this.cache=Object.create(null)},destroyed:function(){var e=this;for(var t in e.cache)_t(e.cache[t])},watch:{include:function(e){yt(this.cache,function(t){return gt(e,t)})},exclude:function(e){yt(this.cache,function(t){return!gt(e,t)})}},render:function(){var e=Q(this.$slots.default),t=e&&e.componentOptions;if(t){var n=mt(t);if(n&&(this.include&&!gt(this.include,n)||this.exclude&&gt(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,e.data.keepAlive=!0}return e}},Po={KeepAlive:Mo};bt(ut),Object.defineProperty(ut.prototype,"$isServer",{get:Gi}),ut.version="2.2.1";var Ro,Fo,Ho,Uo,Bo,Vo,zo,Jo,Ko,qo=n("input,textarea,option,select"),Wo=function(e,t,n){return"value"===n&&qo(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Zo=n("contenteditable,draggable,spellcheck"),Go=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Yo="http://www.w3.org/1999/xlink",Qo=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Xo=function(e){return Qo(e)?e.slice(6,e.length):""},ea=function(e){return null==e||e===!1},ta={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},na=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),ra=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ia=function(e){return"pre"===e},oa=function(e){return na(e)||ra(e)},aa=Object.create(null),sa=Object.freeze({createElement:Tt,createElementNS:Et,createTextNode:jt,createComment:Nt,insertBefore:It,removeChild:Lt,appendChild:Dt,parentNode:Mt,nextSibling:Pt,tagName:Rt,setTextContent:Ft,setAttribute:Ht}),ca={create:function(e,t){Ut(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ut(e,!0),Ut(t))},destroy:function(e){Ut(e,!0)}},ua=new vo("",{},[]),la=["create","activate","update","remove","destroy"],fa={create:qt,update:qt,destroy:function(e){qt(e,ua)}},pa=Object.create(null),da=[ca,fa],va={create:Qt,update:Qt},ha={create:en,update:en},ma=/[\w).+\-_$\]]/,ga="__r",ya="__c",_a={create:Sn,update:Sn},ba={create:Tn,update:Tn},$a=a(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),wa=/^--/,Ca=/\s*!important$/,xa=function(e,t,n){wa.test(t)?e.style.setProperty(t,n):Ca.test(n)?e.style.setProperty(t,n.replace(Ca,""),"important"):e.style[Aa(t)]=n},ka=["Webkit","Moz","ms"],Aa=a(function(e){if(Ko=Ko||document.createElement("div"),e=Ni(e),"filter"!==e&&e in Ko.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ka.length;n++){var r=ka[n]+t;if(r in Ko.style)return r}}),Oa={create:Mn,update:Mn},Sa=a(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ta=Bi&&!Ji,Ea="transition",ja="animation",Na="transition",Ia="transitionend",La="animation",Da="animationend";Ta&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Na="WebkitTransition",Ia="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(La="WebkitAnimation",Da="webkitAnimationEnd"));var Ma=Bi&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Pa=/\b(transform|all)(,|$)/,Ra=Bi?{create:Yn,activate:Yn,remove:function(e,t){e.data.show?t():Wn(e,t)}}:{},Fa=[va,ha,_a,ba,Oa,Ra],Ha=Fa.concat(da),Ua=Kt({nodeOps:sa,modules:Ha});Ji&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&rr(e,"input")});var Ba={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Qn(e,t,n.context)};r(),(zi||Ki)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(qi||(e.addEventListener("compositionstart",tr),e.addEventListener("compositionend",nr)),Ji&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Qn(e,t,n.context);var r=e.multiple?t.value.some(function(t){return Xn(t,e.options)}):t.value!==t.oldValue&&Xn(t.value,e.options);r&&rr(e,"change")}}},Va={bind:function(e,t,n){var r=t.value;n=ir(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!Ji?(n.data.show=!0,qn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=ir(n);var o=n.data&&n.data.transition;o&&!Ji?(n.data.show=!0,r?qn(n,function(){e.style.display=e.__vOriginalDisplay}):Wn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},za={model:Ba,show:Va},Ja={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Ka={name:"transition",props:Ja,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(cr(this.$vnode))return i;var a=or(i);if(!a)return i;if(this._leaving)return sr(e,i);var s="__transition-"+this._uid+"-";a.key=null==a.key?s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ar(this),l=this._vnode,f=or(l);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),f&&f.data&&!ur(a,f)){var p=f&&(f.data.transition=u({},c));if("out-in"===r)return this._leaving=!0,W(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),sr(e,i);if("in-out"===r){var d,v=function(){d()};W(c,"afterEnter",v),W(c,"enterCancelled",v),W(p,"delayLeave",function(e){d=e})}}return i}}},qa=u({tag:String,moveClass:String},Ja);delete qa.mode;var Wa={props:qa,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ar(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(lr),e.forEach(fr),e.forEach(pr);var n=document.body;n.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Un(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ia,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ia,e),n._moveCb=null,Bn(n,t))})}})}},methods:{hasMove:function(e,t){if(!Ta)return!1;if(null!=this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Rn(n,e)}),Pn(n,t),n.style.display="none",this.$el.appendChild(n);var r=zn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Za={Transition:Ka,TransitionGroup:Wa};ut.config.mustUseProp=Wo,ut.config.isReservedTag=oa,ut.config.getTagNamespace=At,ut.config.isUnknownElement=Ot,u(ut.options.directives,za),u(ut.options.components,Za),ut.prototype.__patch__=Bi?Ua:d,ut.prototype.$mount=function(e,t){return e=e&&Bi?St(e):void 0,ce(this,e,t)},setTimeout(function(){Hi.devtools&&Yi&&Yi.emit("init",ut)},0);var Ga,Ya=!!Bi&&dr("\n","&#10;"),Qa=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),Xa=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),es=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),ts=/([^\s"'<>\/=]+)/,ns=/(?:=)/,rs=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],is=new RegExp("^\\s*"+ts.source+"(?:\\s*("+ns.source+")\\s*(?:"+rs.join("|")+"))?"),os="[a-zA-Z_][\\w\\-\\.]*",as="((?:"+os+"\\:)?"+os+")",ss=new RegExp("^<"+as),cs=/^\s*(\/?)>/,us=new RegExp("^<\\/"+as+"[^>]*>"),ls=/^<!DOCTYPE [^>]+>/i,fs=/^<!--/,ps=/^<!\[/,ds=!1;"x".replace(/x(.)?/g,function(e,t){ds=""===t});var vs,hs,ms,gs,ys,_s,bs,$s,ws,Cs,xs,ks,As,Os,Ss,Ts,Es,js,Ns=n("script,style",!0),Is={},Ls={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},Ds=/&(?:lt|gt|quot|amp);/g,Ms=/&(?:lt|gt|quot|amp|#10);/g,Ps=/\{\{((?:.|\n)+?)\}\}/g,Rs=/[-.*+?^${}()|[\]\/\\]/g,Fs=a(function(e){var t=e[0].replace(Rs,"\\$&"),n=e[1].replace(Rs,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Hs=/^v-|^@|^:/,Us=/(.*?)\s+(?:in|of)\s+(.*)/,Bs=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Vs=/^:|^v-bind:/,zs=/^@|^v-on:/,Js=/:(.*)$/,Ks=/\.[^.]+/g,qs=a(vr),Ws=/^xmlns:NS\d+/,Zs=/^NS\d+:/,Gs=a(Rr),Ys=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Qs=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Xs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ec=function(e){return"if("+e+")return null;"},tc={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ec("$event.target !== $event.currentTarget"),ctrl:ec("!$event.ctrlKey"),shift:ec("!$event.shiftKey"),alt:ec("!$event.altKey"),meta:ec("!$event.metaKey"),left:ec("$event.button !== 0"),middle:ec("$event.button !== 1"),right:ec("$event.button !== 2")},nc={bind:Wr,cloak:d},rc={staticKeys:["staticClass"],transformNode:bi,genData:$i},ic={staticKeys:["staticStyle"],transformNode:wi,genData:Ci},oc=[rc,ic],ac={model:bn,text:xi,html:ki},sc={expectHTML:!0,modules:oc,directives:ac,isPreTag:ia,isUnaryTag:Qa,mustUseProp:Wo,isReservedTag:oa,getTagNamespace:At,staticKeys:v(oc)},cc=_i(sc),uc=cc.compileToFunctions,lc=a(function(e){var t=St(e);return t&&t.innerHTML}),fc=ut.prototype.$mount;return ut.prototype.$mount=function(e,t){if(e=e&&St(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=lc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Ai(e));if(r){var i=uc(r,{shouldDecodeNewlines:Ya,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return fc.call(this,e,t)},ut.compile=uc,ut});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*! object-fit-polyfill - 2015-11-04 */!function(window,document){"use strict";var supports=function(){var div=document.createElement("div"),vendors="Khtml Ms O Moz Webkit".split(" "),len=vendors.length;return function(prop){if(prop in div.style)return!0;for(prop=prop.replace(/^[a-z]/,function(val){return val.toUpperCase()});len--;)if(vendors[len]+prop in div.style)return!0;return!1}}(),copyComputedStyle=function(from,to){var computed_style_object=!1;if(computed_style_object=from.currentStyle||document.defaultView.getComputedStyle(from,null),!computed_style_object)return null;var stylePropertyValid=function(name,value){return"undefined"!=typeof value&&"object"!=typeof value&&"function"!=typeof value&&value.length>0&&value!=parseInt(value)};for(var property in computed_style_object)stylePropertyValid(property,computed_style_object[property])&&(to.style[property]=computed_style_object[property])};if(supports("object-fit")===!1)for(var oDiv,sSource,oImages=document.querySelectorAll("[data-object-fit]"),nKey=0;nKey<oImages.length;nKey++){switch(oDiv=document.createElement("div"),sSource=oImages[nKey].getAttribute("data-src-retina")?oImages[nKey].getAttribute("data-src-retina"):oImages[nKey].getAttribute("data-src")?oImages[nKey].getAttribute("data-src"):oImages[nKey].src,copyComputedStyle(oImages[nKey],oDiv),oDiv.style.display="block",oDiv.style.backgroundImage="url("+sSource+")",oDiv.style.backgroundPosition="center center",oDiv.style.className=oImages[nKey].className,oDiv.style.backgroundRepeat="no-repeat",oImages[nKey].getAttribute("data-object-fit")){case"cover":oDiv.style.backgroundSize="cover";break;case"contain":oDiv.style.backgroundSize="contain";break;case"fill":oDiv.style.backgroundSize="100% 100%";break;case"none":oDiv.style.backgroundSize="auto"}oImages[nKey].parentNode.replaceChild(oDiv,oImages[nKey])}}(window,document);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?camelCase&localIdentName=[name]__[local]___[hash:base64:5]!../../node_modules/postcss-loader/index.js!../../node_modules/stylus-loader/index.js?resolve url!./index.styl", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?camelCase&localIdentName=[name]__[local]___[hash:base64:5]!../../node_modules/postcss-loader/index.js!../../node_modules/stylus-loader/index.js?resolve url!./index.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "[grid] {\n  margin-left: auto;\n  margin-right: auto;\n}\n[grid~=\"fluid\"] {\n  padding-left: 13px;\n  padding-right: 13px;\n}\n[grid-row] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n[grid-row]:not([grid-row~=\"narrow\"]):not([grid-col]) {\n  margin-left: -13px;\n  margin-right: -13px;\n}\n.is-ie [grid-row] {\n  font-size: 0;\n}\n[grid-col~=\"max\"] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n[grid-col] {\n  margin-left: 13px;\n  margin-right: 13px;\n}\n.is-ie [grid-col] {\n  display: inline-block;\n  font-size: 1rem;\n}\n[grid-row~=\"narrow\"] > [grid-col] {\n  margin-left: 0;\n  margin-right: 0;\n}\n[grid-row~='justify-start'] {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.is-ie [grid-row~='justify-start'] {\n  text-align: left;\n}\n[grid-row~='justify-end'] {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.is-ie [grid-row~='justify-end'] {\n  text-align: right;\n}\n[grid-row~='justify-center'] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.is-ie [grid-row~='justify-center'] {\n  text-align: center;\n}\n[grid-row~='justify-between'] {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.is-ie [grid-row~='justify-between'] {\n  text-align: justify;\n  -webkit-text-align-last: justify;\n  text-align-last: justify;\n}\n[grid-row~='justify-around'] {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.is-ie [grid-row~='justify-around'] {\n  text-align: justify;\n}\n[grid-row~='align-start'] {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.is-ie [grid-row~='align-start'] > [grid-col] {\n  vertical-align: top;\n}\n[grid-row~='align-end'] {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.is-ie [grid-row~='align-end'] > [grid-col] {\n  vertical-align: bottom;\n}\n[grid-row~='align-center'] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.is-ie [grid-row~='align-center'] > [grid-col] {\n  vertical-align: middle;\n}\n[grid-row~='align-baseline'] {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n.is-ie [grid-row~='align-baseline'] > [grid-col] {\n  vertical-align: middle;\n}\n[grid-row~='align-stretch'] {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n.is-ie [grid-row~='align-stretch'] > [grid-col] {\n  vertical-align: top;\n}\n[grid-row~='content-start'] {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n[grid-row~='content-end'] {\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n}\n[grid-row~='content-center'] {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n[grid-row~='content-between'] {\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n[grid-row~='content-around'] {\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n}\n[grid-row~='content-stretch'] {\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n}\n[grid-row~='direction-row'] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n[grid-row~='direction-row-reverse'] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n[grid-row~='direction-column'] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n[grid-row~='direction-column-reverse'] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n[grid-row~='nowrap'] {\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n[grid-row~='wrap'] {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n[grid-row~='wrap-reverse'] {\n  -ms-flex-wrap: wrap-reverse;\n      flex-wrap: wrap-reverse;\n}\n@media screen and (min-width: 0) {\n  [grid]:not([grid~=\"fluid\"]) {\n    max-width: none;\n  }\n  [grid-col~='xs-order-1'] {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  [grid-col~='xs-1'] {\n    width: calc(100% / 12 * 1 - 26px);\n    max-width: calc(100% / 12 * 1 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-1'] {\n    width: calc(100% / 12 * 1);\n    max-width: calc(100% / 12 * 1);\n  }\n  [grid-row~='xs-1'] > [grid-col=\"\"] {\n    width: calc(100% / 1 - 26px);\n    max-width: calc(100% / 1 - 26px);\n  }\n  [grid-row~='xs-1'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 1);\n    max-width: calc(100% / 1);\n  }\n  [grid-col~='xs-order-2'] {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  [grid-col~='xs-2'] {\n    width: calc(100% / 12 * 2 - 26px);\n    max-width: calc(100% / 12 * 2 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-2'] {\n    width: calc(100% / 12 * 2);\n    max-width: calc(100% / 12 * 2);\n  }\n  [grid-row~='xs-2'] > [grid-col=\"\"] {\n    width: calc(100% / 2 - 26px);\n    max-width: calc(100% / 2 - 26px);\n  }\n  [grid-row~='xs-2'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 2);\n    max-width: calc(100% / 2);\n  }\n  [grid-col~='xs-order-3'] {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  [grid-col~='xs-3'] {\n    width: calc(100% / 12 * 3 - 26px);\n    max-width: calc(100% / 12 * 3 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-3'] {\n    width: calc(100% / 12 * 3);\n    max-width: calc(100% / 12 * 3);\n  }\n  [grid-row~='xs-3'] > [grid-col=\"\"] {\n    width: calc(100% / 3 - 26px);\n    max-width: calc(100% / 3 - 26px);\n  }\n  [grid-row~='xs-3'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 3);\n    max-width: calc(100% / 3);\n  }\n  [grid-col~='xs-order-4'] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  [grid-col~='xs-4'] {\n    width: calc(100% / 12 * 4 - 26px);\n    max-width: calc(100% / 12 * 4 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-4'] {\n    width: calc(100% / 12 * 4);\n    max-width: calc(100% / 12 * 4);\n  }\n  [grid-row~='xs-4'] > [grid-col=\"\"] {\n    width: calc(100% / 4 - 26px);\n    max-width: calc(100% / 4 - 26px);\n  }\n  [grid-row~='xs-4'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 4);\n    max-width: calc(100% / 4);\n  }\n  [grid-col~='xs-order-5'] {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  [grid-col~='xs-5'] {\n    width: calc(100% / 12 * 5 - 26px);\n    max-width: calc(100% / 12 * 5 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-5'] {\n    width: calc(100% / 12 * 5);\n    max-width: calc(100% / 12 * 5);\n  }\n  [grid-row~='xs-5'] > [grid-col=\"\"] {\n    width: calc(100% / 5 - 26px);\n    max-width: calc(100% / 5 - 26px);\n  }\n  [grid-row~='xs-5'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 5);\n    max-width: calc(100% / 5);\n  }\n  [grid-col~='xs-order-6'] {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  [grid-col~='xs-6'] {\n    width: calc(100% / 12 * 6 - 26px);\n    max-width: calc(100% / 12 * 6 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-6'] {\n    width: calc(100% / 12 * 6);\n    max-width: calc(100% / 12 * 6);\n  }\n  [grid-row~='xs-6'] > [grid-col=\"\"] {\n    width: calc(100% / 6 - 26px);\n    max-width: calc(100% / 6 - 26px);\n  }\n  [grid-row~='xs-6'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 6);\n    max-width: calc(100% / 6);\n  }\n  [grid-col~='xs-order-7'] {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  [grid-col~='xs-7'] {\n    width: calc(100% / 12 * 7 - 26px);\n    max-width: calc(100% / 12 * 7 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-7'] {\n    width: calc(100% / 12 * 7);\n    max-width: calc(100% / 12 * 7);\n  }\n  [grid-row~='xs-7'] > [grid-col=\"\"] {\n    width: calc(100% / 7 - 26px);\n    max-width: calc(100% / 7 - 26px);\n  }\n  [grid-row~='xs-7'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 7);\n    max-width: calc(100% / 7);\n  }\n  [grid-col~='xs-order-8'] {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  [grid-col~='xs-8'] {\n    width: calc(100% / 12 * 8 - 26px);\n    max-width: calc(100% / 12 * 8 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-8'] {\n    width: calc(100% / 12 * 8);\n    max-width: calc(100% / 12 * 8);\n  }\n  [grid-row~='xs-8'] > [grid-col=\"\"] {\n    width: calc(100% / 8 - 26px);\n    max-width: calc(100% / 8 - 26px);\n  }\n  [grid-row~='xs-8'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 8);\n    max-width: calc(100% / 8);\n  }\n  [grid-col~='xs-order-9'] {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  [grid-col~='xs-9'] {\n    width: calc(100% / 12 * 9 - 26px);\n    max-width: calc(100% / 12 * 9 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-9'] {\n    width: calc(100% / 12 * 9);\n    max-width: calc(100% / 12 * 9);\n  }\n  [grid-row~='xs-9'] > [grid-col=\"\"] {\n    width: calc(100% / 9 - 26px);\n    max-width: calc(100% / 9 - 26px);\n  }\n  [grid-row~='xs-9'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 9);\n    max-width: calc(100% / 9);\n  }\n  [grid-col~='xs-order-10'] {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  [grid-col~='xs-10'] {\n    width: calc(100% / 12 * 10 - 26px);\n    max-width: calc(100% / 12 * 10 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-10'] {\n    width: calc(100% / 12 * 10);\n    max-width: calc(100% / 12 * 10);\n  }\n  [grid-row~='xs-10'] > [grid-col=\"\"] {\n    width: calc(100% / 10 - 26px);\n    max-width: calc(100% / 10 - 26px);\n  }\n  [grid-row~='xs-10'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 10);\n    max-width: calc(100% / 10);\n  }\n  [grid-col~='xs-order-11'] {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  [grid-col~='xs-11'] {\n    width: calc(100% / 12 * 11 - 26px);\n    max-width: calc(100% / 12 * 11 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-11'] {\n    width: calc(100% / 12 * 11);\n    max-width: calc(100% / 12 * 11);\n  }\n  [grid-row~='xs-11'] > [grid-col=\"\"] {\n    width: calc(100% / 11 - 26px);\n    max-width: calc(100% / 11 - 26px);\n  }\n  [grid-row~='xs-11'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 11);\n    max-width: calc(100% / 11);\n  }\n  [grid-col~='xs-order-12'] {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  [grid-col~='xs-12'] {\n    width: calc(100% / 12 * 12 - 26px);\n    max-width: calc(100% / 12 * 12 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xs-12'] {\n    width: calc(100% / 12 * 12);\n    max-width: calc(100% / 12 * 12);\n  }\n  [grid-row~='xs-12'] > [grid-col=\"\"] {\n    width: calc(100% / 12 - 26px);\n    max-width: calc(100% / 12 - 26px);\n  }\n  [grid-row~='xs-12'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 12);\n    max-width: calc(100% / 12);\n  }\n  [grid-row~='justify-start-xs'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-xs'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-xs'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-xs'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-xs'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-xs'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-xs'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-xs'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-xs'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-xs'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-xs'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-xs'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-xs'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-xs'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-xs'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-xs'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-xs'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-xs'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-xs'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-xs'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-xs'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-xs'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-xs'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-xs'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-xs'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-xs'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-xs'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-xs'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-xs'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-xs'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-xs'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-xs'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-xs'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 0) and (max-width: 575px) {\n  [grid-row~='justify-start-only-xs'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-only-xs'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-only-xs'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-only-xs'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-only-xs'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-only-xs'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-only-xs'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-only-xs'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-only-xs'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-only-xs'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-only-xs'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-only-xs'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-only-xs'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-only-xs'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-only-xs'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-only-xs'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-only-xs'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-only-xs'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-only-xs'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-only-xs'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-only-xs'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-only-xs'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-only-xs'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-only-xs'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-only-xs'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-only-xs'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-only-xs'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-only-xs'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-only-xs'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-only-xs'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-only-xs'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-only-xs'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-only-xs'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n  [grid] {\n    padding-left: 13px;\n    padding-right: 13px;\n  }\n}\n@media screen and (min-width: 576px) {\n  [grid]:not([grid~=\"fluid\"]) {\n    max-width: 540px;\n  }\n  [grid-col~='sm-order-1'] {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  [grid-col~='sm-1'] {\n    width: calc(100% / 12 * 1 - 26px);\n    max-width: calc(100% / 12 * 1 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-1'] {\n    width: calc(100% / 12 * 1);\n    max-width: calc(100% / 12 * 1);\n  }\n  [grid-row~='sm-1'] > [grid-col=\"\"] {\n    width: calc(100% / 1 - 26px);\n    max-width: calc(100% / 1 - 26px);\n  }\n  [grid-row~='sm-1'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 1);\n    max-width: calc(100% / 1);\n  }\n  [grid-col~='sm-order-2'] {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  [grid-col~='sm-2'] {\n    width: calc(100% / 12 * 2 - 26px);\n    max-width: calc(100% / 12 * 2 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-2'] {\n    width: calc(100% / 12 * 2);\n    max-width: calc(100% / 12 * 2);\n  }\n  [grid-row~='sm-2'] > [grid-col=\"\"] {\n    width: calc(100% / 2 - 26px);\n    max-width: calc(100% / 2 - 26px);\n  }\n  [grid-row~='sm-2'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 2);\n    max-width: calc(100% / 2);\n  }\n  [grid-col~='sm-order-3'] {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  [grid-col~='sm-3'] {\n    width: calc(100% / 12 * 3 - 26px);\n    max-width: calc(100% / 12 * 3 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-3'] {\n    width: calc(100% / 12 * 3);\n    max-width: calc(100% / 12 * 3);\n  }\n  [grid-row~='sm-3'] > [grid-col=\"\"] {\n    width: calc(100% / 3 - 26px);\n    max-width: calc(100% / 3 - 26px);\n  }\n  [grid-row~='sm-3'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 3);\n    max-width: calc(100% / 3);\n  }\n  [grid-col~='sm-order-4'] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  [grid-col~='sm-4'] {\n    width: calc(100% / 12 * 4 - 26px);\n    max-width: calc(100% / 12 * 4 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-4'] {\n    width: calc(100% / 12 * 4);\n    max-width: calc(100% / 12 * 4);\n  }\n  [grid-row~='sm-4'] > [grid-col=\"\"] {\n    width: calc(100% / 4 - 26px);\n    max-width: calc(100% / 4 - 26px);\n  }\n  [grid-row~='sm-4'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 4);\n    max-width: calc(100% / 4);\n  }\n  [grid-col~='sm-order-5'] {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  [grid-col~='sm-5'] {\n    width: calc(100% / 12 * 5 - 26px);\n    max-width: calc(100% / 12 * 5 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-5'] {\n    width: calc(100% / 12 * 5);\n    max-width: calc(100% / 12 * 5);\n  }\n  [grid-row~='sm-5'] > [grid-col=\"\"] {\n    width: calc(100% / 5 - 26px);\n    max-width: calc(100% / 5 - 26px);\n  }\n  [grid-row~='sm-5'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 5);\n    max-width: calc(100% / 5);\n  }\n  [grid-col~='sm-order-6'] {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  [grid-col~='sm-6'] {\n    width: calc(100% / 12 * 6 - 26px);\n    max-width: calc(100% / 12 * 6 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-6'] {\n    width: calc(100% / 12 * 6);\n    max-width: calc(100% / 12 * 6);\n  }\n  [grid-row~='sm-6'] > [grid-col=\"\"] {\n    width: calc(100% / 6 - 26px);\n    max-width: calc(100% / 6 - 26px);\n  }\n  [grid-row~='sm-6'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 6);\n    max-width: calc(100% / 6);\n  }\n  [grid-col~='sm-order-7'] {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  [grid-col~='sm-7'] {\n    width: calc(100% / 12 * 7 - 26px);\n    max-width: calc(100% / 12 * 7 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-7'] {\n    width: calc(100% / 12 * 7);\n    max-width: calc(100% / 12 * 7);\n  }\n  [grid-row~='sm-7'] > [grid-col=\"\"] {\n    width: calc(100% / 7 - 26px);\n    max-width: calc(100% / 7 - 26px);\n  }\n  [grid-row~='sm-7'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 7);\n    max-width: calc(100% / 7);\n  }\n  [grid-col~='sm-order-8'] {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  [grid-col~='sm-8'] {\n    width: calc(100% / 12 * 8 - 26px);\n    max-width: calc(100% / 12 * 8 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-8'] {\n    width: calc(100% / 12 * 8);\n    max-width: calc(100% / 12 * 8);\n  }\n  [grid-row~='sm-8'] > [grid-col=\"\"] {\n    width: calc(100% / 8 - 26px);\n    max-width: calc(100% / 8 - 26px);\n  }\n  [grid-row~='sm-8'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 8);\n    max-width: calc(100% / 8);\n  }\n  [grid-col~='sm-order-9'] {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  [grid-col~='sm-9'] {\n    width: calc(100% / 12 * 9 - 26px);\n    max-width: calc(100% / 12 * 9 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-9'] {\n    width: calc(100% / 12 * 9);\n    max-width: calc(100% / 12 * 9);\n  }\n  [grid-row~='sm-9'] > [grid-col=\"\"] {\n    width: calc(100% / 9 - 26px);\n    max-width: calc(100% / 9 - 26px);\n  }\n  [grid-row~='sm-9'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 9);\n    max-width: calc(100% / 9);\n  }\n  [grid-col~='sm-order-10'] {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  [grid-col~='sm-10'] {\n    width: calc(100% / 12 * 10 - 26px);\n    max-width: calc(100% / 12 * 10 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-10'] {\n    width: calc(100% / 12 * 10);\n    max-width: calc(100% / 12 * 10);\n  }\n  [grid-row~='sm-10'] > [grid-col=\"\"] {\n    width: calc(100% / 10 - 26px);\n    max-width: calc(100% / 10 - 26px);\n  }\n  [grid-row~='sm-10'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 10);\n    max-width: calc(100% / 10);\n  }\n  [grid-col~='sm-order-11'] {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  [grid-col~='sm-11'] {\n    width: calc(100% / 12 * 11 - 26px);\n    max-width: calc(100% / 12 * 11 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-11'] {\n    width: calc(100% / 12 * 11);\n    max-width: calc(100% / 12 * 11);\n  }\n  [grid-row~='sm-11'] > [grid-col=\"\"] {\n    width: calc(100% / 11 - 26px);\n    max-width: calc(100% / 11 - 26px);\n  }\n  [grid-row~='sm-11'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 11);\n    max-width: calc(100% / 11);\n  }\n  [grid-col~='sm-order-12'] {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  [grid-col~='sm-12'] {\n    width: calc(100% / 12 * 12 - 26px);\n    max-width: calc(100% / 12 * 12 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='sm-12'] {\n    width: calc(100% / 12 * 12);\n    max-width: calc(100% / 12 * 12);\n  }\n  [grid-row~='sm-12'] > [grid-col=\"\"] {\n    width: calc(100% / 12 - 26px);\n    max-width: calc(100% / 12 - 26px);\n  }\n  [grid-row~='sm-12'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 12);\n    max-width: calc(100% / 12);\n  }\n  [grid-row~='justify-start-sm'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-sm'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-sm'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-sm'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-sm'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-sm'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-sm'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-sm'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-sm'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-sm'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-sm'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-sm'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-sm'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-sm'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-sm'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-sm'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-sm'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-sm'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-sm'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-sm'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-sm'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-sm'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-sm'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-sm'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-sm'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-sm'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-sm'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-sm'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-sm'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-sm'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-sm'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-sm'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-sm'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 576px) and (max-width: 767px) {\n  [grid-row~='justify-start-only-sm'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-only-sm'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-only-sm'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-only-sm'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-only-sm'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-only-sm'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-only-sm'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-only-sm'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-only-sm'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-only-sm'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-only-sm'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-only-sm'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-only-sm'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-only-sm'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-only-sm'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-only-sm'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-only-sm'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-only-sm'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-only-sm'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-only-sm'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-only-sm'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-only-sm'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-only-sm'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-only-sm'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-only-sm'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-only-sm'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-only-sm'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-only-sm'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-only-sm'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-only-sm'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-only-sm'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-only-sm'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-only-sm'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 768px) {\n  [grid]:not([grid~=\"fluid\"]) {\n    max-width: 720px;\n  }\n  [grid-col~='md-order-1'] {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  [grid-col~='md-1'] {\n    width: calc(100% / 12 * 1 - 26px);\n    max-width: calc(100% / 12 * 1 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-1'] {\n    width: calc(100% / 12 * 1);\n    max-width: calc(100% / 12 * 1);\n  }\n  [grid-row~='md-1'] > [grid-col=\"\"] {\n    width: calc(100% / 1 - 26px);\n    max-width: calc(100% / 1 - 26px);\n  }\n  [grid-row~='md-1'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 1);\n    max-width: calc(100% / 1);\n  }\n  [grid-col~='md-order-2'] {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  [grid-col~='md-2'] {\n    width: calc(100% / 12 * 2 - 26px);\n    max-width: calc(100% / 12 * 2 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-2'] {\n    width: calc(100% / 12 * 2);\n    max-width: calc(100% / 12 * 2);\n  }\n  [grid-row~='md-2'] > [grid-col=\"\"] {\n    width: calc(100% / 2 - 26px);\n    max-width: calc(100% / 2 - 26px);\n  }\n  [grid-row~='md-2'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 2);\n    max-width: calc(100% / 2);\n  }\n  [grid-col~='md-order-3'] {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  [grid-col~='md-3'] {\n    width: calc(100% / 12 * 3 - 26px);\n    max-width: calc(100% / 12 * 3 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-3'] {\n    width: calc(100% / 12 * 3);\n    max-width: calc(100% / 12 * 3);\n  }\n  [grid-row~='md-3'] > [grid-col=\"\"] {\n    width: calc(100% / 3 - 26px);\n    max-width: calc(100% / 3 - 26px);\n  }\n  [grid-row~='md-3'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 3);\n    max-width: calc(100% / 3);\n  }\n  [grid-col~='md-order-4'] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  [grid-col~='md-4'] {\n    width: calc(100% / 12 * 4 - 26px);\n    max-width: calc(100% / 12 * 4 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-4'] {\n    width: calc(100% / 12 * 4);\n    max-width: calc(100% / 12 * 4);\n  }\n  [grid-row~='md-4'] > [grid-col=\"\"] {\n    width: calc(100% / 4 - 26px);\n    max-width: calc(100% / 4 - 26px);\n  }\n  [grid-row~='md-4'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 4);\n    max-width: calc(100% / 4);\n  }\n  [grid-col~='md-order-5'] {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  [grid-col~='md-5'] {\n    width: calc(100% / 12 * 5 - 26px);\n    max-width: calc(100% / 12 * 5 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-5'] {\n    width: calc(100% / 12 * 5);\n    max-width: calc(100% / 12 * 5);\n  }\n  [grid-row~='md-5'] > [grid-col=\"\"] {\n    width: calc(100% / 5 - 26px);\n    max-width: calc(100% / 5 - 26px);\n  }\n  [grid-row~='md-5'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 5);\n    max-width: calc(100% / 5);\n  }\n  [grid-col~='md-order-6'] {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  [grid-col~='md-6'] {\n    width: calc(100% / 12 * 6 - 26px);\n    max-width: calc(100% / 12 * 6 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-6'] {\n    width: calc(100% / 12 * 6);\n    max-width: calc(100% / 12 * 6);\n  }\n  [grid-row~='md-6'] > [grid-col=\"\"] {\n    width: calc(100% / 6 - 26px);\n    max-width: calc(100% / 6 - 26px);\n  }\n  [grid-row~='md-6'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 6);\n    max-width: calc(100% / 6);\n  }\n  [grid-col~='md-order-7'] {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  [grid-col~='md-7'] {\n    width: calc(100% / 12 * 7 - 26px);\n    max-width: calc(100% / 12 * 7 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-7'] {\n    width: calc(100% / 12 * 7);\n    max-width: calc(100% / 12 * 7);\n  }\n  [grid-row~='md-7'] > [grid-col=\"\"] {\n    width: calc(100% / 7 - 26px);\n    max-width: calc(100% / 7 - 26px);\n  }\n  [grid-row~='md-7'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 7);\n    max-width: calc(100% / 7);\n  }\n  [grid-col~='md-order-8'] {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  [grid-col~='md-8'] {\n    width: calc(100% / 12 * 8 - 26px);\n    max-width: calc(100% / 12 * 8 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-8'] {\n    width: calc(100% / 12 * 8);\n    max-width: calc(100% / 12 * 8);\n  }\n  [grid-row~='md-8'] > [grid-col=\"\"] {\n    width: calc(100% / 8 - 26px);\n    max-width: calc(100% / 8 - 26px);\n  }\n  [grid-row~='md-8'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 8);\n    max-width: calc(100% / 8);\n  }\n  [grid-col~='md-order-9'] {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  [grid-col~='md-9'] {\n    width: calc(100% / 12 * 9 - 26px);\n    max-width: calc(100% / 12 * 9 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-9'] {\n    width: calc(100% / 12 * 9);\n    max-width: calc(100% / 12 * 9);\n  }\n  [grid-row~='md-9'] > [grid-col=\"\"] {\n    width: calc(100% / 9 - 26px);\n    max-width: calc(100% / 9 - 26px);\n  }\n  [grid-row~='md-9'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 9);\n    max-width: calc(100% / 9);\n  }\n  [grid-col~='md-order-10'] {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  [grid-col~='md-10'] {\n    width: calc(100% / 12 * 10 - 26px);\n    max-width: calc(100% / 12 * 10 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-10'] {\n    width: calc(100% / 12 * 10);\n    max-width: calc(100% / 12 * 10);\n  }\n  [grid-row~='md-10'] > [grid-col=\"\"] {\n    width: calc(100% / 10 - 26px);\n    max-width: calc(100% / 10 - 26px);\n  }\n  [grid-row~='md-10'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 10);\n    max-width: calc(100% / 10);\n  }\n  [grid-col~='md-order-11'] {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  [grid-col~='md-11'] {\n    width: calc(100% / 12 * 11 - 26px);\n    max-width: calc(100% / 12 * 11 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-11'] {\n    width: calc(100% / 12 * 11);\n    max-width: calc(100% / 12 * 11);\n  }\n  [grid-row~='md-11'] > [grid-col=\"\"] {\n    width: calc(100% / 11 - 26px);\n    max-width: calc(100% / 11 - 26px);\n  }\n  [grid-row~='md-11'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 11);\n    max-width: calc(100% / 11);\n  }\n  [grid-col~='md-order-12'] {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  [grid-col~='md-12'] {\n    width: calc(100% / 12 * 12 - 26px);\n    max-width: calc(100% / 12 * 12 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='md-12'] {\n    width: calc(100% / 12 * 12);\n    max-width: calc(100% / 12 * 12);\n  }\n  [grid-row~='md-12'] > [grid-col=\"\"] {\n    width: calc(100% / 12 - 26px);\n    max-width: calc(100% / 12 - 26px);\n  }\n  [grid-row~='md-12'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 12);\n    max-width: calc(100% / 12);\n  }\n  [grid-row~='justify-start-md'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-md'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-md'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-md'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-md'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-md'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-md'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-md'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-md'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-md'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-md'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-md'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-md'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-md'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-md'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-md'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-md'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-md'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-md'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-md'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-md'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-md'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-md'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-md'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-md'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-md'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-md'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-md'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-md'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-md'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-md'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-md'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-md'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  [grid-row~='justify-start-only-md'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-only-md'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-only-md'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-only-md'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-only-md'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-only-md'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-only-md'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-only-md'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-only-md'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-only-md'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-only-md'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-only-md'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-only-md'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-only-md'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-only-md'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-only-md'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-only-md'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-only-md'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-only-md'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-only-md'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-only-md'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-only-md'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-only-md'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-only-md'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-only-md'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-only-md'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-only-md'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-only-md'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-only-md'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-only-md'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-only-md'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-only-md'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-only-md'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 992px) {\n  [grid]:not([grid~=\"fluid\"]) {\n    max-width: 960px;\n  }\n  [grid-col~='lg-order-1'] {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  [grid-col~='lg-1'] {\n    width: calc(100% / 12 * 1 - 26px);\n    max-width: calc(100% / 12 * 1 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-1'] {\n    width: calc(100% / 12 * 1);\n    max-width: calc(100% / 12 * 1);\n  }\n  [grid-row~='lg-1'] > [grid-col=\"\"] {\n    width: calc(100% / 1 - 26px);\n    max-width: calc(100% / 1 - 26px);\n  }\n  [grid-row~='lg-1'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 1);\n    max-width: calc(100% / 1);\n  }\n  [grid-col~='lg-order-2'] {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  [grid-col~='lg-2'] {\n    width: calc(100% / 12 * 2 - 26px);\n    max-width: calc(100% / 12 * 2 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-2'] {\n    width: calc(100% / 12 * 2);\n    max-width: calc(100% / 12 * 2);\n  }\n  [grid-row~='lg-2'] > [grid-col=\"\"] {\n    width: calc(100% / 2 - 26px);\n    max-width: calc(100% / 2 - 26px);\n  }\n  [grid-row~='lg-2'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 2);\n    max-width: calc(100% / 2);\n  }\n  [grid-col~='lg-order-3'] {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  [grid-col~='lg-3'] {\n    width: calc(100% / 12 * 3 - 26px);\n    max-width: calc(100% / 12 * 3 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-3'] {\n    width: calc(100% / 12 * 3);\n    max-width: calc(100% / 12 * 3);\n  }\n  [grid-row~='lg-3'] > [grid-col=\"\"] {\n    width: calc(100% / 3 - 26px);\n    max-width: calc(100% / 3 - 26px);\n  }\n  [grid-row~='lg-3'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 3);\n    max-width: calc(100% / 3);\n  }\n  [grid-col~='lg-order-4'] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  [grid-col~='lg-4'] {\n    width: calc(100% / 12 * 4 - 26px);\n    max-width: calc(100% / 12 * 4 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-4'] {\n    width: calc(100% / 12 * 4);\n    max-width: calc(100% / 12 * 4);\n  }\n  [grid-row~='lg-4'] > [grid-col=\"\"] {\n    width: calc(100% / 4 - 26px);\n    max-width: calc(100% / 4 - 26px);\n  }\n  [grid-row~='lg-4'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 4);\n    max-width: calc(100% / 4);\n  }\n  [grid-col~='lg-order-5'] {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  [grid-col~='lg-5'] {\n    width: calc(100% / 12 * 5 - 26px);\n    max-width: calc(100% / 12 * 5 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-5'] {\n    width: calc(100% / 12 * 5);\n    max-width: calc(100% / 12 * 5);\n  }\n  [grid-row~='lg-5'] > [grid-col=\"\"] {\n    width: calc(100% / 5 - 26px);\n    max-width: calc(100% / 5 - 26px);\n  }\n  [grid-row~='lg-5'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 5);\n    max-width: calc(100% / 5);\n  }\n  [grid-col~='lg-order-6'] {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  [grid-col~='lg-6'] {\n    width: calc(100% / 12 * 6 - 26px);\n    max-width: calc(100% / 12 * 6 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-6'] {\n    width: calc(100% / 12 * 6);\n    max-width: calc(100% / 12 * 6);\n  }\n  [grid-row~='lg-6'] > [grid-col=\"\"] {\n    width: calc(100% / 6 - 26px);\n    max-width: calc(100% / 6 - 26px);\n  }\n  [grid-row~='lg-6'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 6);\n    max-width: calc(100% / 6);\n  }\n  [grid-col~='lg-order-7'] {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  [grid-col~='lg-7'] {\n    width: calc(100% / 12 * 7 - 26px);\n    max-width: calc(100% / 12 * 7 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-7'] {\n    width: calc(100% / 12 * 7);\n    max-width: calc(100% / 12 * 7);\n  }\n  [grid-row~='lg-7'] > [grid-col=\"\"] {\n    width: calc(100% / 7 - 26px);\n    max-width: calc(100% / 7 - 26px);\n  }\n  [grid-row~='lg-7'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 7);\n    max-width: calc(100% / 7);\n  }\n  [grid-col~='lg-order-8'] {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  [grid-col~='lg-8'] {\n    width: calc(100% / 12 * 8 - 26px);\n    max-width: calc(100% / 12 * 8 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-8'] {\n    width: calc(100% / 12 * 8);\n    max-width: calc(100% / 12 * 8);\n  }\n  [grid-row~='lg-8'] > [grid-col=\"\"] {\n    width: calc(100% / 8 - 26px);\n    max-width: calc(100% / 8 - 26px);\n  }\n  [grid-row~='lg-8'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 8);\n    max-width: calc(100% / 8);\n  }\n  [grid-col~='lg-order-9'] {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  [grid-col~='lg-9'] {\n    width: calc(100% / 12 * 9 - 26px);\n    max-width: calc(100% / 12 * 9 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-9'] {\n    width: calc(100% / 12 * 9);\n    max-width: calc(100% / 12 * 9);\n  }\n  [grid-row~='lg-9'] > [grid-col=\"\"] {\n    width: calc(100% / 9 - 26px);\n    max-width: calc(100% / 9 - 26px);\n  }\n  [grid-row~='lg-9'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 9);\n    max-width: calc(100% / 9);\n  }\n  [grid-col~='lg-order-10'] {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  [grid-col~='lg-10'] {\n    width: calc(100% / 12 * 10 - 26px);\n    max-width: calc(100% / 12 * 10 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-10'] {\n    width: calc(100% / 12 * 10);\n    max-width: calc(100% / 12 * 10);\n  }\n  [grid-row~='lg-10'] > [grid-col=\"\"] {\n    width: calc(100% / 10 - 26px);\n    max-width: calc(100% / 10 - 26px);\n  }\n  [grid-row~='lg-10'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 10);\n    max-width: calc(100% / 10);\n  }\n  [grid-col~='lg-order-11'] {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  [grid-col~='lg-11'] {\n    width: calc(100% / 12 * 11 - 26px);\n    max-width: calc(100% / 12 * 11 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-11'] {\n    width: calc(100% / 12 * 11);\n    max-width: calc(100% / 12 * 11);\n  }\n  [grid-row~='lg-11'] > [grid-col=\"\"] {\n    width: calc(100% / 11 - 26px);\n    max-width: calc(100% / 11 - 26px);\n  }\n  [grid-row~='lg-11'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 11);\n    max-width: calc(100% / 11);\n  }\n  [grid-col~='lg-order-12'] {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  [grid-col~='lg-12'] {\n    width: calc(100% / 12 * 12 - 26px);\n    max-width: calc(100% / 12 * 12 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='lg-12'] {\n    width: calc(100% / 12 * 12);\n    max-width: calc(100% / 12 * 12);\n  }\n  [grid-row~='lg-12'] > [grid-col=\"\"] {\n    width: calc(100% / 12 - 26px);\n    max-width: calc(100% / 12 - 26px);\n  }\n  [grid-row~='lg-12'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 12);\n    max-width: calc(100% / 12);\n  }\n  [grid-row~='justify-start-lg'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-lg'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-lg'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-lg'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-lg'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-lg'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-lg'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-lg'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-lg'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-lg'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-lg'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-lg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-lg'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-lg'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-lg'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-lg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-lg'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-lg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-lg'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-lg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-lg'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-lg'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-lg'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-lg'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-lg'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-lg'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-lg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-lg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-lg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-lg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-lg'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-lg'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-lg'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 992px) and (max-width: 1199px) {\n  [grid-row~='justify-start-only-lg'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-only-lg'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-only-lg'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-only-lg'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-only-lg'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-only-lg'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-only-lg'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-only-lg'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-only-lg'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-only-lg'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-only-lg'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-only-lg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-only-lg'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-only-lg'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-only-lg'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-only-lg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-only-lg'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-only-lg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-only-lg'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-only-lg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-only-lg'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-only-lg'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-only-lg'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-only-lg'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-only-lg'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-only-lg'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-only-lg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-only-lg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-only-lg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-only-lg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-only-lg'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-only-lg'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-only-lg'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 1200px) {\n  [grid]:not([grid~=\"fluid\"]) {\n    max-width: 1140px;\n  }\n  [grid-col~='xl-order-1'] {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  [grid-col~='xl-1'] {\n    width: calc(100% / 12 * 1 - 26px);\n    max-width: calc(100% / 12 * 1 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-1'] {\n    width: calc(100% / 12 * 1);\n    max-width: calc(100% / 12 * 1);\n  }\n  [grid-row~='xl-1'] > [grid-col=\"\"] {\n    width: calc(100% / 1 - 26px);\n    max-width: calc(100% / 1 - 26px);\n  }\n  [grid-row~='xl-1'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 1);\n    max-width: calc(100% / 1);\n  }\n  [grid-col~='xl-order-2'] {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  [grid-col~='xl-2'] {\n    width: calc(100% / 12 * 2 - 26px);\n    max-width: calc(100% / 12 * 2 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-2'] {\n    width: calc(100% / 12 * 2);\n    max-width: calc(100% / 12 * 2);\n  }\n  [grid-row~='xl-2'] > [grid-col=\"\"] {\n    width: calc(100% / 2 - 26px);\n    max-width: calc(100% / 2 - 26px);\n  }\n  [grid-row~='xl-2'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 2);\n    max-width: calc(100% / 2);\n  }\n  [grid-col~='xl-order-3'] {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  [grid-col~='xl-3'] {\n    width: calc(100% / 12 * 3 - 26px);\n    max-width: calc(100% / 12 * 3 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-3'] {\n    width: calc(100% / 12 * 3);\n    max-width: calc(100% / 12 * 3);\n  }\n  [grid-row~='xl-3'] > [grid-col=\"\"] {\n    width: calc(100% / 3 - 26px);\n    max-width: calc(100% / 3 - 26px);\n  }\n  [grid-row~='xl-3'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 3);\n    max-width: calc(100% / 3);\n  }\n  [grid-col~='xl-order-4'] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  [grid-col~='xl-4'] {\n    width: calc(100% / 12 * 4 - 26px);\n    max-width: calc(100% / 12 * 4 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-4'] {\n    width: calc(100% / 12 * 4);\n    max-width: calc(100% / 12 * 4);\n  }\n  [grid-row~='xl-4'] > [grid-col=\"\"] {\n    width: calc(100% / 4 - 26px);\n    max-width: calc(100% / 4 - 26px);\n  }\n  [grid-row~='xl-4'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 4);\n    max-width: calc(100% / 4);\n  }\n  [grid-col~='xl-order-5'] {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  [grid-col~='xl-5'] {\n    width: calc(100% / 12 * 5 - 26px);\n    max-width: calc(100% / 12 * 5 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-5'] {\n    width: calc(100% / 12 * 5);\n    max-width: calc(100% / 12 * 5);\n  }\n  [grid-row~='xl-5'] > [grid-col=\"\"] {\n    width: calc(100% / 5 - 26px);\n    max-width: calc(100% / 5 - 26px);\n  }\n  [grid-row~='xl-5'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 5);\n    max-width: calc(100% / 5);\n  }\n  [grid-col~='xl-order-6'] {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  [grid-col~='xl-6'] {\n    width: calc(100% / 12 * 6 - 26px);\n    max-width: calc(100% / 12 * 6 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-6'] {\n    width: calc(100% / 12 * 6);\n    max-width: calc(100% / 12 * 6);\n  }\n  [grid-row~='xl-6'] > [grid-col=\"\"] {\n    width: calc(100% / 6 - 26px);\n    max-width: calc(100% / 6 - 26px);\n  }\n  [grid-row~='xl-6'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 6);\n    max-width: calc(100% / 6);\n  }\n  [grid-col~='xl-order-7'] {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  [grid-col~='xl-7'] {\n    width: calc(100% / 12 * 7 - 26px);\n    max-width: calc(100% / 12 * 7 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-7'] {\n    width: calc(100% / 12 * 7);\n    max-width: calc(100% / 12 * 7);\n  }\n  [grid-row~='xl-7'] > [grid-col=\"\"] {\n    width: calc(100% / 7 - 26px);\n    max-width: calc(100% / 7 - 26px);\n  }\n  [grid-row~='xl-7'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 7);\n    max-width: calc(100% / 7);\n  }\n  [grid-col~='xl-order-8'] {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  [grid-col~='xl-8'] {\n    width: calc(100% / 12 * 8 - 26px);\n    max-width: calc(100% / 12 * 8 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-8'] {\n    width: calc(100% / 12 * 8);\n    max-width: calc(100% / 12 * 8);\n  }\n  [grid-row~='xl-8'] > [grid-col=\"\"] {\n    width: calc(100% / 8 - 26px);\n    max-width: calc(100% / 8 - 26px);\n  }\n  [grid-row~='xl-8'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 8);\n    max-width: calc(100% / 8);\n  }\n  [grid-col~='xl-order-9'] {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  [grid-col~='xl-9'] {\n    width: calc(100% / 12 * 9 - 26px);\n    max-width: calc(100% / 12 * 9 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-9'] {\n    width: calc(100% / 12 * 9);\n    max-width: calc(100% / 12 * 9);\n  }\n  [grid-row~='xl-9'] > [grid-col=\"\"] {\n    width: calc(100% / 9 - 26px);\n    max-width: calc(100% / 9 - 26px);\n  }\n  [grid-row~='xl-9'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 9);\n    max-width: calc(100% / 9);\n  }\n  [grid-col~='xl-order-10'] {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  [grid-col~='xl-10'] {\n    width: calc(100% / 12 * 10 - 26px);\n    max-width: calc(100% / 12 * 10 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-10'] {\n    width: calc(100% / 12 * 10);\n    max-width: calc(100% / 12 * 10);\n  }\n  [grid-row~='xl-10'] > [grid-col=\"\"] {\n    width: calc(100% / 10 - 26px);\n    max-width: calc(100% / 10 - 26px);\n  }\n  [grid-row~='xl-10'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 10);\n    max-width: calc(100% / 10);\n  }\n  [grid-col~='xl-order-11'] {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  [grid-col~='xl-11'] {\n    width: calc(100% / 12 * 11 - 26px);\n    max-width: calc(100% / 12 * 11 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-11'] {\n    width: calc(100% / 12 * 11);\n    max-width: calc(100% / 12 * 11);\n  }\n  [grid-row~='xl-11'] > [grid-col=\"\"] {\n    width: calc(100% / 11 - 26px);\n    max-width: calc(100% / 11 - 26px);\n  }\n  [grid-row~='xl-11'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 11);\n    max-width: calc(100% / 11);\n  }\n  [grid-col~='xl-order-12'] {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  [grid-col~='xl-12'] {\n    width: calc(100% / 12 * 12 - 26px);\n    max-width: calc(100% / 12 * 12 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='xl-12'] {\n    width: calc(100% / 12 * 12);\n    max-width: calc(100% / 12 * 12);\n  }\n  [grid-row~='xl-12'] > [grid-col=\"\"] {\n    width: calc(100% / 12 - 26px);\n    max-width: calc(100% / 12 - 26px);\n  }\n  [grid-row~='xl-12'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 12);\n    max-width: calc(100% / 12);\n  }\n  [grid-row~='justify-start-xl'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-xl'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-xl'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-xl'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-xl'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-xl'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-xl'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-xl'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-xl'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-xl'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-xl'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-xl'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-xl'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-xl'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-xl'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-xl'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-xl'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-xl'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-xl'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-xl'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-xl'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-xl'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-xl'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-xl'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-xl'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-xl'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-xl'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-xl'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-xl'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-xl'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-xl'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-xl'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-xl'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 1200px) and (max-width: 1799px) {\n  [grid-row~='justify-start-only-xl'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-only-xl'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-only-xl'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-only-xl'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-only-xl'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-only-xl'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-only-xl'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-only-xl'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-only-xl'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-only-xl'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-only-xl'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-only-xl'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-only-xl'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-only-xl'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-only-xl'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-only-xl'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-only-xl'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-only-xl'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-only-xl'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-only-xl'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-only-xl'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-only-xl'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-only-xl'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-only-xl'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-only-xl'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-only-xl'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-only-xl'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-only-xl'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-only-xl'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-only-xl'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-only-xl'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-only-xl'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-only-xl'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 1800px) {\n  [grid]:not([grid~=\"fluid\"]) {\n    max-width: 1600px;\n  }\n  [grid-col~='hg-order-1'] {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  [grid-col~='hg-1'] {\n    width: calc(100% / 12 * 1 - 26px);\n    max-width: calc(100% / 12 * 1 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-1'] {\n    width: calc(100% / 12 * 1);\n    max-width: calc(100% / 12 * 1);\n  }\n  [grid-row~='hg-1'] > [grid-col=\"\"] {\n    width: calc(100% / 1 - 26px);\n    max-width: calc(100% / 1 - 26px);\n  }\n  [grid-row~='hg-1'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 1);\n    max-width: calc(100% / 1);\n  }\n  [grid-col~='hg-order-2'] {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  [grid-col~='hg-2'] {\n    width: calc(100% / 12 * 2 - 26px);\n    max-width: calc(100% / 12 * 2 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-2'] {\n    width: calc(100% / 12 * 2);\n    max-width: calc(100% / 12 * 2);\n  }\n  [grid-row~='hg-2'] > [grid-col=\"\"] {\n    width: calc(100% / 2 - 26px);\n    max-width: calc(100% / 2 - 26px);\n  }\n  [grid-row~='hg-2'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 2);\n    max-width: calc(100% / 2);\n  }\n  [grid-col~='hg-order-3'] {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  [grid-col~='hg-3'] {\n    width: calc(100% / 12 * 3 - 26px);\n    max-width: calc(100% / 12 * 3 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-3'] {\n    width: calc(100% / 12 * 3);\n    max-width: calc(100% / 12 * 3);\n  }\n  [grid-row~='hg-3'] > [grid-col=\"\"] {\n    width: calc(100% / 3 - 26px);\n    max-width: calc(100% / 3 - 26px);\n  }\n  [grid-row~='hg-3'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 3);\n    max-width: calc(100% / 3);\n  }\n  [grid-col~='hg-order-4'] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  [grid-col~='hg-4'] {\n    width: calc(100% / 12 * 4 - 26px);\n    max-width: calc(100% / 12 * 4 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-4'] {\n    width: calc(100% / 12 * 4);\n    max-width: calc(100% / 12 * 4);\n  }\n  [grid-row~='hg-4'] > [grid-col=\"\"] {\n    width: calc(100% / 4 - 26px);\n    max-width: calc(100% / 4 - 26px);\n  }\n  [grid-row~='hg-4'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 4);\n    max-width: calc(100% / 4);\n  }\n  [grid-col~='hg-order-5'] {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  [grid-col~='hg-5'] {\n    width: calc(100% / 12 * 5 - 26px);\n    max-width: calc(100% / 12 * 5 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-5'] {\n    width: calc(100% / 12 * 5);\n    max-width: calc(100% / 12 * 5);\n  }\n  [grid-row~='hg-5'] > [grid-col=\"\"] {\n    width: calc(100% / 5 - 26px);\n    max-width: calc(100% / 5 - 26px);\n  }\n  [grid-row~='hg-5'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 5);\n    max-width: calc(100% / 5);\n  }\n  [grid-col~='hg-order-6'] {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  [grid-col~='hg-6'] {\n    width: calc(100% / 12 * 6 - 26px);\n    max-width: calc(100% / 12 * 6 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-6'] {\n    width: calc(100% / 12 * 6);\n    max-width: calc(100% / 12 * 6);\n  }\n  [grid-row~='hg-6'] > [grid-col=\"\"] {\n    width: calc(100% / 6 - 26px);\n    max-width: calc(100% / 6 - 26px);\n  }\n  [grid-row~='hg-6'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 6);\n    max-width: calc(100% / 6);\n  }\n  [grid-col~='hg-order-7'] {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  [grid-col~='hg-7'] {\n    width: calc(100% / 12 * 7 - 26px);\n    max-width: calc(100% / 12 * 7 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-7'] {\n    width: calc(100% / 12 * 7);\n    max-width: calc(100% / 12 * 7);\n  }\n  [grid-row~='hg-7'] > [grid-col=\"\"] {\n    width: calc(100% / 7 - 26px);\n    max-width: calc(100% / 7 - 26px);\n  }\n  [grid-row~='hg-7'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 7);\n    max-width: calc(100% / 7);\n  }\n  [grid-col~='hg-order-8'] {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  [grid-col~='hg-8'] {\n    width: calc(100% / 12 * 8 - 26px);\n    max-width: calc(100% / 12 * 8 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-8'] {\n    width: calc(100% / 12 * 8);\n    max-width: calc(100% / 12 * 8);\n  }\n  [grid-row~='hg-8'] > [grid-col=\"\"] {\n    width: calc(100% / 8 - 26px);\n    max-width: calc(100% / 8 - 26px);\n  }\n  [grid-row~='hg-8'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 8);\n    max-width: calc(100% / 8);\n  }\n  [grid-col~='hg-order-9'] {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  [grid-col~='hg-9'] {\n    width: calc(100% / 12 * 9 - 26px);\n    max-width: calc(100% / 12 * 9 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-9'] {\n    width: calc(100% / 12 * 9);\n    max-width: calc(100% / 12 * 9);\n  }\n  [grid-row~='hg-9'] > [grid-col=\"\"] {\n    width: calc(100% / 9 - 26px);\n    max-width: calc(100% / 9 - 26px);\n  }\n  [grid-row~='hg-9'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 9);\n    max-width: calc(100% / 9);\n  }\n  [grid-col~='hg-order-10'] {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  [grid-col~='hg-10'] {\n    width: calc(100% / 12 * 10 - 26px);\n    max-width: calc(100% / 12 * 10 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-10'] {\n    width: calc(100% / 12 * 10);\n    max-width: calc(100% / 12 * 10);\n  }\n  [grid-row~='hg-10'] > [grid-col=\"\"] {\n    width: calc(100% / 10 - 26px);\n    max-width: calc(100% / 10 - 26px);\n  }\n  [grid-row~='hg-10'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 10);\n    max-width: calc(100% / 10);\n  }\n  [grid-col~='hg-order-11'] {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  [grid-col~='hg-11'] {\n    width: calc(100% / 12 * 11 - 26px);\n    max-width: calc(100% / 12 * 11 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-11'] {\n    width: calc(100% / 12 * 11);\n    max-width: calc(100% / 12 * 11);\n  }\n  [grid-row~='hg-11'] > [grid-col=\"\"] {\n    width: calc(100% / 11 - 26px);\n    max-width: calc(100% / 11 - 26px);\n  }\n  [grid-row~='hg-11'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 11);\n    max-width: calc(100% / 11);\n  }\n  [grid-col~='hg-order-12'] {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  [grid-col~='hg-12'] {\n    width: calc(100% / 12 * 12 - 26px);\n    max-width: calc(100% / 12 * 12 - 26px);\n  }\n  [grid-row~=\"narrow\"] > [grid-col~='hg-12'] {\n    width: calc(100% / 12 * 12);\n    max-width: calc(100% / 12 * 12);\n  }\n  [grid-row~='hg-12'] > [grid-col=\"\"] {\n    width: calc(100% / 12 - 26px);\n    max-width: calc(100% / 12 - 26px);\n  }\n  [grid-row~='hg-12'][grid-row~=\"narrow\"] > [grid-col=\"\"] {\n    width: calc(100% / 12);\n    max-width: calc(100% / 12);\n  }\n  [grid-row~='justify-start-hg'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-hg'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-hg'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-hg'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-hg'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-hg'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-hg'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-hg'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-hg'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-hg'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-hg'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-hg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-hg'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-hg'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-hg'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-hg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-hg'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-hg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-hg'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-hg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-hg'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-hg'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-hg'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-hg'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-hg'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-hg'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-hg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-hg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-hg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-hg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-hg'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-hg'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-hg'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n@media screen and (min-width: 1800px) {\n  [grid-row~='justify-start-only-hg'] {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n  .is-ie [grid-row~='justify-start-only-hg'] {\n    text-align: left;\n  }\n  [grid-row~='justify-end-only-hg'] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .is-ie [grid-row~='justify-end-only-hg'] {\n    text-align: right;\n  }\n  [grid-row~='justify-center-only-hg'] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .is-ie [grid-row~='justify-center-only-hg'] {\n    text-align: center;\n  }\n  [grid-row~='justify-between-only-hg'] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .is-ie [grid-row~='justify-between-only-hg'] {\n    text-align: justify;\n    -webkit-text-align-last: justify;\n    text-align-last: justify;\n  }\n  [grid-row~='justify-around-only-hg'] {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .is-ie [grid-row~='justify-around-only-hg'] {\n    text-align: justify;\n  }\n  [grid-row~='align-start-only-hg'] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .is-ie [grid-row~='align-start-only-hg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='align-end-only-hg'] {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .is-ie [grid-row~='align-end-only-hg'] > [grid-col] {\n    vertical-align: bottom;\n  }\n  [grid-row~='align-center-only-hg'] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .is-ie [grid-row~='align-center-only-hg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-baseline-only-hg'] {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .is-ie [grid-row~='align-baseline-only-hg'] > [grid-col] {\n    vertical-align: middle;\n  }\n  [grid-row~='align-stretch-only-hg'] {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .is-ie [grid-row~='align-stretch-only-hg'] > [grid-col] {\n    vertical-align: top;\n  }\n  [grid-row~='content-start-only-hg'] {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n  }\n  [grid-row~='content-end-only-hg'] {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n  }\n  [grid-row~='content-center-only-hg'] {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  [grid-row~='content-between-only-hg'] {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n  }\n  [grid-row~='content-around-only-hg'] {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n  }\n  [grid-row~='content-stretch-only-hg'] {\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n  }\n  [grid-row~='direction-row-only-hg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  [grid-row~='direction-row-reverse-only-hg'] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  [grid-row~='direction-column-only-hg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [grid-row~='direction-column-reverse-only-hg'] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  [grid-row~='nowrap-only-hg'] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  [grid-row~='wrap-only-hg'] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  [grid-row~='wrap-reverse-only-hg'] {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n  }\n}\n.btn {\n  display: inline-block;\n  vertical-align: middle;\n  font: inherit;\n  outline: none;\n  background: #212121;\n  border: 2px solid #212121;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 7px 20px;\n  line-height: 28px;\n  box-shadow: 0.6px 0.8px 1px rgba(234,234,235,0.75);\n  letter-spacing: 2px;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  -webkit-transition: background 250ms cubic-bezier(0.5, 0, 0.2, 1), border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n  transition: background 250ms cubic-bezier(0.5, 0, 0.2, 1), border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.btn:hover {\n  background: #333;\n  border-color: #333;\n}\n.btn:focus:not(:hover) {\n  outline: 1px solid #212121;\n  outline-offset: 2px;\n}\n.form__control {\n  display: block;\n  font: inherit;\n  outline: none;\n  background: #fff;\n  border: 2px solid #fff;\n  color: #424242;\n  font-weight: 400;\n  padding: 7px 20px;\n  line-height: 28px;\n  box-shadow: 0.6px 0.8px 1px rgba(234,234,235,0.75);\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  -webkit-transition: border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n  transition: border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.form__control::-webkit-input-placeholder {\n  color: #424242;\n  text-transform: uppercase;\n}\n.form__control::-moz-placeholder {\n  color: #424242;\n  text-transform: uppercase;\n}\n.form__control:-moz-placeholder {\n  color: #424242;\n  text-transform: uppercase;\n}\n.form__control:-ms-input-placeholder {\n  color: #424242;\n  text-transform: uppercase;\n}\n.form__control:hover {\n  border-color: rgba(33,33,33,0.2);\n}\n.form__control:focus {\n  border-color: rgba(33,33,33,0.5);\n}\n.u-h1 {\n  font-family: Montserrat, sans-serif;\n  color: #212121;\n  text-transform: uppercase;\n  font-size: 28px;\n  font-weight: 700;\n}\n.u-h2 {\n  font-family: Montserrat, sans-serif;\n  color: #212121;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n}\n.u-h3 {\n  font-family: Montserrat, sans-serif;\n  color: #212121;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 700;\n}\n.u-plain-text {\n  color: #464646;\n  font-size: 16px;\n  letter-spacing: 1.6px;\n  font-weight: 300;\n  line-height: 1.7;\n}\n.u-plain-text > :not(:last-child) {\n  margin-bottom: 20px;\n  margin-top: 0;\n}\n.u-removed {\n  display: none !important;\n}\n.u-shadow {\n  box-shadow: 0 2px 3px rgba(230,230,230,0.2);\n}\n.u-light-shadow {\n  box-shadow: 0 1px 2px rgba(200,200,200,0.25);\n}\n.u-loader {\n  margin: 80px auto;\n  display: block;\n  height: 80px;\n  width: 80px;\n  line-height: 80px;\n  vertical-align: middle;\n  border-width: 4px;\n  border-style: solid;\n  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.1) #222;\n  border-radius: 100%;\n  -webkit-animation: spin 0.6s linear infinite;\n          animation: spin 0.6s linear infinite;\n}\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg) translatez(0);\n            transform: rotate(360deg) translatez(0);\n  }\n}\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg) translatez(0);\n            transform: rotate(360deg) translatez(0);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.2.1
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }

	    var component = cache[name] = matched.components[name];

	    // inject instance registration hooks
	    var hooks = data.hook || (data.hook = {});
	    hooks.init = function (vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.prepatch = function (oldVnode, vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.destroy = function (vnode) {
	      if (matched.instances[name] === vnode.child) {
	        matched.instances[name] = undefined;
	      }
	    };

	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more comformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery;
	    try {
	      parsedQuery = parseQuery(query);
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message);
	      parsedQuery = {};
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key];
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */

	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom);
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;
	    var classes = {};
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	    var compareTarget = location.path ? createRoute(null, location) : route;
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;

	  _Vue = Vue;

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this.$root._route }
	  });

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
	    }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathMap,
	  oldNameMap
	) {
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route);
	  });

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = index$1;

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null);

	function getRouteRegex (path) {
	  var hit = regexpCache[path];
	  var keys, regexp;

	  if (hit) {
	    keys = hit.keys;
	    regexp = hit.regexp;
	  } else {
	    keys = [];
	    regexp = index(path, keys);
	    regexpCache[path] = { keys: keys, regexp: regexp };
	  }

	  return { keys: keys, regexp: regexp }
	}

	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/';
	  var query = resolveQuery(parsedPath.query, next.query);
	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      );
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) { params[key.name] = val; }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        position = getElementPosition(el);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }

	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */


	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	  }
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) {
	        cb(route);
	      });
	    }
	  }, onAbort);
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function () { onAbort && onAbort(); };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true);
	        abort();
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
	        abort();
	      } else {
	        // confirm transition and pass on the value
	        next(to);
	      }
	    });
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = baseEl ? baseEl.getAttribute('href') : '/';
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  return function boundRouteGuard () {
	    return guard.apply(instance, arguments)
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = once(function (resolvedDef) {
	          match.components[key] = resolvedDef;
	          next();
	        });

	        var reject = once(function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason));
	          next(false);
	        });

	        var res = def(resolve, reject);
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject);
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    if (called) { return }
	    called = true;
	    return fn.apply(this, arguments)
	  }
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    window.addEventListener('popstate', function (e) {
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, this$1.current, true);
	        }
	      });
	    });
	  }

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path;
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  );
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || []);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn);
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn);
	};

	VueRouter.prototype.onReady = function onReady (cb) {
	  this.history.onReady(cb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(to, current || this.history.current, append);
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.2.1';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-resource v1.2.1
	 * https://github.com/pagekit/vue-resource
	 * Released under the MIT License.
	 */

	'use strict';

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;

	function Promise$1(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise$1.reject = function (r) {
	    return new Promise$1(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise$1.resolve = function (x) {
	    return new Promise$1(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise$1.all = function all(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise$1.race = function race(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p$1 = Promise$1.prototype;

	p$1.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p$1.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p$1.notify = function notify() {
	    var promise = this;

	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise$1(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	/**
	 * Promise adapter.
	 */

	if (typeof Promise === 'undefined') {
	    window.Promise = Promise$1;
	}

	function PromiseObj(executor, context) {

	    if (executor instanceof Promise) {
	        this.promise = executor;
	    } else {
	        this.promise = new Promise(executor.bind(context));
	    }

	    this.context = context;
	}

	PromiseObj.all = function (iterable, context) {
	    return new PromiseObj(Promise.all(iterable), context);
	};

	PromiseObj.resolve = function (value, context) {
	    return new PromiseObj(Promise.resolve(value), context);
	};

	PromiseObj.reject = function (reason, context) {
	    return new PromiseObj(Promise.reject(reason), context);
	};

	PromiseObj.race = function (iterable, context) {
	    return new PromiseObj(Promise.race(iterable), context);
	};

	var p = PromiseObj.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new PromiseObj(this.promise.catch(rejected), this.context);
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return Promise.reject(reason);
	    });
	};

	/**
	 * Utility functions.
	 */

	var ref = {};
	var hasOwnProperty = ref.hasOwnProperty;

	var ref$1 = [];
	var slice = ref$1.slice;
	var debug = false;
	var ntick;

	var inBrowser = typeof window !== 'undefined';

	var Util = function Util(ref) {
	    var config = ref.config;
	    var nextTick = ref.nextTick;

	    ntick = nextTick;
	    debug = config.debug || !config.silent;
	};

	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}

	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}

	function nextTick(cb, ctx) {
	    return ntick(cb, ctx);
	}

	function trim(str) {
	    return str ? str.replace(/^\s*|\s*$/g, '') : '';
	}

	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}

	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}

	var isArray = Array.isArray;

	function isString(val) {
	    return typeof val === 'string';
	}

	function isFunction(val) {
	    return typeof val === 'function';
	}

	function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}

	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}

	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}

	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}

	function when(value, fulfilled, rejected) {

	    var promise = PromiseObj.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}

	function options(fn, obj, opts) {

	    opts = opts || {};

	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }

	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}

	function each(obj, iterator) {

	    var i, key;

	    if (isArray(obj)) {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (hasOwnProperty.call(obj, key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	}

	var assign = Object.assign || _assign;

	function merge(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });

	    return target;
	}

	function defaults(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {

	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });

	    return target;
	}

	function _assign(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source);
	    });

	    return target;
	}

	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}

	/**
	 * Root Prefix Transform.
	 */

	var root = function root(options$$1, next) {

	    var url = next(options$$1);

	    if (isString(options$$1.root) && !url.match(/^(https?:)?\//)) {
	        url = options$$1.root + '/' + url;
	    }

	    return url;
	};

	/**
	 * Query Parameter Transform.
	 */

	var query = function query(options$$1, next) {

	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options$$1);

	    each(options$$1.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = Url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	};

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	function expand(url, params, variables) {

	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	}

	function parse(template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];

	    return {
	        vars: variables,
	        expand: function expand(context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null,
	                        values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}

	function getValues(context, operator, key, modifier) {

	    var value = context[key],
	        result = [];

	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }

	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	}

	function isDefined(value) {
	    return value !== undefined && value !== null;
	}

	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}

	function encodeValue(operator, value, key) {

	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}

	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}

	/**
	 * URL Template (RFC 6570) Transform.
	 */

	var template = function template(options) {

	    var variables = [],
	        url = expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	};

	/**
	 * Service for URL templating.
	 */

	function Url(url, params) {

	    var self = this || {},
	        options$$1 = url,
	        transform;

	    if (isString(url)) {
	        options$$1 = { url: url, params: params };
	    }

	    options$$1 = merge({}, Url.options, self.$options, options$$1);

	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });

	    return transform(options$$1);
	}

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transforms = [template, query, root];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [],
	        escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    var el = document.createElement('a');

	    if (document.documentMode) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options$$1) {
	        return handler.call(vm, options$$1, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;

	    each(obj, function (value, key) {

	        hash = isObject(value) || isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	/**
	 * XDomain client (Internet Explorer).
	 */

	var xdrClient = function xdrClient(request) {
	    return new PromiseObj(function (resolve) {

	        var xdr = new XDomainRequest(),
	            handler = function handler(ref) {
	            var type = ref.type;

	            var status = 0;

	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }

	            resolve(request.respondWith(xdr.responseText, { status: status }));
	        };

	        request.abort = function () {
	            return xdr.abort();
	        };

	        xdr.open(request.method, request.getUrl());

	        if (request.timeout) {
	            xdr.timeout = request.timeout;
	        }

	        xdr.onload = handler;
	        xdr.onabort = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	};

	/**
	 * CORS Interceptor.
	 */

	var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

	var cors = function cors(request, next) {

	    if (inBrowser) {

	        var orgUrl = Url.parse(location.href);
	        var reqUrl = Url.parse(request.getUrl());

	        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

	            request.crossOrigin = true;
	            request.emulateHTTP = false;

	            if (!SUPPORTS_CORS) {
	                request.client = xdrClient;
	            }
	        }
	    }

	    next();
	};

	/**
	 * Body Interceptor.
	 */

	var body = function body(request, next) {

	    if (isFormData(request.body)) {

	        request.headers.delete('Content-Type');
	    } else if (isObject(request.body) || isArray(request.body)) {

	        if (request.emulateJSON) {
	            request.body = Url.params(request.body);
	            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	        } else {
	            request.body = JSON.stringify(request.body);
	        }
	    }

	    next(function (response) {

	        Object.defineProperty(response, 'data', {

	            get: function get() {
	                return this.body;
	            },

	            set: function set(body) {
	                this.body = body;
	            }

	        });

	        return response.bodyText ? when(response.text(), function (text) {

	            var type = response.headers.get('Content-Type') || '';

	            if (type.indexOf('application/json') === 0 || isJson(text)) {

	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }
	            } else {
	                response.body = text;
	            }

	            return response;
	        }) : response;
	    });
	};

	function isJson(str) {

	    var start = str.match(/^\[|^\{(?!\{)/),
	        end = { '[': /]$/, '{': /}$/ };

	    return start && end[start[0]].test(str);
	}

	/**
	 * JSONP client (Browser).
	 */

	var jsonpClient = function jsonpClient(request) {
	    return new PromiseObj(function (resolve) {

	        var name = request.jsonp || 'callback',
	            callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;

	        handler = function handler(ref) {
	            var type = ref.type;

	            var status = 0;

	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }

	            if (status && window[callback]) {
	                delete window[callback];
	                document.body.removeChild(script);
	            }

	            resolve(request.respondWith(body, { status: status }));
	        };

	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };

	        request.abort = function () {
	            handler({ type: 'abort' });
	        };

	        request.params[name] = callback;

	        if (request.timeout) {
	            setTimeout(request.abort, request.timeout);
	        }

	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	};

	/**
	 * JSONP Interceptor.
	 */

	var jsonp = function jsonp(request, next) {

	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }

	    next();
	};

	/**
	 * Before Interceptor.
	 */

	var before = function before(request, next) {

	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }

	    next();
	};

	/**
	 * HTTP method override Interceptor.
	 */

	var method = function method(request, next) {

	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }

	    next();
	};

	/**
	 * Header Interceptor.
	 */

	var header = function header(request, next) {

	    var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);

	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });

	    next();
	};

	/**
	 * XMLHttp client (Browser).
	 */

	var SUPPORTS_BLOB = typeof Blob !== 'undefined' && typeof FileReader !== 'undefined';

	var xhrClient = function xhrClient(request) {
	    return new PromiseObj(function (resolve) {

	        var xhr = new XMLHttpRequest(),
	            handler = function handler(event) {

	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	            });

	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xhr.abort();
	        };

	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }

	        xhr.open(request.method, request.getUrl(), true);

	        if (request.timeout) {
	            xhr.timeout = request.timeout;
	        }

	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }

	        if (!request.crossOrigin) {
	            request.headers.set('X-Requested-With', 'XMLHttpRequest');
	        }

	        if ('responseType' in xhr && SUPPORTS_BLOB) {
	            xhr.responseType = 'blob';
	        }

	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });

	        xhr.onload = handler;
	        xhr.onabort = handler;
	        xhr.onerror = handler;
	        xhr.ontimeout = handler;
	        xhr.send(request.getBody());
	    });
	};

	/**
	 * Http client (Node).
	 */

	var nodeClient = function nodeClient(request) {

	    var client = __webpack_require__(12);

	    return new PromiseObj(function (resolve) {

	        var url = request.getUrl();
	        var body = request.getBody();
	        var method = request.method;
	        var headers = {},
	            handler;

	        request.headers.forEach(function (value, name) {
	            headers[name] = value;
	        });

	        client(url, { body: body, method: method, headers: headers }).then(handler = function handler(resp) {

	            var response = request.respondWith(resp.body, {
	                status: resp.statusCode,
	                statusText: trim(resp.statusMessage)
	            });

	            each(resp.headers, function (value, name) {
	                response.headers.set(name, value);
	            });

	            resolve(response);
	        }, function (error$$1) {
	            return handler(error$$1.response);
	        });
	    });
	};

	/**
	 * Base client.
	 */

	var Client = function Client(context) {

	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;

	    if (!isObject(context)) {
	        context = null;
	    }

	    function Client(request) {
	        return new PromiseObj(function (resolve) {

	            function exec() {

	                handler = reqHandlers.pop();

	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn("Invalid interceptor of type " + (typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) + ", must be a function");
	                    next();
	                }
	            }

	            function next(response) {

	                if (isFunction(response)) {

	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {

	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });

	                    when(response, resolve);

	                    return;
	                }

	                exec();
	            }

	            exec();
	        }, context);
	    }

	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };

	    return Client;
	};

	function sendRequest(request, resolve) {

	    var client = request.client || (inBrowser ? xhrClient : nodeClient);

	    resolve(client(request));
	}

	/**
	 * HTTP Headers.
	 */

	var Headers = function Headers(headers) {
	    var this$1 = this;

	    this.map = {};

	    each(headers, function (value, name) {
	        return this$1.append(name, value);
	    });
	};

	Headers.prototype.has = function has(name) {
	    return getName(this.map, name) !== null;
	};

	Headers.prototype.get = function get(name) {

	    var list = this.map[getName(this.map, name)];

	    return list ? list.join() : null;
	};

	Headers.prototype.getAll = function getAll(name) {
	    return this.map[getName(this.map, name)] || [];
	};

	Headers.prototype.set = function set(name, value) {
	    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	};

	Headers.prototype.append = function append(name, value) {

	    var list = this.map[getName(this.map, name)];

	    if (list) {
	        list.push(trim(value));
	    } else {
	        this.set(name, value);
	    }
	};

	Headers.prototype.delete = function delete$1(name) {
	    delete this.map[getName(this.map, name)];
	};

	Headers.prototype.deleteAll = function deleteAll() {
	    this.map = {};
	};

	Headers.prototype.forEach = function forEach(callback, thisArg) {
	    var this$1 = this;

	    each(this.map, function (list, name) {
	        each(list, function (value) {
	            return callback.call(thisArg, value, name, this$1);
	        });
	    });
	};

	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}

	function normalizeName(name) {

	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }

	    return trim(name);
	}

	/**
	 * HTTP Response.
	 */

	var Response = function Response(body, ref) {
	    var url = ref.url;
	    var headers = ref.headers;
	    var status = ref.status;
	    var statusText = ref.statusText;

	    this.url = url;
	    this.ok = status >= 200 && status < 300;
	    this.status = status || 0;
	    this.statusText = statusText || '';
	    this.headers = new Headers(headers);
	    this.body = body;

	    if (isString(body)) {

	        this.bodyText = body;
	    } else if (isBlob(body)) {

	        this.bodyBlob = body;

	        if (isBlobText(body)) {
	            this.bodyText = blobText(body);
	        }
	    }
	};

	Response.prototype.blob = function blob() {
	    return when(this.bodyBlob);
	};

	Response.prototype.text = function text() {
	    return when(this.bodyText);
	};

	Response.prototype.json = function json() {
	    return when(this.text(), function (text) {
	        return JSON.parse(text);
	    });
	};

	function blobText(body) {
	    return new PromiseObj(function (resolve) {

	        var reader = new FileReader();

	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };
	    });
	}

	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}

	/**
	 * HTTP Request.
	 */

	var Request = function Request(options$$1) {

	    this.body = null;
	    this.params = {};

	    assign(this, options$$1, {
	        method: toUpper(options$$1.method || 'GET')
	    });

	    if (!(this.headers instanceof Headers)) {
	        this.headers = new Headers(this.headers);
	    }
	};

	Request.prototype.getUrl = function getUrl() {
	    return Url(this);
	};

	Request.prototype.getBody = function getBody() {
	    return this.body;
	};

	Request.prototype.respondWith = function respondWith(body, options$$1) {
	    return new Response(body, assign(options$$1 || {}, { url: this.getUrl() }));
	};

	/**
	 * Service for sending network requests.
	 */

	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

	function Http(options$$1) {

	    var self = this || {},
	        client = Client(self.$vm);

	    defaults(options$$1 || {}, self.$options, Http.options);

	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });

	    return client(new Request(options$$1)).then(function (response) {

	        return response.ok ? response : PromiseObj.reject(response);
	    }, function (response) {

	        if (response instanceof Error) {
	            error(response);
	        }

	        return PromiseObj.reject(response);
	    });
	}

	Http.options = {};

	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    common: COMMON_HEADERS,
	    custom: {}
	};

	Http.interceptors = [before, method, body, jsonp, header, cors];

	['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

	    Http[method$$1] = function (url, options$$1) {
	        return this(assign(options$$1 || {}, { url: url, method: method$$1 }));
	    };
	});

	['post', 'put', 'patch'].forEach(function (method$$1) {

	    Http[method$$1] = function (url, body$$1, options$$1) {
	        return this(assign(options$$1 || {}, { url: url, method: method$$1, body: body$$1 }));
	    };
	});

	/**
	 * Service for interacting with RESTful services.
	 */

	function Resource(url, params, actions, options$$1) {

	    var self = this || {},
	        resource = {};

	    actions = assign({}, Resource.actions, actions);

	    each(actions, function (action, name) {

	        action = merge({ url: url, params: assign({}, params) }, options$$1, action);

	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options$$1 = assign({}, action),
	        params = {},
	        body;

	    switch (args.length) {

	        case 2:

	            params = args[0];
	            body = args[1];

	            break;

	        case 1:

	            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
	    }

	    options$$1.body = body;
	    options$$1.params = assign({}, options$$1.params, params);

	    return options$$1;
	}

	Resource.actions = {

	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }

	};

	/**
	 * Install plugin.
	 */

	function plugin(Vue) {

	    if (plugin.installed) {
	        return;
	    }

	    Util(Vue);

	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = PromiseObj;

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function get() {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function get() {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function get() {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function get() {
	                var this$1 = this;

	                return function (executor) {
	                    return new Vue.Promise(executor, this$1);
	                };
	            }
	        }

	    });
	}

	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}

	module.exports = plugin;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(14)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(19),
	  /* template */
	  __webpack_require__(20),
	  /* scopeId */
	  "data-v-7876dcec",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\app-header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app-header.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7876dcec", Component.options)
	  } else {
	    hotAPI.reload("data-v-7876dcec", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("1d35f9a4", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-7876dcec\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-header.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-7876dcec\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-header.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.header[data-v-7876dcec] {\n  color: #fefefe;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n.header-wrap[data-v-7876dcec] {\n  background-color: #212429;\n  z-index: 11;\n  position: relative;\n}\n@media screen and (min-width: 992px) {\n.header-col[data-v-7876dcec] {\n    width: calc(100% / 3 - 26px);\n}\n}\n@media screen and (max-width: 991px) {\n.header-col[data-v-7876dcec] {\n    width: auto;\n}\n}\n.header-link[data-v-7876dcec] {\n  background: transparent;\n  border: none;\n  color: inherit;\n  width: 56px;\n  height: 56px;\n  border-left: 2px solid #3c3c3c;\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  flex-shrink: 0;\n  user-select: none;\n  padding: 0;\n  transition: background 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\na.header-link[data-v-7876dcec] {\n  line-height: 56px;\n}\n.header-link[data-v-7876dcec]:last-child {\n  border-right: 2px solid #3c3c3c;\n}\n.header-link[data-v-7876dcec]:hover,\n.header-link.is-active[data-v-7876dcec] {\n  background: #343941;\n}\n.header-link .svg-icon[data-v-7876dcec] {\n  width: 1.5em;\n  height: 1.5em;\n}\n.logo[data-v-7876dcec] {\n  font-size: 22px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 600;\n  letter-spacing: 4px;\n  white-space: nowrap;\n  user-select: none;\n}\n.logo a[data-v-7876dcec] {\n  display: inline-block;\n}\n.logo span[data-v-7876dcec] {\n  font-size: 26px;\n  margin-right: 2px;\n}\n.social[data-v-7876dcec] {\n  display: inline-flex;\n  justify-content: flex-end;\n  transform: scale(1);\n  transform-origin: 50% 0px;\n  opacity: 1;\n  visibility: visible;\n  transition: transform 250ms cubic-bezier(0.5, 0, 0.2, 1), opacity 250ms cubic-bezier(0.5, 0, 0.2, 1), visibility 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.social .header-link .svg-icon[data-v-7876dcec] {\n  width: 1rem;\n  height: 1rem;\n}\n.nav-wrap[data-v-7876dcec] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background-color: rgba(33,36,41,0.7);\n  z-index: 9;\n  opacity: 0;\n  transform-origin: top;\n  transform: perspective(1000px) rotateX(-90deg);\n  visibility: hidden;\n  transition: opacity 250ms cubic-bezier(0.5, 0, 0.2, 1), visibility 250ms cubic-bezier(0.5, 0, 0.2, 1), transform 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.nav-wrap.is-active[data-v-7876dcec] {\n  opacity: 1;\n  visibility: visible;\n  transform: rotateX(0);\n}\n.nav[data-v-7876dcec] {\n  padding: 7px 0px;\n  zoom: 1;\n}\n.nav[data-v-7876dcec]:before,\n.nav[data-v-7876dcec]:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  overflow: hidden;\n}\n.nav[data-v-7876dcec]:after {\n  clear: both;\n}\n.nav-link[data-v-7876dcec] {\n  font-weight: 400;\n  text-transform: uppercase;\n  display: block;\n  float: left;\n  padding: 10px 20px;\n  letter-spacing: 1px;\n  user-select: none;\n  transform: translateY(-8px) scale(0.9) rotateX(10deg);\n  transform-origin: top;\n  opacity: 0;\n  transition: transform 250ms cubic-bezier(0.5, 0, 0.2, 1), opacity 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.nav-link[data-v-7876dcec]:not(:last-child) {\n  margin-right: 2px;\n}\n.nav-link[data-v-7876dcec]:hover {\n  color: #fff;\n}\n.is-active .nav-link[data-v-7876dcec] {\n  transform: none;\n  opacity: 1;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(0) {\n  transition-duration: 300ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(1) {\n  transition-duration: 350ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(2) {\n  transition-duration: 400ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(3) {\n  transition-duration: 450ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(4) {\n  transition-duration: 500ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(5) {\n  transition-duration: 550ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(6) {\n  transition-duration: 600ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(7) {\n  transition-duration: 650ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(8) {\n  transition-duration: 700ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(9) {\n  transition-duration: 750ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(10) {\n  transition-duration: 800ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(11) {\n  transition-duration: 850ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(12) {\n  transition-duration: 900ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(13) {\n  transition-duration: 950ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(14) {\n  transition-duration: 1000ms;\n}\n.is-active .nav-link[data-v-7876dcec]:nth-of-type(15) {\n  transition-duration: 1050ms;\n}\n.search-toggle[data-v-7876dcec] {\n  margin-left: auto;\n}\n@media screen and (min-width: 576px) {\n.search-toggle[data-v-7876dcec] {\n    display: none;\n}\n}\n.search-wrap[data-v-7876dcec] {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n}\n@media screen and (min-width: 576px) and (max-width: 991px) {\n.search-wrap[data-v-7876dcec] {\n    margin-left: auto;\n}\n}\n@media screen and (max-width: 575px) {\n.search-wrap[data-v-7876dcec] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background-color: rgba(33,36,41,0.7);\n    justify-content: center;\n    opacity: 0;\n    transform-origin: top;\n    transform: perspective(1000px) rotateX(-90deg);\n    visibility: hidden;\n    transition: opacity 250ms cubic-bezier(0.5, 0, 0.2, 1), visibility 250ms cubic-bezier(0.5, 0, 0.2, 1), transform 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.search-wrap.is-open[data-v-7876dcec] {\n    opacity: 1;\n    visibility: visible;\n    transform: rotateX(0);\n}\n}\n.search-wrap.is-active .social[data-v-7876dcec] {\n  transform: scale(0.85);\n  opacity: 0;\n  visibility: hidden;\n}\n.search-wrap.is-active .search-form[data-v-7876dcec] {\n  transform: translateY(-50%) scale(1);\n  opacity: 1;\n  visibility: visible;\n}\n.search-form[data-v-7876dcec] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%) scale(1.2);\n  transform-origin: 50% 0px;\n  opacity: 0;\n  visibility: hidden;\n  max-width: 360px;\n  width: 100%;\n  display: flex;\n  transition: transform 250ms cubic-bezier(0.5, 0, 0.2, 1), opacity 250ms cubic-bezier(0.5, 0, 0.2, 1), visibility 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.search-input[data-v-7876dcec] {\n  background-color: transparent;\n  border: none;\n  font: inherit;\n  border-bottom: 1px solid #999;\n  color: inherit;\n  padding: 3px 10px;\n  font-size: 15px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  width: 100%;\n  flex-basis: auto;\n  display: block;\n  transition: border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.search-input[data-v-7876dcec]:focus {\n  border-color: #fff;\n}\n.search-close[data-v-7876dcec] {\n  background: transparent;\n  border: none;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  user-select: none;\n  padding: 0;\n  color: #999;\n  margin-right: 15px;\n  margin-left: 10px;\n  flex-shrink: 0;\n  transition: color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.search-close[data-v-7876dcec]:hover {\n  color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(17)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null

	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (!hasSSR) {
	    update(obj)
	  }

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	var NAV_MENU = '.js-navmenu';
	var SEARCH = '.js-navsearch';
	var SEARCH_WRAP = '.js-navsearch';

	exports.default = Vue.component('app-header', {
		mounted: function mounted() {
			var vm = this;
			var toggleNav = vm.$el.querySelector('.js-navmenu-toggle');
			var toggleSearch = vm.$el.querySelector('.js-navsearch-toggle');
			var closeSearch = vm.$el.querySelector('.js-navsearch-close');
			var searchToggle = vm.$el.querySelector('.js-search-toggle');

			toggleNav.addEventListener('click', function (e) {
				e.preventDefault();

				state(NAV_MENU, 'toggle');

				e._meta.onNav = true;
			});

			toggleSearch.addEventListener('click', function (e) {
				e.preventDefault();

				state(SEARCH, 'show');
			});

			searchToggle.addEventListener('click', function (e) {
				e.preventDefault();

				state(SEARCH_WRAP, 'toggle', 'is-open');

				e._meta.onSearch = true;
			});

			vm.$el.querySelector('.js-navmenu').addEventListener('click', function (e) {
				e._meta.onNav = true;
			});

			closeSearch.addEventListener('click', function (e) {
				e.preventDefault();

				state(SEARCH, 'hide');
			});

			vm.$router.beforeEach(function (from, to, next) {
				state(NAV_MENU, 'hide');

				next();
			});

			document.body.addEventListener('click', function (e) {
				if (!e._meta) {
					e._meta = {};
				}
			}, true);

			document.body.addEventListener('click', function (e) {
				if (!e._meta.onNav) {
					state(NAV_MENU, 'hide');
				}

				// if (!e._meta.onSearch) {
				// 	state(SEARCH_WRAP, 'hide', 'is-open');
				// }
			});

			document.body.addEventListener('keyup', function (e) {
				var target = e.target.tagName;

				if (target !== 'INPUT' && target !== 'TEXTAREA' && e.keyCode === 27) {
					state(NAV_MENU, 'hide');
					state(SEARCH, 'hide');
					// state(SEARCH_WRAP, 'hide', 'is-open');
				}
			});

			function state(elem, state) {
				var elemClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is-active';

				if (state === 'show') {
					vm.$el.querySelector(elem).classList.add(elemClass);
				} else if (state === 'hide') {
					vm.$el.querySelector(elem).classList.remove(elemClass);
				} else if (state === 'toggle') {
					vm.$el.querySelector(elem).classList.toggle(elemClass);
				}
			}
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', {
	    staticClass: "js-main-header header"
	  }, [_c('div', {
	    staticClass: "header-wrap"
	  }, [_c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('div', {
	    attrs: {
	      "grid-row": "align-center nowrap"
	    }
	  }, [_c('div', {
	    staticClass: "header-col",
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  }, [_c('button', {
	    staticClass: "js-navmenu-toggle header-link",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-menu"
	    }
	  })])])]), _vm._m(0), _c('div', {
	    staticClass: "header-col search-toggle",
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  }, [_c('button', {
	    staticClass: "js-search-toggle header-link",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-menu"
	    }
	  })])])]), _c('div', {
	    staticClass: "js-navsearch search-wrap header-col u-hidden",
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  }, [_c('form', {
	    staticClass: "search-form"
	  }, [_c('input', {
	    staticClass: "search-input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Search something"
	    }
	  }), _c('button', {
	    staticClass: "js-navsearch-close search-close"
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-close"
	    }
	  })])])]), _c('div', {
	    staticClass: "social"
	  }, [_c('a', {
	    staticClass: "header-link",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-rss"
	    }
	  })])]), _c('a', {
	    staticClass: "header-link",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-twitter"
	    }
	  })])]), _c('a', {
	    staticClass: "header-link",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-tumblr"
	    }
	  })])]), _c('a', {
	    staticClass: "header-link",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-facebook"
	    }
	  })])]), _c('button', {
	    staticClass: "js-navsearch-toggle header-link",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-search"
	    }
	  })])])])])])])]), _c('div', {
	    staticClass: "js-navmenu nav-wrap"
	  }, [_c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('nav', {
	    staticClass: "nav"
	  }, [_c('router-link', {
	    staticClass: "nav-link",
	    attrs: {
	      "to": {
	        name: 'home'
	      }
	    }
	  }, [_vm._v("Home")]), _c('router-link', {
	    staticClass: "nav-link",
	    attrs: {
	      "to": {
	        name: 'post',
	        params: {
	          id: 1
	        }
	      }
	    }
	  }, [_vm._v("Post")]), _c('router-link', {
	    staticClass: "nav-link",
	    attrs: {
	      "to": {
	        name: 'about'
	      }
	    }
	  }, [_vm._v("About")]), _c('router-link', {
	    staticClass: "nav-link",
	    attrs: {
	      "to": {
	        name: 'contacts'
	      }
	    }
	  }, [_vm._v("Contacts")])], 1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header-col logo",
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  }, [_c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('span', [_vm._v("Deco")]), _vm._v("Blog")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7876dcec", module.exports)
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(22)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(24),
	  /* template */
	  __webpack_require__(25),
	  /* scopeId */
	  "data-v-75cbdbea",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\app-banner.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app-banner.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-75cbdbea", Component.options)
	  } else {
	    hotAPI.reload("data-v-75cbdbea", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("c2d9ec96", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-75cbdbea\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-banner.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-75cbdbea\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-banner.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.carousel-wrap[data-v-75cbdbea] {\n  position: relative;\n}\n.carousel-wrap[data-v-75cbdbea]:before {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background-color: #212429;\n}\n.newsletter[data-v-75cbdbea] {\n  display: flex;\n  align-items: center;\n  background-color: #f7f7f7;\n  padding: 20px 15px;\n}\n@media screen and (min-width: 576px) {\n.newsletter > *[data-v-75cbdbea] {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n}\n@media screen and (max-width: 991px) {\n.newsletter[data-v-75cbdbea] {\n    flex-wrap: wrap;\n}\n}\n@media screen and (max-width: 575px) {\n.newsletter[data-v-75cbdbea] {\n    padding: 30px 0 20px;\n}\n}\n.newsletter-title[data-v-75cbdbea] {\n  width: 200px;\n  flex-shrink: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  letter-spacing: 4px;\n}\n@media screen and (max-width: 991px) {\n.newsletter-title[data-v-75cbdbea] {\n    flex-basis: calc(100% - 30px);\n    width: auto;\n    margin-bottom: 15px;\n}\n}\n@media screen and (max-width: 575px) {\n.newsletter-title[data-v-75cbdbea] {\n    flex-basis: 100%;\n}\n}\n.newsletter-control[data-v-75cbdbea] {\n  flex-basis: 30%;\n}\n@media screen and (max-width: 991px) {\n.newsletter-control[data-v-75cbdbea] {\n    flex-basis: calc(50% - 30px);\n    margin-bottom: 30px;\n}\n}\n@media screen and (max-width: 575px) {\n.newsletter-control[data-v-75cbdbea] {\n    flex-basis: 100%;\n}\n}\n.newsletter-submit[data-v-75cbdbea] {\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  flex-grow: 1;\n}\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = Vue.component('app-banner', {});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "js-banner"
	  }, [_c('div', {
	    staticClass: "carousel-wrap"
	  }, [_c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('app-carousel')], 1)]), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('form', {
	    staticClass: "newsletter"
	  }, [_c('h2', {
	    staticClass: "u-h2 newsletter-title"
	  }, [_vm._v("Signup to Newsletter")]), _c('input', {
	    staticClass: "form__control newsletter-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "Your Name"
	    }
	  }), _c('input', {
	    staticClass: "form__control newsletter-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "Your Email Address"
	    }
	  }), _c('button', {
	    staticClass: "btn newsletter-submit",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("Subscribe Now")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-75cbdbea", module.exports)
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(27)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(29),
	  /* template */
	  __webpack_require__(30),
	  /* scopeId */
	  "data-v-3fe53eae",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\app-aside.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app-aside.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3fe53eae", Component.options)
	  } else {
	    hotAPI.reload("data-v-3fe53eae", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("e8d5af86", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-3fe53eae\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-aside.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-3fe53eae\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-aside.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.aside[data-v-3fe53eae] {\n  background-color: #fff;\n  box-shadow: 0 2px 3px rgba(230,230,230,0.2);\n  padding: 40px 30px;\n}\n@media screen and (max-width: 991px) {\n.aside[data-v-3fe53eae] {\n    padding: 20px 15px;\n}\n}\n@media screen and (min-width: 768px) and (max-width: 991px) {\n.aside[data-v-3fe53eae] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n}\n.aside > [data-v-3fe53eae]:nth-child(even) {\n    margin-left: 10px;\n}\n.aside > [data-v-3fe53eae]:nth-child(odd) {\n    margin-right: 10px;\n}\n}\n.aside-item[data-v-3fe53eae] {\n  margin-bottom: 40px;\n}\n@media screen and (max-width: 991px) {\n.aside-item[data-v-3fe53eae] {\n    flex-basis: calc(50% - 10px);\n}\n}\n.search[data-v-3fe53eae] {\n  display: flex;\n}\n.search-control[data-v-3fe53eae] {\n  display: block;\n  background: #f9f9fb;\n  font-size: 15px;\n  font-weight: 300;\n  flex-grow: 1;\n  padding: 0 20px;\n  box-shadow: none;\n  border-right: none;\n}\n.search-control[data-v-3fe53eae]:not(:hover):not(:focus) {\n  border-color: #f9f9fb;\n}\n.search-submit[data-v-3fe53eae] {\n  display: block;\n  border: none;\n  outline: none;\n  background: #212121;\n  flex-shrink: 0;\n  width: 50px;\n  height: 50px;\n  font-size: 16px;\n  text-align: center;\n  line-height: normal;\n  color: #fff;\n  cursor: pointer;\n  transition: background 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.search-submit[data-v-3fe53eae]:hover {\n  background: #333;\n}\n.search-submit[data-v-3fe53eae]:active {\n  background: #404040;\n}\n.title[data-v-3fe53eae] {\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 27px;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n@media screen and (min-width: 576px) {\n.categories[data-v-3fe53eae],\n  .latest[data-v-3fe53eae] {\n    margin: 0 -30px;\n}\n}\n@media screen and (max-width: 575px) {\n.categories[data-v-3fe53eae],\n  .latest[data-v-3fe53eae] {\n    margin: 0;\n}\n}\n.categories-item[data-v-3fe53eae],\n.latest-item[data-v-3fe53eae] {\n  border-top: 3px solid #f7f7f7;\n  display: flex;\n  text-transform: uppercase;\n  transition: background 250ms cubic-bezier(0.5, 0, 0.2, 1);\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n.categories-item[data-v-3fe53eae]:last-child,\n.latest-item[data-v-3fe53eae]:last-child {\n  border-bottom: 3px solid #f7f7f7;\n}\n.categories-item[data-v-3fe53eae]:hover,\n.latest-item[data-v-3fe53eae]:hover {\n  background: #f7f7f7;\n}\n.categories-item[data-v-3fe53eae] {\n  justify-content: space-between;\n  padding: 11px 30px;\n  color: #212121;\n  font-size: 16px;\n  font-weight: 500;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n@media screen and (max-width: 575px) {\n.categories-item[data-v-3fe53eae] {\n    padding: 11px 0;\n}\n}\n.categories-count[data-v-3fe53eae] {\n  white-space: nowrap;\n}\n.latest-item[data-v-3fe53eae] {\n  padding: 20px 30px;\n}\n@media screen and (max-width: 575px) {\n.latest-item[data-v-3fe53eae] {\n    padding: 20px 0;\n}\n}\n.latest-image[data-v-3fe53eae] {\n  width: 80px;\n  height: 60px;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.latest-text[data-v-3fe53eae] {\n  flex: 1;\n}\n.latest-title[data-v-3fe53eae] {\n  margin-bottom: 11px;\n  margin-top: -3px;\n  line-height: 1.2;\n  letter-spacing: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 38.4px;\n}\n.latest-meta[data-v-3fe53eae] {\n  color: #999;\n  font-weight: 300;\n  line-height: 1;\n}\n.latest-meta > [data-v-3fe53eae]:not(:last-child) {\n  margin-right: 20px;\n}\n.socials[data-v-3fe53eae] {\n  display: flex;\n  justify-content: space-between;\n  margin: -8px;\n}\n@media screen and (max-width: 767px) {\n.socials[data-v-3fe53eae] {\n    margin: -8px -8px 2px;\n}\n}\n@media screen and (max-width: 991px) {\n.socials[data-v-3fe53eae] {\n    justify-content: space-around;\n}\n}\n.socials-item[data-v-3fe53eae] {\n  display: inline-block;\n  padding: 8px;\n  color: #464646;\n  font-size: 21px;\n  line-height: 1;\n  transition: color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.socials-item[data-v-3fe53eae]:hover {\n  color: #000;\n}\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = Vue.component('app-aside', {});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "c-main__aside aside"
	  }, [_c('form', {
	    staticClass: "aside-item search"
	  }, [_c('input', {
	    staticClass: "form__control search-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "Search"
	    }
	  }), _c('button', {
	    staticClass: "search-submit",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-search"
	    }
	  })])])]), _c('img', {
	    staticClass: "responsive aside-item",
	    attrs: {
	      "src": "assets/img/bn/pic-01.png",
	      "alt": ""
	    }
	  }), _c('div', {
	    staticClass: "aside-item"
	  }, [_c('h2', {
	    staticClass: "u-h2 title"
	  }, [_vm._v("Categories")]), _c('div', {
	    staticClass: "categories"
	  }, _vm._l((7), function(i) {
	    return _c('a', {
	      staticClass: "categories-item",
	      attrs: {
	        "href": "#"
	      }
	    }, [_c('span', [_vm._v("Lifestyle")]), _c('span', {
	      staticClass: "categories-count"
	    }, [_vm._v("98")])])
	  }))]), _c('img', {
	    staticClass: "responsive aside-item",
	    attrs: {
	      "src": "assets/img/bn/pic-02.png",
	      "alt": ""
	    }
	  }), _c('div', {
	    staticClass: "aside-item"
	  }, [_c('h2', {
	    staticClass: "u-h2 title"
	  }, [_vm._v("Latest Post")]), _c('div', {
	    staticClass: "latest"
	  }, _vm._l((3), function(i) {
	    return _c('a', {
	      staticClass: "latest-item",
	      attrs: {
	        "href": "#"
	      }
	    }, [_c('div', {
	      staticClass: "latest-image",
	      style: ({
	        backgroundImage: 'url(http://unsplash.it/80/60/?random)'
	      })
	    }), _vm._m(0, true)])
	  }))]), _c('div', {
	    staticClass: "aside-item socials"
	  }, [_c('a', {
	    staticClass: "socials-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-twitter"
	    }
	  })])]), _c('a', {
	    staticClass: "socials-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-facebook"
	    }
	  })])]), _c('a', {
	    staticClass: "socials-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-dribbble"
	    }
	  })])]), _c('a', {
	    staticClass: "socials-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-pinterest"
	    }
	  })])]), _c('a', {
	    staticClass: "socials-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-linkedin"
	    }
	  })])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "latest-text"
	  }, [_c('h3', {
	    staticClass: "u-h3 latest-title"
	  }, [_vm._v("Jurney towards a lifestyle")]), _c('div', {
	    staticClass: "latest-meta"
	  }, [_c('span', [_vm._v("Jan. 16 2015")]), _c('span', [_vm._v("Like 2555")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3fe53eae", module.exports)
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(32)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(34),
	  /* template */
	  __webpack_require__(35),
	  /* scopeId */
	  "data-v-574478fa",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\app-footer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app-footer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-574478fa", Component.options)
	  } else {
	    hotAPI.reload("data-v-574478fa", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("1400721f", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-574478fa\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-footer.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-574478fa\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-footer.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.footer[data-v-574478fa] {\n  background: #212429;\n  color: #f9f9fb;\n  font-size: 15px;\n  font-weight: 300;\n  padding: 55px 0 20px;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n@media screen and (max-width: 991px) {\n.footer[data-v-574478fa] {\n    padding-bottom: 20px;\n}\n}\n@media screen and (max-width: 1199px) {\n.footer-item[data-v-574478fa] {\n    margin-bottom: 40px;\n}\n}\n@media screen and (max-width: 767px) {\n.footer-item[data-v-574478fa]:last-of-type {\n    margin-bottom: 0;\n}\n}\n.heading[data-v-574478fa] {\n  color: #f9f9fb;\n  margin: 0 0 30px 0;\n}\n.tweet[data-v-574478fa] {\n  position: relative;\n  padding-left: 23px;\n}\n.tweet[data-v-574478fa]:not(:last-of-type) {\n  margin-bottom: 30px;\n}\n.tweet-icon[data-v-574478fa] {\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  top: 5px;\n  left: 0;\n}\n.tweet-author[data-v-574478fa] {\n  display: inline-block;\n  border-bottom: 1px solid transparent;\n  margin-bottom: 7px;\n  transition: color 250ms cubic-bezier(0.5, 0, 0.2, 1), border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.tweet-author[data-v-574478fa]:hover {\n  color: #fff;\n  border-color: #fff;\n}\n.tweet-text[data-v-574478fa] {\n  margin: 0;\n}\n.photos[data-v-574478fa] {\n  display: flex;\n  margin: -4px 0;\n  flex-wrap: wrap;\n}\n.photo[data-v-574478fa] {\n  display: block;\n  flex-basis: calc(100% / 3 - 4px);\n  margin: 0 2px 2px;\n  background-color: #f3f3f3;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100px;\n}\n.comment[data-v-574478fa] {\n  padding-bottom: 23px;\n}\n.comment[data-v-574478fa]:not(:last-of-type) {\n  border-bottom: 1px solid #65676a;\n  margin-bottom: 23px;\n}\n.comment-author[data-v-574478fa] {\n  margin-bottom: 7px;\n}\n.comment-author a[data-v-574478fa] {\n  border-bottom: 1px solid transparent;\n  transition: color 250ms cubic-bezier(0.5, 0, 0.2, 1), border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.comment-author a[data-v-574478fa]:hover {\n  color: #fff;\n  border-color: #fff;\n}\n.copy[data-v-574478fa] {\n  background-color: #17191c;\n  color: rgba(255,255,255,0.4);\n  padding: 14px 0;\n  transition: color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.copy[data-v-574478fa]:hover {\n  color: rgba(255,255,255,0.7);\n}\n.copy-list[data-v-574478fa] {\n  font-weight: 300;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 1;\n}\n@media screen and (max-width: 575px) {\n.copy-list[data-v-574478fa] {\n    line-height: inherit;\n}\n}\n.copy-list a[data-v-574478fa] {\n  border-bottom: 1px solid transparent;\n  transition: border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.copy-list a[data-v-574478fa]:hover {\n  color: #fff;\n  border-color: #fff;\n}\n.copy-list li[data-v-574478fa] {\n  display: inline-block;\n  margin: 0;\n  padding: 0 15px;\n}\n@media screen and (min-width: 576px) {\n.copy-list li[data-v-574478fa]:not(:last-child) {\n    border-right: 1px solid;\n}\n}\n@media screen and (max-width: 575px) {\n.copy-list li[data-v-574478fa] {\n    display: block;\n}\n.copy-list li[data-v-574478fa]:not(:last-child) {\n    margin-bottom: 10px;\n}\n}\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = Vue.component('app-footer', {});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', [_c('div', {
	    staticClass: "footer"
	  }, [_c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('div', {
	    attrs: {
	      "grid-row": "xs-1 md-2 xl-4"
	    }
	  }, [_vm._m(0), _c('div', {
	    staticClass: "footer-item",
	    attrs: {
	      "grid-col": ""
	    }
	  }, [_c('h3', {
	    staticClass: "u-h3 heading"
	  }, [_vm._v("Latest Tweets")]), _c('div', {
	    staticClass: "tweets"
	  }, _vm._l((2), function(i) {
	    return _c('div', {
	      staticClass: "tweet"
	    }, [_c('svg', {
	      staticClass: "svg-icon tweet-icon"
	    }, [_c('use', {
	      attrs: {
	        "xlink:href": "#svg-twitter"
	      }
	    })]), _c('a', {
	      staticClass: "tweet-author",
	      attrs: {
	        "href": "#"
	      }
	    }, [_vm._v("@Twitter@magicalrebekah")]), _c('p', {
	      staticClass: "tweet-text"
	    }, [_vm._v("Developer Advocate @heyval isaiyou knows the very well is about things.")])])
	  }))]), _c('div', {
	    staticClass: "footer-item",
	    attrs: {
	      "grid-col": ""
	    }
	  }, [_c('h3', {
	    staticClass: "u-h3 heading"
	  }, [_vm._v("Follow me instagram")]), _c('div', {
	    staticClass: "photos"
	  }, _vm._l((6), function(i) {
	    return _c('a', {
	      staticClass: "photo",
	      style: ({
	        backgroundImage: 'url(http://unsplash.it/120/100)'
	      }),
	      attrs: {
	        "href": "#"
	      }
	    })
	  }))]), _c('div', {
	    staticClass: "footer-item",
	    attrs: {
	      "grid-col": ""
	    }
	  }, [_c('h3', {
	    staticClass: "u-h3 heading"
	  }, [_vm._v("Latest Comments")]), _c('div', {
	    staticClass: "comments"
	  }, _vm._l((2), function(i) {
	    return _c('div', {
	      staticClass: "comment"
	    }, [_vm._m(1, true), _c('div', {
	      staticClass: "comment-text"
	    }, [_vm._v("Developer Advocate @heyval isaiyou know the very well is talking about things.")])])
	  }))])])])]), _vm._m(2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "footer-item",
	    attrs: {
	      "grid-col": ""
	    }
	  }, [_c('h3', {
	    staticClass: "u-h3 heading"
	  }, [_vm._v("About Blog")]), _c('p', [_vm._v("Lorem ipsum dolor sit amet, conser adipisicing  esse cillum dolore nulla pariatur.")]), _c('img', {
	    staticClass: "responsive",
	    attrs: {
	      "src": "http://unsplash.it/360/150"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "comment-author"
	  }, [_vm._v("From "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("Alex")]), _vm._v(" :")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "copy"
	  }, [_c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('ul', {
	    staticClass: "copy-list"
	  }, [_c('li', [_vm._v("@2015 copyright .all right reserved by "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("Awesome Theme")])]), _c('li', [_c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("Terms Policy")])]), _c('li', [_c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("Disclaimer")])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-574478fa", module.exports)
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(37)
	__webpack_require__(39)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(41),
	  /* template */
	  __webpack_require__(45),
	  /* scopeId */
	  "data-v-6420447f",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\app-carousel.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app-carousel.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6420447f", Component.options)
	  } else {
	    hotAPI.reload("data-v-6420447f", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("f99c98f0", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6420447f\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-carousel.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6420447f\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-carousel.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.slick-dots {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n}\n.slick-dots li {\n  display: inline-block;\n}\n.slick-dots button {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  color: transparent;\n  text-indent: -100px;\n  overflow: hidden;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots button:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 10px;\n  height: 10px;\n  border: 1px solid #fff;\n}\n.slick-dots li.slick-active button:after {\n  background-color: #999;\n}\n", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("0fc4420e", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6420447f\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./app-carousel.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6420447f\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./app-carousel.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.carousel-wrap[data-v-6420447f] {\n  position: relative;\n  color: #fff;\n}\n.carousel-item[data-v-6420447f] {\n  background-color: #000;\n  background-size: cover;\n  background-position: center;\n  display: flex !important;\n  align-items: center;\n}\n@media screen and (min-width: 0) {\n.carousel-item[data-v-6420447f] {\n    height: 360px !important;\n}\n}\n@media screen and (min-width: 576px) {\n.carousel-item[data-v-6420447f] {\n    height: 400px !important;\n}\n}\n@media screen and (min-width: 768px) {\n.carousel-item[data-v-6420447f] {\n    height: 440px !important;\n}\n}\n@media screen and (min-width: 992px) {\n.carousel-item[data-v-6420447f] {\n    height: 500px !important;\n}\n}\n@media screen and (min-width: 1200px) {\n.carousel-item[data-v-6420447f] {\n    height: 580px !important;\n}\n}\n.carousel-inner[data-v-6420447f] {\n  max-width: 600px;\n  padding-left: 100px;\n  position: relative;\n  opacity: 1;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-word;\n  transition: transform 250ms cubic-bezier(0.5, 0, 0.2, 1), opacity 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n@media screen and (min-width: 768px) {\n.carousel-inner[data-v-6420447f] {\n    transform: scale(0.95) translateX(-40px);\n    transition-delay: 100ms;\n}\n}\n@media screen and (max-width: 767px) {\n.carousel-inner[data-v-6420447f] {\n    transform-origin: left center;\n    transform: perspective(200px) scale(0.98) rotateY(2deg);\n    transition-delay: 200ms;\n}\n}\n.slick-current .carousel-inner[data-v-6420447f] {\n  opacity: 1;\n  transform: scale(1) translateX(0);\n}\n@media screen and (max-width: 991px) {\n.carousel-inner[data-v-6420447f] {\n    padding-left: 60px;\n}\n}\n@media screen and (max-width: 767px) {\n.carousel-inner[data-v-6420447f] {\n    padding-left: 40px;\n}\n}\n@media screen and (max-width: 575px) {\n.carousel-inner[data-v-6420447f] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n}\n.carousel-caption[data-v-6420447f] {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: 4px;\n  margin: 0 0 20px;\n}\n@media screen and (max-width: 767px) {\n.carousel-caption[data-v-6420447f] {\n    font-size: 16px;\n    margin: 0 0 10px;\n}\n}\n.carousel-title[data-v-6420447f] {\n  text-shadow: 1px 1.7px 0 rgba(0,0,0,0.44);\n  font-size: 40px;\n  font-weight: 700;\n  line-height: 1.2;\n  letter-spacing: 6px;\n  text-transform: uppercase;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 144px;\n}\n@media screen and (max-width: 991px) {\n.carousel-title[data-v-6420447f] {\n    font-size: 32px;\n    line-height: 1.4;\n}\n}\n@media screen and (max-width: 767px) {\n.carousel-title[data-v-6420447f] {\n    font-size: 28px;\n}\n}\n@media screen and (max-width: 575px) {\n.carousel-title[data-v-6420447f] {\n    font-size: 24px;\n    letter-spacing: 3px;\n}\n}\n.carousel-controls[data-v-6420447f] {\n  position: absolute;\n  top: 50%;\n  right: -60px;\n  transform: translateY(-50%) rotateZ(-90deg);\n}\n@media screen and (max-width: 767px) {\n.carousel-controls[data-v-6420447f] {\n    transform: none;\n    top: auto;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n}\n.carousel-arrows[data-v-6420447f] {\n  margin-top: 14px;\n  text-align: center;\n}\n.carousel-article-link[data-v-6420447f] {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  display: inline-block;\n  margin: 0 15px;\n}\n.carousel-arrow[data-v-6420447f] {\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  cursor: pointer;\n  color: inherit;\n  font-size: 22px;\n  line-height: 22px;\n  vertical-align: middle;\n}\n", ""]);

	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(42);

	__webpack_require__(43);

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = Vue.component('app-carousel', {
		data: function data() {
			return {
				items: [{
					image: 'assets/img/carousel/pic-01.png',
					title: 'BodyBuilding best for you health',
					caption: 'Latest News'
				}, {
					image: 'http://unsplash.it/1500/500/?image=1038&blur',
					title: 'The best title i ever seen',
					caption: 'Awesome News'
				}, {
					image: 'http://unsplash.it/1500/500/?image=958&blur',
					title: 'Another best of the best article',
					caption: 'Super News'
				}]
			};
		},
		mounted: function mounted() {
			var $elem = $(this.$el);

			$elem.find('.js-slick-carousel').slick({
				accessibility: false,
				vertical: true,
				prevArrow: $elem.find('.js-slick-prev-arrow'),
				nextArrow: $elem.find('.js-slick-next-arrow'),
				dots: true,
				appendDots: $elem.find('.js-slick-dots-container'),
				speed: 300,
				// better animations
				infinite: false,
				swipe: false,
				autoplay: true,
				autoplaySpeed: 8000,

				responsive: [{
					breakpoint: 1024,
					settings: {
						vertical: false,
						swipe: true
					}
				}]
			});
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/

	 Version: 1.6.0
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues

	 */
	!function(a){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
	d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!../../postcss-loader/index.js!./slick.css", function() {
				var newContent = require("!!../../css-loader/index.js!../../postcss-loader/index.js!./slick.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n", ""]);

	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "carousel-wrap"
	  }, [_c('div', {
	    staticClass: "carousel js-slick-carousel"
	  }, _vm._l((_vm.items), function(item) {
	    return _c('div', {
	      staticClass: "carousel-item",
	      style: ({
	        backgroundImage: 'url(' + item.image + ')'
	      })
	    }, [_c('div', {
	      staticClass: "carousel-inner"
	    }, [_c('div', {
	      staticClass: "carousel-caption"
	    }, [_vm._v(_vm._s(item.caption))]), _c('h3', {
	      staticClass: "carousel-title"
	    }, [_vm._v(_vm._s(item.title))])])])
	  })), _c('div', {
	    staticClass: "carousel-controls"
	  }, [_c('div', {
	    staticClass: "js-slick-dots-container"
	  }), _c('div', {
	    staticClass: "carousel-arrows"
	  }, [_c('button', {
	    staticClass: "js-slick-next-arrow carousel-arrow",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-long-left-arrow"
	    }
	  })])]), _c('a', {
	    staticClass: "carousel-article-link",
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("Featured Article")]), _c('button', {
	    staticClass: "js-slick-prev-arrow carousel-arrow",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-long-right-arrow"
	    }
	  })])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6420447f", module.exports)
	  }
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(47)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(49),
	  /* template */
	  null,
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\transition-fade.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76f4d35e", Component.options)
	  } else {
	    hotAPI.reload("data-v-76f4d35e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("52bce86b", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-76f4d35e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./transition-fade.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-76f4d35e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./transition-fade.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/****** What we need for transition effect: ******/\n.router-wrap {\n  position: relative;\n}\n.fade-enter-active,\n.fade-leave-active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform-origin: top;\n  transition: opacity 0.6s cubic-bezier(0.5, 0, 0.2, 1), transform 0.6s cubic-bezier(0.5, 0, 0.2, 1);\n}\n.fade-enter-active {\n  z-index: 1;\n}\n.fade-leave-active {\n  z-index: -1;\n}\n.fade-enter-to,\n.fade-leave {\n  opacity: 1;\n  transform: scale(1);\n}\n.fade-leave-to,\n.fade-enter {\n  opacity: 0;\n}\n.fade-leave-to {\n  transform: scale(1.01);\n}\n.fade-enter {\n  transform: scale(0.99);\n}\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	//


	// transition magic
	Vue.component('transition-fade', {
		// component just as 'function'
		functional: true,

		render: function render(createElement, context) {
			var data = {
				props: {
					// name for CSS classes
					name: 'fade'
				},

				on: {
					// set parent's (.container) min-height for NEW element
					enter: function enter(el) {
						if (el.parentNode) {
							el.parentNode.style.minHeight = el.offsetHeight + 'px';
						}
					},


					// remove unnecessary (now) min-height, after transition end
					afterEnter: function afterEnter(el) {
						if (el.parentNode) {
							el.parentNode.style.minHeight = '';
						}
					}
				}
			};

			// return to DOM
			return createElement('transition', data, context.children);
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(51)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(53),
	  /* template */
	  __webpack_require__(54),
	  /* scopeId */
	  "data-v-00d6373f",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\app-post.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app-post.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-00d6373f", Component.options)
	  } else {
	    hotAPI.reload("data-v-00d6373f", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("122b0c4f", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-00d6373f\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-post.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-00d6373f\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-post.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.post[data-v-00d6373f] {\n  box-shadow: 0 2px 3px rgba(230,230,230,0.2);\n}\n.post-poster[data-v-00d6373f] {\n  background-color: #f2f2f2;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  display: block;\n}\n@media screen and (min-width: 0) {\n.post-poster[data-v-00d6373f] {\n    height: 340px;\n}\n}\n@media screen and (min-width: 576px) {\n.post-poster[data-v-00d6373f] {\n    height: 380px;\n}\n}\n@media screen and (min-width: 768px) {\n.post-poster[data-v-00d6373f] {\n    height: 300px;\n}\n}\n@media screen and (min-width: 992px) {\n.post-poster[data-v-00d6373f] {\n    height: 270px;\n}\n}\n@media screen and (min-width: 1200px) {\n.post-poster[data-v-00d6373f] {\n    height: 400px;\n}\n}\n@media screen and (min-width: 1800px) {\n.post-poster[data-v-00d6373f] {\n    height: 490px;\n}\n}\n.post-poster-src[data-v-00d6373f] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 44px;\n  line-height: 44px;\n  background-color: #cc2127;\n  text-align: center;\n  font-size: 26px;\n  color: #fff;\n}\n.post-content[data-v-00d6373f] {\n  background-color: #fff;\n}\n@media screen and (min-width: 0) {\n.post-content[data-v-00d6373f] {\n    padding: 30px 10px;\n}\n}\n@media screen and (min-width: 576px) {\n.post-content[data-v-00d6373f] {\n    padding: 30px 20px;\n}\n}\n@media screen and (min-width: 768px) {\n.post-content[data-v-00d6373f] {\n    padding: 30px;\n}\n}\n@media screen and (min-width: 992px) {\n.post-content[data-v-00d6373f] {\n    padding: 40px;\n}\n}\n@media screen and (min-width: 1200px) {\n.post-content[data-v-00d6373f] {\n    padding: 50px;\n}\n}\n@media screen and (min-width: 1800px) {\n.post-content[data-v-00d6373f] {\n    padding: 60px;\n}\n}\n.post-media-wrap[data-v-00d6373f] {\n  position: relative;\n}\n.post-media-icon[data-v-00d6373f] {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n  background: #212121;\n}\n.post-content-inverted[data-v-00d6373f] {\n  background-color: #131d1c;\n  color: #fff;\n}\n.post-media-icon[data-v-00d6373f] {\n  color: #fff;\n  background: #212121;\n}\n.post-content-inverted .post-media-icon[data-v-00d6373f] {\n  color: #212121;\n  background: #fff;\n}\n.post-header[data-v-00d6373f] {\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n.post-category[data-v-00d6373f] {\n  color: #999;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n.post-title[data-v-00d6373f] {\n  margin: 10px 0 17px;\n  letter-spacing: 2px;\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n@media screen and (min-width: 0) {\n.post-title[data-v-00d6373f] {\n    font-size: 18px;\n}\n}\n@media screen and (min-width: 576px) {\n.post-title[data-v-00d6373f] {\n    font-size: 18px;\n}\n}\n@media screen and (min-width: 768px) {\n.post-title[data-v-00d6373f] {\n    font-size: 22px;\n}\n}\n@media screen and (min-width: 992px) {\n.post-title[data-v-00d6373f] {\n    font-size: 24px;\n}\n}\n@media screen and (min-width: 1200px) {\n.post-title[data-v-00d6373f] {\n    font-size: 26px;\n}\n}\n@media screen and (min-width: 1800px) {\n.post-title[data-v-00d6373f] {\n    font-size: 28px;\n}\n}\n.post-meta[data-v-00d6373f] {\n  color: #999;\n  display: inline-flex;\n  align-items: center;\n  font-size: 15px;\n}\n.post-meta .svg-icon[data-v-00d6373f] {\n  color: #464646;\n  line-height: 24px;\n  margin-right: 10px;\n}\n.post-meta a[data-v-00d6373f] {\n  border-bottom: 1px solid transparent;\n  transition: border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.post-meta a[data-v-00d6373f]:hover {\n  border-color: currentColor;\n}\n@media screen and (min-width: 576px) {\n.post-meta > [data-v-00d6373f]:not(:last-child) {\n    margin-right: 30px;\n}\n}\n@media screen and (max-width: 575px) {\n.post-meta > [data-v-00d6373f]:not(:last-child) {\n    margin-right: 15px;\n}\n}\n.post-readmore[data-v-00d6373f] {\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 24px 0 0;\n}\n.post-readmore-link[data-v-00d6373f] {\n  background: transparent;\n  display: inline-block;\n  border-left: 1px solid #d7d7d7;\n  border-right: 1px solid #d7d7d7;\n  padding: 8px 20px;\n  letter-spacing: 2.5px;\n  color: #212121;\n  text-transform: uppercase;\n  cursor: pointer;\n  text-indent: 2px;\n  transition: background 250ms cubic-bezier(0.5, 0, 0.2, 1), color 250ms cubic-bezier(0.5, 0, 0.2, 1), border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.post-readmore-link[data-v-00d6373f]:hover {\n  background: #212121;\n  color: #fff;\n  border-color: #212121;\n}\n.post-footer[data-v-00d6373f] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  border: 1px solid #f7f7f7;\n}\n@media screen and (min-width: 0) {\n.post-footer[data-v-00d6373f] {\n    padding: 10px 10px;\n}\n}\n@media screen and (min-width: 576px) {\n.post-footer[data-v-00d6373f] {\n    padding: 10px 20px;\n}\n}\n@media screen and (min-width: 768px) {\n.post-footer[data-v-00d6373f] {\n    padding: 15px 30px;\n}\n}\n@media screen and (min-width: 992px) {\n.post-footer[data-v-00d6373f] {\n    padding: 20px 40px;\n}\n}\n@media screen and (min-width: 1200px) {\n.post-footer[data-v-00d6373f] {\n    padding: 25px 50px;\n}\n}\n@media screen and (min-width: 1800px) {\n.post-footer[data-v-00d6373f] {\n    padding: 25px 60px;\n}\n}\n@media screen and (max-width: 767px) {\n.post-footer[data-v-00d6373f] {\n    flex-wrap: wrap;\n}\n}\n.post-footer-item[data-v-00d6373f] {\n  padding: 10px;\n  border-radius: 4px;\n  line-height: 1;\n  transition: background-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\nbutton.post-footer-item[data-v-00d6373f] {\n  background-color: transparent;\n  border: none;\n  font: inherit;\n  text-transform: inherit;\n  letter-spacing: inherit;\n  color: inherit;\n  letter-spacing: inherit;\n  line-height: 1;\n}\nbutton.post-footer-item[data-v-00d6373f],\na.post-footer-item[data-v-00d6373f] {\n  cursor: pointer;\n}\na.post-footer-item[data-v-00d6373f]:hover,\nbutton.post-footer-item[data-v-00d6373f]:hover {\n  background-color: #f0f0f0;\n}\n.post-footer-stats[data-v-00d6373f] {\n  display: inline-flex;\n  color: #999;\n  font-size: 14px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n@media screen and (min-width: 576px) {\n.post-footer-stats > [data-v-00d6373f]:not(:last-child) {\n    margin-right: 15px;\n}\n}\n@media screen and (min-width: 992px) {\n.post-footer-stats > [data-v-00d6373f]:not(:last-child) {\n    margin-right: 28px;\n}\n}\n@media screen and (max-width: 767px) {\n.post-footer-stats[data-v-00d6373f] {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 12px;\n    width: 100%;\n}\n}\n.post-footer-stats .svg-icon[data-v-00d6373f] {\n  fill: #464646;\n  margin-right: 14px;\n  width: 15px;\n  height: 15px;\n}\n.post-footer-social[data-v-00d6373f] {\n  display: inline-flex;\n  align-items: center;\n}\n@media screen and (max-width: 767px) {\n.post-footer-social[data-v-00d6373f] {\n    display: inline-flex;\n    margin: 0 auto;\n}\n}\n.post-footer-social-item[data-v-00d6373f] {\n  display: block;\n  color: #464646;\n  line-height: 1;\n}\n.post-footer-social-item[data-v-00d6373f]:not(:first-child) {\n  margin-left: 12px;\n}\n.post-footer-social-item .svg-icon[data-v-00d6373f] {\n  width: 18px;\n  height: 18px;\n}\n.post-quote[data-v-00d6373f] {\n  text-align: center;\n  text-transform: uppercase;\n}\n.post-quote-text[data-v-00d6373f] {\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 2px;\n  margin: 30px 0;\n}\n@media screen and (min-width: 0) {\n.post-quote-text[data-v-00d6373f] {\n    font-size: 15px;\n}\n}\n@media screen and (min-width: 576px) {\n.post-quote-text[data-v-00d6373f] {\n    font-size: 16px;\n}\n}\n@media screen and (min-width: 768px) {\n.post-quote-text[data-v-00d6373f] {\n    font-size: 17px;\n}\n}\n@media screen and (min-width: 992px) {\n.post-quote-text[data-v-00d6373f] {\n    font-size: 18px;\n}\n}\n@media screen and (min-width: 1200px) {\n.post-quote-text[data-v-00d6373f] {\n    font-size: 19px;\n}\n}\n@media screen and (min-width: 1800px) {\n.post-quote-text[data-v-00d6373f] {\n    font-size: 20px;\n}\n}\n.post-quote-author[data-v-00d6373f] {\n  color: #999;\n  font-size: 16px;\n  font-weight: 400;\n  margin: 48px 0 0 0;\n}\n@media screen and (max-width: 767px) {\n.post-quote-author[data-v-00d6373f] {\n    margin-top: 15px;\n}\n}\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = Vue.component('app-post', {
		props: {
			post: {
				type: Object,
				default: {}
			},

			showReadmore: {
				type: Boolean,
				default: true
			}
		},

		methods: {
			isPost: function isPost(type) {
				var post = this.post;

				switch (type) {

					case 'quote':
						{
							if (post.quote && !post.text) {
								return true;
							}

							break;
						}

					case 'text':
						{
							if (!post.quote) {
								return true;
							}

							break;
						}

				}
			},
			getComments: function getComments() {
				if (this.post.comments === null) {
					return;
				}

				return 'No Comments';
			},
			getLikes: function getLikes() {
				if (this.post.likes === null) {
					return;
				}

				return 'Like ' + this.post.likes;
			},
			showFooter: function showFooter() {
				if (this.post.comments !== null || this.post.likes !== null || this.post.rating !== null) {
					return true;
				}

				return false;
			}
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "post",
	    attrs: {
	      "id": 'p-' + _vm.post.id
	    }
	  }, [_c('router-link', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.post.image),
	      expression: "post.image"
	    }],
	    staticClass: "post-poster",
	    style: ({
	      backgroundImage: 'url(' + _vm.post.image + ')'
	    }),
	    attrs: {
	      "to": {
	        name: 'post',
	        params: {
	          id: 1
	        }
	      }
	    }
	  }), _c('div', {
	    staticClass: "post-content post-media-wrap",
	    class: {
	      'post-content-inverted': _vm.isPost('quote')
	    }
	  }, [_c('div', {
	    staticClass: "post-media-icon"
	  }, [_c('svg', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.post.image && _vm.post.text),
	      expression: "!post.image && post.text"
	    }],
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-pen"
	    }
	  })]), _c('svg', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.post.image),
	      expression: "post.image"
	    }],
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-picture"
	    }
	  })]), _c('svg', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isPost('quote')),
	      expression: "isPost('quote')"
	    }],
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-quote"
	    }
	  })])]), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isPost('text')),
	      expression: "isPost('text')"
	    }]
	  }, [_c('header', {
	    staticClass: "post-header"
	  }, [_c('div', {
	    staticClass: "post-category"
	  }, [_vm._v(_vm._s(_vm.post.category))]), _c('h1', {
	    staticClass: "u-h1 post-title"
	  }, [_vm._v(_vm._s(_vm.post.title))]), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.post.author || _vm.post.date),
	      expression: "post.author || post.date"
	    }],
	    staticClass: "post-meta"
	  }, [(_vm.post.author) ? _c('div', [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-user"
	    }
	  })]), _c('a', {
	    attrs: {
	      "href": '#/user/' + _vm.post.author.username
	    }
	  }, [_vm._v(_vm._s(_vm.post.author.name))])]) : _vm._e(), _c('div', [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-calendar"
	    }
	  })]), _c('span', [_vm._v(_vm._s(_vm._f("to-date")(_vm.post.date)))])])])]), _c('div', {
	    staticClass: "u-plain-text"
	  }, [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.post.text)
	    }
	  })]), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showReadmore),
	      expression: "showReadmore"
	    }],
	    staticClass: "post-readmore"
	  }, [_c('router-link', {
	    staticClass: "post-readmore-link",
	    attrs: {
	      "to": {
	        name: 'post',
	        params: {
	          id: 1
	        }
	      }
	    }
	  }, [_vm._v("Read More")])], 1)]), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isPost('quote')),
	      expression: "isPost('quote')"
	    }],
	    staticClass: "post-quote"
	  }, [_c('p', {
	    staticClass: "post-quote-text"
	  }, [_vm._v(_vm._s(_vm.post.quote))]), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.post.quote_author),
	      expression: "post.quote_author"
	    }],
	    staticClass: "post-quote-author"
	  }, [_vm._v(_vm._s(_vm.post.quote_author))])])]), _c('footer', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showFooter()),
	      expression: "showFooter()"
	    }],
	    staticClass: "post-footer"
	  }, [_c('div', {
	    staticClass: "post-footer-stats"
	  }, [_c('div', {
	    staticClass: "post-footer-item"
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-comments"
	    }
	  })]), _c('span', [_vm._v(_vm._s(_vm.getComments()))])]), _c('button', {
	    staticClass: "post-footer-item",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-heart"
	    }
	  })]), _c('span', [_vm._v(_vm._s(_vm.getLikes()))])])]), _c('div', {
	    staticClass: "post-footer-social"
	  }, [_c('a', {
	    staticClass: "post-footer-social-item post-footer-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-dribbble"
	    }
	  })])]), _c('a', {
	    staticClass: "post-footer-social-item post-footer-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-facebook"
	    }
	  })])]), _c('a', {
	    staticClass: "post-footer-social-item post-footer-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-twitter"
	    }
	  })])]), _c('a', {
	    staticClass: "post-footer-social-item post-footer-item",
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-pinterest"
	    }
	  })])])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-00d6373f", module.exports)
	  }
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(56)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(59),
	  /* scopeId */
	  "data-v-f859d7ec",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\components\\app-post-recomended.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app-post-recomended.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f859d7ec", Component.options)
	  } else {
	    hotAPI.reload("data-v-f859d7ec", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("981d242c", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-f859d7ec\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-post-recomended.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-f859d7ec\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app-post-recomended.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.header[data-v-f859d7ec] {\n  margin-bottom: 28px;\n  display: flex;\n}\n.header-title[data-v-f859d7ec] {\n  margin: 0;\n}\n.arrows[data-v-f859d7ec] {\n  margin-left: auto;\n  white-space: nowrap;\n}\n.arrow[data-v-f859d7ec] {\n  background-color: #464646;\n  border: none;\n  color: #fff;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  transition: background-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.arrow[data-v-f859d7ec]:hover {\n  background-color: #000;\n}\n.arrow[data-v-f859d7ec]:not(:last-child) {\n  margin-right: 10px;\n}\n.arrow .svg-icon[data-v-f859d7ec] {\n  width: 14px;\n  height: 14px;\n}\n.carousel[data-v-f859d7ec] {\n  margin: 0 -15px;\n}\n.carousel-item[data-v-f859d7ec] {\n  padding: 0 15px;\n}\n.carousel-image[data-v-f859d7ec] {\n  height: 220px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: block;\n}\n.carousel-title[data-v-f859d7ec] {\n  padding: 10px 16px;\n  letter-spacing: 1.5px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n", ""]);

	// exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(42);

	__webpack_require__(43);

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = Vue.component('app-post-recomended', {
		props: ['posts'],

		mounted: function mounted() {
			var vm = this;
			var $elem = $(this.$el);

			$elem.find('.js-recomended-carousel').slick({
				accessibility: false,
				prevArrow: $elem.find('.js-recomended-prev'),
				nextArrow: $elem.find('.js-recomended-next'),
				speed: 300,
				// better animations
				infinite: true,
				swipe: false,
				slidesToShow: 3,

				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 1200,
					settings: {
						slidesToShow: 1
					}
				}]
			});
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('header', {
	    staticClass: "header"
	  }, [_c('h2', {
	    staticClass: "u-h2 header-title"
	  }, [_vm._v("Recomended Posts")]), _c('div', {
	    staticClass: "arrows"
	  }, [_c('button', {
	    staticClass: "js-recomended-prev arrow",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-long-left-arrow"
	    }
	  })])]), _c('button', {
	    staticClass: "js-recomended-next arrow",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-long-right-arrow"
	    }
	  })])])])]), _c('div', {
	    staticClass: "js-recomended-carousel carousel"
	  }, _vm._l((_vm.posts), function(post) {
	    return _c('div', {
	      staticClass: "carousel-item"
	    }, [_c('a', {
	      staticClass: "carousel-image",
	      style: ({
	        backgroundImage: 'url(' + post.image + ')'
	      }),
	      attrs: {
	        "href": "#"
	      }
	    }), _c('a', {
	      staticClass: "u-h3 carousel-title",
	      attrs: {
	        "href": "#"
	      }
	    }, [_vm._v(_vm._s(post.title))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f859d7ec", module.exports)
	  }
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Vue.filter('to-date', function (val) {
		var date = new Date(val);
		var year = date.getFullYear();
		var day = date.getDate();
		var month = date.getMonth();
		var monthName = '';

		switch (month) {
			case 0:
				{
					monthName = 'January';break;
				}
			case 1:
				{
					monthName = 'February';break;
				}
			case 2:
				{
					monthName = 'March';break;
				}
			case 3:
				{
					monthName = 'April';break;
				}
			case 4:
				{
					monthName = 'May';break;
				}
			case 5:
				{
					monthName = 'June';break;
				}
			case 6:
				{
					monthName = 'July';break;
				}
			case 7:
				{
					monthName = 'August';break;
				}
			case 8:
				{
					monthName = 'September';break;
				}
			case 9:
				{
					monthName = 'October';break;
				}
			case 10:
				{
					monthName = 'November';break;
				}
			case 11:
				{
					monthName = 'December';break;
				}
		}

		return monthName + ' ' + day + ',' + year;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }
/******/ ])));
//# sourceMappingURL=main.js.map