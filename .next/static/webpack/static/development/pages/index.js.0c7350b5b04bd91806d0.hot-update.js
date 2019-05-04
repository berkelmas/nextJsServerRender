webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CardsUst.js":
/*!********************************!*\
  !*** ./components/CardsUst.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");











var CardsUst =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CardsUst, _React$Component);

  function CardsUst(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CardsUst);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CardsUst).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "updateInput", function (e) {
      _this.setState({
        input: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sendMessage", function (e) {
      var firebase = _this.props.firebase;
      var refer = firebase.ref("messages"); //const sentMes = refer.push({message: this.state.input, username:"berkelmas"});

      console.log("berelmas");
      e.preventDefault();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "denemeMes", function (e) {
      console.log("denem ");
      e.preventDefault();
    });

    _this.state = {
      messages: [],
      input: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CardsUst, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var firebase = this.props.firebase;
      var messages = firebase.database().ref('messages/');
      messages.on('value', function (snapshot) {
        var liste = [];

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(snapshot.val()).map(function (val) {
          var data = {};
          data['id'] = val;
          data['username'] = snapshot.val()[val]['username'];
          data['message'] = snapshot.val()[val]['message'];
          liste.push(data);
        });

        _this2.setState({
          messages: liste
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "mx-auto d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        body: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        className: "card-title text-center"
      }, "Chat Odasi"), this.state.messages.map(function (val) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          className: "p-1 mb-2 mt-2 w-50"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, "@", val.username), " ", val.message));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.sendMessage
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: "pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        onChange: this.updateInput,
        value: this.state.input,
        placeholder: "Canli Chat'e Hosgeldiniz..."
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        className: "btn btn-info"
      }, "G\xF6nder")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.denemeMes
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "deneme"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit"
      }, "deneme"))))));
    }
  }]);

  return CardsUst;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CardsUst);

/***/ })

})
//# sourceMappingURL=index.js.0c7350b5b04bd91806d0.hot-update.js.map