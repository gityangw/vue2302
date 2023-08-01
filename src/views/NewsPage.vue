<template>
  <div>
    <h1>这是新闻页</h1>
    <hr />
  </div>
</template>

<script>
export default {
  name: "NewsPage",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: #aaa;
}
a {
  text-decoration: none;
  color: block;
}
</style>
