(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47b4ec24"],{daa0:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-detail-wrap app-container"},[t.goodsList?i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"order-detail"},[i("div",{staticClass:"statusStep"},[i("div",{staticClass:"statusLeft"},[i("p",[t._v("订单号："+t._s(t.orderno))]),t._v(" "),i("h3",[t._v(t._s(t._f("initTradestate")(t.tradestate)))])]),t._v(" "),i("ul",{staticClass:"statusRight"},[i("li",[i("div",{staticClass:"imgIcon"}),t._v(" "),i("p",{staticClass:"iconTitle active"},[t._v("买家下单")]),t._v(" "),i("p",{staticClass:"date"},[t._v(t._s(t.createtime))])]),t._v(" "),t.ac5||t.ac6?t._e():i("ul",{staticClass:"f-l"},[1===t.ordertype?i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine"})]):t._e(),t._v(" "),1===t.ordertype?i("li",[i("div",{class:["imgIcon","imgIcon1",t.ac12411?"imgIcon1-ac":""]}),t._v(" "),i("p",{class:["iconTitle",t.ac12411?"active":""]},[t._v("商家称重")]),t._v(" "),t.ac12411?i("p",{staticClass:"date"},[t._v(t._s(t.weighttime))]):t._e()]):t._e(),t._v(" "),t._m(0),t._v(" "),i("li",[i("div",{class:["imgIcon","imgIcon2",t.ac124?"imgIcon2-ac":""]}),t._v(" "),i("p",{class:["iconTitle",t.ac124?"active":""]},[t._v("买家付款")]),t._v(" "),t.ac124?i("p",{staticClass:"date"},[t._v(t._s(t.paytime))]):t._e()]),t._v(" "),t._m(1),t._v(" "),i("li",[i("div",{class:["imgIcon","imgIcon3",t.ac24?"imgIcon3-ac":""]}),t._v(" "),i("p",{class:["iconTitle",t.ac24?"active":""]},[t._v("商家发货")]),t._v(" "),t.ac24?i("p",{staticClass:"date"},[t._v(t._s(t.deliverytime))]):t._e()]),t._v(" "),t._m(2),t._v(" "),i("li",{staticClass:"lang-item"},[i("div",{class:["imgIcon","imgIcon4",t.ac4?"imgIcon4-ac":""]}),t._v(" "),i("p",{class:["iconTitle",t.ac4?"active":""]},[t._v("买家确认收货")]),t._v(" "),t.ac4?i("p",{staticClass:"date"},[t._v(t._s(t.receivetime))]):t._e()]),t._v(" "),t._m(3),t._v(" "),i("li",[i("div",{class:["imgIcon","imgIcon5",t.ac4?"imgIcon5-ac":""]}),t._v(" "),i("p",{class:["iconTitle",t.ac4?"active":""]},[t._v("完成")]),t._v(" "),t.ac4?i("p",{staticClass:"date"},[t._v(t._s(t.finaltime))]):t._e()])]),t._v(" "),t.ac5?i("ul",{staticClass:"f-l"},[1===t.ordertype&&t.weighttime?i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine"})]):t._e(),t._v(" "),1===t.ordertype&&t.weighttime?i("li",[i("div",{staticClass:"imgIcon imgIcon1 imgIcon1-ac"}),t._v(" "),i("p",{staticClass:"iconTitle active"},[t._v("商家称重")]),t._v(" "),i("p",{staticClass:"date"},[t._v(t._s(t.weighttime))])]):t._e(),t._v(" "),t._m(4),t._v(" "),i("li",[i("div",{staticClass:"imgIcon imgIcon6-ac"}),t._v(" "),i("p",{staticClass:"iconTitle active"},[t._v("已关闭")]),t._v(" "),i("p",{staticClass:"date"},[t._v(t._s(t.finaltime))])])]):t._e(),t._v(" "),t.ac6?i("ul",{staticClass:"f-l"},[1===t.ordertype&&t.weighttime?i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine"})]):t._e(),t._v(" "),1===t.ordertype&&t.weighttime?i("li",[i("div",{staticClass:"imgIcon imgIcon1 imgIcon1-ac"}),t._v(" "),i("p",{staticClass:"iconTitle active"},[t._v("商家称重")]),t._v(" "),i("p",{staticClass:"date"},[t._v(t._s(t.weighttime))])]):t._e(),t._v(" "),t._m(5),t._v(" "),i("li",[i("div",{staticClass:"imgIcon imgIcon7-ac"}),t._v(" "),i("p",{staticClass:"iconTitle active"},[t._v("已失效")]),t._v(" "),i("p",{staticClass:"date"},[t._v(t._s(t.failuretime))])])]):t._e()])]),t._v(" "),i("div",{staticClass:"goodsList"},[i("el-table",{staticClass:"goodsTable",attrs:{data:t.goodsList}},[i("el-table-column",{attrs:{label:"商品信息",width:"485"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:e.row.image,alt:""}})]),t._v(" "),i("div",{staticClass:"content"},[i("h4",[t._v(t._s(e.row.title))]),t._v(" "),i("p",["Y"===e.row.isagent?i("span",{staticClass:"agent-pro"},[t._v("代卖商品，")]):t._e(),t._v(t._s(e.row.standards.substring(0,e.row.standards.length-1))+"。")])])]}}],null,!1,4212658320)}),t._v(" "),i("el-table-column",{attrs:{label:"单价",prop:"cmdtprice"}}),t._v(" "),i("el-table-column",{attrs:{label:"数量",prop:"cmdtcount"}}),t._v(" "),i("el-table-column",{attrs:{label:"优惠",prop:"couponprice"}}),t._v(" "),i("el-table-column",{attrs:{label:"折扣",prop:"discount"}}),t._v(" "),i("el-table-column",{attrs:{label:"总价",prop:"cmdttotalprice"}}),t._v(" "),i("el-table-column",{attrs:{label:"状态",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"weight-box"},[i("span",[t._v(t._s(t._f("initTradestate")(e.row.tradestate)))])])]}}],null,!1,207193143)})],1),t._v(" "),i("div",{staticClass:"goodsFooter"},[0!==t.delivertype?i("div",{staticClass:"footer-left"},[i("h4",[t._v("物流信息")]),t._v(" "),i("p",[i("b",[t._v("收货人：")]),t._v(" "),i("span",[t._v(t._s(t.deliveryAddress.name))])]),t._v(" "),i("p",[i("b",[t._v("联系方式：")]),t._v(" "),i("span",[t._v(t._s(t.deliveryAddress.phone))])]),t._v(" "),i("p",[i("b",[t._v("收获地址：")]),t._v(" "),i("span",[t._v(t._s(t.deliveryAddress.area)+t._s(t.deliveryAddress.address))])])]):t._e(),t._v(" "),0!==t.invocetype?i("div",{staticClass:"footer-left"},[i("h4",[t._v("发票信息")]),t._v(" "),i("p",[i("b",[t._v("发票抬头：")]),t._v(" "),i("span",[t._v(t._s(Number(1===t.invoceInfo.owner)?t.invoceInfo.name:t.invoceInfo.company))])]),t._v(" "),i("p",[i("b",[t._v("发票类型：")]),t._v(" "),i("span",[t._v(t._s(t._f("initInvoce")(t.invoceInfo.type)))])]),t._v(" "),i("p",[i("b",[t._v("发票税号：")]),t._v(" "),i("span",[t._v(t._s(t.invoceInfo.taxno))])])]):t._e(),t._v(" "),i("div",{staticClass:"footer-mid"}),t._v(" "),i("div",{staticClass:"footer-right"},[i("p",[i("b",{staticClass:"totalGoods"},[t._v("\n              共\n              "),i("span",[t._v(t._s(t.totalNum))]),t._v("件商品\n            ")]),t._v(" "),i("b",[t._v("商品总价：")]),t._v(" "),i("span",[t._v("￥"+t._s(t.totalPrice))])]),t._v(" "),i("p",[i("b",[t._v("运费（快递）：")]),t._v(" "),i("span",[t._v("￥"+t._s(t.carriage))])]),t._v(" "),i("p",[i("b",[t._v("应付总价：")]),t._v(" "),i("span",[t._v("￥"+t._s(t.needprice))])]),t._v(" "),i("p",{staticClass:"total"},[i("b",[t._v("实付总价：")]),t._v(" "),i("span",[t._v("￥"+t._s(t.realprice))])])])])],1)]):t._e()])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine gryLine"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine gryLine"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine gryLine"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine gryLine"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine gryLine"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"line"},[i("div",{staticClass:"imgLine gryLine"})])}],c=(i("cc57"),i("2af8")),n=(i("6d57"),i("163d"),i("63ff"),i("e5af")),r=i("f8b7"),l={name:"orderDetail",data:function(){return{openWeight:!1,loading:!1,goodsList:null,tradestate:"",totalNum:"",totalPrice:"",orderno:"",carriage:"",needprice:"",realprice:"",ordertype:"",invocetype:"",delivertype:"",deliveryAddress:null,invoceInfo:null,createtime:"",weighttime:"",paytime:"",deliverytime:"",receivetime:"",finaltime:"",failuretime:""}},filters:{initTradestate:function(t){var e=["待付款","待发货","待确认收货","物流派件中","已完成","已关闭","已失效","","","","待称重","已称重，待付款"];return e[t]},initInvoce:function(t){var e=["","普通发票","增值税发票"];return e[t]}},computed:{ac12411:function(){var t=this.tradestate;return 11===t||1===t||2===t||4===t},ac124:function(){var t=this.tradestate;return 1===t||2===t||4===t},ac24:function(){var t=this.tradestate;return 2===t||4===t},ac4:function(){return 4===this.tradestate},ac10:function(){return 10===this.tradestate},ac5:function(){return 5===this.tradestate},ac6:function(){return 6===this.tradestate}},created:function(){this.orderno=this.$route.params.code,this.getDetail()},methods:{getDetail:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,i,a,s,n,l,o,v,_,d,u,p,m,g,f,h,C,b,y,I;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,Object(r["a"])({orderno:this.orderno});case 4:e=t.sent,i=e.code,a=e.data,s=a.tradestate,n=a.cmdtOrderDetailRespList,l=a.carriage,o=a.needprice,v=a.realprice,_=a.ordertype,d=a.invocetype,u=a.delivertype,p=a.orderDeliveryAddressResp,m=a.orderInvoceResp,g=a.createtime,f=a.paytime,h=a.deliverytime,C=a.weighttime,b=a.receivetime,y=a.finaltime,I=a.failuretime,this.loading=!1,200===i&&(this.goodsList=n,this.tradestate=Number(s),this.carriage=l,this.needprice=o,this.realprice=v,this.ordertype=Number(_),this.invocetype=Number(d),this.delivertype=Number(u),this.deliveryAddress=p,this.invoceInfo=m,this.createtime=g,this.paytime=f,this.deliverytime=h,this.weighttime=C,this.receivetime=b,this.finaltime=y,this.failuretime=I,this.totalNum=n.reduce((function(t,e){return t+=Number(e.cmdtcount),t}),0),this.totalPrice=n.reduce((function(t,e){return t+=Number(e.cmdttotalprice),t}),0).toFixed(2),n.forEach((function(t){Object.assign(t,{standards:JSON.parse(t.saleprovalue).salepro.reduce((function(t,e){return"object"===Object(c["a"])(e.values)?t+="".concat(e.name,"：").concat(e.values.value,"，"):"string"===typeof e.values&&(t+="".concat(e.name,"：").concat(e.values,"，")),t}),"")})}))),t.next=32;break;case 28:t.prev=28,t.t0=t["catch"](0),this.loading=!1,console.log(t.t0);case 32:case"end":return t.stop()}}),t,this,[[0,28]])})));function e(){return t.apply(this,arguments)}return e}()}},o=l,v=i("5511"),_=Object(v["a"])(o,a,s,!1,null,null,null);e["default"]=_.exports},f8b7:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return c})),i.d(e,"c",(function(){return n}));var a=i("b775");function s(t){return Object(a["a"])({url:"/patronus/order/list",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/patronus/order/detail",method:"post",data:t})}function n(t){return Object(a["a"])({url:"/patronus/order/export",method:"post",data:t})}}}]);