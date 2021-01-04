webpackJsonp([6],{

/***/ 68:
/***/ function(module, exports) {

	module.exports = {
		"api": "api.php?page=/"
	};

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(79)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(81),
	  /* template */
	  __webpack_require__(82),
	  /* scopeId */
	  "data-v-20388d14",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\pages\\contacts.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] contacts.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-20388d14", Component.options)
	  } else {
	    hotAPI.reload("data-v-20388d14", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("1f1a52c2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-20388d14\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contacts.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-20388d14\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contacts.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.block[data-v-20388d14] {\n  margin-bottom: 30px;\n}\n.input[data-v-20388d14] {\n  width: 100%;\n}\n.info[data-v-20388d14] {\n  background-color: #fff;\n  display: flex;\n  align-items: stretch;\n}\n@media screen and (max-width: 1199px) {\n.info[data-v-20388d14] {\n    flex-wrap: wrap;\n}\n}\n.info-map[data-v-20388d14] {\n  width: 440px;\n  min-height: 290px;\n  flex-shrink: 0;\n}\n@media screen and (max-width: 1799px) {\n.info-map[data-v-20388d14] {\n    width: 290px;\n}\n}\n@media screen and (max-width: 1199px) {\n.info-map[data-v-20388d14] {\n    width: 100%;\n}\n}\n.info-map img[data-v-20388d14] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.info-content[data-v-20388d14] {\n  padding: 30px 30px;\n  flex: 1;\n}\n@media screen and (max-width: 575px) {\n.info-content[data-v-20388d14] {\n    padding: 20px 13px;\n}\n}\n.info-title[data-v-20388d14] {\n  margin-top: 0;\n  letter-spacing: 1.3px;\n}\n.info-hr[data-v-20388d14] {\n  display: block;\n  margin: 23px 0;\n  height: 1px;\n  background-color: #eaeaeb;\n  width: 100%;\n}\n.info-list[data-v-20388d14] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.info-list li[data-v-20388d14] {\n  margin: 0;\n  padding: 5px 0;\n}\n.info-list .svg-icon[data-v-20388d14] {\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n}\n@media screen and (max-width: 575px) {\n.submit-btn[data-v-20388d14] {\n    width: 100%;\n    display: block;\n}\n}\n", ""]);

	// exports


/***/ },

/***/ 81:
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

			vm.$http.get(_config2.default.api + 'contacts').then(function (_ref) {
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "grid": "grid"
	    }
	  }, [_c('div', {
	    staticClass: "c-main",
	    attrs: {
	      "grid-row": ""
	    }
	  }, [_c('div', {
	    staticClass: "c-main__content",
	    attrs: {
	      "grid-col": ""
	    }
	  }, [(_vm.pageState === 'loading') ? _c('div', {
	    staticClass: "u-loader"
	  }) : _c('div', [_c('div', {
	    staticClass: "info block u-shadow"
	  }, [_c('div', {
	    staticClass: "info-map"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.body.map.url,
	      "alt": "",
	      "data-object-fit": "cover"
	    }
	  })]), _c('div', {
	    staticClass: "info-content"
	  }, [_c('h2', {
	    staticClass: "u-h2 info-title"
	  }, [_vm._v("Contact information")]), _c('hr', {
	    staticClass: "info-hr"
	  }), _c('p', [_vm._v(_vm._s(_vm.body.contact.text))]), _c('ul', {
	    staticClass: "info-list"
	  }, [_c('li', [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-home"
	    }
	  })]), _c('span', [_vm._v("Address: " + _vm._s(_vm.body.contact.address))])]), _c('li', [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-mail"
	    }
	  })]), _c('span', [_vm._v("Email: " + _vm._s(_vm.body.contact.email))])]), _c('li', [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-globe"
	    }
	  })]), _c('a', {
	    attrs: {
	      "href": _vm.body.contact.site
	    }
	  }, [_vm._v(_vm._s(_vm.body.contact.site))])])])])]), _c('form', {
	    staticClass: "form",
	    attrs: {
	      "action": ""
	    }
	  }, [_c('div', {
	    attrs: {
	      "grid-row": "xs-1 md-2"
	    }
	  }, [_c('input', {
	    staticClass: "form__control u-shadow block",
	    attrs: {
	      "type": "text",
	      "grid-col": "",
	      "placeholder": "Your Name"
	    }
	  }), _c('input', {
	    staticClass: "form__control u-shadow block",
	    attrs: {
	      "type": "text",
	      "grid-col": "",
	      "placeholder": "Your Email Address"
	    }
	  })]), _c('input', {
	    staticClass: "form__control u-shadow block input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Website Address"
	    }
	  }), _c('textarea', {
	    staticClass: "form__control u-shadow block input",
	    attrs: {
	      "placeholder": "Please write a message here!",
	      "rows": "6"
	    }
	  }), _c('button', {
	    staticClass: "btn submit-btn",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("Send message")])])])]), _c('app-aside', {
	    attrs: {
	      "grid-col": "grid-col"
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-20388d14", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=6.6.js.map