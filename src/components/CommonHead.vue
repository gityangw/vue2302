<template>
  <div>
    <h1>父组件</h1>
    <common-child>
      <template #default="{ c, title }">
        <h2>{{ c }}</h2>
        <button>这是传入默认内容插槽 {{ title }}</button>
      </template>
      <template v-slot:header="data">
        <h2>这是传入 header插槽的 {{ data.a }}</h2>
        <i>{{ data.b }}</i>
      </template>
      <template #footer="data">
        <h2>{{ data.a }}</h2>
        <i>{{ data.c }}</i>
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

<style scoped></style>
