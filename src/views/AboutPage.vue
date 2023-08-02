<template>
  <div>
    <h1>这是关于页</h1>
  </div>
</template>

<script>
export default {
  // name: "AboutPage",
  beforeRouteUpdate(to, from) {
    console.log(to, from);
  },
};
</script>

<style lang="scss" scoped></style>
