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
/* 定义入场初始状态 */
.ani1-enter-from {
  transform: translateX(-500px) scale(0.1);
  opacity: 0;
}
/* 过渡类中使用 transition */
.ani1-enter-active,
.ani1-leave-active {
  transition: all 1s;
}
/* 定义出场最终状态样式 */
.ani1-leave-to {
  transform: translateX(500px) scale(0.1);
  opacity: 0;
}
.box {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  background-color: #b2cb41;
}
</style>
