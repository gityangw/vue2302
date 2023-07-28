<template>
  <div>
    <h2>组件</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    console.log("组件初始化");
    const timer = setInterval(() => {
      console.log("运行了");
    }, 1000);
    this.timer = timer;
    window.onscroll = () => {
      console.log("触发滚动");
    };
  },
  beforeUnmount() {
    clearInterval(this.timer);
    window.onscroll = null;
  },
  unmounted() {
    console.log("卸载了");
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
