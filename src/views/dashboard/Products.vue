<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    .text-right.mt-4
      button.btn.btn-primary(@click="openModal('new')") 建立新的產品
    .table-responsive
      table.table.mt-4.table-hover
        thead
          tr
            th(width='120') 分類
            th 產品名稱
            th(width='120') 原價
            th(width='120') 售價
            th(width='100') 是否啟用
            th(width='150') 編輯
        tbody
          tr(v-for='item in products' :key='item.id')
            td {{ item.category }}
            td {{ item.title }}
            td.text-right {{ item.origin_price | money }}
            td.text-right {{ item.price | money }}
            td
              span.text-success(v-if='item.enabled') 啟用
              span.text-danger(v-else) 未啟用
            td
              .btn-group
                button.btn.btn-outline-primary.btn-sm(@click="openModal('edit', item)" :disabled='loadingBtn === item.id')
                  span.spinner-grow.spinner-grow-sm(role='status' aria-hidden='true' v-if='loadingBtn === item.id') 
                  | 編輯
                button.btn.btn-outline-danger.btn-sm(@click="openModal('delete', item)" :disabled='delLoadingBtn === item.id')
                  span.spinner-grow.spinner-grow-sm(role='status' aria-hidden='true' v-if='delLoadingBtn === item.id')
                  | 刪除

    //- pagination
    pagination.py-4(:pages='pagination' @update='getProducts')

    //- modal
    #productModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true' data-backdrop='static')
      modal(:product='tempProduct' @update='getProducts')

    //- 刪除的 modal
    #delProductModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true' data-backdrop='static')
      delmodal(:product='tempProduct' @update='getProducts')
</template>

<script>
/* global $ */

import Pagination from "@/components/Pagination.vue";
import Modal from "@/components/Modal.vue";
import Delmodal from "@/components/Delmodal.vue";

export default {
  components: {
    Pagination,
    Modal,
    Delmodal
  },
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: []
      },
      isNew: "",
      pagination: {},
      loadingBtn: "",
      delLoadingBtn: "",
      isLoading: false
    };
  },
  props: ["token"],
  methods: {
    getProducts(num = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${num}`;
      this.axios
        .get(url)
        .then(res => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;

          if (this.tempProduct.id) {
            this.tempProduct = {
              imageUrl: []
            };
            $("#productModal").modal("hide");
            $("#delProductModal").modal("hide");
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case "new": {
          this.tempProduct = {
            imageUrl: []
          };
          $("#productModal").modal("show");
          break;
        }
        case "edit": {
          this.loadingBtn = item.id;
          const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`;
          this.axios
            .get(url)
            .then(res => {
              //遠端單筆資料取得後，將資料放進tempProduct
              this.tempProduct = res.data.data;
              //取回資料才將 modal 打開
              $("#productModal").modal("show");
              this.loadingBtn = "";
            })
            .catch(() => {});
          break;
        }

        case "delete": {
          this.delLoadingBtn = item.id;
          const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`;
          this.axios
            .get(api)
            .then(res => {
              this.tempProduct = res.data.data;
              $("#delProductModal").modal("show");
              this.delLoadingBtn = "";
            })
            .catch(() => {});
          break;
        }
        default:
          break;
      }
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
