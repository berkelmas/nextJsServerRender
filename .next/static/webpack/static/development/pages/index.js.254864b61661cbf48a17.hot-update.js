webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CardsUst.js":
/*!********************************!*\
  !*** ./components/CardsUst.js ***!
  \********************************/
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");








var CardsUst =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CardsUst, _React$Component);

  function CardsUst(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardsUst);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CardsUst).call(this, props));
    _this.state = {
      messages: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CardsUst, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var firebase = this.props.firebase;
      var messages = firebase.database().ref('messages/');
      messages.on("value", function (snapshot) {
        _this2.setState({
          messages: snapshot
        });
      });
      console.log(this.state.messages);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "mx-auto d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: "8"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        body: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        className: "card-title text-center"
      }, "Chat Odasi"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "p-1 mb-2 mt-2 w-50"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "@Berk"), " Gercek Zamanli Yazilar Yazabilirsiniz")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
        className: "pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        placeholder: "Canli Chat'e Hosgeldiniz..."
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: "btn btn-info"
      }, "G\xF6nder")))));
    }
  }]);

  return CardsUst;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CardsUst);

/***/ })

})
//# sourceMappingURL=index.js.254864b61661cbf48a17.hot-update.js.map