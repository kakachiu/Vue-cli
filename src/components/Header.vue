<template lang="pug">
  div
    header.headerMenu
      .container.content
        h1.brandLogo 
          router-link(to="/") Play Art
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
                .badge.badge-danger.rounded-circle.shopNum( v-if="carts.length") {{ carts.length }}
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      carts: []
    };
  },
  methods: {
    getcart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios
        .get(url)
        .then(res => {
          this.carts = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getcart();
    this.$bus.$on("getcart", () => {
      this.getcart();
    });
  },
  mounted() {
    //手機 menu
    $(".outerMenu").click(function() {
      $("body").toggleClass("openmenu");
    });
    $(".menu li span").click(function() {
      $("body").removeClass("openmenu");
    });
  }
};
</script>
