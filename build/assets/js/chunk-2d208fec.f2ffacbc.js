(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208fec"],{a6bc:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-collapse-transition",[e.formShow?a("div",{staticClass:"form-p"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryForm,inline:!0}},[a("el-form-item",{attrs:{label:"商品名称",prop:"mercode"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入商品名称",clearable:"",size:"small"},model:{value:e.queryForm.mercode,callback:function(t){e.$set(e.queryForm,"mercode",t)},expression:"queryForm.mercode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品分类",prop:"state"}},[a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"请选择分类",clearable:"",size:"small"},model:{value:e.queryForm.state,callback:function(t){e.$set(e.queryForm,"state",t)},expression:"queryForm.state"}},[a("el-option",{attrs:{label:"热带水果",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"多汁水果",value:"1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"260px"},attrs:{size:"small",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1):e._e()]),e._v(" "),a("div",{staticClass:"table-p"},[a("el-row",{staticClass:"mb10 f-l",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.addPro}},[e._v("新增商品")])],1)],1),e._v(" "),a("el-row",{staticClass:"mb10 f-r icon-wrap",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("div",{staticClass:"icon-box icon-box-f",on:{click:function(t){e.formShow=!e.formShow}}},[a("i",{staticClass:"el-icon-zoom-in"})])]),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("div",{staticClass:"icon-box icon-box-t",on:{click:e.handleQuery}},[a("i",{staticClass:"el-icon-refresh"})])])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.proList}},[a("el-table-column",{attrs:{label:"商品编号",prop:"aa"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品名称",prop:"bb"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品分类",prop:"cc"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品位置",prop:"dd"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否有效",prop:"ee"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"ff"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("修改")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryForm.pageNum,limit:e.queryForm.pageSize},on:{"update:page":function(t){return e.$set(e.queryForm,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryForm,"pageSize",t)},pagination:e.getList}})],1)],1)},l=[],o=(a("63ff"),a("e5af")),n={data:function(){return{loading:!1,formShow:!0,proList:[{aa:"526225262001",bb:"香蕉",cc:"热带水果",dd:"app",ee:"有效",ff:"2020-02-23 16:20:23"},{aa:"526225262013",bb:"苹果",cc:"热带水果",dd:"app",ee:"有效",ff:"2020-01-23 16:20:23"},{aa:"526225262023",bb:"橘子",cc:"多汁水果",dd:"app",ee:"有效",ff:"2020-01-23 16:20:23"}],total:10,dateRange:[],queryForm:{pageNum:1,pageSize:10,state:void 0}}},created:function(){this.getList()},methods:{getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addPro:function(){this.$router.push({path:"/product/product-add"})},handleQuery:function(){this.queryForm.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleEdit:function(e){},_initParams:function(e){var t=this.dateRange;return Object.assign(e,{beginTime:t.length>0?t[0]:null,endTime:t.length>0?t[1]:null}),e}}},i=n,s=a("5511"),c=Object(s["a"])(i,r,l,!1,null,null,null);t["default"]=c.exports}}]);