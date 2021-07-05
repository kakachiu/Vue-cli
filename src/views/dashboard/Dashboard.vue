<template lang="pug">
  div
    header.d-flex.justify-content-between.align-items-center.container.py-3
      h2.text-bold Art Gallery 後臺管理系統
      nav
        router-link.text-info(to='/admin/products') 產品列表
        |  / 
        router-link.text-info(to='/admin/picture') 圖片列表
        |  / 
        router-link.text-info(to='/admin/order') 訂單列表
        |  / 
        router-link.text-info(to='/') 返回前台
        |  / 
        a.text-info(href='#' @click.prevent='signout') 登出
    .container
      router-view(:token='token' v-if='ckeckSuccess')
</template>

<script>
export default {
  data() {
    return {
      token: "",
      ckeckSuccess: false //驗證是否成功，預設失敗
    };
  },
  methods: {
    checkLogin() {
      // 取出 token
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.token}`;

      const url = `${process.env.VUE_APP_APIPATH}auth/check`;
      this.axios
        .post(url, {
          api_token: this.token //文件要求格式
        })
        .then(() => {
          this.ckeckSuccess = true;
        })
        .catch(() => {
          //轉址到 login 頁面
          this.$router.push("/login");
        });
    },
    signout() {
      const url = `${process.env.VUE_APP_APIPATH}auth/logout`;
      this.axios
        .post(url, {
          api_token: this.token
        })
        .then(res => {
          //清空 token
          document.cookie = `token=; expires=;`;
          //轉址到 login 頁面
          this.$router.push("/login");

          //toasts
          const success = res.data.message;
          this.$bus.$emit("message", success, "success");
        });
    }
  },
  created() {
    this.checkLogin();
  }
};
</script>
