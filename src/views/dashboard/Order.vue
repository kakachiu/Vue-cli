<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    .mt-4
      .table-responsive-sm
        table.table.table-hover
          thead
            tr
              th(scope='col' style='width: 100px') 下單時間
              th(scope='col' style='width: 100px') 購買商品
              th(scope='col' style='width: 100px') 購買方式
              th(scope='col' style='width: 100px') 應付金額
              th(scope='col' style='width: 200px') 是否付款
          tbody
            tr(v-for='item in orders' :key='item.id')
              td {{ item.created.datetime }}
              td
                ul(v-for='(product, i) in item.products' :key='i')
                  li {{ product.product.title }}
              td {{ item.payment }}
              td {{ item.amount | money }}
              td
                span.text-success(v-if='item.paid == true') 已付款
                span.text-danger(v-else) 尚未付款
      pagination.py-4(:pages='pagination' @update='getOrders')
</template>
<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      isLoading: false,
      orders: [],
      pagination: {}
    };
  },
  methods: {
    getOrders(num = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${num}`;
      this.axios
        .get(url)
        .then(res => {
          this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
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
