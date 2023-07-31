<template>
  <div>
    <button @click="showModal">显示</button>
    <Teleport to="body">
      <div class="mask" v-if="isShow" @click.self="hideModal">
        <div class="content">这是内容</div>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showModal() {
      this.isShow = true;
    },
    hideModal() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 40%;
  height: 40%;
  background-color: #fff;
}
</style>
