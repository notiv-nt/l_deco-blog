webpackJsonp([3],{

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(65)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(67),
	  /* template */
	  __webpack_require__(69),
	  /* scopeId */
	  "data-v-723a0c3c",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\pages\\posts.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] posts.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-723a0c3c", Component.options)
	  } else {
	    hotAPI.reload("data-v-723a0c3c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("8871486e", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-723a0c3c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./posts.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-723a0c3c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./posts.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.post[data-v-723a0c3c]:not(:last-child) {\n  margin-bottom: 60px;\n}\n", ""]);

	// exports


/***/ },

/***/ 67:
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

				posts: []
			};
		},
		mounted: function mounted() {
			var vm = this;

			vm.$http.get(_config2.default.api + 'posts').then(function (_ref) {
				var body = _ref.body;

				vm.pageState = '';

				vm.posts = body;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = {
		"api": "api.php?page=/"
	};

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.pageState === 'loading') ? _c('div', {
	    staticClass: "u-loader"
	  }) : _c('div', _vm._l((_vm.posts), function(post) {
	    return _c('app-post', {
	      staticClass: "post",
	      attrs: {
	        "post": post
	      }
	    })
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-723a0c3c", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=3.3.js.map