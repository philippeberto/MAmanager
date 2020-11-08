module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");

var _jsxFileName = "C:\\Users\\phili\\Projetos\\MAmanager\\pages\\index.js";



const Index = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Mensalidades"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Resumo das Mensalidades"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Total no M\xEAs atual: ", props.mensalidades, "  "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Vendas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Resumo das vendas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Total no M\xEAs atual: ", props.vendas, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Compras"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Resumo das compras"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Total no M\xEAs atual: ", props.compras, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Despesas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Resumo das despesas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Total no M\xEAs atual: ", props.despesas, "  "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_2__["default"].getSession(req);

  if (session) {
    const data = await fetch('http://localhost:3001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY'
      },
      body: JSON.stringify({
        query: `{
        somaMensalidadesByPeriod(user:"philippe.bjj@gmail.com",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
        somaDespesasByPeriod(user:"philippe.bjj@gmail.com",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
        somaVendasByPeriod(user:"philippe.bjj@gmail.com",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
        somaComprasByPeriod(user:"philippe.bjj@gmail.com",input:{
          idate: "2020-11-01"
          fdate: "2020-11-30"
        })
      }`
      })
    });
    const mensalidadesDB = await data.json();
    const mensalidades = mensalidadesDB.data.somaMensalidadesByPeriod;
    const despesas = mensalidadesDB.data.somaDespesasByPeriod;
    const vendas = mensalidadesDB.data.somaVendasByPeriod;
    const compras = mensalidadesDB.data.somaComprasByPeriod;
    return {
      props: {
        user: session.user,
        mensalidades,
        despesas,
        vendas,
        compras
      }
    };
  }

  return {
    props: {
      user: 'Usuário não logado',
      data: 'Dados Inacessíveis'
    }
  };
}

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluaXRBdXRoMCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsIkFVVEgwX1NDT1BFIiwiZG9tYWluIiwiQVVUSDBfRE9NQUlOIiwicmVkaXJlY3RVcmkiLCJBVVRIMF9SRURJUkVDVF9VUkkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJBVVRIMF9QT1NUX0xPR09VVF9SRURJUkVDVF9VUkkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQVVUSDBfQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwiQVVUSDBfQ09PS0lFX0xJRkVUSU1FIiwiSW5kZXgiLCJwcm9wcyIsIm1lbnNhbGlkYWRlcyIsInZlbmRhcyIsImNvbXByYXMiLCJkZXNwZXNhcyIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsImF1dGgwIiwiZ2V0U2Vzc2lvbiIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsIm1lbnNhbGlkYWRlc0RCIiwianNvbiIsInNvbWFNZW5zYWxpZGFkZXNCeVBlcmlvZCIsInNvbWFEZXNwZXNhc0J5UGVyaW9kIiwic29tYVZlbmRhc0J5UGVyaW9kIiwic29tYUNvbXByYXNCeVBlcmlvZCIsInVzZXIi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Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKHtcclxuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxyXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcclxuICBzY29wZTogcHJvY2Vzcy5lbnYuQVVUSDBfU0NPUEUsXHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXHJcbiAgcmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX1JFRElSRUNUX1VSSSxcclxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX1BPU1RfTE9HT1VUX1JFRElSRUNUX1VSSSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NPT0tJRV9TRUNSRVQsXHJcbiAgICBjb29raWVMaWZldGltZTogcHJvY2Vzcy5lbnYuQVVUSDBfQ09PS0lFX0xJRkVUSU1FXHJcbiAgfVxyXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uL2xpYi9hdXRoMCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMz5NZW5zYWxpZGFkZXM8L2gzPlxyXG4gICAgICA8cD5SZXN1bW8gZGFzIE1lbnNhbGlkYWRlczwvcD5cclxuICAgICAgPHA+VG90YWwgbm8gTcOqcyBhdHVhbDoge3Byb3BzLm1lbnNhbGlkYWRlc30gIDwvcD5cclxuICAgICAgPGgzPlZlbmRhczwvaDM+XHJcbiAgICAgIDxwPlJlc3VtbyBkYXMgdmVuZGFzPC9wPlxyXG4gICAgICA8cD5Ub3RhbCBubyBNw6pzIGF0dWFsOiB7cHJvcHMudmVuZGFzfSA8L3A+XHJcbiAgICAgIDxoMz5Db21wcmFzPC9oMz5cclxuICAgICAgPHA+UmVzdW1vIGRhcyBjb21wcmFzPC9wPlxyXG4gICAgICA8cD5Ub3RhbCBubyBNw6pzIGF0dWFsOiB7cHJvcHMuY29tcHJhc30gPC9wPlxyXG4gICAgICA8aDM+RGVzcGVzYXM8L2gzPlxyXG4gICAgICA8cD5SZXN1bW8gZGFzIGRlc3Blc2FzPC9wPlxyXG4gICAgICA8cD5Ub3RhbCBubyBNw6pzIGF0dWFsOiB7cHJvcHMuZGVzcGVzYXN9ICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSlcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZ3JhcGhxbCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgICAgICAnQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpqYkdsbGJuUWlPaUptY205dWRDMWxibVF0UzJVMFozSm5OelJvY2pSa1kySTJJaXdpYVdGMElqb3hOVGszT0RVM05UZzJmUS5NVlFJUXhYa1ZnYmhDRnpZUndJaUF0SlpIYllOMFVxaUpHQm5kTUxLQUdZJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBge1xyXG4gICAgICAgIHNvbWFNZW5zYWxpZGFkZXNCeVBlcmlvZCh1c2VyOlwicGhpbGlwcGUuYmpqQGdtYWlsLmNvbVwiLGlucHV0OntcclxuICAgICAgICAgIGlkYXRlOiBcIjIwMjAtMTEtMDFcIlxyXG4gICAgICAgICAgZmRhdGU6IFwiMjAyMC0xMS0zMFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzb21hRGVzcGVzYXNCeVBlcmlvZCh1c2VyOlwicGhpbGlwcGUuYmpqQGdtYWlsLmNvbVwiLGlucHV0OntcclxuICAgICAgICAgIGlkYXRlOiBcIjIwMjAtMTEtMDFcIlxyXG4gICAgICAgICAgZmRhdGU6IFwiMjAyMC0xMS0zMFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzb21hVmVuZGFzQnlQZXJpb2QodXNlcjpcInBoaWxpcHBlLmJqakBnbWFpbC5jb21cIixpbnB1dDp7XHJcbiAgICAgICAgICBpZGF0ZTogXCIyMDIwLTExLTAxXCJcclxuICAgICAgICAgIGZkYXRlOiBcIjIwMjAtMTEtMzBcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc29tYUNvbXByYXNCeVBlcmlvZCh1c2VyOlwicGhpbGlwcGUuYmpqQGdtYWlsLmNvbVwiLGlucHV0OntcclxuICAgICAgICAgIGlkYXRlOiBcIjIwMjAtMTEtMDFcIlxyXG4gICAgICAgICAgZmRhdGU6IFwiMjAyMC0xMS0zMFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgfWAsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IG1lbnNhbGlkYWRlc0RCID0gYXdhaXQgZGF0YS5qc29uKClcclxuXHJcbiAgICBjb25zdCBtZW5zYWxpZGFkZXMgPSBtZW5zYWxpZGFkZXNEQi5kYXRhLnNvbWFNZW5zYWxpZGFkZXNCeVBlcmlvZFxyXG4gICAgY29uc3QgZGVzcGVzYXMgPSBtZW5zYWxpZGFkZXNEQi5kYXRhLnNvbWFEZXNwZXNhc0J5UGVyaW9kXHJcbiAgICBjb25zdCB2ZW5kYXMgPSBtZW5zYWxpZGFkZXNEQi5kYXRhLnNvbWFWZW5kYXNCeVBlcmlvZFxyXG4gICAgY29uc3QgY29tcHJhcyA9IG1lbnNhbGlkYWRlc0RCLmRhdGEuc29tYUNvbXByYXNCeVBlcmlvZFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyOiBzZXNzaW9uLnVzZXIsXHJcbiAgICAgICAgbWVuc2FsaWRhZGVzLFxyXG4gICAgICAgIGRlc3Blc2FzLFxyXG4gICAgICAgIHZlbmRhcyxcclxuICAgICAgICBjb21wcmFzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXI6ICdVc3XDoXJpbyBuw6NvIGxvZ2FkbycsXHJcbiAgICAgIGRhdGE6ICdEYWRvcyBJbmFjZXNzw612ZWlzJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==