webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NavbarUst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavbarUst */ "./components/NavbarUst.js");
/* harmony import */ var _components_AboutCards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AboutCards */ "./components/AboutCards.js");
/* harmony import */ var _components_CKeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CKeditor */ "./components/CKeditor.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");











 // If using Firebase database



var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _React$Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
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

      if (!firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.apps.length) {
        firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.initializeApp(firebaseConfig);
        console.log("Firebase Baglantisi Basarili...");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "Hakk\u0131mda"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        href: "static/css/reactstrap.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        href: "static/css/style.css"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        href: "static/css/animate.css"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NavbarUst__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "d-block"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mt-5"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AboutCards__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CKeditor__WEBPACK_IMPORTED_MODULE_9__["default"], {
        firebase: firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a
      }));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.41d0a5dc8a927c8916f8.hot-update.js.map