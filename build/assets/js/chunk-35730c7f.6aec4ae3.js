(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35730c7f","chunk-39413ce8","chunk-76b6a568"],{"4c1b":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,xs:24}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("个人信息")])]),t._v(" "),r("div",[r("div",{staticClass:"text-center"},[r("userAvatar",{attrs:{user:t.user}})],1),t._v(" "),r("ul",{staticClass:"list-group list-group-striped"},[r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"user"}}),t._v("用户名称\n              "),r("div",{staticClass:"pull-right"},[t._v(t._s(t.user.userName))])],1),t._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"phone"}}),t._v("手机号码\n              "),r("div",{staticClass:"pull-right"},[t._v(t._s(t.user.phonenumber))])],1),t._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"email"}}),t._v("用户邮箱\n              "),r("div",{staticClass:"pull-right"},[t._v(t._s(t.user.email))])],1),t._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"peoples"}}),t._v("所属角色\n              "),r("div",{staticClass:"pull-right"},[t._v(t._s(t.roleGroup))])],1),t._v(" "),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"date"}}),t._v("创建日期\n              "),r("div",{staticClass:"pull-right"},[t._v("2018-08-23 09:11:56")])],1)])])])],1),t._v(" "),r("el-col",{attrs:{span:18,xs:24}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("基本资料")])]),t._v(" "),r("el-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[r("resetPwd",{attrs:{user:t.user}})],1)],1)],1)],1)],1)],1)},o=[],a=r("9429"),i=r("ee46"),n=r("c0c7"),l={name:"Profile",components:{userAvatar:a["default"],resetPwd:i["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},activeTab:"resetPwd"}},created:function(){this.getUser()},methods:{getUser:function(){var t=this;Object(n["f"])().then((function(e){t.user=e.data,t.roleGroup=e.roleGroup,t.postGroup=e.postGroup}))}}},u=l,c=(r("de5f"),r("5511")),p=Object(c["a"])(u,s,o,!1,null,null,null);e["default"]=p.exports},"8e6c":function(t,e,r){},9429:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"img-circle img-lg",attrs:{src:t.options.img,title:"点击上传头像"},on:{click:function(e){return t.editCropper()}}}),t._v(" "),r("el-dialog",{attrs:{title:t.title,visible:t.open,width:"800px"},on:{"update:visible":function(e){t.open=e}}},[r("el-row",[r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),t._v(" "),r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("div",{staticClass:"avatar-upload-preview"},[r("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),t._v(" "),r("br"),t._v(" "),r("el-row",[r("el-col",{attrs:{lg:2,md:2}},[r("el-upload",{attrs:{"show-file-list":!1,"before-upload":t.beforeUpload,action:"https://jsonplaceholder.typicode.com/posts/"}},[r("el-button",{attrs:{size:"small"}},[t._v("\n            上传\n            "),r("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:2},md:2}},[r("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){return t.changeScale(1)}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(e){return t.changeScale(-1)}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(e){return t.rotateLeft()}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(e){return t.rotateRight()}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:2,offset:6},md:2}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.uploadImg()}}},[t._v("上 传")])],1)],1)],1)],1)},o=[],a=r("4360"),i=r("4c99"),n=r("c0c7"),l={components:{VueCropper:i["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,title:"修改头像",options:{img:a["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{editCropper:function(){this.open=!0},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},beforeUpload:function(t){var e=this;if(-1==t.type.indexOf("image/"))this.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var r=new FileReader;r.readAsDataURL(t),r.onload=function(){e.options.img=r.result}}},uploadImg:function(){var t=this;this.$refs.cropper.getCropBlob((function(e){var r=new FormData;r.append("avatarfile",e),Object(n["k"])(r).then((function(e){200===e.code?(t.open=!1,t.options.img="/prod-api"+e.imgUrl,t.msgSuccess("修改成功")):t.msgError(e.msg),t.$refs.cropper.clearCrop()}))}))},realTime:function(t){this.previews=t}}},u=l,c=r("5511"),p=Object(c["a"])(u,s,o,!1,null,null,null);e["default"]=p.exports},c0c7:function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"e",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"i",(function(){return n})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return u})),r.d(e,"h",(function(){return c})),r.d(e,"b",(function(){return p})),r.d(e,"f",(function(){return d})),r.d(e,"j",(function(){return f})),r.d(e,"k",(function(){return m}));var s=r("b775");function o(t){return Object(s["a"])({url:"/system/user/list",method:"get",params:t})}function a(t){return Object(s["a"])({url:"/system/user/"+t,method:"get"})}function i(t){return Object(s["a"])({url:"/system/user",method:"post",data:t})}function n(t){return Object(s["a"])({url:"/system/user",method:"put",data:t})}function l(t){return Object(s["a"])({url:"/system/user/"+t,method:"delete"})}function u(t){return Object(s["a"])({url:"/system/user/export",method:"get",params:t})}function c(t,e){var r={userId:t,password:e};return Object(s["a"])({url:"/system/user/resetPwd",method:"put",data:r})}function p(t,e){var r={userId:t,status:e};return Object(s["a"])({url:"/system/user/changeStatus",method:"put",data:r})}function d(){return Object(s["a"])({url:"/system/user/profile",method:"get"})}function f(t,e){var r={oldPassword:t,newPassword:e};return Object(s["a"])({url:"/system/user/profile/updatePwd",method:"put",params:r})}function m(t){return Object(s["a"])({url:"/system/user/profile/avatar",method:"post",data:t})}},de5f:function(t,e,r){"use strict";var s=r("8e6c"),o=r.n(s);o.a},ee46:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",attrs:{model:t.user,rules:t.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[r("el-input",{attrs:{placeholder:"请输入旧密码",type:"password"},model:{value:t.user.oldPassword,callback:function(e){t.$set(t.user,"oldPassword",e)},expression:"user.oldPassword"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{placeholder:"请输入新密码",type:"password"},model:{value:t.user.newPassword,callback:function(e){t.$set(t.user,"newPassword",e)},expression:"user.newPassword"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[r("el-input",{attrs:{placeholder:"请确认密码",type:"password"},model:{value:t.user.confirmPassword,callback:function(e){t.$set(t.user,"confirmPassword",e)},expression:"user.confirmPassword"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submit}},[t._v("保存")]),t._v(" "),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.close}},[t._v("关闭")])],1)],1)},o=[],a=r("c0c7"),i={data:function(){var t=this,e=function(e,r,s){t.user.newPassword!==r?s(new Error("两次输入的密码不一致")):s()};return{test:"1test",user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:e,trigger:"blur"}]}}},methods:{submit:function(){var t=this;this.$refs["form"].validate((function(e){e&&Object(a["j"])(t.user.oldPassword,t.user.newPassword).then((function(e){200===e.code?t.msgSuccess("修改成功"):t.msgError(e.msg)}))}))},close:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.push({path:"/index"})}}},n=i,l=r("5511"),u=Object(l["a"])(n,s,o,!1,null,null,null);e["default"]=u.exports}}]);