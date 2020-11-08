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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");




var _jsxFileName = "C:\\Users\\phili\\Projetos\\MAmanager\\pages\\despesas\\addDespesa.js",
    _this = undefined,
    _s = $RefreshSig$();






var CriarDespesa = function CriarDespesa(props) {
  _s();

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useFormik"])({
    initialValues: {
      description: '',
      price: '',
      dueDate: '',
      referenceMonth: '',
      paymentDate: '',
      paid: false
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__["object"]({
      description: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required('Obrigatório'),
      price: yup__WEBPACK_IMPORTED_MODULE_6__["number"]().required('Obrigatório'),
      dueDate: yup__WEBPACK_IMPORTED_MODULE_6__["date"]().required('Obrigatório'),
      referenceMonth: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().max(14, 'O mês deve ter no máximo 14 caracteres'),
      paymentDate: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().max(30, 'Localidade deve ter no máximo 30 caracteres').required('Obrigatório'),
      paid: yup__WEBPACK_IMPORTED_MODULE_6__["boolean"]()
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
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Descri\xE7\xE3o: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.description,
          onChange: handleChange,
          type: "text",
          id: "description",
          name: "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), touched.description && errors.description ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
          children: errors.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "price",
          children: "Valor: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.price,
          onChange: handleChange,
          type: "text",
          id: "price",
          name: "price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), touched.price && errors.price ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
          children: errors.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 44
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "dueDate",
          children: "Data de Vencimento: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.dueDate,
          onChange: handleChange,
          type: "date",
          id: "dueDate",
          name: "dueDate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), touched.dueDate && errors.dueDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
          children: errors.dueDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          htmlFor: "referenceMonth",
          children: "M\xEAs a ser pago: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: values.referenceMonth,
          onChange: handleChange,
          type: "text",
          id: "referenceMonth",
          name: "referenceMonth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            htmlFor: "paymentDate",
            children: "Dia do Pagamento: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            value: values.paymentDate,
            onChange: handleChange,
            type: "date",
            id: "paymentDate",
            name: "paymentDate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), touched.paymentDate && errors.paymentDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("text", {
            children: errors.paymentDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "submit",
        value: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(CriarDespesa, "G2gPppaHxabIZCEXmdxIpxNZY1g=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_5__["useFormik"]];
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
            console.log(dayjs__WEBPACK_IMPORTED_MODULE_4___default()('YYYY-MM-DD'));
            _context.next = 3;
            return fetch('http://localhost:3001/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY'
              },
              body: JSON.stringify({
                query: "mutation{\n        createDespesa(user:\"".concat(email, "\", input: {\n          description: \"").concat(despesa.description, "\"\n          price: ").concat(despesa.price, ", \n          dueDate: \"").concat(despesa.dueDate, "\", \n          referenceMonth: ").concat(parseInt(despesa.referenceMonth), ", \n          paymentDate: \"").concat(despesa.paymentDate, "\",\n        }){\n          id\n          description\n        }\n      }")
              })
            });

          case 3:
            data = _context.sent;
            console.log(data);

          case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5qcyJdLCJuYW1lcyI6WyJDcmlhckRlc3Blc2EiLCJwcm9wcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZHVlRGF0ZSIsInJlZmVyZW5jZU1vbnRoIiwicGF5bWVudERhdGUiLCJwYWlkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWF4Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2FsdmFyRGVzcGVzYSIsInVzZXIiLCJlbWFpbCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsImRlc3Blc2EiLCJkYXlqcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsbUJBQ2tDQyx3REFBUyxDQUFDO0FBQ3hFQyxpQkFBYSxFQUFFO0FBQ2JDLGlCQUFXLEVBQUUsRUFEQTtBQUViQyxXQUFLLEVBQUUsRUFGTTtBQUdiQyxhQUFPLEVBQUUsRUFISTtBQUliQyxvQkFBYyxFQUFFLEVBSkg7QUFLYkMsaUJBQVcsRUFBRSxFQUxBO0FBTWJDLFVBQUksRUFBRTtBQU5PLEtBRHlEO0FBU3hFQyxvQkFBZ0IsRUFBRUMsMENBQUEsQ0FBVztBQUMzQlAsaUJBQVcsRUFBRU8sMENBQUEsR0FBYUMsUUFBYixDQUFzQixhQUF0QixDQURjO0FBRTNCUCxXQUFLLEVBQUVNLDBDQUFBLEdBQWFD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R0FBTVIsWTtVQUM0REUsZ0Q7OztLQUQ1REYsWTs7QUFzR1NBLDJFQUFmOztBQW1CQSxJQUFNa0IsYUFBYTtBQUFBLDhMQUFHLGlCQUFPUSxPQUFQLEVBQWdCTixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVUsNENBQUssQ0FBQyxZQUFELENBQWpCO0FBRG9CO0FBQUEsbUJBRURDLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUN4REMsb0JBQU0sRUFBRSxNQURnRDtBQUV4REMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQixrQkFEVDtBQUVQQyxzQkFBTSxFQUFFLGtCQUZEO0FBR1BDLDZCQUFhLEVBQ1g7QUFKSyxlQUYrQztBQVF4REMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLHFCQUFLLG9EQUNtQmhCLEtBRG5CLG9EQUVlTSxPQUFPLENBQUN0QixXQUZ2QixrQ0FHUXNCLE9BQU8sQ0FBQ3JCLEtBSGhCLHNDQUlXcUIsT0FBTyxDQUFDcEIsT0FKbkIsNkNBS2lCK0IsUUFBUSxDQUFDWCxPQUFPLENBQUNuQixjQUFULENBTHpCLDBDQU1lbUIsT0FBTyxDQUFDbEIsV0FOdkI7QUFEYyxlQUFmO0FBUmtELGFBQWxDLENBRko7O0FBQUE7QUFFZDhCLGdCQUZjO0FBeUJwQnRCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWXFCLElBQVo7O0FBekJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFicEIsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXNwZXNhcy9hZGREZXNwZXNhLjQwMDNlNTQ4NDdmNjliMzc3YmMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhdXRoMCBmcm9tICcuLi8uLi9saWIvYXV0aDAnXHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xyXG5cclxuY29uc3QgQ3JpYXJEZXNwZXNhID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBlcnJvcnMgfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICBkdWVEYXRlOiAnJyxcclxuICAgICAgcmVmZXJlbmNlTW9udGg6ICcnLFxyXG4gICAgICBwYXltZW50RGF0ZTogJycsXHJcbiAgICAgIHBhaWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICBkZXNjcmlwdGlvbjogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdPYnJpZ2F0w7NyaW8nKSxcclxuICAgICAgcHJpY2U6IFl1cC5udW1iZXIoKS5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIGR1ZURhdGU6IFl1cC5kYXRlKCkucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICByZWZlcmVuY2VNb250aDogWXVwLnN0cmluZygpLm1heChcclxuICAgICAgICAxNCxcclxuICAgICAgICAnTyBtw6pzIGRldmUgdGVyIG5vIG3DoXhpbW8gMTQgY2FyYWN0ZXJlcycsXHJcbiAgICAgICksXHJcbiAgICAgIHBheW1lbnREYXRlOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAubWF4KDMwLCAnTG9jYWxpZGFkZSBkZXZlIHRlciBubyBtw6F4aW1vIDMwIGNhcmFjdGVyZXMnKVxyXG4gICAgICAgIC5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIHBhaWQ6IFl1cC5ib29sZWFuKCksXHJcbiAgICB9KSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcy5kdWVEYXRlKVxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMucGF5bWVudERhdGUpXHJcbiAgICAgIHNhbHZhckRlc3Blc2EodmFsdWVzLCBwcm9wcy51c2VyLmVtYWlsKVxyXG4gICAgICBhbGVydChgRGVzcGVzYSAke3ZhbHVlcy5kZXNjcmlwdGlvbn0gc2FsdmEgY29tIHN1Y2Vzc28hYClcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cclxuICAgICAgPGgyPk5vdmEgRGVzcGVzYTwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3Jpw6fDo286IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5kZXNjcmlwdGlvbiAmJiBlcnJvcnMuZGVzY3JpcHRpb24gPyAoXHJcbiAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMuZGVzY3JpcHRpb259PC90ZXh0PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5WYWxvcjogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByaWNlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0b3VjaGVkLnByaWNlICYmIGVycm9ycy5wcmljZSA/IDx0ZXh0PntlcnJvcnMucHJpY2V9PC90ZXh0PiA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVlRGF0ZVwiPkRhdGEgZGUgVmVuY2ltZW50bzogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmR1ZURhdGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgaWQ9XCJkdWVEYXRlXCJcclxuICAgICAgICAgICAgbmFtZT1cImR1ZURhdGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0b3VjaGVkLmR1ZURhdGUgJiYgZXJyb3JzLmR1ZURhdGUgPyAoXHJcbiAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMuZHVlRGF0ZX08L3RleHQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWZlcmVuY2VNb250aFwiPk3DqnMgYSBzZXIgcGFnbzogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnJlZmVyZW5jZU1vbnRofVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwicmVmZXJlbmNlTW9udGhcIlxyXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlbmNlTW9udGhcIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBheW1lbnREYXRlXCI+RGlhIGRvIFBhZ2FtZW50bzogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXltZW50RGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cInBheW1lbnREYXRlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudERhdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dG91Y2hlZC5wYXltZW50RGF0ZSAmJiBlcnJvcnMucGF5bWVudERhdGUgPyAoXHJcbiAgICAgICAgICAgICAgPHRleHQ+e2Vycm9ycy5wYXltZW50RGF0ZX08L3RleHQ+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FkYXN0cmFyXCI+PC9pbnB1dD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmlhckRlc3Blc2FcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKVxyXG4gIGlmIChzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IHNlc3Npb24udXNlcixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXI6ICdVc3XDoXJpbyBuw6NvIGxvZ2FkbycsXHJcbiAgICAgIGRhdGE6ICdEYWRvcyBpbmFjZXNzw612ZWlzJyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzYWx2YXJEZXNwZXNhID0gYXN5bmMgKGRlc3Blc2EsIGVtYWlsKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZGF5anMoJ1lZWVktTU0tREQnKSlcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ncmFwaHFsJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR2xsYm5RaU9pSm1jbTl1ZEMxbGJtUXRTMlUwWjNKbk56Um9jalJrWTJJMklpd2lhV0YwSWpveE5UazNPRFUzTlRnMmZRLk1WUUlReFhrVmdiaENGellSd0lpQXRKWkhiWU4wVXFpSkdCbmRNTEtBR1knLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgcXVlcnk6IGBtdXRhdGlvbntcclxuICAgICAgICBjcmVhdGVEZXNwZXNhKHVzZXI6XCIke2VtYWlsfVwiLCBpbnB1dDoge1xyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiJHtkZXNwZXNhLmRlc2NyaXB0aW9ufVwiXHJcbiAgICAgICAgICBwcmljZTogJHtkZXNwZXNhLnByaWNlfSwgXHJcbiAgICAgICAgICBkdWVEYXRlOiBcIiR7ZGVzcGVzYS5kdWVEYXRlfVwiLCBcclxuICAgICAgICAgIHJlZmVyZW5jZU1vbnRoOiAke3BhcnNlSW50KGRlc3Blc2EucmVmZXJlbmNlTW9udGgpfSwgXHJcbiAgICAgICAgICBwYXltZW50RGF0ZTogXCIke2Rlc3Blc2EucGF5bWVudERhdGV9XCIsXHJcbiAgICAgICAgfSl7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=