<template lang="pug">
  div(style='position: fixed;top: 20px;right: 20px;min-width: 250px;z-index: 9999')
    .toast.fade.show(v-for='(item, i) in messages' :id='`toast-${i}`' :key='i' role='alert' aria-live='assertive' aria-atomic='true' data-autohide='false')
      .toast-header.d-flex.justify-content-between(:class='`bg-${item.status}`')
        strong.mr-auto.text-white Art Gallery 小提醒
        small.text-white Now
        button.ml-2.mb-1.close(type='button' data-dismiss='toast' aria-label='Close' @click='closeToast(`toast-${i}`)')
          span(aria-hidden='true') ×
      .toast-body {{ item.message }}
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      messages: []
    };
  },
  methods: {
    // 更新 toast ，將 toast 所需資料及時間推入
    updateMessage(message, status) {
      // 時間戳記->由於要計算5秒後移除 toasts
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp
      });
      // 更新 tosat 先傳入 timestamp
      this.removeMessageWaitTime(timestamp);
    },
    //經過5秒移除 toasts
    removeMessageWaitTime(timestamp) {
      const vm = this;
      setTimeout(() => {
        // 使用 timestamp 去比對要刪除誰
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
    // 手動刪除
    closeToast(element) {
      $(`#${element}`).toast("hide");
    }
  },
  // 一剛開始就接收監聽事件
  // message 表監聽事件名稱，$emit名稱也會一樣
  // status 為預設提示顏色為黃色
  // updateMessage 把 toasts 資料 push 進去
  created() {
    const vm = this;
    vm.$bus.$on("message", (message, status = "warning") => {
      vm.updateMessage(message, status);
    });
  }
};
</script>
