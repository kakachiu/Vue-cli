<template lang="pug">
  div#app
    GotoTop
    Toasts
    router-view
</template>

<script>
import Toasts from "@/components/Toasts.vue";
import GotoTop from "@/components/GotoTop.vue";

export default {
  components: {
    Toasts,
    GotoTop
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "./assets/sass/helpers/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap/scss/mixins";
</style>

<style lang="sass">
@import "./assets/sass/all"
</style>
