"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[732],{732:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var i=t(313),r=t(439),c=t(554).v9,u=t(417),o=function(){var e,n=(0,i.useState)(void 0),t=(0,r.Z)(n,2),o=t[0],l=t[1],s=c((function(e){return e.isMobileReducer.isMobile}));return(0,i.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/forecast?lat=49.557479&lon=25.599042&cnt=3&units=metric&appid=319db269ba782feb1bbdc1f99ff5346b").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]),(0,u.jsxs)(u.Fragment,{children:["Weather widget ","".concat(s),(0,u.jsx)("div",{children:null===o||void 0===o||null===(e=o.list)||void 0===e?void 0:e[0].dt_txt}),(0,u.jsx)("pre",{children:o&&JSON.stringify(o,null,2)})]})},l=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(o,{})})},s=i.memo(l)}}]);