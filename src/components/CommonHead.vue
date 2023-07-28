<template>
  <div>
    <div class="swiper container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css";
export default {
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      const swiper = new Swiper(".swiper", {
        autoplay: true,
      });
      this.swiper = swiper;
    },
  },
};
</script>
<style scoped>
.container {
  width: 800px;
  height: 600px;
  margin: 20px auto;
}
.swiper-slide {
  width: 800px;
  height: 600px;
  background-color: #e49393;
}
.swiper-slide:nth-child(2n) {
  background-color: #e49393;
}
</style>
