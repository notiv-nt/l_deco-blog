webpackJsonp([2],{

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(62),
	  /* template */
	  __webpack_require__(63),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\pages\\home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-38113820", Component.options)
	  } else {
	    hotAPI.reload("data-v-38113820", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 62:
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


	exports.default = Vue.component('', {});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('app-banner'), _c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('div', {
	    staticClass: "c-main",
	    attrs: {
	      "grid-row": "grid-row"
	    }
	  }, [_c('div', {
	    staticClass: "c-main__content router-wrap",
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  }, [_c('transition-fade', [_c('router-view')], 1)], 1), _c('app-aside', {
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  })], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-38113820", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=2.2.js.map