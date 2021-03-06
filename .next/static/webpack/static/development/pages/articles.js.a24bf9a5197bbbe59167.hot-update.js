webpackHotUpdate("static\\development\\pages\\articles.js",{

/***/ "./components/ArticleCards.js":
/*!************************************!*\
  !*** ./components/ArticleCards.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _micros_MakaleCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./micros/MakaleCard */ "./components/micros/MakaleCard.js");











var ArticleCards =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArticleCards, _React$Component);

  function ArticleCards(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ArticleCards);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ArticleCards).call(this, props));
    _this.state = {
      search: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ArticleCards, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: {
          size: 10,
          offset: 1
        },
        md: {
          size: 6,
          offset: 3
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardFooter"], {
        className: "shadow display-4 text-center"
      }, "Makaleler")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-group mb-3 mt-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this2.setState({
            search: e.target.value
          });
        },
        type: "text",
        className: "form-control",
        placeholder: "Makale Ara"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-group-append"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/articles?title=".concat(this.state.search, "&page=1"),
        as: "/arama/".concat(this.state.search, "/1")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btn btn-info",
        type: "button"
      }, "Ara")))), this.props.data.map(function (makale, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_micros_MakaleCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: index,
          articleTitle: makale.title,
          articleMessage: makale.message,
          articleDate: makale.publisheddate
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Pagination"], {
        className: "d-flex justify-content-center mt-4"
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(this.props.pageCount)).map(function (e, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationItem"], {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: _this2.props.titleQuery ? "?page=".concat(i + 1, "&title=").concat(_this2.props.titleQuery) : "?page=".concat(i + 1),
          as: _this2.props.titleQuery ? "/arama/".concat(_this2.props.titleQuery, "/").concat(i + 1) : "/sayfa/".concat(i + 1)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationLink"], null, i + 1)));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        class: "pagination"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        class: "page-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        class: "page-link",
        href: "#"
      }, "Previous")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        class: "page-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        class: "page-link",
        href: "#"
      }, "1")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        class: "page-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        class: "page-link",
        href: "#"
      }, "2")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        class: "page-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        class: "page-link",
        href: "#"
      }, "3")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        class: "page-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        class: "page-link",
        href: "#"
      }, "Next")))));
    }
  }]);

  return ArticleCards;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ArticleCards);

/***/ })

})
//# sourceMappingURL=articles.js.a24bf9a5197bbbe59167.hot-update.js.map