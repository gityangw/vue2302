<template>
  <router-link activeClass="current" to="/"> 首页 </router-link>
  <router-link activeClass="current" :to="{ path: '/news' }">新闻 </router-link>
  <router-link activeClass="current" to="/about">关于我们 </router-link>

  <hr />
  <router-view></router-view>
</template>

<style scoped>
.router-link-active {
  color: red;
}
a {
  text-decoration: none;
  color: skyblue;
}
</style>
