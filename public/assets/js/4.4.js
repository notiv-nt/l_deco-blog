webpackJsonp([4],{

/***/ 68:
/***/ function(module, exports) {

	module.exports = {
		"api": "api.php?page=/"
	};

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(71)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(73),
	  /* template */
	  __webpack_require__(74),
	  /* scopeId */
	  "data-v-fba9d93e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\YandexDisk\\Web\\localhost\\project\\deco-blog\\source\\pages\\post.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] post.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fba9d93e", Component.options)
	  } else {
	    hotAPI.reload("data-v-fba9d93e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("192e36ae", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-fba9d93e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./post.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-fba9d93e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./post.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "\n.block[data-v-fba9d93e] {\n  margin-bottom: 60px;\n}\n@media screen and (max-width: 1199px) {\n.block[data-v-fba9d93e] {\n    margin-bottom: 50px;\n}\n}\n@media screen and (max-width: 991px) {\n.block[data-v-fba9d93e] {\n    margin-bottom: 40px;\n}\n}\n@media screen and (max-width: 575px) {\n.block[data-v-fba9d93e] {\n    margin-bottom: 30px;\n}\n}\n.nav-item[data-v-fba9d93e] {\n  background-color: #000;\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding: 60px 0;\n  letter-spacing: 2.5px;\n  display: block;\n  flex: 1;\n  transition: background-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.nav-item[data-v-fba9d93e]:hover {\n  background-color: #3a3c49;\n}\n@media screen and (max-width: 1799px) {\n.nav-item[data-v-fba9d93e] {\n    padding: 50px 0;\n}\n}\n@media screen and (max-width: 1199px) {\n.nav-item[data-v-fba9d93e] {\n    padding: 15px 0;\n    letter-spacing: 1.1px;\n}\n}\n@media screen and (max-width: 575px) {\n.nav-item[data-v-fba9d93e] {\n    padding: 10px 0;\n}\n.nav-item span[data-v-fba9d93e] {\n    display: none;\n}\n}\n.nav-item .svg-icon[data-v-fba9d93e] {\n  width: 20px;\n  height: 20px;\n}\n.nav-item .svg-icon[data-v-fba9d93e]:first-child {\n  margin-right: 20px;\n}\n@media screen and (max-width: 1199px) {\n.nav-item .svg-icon[data-v-fba9d93e]:first-child {\n    margin-right: 10px;\n}\n}\n@media screen and (max-width: 575px) {\n.nav-item .svg-icon[data-v-fba9d93e]:first-child {\n    margin-right: 0;\n}\n}\n.nav-item .svg-icon[data-v-fba9d93e]:last-child {\n  margin-left: 20px;\n}\n@media screen and (max-width: 1199px) {\n.nav-item .svg-icon[data-v-fba9d93e]:last-child {\n    margin-left: 10px;\n}\n}\n@media screen and (max-width: 575px) {\n.nav-item .svg-icon[data-v-fba9d93e]:last-child {\n    margin-left: 0;\n}\n}\n.author[data-v-fba9d93e] {\n  margin-bottom: 20px;\n  background-color: #fff;\n  display: flex;\n  align-items: stretch;\n}\n@media screen and (max-width: 1199px) {\n.author[data-v-fba9d93e] {\n    flex-wrap: wrap;\n}\n}\n.author-photo[data-v-fba9d93e] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 210px;\n  flex-shrink: 0;\n  cursor: pointer;\n  display: block;\n}\n@media screen and (max-width: 1199px) {\n.author-photo[data-v-fba9d93e] {\n    width: 100%;\n    height: 200px;\n}\n}\n.author-content[data-v-fba9d93e] {\n  flex-grow: 1;\n  padding: 38px 30px;\n  flex: 1;\n}\n@media screen and (max-width: 767px) {\n.author-content[data-v-fba9d93e] {\n    padding: 28px 20px;\n}\n}\n.author-header[data-v-fba9d93e] {\n  border-bottom: 1px solid #eaeaeb;\n  display: flex;\n  align-items: center;\n  color: #212121;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  padding-bottom: 12px;\n  font-weight: 400;\n}\n.author-name[data-v-fba9d93e] {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 3px;\n  margin-right: 10px;\n  border-bottom: 1px solid transparent;\n  transition: border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n  white-space: normal;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n.author-name[data-v-fba9d93e]:hover {\n  border-color: currentColor;\n}\n.author-post-link[data-v-fba9d93e] {\n  font-size: 14px;\n  margin-left: auto;\n  letter-spacing: 1.5px;\n  white-space: nowrap;\n  border-bottom: 1px solid transparent;\n  transition: border-color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.author-post-link[data-v-fba9d93e]:hover {\n  border-color: currentColor;\n}\n.author-text[data-v-fba9d93e] {\n  margin: 0;\n  color: #424242;\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: 1.6px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 51.2px;\n}\n.social-item[data-v-fba9d93e] {\n  background-color: #fff;\n  color: #999;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: uppercase;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.social-item:hover .social-icon[data-v-fba9d93e] {\n  background-color: #212121;\n  color: #fff;\n}\n.social-icon[data-v-fba9d93e] {\n  width: 55px;\n  height: 46px;\n  line-height: 46px;\n  border-right: 1px solid #f1f1f3;\n  flex-shrink: 0;\n  color: #424242;\n  transition: background-color 250ms cubic-bezier(0.5, 0, 0.2, 1), color 250ms cubic-bezier(0.5, 0, 0.2, 1);\n}\n.social-icon .svg-icon[data-v-fba9d93e] {\n  width: 16px;\n  height: 16px;\n}\n.social-text[data-v-fba9d93e] {\n  flex-grow: 1;\n  letter-spacing: 1.5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.recomended[data-v-fba9d93e] {\n  background-color: #fff;\n  padding: 40px 30px 20px;\n}\n@media screen and (max-width: 767px) {\n.recomended[data-v-fba9d93e] {\n    padding: 20px 13px 5px;\n}\n}\n", ""]);

	// exports


/***/ },

/***/ 73:
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

				post: {},
				author: {},
				socials: {},
				recomended: []
			};
		},
		mounted: function mounted() {
			var vm = this;

			vm.$http.get(_config2.default.api + 'post').then(function (_ref) {
				var body = _ref.body;

				vm.pageState = '';

				vm.post = body.post;
				vm.author = body.author;
				vm.socials = body.socials;
				vm.recomended = body.recomended;
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
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.pageState === 'loading') ? _c('div', {
	    staticClass: "u-loader"
	  }) : _c('div', [_c('app-post', {
	    staticClass: "block",
	    attrs: {
	      "post": _vm.post
	    }
	  }), _c('div', {
	    staticClass: "block",
	    attrs: {
	      "grid-row": "xs-2"
	    }
	  }, [_c('router-link', {
	    staticClass: "nav-item",
	    attrs: {
	      "to": {
	        name: 'post',
	        params: {
	          id: 1
	        }
	      },
	      "grid-col": ""
	    }
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-long-left-arrow"
	    }
	  })]), _c('span', [_vm._v("Previous post")])]), _c('router-link', {
	    staticClass: "nav-item",
	    attrs: {
	      "to": {
	        name: 'post',
	        params: {
	          id: 1
	        }
	      },
	      "grid-col": ""
	    }
	  }, [_c('span', [_vm._v("Next post")]), _c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-long-right-arrow"
	    }
	  })])])], 1), _c('div', {
	    staticClass: "block"
	  }, [_c('div', {
	    staticClass: "u-light-shadow author"
	  }, [_c('a', {
	    staticClass: "author-photo",
	    style: ({
	      backgroundImage: 'url(' + _vm.author.avatar + ')'
	    }),
	    attrs: {
	      "href": "#"
	    }
	  }), _c('div', {
	    staticClass: "author-content"
	  }, [_c('header', {
	    staticClass: "author-header"
	  }, [_c('a', {
	    staticClass: "author-name",
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v(_vm._s(_vm.author.name))]), _c('a', {
	    staticClass: "author-post-link",
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("All Post")])]), _c('p', {
	    staticClass: "author-text"
	  }, [_vm._v(_vm._s(_vm.author.about))])])]), _c('div', {
	    staticClass: "social",
	    attrs: {
	      "grid-row": "xs-1 sm-2 lg-2 xl-3 hg-4"
	    }
	  }, [_c('a', {
	    staticClass: "u-light-shadow social-item",
	    attrs: {
	      "href": "#",
	      "grid-col": ""
	    }
	  }, [_c('div', {
	    staticClass: "social-icon"
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-facebook"
	    }
	  })])]), _c('div', {
	    staticClass: "social-text"
	  }, [_vm._v("Facebook " + _vm._s(_vm.socials.facebook))])]), _c('a', {
	    staticClass: "u-light-shadow social-item",
	    attrs: {
	      "href": "#",
	      "grid-col": ""
	    }
	  }, [_c('div', {
	    staticClass: "social-icon"
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-twitter"
	    }
	  })])]), _c('div', {
	    staticClass: "social-text"
	  }, [_vm._v("Twitter " + _vm._s(_vm.socials.twitter))])]), _c('a', {
	    staticClass: "u-light-shadow social-item",
	    attrs: {
	      "href": "#",
	      "grid-col": ""
	    }
	  }, [_c('div', {
	    staticClass: "social-icon"
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-tumblr"
	    }
	  })])]), _c('div', {
	    staticClass: "social-text"
	  }, [_vm._v("Tumbler " + _vm._s(_vm.socials.tumbler))])]), _c('a', {
	    staticClass: "u-light-shadow social-item",
	    attrs: {
	      "href": "#",
	      "grid-col": ""
	    }
	  }, [_c('div', {
	    staticClass: "social-icon"
	  }, [_c('svg', {
	    staticClass: "svg-icon"
	  }, [_c('use', {
	    attrs: {
	      "xlink:href": "#svg-pinterest"
	    }
	  })])]), _c('div', {
	    staticClass: "social-text"
	  }, [_vm._v("Pinterest " + _vm._s(_vm.socials.pinterest))])])])]), _c('div', {
	    staticClass: "u-light-shadow recomended"
	  }, [_c('app-post-recomended', {
	    attrs: {
	      "posts": _vm.recomended
	    }
	  })], 1)], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-fba9d93e", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=4.4.js.map