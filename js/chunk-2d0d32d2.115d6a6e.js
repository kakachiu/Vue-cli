(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d32d2"],{"5c3a":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"d-flex justify-content-between align-items-center container py-3"},[s("h2",{staticClass:"text-bold"},[t._v("Art Gallery 後臺管理系統")]),s("nav",[s("router-link",{staticClass:"text-info",attrs:{to:"/admin/products"}},[t._v("產品列表")]),t._v(" / "),s("router-link",{staticClass:"text-info",attrs:{to:"/admin/picture"}},[t._v("圖片列表")]),t._v(" / "),s("router-link",{staticClass:"text-info",attrs:{to:"/admin/order"}},[t._v("訂單列表")]),t._v(" / "),s("router-link",{staticClass:"text-info",attrs:{to:"/"}},[t._v("返回前台")]),t._v(" / "),s("a",{staticClass:"text-info",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("登出")])],1)]),s("div",{staticClass:"container"},[t.ckeckSuccess?s("router-view",{attrs:{token:t.token}}):t._e()],1)])},n=[],i=(s("ac1f"),s("5319"),{data:function(){return{token:"",ckeckSuccess:!1}},methods:{checkLogin:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common["Authorization"]="Bearer ".concat(this.token);var e="".concat("https://course-ec-api.hexschool.io/api/","auth/check");this.axios.post(e,{api_token:this.token}).then((function(){t.ckeckSuccess=!0})).catch((function(){t.$router.push("/login")}))},signout:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/","auth/logout");this.axios.post(e,{api_token:this.token}).then((function(e){document.cookie="token=; expires=;",t.$router.push("/login");var s=e.data.message;t.$bus.$emit("message",s,"success")}))}},created:function(){this.checkLogin()}}),c=i,a=s("2877"),r=Object(a["a"])(c,o,n,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d32d2.115d6a6e.js.map