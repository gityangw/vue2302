<template>
  <div>
    <ul>
      <li v-for="cate in cates" :key="cate.id">
        <img :src="cate.icon" width="100" alt="" />
        <h3>
          {{ cate.name }}
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cates: [],
    };
  },
  methods: {
    fetchCates() {
      axios.get("https://api.it120.cc/conner/cms/category/list").then((res) => {
        if (res.data.code === 0) {
          console.log(res);
          this.cates = res.data.data;
        }
      });
    },
  },
  created() {
    this.fetchCates();
  },
};
</script>
