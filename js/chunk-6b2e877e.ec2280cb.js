(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2e877e"],{"652e":function(t,a,s){},"99af":function(t,a,s){"use strict";var i=s("23e7"),e=s("d039"),r=s("e8b5"),n=s("861d"),c=s("7b0b"),l=s("50c4"),o=s("8418"),d=s("65f0"),u=s("1dde"),p=s("b622"),v=s("2d00"),g=p("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",_=v>=51||!e((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=u("concat"),C=function(t){if(!n(t))return!1;var a=t[g];return void 0!==a?!!a:r(t)},b=!_||!m;i({target:"Array",proto:!0,forced:b},{concat:function(t){var a,s,i,e,r,n=c(this),u=d(n,0),p=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],C(r)){if(e=l(r.length),p+e>h)throw TypeError(f);for(s=0;s<e;s++,p++)s in r&&o(u,p,r[s])}else{if(p>=h)throw TypeError(f);o(u,p++,r)}return u.length=p,u}})},a1c7:function(t,a,s){"use strict";s("652e")},bb51:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"loadingio-spinner-eclipse-lg0fund9b9s"},[s("div",{staticClass:"ldio-lwdwtvp1lzs"},[s("div")])])]),s("header",{staticClass:"heard"},[s("h1",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[t._v("Play Art")])],1),s("hr"),s("p",{staticClass:"subTitle"},[t._v("Art Gallery")]),t._m(0),s("ul",{staticClass:"menu"},[s("li",[s("router-link",{attrs:{to:"/about"}},[s("span",[t._v("關於我們")]),s("span",[t._v("About Us")])])],1),s("li",[s("router-link",{attrs:{to:"/painter"}},[s("span",[t._v("畫家介紹")]),s("span",[t._v("Painter")])])],1),s("li",[s("router-link",{attrs:{to:"/products"}},[s("span",[t._v("畫作總覽")]),s("span",[t._v("Painting")])])],1),s("li",[s("router-link",{attrs:{to:"/login"}},[s("span",[t._v("會員登入")]),s("span",[t._v("Login In")])])],1),s("li",{staticStyle:{position:"relative"}},[s("router-link",{attrs:{to:"/carts_step1"}},[s("span",[t._v("購物車")]),s("span",[t._v("Shopping"),t.carts.length?s("div",{staticClass:"badge badge-danger rounded-circle shopNum"},[t._v(t._s(t.carts.length))]):t._e()])])],1)]),t._m(1)]),t._m(2),s("section",{staticClass:"carousel"},[s("Swiper")],1),s("section",{staticClass:"featuredPainting"},[s("div",{staticClass:"container"},[t._m(3),s("ul",{staticClass:"painting"},t._l(t.products.slice(0,6),(function(a){return s("li",{key:a.id},[s("div",{staticClass:"img"},[s("img",{attrs:{src:a.imageUrl,alt:"商品圖片"}})]),s("router-link",{staticClass:"more",attrs:{to:"/product/"+a.id}},[t._v("查看更多")]),s("div",{staticClass:"tag"},[t._v(t._s(a.category))]),s("div",{staticClass:"content"},[s("h2",[t._v(t._s(a.title))]),s("div",{staticClass:"addtoCart"},[s("div",{staticClass:"price"},[t._v(t._s(t._f("money")(a.price)))]),s("button",{staticClass:"btn",attrs:{type:"button",disabled:t.loadingBtn===a.id},on:{click:function(s){return t.addToCart(a.id)}}},[t._v("加入購物車"),t.loadingBtn===a.id?s("span",{staticClass:"spinner-border spinner-border-sm ml-3"}):t._e()])])])],1)})),0)])]),s("section",{staticClass:"ArtPainter"},[s("div",{staticClass:"container"},[t._m(4),s("ul",{staticClass:"art"},[s("li",[s("div",{staticClass:"img",staticStyle:{"background-image":"url(./img/RileyTucker1.jpg)"},attrs:{alt:"RileyTucker"}}),s("div",{staticClass:"artContent"},[s("h2",[t._v("Riley Tucker")]),s("p",[t._v("擅長油畫、水彩畫")]),s("router-link",{staticClass:"goArt",attrs:{to:"/painter"}},[t._v("查看更多")])],1)]),s("li",[s("div",{staticClass:"img",staticStyle:{"background-image":"url(./img/ElsieWatkins1.jpg)"},attrs:{alt:"ElsieWatkins"}}),s("div",{staticClass:"artContent"},[s("h2",[t._v("Elsie Watkins")]),s("p",[t._v("擅長壓克力畫、油畫、水彩畫")]),s("router-link",{staticClass:"goArt",attrs:{to:"/painter"}},[t._v("查看更多")])],1)]),s("li",[s("div",{staticClass:"img",staticStyle:{"background-image":"url(./img/ClydeLowe1.jpg)"},attrs:{alt:"ClydeLowe"}}),s("div",{staticClass:"artContent"},[s("h2",[t._v("Clyde Lowe")]),s("p",[t._v("擅長油畫、水彩畫")]),s("router-link",{staticClass:"goArt",attrs:{to:"/painter"}},[t._v("查看更多 ")])],1)]),s("li",[s("div",{staticClass:"img",staticStyle:{"background-image":"url(./img/DuaneMorris1.jpg)"},attrs:{alt:"DuaneMorris"}}),s("div",{staticClass:"artContent"},[s("h2",[t._v("Duane Morris")]),s("p",[t._v("擅長壓克力畫、水彩畫、素描")]),s("router-link",{staticClass:"goArt",attrs:{to:"/painter"}},[t._v("查看更多")])],1)])])])]),t._m(5),s("Footer")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"outerMenu"},[s("div",{staticClass:"showMenu"},[s("div",{staticClass:"line1"}),s("div",{staticClass:"line2"}),s("div",{staticClass:"line3"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"downArrow"},[s("i",{staticClass:"fas fa-sort-down"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"saying"},[s("h2",[t._v("Enjoy Art")]),s("p",[t._v("用心感受藝術，藝術從心開始")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("h2",{staticClass:"twTitle"},[t._v("精"),s("span",[t._v("選畫作")])]),s("h2",{staticClass:"enTitle"},[t._v("F"),s("span",[t._v("eatured")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("h2",{staticClass:"twTitle"},[t._v("藝"),s("span",[t._v("廊畫家")])]),s("h2",{staticClass:"enTitle"},[t._v("P"),s("span",[t._v("ainter")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"contactUs"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("h2",{staticClass:"twTitle"},[t._v("聯"),s("span",[t._v("絡我們")])]),s("h2",{staticClass:"enTitle"},[t._v("C"),s("span",[t._v("ontact Us")])])]),s("div",{staticClass:"contactConetnt"},[s("div",{staticClass:"map"},[s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.218902229678!2d121.57150519478307!3d25.026644247102364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb2aa14c685%3A0xf99ff822dd7cdd15!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5YWt5ZCI6YeM!5e0!3m2!1szh-TW!2stw!4v1609083322233!5m2!1szh-TW!2stw",width:"100%",height:"100%",frameborder:"0","aria-hidden":"false",tabindex:"0"}})]),s("form",{staticClass:"contact"},[s("label",{attrs:{for:"name"}},[t._v(" 您的姓名")]),s("input",{attrs:{id:"name",type:"text",placeholder:"請輸入姓名"}}),s("label",{attrs:{for:"tel"}},[t._v(" 您的電話")]),s("input",{attrs:{id:"tel",type:"tel",placeholder:"請輸入電話"}}),s("label",{attrs:{for:"email"}},[t._v(" 您的電子郵件")]),s("input",{attrs:{id:"email",type:"email",placeholder:"請輸入電子郵件"}}),s("label",{attrs:{for:"message"}},[t._v(" 您想說的話")]),s("textarea",{attrs:{id:"message",placeholder:"請輸入寶貴意見",name:"message"}}),s("input",{staticClass:"btn",attrs:{type:"button",value:"送出"}})])])])])}],r=(s("99af"),function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)}),n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"swiper-container",attrs:{id:"swiper1"}},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel1.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel2.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel3.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel4.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel5.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel6.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel7.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel8.jpg)"}}),s("div",{staticClass:"swiper-slide swiper1",staticStyle:{"background-image":"url(./img/carousel9.jpg)"}})])])])}],c={name:"caroler",data:function(){return{}},mounted:function(){new Swiper("#swiper1",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",autoplay:{disableOnInteraction:!1},coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},mousewheel:!0,keyboard:!0})}},l=c,o=(s("a1c7"),s("2877")),d=Object(o["a"])(l,r,n,!1,null,"d50a6efe",null),u=d.exports,p=s("fd2d"),v={components:{Swiper:u,Footer:p["a"]},data:function(){return{products:[],loadingBtn:"",isLoading:!1,carts:[]}},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api/").concat("b894194b-255d-4873-ad18-cecd22084198","/ec/products?page=").concat(a);this.axios.get(s).then((function(a){t.products=a.data.data,t.isLoading=!1})).catch((function(){t.isLoading=!1}))},addToCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loadingBtn=t;var i="".concat("https://course-ec-api.hexschool.io/api/").concat("b894194b-255d-4873-ad18-cecd22084198","/ec/shopping"),e={product:t,quantity:s};this.axios.post(i,e).then((function(){a.loadingBtn="",a.$bus.$emit("getcart"),a.$bus.$emit("message","成功加入購物車","success")})).catch((function(t){a.loadingBtn="";var s=t.response.data.errors[0];a.$bus.$emit("message",s,"danger")}))},getcart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("b894194b-255d-4873-ad18-cecd22084198","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data,t.updateTotal(),t.isLoading=!1})).catch((function(){t.isLoading=!1}))}},created:function(){var t=this;this.getProducts(),this.getcart(),this.$bus.$on("getcart",(function(){t.getcart()}))},mounted:function(){$(".downArrow").click((function(t){t.preventDefault(),$("html,body").animate({scrollTop:900},1e3)})),$(".outerMenu").click((function(){$("body").toggleClass("openmenu")})),$(".showMenu").click((function(){$(this).toggleClass("active")}))}},g=v,h=Object(o["a"])(g,i,e,!1,null,null,null);a["default"]=h.exports},fd2d:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"footerMenu"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"menu"},[s("li",[s("router-link",{attrs:{to:"/about"}},[s("span",[t._v("關於我們")]),s("span",[t._v("About Us")])])],1),s("li",[s("router-link",{attrs:{to:"/painter"}},[s("span",[t._v("畫家介紹")]),s("span",[t._v("Painter")])])],1),s("li",[s("router-link",{attrs:{to:"/products"}},[s("span",[t._v("畫作總覽")]),s("span",[t._v("Painting")])])],1),s("li",[s("router-link",{attrs:{to:"/login"}},[s("span",[t._v("會員登入")]),s("span",[t._v("Login In")])])],1),s("li",[s("router-link",{attrs:{to:"/carts_step1"}},[s("span",[t._v("購物車")]),s("span",[t._v("Shopping"),t.carts.length?s("div",{staticClass:"badge badge-danger rounded-circle shopNum"},[t._v(t._s(t.carts.length))]):t._e()])])],1)])])]),s("footer",{staticClass:"footer"},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[t._v("Play Art")])],1),t._m(0),t._m(1)]),t._m(2)])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"galleryMessage"},[s("li",[s("h2",[t._v("Address")]),s("h3",[t._v("台灣台北市信義區六合里50號")])]),s("li",[s("h2",[t._v("Contacts")]),s("h3",[t._v("playArt@gmail.com")])]),s("li",[s("h2",[t._v("Office")]),s("h3",[t._v("New York 7766 State")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"socal"},[s("li",[s("i",{staticClass:"fab fa-facebook-square"})]),s("li",[s("i",{staticClass:"fab fa-instagram"})]),s("li",[s("i",{staticClass:"fab fa-github"})]),s("li",[s("i",{staticClass:"far fa-envelope"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"copyRight"},[s("h4",[t._v("© Copyright 2020 PLAY ART- All Rights Reserved")])])}],r=(s("99af"),{data:function(){return{carts:[]}},methods:{getcart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("b894194b-255d-4873-ad18-cecd22084198","/ec/shopping");this.axios.get(a).then((function(a){t.carts=a.data.data,t.isLoading=!1})).catch((function(){t.isLoading=!1}))}},created:function(){var t=this;this.getcart(),this.$bus.$on("getcart",(function(){t.getcart()}))}}),n=r,c=s("2877"),l=Object(c["a"])(n,i,e,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-6b2e877e.ec2280cb.js.map