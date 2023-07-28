<template>
  这是子组件2
  {{ c }}
</template>

<script>
export default {
  inject: ["c"],
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
