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
            console.log(dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5qcyJdLCJuYW1lcyI6WyJDcmlhckRlc3Blc2EiLCJwcm9wcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZHVlRGF0ZSIsInJlZmVyZW5jZU1vbnRoIiwicGF5bWVudERhdGUiLCJwYWlkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWF4Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2FsdmFyRGVzcGVzYSIsInVzZXIiLCJlbWFpbCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsImRlc3Blc2EiLCJkYXlqcyIsImZvcm1hdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsbUJBQ2tDQyx3REFBUyxDQUFDO0FBQ3hFQyxpQkFBYSxFQUFFO0FBQ2JDLGlCQUFXLEVBQUUsRUFEQTtBQUViQyxXQUFLLEVBQUUsRUFGTTtBQUdiQyxhQUFPLEVBQUUsRUFISTtBQUliQyxvQkFBYyxFQUFFLEVBSkg7QUFLYkMsaUJBQVcsRUFBRSxFQUxBO0FBTWJDLFVBQUksRUFBRTtBQU5PLEtBRHlEO0FBU3hFQyxvQkFBZ0IsRUFBRUMsMENBQUEsQ0FBVztBQUMzQlAsaUJBQVcsRUFBRU8sMENBQUEsR0FBYUMsUUFBYixDQUFzQixhQUF0QixDQURjO0FBRTNCUCxXQUFLLEVBQUVNLDBD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RCxDQXBHRDs7R0FBTVIsWTtVQUM0REUsZ0Q7OztLQUQ1REYsWTs7QUFzR1NBLDJFQUFmOztBQW1CQSxJQUFNa0IsYUFBYTtBQUFBLDhMQUFHLGlCQUFPUSxPQUFQLEVBQWdCTixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVUsNENBQUssR0FBR0MsTUFBUixDQUFlLFlBQWYsQ0FBWjtBQURvQjtBQUFBLG1CQUVEQyxLQUFLLENBQUMsK0JBQUQsRUFBa0M7QUFDeERDLG9CQUFNLEVBQUUsTUFEZ0Q7QUFFeERDLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0Isa0JBRFQ7QUFFUEMsc0JBQU0sRUFBRSxrQkFGRDtBQUdQQyw2QkFBYSxFQUNYO0FBSkssZUFGK0M7QUFReERDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxxQkFBSyxvREFDbUJqQixLQURuQixvREFFZU0sT0FBTyxDQUFDdEIsV0FGdkIsa0NBR1FzQixPQUFPLENBQUNyQixLQUhoQixzQ0FJV3FCLE9BQU8sQ0FBQ3BCLE9BSm5CLDZDQUtpQmdDLFFBQVEsQ0FBQ1osT0FBTyxDQUFDbkIsY0FBVCxDQUx6QiwwQ0FNZW1CLE9BQU8sQ0FBQ2xCLFdBTnZCO0FBRGMsZUFBZjtBQVJrRCxhQUFsQyxDQUZKOztBQUFBO0FBRWQrQixnQkFGYztBQXlCcEJ2QixtQkFBTyxDQUFDQyxHQUFSLENBQVlzQixJQUFaOztBQXpCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYnJCLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS44OGZhYzI1MzI4NjI5ZGE4MjhlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vbGliL2F1dGgwJ1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuXHJcbmNvbnN0IENyaWFyRGVzcGVzYSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgZXJyb3JzIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgZHVlRGF0ZTogJycsXHJcbiAgICAgIHJlZmVyZW5jZU1vbnRoOiAnJyxcclxuICAgICAgcGF5bWVudERhdGU6ICcnLFxyXG4gICAgICBwYWlkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgZGVzY3JpcHRpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIHByaWNlOiBZdXAubnVtYmVyKCkucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBkdWVEYXRlOiBZdXAuZGF0ZSgpLnJlcXVpcmVkKCdPYnJpZ2F0w7NyaW8nKSxcclxuICAgICAgcmVmZXJlbmNlTW9udGg6IFl1cC5zdHJpbmcoKS5tYXgoXHJcbiAgICAgICAgMTQsXHJcbiAgICAgICAgJ08gbcOqcyBkZXZlIHRlciBubyBtw6F4aW1vIDE0IGNhcmFjdGVyZXMnLFxyXG4gICAgICApLFxyXG4gICAgICBwYXltZW50RGF0ZTogWXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1heCgzMCwgJ0xvY2FsaWRhZGUgZGV2ZSB0ZXIgbm8gbcOheGltbyAzMCBjYXJhY3RlcmVzJylcclxuICAgICAgICAucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBwYWlkOiBZdXAuYm9vbGVhbigpLFxyXG4gICAgfSksXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMuZHVlRGF0ZSlcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzLnBheW1lbnREYXRlKVxyXG4gICAgICBzYWx2YXJEZXNwZXNhKHZhbHVlcywgcHJvcHMudXNlci5lbWFpbClcclxuICAgICAgYWxlcnQoYERlc3Blc2EgJHt2YWx1ZXMuZGVzY3JpcHRpb259IHNhbHZhIGNvbSBzdWNlc3NvIWApXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRldWRvXCI+XHJcbiAgICAgIDxoMj5Ob3ZhIERlc3Blc2E8L2gyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyacOnw6NvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RvdWNoZWQuZGVzY3JpcHRpb24gJiYgZXJyb3JzLmRlc2NyaXB0aW9uID8gKFxyXG4gICAgICAgICAgICA8dGV4dD57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvdGV4dD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+VmFsb3I6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5wcmljZSAmJiBlcnJvcnMucHJpY2UgPyA8dGV4dD57ZXJyb3JzLnByaWNlfTwvdGV4dD4gOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImR1ZURhdGVcIj5EYXRhIGRlIFZlbmNpbWVudG86IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kdWVEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZHVlRGF0ZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkdWVEYXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5kdWVEYXRlICYmIGVycm9ycy5kdWVEYXRlID8gKFxyXG4gICAgICAgICAgICA8dGV4dD57ZXJyb3JzLmR1ZURhdGV9PC90ZXh0PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVmZXJlbmNlTW9udGhcIj5Nw6pzIGEgc2VyIHBhZ286IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5yZWZlcmVuY2VNb250aH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInJlZmVyZW5jZU1vbnRoXCJcclxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZW5jZU1vbnRoXCJcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50RGF0ZVwiPkRpYSBkbyBQYWdhbWVudG86IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGF5bWVudERhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXltZW50RGF0ZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnREYXRlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RvdWNoZWQucGF5bWVudERhdGUgJiYgZXJyb3JzLnBheW1lbnREYXRlID8gKFxyXG4gICAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMucGF5bWVudERhdGV9PC90ZXh0PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNhZGFzdHJhclwiPjwvaW5wdXQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JpYXJEZXNwZXNhXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSlcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyOiBzZXNzaW9uLnVzZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB1c2VyOiAnVXN1w6FyaW8gbsOjbyBsb2dhZG8nLFxyXG4gICAgICBkYXRhOiAnRGFkb3MgaW5hY2Vzc8OtdmVpcycsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2FsdmFyRGVzcGVzYSA9IGFzeW5jIChkZXNwZXNhLCBlbWFpbCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJykpXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZ3JhcGhxbCcsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQXV0aG9yaXphdGlvbjpcclxuICAgICAgICAnQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpqYkdsbGJuUWlPaUptY205dWRDMWxibVF0UzJVMFozSm5OelJvY2pSa1kySTJJaXdpYVdGMElqb3hOVGszT0RVM05UZzJmUS5NVlFJUXhYa1ZnYmhDRnpZUndJaUF0SlpIYllOMFVxaUpHQm5kTUxLQUdZJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHF1ZXJ5OiBgbXV0YXRpb257XHJcbiAgICAgICAgY3JlYXRlRGVzcGVzYSh1c2VyOlwiJHtlbWFpbH1cIiwgaW5wdXQ6IHtcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIiR7ZGVzcGVzYS5kZXNjcmlwdGlvbn1cIlxyXG4gICAgICAgICAgcHJpY2U6ICR7ZGVzcGVzYS5wcmljZX0sIFxyXG4gICAgICAgICAgZHVlRGF0ZTogXCIke2Rlc3Blc2EuZHVlRGF0ZX1cIiwgXHJcbiAgICAgICAgICByZWZlcmVuY2VNb250aDogJHtwYXJzZUludChkZXNwZXNhLnJlZmVyZW5jZU1vbnRoKX0sIFxyXG4gICAgICAgICAgcGF5bWVudERhdGU6IFwiJHtkZXNwZXNhLnBheW1lbnREYXRlfVwiLFxyXG4gICAgICAgIH0pe1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9YCxcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9