<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.orderSuccess
      .orderContent
        .text
          h3.title.font-weight-bold STEP 4
            span 購買成功
        .paymement.mb-3.font-weight-bold
          h5.font-weight-bold 付款狀態
            span.text-success.ml-3(v-if="order.paid == true") 已付款
            span.text-danger.ml-3(v-else) 付款未成功，請聯絡客服人員
          h5.font-weight-bold.mb-2.mt-2 訂單資訊
        .content
          table.table
            tr(v-for="(item,i) in order.products" :key="i")
              th.text-left(width="140")
                h6.font-weight-bold.mb-2 產品圖
                img( :src="item.product.imageUrl" style="width:50px;height:50px" alt="商品圖片")
              th(width="170")
                h6.font-weight-bold.mb-2  產品名
                h6 {{ item.product.title }}
              th(width="130")
                h6.font-weight-bold.mb-2.text-center 數量
                h6.text-center {{ item.quantity }}
              th.text-right(width="140") 
                h6.font-weight-bold.mb-2 價格
                h6 {{ item.quantity * item.product.price | money }}
            tr.total
              td(colspan="2") 共 {{ order.products.length }} 件
              td 總計
              td.text-right {{ order.amount | money }}
        router-link.continueShop.mt-4.p-3.d-block.btn.btn-primary(to="/products") 繼續購物
      .pic
        img(src="../../public/img/success_shop.jpg" alt="結帳成功圖片")
</template>

<script>
export default {
  name: "successOrder",
  data() {
    return {
      order: {
        amount: "",
        products: []
      },
      isLoading: false
    };
  },
  methods: {
    getOrders() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      this.axios
        .get(url)
        .then(res => {
          this.order = res.data.data[0];
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getOrders();
  }
};
</script>
