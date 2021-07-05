import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import $ from "jquery";
import "bootstrap";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import App from "./App.vue";
import router from "./router";
import "./bus";

//VeeValidate
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend
} from "vee-validate";

// 規則檔案（ex: email...）
import * as rules from "vee-validate/dist/rules";

// 語系檔案
import zhTW from "vee-validate/dist/locale/zh_TW.json";

// filter 千分號
import moneyFilter from "./filters/money";
Vue.filter("money", moneyFilter);

Vue.config.productionTip = false;
window.$ = $;

//loading效果
Vue.component("Loading", Loading);
Vue.use(VueAxios, axios);

// vee-validate
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});
localize("tw", zhTW);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
