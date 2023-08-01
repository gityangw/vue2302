<template>
  <button @click="$router.push('/home')">首页</button>
  <button @click="$router.push('/news')">新闻页</button>
  <button @click="$router.replace('/about')">关于我们</button>
  <button @click="addRoute">动态添加一个路由</button>
  <button @click="$router.push('/join')">跳转到这个路由</button>
  <button @click="$router.go(0)">刷新页面</button>
  <router-view></router-view>
</template>
<script>
import JoinUs from "@/views/JoinUs.vue";
export default {
  methods: {
    addRoute() {
      this.$router.addRoute("news", {
        path: "/join",
        name: "join",
        component: JoinUs,
      });
    },
  },
};
</script>
<style scoped>
.router-link-active {
  color: red;
}
a {
  text-decoration: none;
  color: skyblue;
}
</style>
