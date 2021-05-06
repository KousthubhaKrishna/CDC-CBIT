(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b40340e"],{"0798":function(t,e,i){"use strict";i("caad");var s=i("5530"),n=i("ade3"),o=(i("0c18"),i("10d2")),a=i("afdd"),r=i("9d26"),l=i("f2e7"),c=i("7560"),d=i("2b0e"),u=d["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=i("58df"),p=i("d9bd");e["a"]=Object(h["a"])(o["a"],l["a"],u).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(r["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"169a":function(t,e,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var s=i("5530"),n=i("2909"),o=i("ade3"),a=(i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),p=i("f2e7"),f=i("a293"),v=i("58df"),m=i("d9bd"),g=i("80d2"),w=Object(v["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],h["a"],p["a"]);e["a"]=w.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),s=Object(n["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));s&&s.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(a["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(s["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},ae5c:function(t,e,i){t.exports=i.p+"img/back.3b3b7f3a.png"},f166:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-card",{attrs:{width:"1100",loading:t.loading,outlined:""}},[s("v-row",[s("v-col",[s("v-img",{staticClass:"pa-10",attrs:{contain:"",src:i("ae5c"),width:"500"}},[s("p",{staticClass:"primary--text"},[t._v("CBIT Placements")]),s("h2",{staticClass:"green--text darken-4"},[t._v(" Go to place for placements for students ")])])],1),s("v-col",{staticClass:"pa-10",attrs:{align:"left"}},[s("h1",{staticClass:"primary--text"},[t._v("Login")]),t.error.length>0?s("v-alert",{attrs:{dense:"",outlined:"",text:"",type:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),s("form",{ref:"form",staticClass:"mb-10"},[s("v-text-field",{ref:"user_email",attrs:{label:"Email",rules:[t.rules.required,t.rules.email]},model:{value:t.loginProps.user_email,callback:function(e){t.$set(t.loginProps,"user_email",e)},expression:"loginProps.user_email"}}),s("v-text-field",{ref:"password",attrs:{rules:[t.rules.required,t.rules.min],counter:"",minLength:"8","append-icon":t.passShow?"mdi-eye":"mdi-eye-off",type:t.passShow?"text":"password",label:"Password"},on:{"click:append":function(e){t.passShow=!t.passShow}},model:{value:t.loginProps.password,callback:function(e){t.$set(t.loginProps,"password",e)},expression:"loginProps.password"}}),s("v-btn",{staticClass:"mr-10",attrs:{light:"",color:"primary",large:""},on:{click:t.validateFields}},[t._v(" Login ")]),s("v-btn",{attrs:{text:"",small:"",justify:"left",color:"primary"},on:{click:function(e){return e.stopPropagation(),t.openDialog(e)}}},[t._v(" Forgot Password ? ")])],1),s("p",{staticClass:"caption"},[t._v(" *Please contact your class or branch placement co-ordinater for login credentials. ")])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v(" Forgot Password ? ")]),s("v-card-text",[t.dialogAlert.show?s("v-alert",{attrs:{dense:"",outlined:"",text:"",type:t.dialogAlert.type}},[t._v(" "+t._s(t.dialogAlert.message)+" ")]):t._e(),t.isAlertSuccess()?t._e():s("div",[t._v(" You will receive an email to reset your password. "),s("v-text-field",{ref:"newResetEmail",attrs:{label:"Email",rules:[t.rules.required,t.rules.email]},model:{value:t.newResetEmail,callback:function(e){t.newResetEmail=e},expression:"newResetEmail"}})],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.forgotPassword}},[t._v(" "+t._s(this.dialogAlert.buttonText)+" ")])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.isPasswordReset,callback:function(e){t.isPasswordReset=e},expression:"isPasswordReset"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v(" Reset Password ")]),s("v-card-text",[s("v-text-field",{ref:"newPassword",attrs:{rules:[t.rules.required,t.rules.min],counter:"",minLength:"8","append-icon":t.passShow?"mdi-eye":"mdi-eye-off",type:t.passShow?"text":"password",label:"Password"},on:{"click:append":function(e){t.passShow=!t.passShow}},model:{value:t.url_params.newPassword,callback:function(e){t.$set(t.url_params,"newPassword",e)},expression:"url_params.newPassword"}}),s("v-text-field",{attrs:{rules:[t.rules.required,t.rules.min,t.rules.confirmPass],counter:"",minLength:"8","append-icon":t.passShow?"mdi-eye":"mdi-eye-off",type:t.passShow?"text":"password",label:"Password"},on:{"click:append":function(e){t.passShow=!t.passShow}}})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.resetPassword}},[t._v(" Done ")])],1)],1)],1),s("v-snackbar",{attrs:{timeout:3e3,color:"green"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Password Reset Successful ")])],1)},n=[],o=i("bc3a"),a=i.n(o),r=(i("41cb"),{props:["email","token"],data:function(){var t=this;return{passShow:!1,loginProps:{user_email:"",password:""},error:"",dialogAlert:{show:!1,type:"",message:"",buttonText:"Send"},rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},confirmPass:function(e){return t.url_params.newPassword==e||"Passwords Not Same"}},loading:!1,dialog:!1,url_params:null,newResetEmail:"",snackbar:!1}},created:function(){this.error="",void 0!=this.$route.params.email&&void 0!=this.$route.params.token?(this.url_params={email:this.$route.params.email,token:this.$route.params.token,newPassword:""},this.isPasswordReset=!0):(this.url_params={email:"",token:"",newPassword:""},this.isPasswordReset=!1)},methods:{validateFields:function(){var t=this,e=this.$refs["user_email"].validate(!0)&&this.$refs["password"].validate(!0);e&&(this.loading=!0,a.a.post("/api/login/",this.loginProps).then((function(e){console.log(e),t.loading=!1,t.$router.push({name:"Dashboard"})})).catch((function(e){console.log(e),t.loading=!1,t.error=e.response.data.message})))},forgotPassword:function(){var t=this;if(this.isAlertSuccess())this.closeDialog();else{if(!this.$refs["newResetEmail"].validate(!0))return;a.a.get("/api/forgot_password/"+this.newResetEmail).then((function(e){t.showAlertinDialogue(!0)})).catch((function(e){console.log(e),t.showAlertinDialogue(!1)})),this.showAlertinDialogue(!0)}},openDialog:function(){this.resetDialog(),this.dialog=!0},closeDialog:function(){this.dialog=!1},resetDialog:function(){this.dialogAlert.show=!1,this.dialogAlert.type="",this.dialogAlert.message="",this.dialogAlert.buttonText="Send"},showAlertinDialogue:function(t){t?(this.dialogAlert.type="success",this.dialogAlert.message="Email Sent",this.dialogAlert.buttonText="Close"):(this.dialogAlert.type="error",this.dialogAlert.message="Invalid Email",this.dialogAlert.buttonText="Send"),this.dialogAlert.show=!0},isAlertSuccess:function(){return"success"==this.dialogAlert.type},resetPassword:function(){var t=this;this.$refs["newPassword"].validate(!0)&&a.a.post("/api/forgot_password_reset/",this.url_params).then((function(e){t.isPasswordReset=!1,t.snackbar=!0})).catch((function(t){console.log(t)}))}}}),l=r,c=i("2877"),d=i("6544"),u=i.n(d),h=i("0798"),p=i("8336"),f=i("b0af"),v=i("99d9"),m=i("62ad"),g=i("169a"),w=i("adda"),b=i("0fd9"),_=i("2db4"),y=i("2fa4"),x=i("8654"),C=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=C.exports;u()(C,{VAlert:h["a"],VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:m["a"],VDialog:g["a"],VImg:w["a"],VRow:b["a"],VSnackbar:_["a"],VSpacer:y["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=chunk-1b40340e.698f24a9.js.map