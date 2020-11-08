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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/mensalidades/addMensalidade.js");
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

/***/ "./pages/mensalidades/addMensalidade.js":
/*!**********************************************!*\
  !*** ./pages/mensalidades/addMensalidade.js ***!
  \**********************************************/
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\phili\\Projetos\\MAmanager\\pages\\mensalidades\\addMensalidade.js";





const CriarMensalidade = props => {
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors
  } = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      idAluno: '',
      price: '',
      paymentDate: '',
      monthPaid: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
      idAluno: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(20, 'O ID deve ter 20 caracteres').max(20, 'O ID deve ter 20 caracteres').required('Obrigatório'),
      price: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().required('Obrigatório'),
      paymentDate: yup__WEBPACK_IMPORTED_MODULE_4__["date"](),
      monthPaid: yup__WEBPACK_IMPORTED_MODULE_4__["number"]()
    }),
    onSubmit: values => {
      salvarMensalidade(values, props.user.email);
      alert(`idAluno: ${values.idAluno},price: ${values.price},paymentDate: ${values.paymentDate},monthPaid: ${values.monthPaid}`);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "conteudo",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Nova Mensalidade"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "idAluno",
          children: "ID do Aluno: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.idAluno,
          onChange: handleChange,
          type: "text",
          id: "idAluno",
          name: "idAluno"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), touched.idAluno && errors.idAluno ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
          children: errors.idAluno
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "price",
          children: "Pre\xE7o: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.price,
          onChange: handleChange,
          type: "text",
          id: "price",
          name: "price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), touched.price && errors.price ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
          children: errors.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 44
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "paymentDate",
          children: "Data do Pagamento: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.paymentDate,
          onChange: handleChange,
          type: "date",
          id: "paymentDate",
          name: "paymentDate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), touched.paymentDate && errors.paymentDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
          children: errors.paymentDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "monthPaid",
          children: "M\xEAs Pago: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: values.monthPaid,
          onChange: handleChange,
          type: "text",
          id: "monthPaid",
          name: "monthPaid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined), touched.monthPaid && errors.monthPaid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("text", {
          children: errors.monthPaid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        value: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CriarMensalidade);
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

const salvarMensalidade = async (mensalidade, user) => {
  const data = await fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY'
    },
    body: JSON.stringify({
      query: `mutation{
        createMensalidade(user:"${user}", input: {
          idAluno: "${mensalidade.idAluno}",
          price: ${mensalidade.price},
          paymentDate: "${mensalidade.paymentDate}",
          monthPaid: ${mensalidade.monthPaid}
        })
      }`
    })
  });
  console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21lbnNhbGlkYWRlcy9hZGRNZW5zYWxpZGFkZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJpbml0QXV0aDAiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIMF9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJBVVRIMF9TQ09QRSIsImRvbWFpbiIsIkFVVEgwX0RPTUFJTiIsInJlZGlyZWN0VXJpIiwiQVVUSDBfUkVESVJFQ1RfVVJJIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiQVVUSDBfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsIkFVVEgwX0NPT0tJRV9TRUNSRVQiLCJjb29raWVMaWZldGltZSIsIkFVVEgwX0NPT0tJRV9MSUZFVElNRSIsIkNyaWFyTWVuc2FsaWRhZGUiLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsInZhbHVlcyIsInRvdWNoZWQiLCJlcnJvcnMiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiaWRBbHVubyIsInByaWNlIiwicGF5bWVudERhdGUiLCJtb250aFBhaWQiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInNhbHZhck1lbnNhbGlkYWRlIiwidXNlciIsImVtYWlsIiwiYWxlcnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJhdXRoMCIsImdldFNlc3Npb24iLCJkYXRhIiwibWVuc2FsaWRhZGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsb0lBQVMsQ0FBQztBQUN2QkMsVUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFEQztBQUV2QkMsY0FBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsbUJBRkg7QUFHdkJDLE9BQUssRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLFdB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LElBQVo7QUFDRCxDQXJCRCxDOzs7Ozs7Ozs7OztBQzdHQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9tZW5zYWxpZGFkZXMvYWRkTWVuc2FsaWRhZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL21lbnNhbGlkYWRlcy9hZGRNZW5zYWxpZGFkZS5qc1wiKTtcbiIsImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xyXG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXHJcbiAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxyXG4gIHNjb3BlOiBwcm9jZXNzLmVudi5BVVRIMF9TQ09QRSxcclxuICBkb21haW46IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTixcclxuICByZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuQVVUSDBfUkVESVJFQ1RfVVJJLFxyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuQVVUSDBfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJLFxyXG4gIHNlc3Npb246IHtcclxuICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ09PS0lFX1NFQ1JFVCxcclxuICAgIGNvb2tpZUxpZmV0aW1lOiBwcm9jZXNzLmVudi5BVVRIMF9DT09LSUVfTElGRVRJTUVcclxuICB9XHJcbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vbGliL2F1dGgwJ1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcblxyXG5jb25zdCBDcmlhck1lbnNhbGlkYWRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBlcnJvcnMgfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGlkQWx1bm86ICcnLFxyXG4gICAgICBwcmljZTogJycsXHJcbiAgICAgIHBheW1lbnREYXRlOiAnJyxcclxuICAgICAgbW9udGhQYWlkOiAnJyxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgaWRBbHVubzogWXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1pbigyMCwgJ08gSUQgZGV2ZSB0ZXIgMjAgY2FyYWN0ZXJlcycpXHJcbiAgICAgICAgLm1heCgyMCwgJ08gSUQgZGV2ZSB0ZXIgMjAgY2FyYWN0ZXJlcycpXHJcbiAgICAgICAgLnJlcXVpcmVkKCdPYnJpZ2F0w7NyaW8nKSxcclxuICAgICAgcHJpY2U6IFl1cC5udW1iZXIoKS5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIHBheW1lbnREYXRlOiBZdXAuZGF0ZSgpLFxyXG4gICAgICBtb250aFBhaWQ6IFl1cC5udW1iZXIoKSxcclxuICAgIH0pLFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgc2FsdmFyTWVuc2FsaWRhZGUodmFsdWVzLCBwcm9wcy51c2VyLmVtYWlsKVxyXG4gICAgICBhbGVydChcclxuICAgICAgICBgaWRBbHVubzogJHt2YWx1ZXMuaWRBbHVub30scHJpY2U6ICR7dmFsdWVzLnByaWNlfSxwYXltZW50RGF0ZTogJHt2YWx1ZXMucGF5bWVudERhdGV9LG1vbnRoUGFpZDogJHt2YWx1ZXMubW9udGhQYWlkfWAsXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cclxuICAgICAgPGgyPk5vdmEgTWVuc2FsaWRhZGU8L2gyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpZEFsdW5vXCI+SUQgZG8gQWx1bm86IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5pZEFsdW5vfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiaWRBbHVub1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpZEFsdW5vXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5pZEFsdW5vICYmIGVycm9ycy5pZEFsdW5vID8gKFxyXG4gICAgICAgICAgICA8dGV4dD57ZXJyb3JzLmlkQWx1bm99PC90ZXh0PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5QcmXDp286IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5wcmljZSAmJiBlcnJvcnMucHJpY2UgPyA8dGV4dD57ZXJyb3JzLnByaWNlfTwvdGV4dD4gOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBheW1lbnREYXRlXCI+RGF0YSBkbyBQYWdhbWVudG86IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXltZW50RGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICBpZD1cInBheW1lbnREYXRlXCJcclxuICAgICAgICAgICAgbmFtZT1cInBheW1lbnREYXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5wYXltZW50RGF0ZSAmJiBlcnJvcnMucGF5bWVudERhdGUgPyAoXHJcbiAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMucGF5bWVudERhdGV9PC90ZXh0PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW9udGhQYWlkXCI+TcOqcyBQYWdvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubW9udGhQYWlkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibW9udGhQYWlkXCJcclxuICAgICAgICAgICAgbmFtZT1cIm1vbnRoUGFpZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RvdWNoZWQubW9udGhQYWlkICYmIGVycm9ycy5tb250aFBhaWQgPyAoXHJcbiAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMubW9udGhQYWlkfTwvdGV4dD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDYWRhc3RyYXJcIj48L2lucHV0PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyaWFyTWVuc2FsaWRhZGVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKVxyXG4gIGlmIChzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IHNlc3Npb24udXNlcixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXI6ICdVc3XDoXJpbyBuw6NvIGxvZ2FkbycsXHJcbiAgICAgIGRhdGE6ICdEYWRvcyBpbmFjZXNzw612ZWlzJyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzYWx2YXJNZW5zYWxpZGFkZSA9IGFzeW5jIChtZW5zYWxpZGFkZSwgdXNlcikgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2dyYXBocWwnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgICAgJ0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKamJHbGxiblFpT2lKbWNtOXVkQzFsYm1RdFMyVTBaM0puTnpSb2NqUmtZMkkySWl3aWFXRjBJam94TlRrM09EVTNOVGcyZlEuTVZRSVF4WGtWZ2JoQ0Z6WVJ3SWlBdEpaSGJZTjBVcWlKR0JuZE1MS0FHWScsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBxdWVyeTogYG11dGF0aW9ue1xyXG4gICAgICAgIGNyZWF0ZU1lbnNhbGlkYWRlKHVzZXI6XCIke3VzZXJ9XCIsIGlucHV0OiB7XHJcbiAgICAgICAgICBpZEFsdW5vOiBcIiR7bWVuc2FsaWRhZGUuaWRBbHVub31cIixcclxuICAgICAgICAgIHByaWNlOiAke21lbnNhbGlkYWRlLnByaWNlfSxcclxuICAgICAgICAgIHBheW1lbnREYXRlOiBcIiR7bWVuc2FsaWRhZGUucGF5bWVudERhdGV9XCIsXHJcbiAgICAgICAgICBtb250aFBhaWQ6ICR7bWVuc2FsaWRhZGUubW9udGhQYWlkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1gLFxyXG4gICAgfSksXHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==