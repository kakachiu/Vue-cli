<template lang="pug">
  div
    .modal-dialog.modal-xl(role='document')
      loading(:active.sync='isLoading')
        .loadingio-spinner-eclipse-lg0fund9b9s
          .ldio-lwdwtvp1lzs
            div
      .modal-content.border-0
        .modal-header.bg-primary.text-white
          h5#exampleModalLabel.modal-title
            span 新增產品
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') ×
        .modal-body
          .row
            .col-sm-4
              .form-group
                label(for='imageUrl') 輸入圖片網址
                input#imageUrl.form-control(v-model='product.imageUrl[0]' type='text' placeholder='請輸入圖片連結')
                input#customFile.form-control(type='file' @change='uploadFile')
              img.img-fluid(:src='product.imageUrl[0]' v-if="product.imageUrl[0]" alt='商品圖片')
            .col-sm-8
              .form-group
                label(for='title') 標題
                input#title.form-control(v-model='product.title' type='text' placeholder='請輸入標題')
              .form-row
                .form-group.col-md-6
                  label(for='category') 分類
                  input#category.form-control(v-model='product.category' type='text' placeholder='請輸入分類')
                .form-group.col-md-6
                  label(for='unit') 單位
                  input#unit.form-control(v-model='product.unit' type='text' placeholder='請輸入單位')
              .form-row
                .form-group.col-md-6
                  label(for='origin_price') 原價
                  input#origin_price.form-control(v-model='product.origin_price' type='number' placeholder='請輸入原價')
                .form-group.col-md-6
                  label(for='price') 售價
                  input#price.form-control(v-model='product.price' type='number' placeholder='請輸入售價')
              .form-group
                label(for='description') 產品描述
                textarea#description.form-control(v-model='product.description' type='text' placeholder='請輸入產品描述')               
              .form-group
                label(for='content') 說明內容
                textarea#content.form-control(v-model='product.content' type='text' placeholder='請輸入說明內容')               
              .form-group
                .form-check
                  input#enabled.form-check-input(v-model='product.enabled' type='checkbox')
                  label.form-check-label(for='enabled') 是否啟用
        .modal-footer
          button.btn.btn-outline-secondary(type='button' data-dismiss='modal') 取消
          button.btn.btn-primary(type='button' v-if='product.id' @click='updateProduct') 確認
          button.btn.btn-primary(type='button' v-else  @click='createdProduct') 確認
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      filePath: "",
      isLoading: false
    };
  },
  props: ["product"],
  methods: {
    updateProduct() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.product.id}`;
      this.axios
        .patch(url, this.product)
        .then(() => {
          //只是要跟外層說關閉 modal 不需要送資料
          this.$emit("update");
          this.$bus.$emit("message", "成功更新資料", "success");
          this.filePath = "";
        })
        .catch(() => {
          this.$bus.$emit("message", "更新失敗", "danger");
        });
    },
    createdProduct() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`;
      this.axios
        .post(url, this.product)
        .then(() => {
          this.$emit("update");
          $("#productModal").modal("hide");
          this.$bus.$emit("message", "成功新增資料", "success");
          this.filePath = "";
        })
        .catch(error => {
          const errors = error.response.data.message;
          this.$bus.$emit("message", errors, "danger");
        });
    },
    uploadFile() {
      this.isLoading = true;
      const customFile = document.querySelector("#customFile");
      const uploadfile = document.querySelector("#customFile").files[0];
      const formData = new FormData();
      //Form Data 要加入新的欄位
      formData.append("file", uploadfile);
      // 檔案上傳API
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`;
      this.axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          //圖片路徑帶至畫面
          this.filePath = res.data.data.path;
          this.product.imageUrl[0] = this.filePath;
          this.$bus.$emit("message", "上傳成功", "success");
          customFile.value = "";
          this.isLoading = false;
        })
        .catch(() => {
          this.$bus.$emit("message", "上傳失敗", "danger");
          this.isLoading = false;
        });
    }
  }
};
</script>
