<template>
  <div>
    <ul>
      <li v-for="art in arts" :key="art.id">
        <h3>作者:{{ art.author || "佚名" }}</h3>
        <h3>文章标题：{{ art.title }}</h3>
        <img :src="art.pic" alt="" width="100" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arts: [],
      cates: [],
    };
  },
  methods: {
    fetchArts() {
      axios({
        url: "https://api.it120.cc/conner/cms/news/list/v2",
        method: "post",
        data: {
          a: 10,
          b: 20,
        },
        headers: {
          aaa: "xixixi",
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.arts = res.data.data.result;
        }
      });
    },
    fetchCates() {
      axios({
        url: "https://api.it120.cc/conner/cms/category/list",
        params: {
          a: "aaa",
          b: "bbb",
        },
        headers: {
          bbb: "bbb",
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.fetchArts();
    this.fetchCates();
  },
};
</script>

<style scoped></style>
