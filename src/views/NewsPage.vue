<template>
  <div>
    <h1>这是新闻页</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NewsPage",
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
