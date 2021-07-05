<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.login
      .pic 
        img(src="../../public/img/login.jpg" alt="登入圖片")
      .content
        .text
          form(@submit.prevent="signin") 
            label(for="email") 電子郵件
            input#email(type="email"  v-model="user.email" placeholder="請輸入電子郵件" required)
            label(for="password") 密碼
            input#password(type="password" v-model="user.password" placeholder="請輸入密碼" required)
            router-link.forget(to="/login") 忘記密碼 ?
            input.btn(type="submit" value="登入")
            .back 
              i.fas.fa-angle-left
              router-link.span(to="/") 回玩藝畫廊
      h2.loginContent LogIn
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      token: "",
      isLoading: false
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}auth/login`;
      //將使用者的帳號與密碼發送出去
      this.axios
        .post(api, this.user)
        .then(res => {
          //取得遠端取回的 res
          //存取遠端 token 和 到期日(expired)
          const token = res.data.token;
          const expired = res.data.expired;
          // //存取 cookie
          document.cookie = `token=${token}; expires=${new Date(
            expired * 1000
          )}`;
          //toasts
          const success = res.data.message;
          this.$bus.$emit("message", success, "success");
          //登入成功就轉址到 products 頁面
          this.$router.push("/admin/products");
        })
        .catch(error => {
          //toasts
          const errors = error.response.data.message;
          this.$bus.$emit("message", errors, "danger");
        });
    },
    loading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    }
  },
  created() {
    this.loading();
  }
};
</script>
