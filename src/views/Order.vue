<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.cartBanner
    section.cart
      .cartContent
        ul.step_step3
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
        .listTitle 購物訂單
        .tableOuter
          table.table
            thead
              tr
                th(scope='col' width="180") 購買時間
                th(scope='col' width="100") 購買方式
                th(scope='col') 產品詳情
                th(scope='col' width="150") 應付金額
            tbody
              tr
                td 
                  h6 {{ order.created.datetime }}
                td 
                  h6 {{ order.payment }}
                td
                  ul
                    li( v-for="(item,i) in order.products" :key="i")
                      .d-flex.align-items-center
                        h6.w-75.mr-2 {{ item.product.title }}
                        h6
                          span.mt-2.d-block
                            img(:src="item.product.imageUrl" alt="商品圖片") 
                td {{ order.amount | money }}

        .listTitle 資料明細
        .tableOuter
          table.table.table-hover.mb-5
            tbody
              tr
                th(scope='col' width="200") 姓名
                td(scope='col') {{ order.user.name }}
              tr
                th(scope='row') 電話
                td {{ order.user.tel }}
              tr
                th(scope='row') 地址
                td {{ order.user.address }}
              tr
                th(scope='row') 付款狀態
                td 
                  span.text-danger(v-if="order.paid === false") 未付款
                  span.text-success(v-else) 已付款
        .ckeckPay
          button.btn.btn-danger.p-3(type="button" @click="pay") 確認付款
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      order: {
        amount: "",
        created: {
          datetime: ""
        },
        products: [
          {
            product: {
              title: ""
            }
          }
        ],
        user: {
          name: "",
          tel: "",
          address: ""
        }
      },
      isLoading: false,
      orderId: this.$route.params.id
    };
  },
  methods: {
    getOrder(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${id}`;
      this.axios
        .get(url)
        .then(res => {
          this.order = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.$bus.$emit("message", "訂單填寫失敗", "danger");
          this.isLoading = false;
        });
    },
    pay() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;
      this.axios
        .post(url)
        .then(() => {
          this.$bus.$emit("message", "已完成付款", "success");
          this.$router.push("/Successorder");
        })
        .catch(() => {
          this.$bus.$emit("message", "已完成付款", "danger");
        });
    }
  },
  created() {
    this.getOrder(this.orderId);
  }
};
</script>
