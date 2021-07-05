<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.cartBanner
    section.cart
      .cartContent
        ul.step_step2
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
        .listTitle 購物清單
        .tableOuter
          table.table
            tr
              th(style="text-align: left") 產品圖
              th.text-center 產品名
              th.text-center 數量
              th(style="text-align: right;width: 200px") 價格
            tr(v-for="item in carts" :key="item.product.id + 1")
              td
                img(:src="item.product.imageUrl" alt="商品圖片")
              td(style="text-align: center") {{ item.product.title }}
              td(style="text-align: center") {{ item.quantity }}
              td(style="text-align: right") {{ item.product.price * item.quantity | money }}
            tr.total
              td(colspan="2") 共 {{ carts.length }} 件
              td 總計
              td {{ cartTotal | money }}
        .listTitle 填寫訂單資訊
        //- 填寫表單
        validation-observer(v-slot="{ invalid }")
          form.order(@submit.prevent="checkOrder")
            validation-provider(rules="required" v-slot="{ errors , classes , passed }")
              label(for="name") 姓名
                small.text-danger.h6.ml-2 必填 *
              input#name(type="text", placeholder="請輸入姓名" v-model="form.name" :class="classes" name="姓名" required )
              span.invalid-feedback.mb-3 {{ errors[0] }} 
              span.valid-feedback.mb-3(v-if="passed") 姓名填寫正確

            validation-provider(rules="required|email" v-slot="{ errors , classes , passed }")
              label(for="email") 電子郵件
                small.text-danger.h6.ml-2 必填 *
              input#email(type="email", placeholder="請輸入電子郵件" v-model="form.email"  name="電子郵件" :class="classes"  required)
              span.invalid-feedback.mb-3 {{ errors[0] }}
              span.valid-feedback.mb-3(v-if="passed")  電子郵件填寫正確

            validation-provider(rules="required|min:8|numeric" v-slot="{ errors , classes , passed }")
              label(for="tel") 電話
                small.text-danger.h6.ml-2 必填 *
              input#tel(type="tel", placeholder="請輸入電話" v-model="form.tel" name="電話" :class="classes" required )
              span.invalid-feedback.mb-3 {{ errors[0] }}
              span.valid-feedback.mb-3(v-if="passed") 電話填寫正確

            validation-provider(rules="required" v-slot="{ errors , classes , passed }")
              label(for="address") 地址
                small.text-danger.h6.ml-2 必填 *
              input#address(type="text", placeholder="請輸入地址" v-model="form.address" name="地址" :class="classes" required )
              span.invalid-feedback.mb-3 {{ errors[0] }}
              span.valid-feedback.mb-3(v-if="passed") 地址填寫正確

            validation-provider(rules="required" v-slot="{ errors , classes , passed }")
              label(for="payment") 付款方式
                small.text-danger.h6.ml-2 必填 *
              select#payment( v-model="form.payment" name="付款方式" :class="classes" required ) 
                option(value="" disabled selected hidden) 請選擇付款方式
                option(value="WebATM") WebATM
                option(value="ATM") ATM
                option(value="Credit") 信用卡
                option(value="GooglePay") GooglePay
                option(value="ApplePay") ApplePay
              span.invalid-feedback.mb-3 {{ errors[0] }}
              span.valid-feedback.mb-3(v-if="passed") 付款方式填寫正確

            label(for="message") 留言
            textarea#message(placeholder="請輸入留言" name="留言" v-model="form.message")
            //- 按鈕
            .otherBtn
              router-link.prev(to="/carts_step1") 回前頁
              button.btn.btn-danger.p-3.not(type="submit" :disabled="invalid") 確認訂購
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      isLoading: false,
      form: {
        name: "",
        email: "",
        tel: "",
        address: "",
        payment: "",
        message: ""
      }
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
    checkOrder() {
      //解構
      const order = { ...this.form };
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      this.axios
        .post(url, order)
        .then(res => {
          //toasts
          this.$bus.$emit("message", "訂單填寫成功", "success");
          //成功後轉到單一訂單頁面
          this.$router.push(`/order/${res.data.data.id}`);
        })
        .catch(() => {});
    }
  },
  created() {
    this.getcart();
  }
};
</script>
