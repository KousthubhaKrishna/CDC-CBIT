(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2cbfa8c"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),o=(n("4b85"),n("2b0e")),c=n("d9f7"),i=n("80d2"),s=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return s.reduce((function(n,a){return n[t+Object(i["G"])(a)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),b=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},h=u("alignContent",(function(){return{type:String,default:null,validator:b}})),m={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(h)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=g[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var j=new Map;e["a"]=o["default"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:b}},h),render:function(t,e){var n=e.props,r=e.data,o=e.children,i="";for(var s in n)i+=String(n[s]);var l=j.get(i);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var a=n[t],r=y(e,t,a);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),j.set(i,l)}(),t(n.tag,Object(c["a"])(r,{staticClass:"row",class:l}),o)}})},"16b7":function(t,e,n){"use strict";n("a9e3");var a=n("2b0e");e["a"]=a["default"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var a=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},a)}}})},2432:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-card",[n("v-img",{attrs:{"lazy-src":"https://us.123rf.com/450wm/deniaz/deniaz2002/deniaz200200068/139842414-photography-grey-card-for-white-balance-isolated-on-a-white-background-with-copy-space-.jpg?ver=6","aspect-ratio":1.6,"max-height":"280",width:"100%",src:t.company.photo_url}}),n("v-card-title",{staticClass:"ma-5 pt-10",staticStyle:{"font-size":"3rem",font:"roboto","font-weight":"300"}},[t._v(" "+t._s(t.company.company_name)+" ")]),n("v-card-text",{staticClass:"ma-5 pa-4 font-weight-medium ",staticStyle:{"font-size":"0.9rem","white-space":"pre-line"}},[t._v(" "+t._s(t.company.description)+" ")])],1),n("v-divider"),n("v-sheet",{staticClass:"pl-7 py-6 pr-5 "},[n("v-row",[n("v-col",[n("p",{staticStyle:{"font-size":"1.5rem"}},[t._v("Placements")])]),n("v-col",[t.$PERMISSIONS.MED.has(t.user.role)?n("AddPlacementDetails"):t._e()],1)],1),n("v-divider"),0==t.placements.length?n("v-row",{staticClass:"pa-6",attrs:{justify:"center"}},[n("p",[t._v("No Placements yet")])]):t._e(),n("v-sheet",{staticClass:"mt-8 mx-6",staticStyle:{width:"100%"}},[n("v-row",t._l(t.placements,(function(e){return n("v-col",{key:e._id,attrs:{cols:"12",sm:"4"}},[n("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.hover;return[n("v-card",{class:{"on-hover":r},attrs:{outlined:"",elevation:r?3:1,color:"#ECF0F1"},on:{click:function(n){return t.openPlacement(e._id)}}},[n("v-card-text",{staticClass:"font-weight-large text--primary"},[t._v(" "+t._s(e.job_type)+" "),n("span",{attrs:{"text-align":"right"}},[t._v(t._s(e.placement_batch))])])],1)]}}],null,!0)})],1)})),1)],1)],1)],1)},r=[],o=(n("d3b7"),n("ac1f"),n("1276"),n("bc3a")),c=n.n(o),i={name:"ListOfPlacements",data:function(){return{placements:[],company:[]}},methods:{openPlacement:function(t){this.$router.push({name:"Placement",params:{id:t}})}},created:function(){var t=this,e=window.$cookies.get("jwt"),n=JSON.parse(atob(e.split(".")[1]));this.user=n,console.log(this.user),c.a.get("/api/company/"+this.$route.params.id).then((function(e){t.company=e.data})).catch((function(t){console.log(t)})),c.a.get("/api/placements/placements/"+this.$route.params.id).then((function(e){t.placements=e.data})).catch((function(t){console.log(t)}))},components:{AddPlacementDetails:function(){return Promise.all([n.e("chunk-480d34ec"),n.e("chunk-ade65702"),n.e("chunk-04f9388c"),n.e("chunk-15bf0ff2")]).then(n.bind(null,"623f"))}}},s=i,l=n("2877"),u=n("6544"),d=n.n(u),f=n("b0af"),p=n("99d9"),v=n("62ad"),b=n("a523"),h=n("ce7e"),m=n("ce87"),g=n("adda"),y=n("0fd9"),j=n("8dd9"),S=Object(l["a"])(s,a,r,!1,null,null,null);e["default"]=S.exports;d()(S,{VCard:f["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:v["a"],VContainer:b["a"],VDivider:h["a"],VHover:m["a"],VImg:g["a"],VRow:y["a"],VSheet:j["a"]})},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),r=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),o=(n("4b85"),n("2b0e")),c=n("d9f7"),i=n("80d2"),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return s.reduce((function(t,e){return t["offset"+Object(i["G"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return s.reduce((function(t,e){return t["order"+Object(i["G"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function p(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var v=new Map;e["a"]=o["default"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,o=e.children,i=(e.parent,"");for(var s in n)i+=String(n[s]);var l=v.get(i);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var a=n[t],r=p(e,t,a);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(i,l)}(),t(n.tag,Object(c["a"])(r,{class:l}),o)}})},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));var a=n("b0af"),r=n("80d2"),o=Object(r["i"])("v-card__actions"),c=Object(r["i"])("v-card__subtitle"),i=Object(r["i"])("v-card__text"),s=Object(r["i"])("v-card__title");a["a"]},a523:function(t,e,n){"use strict";n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85"),n("a15b"),n("498a");var a=n("2b0e");function r(t){return a["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,r=n.data,o=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var c=r.attrs;if(c){r.attrs={};var i=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));i.length&&(r.staticClass+=" ".concat(i.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,o)}})}var o=n("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,r=e.data,c=e.children,i=r.attrs;return i&&(r.attrs={},n=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,Object(o["a"])(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),c)}})},ce87:function(t,e,n){"use strict";var a=n("16b7"),r=n("f2e7"),o=n("58df"),c=n("d9bd");e["a"]=Object(o["a"])(a["a"],r["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c["c"])("v-hover should only contain a single element",this),t)):(Object(c["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})}}]);
//# sourceMappingURL=chunk-a2cbfa8c.9a837d85.js.map