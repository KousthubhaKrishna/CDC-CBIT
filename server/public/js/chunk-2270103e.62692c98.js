(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2270103e"],{"0fd9":function(t,n,e){"use strict";e("99af"),e("4160"),e("caad"),e("13d5"),e("4ec9"),e("b64b"),e("d3b7"),e("ac1f"),e("2532"),e("3ca3"),e("5319"),e("159b"),e("ddb0");var a=e("ade3"),r=e("5530"),c=(e("4b85"),e("2b0e")),o=e("d9f7"),i=e("80d2"),u=["sm","md","lg","xl"],l=["start","end","center"];function s(t,n){return u.reduce((function(e,a){return e[t+Object(i["G"])(a)]=n(),e}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=s("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},b=s("justify",(function(){return{type:String,default:null,validator:p}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=s("alignContent",(function(){return{type:String,default:null,validator:g}})),m={align:Object.keys(f),justify:Object.keys(b),alignContent:Object.keys(v)},y={align:"align",justify:"justify",alignContent:"align-content"};function h(t,n,e){var a=y[t];if(null!=e){if(n){var r=n.replace(t,"");a+="-".concat(r)}return a+="-".concat(e),a.toLowerCase()}}var j=new Map;n["a"]=c["default"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},b),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(t,n){var e=n.props,r=n.data,c=n.children,i="";for(var u in e)i+=String(e[u]);var l=j.get(i);return l||function(){var t,n;for(n in l=[],m)m[n].forEach((function(t){var a=e[t],r=h(n,t,a);r&&l.push(r)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(a["a"])(t,"align-".concat(e.align),e.align),Object(a["a"])(t,"justify-".concat(e.justify),e.justify),Object(a["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),j.set(i,l)}(),t(e.tag,Object(o["a"])(r,{staticClass:"row",class:l}),c)}})},"4ec9":function(t,n,e){"use strict";var a=e("6d61"),r=e("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"62ad":function(t,n,e){"use strict";e("4160"),e("caad"),e("13d5"),e("45fc"),e("4ec9"),e("a9e3"),e("b64b"),e("d3b7"),e("ac1f"),e("3ca3"),e("5319"),e("2ca0"),e("159b"),e("ddb0");var a=e("ade3"),r=e("5530"),c=(e("4b85"),e("2b0e")),o=e("d9f7"),i=e("80d2"),u=["sm","md","lg","xl"],l=function(){return u.reduce((function(t,n){return t[n]={type:[Boolean,String,Number],default:!1},t}),{})}(),s=function(){return u.reduce((function(t,n){return t["offset"+Object(i["G"])(n)]={type:[String,Number],default:null},t}),{})}(),d=function(){return u.reduce((function(t,n){return t["order"+Object(i["G"])(n)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(s),order:Object.keys(d)};function p(t,n,e){var a=t;if(null!=e&&!1!==e){if(n){var r=n.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==e&&!0!==e?(a+="-".concat(e),a.toLowerCase()):a.toLowerCase()}}var b=new Map;n["a"]=c["default"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},s),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,n){var e=n.props,r=n.data,c=n.children,i=(n.parent,"");for(var u in e)i+=String(e[u]);var l=b.get(i);return l||function(){var t,n;for(n in l=[],f)f[n].forEach((function(t){var a=e[t],r=p(n,t,a);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!e.cols},Object(a["a"])(t,"col-".concat(e.cols),e.cols),Object(a["a"])(t,"offset-".concat(e.offset),e.offset),Object(a["a"])(t,"order-".concat(e.order),e.order),Object(a["a"])(t,"align-self-".concat(e.alignSelf),e.alignSelf),t)),b.set(i,l)}(),t(e.tag,Object(o["a"])(r,{class:l}),c)}})},"81f6":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var a=e("2b0e"),r=new a["default"]},"92e0":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"pa-10",attrs:{fluid:""}},[e("v-row",t._l(t.companies,(function(n,a){return e("v-col",{key:a,attrs:{cols:"12",sm:"3"}},[e("v-card",{attrs:{outlined:""},on:{click:function(e){return t.openPlacements(n._id)}}},[e("v-img",{staticClass:"white--text align-end",attrs:{src:n.photo_url,gradient:"to bottom, rgba(0,0,0,.05), rgba(0,0,0,.05)",height:"150px",alt:"company.company_name"}}),e("v-card-title",{domProps:{textContent:t._s(n.company_name)}}),t.$PERMISSIONS.MED.has(t.user.role)?e("v-card-actions",[e("EditCompany",{attrs:{company:n}}),e("v-btn",{attrs:{color:"error",depressed:"",dark:""},on:{click:function(e){return t.deleteCompany(n._id)}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-delete ")]),t._v(" Delete ")],1)],1):t._e()],1)],1)})),1)],1)},r=[],c=(e("d3b7"),e("ac1f"),e("1276"),e("bc3a")),o=e.n(c),i=e("81f6"),u={name:"DisplayCompanies",data:function(){return{companies:[],user:""}},methods:{openPlacements:function(t){this.$router.push({name:"CompanyDetails",params:{id:t}})},getCompanies:function(){var t=this;o.a.get("/api/company").then((function(n){t.companies=n.data,console.log(t.companies)})).catch((function(t){console.log(t)}))},deleteCompany:function(t){var n=this;o.a.delete("/api/company/"+t).then((function(t){console.log(t.data),n.getCompanies()})).catch((function(t){console.log(t)}))}},created:function(){var t=this,n=window.$cookies.get("jwt"),e=JSON.parse(atob(n.split(".")[1]));this.user=e,this.getCompanies(),i["a"].$on("companies",(function(n){t.companies.push(n)}))},components:{EditCompany:function(){return Promise.all([e.e("chunk-52b9abc6"),e.e("chunk-3ab947c8"),e.e("chunk-2d0cf505")]).then(e.bind(null,"62d7"))}}},l=u,s=e("2877"),d=e("6544"),f=e.n(d),p=e("8336"),b=e("b0af"),g=e("99d9"),v=e("62ad"),m=e("a523"),y=e("132d"),h=e("adda"),j=e("0fd9"),O=Object(s["a"])(l,a,r,!1,null,null,null);n["default"]=O.exports;f()(O,{VBtn:p["a"],VCard:b["a"],VCardActions:g["a"],VCardTitle:g["d"],VCol:v["a"],VContainer:m["a"],VIcon:y["a"],VImg:h["a"],VRow:j["a"]})},"99d9":function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return u}));var a=e("b0af"),r=e("80d2"),c=Object(r["i"])("v-card__actions"),o=Object(r["i"])("v-card__subtitle"),i=Object(r["i"])("v-card__text"),u=Object(r["i"])("v-card__title");a["a"]}}]);
//# sourceMappingURL=chunk-2270103e.62692c98.js.map