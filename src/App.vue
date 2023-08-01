<template>
  <router-link to="/"> 首页 </router-link>
  <router-link :to="{ path: '/news' }">新闻 </router-link>
  <router-link to="/about">关于我们 </router-link>

  <hr />
  <router-view></router-view>
</template>

<style scoped>
.router-link-active {
  color: red;
}
</style>
