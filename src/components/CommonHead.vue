<template>
  <div>
    <h1>父组件</h1>
    <common-child>
      <div>
        <button>哈哈哈</button>
        <div>蠢驴</div>
        <i>哈哈哈</i>
      </div>
    </common-child>
  </div>
</template>

<script>
import CommonChild from "./CommonChild.vue";
export default {
  components: {
    CommonChild,
  },
};
</script>

<style scoped></style>
