(function(e){function n(n){for(var o,i,u=n[0],c=n[1],s=n[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fc9ec4c9"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,t[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var f=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("85ec"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},a=[],i=(t("034f"),t("2877")),u={},c=Object(i["a"])(u,r,a,!1,null,null,null),s=c.exports,l=t("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var f=t("8c4f"),p=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),t("h2",[e._v(e._s(e.info))])])},m=[],h=t("bc3a"),g=t.n(h),b={name:"HelloWorld",props:{msg:String},data:function(){return{info:null}},mounted:function(){var e=this;g.a.get("api/").then((function(n){return e.info=n.data}))}},w=b,y=(t("c124"),Object(i["a"])(w,v,m,!1,null,"41fad04c",null)),_=y.exports,j={name:"Home",components:{HelloWorld:_}},O=j,k=Object(i["a"])(O,p,d,!1,null,null,null),x=k.exports;o["a"].use(f["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],S=new f["a"]({mode:"history",base:"/",routes:P}),A=S,E=t("2f62");o["a"].use(E["a"]);var H=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:A,store:H,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,n,t){},"87a7":function(e,n,t){},c124:function(e,n,t){"use strict";var o=t("87a7"),r=t.n(o);r.a},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2b818aea.js.map