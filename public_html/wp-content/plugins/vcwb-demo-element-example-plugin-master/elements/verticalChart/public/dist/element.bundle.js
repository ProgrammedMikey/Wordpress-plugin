/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["vcvWebpackJsonp4x"] = self["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./verticalChart/bar.js":
/*!******************************!*\
  !*** ./verticalChart/bar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Bar = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Bar, _React$Component);\n\n  var _super = _createSuper(Bar);\n\n  function Bar() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Bar);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Bar, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          colorType = _this$props.colorType,\n          getMixin = _this$props.getMixin,\n          itemIndex = _this$props.itemIndex;\n      var _this$props$atts = this.props.atts,\n          title = _this$props$atts.title,\n          value = _this$props$atts.value;\n      var containerClasses = ['vce-bar-container'];\n      var titleProps = {};\n      titleProps.style = {};\n      var valueProps = {};\n      valueProps.style = {};\n      var customProps = {};\n      var mixin = getMixin('barValue', itemIndex);\n\n      if (mixin) {\n        containerClasses.push(\"vce-bar--value-\".concat(mixin.selector));\n      }\n\n      mixin = getMixin('barColor', itemIndex);\n\n      if (mixin) {\n        var colorClass = \"vce-bar--\".concat(colorType, \"-\").concat(mixin.selector);\n        containerClasses.push(colorClass);\n      }\n\n      mixin = getMixin('barBackgroundColor', itemIndex);\n\n      if (mixin) {\n        containerClasses.push(\"vce-bar--background-color-\".concat(mixin.selector));\n      }\n\n      containerClasses = classnames__WEBPACK_IMPORTED_MODULE_7___default()(containerClasses);\n      customProps['data-vce-count-up-end-value'] = value || 0;\n      customProps['data-vce-count-up-start-value'] = 0;\n      customProps['data-vce-count-up-grouping'] = false;\n      customProps['data-vce-count-up-duration'] = 1;\n      customProps['data-vce-count-up-easing'] = false;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: containerClasses\n      }, customProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"span\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"vce-bar-value\"\n      }, valueProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"span\", {\n        className: \"vce-bar-value-result\"\n      }, \"0\"), \"%\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"vce-bar-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"progress\", {\n        className: \"vce-bar\",\n        value: value,\n        max: \"100\"\n      }, value, \" %\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"vce-bar-text\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"h4\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"vce-bar-title\"\n      }, titleProps), title)));\n    }\n  }]);\n\n  return Bar;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n\n\n//# sourceURL=webpack://vcwb/./verticalChart/bar.js?");

/***/ }),

/***/ "./verticalChart/component.js":
/*!************************************!*\
  !*** ./verticalChart/component.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VerticalChart; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.browser.js\");\n/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar */ \"./verticalChart/bar.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // Import Bar component for each chart bar (column)\n// Attributes for each bar are taken from paramsGroup attribute type in settings.json\n\n\nvar vcvAPI = (0,vc_cake__WEBPACK_IMPORTED_MODULE_7__.getService)('api');\n\nvar VerticalChart = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(VerticalChart, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(VerticalChart);\n\n  function VerticalChart() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, VerticalChart);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(VerticalChart, [{\n    key: \"getContent\",\n    value: // Generate an array of JSX with chart vertical bars (columns)\n    function getContent() {\n      var _this = this;\n\n      var bars = this.props.atts.bars;\n      var items = bars.value ? bars.value : bars;\n      return items.map(function (item, i) {\n        var key = \"bar-\".concat(_this.props.id, \"-\").concat(i);\n        var attributes = item;\n        attributes.atts = {};\n        attributes.atts.tag = _this.props.atts.tag;\n        attributes.atts.title = item.title;\n        attributes.atts.value = item.value;\n        attributes.itemIndex = i;\n        attributes.getMixin = _this.getInnerMixinData.bind(_this, 'bars');\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_bar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, attributes, {\n          key: key\n        }));\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var toggleValue = atts.toggleValue,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId;\n      var containerClasses = ['vce', 'vce-vertical-charts-container'];\n      var customProps = {};\n\n      if (typeof customClass === 'string' && customClass) {\n        containerClasses.push(customClass);\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      if (toggleValue) {\n        containerClasses.push('vce-vertical-chart-display-value');\n      }\n\n      var mixinData = this.getMixinData('barThickness');\n\n      if (mixinData) {\n        containerClasses.push(\"vce-vertical-chart-thickness--\".concat(mixinData.selector));\n      }\n\n      mixinData = this.getMixinData('titleColor');\n\n      if (mixinData) {\n        containerClasses.push(\"vce-vertical-chart-title-color--\".concat(mixinData.selector));\n      }\n\n      containerClasses = classnames__WEBPACK_IMPORTED_MODULE_8___default()(containerClasses);\n      var doAll = this.applyDO('all');\n      var content = this.getContent(); // Content is saved as a String with raw HTML\n\n      var barsHTML = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_9__.renderToStaticMarkup)(content); // Need to use wrapper with .vcvhelper to save raw HTML string in data attribute for View Page\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, editor, {\n        id: \"el-\".concat(id),\n        className: containerClasses\n      }, doAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"vce-vertical-charts\"\n      }, customProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"vcvhelper\",\n        \"data-vcvs-html\": barsHTML\n      }, content)));\n    }\n  }]);\n\n  return VerticalChart;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack://vcwb/./verticalChart/component.js?");

/***/ }),

/***/ "./verticalChart/index.js":
/*!********************************!*\
  !*** ./verticalChart/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./verticalChart/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = vc_cake__WEBPACK_IMPORTED_MODULE_0___default().getService('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./verticalChart/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./verticalChart/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./verticalChart/editor.css\"),\n  mixins: {\n    barThickness: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/barThickness.pcss */ \"./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barThickness.pcss\")\n    },\n    barValue: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/barValue.pcss */ \"./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barValue.pcss\")\n    },\n    barBackgroundColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/barBackgroundColor.pcss */ \"./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barBackgroundColor.pcss\")\n    }\n  }\n});\n\n//# sourceURL=webpack://vcwb/./verticalChart/index.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barBackgroundColor.pcss":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barBackgroundColor.pcss ***!
  \********************************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-bar--background-color-$selector {\\n  .vce-bar-wrapper::before {\\n    background-color: $backgroundColor;\\n  }\\n}\"\n\n//# sourceURL=webpack://vcwb/./verticalChart/cssMixins/barBackgroundColor.pcss?./node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barThickness.pcss":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barThickness.pcss ***!
  \**************************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-vertical-chart-thickness--$selector {\\n  .vce-bar-wrapper {\\n    width: $(thickness)px;\\n  }\\n}\\n\"\n\n//# sourceURL=webpack://vcwb/./verticalChart/cssMixins/barThickness.pcss?./node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barValue.pcss":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./verticalChart/cssMixins/barValue.pcss ***!
  \**********************************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-bar--value-$selector {\\n  .vce-bar-play-animation.vce-bar-wrapper::before {\\n    height: $(value)%;\\n    animation: vcv-fill-animation-$selector 1s ease-in-out forwards;\\n  }\\n}\\n\\n@keyframes vcv-fill-animation-$selector {\\n  $step: resolve(100 / $value);\\n  @for $count from 0 to $(value) by 1 {\\n    $percentages: resolve($step * $count);\\n\\n    $(percentages)% {\\n      height: $(count)%;\\n    }\\n  }\\n}\\n\"\n\n//# sourceURL=webpack://vcwb/./verticalChart/cssMixins/barValue.pcss?./node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./verticalChart/editor.css":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./verticalChart/editor.css ***!
  \*********************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-vertical-chart {\\n  min-height: 1em;\\n}\"\n\n//# sourceURL=webpack://vcwb/./verticalChart/editor.css?./node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./verticalChart/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./verticalChart/styles.css ***!
  \*********************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-bar-container {\\n  display: inline-flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin: 0 15px 35px 0;\\n}\\n\\n.vce-bar-container:last-of-type {\\n  margin-right: 0;\\n}\\n\\n.vce-bar-wrapper {\\n  position: relative;\\n  background-color: #eee;\\n  overflow: hidden;\\n  height: 150px;\\n  margin: 0 0 10px;\\n}\\n\\n.vce-bar-wrapper::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  height: 0;\\n  width: 100%;\\n}\\n\\n.vce-bar {\\n  /* Reset the default appearance */\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  appearance: none;\\n  /* Get rid of default border in Firefox. */\\n  border: none;\\n  height: 20px;\\n  visibility: hidden;\\n}\\n\\n.vce-bar-text {\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n  align-items: center;\\n}\\n\\n.vce-bar-container .vce-bar-title,\\n.vce-bar-container .vce-bar-value {\\n  line-height: 1;\\n  margin: 0 0 10px;\\n}\\n\\n.vce-bar-container .vce-bar-title {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n\\n.vce-bar-value {\\n  display: none;\\n  flex-shrink: 0;\\n}\\n\\n.vce-bar-container .vce-bar-value::before {\\n  display: none;\\n}\\n\\n.vce-vertical-chart-display-value .vce-bar-value {\\n  display: inline-block;\\n}\\n\\n@keyframes progress-animation {\\n  100% {\\n    width: 100%;\\n  }\\n}\\n\"\n\n//# sourceURL=webpack://vcwb/./verticalChart/styles.css?./node_modules/raw-loader/index.js");

/***/ }),

/***/ "./verticalChart/settings.json":
/*!*************************************!*\
  !*** ./verticalChart/settings.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"verticalChart\"},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"thickness\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"20\",\"options\":{\"label\":\"Thickness\",\"description\":\"Enter chart bar thickness in pixels.\",\"cssMixin\":{\"mixin\":\"barThickness\",\"property\":\"thickness\",\"namePattern\":\"[\\\\\\\\da-f]+\"},\"min\":1}},\"toggleValue\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":true,\"options\":{\"label\":\"Show value\",\"description\":\"Option to disable percentage display\"}},\"bars\":{\"type\":\"paramsGroup\",\"access\":\"public\",\"value\":{\"value\":[{\"title\":\"HTML\",\"value\":90,\"backgroundColor\":\"#C45959\"},{\"title\":\"CSS\",\"value\":80,\"backgroundColor\":\"#C45959\"},{\"title\":\"JavaScript\",\"value\":75,\"backgroundColor\":\"#C45959\"}]},\"options\":{\"label\":\"General\",\"title\":\"Chart bar\",\"groupDefaultTile\":\"Chart bar\",\"settings\":{\"title\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"Chart bar\",\"options\":{\"label\":\"Title\",\"dynamicField\":true}},\"value\":{\"type\":\"range\",\"access\":\"public\",\"value\":\"70\",\"options\":{\"label\":\"Value\",\"cssMixin\":{\"mixin\":\"barValue\",\"property\":\"value\",\"namePattern\":\"[\\\\\\\\da-f]+\"}}},\"backgroundColor\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#C45959\",\"options\":{\"label\":\"Background color\",\"cssMixin\":{\"mixin\":\"barBackgroundColor\",\"property\":\"backgroundColor\",\"namePattern\":\"[\\\\\\\\da-f]+\"}}},\"_paramGroupEditFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"title\",\"value\",\"backgroundColor\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"_paramGroupEditFormTab1\"]}}}},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\"}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"thickness\",\"toggleValue\",\"bars\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"sharedAssetsLibrary\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"libsNames\":[\"waypoints\",\"countUp\"]}]}},\"metaPublicJs\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"libPaths\":\"public/dist/countUpStarter.min.js\"}]}}}');\n\n//# sourceURL=webpack://vcwb/./verticalChart/settings.json?");

/***/ })

},[['./verticalChart/index.js']]]);