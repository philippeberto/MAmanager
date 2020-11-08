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
      children: "Novo Aluno"
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
                query: "mutation{\n        createDespesa(user:\"".concat(email, "\", input: {\n          description: \"").concat(despesa.description, "\"\n          price: ").concat(despesa.price, ", \n          dueDate: \"").concat(despesa.dueDate, "\", \n          referenceMonth: ").concat(despesa.referenceMonth, ", \n          paymentDate: \"").concat(despesa.paymentDate, "\", \n        }){\n          id\n          description\n        }\n      }")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5qcyJdLCJuYW1lcyI6WyJDcmlhckRlc3Blc2EiLCJwcm9wcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZHVlRGF0ZSIsInJlZmVyZW5jZU1vbnRoIiwicGF5bWVudERhdGUiLCJwYWlkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWF4Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2FsdmFyRGVzcGVzYSIsInVzZXIiLCJlbWFpbCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsImRlc3Blc2EiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLG1CQUNrQ0Msd0RBQVMsQ0FBQztBQUN4RUMsaUJBQWEsRUFBRTtBQUNiQyxpQkFBVyxFQUFFLEVBREE7QUFFYkMsV0FBSyxFQUFFLEVBRk07QUFHYkMsYUFBTyxFQUFFLEVBSEk7QUFJYkMsb0JBQWMsRUFBRSxFQUpIO0FBS2JDLGlCQUFXLEVBQUUsRUFMQTtBQU1iQyxVQUFJLEVBQUU7QUFOTyxLQUR5RDtBQVN4RUMsb0JBQWdCLEVBQUVDLDBDQUFBLENBQVc7QUFDM0JQLGlCQUFXLEVBQUVPLDBDQUFBLEdBQWFDLFFBQWIsQ0FBc0IsYUFBdEIsQ0FEYztBQUUzQlAsV0FBSyxFQUFFTSwwQ0FBQSxHQUFhQyxRQUFiLENBQXNCLGFBQXRCLENBRm9CO0FB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LFk7O0FBc0dTQSwyRUFBZjs7QUFtQkEsSUFBTWtCLGFBQWE7QUFBQSw4TEFBRyxpQkFBT1EsT0FBUCxFQUFnQk4sS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRE8sS0FBSyxDQUFDLCtCQUFELEVBQWtDO0FBQ3hEQyxvQkFBTSxFQUFFLE1BRGdEO0FBRXhEQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCLGtCQURUO0FBRVBDLHNCQUFNLEVBQUUsa0JBRkQ7QUFHUEMsNkJBQWEsRUFDWDtBQUpLLGVBRitDO0FBUXhEQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMscUJBQUssb0RBQ21CZixLQURuQixvREFFZU0sT0FBTyxDQUFDdEIsV0FGdkIsa0NBR1FzQixPQUFPLENBQUNyQixLQUhoQixzQ0FJV3FCLE9BQU8sQ0FBQ3BCLE9BSm5CLDZDQUtpQm9CLE9BQU8sQ0FBQ25CLGNBTHpCLDBDQU1lbUIsT0FBTyxDQUFDbEIsV0FOdkI7QUFEYyxlQUFmO0FBUmtELGFBQWxDLENBREo7O0FBQUE7QUFDZDRCLGdCQURjO0FBd0JwQnBCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWW1CLElBQVo7O0FBeEJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFibEIsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXNwZXNhcy9hZGREZXNwZXNhLjI1NjAyMGRhMzQwNzBmNmQ3NjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhdXRoMCBmcm9tICcuLi8uLi9saWIvYXV0aDAnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuXHJcbmNvbnN0IENyaWFyRGVzcGVzYSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgZXJyb3JzIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgZHVlRGF0ZTogJycsXHJcbiAgICAgIHJlZmVyZW5jZU1vbnRoOiAnJyxcclxuICAgICAgcGF5bWVudERhdGU6ICcnLFxyXG4gICAgICBwYWlkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgZGVzY3JpcHRpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIHByaWNlOiBZdXAubnVtYmVyKCkucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBkdWVEYXRlOiBZdXAuZGF0ZSgpLnJlcXVpcmVkKCdPYnJpZ2F0w7NyaW8nKSxcclxuICAgICAgcmVmZXJlbmNlTW9udGg6IFl1cC5zdHJpbmcoKS5tYXgoXHJcbiAgICAgICAgMTQsXHJcbiAgICAgICAgJ08gbcOqcyBkZXZlIHRlciBubyBtw6F4aW1vIDE0IGNhcmFjdGVyZXMnLFxyXG4gICAgICApLFxyXG4gICAgICBwYXltZW50RGF0ZTogWXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1heCgzMCwgJ0xvY2FsaWRhZGUgZGV2ZSB0ZXIgbm8gbcOheGltbyAzMCBjYXJhY3RlcmVzJylcclxuICAgICAgICAucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBwYWlkOiBZdXAuYm9vbGVhbigpLFxyXG4gICAgfSksXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMuZHVlRGF0ZSlcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzLnBheW1lbnREYXRlKVxyXG4gICAgICBzYWx2YXJEZXNwZXNhKHZhbHVlcywgcHJvcHMudXNlci5lbWFpbClcclxuICAgICAgYWxlcnQoYERlc3Blc2EgJHt2YWx1ZXMuZGVzY3JpcHRpb259IHNhbHZhIGNvbSBzdWNlc3NvIWApXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRldWRvXCI+XHJcbiAgICAgIDxoMj5Ob3ZvIEFsdW5vPC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmnDp8OjbzogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0b3VjaGVkLmRlc2NyaXB0aW9uICYmIGVycm9ycy5kZXNjcmlwdGlvbiA/IChcclxuICAgICAgICAgICAgPHRleHQ+e2Vycm9ycy5kZXNjcmlwdGlvbn08L3RleHQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlZhbG9yOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RvdWNoZWQucHJpY2UgJiYgZXJyb3JzLnByaWNlID8gPHRleHQ+e2Vycm9ycy5wcmljZX08L3RleHQ+IDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkdWVEYXRlXCI+RGF0YSBkZSBWZW5jaW1lbnRvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZHVlRGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICBpZD1cImR1ZURhdGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZHVlRGF0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RvdWNoZWQuZHVlRGF0ZSAmJiBlcnJvcnMuZHVlRGF0ZSA/IChcclxuICAgICAgICAgICAgPHRleHQ+e2Vycm9ycy5kdWVEYXRlfTwvdGV4dD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZmVyZW5jZU1vbnRoXCI+TcOqcyBhIHNlciBwYWdvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucmVmZXJlbmNlTW9udGh9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJyZWZlcmVuY2VNb250aFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVuY2VNb250aFwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5bWVudERhdGVcIj5EaWEgZG8gUGFnYW1lbnRvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBheW1lbnREYXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGF5bWVudERhdGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXltZW50RGF0ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0b3VjaGVkLnBheW1lbnREYXRlICYmIGVycm9ycy5wYXltZW50RGF0ZSA/IChcclxuICAgICAgICAgICAgICA8dGV4dD57ZXJyb3JzLnBheW1lbnREYXRlfTwvdGV4dD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDYWRhc3RyYXJcIj48L2lucHV0PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyaWFyRGVzcGVzYVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEpXHJcbiAgaWYgKHNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdXNlcjogJ1VzdcOhcmlvIG7Do28gbG9nYWRvJyxcclxuICAgICAgZGF0YTogJ0RhZG9zIGluYWNlc3PDrXZlaXMnLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNhbHZhckRlc3Blc2EgPSBhc3luYyAoZGVzcGVzYSwgZW1haWwpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ncmFwaHFsJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR2xsYm5RaU9pSm1jbTl1ZEMxbGJtUXRTMlUwWjNKbk56Um9jalJrWTJJMklpd2lhV0YwSWpveE5UazNPRFUzTlRnMmZRLk1WUUlReFhrVmdiaENGellSd0lpQXRKWkhiWU4wVXFpSkdCbmRNTEtBR1knLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgcXVlcnk6IGBtdXRhdGlvbntcclxuICAgICAgICBjcmVhdGVEZXNwZXNhKHVzZXI6XCIke2VtYWlsfVwiLCBpbnB1dDoge1xyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiJHtkZXNwZXNhLmRlc2NyaXB0aW9ufVwiXHJcbiAgICAgICAgICBwcmljZTogJHtkZXNwZXNhLnByaWNlfSwgXHJcbiAgICAgICAgICBkdWVEYXRlOiBcIiR7ZGVzcGVzYS5kdWVEYXRlfVwiLCBcclxuICAgICAgICAgIHJlZmVyZW5jZU1vbnRoOiAke2Rlc3Blc2EucmVmZXJlbmNlTW9udGh9LCBcclxuICAgICAgICAgIHBheW1lbnREYXRlOiBcIiR7ZGVzcGVzYS5wYXltZW50RGF0ZX1cIiwgXHJcbiAgICAgICAgfSl7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=