(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b6a568"],{9429:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"img-circle img-lg",attrs:{src:t.options.img,title:"点击上传头像"},on:{click:function(e){return t.editCropper()}}}),t._v(" "),r("el-dialog",{attrs:{title:t.title,visible:t.open,width:"800px"},on:{"update:visible":function(e){t.open=e}}},[r("el-row",[r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),t._v(" "),r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("div",{staticClass:"avatar-upload-preview"},[r("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),t._v(" "),r("br"),t._v(" "),r("el-row",[r("el-col",{attrs:{lg:2,md:2}},[r("el-upload",{attrs:{"show-file-list":!1,"before-upload":t.beforeUpload,action:"https://jsonplaceholder.typicode.com/posts/"}},[r("el-button",{attrs:{size:"small"}},[t._v("\n            上传\n            "),r("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:2},md:2}},[r("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){return t.changeScale(1)}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(e){return t.changeScale(-1)}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(e){return t.rotateLeft()}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(e){return t.rotateRight()}}})],1),t._v(" "),r("el-col",{attrs:{lg:{span:2,offset:6},md:2}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.uploadImg()}}},[t._v("上 传")])],1)],1)],1)],1)},n=[],s=r("4360"),i=r("4c99"),a=r("c0c7"),u={components:{VueCropper:i["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,title:"修改头像",options:{img:s["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{editCropper:function(){this.open=!0},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},beforeUpload:function(t){var e=this;if(-1==t.type.indexOf("image/"))this.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var r=new FileReader;r.readAsDataURL(t),r.onload=function(){e.options.img=r.result}}},uploadImg:function(){var t=this;this.$refs.cropper.getCropBlob((function(e){var r=new FormData;r.append("avatarfile",e),Object(a["l"])(r).then((function(e){200===e.code?(t.open=!1,t.options.img="/prod-api"+e.imgUrl,t.msgSuccess("修改成功")):t.msgError(e.msg),t.$refs.cropper.clearCrop()}))}))},realTime:function(t){this.previews=t}}},c=u,l=r("5511"),p=Object(l["a"])(c,o,n,!1,null,null,null);e["default"]=p.exports},c0c7:function(t,e,r){"use strict";r.d(e,"g",(function(){return n})),r.d(e,"e",(function(){return s})),r.d(e,"a",(function(){return i})),r.d(e,"i",(function(){return a})),r.d(e,"c",(function(){return u})),r.d(e,"d",(function(){return c})),r.d(e,"h",(function(){return l})),r.d(e,"b",(function(){return p})),r.d(e,"f",(function(){return f})),r.d(e,"j",(function(){return d})),r.d(e,"k",(function(){return m})),r.d(e,"l",(function(){return h}));var o=r("b775");function n(t){return Object(o["a"])({url:"/system/user/list",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/system/user/"+t,method:"get"})}function i(t){return Object(o["a"])({url:"/system/user",method:"post",data:t})}function a(t){return Object(o["a"])({url:"/system/user",method:"put",data:t})}function u(t){return Object(o["a"])({url:"/system/user/"+t,method:"delete"})}function c(t){return Object(o["a"])({url:"/system/user/export",method:"get",params:t})}function l(t,e){var r={userId:t,password:e};return Object(o["a"])({url:"/system/user/resetPwd",method:"put",data:r})}function p(t,e){var r={userId:t,status:e};return Object(o["a"])({url:"/system/user/changeStatus",method:"put",data:r})}function f(){return Object(o["a"])({url:"/system/user/profile",method:"get"})}function d(t){return Object(o["a"])({url:"/system/user/profile",method:"put",data:t})}function m(t,e){var r={oldPassword:t,newPassword:e};return Object(o["a"])({url:"/system/user/profile/updatePwd",method:"put",params:r})}function h(t){return Object(o["a"])({url:"/system/user/profile/avatar",method:"post",data:t})}}}]);