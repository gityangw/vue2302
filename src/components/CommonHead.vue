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
axios.interceptors.request.use(function (config) {
  console.log("请求拦截器触发了", config);
  return config;
}),
  function (error) {
    return Promise.reject(error);
  };

axios.interceptors.response.use(function (response) {
  return response;
}),
  function (error) {
    return Promise.reject(error);
  };

axios.defaults.baseURL = "https://api.it120.cc/conner";
axios.defaults.timeout = 8000;
axios.defaults.headers.aaa = "xixixi";
export default {
  data() {
    return {
      arts: [],
      cates: [],
    };
  },
  methods: {
    fetchArts() {
      axios
        .post("/cms/news/list/v2", {
          a: 10,
          b: 10,
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.arts = res.data.data.result;
          }
        });
    },
    fetchCates() {
      // /cms/category/list
      axios({
        url: "/cms/category/list",
        method: "get",
        params: {
          a: 10,
          b: 20,
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
