<template lang="pug">
  div
    .top
      router-link(to="#")
        img(src="../../public/img/top.png" alt="往上")
</template>

<script>
/* global $ */

export default {
  data() {
    return {};
  },
  mounted() {
    $(".top a").click(function(e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },
        1000
      );
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $(".top").addClass("active");
      } else {
        $(".top").removeClass("active");
      }
    });
  }
};
</script>

<style lang="sass">
.top
  position: fixed
  opacity: 0
  right: 15px
  bottom: 20px
  background-color: rgba(gray,0.3)
  border-radius: 50%
  z-index: 5
  transition: 0.5s
  &.active
    opacity: 1
</style>
