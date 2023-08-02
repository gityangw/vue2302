<template>
  <div>
    <h1>这是登录页</h1>
    <button @click="userLogin">点击登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    userLogin() {
      setTimeout(() => {
        const token = "yang";
        localStorage.setItem("token", token);
        if (this.$route.query.from) {
          this.$router.replace(this.$route.query.from);
        } else {
          this.$router.replace("/home");
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
