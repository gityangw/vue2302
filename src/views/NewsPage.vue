<template>
  <div>
    <h1>这是新闻页</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NewsPage",

  beforeRouteEnter(to, from, next) {
    console.log(this);
    next((vm) => {
      console.log(vm);
    });
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("确定要离开吗")) {
      next();
    }
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
