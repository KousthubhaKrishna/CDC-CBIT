(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca6b3e22"],{"2bfd":function(e,t,a){},4322:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"primary",dark:""}},"v-btn",n,!1),s),[e._v(" Add DataSnaps ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("DataSnapshot")])]),a("v-form",{ref:"form"},[a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Snap Name*",rules:[e.rules.required]},model:{value:e.snapData.snap_name,callback:function(t){e.$set(e.snapData,"snap_name",t)},expression:"snapData.snap_name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Type of Data*",rules:[e.rules.required]},model:{value:e.snapData.type_of_data,callback:function(t){e.$set(e.snapData,"type_of_data",t)},expression:"snapData.type_of_data"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Placement batch*",rules:[e.rules.required,e.rules.number]},model:{value:e.snapData.placement_batch,callback:function(t){e.$set(e.snapData,"placement_batch",t)},expression:"snapData.placement_batch"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({ref:"last_date",attrs:{label:"Last Date*",readonly:"",rules:[e.rules.required]},model:{value:e.snapData.last_date,callback:function(t){e.$set(e.snapData,"last_date",t)},expression:"snapData.last_date"}},"v-text-field",n,!1),s))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{ref:"picker",on:{change:e.save},model:{value:e.snapData.last_date,callback:function(t){e.$set(e.snapData,"last_date",t)},expression:"snapData.last_date"}})],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:e.items,label:"Fields*",multiple:"",rules:[e.rules.required]},model:{value:e.fields,callback:function(t){e.fields=t},expression:"fields"}})],1),a("v-col",{attrs:{cols:"12"}},[a("p",[e._v(" "+e._s(e.enteredFields)+" ")]),a("v-text-field",{attrs:{label:"Extra Fields"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter(t)}},model:{value:e.extra_field,callback:function(t){e.extra_field=t},expression:"extra_field"}}),a("small",{staticClass:"orange--text"},[e._v("Type the text and press enter to add the text to Extra Fields")])],1)],1)],1),a("small",[e._v("*indicates required field")]),e.error.length>0?a("v-alert",{attrs:{dense:"",outlined:"",text:"",type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addDatasnapshot}},[e._v(" Save ")])],1)],1)],1)],1)],1)},n=[],i=(a("99af"),a("4160"),a("ac1f"),a("5319"),a("159b"),a("bc3a")),l=a.n(i),r=a("81f6"),o={name:"addSnapshot",props:["first"],data:function(){return{dialog:!1,menu:!1,items:["First Name","Last Name","Full Name","Roll Number","Branch","Section","Placement Batch","Primary Email","Secondary Email","Mobile","Secondary Mobile","CGPA","Backlogs","College","Inter Percent","School","School percent","Eamcet Rank","Jee Mains Rank","Parent Name","Address","City","State","Zipcode","Gender","Date of Birth","Photo Url","Resume Url"],snapData:{snap_name:"",type_of_data:"",fields:[],placement_batch:"",extra_fields:[],last_date:"",isFirst:""},set:{},fields:[],extra_fields:[],extra_field:null,entered:[],error:"",rules:{required:function(e){return!!e||" "},number:function(e){return/^\d+$/.test(e)||"This field only accept numbers"}}}},computed:{enteredFields:function(){return this.entered.concat(this.extra_field||[])}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;this.items.forEach((function(t){e.set[t]=e.getField(t)}))},getField:function(e){return e=e.replace(/ /g,"_").toLowerCase(),e},enter:function(){this.extra_fields.push(this.getField(this.extra_field)),this.entered.push(this.extra_field),this.extra_field="",console.log(this.extra_fields)},save:function(e){this.$refs.menu.save(e),console.log(this.snapData.last_date)},closeDialog:function(){this.dialog=!1,this.error="",this.$refs.form.reset()},addDatasnapshot:function(){var e=this,t=this.$refs.form.validate(!0);console.log(t),t?(this.dialog=!1,this.snapData.isFirst=this.first,this.fields.forEach((function(t){e.snapData.fields.push(e.set[t])})),this.snapData.extra_fields=this.extra_fields,l.a.post("/api/snaps/"+this.$route.params.id,this.snapData).then((function(e){console.log("form submission",e.data),r["a"].$emit("snaps",e.data)})).catch((function(e){console.log(e)}))):this.error="Fill all the required Fields"}}},c=o,u=a("2877"),d=a("6544"),h=a.n(d),f=a("0798"),p=a("c6a6"),m=a("8336"),v=a("b0af"),I=a("99d9"),x=a("62ad"),b=a("a523"),g=a("2e4b"),S=a("169a"),_=a("4bd4"),D=a("e449"),y=a("0fd9"),k=a("2fa4"),C=a("8654"),F=Object(u["a"])(c,s,n,!1,null,null,null);t["default"]=F.exports;h()(F,{VAlert:f["a"],VAutocomplete:p["a"],VBtn:m["a"],VCard:v["a"],VCardActions:I["a"],VCardText:I["c"],VCardTitle:I["d"],VCol:x["a"],VContainer:b["a"],VDatePicker:g["a"],VDialog:S["a"],VForm:_["a"],VMenu:D["a"],VRow:y["a"],VSpacer:k["a"],VTextField:C["a"]})},c6a6:function(e,t,a){"use strict";a("4de4"),a("7db0"),a("c975"),a("d81d"),a("45fc"),a("498a");var s=a("5530"),n=(a("2bfd"),a("b974")),i=a("8654"),l=a("d9f7"),r=a("80d2"),o=Object(s["a"])(Object(s["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,a){return a.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var a=Object(r["r"])(t,e.itemText),s=null!=a?String(a):"";return e.filter(t,String(e.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=n["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(s["a"])(Object(s["a"])({},o),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=n["a"].options.computed.listData.call(this);return e.props=Object(s["a"])(Object(s["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var a=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===e.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===r["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["y"].backspace&&e!==r["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var s=this.selectedItems.length,n=e!==s-1?e:e-1,i=this.selectedItems[n];i?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=void 0,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=i["a"].options.methods.genInput.call(this);return e.data=Object(l["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=n["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,a=t.value;t.value&&this.activateMenu(),this.internalSearch=a,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;n["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){n["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){n["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,a;if(-1!==this.selectedIndex){var s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(a=e.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-ca6b3e22.ff457a2a.js.map