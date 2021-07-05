<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    header.heard
      h1.logo
        router-link(to="/") Play Art
      hr
      p.subTitle Art Gallery
      .outerMenu
        .showMenu
          .line1
          .line2
          .line3
      ul.menu
        li
          router-link(to="/about")
            span 關於我們
            span About Us
        li
          router-link(to="/painter")
            span 畫家介紹
            span Painter
        li
          router-link(to="/products")
            span 畫作總覽
            span Painting
        li
          router-link(to="/login")
            span 會員登入
            span Login In
        li(style="position:relative")
          router-link(to="/carts_step1")
            span 購物車
            span Shopping
              .badge.badge-danger.rounded-circle.shopNum(v-if="carts.length") {{ carts.length }}
      .downArrow
        i.fas.fa-sort-down

    section.saying
      h2 Enjoy Art
      p 用心感受藝術，藝術從心開始
    
    section.carousel
      Swiper

    section.featuredPainting
      .container
        .title
          h2.twTitle 精
            span 選畫作
          h2.enTitle F
            span eatured
        ul.painting
          li(v-for="item in products.slice(0,6)" :key="item.id")
            .img
              img(:src="item.imageUrl" alt="商品圖片")
            router-link.more(:to="`/product/${item.id}`") 查看更多
            .tag {{ item.category }}
            .content
              h2 {{ item.title }}
              .addtoCart
                .price {{ item.price | money }}
                button.btn(type="button" @click="addToCart(item.id)" :disabled="loadingBtn === item.id") 加入購物車
                  span.spinner-border.spinner-border-sm.ml-3(v-if="loadingBtn === item.id") 
    section.ArtPainter
      .container
        .title
          h2.twTitle 藝
            span 廊畫家
          h2.enTitle P
            span ainter
        ul.art
          li
            .img(style='background-image:url(./img/RileyTucker1.jpg)' alt="RileyTucker")
            .artContent
              h2 Riley Tucker
              p 擅長油畫、水彩畫
              router-link.goArt(to="/painter") 查看更多
          li
            .img(style='background-image:url(./img/ElsieWatkins1.jpg)' alt="ElsieWatkins")
            .artContent
              h2 Elsie Watkins
              p 擅長壓克力畫、油畫、水彩畫
              router-link.goArt(to="/painter") 查看更多
          li
            .img(style='background-image:url(./img/ClydeLowe1.jpg)' alt="ClydeLowe")
            .artContent
              h2 Clyde Lowe
              p 擅長油畫、水彩畫
              router-link.goArt(to="/painter") 查看更多    
          li
            .img(style='background-image:url(./img/DuaneMorris1.jpg)' alt="DuaneMorris")
            .artContent
              h2 Duane Morris
              p 擅長壓克力畫、水彩畫、素描
              router-link.goArt(to="/painter") 查看更多

    section.contactUs
      .container
        .title
          h2.twTitle 聯
            span 絡我們
          h2.enTitle C
            span ontact Us
        .contactConetnt
          .map
            iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.218902229678!2d121.57150519478307!3d25.026644247102364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb2aa14c685%3A0xf99ff822dd7cdd15!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5YWt5ZCI6YeM!5e0!3m2!1szh-TW!2stw!4v1609083322233!5m2!1szh-TW!2stw', width='100%', height='100%', frameborder='0', style='border:0;', aria-hidden='false', tabindex='0')

          form.contact
            label(for="name")  您的姓名
            input#name(type="text" placeholder="請輸入姓名")
            label(for="tel")  您的電話
            input#tel(type="tel" placeholder="請輸入電話")
            label(for="email")  您的電子郵件
            input#email(type="email" placeholder="請輸入電子郵件")
            label(for="message")  您想說的話
            textarea#message(placeholder="請輸入寶貴意見" name="message")
            input.btn(type="button" value="送出") 
    Footer 
</template>

<script>
/* global $ */

import Swiper from "@/components/Swiper.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Swiper,
    Footer
  },
  data() {
    return {
      products: [],
      loadingBtn: "",
      isLoading: false,
      carts: []
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?page=${page}`;
      this.axios
        .get(url)
        .then(res => {
          this.products = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    addToCart(id, quantity = 1) {
      this.loadingBtn = id;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity
      };
      this.axios
        .post(url, cart)
        .then(() => {
          this.loadingBtn = "";
          //購物車顯示數量
          this.$bus.$emit("getcart");
          //toasts
          this.$bus.$emit("message", "成功加入購物車", "success");
        })
        .catch(error => {
          this.loadingBtn = "";
          const errors = error.response.data.errors[0];
          this.$bus.$emit("message", errors, "danger");
        });
    },
    getcart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios
        .get(url)
        .then(res => {
          this.carts = res.data.data;
          this.updateTotal();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getProducts();
    this.getcart();
    this.$bus.$on("getcart", () => {
      this.getcart();
    });
  },
  mounted() {
    $(".downArrow").click(function(e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 900
        },
        1000
      );
    });
    //手機 menu
    $(".outerMenu").click(function() {
      $("body").toggleClass("openmenu");
    });
    $(".showMenu").click(function() {
      $(this).toggleClass("active");
    });
  }
};
</script>
