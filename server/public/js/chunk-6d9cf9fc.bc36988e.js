(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d9cf9fc"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var i=n("ade3"),s=n("5530"),r=(n("4b85"),n("2b0e")),a=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,i){return n[t+Object(o["G"])(i)]=e(),n}),{})}var h=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(g)},w={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){var i=w[t];if(null!=n){if(e){var s=e.replace(t,"");i+="-".concat(s)}return i+="-".concat(n),i.toLowerCase()}}var y=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,s=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var l=y.get(o);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var i=n[t],s=b(e,t,i);s&&l.push(s)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(o,l)}(),t(n.tag,Object(a["a"])(s,{staticClass:"row",class:l}),r)}})},"13b3":function(t,e,n){},"3e8c":function(t,e,n){t.exports=n.p+"img/i3.f36c9202.jpg"},"40eb":function(t,e,n){t.exports=n.p+"img/i5.26948681.jpg"},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),s=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},"608c":function(t,e,n){},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var i=n("ade3"),s=n("5530"),r=(n("4b85"),n("2b0e")),a=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["G"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return c.reduce((function(t,e){return t["order"+Object(o["G"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(h)};function f(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var s=e.replace(t,"");i+="-".concat(s)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var v=new Map;e["a"]=r["default"].extend({name:"v-col",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,s=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=v.get(o);return l||function(){var t,e;for(e in l=[],d)d[e].forEach((function(t){var i=n[t],s=f(e,t,i);s&&l.push(s)}));var s=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!s||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(o,l)}(),t(n.tag,Object(a["a"])(s,{class:l}),r)}})},"63b7":function(t,e,n){},7584:function(t,e,n){var i={"./about.jpg":"bc25","./back.png":"ae5c","./cbit_logo.png":"ef21","./cbit_title.png":"c294","./i3.jpg":"3e8c","./i5.jpg":"40eb","./img-border.png":"b49f"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="7584"},"7efd":function(t,e,n){"use strict";n("99af"),n("caad"),n("fb6a");var i=n("5530"),s=(n("608c"),n("9d26")),r=n("0789"),a=n("604c"),o=n("e4cd"),c=n("dc22"),l=n("c3f0"),u=n("58df"),h=Object(u["a"])(a["a"],o["a"]).extend({name:"base-slide-group",directives:{Resize:c["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing;case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,n=t.wrapper;return e>Math.abs(this.scrollOffset)+n},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var n="".concat(t[0].toUpperCase()).concat(t.slice(1)),i=this["has".concat(n)];return this.showArrows||i?this.$createElement(s["a"],{props:{disabled:!i}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(r["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,n,i){var s=n?-1:1,r=s*i+("prev"===t?-1:1)*e.wrapper;return s*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,n=t.wrapper,i=e.clientWidth-n.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,n,i){var s=t.clientWidth,r=n?e.content-t.offsetLeft-s:t.offsetLeft;n&&(i=-i);var a=e.wrapper+i,o=s+r,c=.4*s;return r<=i?i=Math.max(r-c,0):a<=o&&(i=Math.min(i-(a-o-c),e.content-e.wrapper)),n?-i:i},calculateCenteredOffset:function(t,e,n){var i=t.offsetLeft,s=t.clientWidth;if(n){var r=e.content-i-s/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var a=i+s/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,n=e.content,i=e.wrapper;t.widths={content:n?n.clientWidth:0,wrapper:i?i.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["a"]=h.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var i=n("b0af"),s=n("80d2"),r=Object(s["i"])("v-card__actions"),a=Object(s["i"])("v-card__subtitle"),o=Object(s["i"])("v-card__text"),c=Object(s["i"])("v-card__title");i["a"]},"9a5b":function(t,e,n){"use strict";var i=n("ef16"),s=n.n(i);s.a},"9dbe":function(t,e,n){"use strict";var i=n("ade3"),s=n("4e82"),r=n("58df"),a=n("d9bd"),o=n("2b0e"),c=o["default"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(i["a"])({},this.activeClass,this.isActive)}),t):(Object(a["c"])("v-item should only contain a single element",this),t)):(Object(a["c"])("v-item is missing a default scopedSlot",this),null);var t}});Object(r["a"])(c,Object(s["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e["a"]=Object(r["a"])(c,Object(s["a"])("slideGroup")).extend({name:"v-slide-item"})},ae5c:function(t,e,n){t.exports=n.p+"img/back.3b3b7f3a.png"},afdd:function(t,e,n){"use strict";var i=n("8336");e["a"]=i["a"]},b49f:function(t,e,n){t.exports=n.p+"img/img-border.c21b1541.png"},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Banner"),n("v-row",{attrs:{align:"center",justify:"center"}},[n("Vision",{attrs:{vision:t.vision,mission:t.mission}})],1),n("v-row",{staticClass:"my-5"},[n("CompaniesVisited")],1),n("v-row",{staticClass:"my-5",attrs:{align:"center",justify:"center"}},[n("Footer")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.backgroundImages,(function(e,i){return n("v-carousel-item",{key:i},[n("v-img",{attrs:{contain:"",src:t.getImgUrl(e),gradient:"to bottom, rgba(2,44,2,0.9) 34%, rgba(5,66,4,0.9) 78%",width:"3000",height:"400"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{attrs:{align:"center"}},[n("p",{staticClass:"display-2"},[t._v(" Career Development Center ")]),n("p",{staticClass:"display-1"},[t._v(" #CBIT ")]),n("v-btn",{attrs:{large:"",color:"primary",to:"/login"}},[t._v(" Login ")])],1)])],1)],1)})),1)],1)},a=[],o={name:"Banner",data:function(){return{backgroundImages:["about.jpg","i3.jpg","i5.jpg"]}},methods:{getImgUrl:function(t){return n("7584")("./"+t)}}},c=o,l=n("2877"),u=n("6544"),h=n.n(u),d=n("8336"),f=(n("a9e3"),n("5530")),v=(n("63b7"),n("99af"),n("7db0"),n("c740"),n("13b3"),n("c3f0")),p=n("afdd"),g=n("9d26"),m=n("604c"),w=m["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:v["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(f["a"])(Object(f["a"])({},m["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,n=e?"-reverse":"";return"v-window-".concat(t).concat(n,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,n){return t.internalValue===t.getValue(e,n)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var i=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(p["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){i.changedByDelimiters=!0,n()}}},[this.$createElement(g["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){var s=this.genIcon("next",i,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,n=this.items[e];return n.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,n=this.items[e];return n.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,n={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};n.directives.push({name:"touch",value:i})}return t("div",n,[this.genContainer()])}}),b=n("37c6"),y=m["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return m["a"].options.computed.classes.call(this)}},methods:{genData:m["a"].options.methods.genData}}),x=n("80d2"),C=n("d9bd"),O=w.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},w.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(C["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:w.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var s=this.$createElement(p["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(g["a"],{props:{size:18}},this.delimiterIcon)]);n.push(s)}return this.$createElement(y,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(b["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=w.options.render.call(this,t);return e.data.style="height: ".concat(Object(x["g"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),_=n("9d65"),j=n("4e82"),$=n("58df"),T=Object($["a"])(_["a"],Object(j["a"])("windowGroup","v-window-item","v-window")),I=T.extend().extend().extend({name:"v-window-item",directives:{Touch:v["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(x["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(x["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),S=n("adda"),k=n("1c87"),B=Object($["a"])(I,k["a"]),A=B.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(S["a"],{staticClass:"v-carousel__item",props:Object(f["a"])(Object(f["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(x["s"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.genDefaultSlot())}}}),V=n("0fd9"),E=Object(l["a"])(c,r,a,!1,null,null,null),P=E.exports;h()(E,{VBtn:d["a"],VCarousel:O,VCarouselItem:A,VImg:S["a"],VRow:V["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"my-5",attrs:{outline:""}},[n("v-row",{staticClass:"pa-5"},[n("v-col",{attrs:{cols:"6",md:"4"}},[n("h2",{staticClass:"primary--text text--darken-1"},[t._v("Vision")])]),n("v-col",{attrs:{cols:"12",md:"8"}},[t._v(" "+t._s(t.vision)+" ")])],1),n("hr"),n("v-row",{staticClass:"pa-5"},[n("v-col",{attrs:{cols:"6",md:"8"}},[t._v(" "+t._s(t.mission)+" ")]),n("v-col",{attrs:{cols:"6",md:"4"}},[n("h2",{staticClass:"primary--text text--darken-1"},[t._v("Mission")])])],1)],1),n("v-card",{attrs:{maxWidth:"1000"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-card-title",[n("h2",{staticClass:"green--text text--darken-2"},[t._v(" We’re talking Self-Enlightenment. ")])])],1),n("v-card-text",[n("p",[t._v(" Chaitanya Bharathi Institute of Technology, established in the Year 1979, esteemed as the Premier Engineering Institute in the States of Telangana and Andhra Pradesh, was promoted by a Group of Visionaries from varied Professions of Engineering, Medical, Legal and Management, with an Objective to facilitate the Best Engineering and Management Education to the Students and contribute towards meeting the need of Skilled and Technically conversant Engineers and Management Professionals, for the Country that embarked on an Economic Growth Plan. ")])])],1)],1)},G=[],N={name:"Vision",props:["vision","mission"],data:function(){return{}}},M=N,W=n("b0af"),R=n("99d9"),L=n("62ad"),H=Object(l["a"])(M,D,G,!1,null,null,null),z=H.exports;h()(H,{VCard:W["a"],VCardText:R["c"],VCardTitle:R["d"],VCol:L["a"],VRow:V["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"1000"}},[n("v-row",{staticClass:"pt-3",attrs:{align:"center",justify:"center"}},[n("h2",{staticClass:"indigo--text text--darken-1"},[t._v(" Companies Visited ")])]),n("v-slide-group",{staticClass:"pb-3",attrs:{"center-active":"","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.companies,(function(e,i){return n("v-slide-item",{key:i,scopedSlots:t._u([{key:"default",fn:function(t){var i=t.active,s=t.toggle;return[n("v-card",{staticClass:"ma-4",attrs:{color:i?"primary":"grey lighten-1",height:"100",width:"150"},on:{click:s}},[n("v-img",{attrs:{height:"100",width:"150",src:e.photo_url}}),n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-scale-transition")],1)],1)]}}],null,!0)})})),1)],1)},q=[],F={name:"CompaniesVisited",data:function(){return{model:null,companies:[]}},created:function(){this.getCompanies()},methods:{getCompanies:function(){var t=this;this.$axios.get("/api/company").then((function(e){t.companies=e.data})).catch((function(t){console.log(t)}))}}},X=F,J=n("0789"),Y=n("8dd9"),K=n("7efd"),Q=n("9dbe"),Z=Object(l["a"])(X,U,q,!1,null,null,null),tt=Z.exports;h()(Z,{VCard:W["a"],VImg:S["a"],VRow:V["a"],VScaleTransition:J["d"],VSheet:Y["a"],VSlideGroup:K["a"],VSlideItem:Q["a"]});var et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("aside",{staticClass:"widget widget_text",attrs:{id:"text-3"}},[n("div",{staticClass:"textwidget"},[n("p",[n("img",{staticClass:"alignnone size-medium wp-image-1069",attrs:{src:"https://www.cbit.ac.in/wp-content/uploads/2020/01/logo.png",alt:"",width:"300",height:"88"}})])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"f-left-col"},[n("p",[t._v("College Contact Info")]),n("p",[t._v("Gandipet, Hyderabad, Telangana,"),n("br"),t._v(" PIN : 500075"),n("br")])])]),n("div",{staticClass:"col-md-6"},[n("p",[t._v(" Phone: 040-24193276"),n("br"),t._v(" Mobile: 8466997201"),n("br"),t._v(" Email: principal@cbit.ac.in ")])])])])}],it={name:"Footer"},st=it,rt=(n("9a5b"),Object(l["a"])(st,et,nt,!1,null,null,null)),at=rt.exports,ot={name:"Home",components:{Banner:P,Vision:z,CompaniesVisited:tt,Footer:at},data:function(){return{vision:"To be the center of excellence in technical education and research.",mission:"To address the emerging needs through quality technical education and advanced research."}}},ct=ot,lt=Object(l["a"])(ct,i,s,!1,null,null,null);e["default"]=lt.exports;h()(lt,{VRow:V["a"]})},bc25:function(t,e,n){t.exports=n.p+"img/about.f3bab4c0.jpg"},c294:function(t,e,n){t.exports=n.p+"img/cbit_title.e15d24ba.png"},ef16:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6d9cf9fc.bc36988e.js.map