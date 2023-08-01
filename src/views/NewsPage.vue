<template>
  <div>
    <h1>这是新闻页</h1>
    <hr />
    <router-link to="/news/native">国内新闻</router-link>
    <router-link to="/news/abroad">国外新闻</router-link>
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
