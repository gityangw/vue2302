<template>
  <div>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    console.log("组件初始化");
  },
  unmounted() {
    console.log("组件卸载");
  },
  activated() {
    console.log("组件使用了");
  },
  deactivated() {
    console.log("组件停用了");
  },
};
</script>
<style scoped></style>
