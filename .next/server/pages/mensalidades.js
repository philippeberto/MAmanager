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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/mensalidades/index.js");
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

/***/ "./pages/mensalidades/index.js":
/*!*************************************!*\
  !*** ./pages/mensalidades/index.js ***!
  \*************************************/
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

var _jsxFileName = "C:\\Users\\phili\\Projetos\\MAmanager\\pages\\mensalidades\\index.js";




const Mensalidades = props => {
  if (!props.errors) {
    if (props.user && props.user !== 'Usuário não logado') {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Mensalidades"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/mensalidades/addMensalidade",
          children: "Nova Mensalidade"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "ok"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "colum3",
          children: props.data.findAllMensalidades.map(mensalidade => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "cardMensalidade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: mensalidade.idAluno
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 21
                }, undefined), "M\xEAs pago: ", mensalidade.monthPaid, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 21
                }, undefined), "Data do Pagamento: ", dayjs__WEBPACK_IMPORTED_MODULE_3___default()(mensalidade.paymentDate).format('DD/MM/YYYY'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 21
                }, undefined), "Valor: ", mensalidade.price, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 19
              }, undefined)
            }, mensalidade.id, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [props.errors.map(erro => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: JSON.stringify(erro.message, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 16
      }, undefined);
    }), ")"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Mensalidades);
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
          findAllMensalidades(user:"${session.user.email}"){
            id
            idAluno
            monthPaid
            paymentDate
            price
          }
        }`
      })
    });
    const mensalidadesDB = await data.json();
    const mensalidades = mensalidadesDB.data;
    let errors = null;

    if (mensalidadesDB.errors) {
      errors = mensalidadesDB.errors;
    }

    return {
      props: {
        errors,
        user: session.user,
        data: mensalidades
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21lbnNhbGlkYWRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF5anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluaXRBdXRoMCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsIkFVVEgwX1NDT1BFIiwiZG9tYWluIiwiQVVUSDBfRE9NQUlOIiwicmVkaXJlY3RVcmkiLCJBVVRIMF9SRURJUkVDVF9VUkkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJBVVRIMF9QT1NUX0xPR09VVF9SRURJUkVDVF9VUkkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQVVUSDBfQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwiQVVUSDBfQ09PS0lFX0xJRkVUSU1FIiwiTWVuc2FsaWRhZGVzIiwicHJvcHMiLCJlcnJvcnMiLCJ1c2VyIiwiZGF0YSIsImZpbmRBbGxNZW5zYWxpZGFkZXMiLCJtYXAiLCJtZW5zYWxpZGFkZSIsImlkQWx1bm8iLCJtb250aFBhaWQiLCJkYXlqcyIsInBheW1lbnREYXRlIiwiZm9ybWF0IiwicHJpY2UiLCJpZCIsImVycm8iLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsImF1dGgwIiwiZ2V0U2Vzc2lvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwicXVlcnkiLCJlbWFpbCIsIm1lbnNhbGlkYWRlc0RCIiwianNvbiIsIm1lbnNhbGlkYWRlcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSxvSUFBUyxDQUFDO0FBQ3ZCQyxVQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQURDO0FBRXZCQyxjQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxtQkFGSDtBQUd2QkMsT0FBSyxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssV0FISTtBQUl2QkMsUUFBTSxFQUFFUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sWUFKRztBQUt2QkMsYUFBVyxFQUFFVCxPQUFPLENBQUNDLEdBQVIsQ0FBWVMsa0JBTEY7QUFNdkJDLHVCQUFxQixFQUFFWCxPQUFP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LEVBQUU7QUFDUCx3QkFBZ0Isa0JBRFQ7QUFFUEMsY0FBTSxFQUFFLGtCQUZEO0FBR1BDLHFCQUFhLEVBQ1g7QUFKSyxPQUYrQztBQVF4REMsVUFBSSxFQUFFYixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQmEsYUFBSyxFQUFHO0FBQ2hCLHNDQUFzQ25DLE9BQU8sQ0FBQ1EsSUFBUixDQUFhNEIsS0FBTTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVQyQixPQUFmO0FBUmtELEtBQWxDLENBQXhCO0FBb0JBLFVBQU1DLGNBQWMsR0FBRyxNQUFNNUIsSUFBSSxDQUFDNkIsSUFBTCxFQUE3QjtBQUNBLFVBQU1DLFlBQVksR0FBR0YsY0FBYyxDQUFDNUIsSUFBcEM7QUFDQSxRQUFJRixNQUFNLEdBQUcsSUFBYjs7QUFDQSxRQUFJOEIsY0FBYyxDQUFDOUIsTUFBbkIsRUFBMkI7QUFDekJBLFlBQU0sR0FBRzhCLGNBQWMsQ0FBQzlCLE1BQXhCO0FBQ0Q7O0FBQ0QsV0FBTztBQUNMRCxXQUFLLEVBQUU7QUFDTEMsY0FESztBQUVMQyxZQUFJLEVBQUVSLE9BQU8sQ0FBQ1EsSUFGVDtBQUdMQyxZQUFJLEVBQUU4QjtBQUhEO0FBREYsS0FBUDtBQU9EOztBQUNELFNBQU87QUFDTGpDLFNBQUssRUFBRTtBQUNMRSxVQUFJLEVBQUUsb0JBREQ7QUFFTEMsVUFBSSxFQUFFO0FBRkQ7QUFERixHQUFQO0FBTUQsQzs7Ozs7Ozs7Ozs7QUMvRkQsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbWVuc2FsaWRhZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tZW5zYWxpZGFkZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKHtcclxuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxyXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcclxuICBzY29wZTogcHJvY2Vzcy5lbnYuQVVUSDBfU0NPUEUsXHJcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXHJcbiAgcmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX1JFRElSRUNUX1VSSSxcclxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX1BPU1RfTE9HT1VUX1JFRElSRUNUX1VSSSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NPT0tJRV9TRUNSRVQsXHJcbiAgICBjb29raWVMaWZldGltZTogcHJvY2Vzcy5lbnYuQVVUSDBfQ09PS0lFX0xJRkVUSU1FXHJcbiAgfVxyXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uLy4uL2xpYi9hdXRoMCdcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG5cclxuY29uc3QgTWVuc2FsaWRhZGVzID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKCFwcm9wcy5lcnJvcnMpIHtcclxuICAgIGlmIChwcm9wcy51c2VyICYmIHByb3BzLnVzZXIgIT09ICdVc3XDoXJpbyBuw6NvIGxvZ2FkbycpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPk1lbnNhbGlkYWRlczwvaDI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL21lbnNhbGlkYWRlcy9hZGRNZW5zYWxpZGFkZVwiPk5vdmEgTWVuc2FsaWRhZGU8L2E+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+b2s8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW0zXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLmZpbmRBbGxNZW5zYWxpZGFkZXMubWFwKChtZW5zYWxpZGFkZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVuc2FsaWRhZGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRNZW5zYWxpZGFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57bWVuc2FsaWRhZGUuaWRBbHVub308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIE3DqnMgcGFnbzoge21lbnNhbGlkYWRlLm1vbnRoUGFpZH1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBEYXRhIGRvIFBhZ2FtZW50bzoge2RheWpzKG1lbnNhbGlkYWRlLnBheW1lbnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBWYWxvcjoge21lbnNhbGlkYWRlLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD57cHJvcHMudXNlcn08L3A+XHJcbiAgICAgICAgPHA+e3Byb3BzLmRhdGF9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwcm9wcy5lcnJvcnMubWFwKGVycm8gPT4ge1xyXG4gICAgICAgIHJldHVybiA8cD57SlNPTi5zdHJpbmdpZnkoZXJyby5tZXNzYWdlLCBudWxsLCAyKX08L3A+XHJcbiAgICAgIH0pfVxyXG4gICAgKVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW5zYWxpZGFkZXNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKVxyXG4gIGlmIChzZXNzaW9uKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ncmFwaHFsJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjpcclxuICAgICAgICAgICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR2xsYm5RaU9pSm1jbTl1ZEMxbGJtUXRTMlUwWjNKbk56Um9jalJrWTJJMklpd2lhV0YwSWpveE5UazNPRFUzTlRnMmZRLk1WUUlReFhrVmdiaENGellSd0lpQXRKWkhiWU4wVXFpSkdCbmRNTEtBR1knLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgcXVlcnk6IGB7XHJcbiAgICAgICAgICBmaW5kQWxsTWVuc2FsaWRhZGVzKHVzZXI6XCIke3Nlc3Npb24udXNlci5lbWFpbH1cIil7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGlkQWx1bm9cclxuICAgICAgICAgICAgbW9udGhQYWlkXHJcbiAgICAgICAgICAgIHBheW1lbnREYXRlXHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfWAsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IG1lbnNhbGlkYWRlc0RCID0gYXdhaXQgZGF0YS5qc29uKClcclxuICAgIGNvbnN0IG1lbnNhbGlkYWRlcyA9IG1lbnNhbGlkYWRlc0RCLmRhdGFcclxuICAgIGxldCBlcnJvcnMgPSBudWxsXHJcbiAgICBpZiAobWVuc2FsaWRhZGVzREIuZXJyb3JzKSB7XHJcbiAgICAgIGVycm9ycyA9IG1lbnNhbGlkYWRlc0RCLmVycm9yc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLFxyXG4gICAgICAgIGRhdGE6IG1lbnNhbGlkYWRlcyxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXI6ICdVc3XDoXJpbyBuw6NvIGxvZ2FkbycsXHJcbiAgICAgIGRhdGE6ICdEYWRvcyBpbmFjZXNzw612ZWlzJyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=