<template>
  <div>
    <ul>
      <li v-for="cate in cates" :key="cate.id">
        <img :src="cate.icon" alt="" />
        <h3>{{ cate.name }}</h3>
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
      axios
        .get("https://api.it120.cc/conner/cms/category/list", {
          params: {
            page: 1,
            pageSize: 10,
          },
        })
        .then((res) => {
          if (res.data.code === 0) {
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

<style scoped>
ul {
  height: 90vh;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
}

ul li img {
  width: 100px;
  height: 100px;
}

ul li {
  width: 20%;
  text-align: center;
}
</style>
