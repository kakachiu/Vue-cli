<template lang="pug">
  div
    .modal-dialog(role='document')
      .modal-content.border-0
        .modal-header.bg-danger.text-white
          h5#exampleModalLabel.modal-title
            span 刪除產品
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') ×
        .modal-body 是否刪除
          strong.text-danger {{ product.title }} 
          | 商品(刪除後將無法恢復)。
        .modal-footer
          button.btn.btn-outline-secondary(type='button' data-dismiss='modal') 取消
          button.btn.btn-danger(type='button' @click='delProduct') 確認刪除
</template>

<script>
export default {
  props: ["product"],
  methods: {
    delProduct() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.product.id}`;
      this.axios
        .delete(url)
        .then(() => {
          this.$emit("update");
          this.$bus.$emit("message", "刪除成功", "success");
        })
        .catch(() => {});
    }
  }
};
</script>
