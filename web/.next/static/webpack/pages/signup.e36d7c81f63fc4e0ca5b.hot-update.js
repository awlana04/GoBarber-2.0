/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./src/screens/Signup/styles.ts":
/*!**************************************!*\
  !*** ./src/screens/Signup/styles.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"BackgroundImage\": function() { return /* binding */ BackgroundImage; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Logo\": function() { return /* binding */ Logo; },\n/* harmony export */   \"Form\": function() { return /* binding */ Form; },\n/* harmony export */   \"UploadAvatar\": function() { return /* binding */ UploadAvatar; },\n/* harmony export */   \"Login\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-1fyuxa2-0\"\n})([\"width:100vw;height:100vh;background:\", \";\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.background;\n});\nvar BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styles__BackgroundImage\",\n  componentId: \"sc-1fyuxa2-1\"\n})([\"width:50vw;height:100vh;position:fixed;top:0;left:0;\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styles__Content\",\n  componentId: \"sc-1fyuxa2-2\"\n})([\"width:50vw;margin-top:22px;position:absolute;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center;\"]);\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styles__Logo\",\n  componentId: \"sc-1fyuxa2-3\"\n})([\"\"]);\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.form.withConfig({\n  displayName: \"styles__Form\",\n  componentId: \"sc-1fyuxa2-4\"\n})([\"margin:0.8rem 0;\"]);\nvar UploadAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styles__UploadAvatar\",\n  componentId: \"sc-1fyuxa2-5\"\n})([\"width:118px;height:118px;margin-bottom:38px;background:#c4c4c4;border-radius:50%;position:relative;align-self:center;img{margin-top:116px;display:flex;align-items:center;justify-content:center;}label{width:48px;height:48px;background:#ff9000;border-radius:50%;position:absolute;right:0;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background-color 0.2s;svg{width:20px;height:20px;color:#312e38;}input{display:none;}}\"]);\nvar Login = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"styles__Login\",\n  componentId: \"sc-1fyuxa2-6\"\n})([\"margin-top:112px;display:flex;flex-direction:row;svg{margin-top:2px;margin-right:16px;}svg,a{color:\", \"}\"], function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.fonts.white;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvU2lnbnVwL3N0eWxlcy50cz85YWM4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsInRoZW1lIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsIkJhY2tncm91bmRJbWFnZSIsIkNvbnRlbnQiLCJMb2dvIiwiRm9ybSIsIlVwbG9hZEF2YXRhciIsIkxvZ2luIiwiZm9udHMiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtEQUlOO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFVBQTVCO0FBQUEsQ0FKTSxDQUFmO0FBT0EsSUFBTUMsZUFBZSxHQUFHSixxRUFBSDtBQUFBO0FBQUE7QUFBQSw0REFBckI7QUFTQSxJQUFNSyxPQUFPLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDBJQUFiO0FBYUEsSUFBTU0sSUFBSSxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFWO0FBRUEsSUFBTU8sSUFBSSxHQUFHUCxzRUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFBVjtBQUlBLElBQU1RLFlBQVksR0FBR1IscUVBQUg7QUFBQTtBQUFBO0FBQUEsNGNBQWxCO0FBa0RBLElBQU1TLEtBQUssR0FBR1QscUVBQUg7QUFBQTtBQUFBO0FBQUEsaUhBWUw7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLEtBQU4sQ0FBWUMsS0FBM0I7QUFBQSxDQVpLLENBQVgiLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9TaWdudXAvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG5gO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1MHZ3O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgbWFyZ2luOiAwLjhyZW0gMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBVcGxvYWRBdmF0YXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTE4cHg7XG4gIGhlaWdodDogMTE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDM4cHg7XG5cbiAgYmFja2dyb3VuZDogI2M0YzRjNDtcblxuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxMTZweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZmY5MDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cbiAgICBzdmcge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICAgIGNvbG9yOiAjMzEyZTM4O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9naW4gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMTJweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgfVxuXG4gIHN2ZywgYSB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udHMud2hpdGV9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/screens/Signup/styles.ts\n");

/***/ })

});