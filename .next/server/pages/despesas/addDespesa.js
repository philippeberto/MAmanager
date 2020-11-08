module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/despesas/addDespesa.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    cookieLifetime: process.env.AUTH0_COOKIE_LIFETIME
  }
}));

/***/ }),

/***/ "./pages/despesas/addDespesa.js":
/*!**************************************!*\
  !*** ./pages/despesas/addDespesa.js ***!
  \**************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\phili\\Projetos\\MAmanager\\pages\\despesas\\addDespesa.js";






const CriarDespesa = props => {
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors
  } = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
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
    onSubmit: values => {
      salvarDespesa(values, props.user.email);
      alert(`Despesa ${values.description} salva com sucesso!`);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "conteudo",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Nova Despesa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Descri\xE7\xE3o: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.description,
          onChange: handleChange,
          type: "text",
          id: "description",
          name: "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), touched.description && errors.description ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
          children: errors.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "price",
          children: "Valor: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.price,
          onChange: handleChange,
          type: "text",
          id: "price",
          name: "price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), touched.price && errors.price ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
          children: errors.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 44
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "dueDate",
          children: "Data de Vencimento: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.dueDate,
          onChange: handleChange,
          type: "date",
          id: "dueDate",
          name: "dueDate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), touched.dueDate && errors.dueDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
          children: errors.dueDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "referenceMonth",
          children: "M\xEAs a ser pago: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.referenceMonth,
          onChange: handleChange,
          type: "text",
          id: "referenceMonth",
          name: "referenceMonth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "paymentDate",
            children: "Dia do Pagamento: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            value: values.paymentDate,
            onChange: handleChange,
            type: "date",
            id: "paymentDate",
            name: "paymentDate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined), touched.paymentDate && errors.paymentDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
            children: errors.paymentDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        value: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CriarDespesa);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_2__["default"].getSession(req);

  if (session) {
    return {
      props: {
        user: session.user
      }
    };
  }

  return {
    props: {
      user: 'Usuário não logado',
      data: 'Dados inacessíveis'
    }
  };
}

const salvarDespesa = async (despesa, email) => {
  const data = await fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY'
    },
    body: JSON.stringify({
      query: `mutation{
        createDespesa(user:"${email}", input: {
          description: "${despesa.description}"
          price: ${despesa.price}, 
          dueDate: "${despesa.dueDate}", 
          referenceMonth: ${parseInt(despesa.referenceMonth)}, 
          paymentDate: "${despesa.paymentDate}",
          createdAt: "${dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD')}"
        }){
          id
          description
        }
      }`
    })
  });
};

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rlc3Blc2FzL2FkZERlc3Blc2EuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJpbml0QXV0aDAiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIMF9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJBVVRIMF9TQ09QRSIsImRvbWFpbiIsIkFVVEgwX0RPTUFJTiIsInJlZGlyZWN0VXJpIiwiQVVUSDBfUkVESVJFQ1RfVVJJIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiQVVUSDBfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsIkFVVEgwX0NPT0tJRV9TRUNSRVQiLCJjb29raWVMaWZldGltZSIsIkFVVEgwX0NPT0tJRV9MSUZFVElNRSIsIkNyaWFyRGVzcGVzYSIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidmFsdWVzIiwidG91Y2hlZCIsImVycm9ycyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZHVlRGF0ZSIsInJlZmVyZW5jZU1vbnRoIiwicGF5bWVudERhdGUiLCJwYWlkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWF4Iiwib25TdWJtaXQiLCJzYWx2YXJEZXNwZXNhIiwidXNlciIsImVtYWlsIiwiYWxlcnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJhdXRoMCIsImdldFNlc3Npb24iLCJkYXRhIiwiZGVzcGVzYSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJkYXlqcyIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSxvSUFBUyxDQUFDO0FBQ3ZCQyxVQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQURDO0FBRXZCQyxjQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxtQkFG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LElBQUksR0FBRyxNQUFNRSxLQUFLLENBQUMsK0JBQUQsRUFBa0M7QUFDeERDLFVBQU0sRUFBRSxNQURnRDtBQUV4REMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCLGtCQURUO0FBRVBDLFlBQU0sRUFBRSxrQkFGRDtBQUdQQyxtQkFBYSxFQUNYO0FBSkssS0FGK0M7QUFReERDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFdBQUssRUFBRztBQUNkLDhCQUE4QmpCLEtBQU07QUFDcEMsMEJBQTBCUSxPQUFPLENBQUNyQixXQUFZO0FBQzlDLG1CQUFtQnFCLE9BQU8sQ0FBQ3BCLEtBQU07QUFDakMsc0JBQXNCb0IsT0FBTyxDQUFDbkIsT0FBUTtBQUN0Qyw0QkFBNEI2QixRQUFRLENBQUNWLE9BQU8sQ0FBQ2xCLGNBQVQsQ0FBeUI7QUFDN0QsMEJBQTBCa0IsT0FBTyxDQUFDakIsV0FBWTtBQUM5Qyx3QkFBd0I0Qiw0Q0FBSyxHQUFHQyxNQUFSLENBQWUsWUFBZixDQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYnlCLEtBQWY7QUFSa0QsR0FBbEMsQ0FBeEI7QUF3QkQsQ0F6QkQsQzs7Ozs7Ozs7Ozs7QUM3SEEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5qc1wiKTtcbiIsImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xyXG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXHJcbiAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxyXG4gIHNjb3BlOiBwcm9jZXNzLmVudi5BVVRIMF9TQ09QRSxcclxuICBkb21haW46IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTixcclxuICByZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuQVVUSDBfUkVESVJFQ1RfVVJJLFxyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuQVVUSDBfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJLFxyXG4gIHNlc3Npb246IHtcclxuICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ09PS0lFX1NFQ1JFVCxcclxuICAgIGNvb2tpZUxpZmV0aW1lOiBwcm9jZXNzLmVudi5BVVRIMF9DT09LSUVfTElGRVRJTUVcclxuICB9XHJcbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vbGliL2F1dGgwJ1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuXHJcbmNvbnN0IENyaWFyRGVzcGVzYSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgZXJyb3JzIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgZHVlRGF0ZTogJycsXHJcbiAgICAgIHJlZmVyZW5jZU1vbnRoOiAnJyxcclxuICAgICAgcGF5bWVudERhdGU6ICcnLFxyXG4gICAgICBwYWlkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgZGVzY3JpcHRpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIHByaWNlOiBZdXAubnVtYmVyKCkucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBkdWVEYXRlOiBZdXAuZGF0ZSgpLnJlcXVpcmVkKCdPYnJpZ2F0w7NyaW8nKSxcclxuICAgICAgcmVmZXJlbmNlTW9udGg6IFl1cC5zdHJpbmcoKS5tYXgoXHJcbiAgICAgICAgMTQsXHJcbiAgICAgICAgJ08gbcOqcyBkZXZlIHRlciBubyBtw6F4aW1vIDE0IGNhcmFjdGVyZXMnLFxyXG4gICAgICApLFxyXG4gICAgICBwYXltZW50RGF0ZTogWXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1heCgzMCwgJ0xvY2FsaWRhZGUgZGV2ZSB0ZXIgbm8gbcOheGltbyAzMCBjYXJhY3RlcmVzJylcclxuICAgICAgICAucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBwYWlkOiBZdXAuYm9vbGVhbigpLFxyXG4gICAgfSksXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICBzYWx2YXJEZXNwZXNhKHZhbHVlcywgcHJvcHMudXNlci5lbWFpbClcclxuICAgICAgYWxlcnQoYERlc3Blc2EgJHt2YWx1ZXMuZGVzY3JpcHRpb259IHNhbHZhIGNvbSBzdWNlc3NvIWApXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRldWRvXCI+XHJcbiAgICAgIDxoMj5Ob3ZhIERlc3Blc2E8L2gyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyacOnw6NvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RvdWNoZWQuZGVzY3JpcHRpb24gJiYgZXJyb3JzLmRlc2NyaXB0aW9uID8gKFxyXG4gICAgICAgICAgICA8dGV4dD57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvdGV4dD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+VmFsb3I6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5wcmljZSAmJiBlcnJvcnMucHJpY2UgPyA8dGV4dD57ZXJyb3JzLnByaWNlfTwvdGV4dD4gOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImR1ZURhdGVcIj5EYXRhIGRlIFZlbmNpbWVudG86IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kdWVEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZHVlRGF0ZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkdWVEYXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5kdWVEYXRlICYmIGVycm9ycy5kdWVEYXRlID8gKFxyXG4gICAgICAgICAgICA8dGV4dD57ZXJyb3JzLmR1ZURhdGV9PC90ZXh0PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVmZXJlbmNlTW9udGhcIj5Nw6pzIGEgc2VyIHBhZ286IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5yZWZlcmVuY2VNb250aH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInJlZmVyZW5jZU1vbnRoXCJcclxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZW5jZU1vbnRoXCJcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50RGF0ZVwiPkRpYSBkbyBQYWdhbWVudG86IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGF5bWVudERhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXltZW50RGF0ZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnREYXRlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RvdWNoZWQucGF5bWVudERhdGUgJiYgZXJyb3JzLnBheW1lbnREYXRlID8gKFxyXG4gICAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMucGF5bWVudERhdGV9PC90ZXh0PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNhZGFzdHJhclwiPjwvaW5wdXQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JpYXJEZXNwZXNhXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSlcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyOiBzZXNzaW9uLnVzZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB1c2VyOiAnVXN1w6FyaW8gbsOjbyBsb2dhZG8nLFxyXG4gICAgICBkYXRhOiAnRGFkb3MgaW5hY2Vzc8OtdmVpcycsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2FsdmFyRGVzcGVzYSA9IGFzeW5jIChkZXNwZXNhLCBlbWFpbCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2dyYXBocWwnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgICAgJ0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKamJHbGxiblFpT2lKbWNtOXVkQzFsYm1RdFMyVTBaM0puTnpSb2NqUmtZMkkySWl3aWFXRjBJam94TlRrM09EVTNOVGcyZlEuTVZRSVF4WGtWZ2JoQ0Z6WVJ3SWlBdEpaSGJZTjBVcWlKR0JuZE1MS0FHWScsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBxdWVyeTogYG11dGF0aW9ue1xyXG4gICAgICAgIGNyZWF0ZURlc3Blc2EodXNlcjpcIiR7ZW1haWx9XCIsIGlucHV0OiB7XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCIke2Rlc3Blc2EuZGVzY3JpcHRpb259XCJcclxuICAgICAgICAgIHByaWNlOiAke2Rlc3Blc2EucHJpY2V9LCBcclxuICAgICAgICAgIGR1ZURhdGU6IFwiJHtkZXNwZXNhLmR1ZURhdGV9XCIsIFxyXG4gICAgICAgICAgcmVmZXJlbmNlTW9udGg6ICR7cGFyc2VJbnQoZGVzcGVzYS5yZWZlcmVuY2VNb250aCl9LCBcclxuICAgICAgICAgIHBheW1lbnREYXRlOiBcIiR7ZGVzcGVzYS5wYXltZW50RGF0ZX1cIixcclxuICAgICAgICAgIGNyZWF0ZWRBdDogXCIke2RheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJyl9XCJcclxuICAgICAgICB9KXtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfWAsXHJcbiAgICB9KSxcclxuICB9KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==