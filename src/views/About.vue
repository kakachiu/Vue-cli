<template lang="pug">
  div
    loading(:active.sync='isLoading')
      .loadingio-spinner-eclipse-lg0fund9b9s
        .ldio-lwdwtvp1lzs
          div
    section.aboutBanner
    section.about
      .container
        .title
          h2.twTitle 關
            span 於我們
          h2.enTitle A
            span bout Us
        .aboutContent
          .pic
          .introduction
            p.twIntroduction
              span.play 玩
              | 藝畫廊創始於 1990 年，由兩位藝術總監(Aubrey Coleman、Lynn Frazier)所成立,秉持著藝術從心開始，由心創造藝術的理念，想帶給大家藝術是可以拉近彼此距離、相互溝通，將溫暖及心意傳達給大家。
            p.enIntroduction
              span.play Play
              | Art Gallery had been created by two art directors (Aubrey Coleman, Lynn Frazier) since 1990,they uphold the philosophy that art starts from the heart and creating art from the heart.PlayArt Gallery hope to reduce the distance between us, communicate with each other and  convey warmth and kindness to everyone.
            .peopleOne
              img(src="../../public/img/about1.jpg" alt="創辦人Aubrey Coleman")
            .peopleTwo
              img(src="../../public/img/about2.jpg" alt="創辦人 Lynn Frazier")
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    loading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  },
  created() {
    this.loading();
  }
};
</script>
