<template>
  <div>
    <h1>父组件</h1>
    <common-child>
      <h2>这是默认的内容插槽</h2>
      <button>这是默认按钮</button>
      <template v-slot:header>
        <h2>这是传入的header插槽</h2>
        <i>这是传入给header插槽的内容</i>
      </template>
      <template #footer>
        <mark>这是传给footer的</mark>
      </template>
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

<style scoped>
mark {
  background-color: orange;
}
</style>
