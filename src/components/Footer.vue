<template lang="pug">
  div
    section.footerMenu
      .container
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
          li
            router-link(to="/carts_step1")
              span 購物車
              span Shopping
                .badge.badge-danger.rounded-circle.shopNum( v-if="carts.length") {{ carts.length }}
    footer.footer
      .logo
        router-link(to="/") Play Art
      ul.galleryMessage
        li
          h2 Address
          h3 台灣台北市信義區六合里50號
        li
          h2 Contacts
          h3 playArt@gmail.com
        li
          h2 Office
          h3 New York 7766 State
      ul.socal
        li
          i.fab.fa-facebook-square
        li
          i.fab.fa-instagram
        li
          i.fab.fa-github
        li
          i.far.fa-envelope
    
    footer.copyRight
      h4 © Copyright 2020 PLAY ART- All Rights Reserved
</template>

<script>
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
  }
};
</script>
