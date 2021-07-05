<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.product
      .container
        .productContent
          .pic
            img(:src="product.imageUrl[0]" alt="商品圖片")
          .info
            .textContent
              h2.title {{ product.title }}
              p.description {{ product.description }}
            .addProduct
              .number
                button.btn.btn-outline-primary.rounded-0.p-3( type="button" @click="product.num --" :disabled=" product.num === 1" ) -
                input.num(type="number"  min="1" v-model="product.num" ) 
                button.btn.btn-outline-primary.rounded-0.p-3(@click="product.num ++") +
              .price {{ product.num * product.price | money }}
              .addbtn(@click="addToCart(product.id,product.num)") 加入購物車
          .back 
            i.fas.fa-angle-left
            router-link.span(to="/products") Back
    section.type
      .container
        .title
          h2.twTitle 同
            span 類型畫作
          h2.enTitle S
            span ame type
        .swiperOuter
          .swiper-container#swiper5
            .swiper-wrapper
              .swiper-slide(v-for =" item in filter" :key="item.id + 1")
                ul.paintingContent
                  li
                    .img
                      img(:src="item.imageUrl" alt="商品圖片")
                    a.more(href="#" @click.prevent="jump(item)") 查看更多
                    .tag {{ item.category }}
                    .content
                      h2 {{ item.title }}
                      .addtoCart
                        .price {{ item.price | money }}
                        button.btn(type="button" @click="addToCart(item.id)") 加入購物車
          .swiper-button-next.swiper5
          .swiper-button-prev.swiper5
          Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      products: [],
      product: {
        imageUrl: []
      },
      isLoading: false,
      pagination: {},
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
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    getProduct() {
      this.isLoading = true;
      const id = this.$route.params.id;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.axios
        .get(url)
        .then(res => {
          this.product = res.data.data;
          this.$set(this.product, "num", 1);
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    //跳到當前頁，重新轉跳到新頁面
    jump(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${item.id}`;
      this.axios
        .get(url)
        .then(res => {
          this.$router.push(`/product/${item.id}`);
          this.product = res.data.data;
          this.$set(this.product, "num", 1);
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    addToCart(id, quantity = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity
      };
      this.axios
        .post(url, cart)
        .then(() => {
          //購物車顯示數量
          this.$bus.$emit("getcart");
          //toasts
          this.$bus.$emit("message", "成功加入購物車", "success");
          this.isLoading = false;
        })
        .catch(error => {
          const errors = error.response.data.errors[0];
          this.$bus.$emit("message", errors, "danger");
          this.isLoading = false;
        });
    }
  },
  computed: {
    filter() {
      return this.products.filter(
        item => item.category === this.product.category
      );
    }
  },
  created() {
    this.getProducts();
    this.getProduct();
  },
  mounted() {
    // eslint-disable-next-line no-undef
    new Swiper("#swiper5", {
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        800: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        //當寬度大於等於700
        700: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        //當寬度大於等於320
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      },
      navigation: {
        nextEl: ".swiper5.swiper-button-next",
        prevEl: ".swiper5.swiper-button-prev "
      },
      observer: true,
      observeParents: true
    });
  }
};
</script>

<style lang="sass" scoped>
.swiper-button-next
  top: 250px
  &:focus
    outline: 0
.swiper-button-prev
  top: 250px
  left: -10px
  &:focus
    outline: 0

.swiper-button-next:after
  background-image: url(../../public/img/rightarrow.png)
.swiper-button-prev:after
  background-image: url(../../public/img/leftArrow.png)

.swiper-button-next:after,.swiper-button-prev:after
  content: ""
  background-size: cover
  background-position: center center
  color: #fff
  width: 25px
  height: 42px
  background-color: rgba(gray,0.4)
  border: 2px solid #fff
  padding: 5px 20px 10px 20px
  border-radius: 50%

.swiperOuter
  position: relative
</style>
