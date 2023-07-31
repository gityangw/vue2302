<template>
  <common-head />
</template>

<script>
import CommonHead from "@/components/CommonHead.vue";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    CommonHead,
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
