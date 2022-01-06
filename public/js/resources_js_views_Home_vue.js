"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    showRegistrationForm: function showRegistrationForm() {
      if (document.getElementById('hidden-checker-auth').checked && !document.getElementById('home-page__authorization-form__auth').hidden) {
        document.getElementById('home-page__authorization-form__auth').hidden = true;
        document.getElementById('hidden-checker-auth').checked = false;
        document.getElementById('show-auth-form').classList.remove('button-auth__active');
      }

      if (document.getElementById('home-page__authorization-form__registration').hidden) {
        document.getElementById('home-page__authorization-form__registration').hidden = false;
        document.getElementById('hidden-checker-registration').checked = false;
        document.getElementById('show-registration-form').classList.add('button-auth__active');
      } else {
        document.getElementById('home-page__authorization-form__registration').hidden = true;
        document.getElementById('hidden-checker-registration').checked = true;
        document.getElementById('show-registration-form').classList.remove('button-auth__active');
      }
    },
    showAuthForm: function showAuthForm() {
      if (document.getElementById('hidden-checker-registration').checked && !document.getElementById('home-page__authorization-form__registration').hidden) {
        document.getElementById('home-page__authorization-form__registration').hidden = true;
        document.getElementById('hidden-checker-registration').checked = false;
        document.getElementById('show-registration-form').classList.remove('button-auth__active');
      }

      if (document.getElementById('home-page__authorization-form__auth').hidden) {
        document.getElementById('home-page__authorization-form__auth').hidden = false;
        document.getElementById('hidden-checker-auth').checked = false;
        document.getElementById('show-auth-form').classList.add('button-auth__active');
      } else {
        document.getElementById('home-page__authorization-form__auth').hidden = true;
        document.getElementById('hidden-checker-auth').checked = true;
        document.getElementById('show-auth-form').classList.remove('button-auth__active');
      }
    },
    registration: function registration() {
      var login_input = document.getElementById('home-page__authorization-form__registration__login');
      var password_input = document.getElementById('home-page__authorization-form__registration__password');
      var gender_male = document.getElementById('gender-selection__male');
      var gender_female = document.getElementById('gender-selection__female');
      var class_warrior = document.getElementById('class-selection__warrior');
      var class_wizard = document.getElementById('class-selection__wizard');
      var class_hunter = document.getElementById('class-selection__hunter');
      var login = login_input.value.trim() != '' ? login_input.value : 'null';
      var password = password_input.value.trim() != '' ? password_input.value : 'null';
      var gender = gender_male.checked ? 'male' : 'female';
      var class_ = class_warrior.checked ? 'warrior' : class_wizard.checked ? 'wizard' : 'hunter';
      if (login != 'null' && password != 'null') fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: JSON.stringify({
          'login': login,
          'password': password,
          'gender': gender,
          'class': class_
        })
      }).then(function (response) {
        return response.text().then(function (text) {
          alert(text);
        });
      });else alert('Все поля должны быть заполнены!');
    },
    auth: function auth() {
      var login_input = document.getElementById('home-page__authorization-form__auth__login');
      var password_input = document.getElementById('home-page__authorization-form__auth__password');
      var login = login_input.value.trim() != '' ? login_input.value : 'null';
      var password = password_input.value.trim() != '' ? password_input.value : 'null';
      if (login != 'null' && password != 'null') fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: JSON.stringify({
          'login': login,
          'password': password
        })
      }).then(function (response) {
        return response.text().then(function (text) {
          if (text == 'true') alert('Вы успешно вошли в аккаунт!');else alert('Неверные логин или пароль');
        });
      });else alert('Все поля должны быть заполнены');
    },
    goToTest: function goToTest() {
      window.location.href = 'test';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.hidden-block-registration {\n  opacity: 0;\n  margin-top: 10px;\n  transition: opacity .5s;\n}\n.hidden-block-auth {\n  opacity: 0;\n  margin-top: 10px;\n  transition: opacity .5s;\n}\n#hidden-checker-registration {\n  display: none;\n}\n#hidden-checker-auth {\n  display: none;\n}\n#hidden-checker-registration:checked {\n  position: static;\n}\n#hidden-checker-auth:checked {\n  position: static;\n}\n#hidden-checker-registration:checked~.hidden-block-registration {\n  opacity: 1;\n}\n#hidden-checker-auth:checked~.hidden-block-auth {\n  opacity: 1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "home" }, [
    _c("div", { staticClass: "container home-page" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "row pt-5" }, [
        _c(
          "div",
          {
            staticClass: "col d-flex flex-column home-page__authorization-form",
          },
          [
            _c("hr", {
              staticClass: "home-page__authorization-form__underline",
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass:
                  "btn btn-primary home-page__authorization-form__button-register align-self-center",
                attrs: {
                  active: "",
                  id: "show-registration-form",
                  for: "hidden-checker-registration",
                  type: "button",
                },
                on: { click: _vm.showRegistrationForm },
              },
              [_vm._v("Регистрация")]
            ),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "checkbox", id: "hidden-checker-registration" },
            }),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass:
                  "hidden-block-registration home-page__authorization-form__registration",
                attrs: {
                  hidden: "",
                  id: "home-page__authorization-form__registration",
                },
              },
              [
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "row pb-4 pt-5" }, [
                  _c("div", { staticClass: "col d-flex flex-column" }, [
                    _c("input", {
                      staticClass:
                        "home-page__authorization-form__registration__button align-self-center",
                      attrs: { type: "button", value: "Зарегистрироваться" },
                      on: { click: _vm.registration },
                    }),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass:
                  "btn btn-primary home-page__authorization-form__button-auth align-self-center",
                attrs: {
                  for: "hidden-checker-auth",
                  id: "show-auth-form",
                  type: "button",
                },
                on: { click: _vm.showAuthForm },
              },
              [_vm._v("Вход")]
            ),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "checkbox", id: "hidden-checker-auth" },
            }),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass:
                  "hidden-block-auth home-page__authorization-form__auth",
                attrs: {
                  hidden: "",
                  id: "home-page__authorization-form__auth",
                },
              },
              [
                _vm._m(9),
                _vm._v(" "),
                _vm._m(10),
                _vm._v(" "),
                _vm._m(11),
                _vm._v(" "),
                _vm._m(12),
                _vm._v(" "),
                _c("div", { staticClass: "row pt-5" }, [
                  _c("div", { staticClass: "col d-flex flex-column" }, [
                    _c("input", {
                      staticClass:
                        "home-page__authorization-form__auth__button align-self-center",
                      attrs: { type: "button", value: "Войти" },
                      on: { click: _vm.auth },
                    }),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("hr", {
              staticClass: "home-page__authorization-form__underline",
            }),
            _vm._v(" "),
            _c("button", { on: { click: _vm.goToTest } }, [
              _vm._v("Go To Test"),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column home-page__header" }, [
        _c(
          "span",
          { staticClass: "home-page__header__label align-self-center" },
          [_vm._v("БИТВА ТИТАНОВ")]
        ),
        _vm._v(" "),
        _c("hr", {
          staticClass: "home-page__header__underline align-self-center",
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-4" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c("img", {
          staticClass: "home-page__img align-self-center",
          attrs: { src: "view/image/main_img.png", alt: "..." },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-5" }, [
      _c(
        "div",
        { staticClass: "col d-flex flex-column home-page__about-game" },
        [
          _c(
            "span",
            { staticClass: "home-page__about-game__header align-self-center" },
            [_vm._v("Сражайся вместе с нами")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "home-page__about-game__content align-self-center" },
            [_vm._v("Бесплатная онлайн игра о которой ходят легенды")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "home-page__about-game__content align-self-center" },
            [_vm._v("Теперь к легенде можешь прикоснуться и ты!")]
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c("div", { staticClass: "align-self-center" }, [
          _c(
            "span",
            {
              staticClass:
                "home-page__authorization-form__registration__gender-selection__header",
            },
            [_vm._v("Выберите пол:")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass:
              "home-page__authorization-form__registration__gender-selection__male-radio",
            attrs: {
              type: "radio",
              checked: "",
              name: "gender",
              id: "gender-selection__male",
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass:
                "home-page__authorization-form__registration__gender-selection__male",
              attrs: { for: "gender-selection__male" },
            },
            [_vm._v("Мужской")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass:
              "home-page__authorization-form__registration__gender-selection__female-radio",
            attrs: {
              type: "radio",
              name: "gender",
              id: "gender-selection__female",
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass:
                "home-page__authorization-form__registration__gender-selection__female",
              attrs: { for: "gender-selection__female" },
            },
            [_vm._v("Женский")]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c("div", { staticClass: "align-self-center" }, [
          _c(
            "span",
            {
              staticClass:
                "home-page__authorization-form__registration__class-selection__header align-self-center",
            },
            [_vm._v("Выберите класс:")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass:
              "home-page__authorization-form__registration__class-selection__radio",
            attrs: {
              name: "class",
              checked: "",
              type: "radio",
              id: "class-selection__warrior",
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass:
                "home-page__authorization-form__registration__class-selection__warrior",
              attrs: { for: "class-selection__warrior" },
            },
            [_vm._v("Воин")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass:
              "home-page__authorization-form__registration__class-selection__radio",
            attrs: {
              name: "class",
              type: "radio",
              id: "class-selection__wizard",
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass:
                "home-page__authorization-form__registration__class-selection__wizard",
              attrs: { for: "class-selection__wizard" },
            },
            [_vm._v("Маг")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass:
              "home-page__authorization-form__registration__class-selection__radio",
            attrs: {
              name: "class",
              type: "radio",
              id: "class-selection__hunter",
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass:
                "home-page__authorization-form__registration__class-selection__hunter",
              attrs: { for: "class-selection__hunter" },
            },
            [_vm._v("Охотник")]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c(
          "label",
          {
            staticClass:
              "home-page__authorization-form__registration__login-label align-self-center",
            attrs: {
              for: "home-page__authorization-form__registration__login",
            },
          },
          [_vm._v("Имя персонажа:")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-2" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c("input", {
          staticClass:
            "home-page__authorization-form__registration__login-input align-self-center",
          attrs: {
            required: "required",
            name: "login",
            id: "home-page__authorization-form__registration__login",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c(
          "label",
          {
            staticClass:
              "home-page__authorization-form__registration__password-label align-self-center",
            attrs: {
              for: "home-page__authorization-form__registration__password",
            },
          },
          [_vm._v("Введите пароль:")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c("input", {
          staticClass:
            "home-page__authorization-form__registration__password-input align-self-center",
          attrs: {
            type: "password",
            required: "required",
            name: "password",
            id: "home-page__authorization-form__registration__password",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c(
          "label",
          {
            staticClass:
              "home-page__authorization-form__auth__login-label align-self-center",
            attrs: { for: "home-page__authorization-form__auth__login" },
          },
          [_vm._v("Имя персонажа:")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-2" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c("input", {
          staticClass:
            "home-page__authorization-form__auth__login-input align-self-center",
          attrs: {
            required: "required",
            name: "login",
            id: "home-page__authorization-form__auth__login",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c(
          "label",
          {
            staticClass:
              "home-page__authorization-form__auth__password-label align-self-center",
            attrs: { for: "home-page__authorization-form__auth__password" },
          },
          [_vm._v("Пароль:")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-2" }, [
      _c("div", { staticClass: "col d-flex flex-column" }, [
        _c("input", {
          staticClass:
            "home-page__authorization-form__auth__password-input align-self-center",
          attrs: {
            type: "password",
            required: "required",
            name: "password",
            id: "home-page__authorization-form__auth__password",
          },
        }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);