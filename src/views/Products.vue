<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.productsBanner
    section.products
      .container
        .title
          h2.twTitle 畫
            span 作介紹
          h2.enTitle P
            span ainting
        .tabContainer
          ul.tabTags
            li.tab.active 水彩畫
            li.tab 油畫
            li.tab 壓克力畫
            li.tab 素描
          .innerContent
            //- 水彩畫
            .tabInner.active
              ul.gallery
                li(v-for="item in Watercolor" :key="item.id")
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
              Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
            //- 油畫
            .tabInner
              ul.gallery
                li(v-for="item in oil" :key="item.id")
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
              Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
            //- 壓克力畫
            .tabInner
              ul.gallery
                li(v-for="item in Acrylic" :key="item.id")
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
              Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
            //- 素描
            .tabInner
              ul.gallery
                li(v-for="item in sketch" :key="item.id")
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
              Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
</template>

<script>
/* global $ */

import Pagination from "@/components/Pagination.vue";

export default {
  name: "products",
  components: {
    Pagination
  },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      loadingBtn: ""
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
          this.pagination = res.data.meta.pagination;
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
          //toasts
          const errors = error.response.data.errors[0];
          this.$bus.$emit("message", errors, "danger");
        });
    },
    tab() {
      $(".tab").each(function(index) {
        $(this).click(function(e) {
          e.preventDefault();
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
          $(".tabInner")
            .eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        });
      });
    }
  },
  computed: {
    Watercolor() {
      return this.products.filter(item => item.category === "水彩畫");
    },
    oil() {
      return this.products.filter(item => item.category === "油畫");
    },
    Acrylic() {
      return this.products.filter(item => item.category === "壓克力畫");
    },
    sketch() {
      return this.products.filter(item => item.category === "素描");
    }
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.tab();
  }
};
</script>
