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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");













var CardsUst =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CardsUst, _React$Component);

  function CardsUst(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CardsUst);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CardsUst).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "updateInput", function (e) {
      _this.setState({
        input: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "sendMessage",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        var _ref2, firebase, refer, mesaj;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return e.preventDefault();

              case 2:
                _context.next = 4;
                return _this.props;

              case 4:
                _ref2 = _context.sent;
                firebase = _ref2.firebase;
                _context.next = 8;
                return firebase.database().ref('messages');

              case 8:
                refer = _context.sent;
                _context.prev = 9;
                _context.next = 12;
                return refer.push({
                  message: _this.state.input,
                  username: "berkelmas"
                });

              case 12:
                mesaj = _context.sent;

                _this.setState({
                  input: ''
                });

                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](9);
                console.log(_context.t0);

                _this.setState({
                  input: ''
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[9, 16]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      messages: [],
      input: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CardsUst, [{
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
      messages.on('child_added', function (data) {
        console.log(data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "mx-auto d-flex justify-content-center pb-5"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: "8"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        body: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardTitle"], {
        className: "card-title text-center"
      }, "Chat Odasi"), this.state.messages.map(function (val) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          key: val.id,
          className: "p-1 mb-2 mt-2 w-50"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardText"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "@", val.username), " ", val.message));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.sendMessage
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
        className: "pb-3 pt-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        className: "form-control",
        onChange: this.updateInput,
        value: this.state.input,
        placeholder: "Canli Chat'e Hosgeldiniz..."
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        type: "submit",
        className: "w-100 bg-info"
      }, "G\xF6nder"))))));
    }
  }]);

  return CardsUst;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CardsUst);

/***/ })

})
//# sourceMappingURL=index.js.e38c8aedc7e22ad74a74.hot-update.js.map