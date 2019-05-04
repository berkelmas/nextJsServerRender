webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_reactstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/reactstrap.min.css */ "./css/reactstrap.min.css");
/* harmony import */ var _css_reactstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_reactstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_NavbarUst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NavbarUst */ "./components/NavbarUst.js");
/* harmony import */ var _components_JumbotronUst__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/JumbotronUst */ "./components/JumbotronUst.js");
/* harmony import */ var _components_CardsUst__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardsUst */ "./components/CardsUst.js");













var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCjMduL-cfm11xatgCBYXbZ9YsivejE4Xw",
        authDomain: "reactauthdeneme.firebaseapp.com",
        databaseURL: "https://reactauthdeneme.firebaseio.com",
        projectId: "reactauthdeneme",
        storageBucket: "reactauthdeneme.appspot.com",
        messagingSenderId: "627494375899",
        appId: "1:627494375899:web:ea280f5712603c51"
      }; // Initialize Firebase

      if (!firebase__WEBPACK_IMPORTED_MODULE_6___default.a.apps.length) {
        firebase__WEBPACK_IMPORTED_MODULE_6___default.a.initializeApp(firebaseConfig);
        console.log("Firebase Baglantisi Basarili...");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NavbarUst__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_JumbotronUst__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CardsUst__WEBPACK_IMPORTED_MODULE_11__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d03bb25626beb5b3da22.hot-update.js.map