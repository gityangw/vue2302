<template>
  <button
    :class="{ active: $route.path === '/home' }"
    @click="$router.push('/home')"
  >
    首页
  </button>
  <button
    :class="{ active: $route.path === '/news' }"
    @click="
      $router.push({
        path: '/news',
        query: {
          id: 1,
          a: 10,
        },
      })
    "
  >
    新闻页
  </button>
  <button
    :class="{ active: $route.path === '/about' }"
    @click="$router.replace('/about/2')"
  >
    关于我们
  </button>
  <hr />
  <router-view v-slot="{ Component }">
    <transition :name="$route.meta.ani">
      <component :is="Component" />
    </transition>
  </router-view>
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
.slideLeft-enter-from {
  transform: translateX(-100%);
}
.slideLeft-enter-active {
  transition: all 500ms;
}
.slideRight-enter-from {
  transform: translateX(100%);
}
.slideRight-enter-active {
  transition: all 500ms;
}

.slideBottom-enter-from {
  transform: translateY(500px);
}
.slideBottom-enter-active {
  transition: all 500ms;
}
</style>
