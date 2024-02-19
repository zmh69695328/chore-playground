(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HelloWorld"] = factory();
	else
		root["HelloWorld"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vue+cli-service@5.0.8_vue-template-compiler@2.7.16_vue@2.7.16/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.9_webpack@5.90.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!../../node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.1/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', [_vm._v(_vm._s(_vm.msg))]), _vm._m(0), _c('h3', [_vm._v("Installed CLI Plugins")]), _vm._m(1), _c('h3', [_vm._v("Essential Links")]), _vm._m(2), _c('h3', [_vm._v("Ecosystem")]), _vm._m(3)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', [_vm._v(" For a guide and recipes on how to configure / customize this project,"), _c('br'), _vm._v(" check out the "), _c('a', {
    attrs: {
      "href": "https://cli.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-cli documentation")]), _vm._v(". ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("babel")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("eslint")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Core Docs")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://forum.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Forum")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://chat.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Community Chat")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://twitter.com/vuejs",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Twitter")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://news.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("News")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://router.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-router")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://vuex.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vuex")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-devtools#vue-devtools",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-devtools")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://vue-loader.vuejs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("vue-loader")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/awesome-vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("awesome-vue")])])]);
}];

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true

;// CONCATENATED MODULE: ../../node_modules/.pnpm/thread-loader@3.0.4_webpack@5.90.1/node_modules/thread-loader/dist/cjs.js!../../node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.9_webpack@5.90.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!../../node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js
/* harmony default export */ var HelloWorldvue_type_script_lang_js = ({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js = (HelloWorldvue_type_script_lang_js); 
;// CONCATENATED MODULE: ../../node_modules/.pnpm/mini-css-extract-plugin@2.8.0_webpack@5.90.1/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!../../node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.1/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!../../node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=style&index=0&id=b9167eee&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=b9167eee&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ../../node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.1/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue



;


/* normalize component */

var component = normalizeComponent(
  components_HelloWorldvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b9167eee",
  null
  
)

/* harmony default export */ var HelloWorld = (component.exports);
;// CONCATENATED MODULE: ./src/components/index.js

HelloWorld.install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};
/* harmony default export */ var components = (HelloWorld);
;// CONCATENATED MODULE: ./src/index.js


// 所有组件列表
const src_components = [components];

// 定义install方法，接收Vue作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;

  // 遍历注册所有组件
  src_components.map(component => Vue.use(component));
};

// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var src_0 = ({
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...src_components
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vue+cli-service@5.0.8_vue-template-compiler@2.7.16_vue@2.7.16/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=HelloWorld.umd.js.map