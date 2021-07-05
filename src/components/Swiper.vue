<template lang="pug">
  div
    .swiper-container#swiper1
      .swiper-wrapper
        .swiper-slide.swiper1(style='background-image:url(./img/carousel.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel1.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel2.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel3.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel4.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel5.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel6.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel7.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel8.jpg)')
        .swiper-slide.swiper1(style='background-image:url(./img/carousel9.jpg)')
</template>

<script>
export default {
  name: "caroler",
  data() {
    return {};
  },
  mounted() {
    // eslint-disable-next-line no-undef
    new Swiper("#swiper1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        disableOnInteraction: false
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      mousewheel: true,
      keyboard: true
    });
  }
};
</script>

<style lang="sass" scoped>

.swiper-container#swiper1
  width: 100%
  padding-top: 50px
  padding-bottom: 50px

.swiper-slide.swiper1
  background-position: center
  background-size: cover
  width: 1000px
  height: 600px
@media (max-width: 767px)
  .swiper-slide.swiper1
    height: 400px
</style>
