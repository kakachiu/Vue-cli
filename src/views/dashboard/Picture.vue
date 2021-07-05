<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    .mt-4
      table.table.table-hover(v-for='item in pictures' :key='item.id')
        thead
          tr
            th(scope='col') 圖片縮圖
            th(scope='col') 操作
        tbody
          tr
            td
              img.img-fluid(:src='item.path' style='width:150px' alt='商品圖片')
            td.align-middle
              button.btn.btn-outline-danger.btn-sm(@click='openModal(item)') 刪除
    pagination(:pages='pagination' @update='getPicture')
    
    //- 刪除的 modal
    #delProductModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true' data-backdrop='static')
      .modal-dialog(role='document')
        .modal-content.border-0
          .modal-header.bg-danger.text-white
            h5#exampleModalLabel.modal-title
              span 刪除產品
            button.close(type='button' data-dismiss='modal' aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body 是否刪除該商品(刪除後將無法恢復)。
          .modal-footer
            button.btn.btn-outline-secondary(type='button' data-dismiss='modal') 取消
            button.btn.btn-danger(type='button' @click='delPicture' :disabled='loadingBtn === picture.id')
              span.spinner-grow.spinner-grow-sm(role='status' aria-hidden='true' v-if='loadingBtn === picture.id') 確認刪除
</template>

<script>
/* global $ */
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      isLoading: false,
      pictures: [], //接回所有照片
      picture: {}, //開啟 modal 將單一照片資訊放入
      pagination: {},
      loadingBtn: ""
    };
  },
  methods: {
    getPicture(num = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${num}`;
      this.axios
        .get(url)
        .then(res => {
          this.pictures = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    openModal(item) {
      //解構，避免傳參考
      this.picture = { ...item };
      //將單一資料放入再開啟 modal
      $("#delProductModal").modal("show");
    },
    delPicture() {
      this.loadingBtn = this.picture.id;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${this.picture.id}`;
      this.axios
        .delete(url)
        .then(() => {
          this.getPicture();
          $("#delProductModal").modal("hide");
          //toasts
          this.$bus.$emit("message", "刪除成功", "success");
        })
        .catch(() => {});
    }
  },
  created() {
    this.getPicture();
  }
};
</script>
