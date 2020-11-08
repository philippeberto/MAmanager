webpackHotUpdate_N_E("pages/despesas/addDespesa",{

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

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
            _context.next = 2;
            return fetch('http://localhost:3001/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJmcm9udC1lbmQtS2U0Z3JnNzRocjRkY2I2IiwiaWF0IjoxNTk3ODU3NTg2fQ.MVQIQxXkVgbhCFzYRwIiAtJZHbYN0UqiJGBndMLKAGY'
              },
              body: JSON.stringify({
                query: "mutation{\n        createDespesa(user:\"".concat(email, "\", input: {\n          description: \"").concat(despesa.description, "\"\n          price: ").concat(despesa.price, ", \n          dueDate: \"").concat(despesa.dueDate, "\", \n          referenceMonth: ").concat(parseInt(despesa.referenceMonth), ", \n          paymentDate: \"").concat(despesa.paymentDate, "\",\n          createdAt: ").concat(dayjs__WEBPACK_IMPORTED_MODULE_4___default()('YYYY-MM-DD').now(), "\n        }){\n          id\n          description\n        }\n      }")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5qcyJdLCJuYW1lcyI6WyJDcmlhckRlc3Blc2EiLCJwcm9wcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZHVlRGF0ZSIsInJlZmVyZW5jZU1vbnRoIiwicGF5bWVudERhdGUiLCJwYWlkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWF4Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2FsdmFyRGVzcGVzYSIsInVzZXIiLCJlbWFpbCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsImRlc3Blc2EiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInBhcnNlSW50IiwiZGF5anMiLCJub3ciLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLEtBQW9ELG9CQUFvQixTQUEyRCxDQUFDLGlCQUFpQixhQUFhLG9IQUFvSCxFQUFFLFVBQVUsSUFBSSxXQUFXLElBQUksWUFBWSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksOEJBQThCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxVQUFVLG1NQUFtTSxtQkFBbUIsZ0JBQWdCLHlEQUF5RCxJQUFJLGtCQUFrQiw2REFBNkQsK0NBQStDLG1CQUFtQixtQ0FBbUMsOEdBQThHLG1DQUFtQyxlQUFlLHlDQUF5QyxlQUFlLE9BQU8seUNBQXlDLGtEQUFrRCxlQUFlLG1C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Q0FHUXNCLE9BQU8sQ0FBQ3JCLEtBSGhCLHNDQUlXcUIsT0FBTyxDQUFDcEIsT0FKbkIsNkNBS2lCOEIsUUFBUSxDQUFDVixPQUFPLENBQUNuQixjQUFULENBTHpCLDBDQU1lbUIsT0FBTyxDQUFDbEIsV0FOdkIsdUNBT1k2Qiw0Q0FBSyxDQUFDLFlBQUQsQ0FBTCxDQUFvQkMsR0FBcEIsRUFQWjtBQURjLGVBQWY7QUFSa0QsYUFBbEMsQ0FESjs7QUFBQTtBQUNkQyxnQkFEYztBQXlCcEJ2QixtQkFBTyxDQUFDQyxHQUFSLENBQVlzQixJQUFaOztBQXpCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYnJCLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGVzcGVzYXMvYWRkRGVzcGVzYS5kYTY3OWMzZTAwOGZhNmEyM2UxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5kYXlqcz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1pbGxpc2Vjb25kXCIsZT1cInNlY29uZFwiLG49XCJtaW51dGVcIixyPVwiaG91clwiLGk9XCJkYXlcIixzPVwid2Vla1wiLHU9XCJtb250aFwiLGE9XCJxdWFydGVyXCIsbz1cInllYXJcIixmPVwiZGF0ZVwiLGg9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbXjAtOV0qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPy4/KFxcZCspPyQvLGM9L1xcWyhbXlxcXV0rKV18WXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLGQ9e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sJD1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGw9e3M6JCx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrJChyLDIsXCIwXCIpK1wiOlwiKyQoaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocix1KSxzPW4taTwwLGE9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLHUpO3JldHVybisoLShyKyhuLWkpLyhzP2ktYTphLWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbihoKXtyZXR1cm57TTp1LHk6byx3OnMsZDppLEQ6ZixoOnIsbTpuLHM6ZSxtczp0LFE6YX1baF18fFN0cmluZyhofHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LHk9XCJlblwiLE09e307TVt5XT1kO3ZhciBtPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgU30sRD1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIHk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpTVt0XSYmKHI9dCksZSYmKE1bdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO01baV09dCxyPWl9cmV0dXJuIW4mJnImJih5PXIpLHJ8fCFuJiZ5fSx2PWZ1bmN0aW9uKHQsZSl7aWYobSh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IFMobil9LGc9bDtnLmw9RCxnLmk9bSxnLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdih0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIFM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkKHQpe3RoaXMuJEw9RCh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciAkPWQucHJvdG90eXBlO3JldHVybiAkLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoZy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGgpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sJC5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sJC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gZ30sJC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sJC5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj12KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LCQuaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB2KHQpPHRoaXMuc3RhcnRPZihlKX0sJC5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHYodCl9LCQuJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBnLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSwkLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSwkLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LCQuc3RhcnRPZj1mdW5jdGlvbih0LGEpe3ZhciBoPXRoaXMsYz0hIWcudShhKXx8YSxkPWcucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIG49Zy53KGguJHU/RGF0ZS5VVEMoaC4keSxlLHQpOm5ldyBEYXRlKGguJHksZSx0KSxoKTtyZXR1cm4gYz9uOm4uZW5kT2YoaSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZy53KGgudG9EYXRlKClbdF0uYXBwbHkoaC50b0RhdGUoXCJzXCIpLChjP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLGgpfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxEPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZCl7Y2FzZSBvOnJldHVybiBjPyQoMSwwKTokKDMxLDExKTtjYXNlIHU6cmV0dXJuIGM/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugczp2YXIgdj10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsUz0oeTx2P3krNzp5KS12O3JldHVybiAkKGM/bS1TOm0rKDYtUyksTSk7Y2FzZSBpOmNhc2UgZjpyZXR1cm4gbChEK1wiSG91cnNcIiwwKTtjYXNlIHI6cmV0dXJuIGwoRCtcIk1pbnV0ZXNcIiwxKTtjYXNlIG46cmV0dXJuIGwoRCtcIlNlY29uZHNcIiwyKTtjYXNlIGU6cmV0dXJuIGwoRCtcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LCQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sJC4kc2V0PWZ1bmN0aW9uKHMsYSl7dmFyIGgsYz1nLnAocyksZD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0oaD17fSxoW2ldPWQrXCJEYXRlXCIsaFtmXT1kK1wiRGF0ZVwiLGhbdV09ZCtcIk1vbnRoXCIsaFtvXT1kK1wiRnVsbFllYXJcIixoW3JdPWQrXCJIb3Vyc1wiLGhbbl09ZCtcIk1pbnV0ZXNcIixoW2VdPWQrXCJTZWNvbmRzXCIsaFt0XT1kK1wiTWlsbGlzZWNvbmRzXCIsaClbY10sbD1jPT09aT90aGlzLiREKyhhLXRoaXMuJFcpOmE7aWYoYz09PXV8fGM9PT1vKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGYsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGYsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LCQuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LCQuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2cucCh0KV0oKX0sJC5hZGQ9ZnVuY3Rpb24odCxhKXt2YXIgZixoPXRoaXM7dD1OdW1iZXIodCk7dmFyIGM9Zy5wKGEpLGQ9ZnVuY3Rpb24oZSl7dmFyIG49dihoKTtyZXR1cm4gZy53KG4uZGF0ZShuLmRhdGUoKStNYXRoLnJvdW5kKGUqdCkpLGgpfTtpZihjPT09dSlyZXR1cm4gdGhpcy5zZXQodSx0aGlzLiRNK3QpO2lmKGM9PT1vKXJldHVybiB0aGlzLnNldChvLHRoaXMuJHkrdCk7aWYoYz09PWkpcmV0dXJuIGQoMSk7aWYoYz09PXMpcmV0dXJuIGQoNyk7dmFyICQ9KGY9e30sZltuXT02ZTQsZltyXT0zNmU1LGZbZV09MWUzLGYpW2NdfHwxLGw9dGhpcy4kZC5nZXRUaW1lKCkrdCokO3JldHVybiBnLncobCx0aGlzKX0sJC5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSwkLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm5cIkludmFsaWQgRGF0ZVwiO3ZhciBuPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixyPWcueih0aGlzKSxpPXRoaXMuJGxvY2FsZSgpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89aS53ZWVrZGF5cyxmPWkubW9udGhzLGg9ZnVuY3Rpb24odCxyLGkscyl7cmV0dXJuIHQmJih0W3JdfHx0KGUsbikpfHxpW3JdLnN1YnN0cigwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBnLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9aS5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Zy5zKGErMSwyLFwiMFwiKSxNTU06aChpLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Zy5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChpLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChpLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpnLnMocywyLFwiMFwiKSxoOmQoMSksaGg6ZCgyKSxhOiQocyx1LCEwKSxBOiQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpnLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpnLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Zy5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6cn07cmV0dXJuIG4ucmVwbGFjZShjLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fGxbdF18fHIucmVwbGFjZShcIjpcIixcIlwiKX0pfSwkLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSwkLmRpZmY9ZnVuY3Rpb24odCxmLGgpe3ZhciBjLGQ9Zy5wKGYpLCQ9dih0KSxsPTZlNCooJC51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSx5PXRoaXMtJCxNPWcubSh0aGlzLCQpO3JldHVybiBNPShjPXt9LGNbb109TS8xMixjW3VdPU0sY1thXT1NLzMsY1tzXT0oeS1sKS82MDQ4ZTUsY1tpXT0oeS1sKS84NjRlNSxjW3JdPXkvMzZlNSxjW25dPXkvNmU0LGNbZV09eS8xZTMsYylbZF18fHksaD9NOmcuYShNKX0sJC5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKHUpLiREfSwkLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gTVt0aGlzLiRMXX0sJC5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1EKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LCQuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gZy53KHRoaXMuJGQsdGhpcyl9LCQudG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sJC50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LCQudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSwkLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sZH0oKSxwPVMucHJvdG90eXBlO3JldHVybiB2LnByb3RvdHlwZT1wLFtbXCIkbXNcIix0XSxbXCIkc1wiLGVdLFtcIiRtXCIsbl0sW1wiJEhcIixyXSxbXCIkV1wiLGldLFtcIiRNXCIsdV0sW1wiJHlcIixvXSxbXCIkRFwiLGZdXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3BbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pLHYuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQoZSxTLHYpLHZ9LHYubG9jYWxlPUQsdi5pc0RheWpzPW0sdi51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB2KDFlMyp0KX0sdi5lbj1NW3ldLHYuTHM9TSx2LnA9e30sdn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vbGliL2F1dGgwJ1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuXHJcbmNvbnN0IENyaWFyRGVzcGVzYSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgZXJyb3JzIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgZHVlRGF0ZTogJycsXHJcbiAgICAgIHJlZmVyZW5jZU1vbnRoOiAnJyxcclxuICAgICAgcGF5bWVudERhdGU6ICcnLFxyXG4gICAgICBwYWlkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgZGVzY3JpcHRpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnT2JyaWdhdMOzcmlvJyksXHJcbiAgICAgIHByaWNlOiBZdXAubnVtYmVyKCkucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBkdWVEYXRlOiBZdXAuZGF0ZSgpLnJlcXVpcmVkKCdPYnJpZ2F0w7NyaW8nKSxcclxuICAgICAgcmVmZXJlbmNlTW9udGg6IFl1cC5zdHJpbmcoKS5tYXgoXHJcbiAgICAgICAgMTQsXHJcbiAgICAgICAgJ08gbcOqcyBkZXZlIHRlciBubyBtw6F4aW1vIDE0IGNhcmFjdGVyZXMnLFxyXG4gICAgICApLFxyXG4gICAgICBwYXltZW50RGF0ZTogWXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1heCgzMCwgJ0xvY2FsaWRhZGUgZGV2ZSB0ZXIgbm8gbcOheGltbyAzMCBjYXJhY3RlcmVzJylcclxuICAgICAgICAucmVxdWlyZWQoJ09icmlnYXTDs3JpbycpLFxyXG4gICAgICBwYWlkOiBZdXAuYm9vbGVhbigpLFxyXG4gICAgfSksXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMuZHVlRGF0ZSlcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzLnBheW1lbnREYXRlKVxyXG4gICAgICBzYWx2YXJEZXNwZXNhKHZhbHVlcywgcHJvcHMudXNlci5lbWFpbClcclxuICAgICAgYWxlcnQoYERlc3Blc2EgJHt2YWx1ZXMuZGVzY3JpcHRpb259IHNhbHZhIGNvbSBzdWNlc3NvIWApXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRldWRvXCI+XHJcbiAgICAgIDxoMj5Ob3ZhIERlc3Blc2E8L2gyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyacOnw6NvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RvdWNoZWQuZGVzY3JpcHRpb24gJiYgZXJyb3JzLmRlc2NyaXB0aW9uID8gKFxyXG4gICAgICAgICAgICA8dGV4dD57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvdGV4dD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+VmFsb3I6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5wcmljZSAmJiBlcnJvcnMucHJpY2UgPyA8dGV4dD57ZXJyb3JzLnByaWNlfTwvdGV4dD4gOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImR1ZURhdGVcIj5EYXRhIGRlIFZlbmNpbWVudG86IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kdWVEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZHVlRGF0ZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkdWVEYXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5kdWVEYXRlICYmIGVycm9ycy5kdWVEYXRlID8gKFxyXG4gICAgICAgICAgICA8dGV4dD57ZXJyb3JzLmR1ZURhdGV9PC90ZXh0PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVmZXJlbmNlTW9udGhcIj5Nw6pzIGEgc2VyIHBhZ286IDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5yZWZlcmVuY2VNb250aH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInJlZmVyZW5jZU1vbnRoXCJcclxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZW5jZU1vbnRoXCJcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltZW50RGF0ZVwiPkRpYSBkbyBQYWdhbWVudG86IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGF5bWVudERhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXltZW50RGF0ZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnREYXRlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RvdWNoZWQucGF5bWVudERhdGUgJiYgZXJyb3JzLnBheW1lbnREYXRlID8gKFxyXG4gICAgICAgICAgICAgIDx0ZXh0PntlcnJvcnMucGF5bWVudERhdGV9PC90ZXh0PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNhZGFzdHJhclwiPjwvaW5wdXQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JpYXJEZXNwZXNhXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSlcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyOiBzZXNzaW9uLnVzZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB1c2VyOiAnVXN1w6FyaW8gbsOjbyBsb2dhZG8nLFxyXG4gICAgICBkYXRhOiAnRGFkb3MgaW5hY2Vzc8OtdmVpcycsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2FsdmFyRGVzcGVzYSA9IGFzeW5jIChkZXNwZXNhLCBlbWFpbCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2dyYXBocWwnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgICAgJ0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKamJHbGxiblFpT2lKbWNtOXVkQzFsYm1RdFMyVTBaM0puTnpSb2NqUmtZMkkySWl3aWFXRjBJam94TlRrM09EVTNOVGcyZlEuTVZRSVF4WGtWZ2JoQ0Z6WVJ3SWlBdEpaSGJZTjBVcWlKR0JuZE1MS0FHWScsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBxdWVyeTogYG11dGF0aW9ue1xyXG4gICAgICAgIGNyZWF0ZURlc3Blc2EodXNlcjpcIiR7ZW1haWx9XCIsIGlucHV0OiB7XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCIke2Rlc3Blc2EuZGVzY3JpcHRpb259XCJcclxuICAgICAgICAgIHByaWNlOiAke2Rlc3Blc2EucHJpY2V9LCBcclxuICAgICAgICAgIGR1ZURhdGU6IFwiJHtkZXNwZXNhLmR1ZURhdGV9XCIsIFxyXG4gICAgICAgICAgcmVmZXJlbmNlTW9udGg6ICR7cGFyc2VJbnQoZGVzcGVzYS5yZWZlcmVuY2VNb250aCl9LCBcclxuICAgICAgICAgIHBheW1lbnREYXRlOiBcIiR7ZGVzcGVzYS5wYXltZW50RGF0ZX1cIixcclxuICAgICAgICAgIGNyZWF0ZWRBdDogJHtkYXlqcygnWVlZWS1NTS1ERCcpLm5vdygpfVxyXG4gICAgICAgIH0pe1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9YCxcclxuICAgIH0pLFxyXG4gIH0pXHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9