<template>
  这是子组件1
  {{ a }}
  {{ b }}
</template>

<script>
export default {
  inject: ["a", "b"],
  data() {
    return {
      msg: "子组件1数据",
    };
  },
};
</script>

<style lang="scss" scoped></style>
