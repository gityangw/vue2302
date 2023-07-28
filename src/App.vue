<template>
  <button @click="isShow = !isShow">
    {{ isShow ? "点击停用" : "点击显示" }}
  </button>
  <keep-alive>
    <common-head v-if="isShow" />
  </keep-alive>
</template>

<script>
import CommonHead from "@/components/CommonHead.vue";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    CommonHead,
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
