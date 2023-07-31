<template>
  <div>
    <button @click="isShow = !isShow">
      {{ isShow ? "点击隐藏" : "点击显示" }}
    </button>
    <transition name="ani1">
      <div v-if="isShow" class="box"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
@keyframes enter {
  0% {
    transform: translateX(-500px) scale(0.1);
    opacity: 0;
    background-color: pink;
  }
  50% {
    transform: translateX(-250px) scale(0.5);
    opacity: 0.5;
    background-color: red;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
    background-color: skyblue;
  }
}

@keyframes leave {
  0% {
    transform: translateX(0) scale(1);
    opacity: 1;
    background-color: skyblue;
  }
  50% {
    transform: translateX(250px) scale(0.5);
    opacity: 0.5;
    background-color: red;
  }
  100% {
    transform: translateX(500px) scale(0.1);
    opacity: 0;
    background-color: pink;
  }
}
.ani1-enter-active {
  animation: enter 1s;
}
.ani1-leave-active {
  animation: leave 1s;
}
.box {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  background-color: #19096a;
}
</style>
