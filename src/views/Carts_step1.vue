<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.cartBanner
    section.cart
      .cartContent
        ul.step_step1
          li.step1
            p.title STEP
              span 1
            p.text 確認購物清單
          i.fas.fa-chevron-circle-right.front
          li.step2
            p.title STEP
              span 2
            p.text 填寫訂購資料
          i.fas.fa-chevron-circle-right.front
          li.step3
            p.title STEP
              span 3
            p.text 付款/完成訂單
        .outer
          span(v-if="carts.length")
            .d-flex.justify-content-end
              button.btn.btn-outline-danger.mb-3.p-2(type='button' @click='delAllProducts') 全部刪除
            .tableOuter
              table.table
                tr
                  th(style="text-align: left ;width: 200px") 產品圖
                  th(class="text-center" style="width: 250px") 產品名
                  th(class="text-center") 數量
                  th(style="text-align: right;width: 200px") 價格
                  th(style="text-align: center " ) 刪除
                tr(v-for="item in carts" :key="item.product.id + 1")
                  td
                    img(:src="item.product.imageUrl" alt="商品圖片")
                  td(style="text-align: left") {{ item.product.title }}
                  td
                    .number
                      button.btn.btn-outline-primary.rounded-0.px-3(type="button" :disabled="item.quantity == 1" @click="item.quantity -- ; updateQuantity(item.product.id,item.quantity)") -
                      input.num(type="number" value="1" v-model="item.quantity"  min="1"  @change="updateQuantity(item.product.id,item.quantity)")
                      button.btn.btn-outline-primary.rounded-0.px-3(type="button" @click="item.quantity ++ ; updateQuantity(item.product.id,item.quantity)") +
                  td(style="text-align: right") {{ item.quantity * item.product.price | money }}
                  td(style="text-align: center")
                    .delete(@click="delProduct(item.product.id)")
                      i.far.fa-trash-alt
                tr.total
                  td(colspan="3") 共 {{ carts.length }} 件
                  td 總計
                  td(width="200px") {{ cartTotal | money }}
            .otherBtn
              router-link.prev(to="/products") 繼續選購
              router-link.btn.btn-danger.p-3(to="/carts_step2") 填寫訂購資料
          span.d-block.text-center.py-5.text-primary.font-weight-bold.h3(v-else) 購物車尚未有商品
            router-link.btn.btn-outline-primary.ml-4.p-3(to="/products") 前往購物
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      isLoading: false
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
          this.updateTotal();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    updateTotal() {
      this.cartTotal = 0;
      this.carts.forEach(item => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },
    updateQuantity(id, quantity) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity
      };
      this.axios
        .patch(url, cart)
        .then(() => {
          this.getcart();
        })
        .catch(() => {});
    },
    delProduct(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios
        .delete(url)
        .then(() => {
          this.getcart();
          //toasts
          this.$bus.$emit("message", "刪除成功", "success");
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    delAllProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.axios
        .delete(url)
        .then(() => {
          this.getcart();
          //toasts
          this.$bus.$emit("message", "購物車已清空", "success");
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getcart();
  }
};
</script>
