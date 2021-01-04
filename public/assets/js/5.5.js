webpackJsonp([5],{

/***/ 68:
/***/ function(module, exports) {

	module.exports = {
		"api": "api.php?page=/"
	};

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(76),
	  /* template */
	  __webpack_require__(77),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\pages\\about.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-02c996c8", Component.options)
	  } else {
	    hotAPI.reload("data-v-02c996c8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _config = __webpack_require__(68);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Vue.component('', {
		data: function data() {
			return {
				pageState: 'loading',

				body: {}
			};
		},
		mounted: function mounted() {
			var vm = this;

			vm.$http.get(_config2.default.api + 'about').then(function (_ref) {
				var body = _ref.body;

				vm.pageState = '';

				vm.body = body;
			}, function (err) {
				vm.pageState = 'error';

				console.error(err);
			});
		}
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('div', {
	    staticClass: "c-main",
	    attrs: {
	      "grid-row": "grid-row"
	    }
	  }, [_c('div', {
	    staticClass: "c-main__content",
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  }, [(_vm.pageState === 'loading') ? _c('div', {
	    staticClass: "u-loader"
	  }) : _c('app-post', {
	    attrs: {
	      "post": _vm.body,
	      "show-readmore": false
	    }
	  })], 1), _c('app-aside', {
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-02c996c8", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=5.5.js.map