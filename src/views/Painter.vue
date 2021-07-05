<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.painterBanner
    section.painter
      .container
        .title
          h2.twTitle 畫
            span 家介紹
          h2.enTitle P
            span ainter
        .tabContainer
          ul.tabTags
            li.tab.active#RileyTucker  Riley Tucker
            li.tab#ElsieWatkins  Elsie Watkins
            li.tab#ClydeLowe Clyde Lowe
            li.tab#DuaneMorris  Duane Morris
          .innerContent
            //- 第一個畫家
            .tabInner.active
              .painterInfo
                .pic
                  img(src="../../public/img/RileyTucker2.jpg" alt="RileyTucker")
                .info 
                  p Riley Tucker 創作經驗 10 年，擅長油畫、水彩畫，並以寫實風景畫及人像傳達心境，其中山水畫深得人心，並屢屢獲獎無數
                  ul
                    li 2010 年逐蹟之旅，逐蹟獎第一名
                    li 2010 第三屆國際繪畫第二名
                    li 2012 第一屆國際山水畫第一名
                    li 2013 第三屆國際繪畫第一名
                    li 2015 第四屆國際山水畫第一名 
                    li 2018 第七屆國際山水畫第一名
              .painterPainting
                .title
                  h2.twTitle 相
                    span 關畫作
                  h2.enTitle P
                    span ainting
                .swiperOuter
                  .swiper-container#swiper1
                    .swiper-wrapper
                      .swiper-slide(v-for="item in products" :key="item.id")
                        ul.paintingContent
                          li
                            .img
                              img(:src="item.imageUrl" alt="商品圖片")
                            router-link.more(:to="`/product/${item.id}`" ) 查看更多
                            .tag {{ item.category }}
                            .content
                              h2 {{ item.title }}
                              .addtoCart
                                .price {{ item.price | money }}
                                button.btn(type="button" @click="addToCart(item.id)" :disabled="loadingBtn === item.id") 加入購物車
                                  span.spinner-border.spinner-border-sm.ml-3(v-if="loadingBtn === item.id")
                  .swiper-button-next.swiper1
                  .swiper-button-prev.swiper1
                  Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
                  
            //- 第二個畫家  
            .tabInner
              .painterInfo
                .pic
                  img(src="../../public/img/ElsieWatkins2.jpg" alt="ElsieWatkins")
                .info 
                  p Elsie Watkins 創作經驗 15 年，擅長壓克力畫、油畫、水彩畫，並以寫實風景畫及花草傳達心境，其中風景畫深得人心，並屢屢獲獎無數
                  ul
                    li 2012 第五屆國際繪畫第二名
                    li 2015 第四屆國際風景畫第一名
                    li 2016 第九屆國際繪畫第一名
                    li 2018 第七屆國際風景畫第一名 
                    li 2020 第九屆國際風景畫第一名
              .painterPainting
                .title
                  h2.twTitle 相
                    span 關畫作
                  h2.enTitle P
                    span ainting
                .swiperOuter
                  .swiper-container#swiper2
                    .swiper-wrapper
                      .swiper-slide(v-for="item in products" :key="item.id")
                        ul.paintingContent
                          li
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
                  .swiper-button-next.swiper2
                  .swiper-button-prev.swiper2
                  Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
                  
            //- 第三個畫家     
            .tabInner
              .painterInfo
                .pic
                  img(src="../../public/img/ClydeLowe2.jpg" alt="ClydeLowe")
                .info 
                  p Clyde Lowe 創作經驗 13 年，擅長油畫、水彩畫，並以生活寫實及人像傳達心境，其中寫實畫深得人心，並屢屢獲獎無數
                  ul
                    li 2012 第五屆國際繪畫第二名
                    li 2015 第四屆國際寫實畫第一名
                    li 2016 第九屆國際繪畫第一名
                    li 2018 第七屆國際寫實畫第一名 
                    li 2020 第九屆國際寫實畫第一名
                    li 2020 年逐蹟之旅，逐蹟獎第一名
              .painterPainting
                .title
                  h2.twTitle 相
                    span 關畫作
                  h2.enTitle P
                    span ainting
                .swiperOuter
                  .swiper-container#swiper3
                    .swiper-wrapper
                      .swiper-slide(v-for="item in products" :key="item.id")
                        ul.paintingContent
                          li
                            .img
                              img(:src="item.imageUrl" alt="商品圖片")
                            router-link.more(:to="`/product/${item.id}`")  查看更多
                            .tag {{ item.category }}
                            .content
                              h2 {{ item.title }}
                              .addtoCart
                                .price {{ item.price | money }}
                                button.btn(type="button" @click="addToCart(item.id)" :disabled="loadingBtn === item.id") 加入購物車
                                  span.spinner-border.spinner-border-sm.ml-3(v-if="loadingBtn === item.id")
                  .swiper-button-next.swiper3
                  .swiper-button-prev.swiper3
                  Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
                  
            //- 第四位畫家     
            .tabInner
              .painterInfo
                .pic
                  img(src="../../public/img/DuaneMorris2.jpg" alt="DuaneMorris")
                .info 
                  p Duane Morris 創作經驗 20 年，擅長壓克力畫、水彩畫、素描，並以人像及風景傳達心境，其中風景畫深得人心，並屢屢獲獎無數
                  ul
                    li 2013 第五屆國際繪畫第二名
                    li 2015 第四屆國際風景畫第一名
                    li 2017 第九屆國際繪畫第一名
                    li 2018 第七屆國際風景畫第二名 
                    li 2020 第九屆國際風景畫第一名
                    li 2020 年逐蹟之旅，逐蹟獎第一名
              .painterPainting
                .title
                  h2.twTitle 相
                    span 關畫作
                  h2.enTitle P
                    span ainting
                .swiperOuter
                  .swiper-container#swiper4
                    .swiper-wrapper
                      .swiper-slide(v-for="item in products" :key="item.id")
                        ul.paintingContent
                          li
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
                  .swiper-button-next.swiper4
                  .swiper-button-prev.swiper4
                  Pagination.pagination(:pages="pagination" @update="getProducts" class="justify-content-center")
</template>

<script>
/* global $ */
import Pagination from "@/components/Pagination.vue";
export default {
  name: "painter",
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
  created() {
    this.getProducts();
  },
  mounted() {
    this.tab();
    //swiper
    // eslint-disable-next-line no-undef
    new Swiper("#swiper1", {
      slidesPerView: 3,
      spaceBetween: 20, //間距
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
        nextEl: ".swiper1.swiper-button-next",
        prevEl: ".swiper1.swiper-button-prev "
      },
      observer: true,
      observeParents: true
    });
    // eslint-disable-next-line no-undef
    new Swiper("#swiper2", {
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
        nextEl: ".swiper2.swiper-button-next",
        prevEl: ".swiper2.swiper-button-prev "
      },
      observer: true,
      observeParents: true
    });
    // eslint-disable-next-line no-undef
    new Swiper("#swiper3", {
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
        nextEl: ".swiper3.swiper-button-next",
        prevEl: ".swiper3.swiper-button-prev "
      },
      observer: true,
      observeParents: true
    });
    // eslint-disable-next-line no-undef
    new Swiper("#swiper4", {
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
        nextEl: ".swiper4.swiper-button-next",
        prevEl: ".swiper4.swiper-button-prev "
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
