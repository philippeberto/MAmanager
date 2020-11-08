webpackHotUpdate_N_E("pages/despesas/addDespesa",{

/***/ "./pages/despesas/addDespesa.js":
/*!**************************************!*\
  !*** ./pages/despesas/addDespesa.js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");




var _jsxFileName = "C:\\Users\\phili\\Projetos\\MAmanager\\pages\\despesas\\addDespesa.js",
    _this = undefined,
    _s = $RefreshSig$();





var CriarDespesa = function CriarDespesa(props) {
  _s();

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      description: '',
      price: '',
      dueDate: '',
      referenceMonth: '',
      paymentDate: '',
      paid: false
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__["object"]({
      description: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required('Obrigatório'),
      price: yup__WEBPACK_IMPORTED_MODULE_5__["number"]().required('Obrigatório'),
      dueDate: yup__WEBPACK_IMPORTED_MODULE_5__["date"]().required('Obrigatório'),
      referenceMonth: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().max(14, 'O mês deve ter no máximo 14 caracteres'),
      paymentDate: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().max(30, 'Localidade deve ter no máximo 30 caracteres').required('Obrigatório'),
      paid: yup__WEBPACK_IMPORTED_MODULE_5__["boolean"]()
    }),
    onSubmit: function onSubmit(values) {
      console.log(values.dueDate);
      console.log(values.paymentDate);
      salvarDespesa(values, props.user.email);
      alert("Despesa ".concat(values.description, " salva com sucesso!"));
    }
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      touched = _useFormik.touched,
      errors = _useFormik.errors;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "conteudo",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      children: "Nova Despesa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Descri\xE7\xE3o: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.description,
          onChange: handleChange,
          type: "text",
          id: "description",
          name: "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), touched.description && errors.description ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
          children: errors.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "price",
          children: "Valor: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.price,
          onChange: handleChange,
          type: "text",
          id: "price",
          name: "price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), touched.price && errors.price ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
          children: errors.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 44
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "dueDate",
          children: "Data de Vencimento: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.dueDate,
          onChange: handleChange,
          type: "date",
          id: "dueDate",
          name: "dueDate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), touched.dueDate && errors.dueDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
          children: errors.dueDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "referenceMonth",
          children: "M\xEAs a ser pago: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.referenceMonth,
          onChange: handleChange,
          type: "text",
          id: "referenceMonth",
          name: "referenceMonth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            htmlFor: "paymentDate",
            children: "Dia do Pagamento: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            value: values.paymentDate,
            onChange: handleChange,
            type: "date",
            id: "paymentDate",
            name: "paymentDate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), touched.paymentDate && errors.paymentDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
            children: errors.paymentDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "submit",
        value: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(CriarDespesa, "G2gPppaHxabIZCEXmdxIpxNZY1g=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"]];
});

_c = CriarDespesa;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (CriarDespesa);

var salvarDespesa = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(despesa, email) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:3001/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY'
              },
              body: JSON.stringify({
                query: "mutation{\n        createDespesa(user:\"".concat(email, "\", input: {\n          description: \"").concat(despesa.description, "\"\n          price: ").concat(despesa.price, ", \n          dueDate: \"").concat(despesa.dueDate, "\", \n          referenceMonth: ").concat(parseInt(despesa.referenceMonth), ", \n          paymentDate: \"").concat(despesa.paymentDate, "\",\n          createdAt: ").concat(dayjs('YYYY-MM-DD').now(), "\n        }){\n          id\n          description\n        }\n      }")
              })
            });

          case 2:
            data = _context.sent;
            console.log(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function salvarDespesa(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "CriarDespesa");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5qcyJdLCJuYW1lcyI6WyJDcmlhckRlc3Blc2EiLCJwcm9wcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZHVlRGF0ZSIsInJlZmVyZW5jZU1vbnRoIiwicGF5bWVudERhdGUiLCJwYWlkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWF4Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2FsdmFyRGVzcGVzYSIsInVzZXIiLCJlbWFpbCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsImRlc3Blc2EiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInBhcnNlSW50IiwiZGF5anMiLCJub3ciLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxtQkFDa0NDLHdEQUFTLENBQUM7QUFDeEVDLGlCQUFhLEVBQUU7QUFDYkMsaUJBQVcsRUFBRSxFQURBO0FBRWJDLFdBQUssRUFBRSxFQUZNO0FBR2JDLGFBQU8sRUFBRSxFQUhJO0FBSWJDLG9CQUFjLEVBQUUsRUFKSDtBQUtiQyxpQkFBVyxFQUFFLEVBTEE7QUFNYkMsVUFBSSxFQUFFO0FBTk8sS0FEeUQ7QUFTeEVDLG9CQUFnQixFQUFFQywwQ0FBQSxDQUFXO0FBQzNCUCxpQkFBVyxFQUFFTywwQ0FBQSxHQUFhQyxRQUFiLENBQXNCLGFBQXRCLENBRGM7QUFFM0JQLFdBQUssRUFBRU0sMENBQUEsR0FBYUMs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QUFNUixZO1VBQzRERSxnRDs7O0tBRDVERixZOztBQXNHU0EsMkVBQWY7O0FBbUJBLElBQU1rQixhQUFhO0FBQUEsOExBQUcsaUJBQU9RLE9BQVAsRUFBZ0JOLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0RPLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUN4REMsb0JBQU0sRUFBRSxNQURnRDtBQUV4REMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQixrQkFEVDtBQUVQQyxzQkFBTSxFQUFFLGtCQUZEO0FBR1BDLDZCQUFhLEVBQ1g7QUFKSyxlQUYrQztBQVF4REMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLHFCQUFLLG9EQUNtQmYsS0FEbkIsb0RBRWVNLE9BQU8sQ0FBQ3RCLFdBRnZCLGtDQUdRc0IsT0FBTyxDQUFDckIsS0FIaEIsc0NBSVdxQixPQUFPLENBQUNwQixPQUpuQiw2Q0FLaUI4QixRQUFRLENBQUNWLE9BQU8sQ0FBQ25CLGNBQVQsQ0FMekIsMENBTWVtQixPQUFPLENBQUNsQixXQU52Qix1Q0FPWTZCLEtBQUssQ0FBQyxZQUFELENBQUwsQ0FBb0JDLEdBQXBCLEVBUFo7QUFEYyxlQUFmO0FBUmtELGFBQWxDLENBREo7O0FBQUE7QUFDZEMsZ0JBRGM7QUF5QnBCdkIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsSUFBWjs7QUF6Qm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJyQixhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rlc3Blc2FzL2FkZERlc3Blc2EuYWFjODdjOThlMmEzMWUzY2E4OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uLy4uL2xpYi9hdXRoMCdcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xyXG5cclxuY29uc3QgQ3JpYXJEZXNwZXNhID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBlcnJvcnMgfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICBkdWVEYXRlOiAnJyxcclxuICAgICAgcmVmZXJlbmNlTW9udGg6ICcnLFxyXG4gICAgICBwYXltZW50RGF0ZTogJycsXHJcbiAgICAgIHBhaWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICBkZXNjcmlwdGlvbjogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdPYnJpZ2F0w7NyaW8nKSxcclxuICAgICAgcHJpY2U6IFl1cC5udW1iZXIoKS5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIGR1ZURhdGU6IFl1cC5kYXRlKCkucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICByZWZlcmVuY2VNb250aDogWXVwLnN0cmluZygpLm1heChcclxuICAgICAgICAxNCxcclxuICAgICAgICAnTyBtw6pzIGRldmUgdGVyIG5vIG3DoXhpbW8gMTQgY2FyYWN0ZXJlcycsXHJcbiAgICAgICksXHJcbiAgICAgIHBheW1lbnREYXRlOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAubWF4KDMwLCAnTG9jYWxpZGFkZSBkZXZlIHRlciBubyBtw6F4aW1vIDMwIGNhcmFjdGVyZXMnKVxyXG4gICAgICAgIC5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIHBhaWQ6IFl1cC5ib29sZWFuKCksXHJcbiAgICB9KSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcy5kdWVEYXRlKVxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMucGF5bWVudERhdGUpXHJcbiAgICAgIHNhbHZhckRlc3Blc2EodmFsdWVzLCBwcm9wcy51c2VyLmVtYWlsKVxyXG4gICAgICBhbGVydChgRGVzcGVzYSAke3ZhbHVlcy5kZXNjcmlwdGlvbn0gc2FsdmEgY29tIHN1Y2Vzc28hYClcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cclxuICAgICAgPGgyPk5vdmEgRGVzcGVzYTwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3Jpw6fDo286IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5kZXNjcmlwdGlvbiAmJiBlcnJvcnMuZGVzY3JpcHRpb24gPyAoXHJcbiAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMuZGVzY3JpcHRpb259PC90ZXh0PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5WYWxvcjogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByaWNlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0b3VjaGVkLnByaWNlICYmIGVycm9ycy5wcmljZSA/IDx0ZXh0PntlcnJvcnMucHJpY2V9PC90ZXh0PiA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVlRGF0ZVwiPkRhdGEgZGUgVmVuY2ltZW50bzogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmR1ZURhdGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgaWQ9XCJkdWVEYXRlXCJcclxuICAgICAgICAgICAgbmFtZT1cImR1ZURhdGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0b3VjaGVkLmR1ZURhdGUgJiYgZXJyb3JzLmR1ZURhdGUgPyAoXHJcbiAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMuZHVlRGF0ZX08L3RleHQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWZlcmVuY2VNb250aFwiPk3DqnMgYSBzZXIgcGFnbzogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnJlZmVyZW5jZU1vbnRofVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwicmVmZXJlbmNlTW9udGhcIlxyXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlbmNlTW9udGhcIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBheW1lbnREYXRlXCI+RGlhIGRvIFBhZ2FtZW50bzogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXltZW50RGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cInBheW1lbnREYXRlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudERhdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dG91Y2hlZC5wYXltZW50RGF0ZSAmJiBlcnJvcnMucGF5bWVudERhdGUgPyAoXHJcbiAgICAgICAgICAgICAgPHRleHQ+e2Vycm9ycy5wYXltZW50RGF0ZX08L3RleHQ+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FkYXN0cmFyXCI+PC9pbnB1dD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmlhckRlc3Blc2FcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKVxyXG4gIGlmIChzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IHNlc3Npb24udXNlcixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXI6ICdVc3XDoXJpbyBuw6NvIGxvZ2FkbycsXHJcbiAgICAgIGRhdGE6ICdEYWRvcyBpbmFjZXNzw612ZWlzJyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzYWx2YXJEZXNwZXNhID0gYXN5bmMgKGRlc3Blc2EsIGVtYWlsKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZ3JhcGhxbCcsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQXV0aG9yaXphdGlvbjpcclxuICAgICAgICAnQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpqYkdsbGJuUWlPaUptY205dWRDMWxibVF0UzJVMFozSm5OelJvY2pSa1kySTJJaXdpYVdGMElqb3hOVGszT0RVM05UZzJmUS5NVlFJUXhYa1ZnYmhDRnpZUndJaUF0SlpIYllOMFVxaUpHQm5kTUxLQUdZJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHF1ZXJ5OiBgbXV0YXRpb257XHJcbiAgICAgICAgY3JlYXRlRGVzcGVzYSh1c2VyOlwiJHtlbWFpbH1cIiwgaW5wdXQ6IHtcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIiR7ZGVzcGVzYS5kZXNjcmlwdGlvbn1cIlxyXG4gICAgICAgICAgcHJpY2U6ICR7ZGVzcGVzYS5wcmljZX0sIFxyXG4gICAgICAgICAgZHVlRGF0ZTogXCIke2Rlc3Blc2EuZHVlRGF0ZX1cIiwgXHJcbiAgICAgICAgICByZWZlcmVuY2VNb250aDogJHtwYXJzZUludChkZXNwZXNhLnJlZmVyZW5jZU1vbnRoKX0sIFxyXG4gICAgICAgICAgcGF5bWVudERhdGU6IFwiJHtkZXNwZXNhLnBheW1lbnREYXRlfVwiLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiAke2RheWpzKCdZWVlZLU1NLUREJykubm93KCl9XHJcbiAgICAgICAgfSl7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=