<template>
  <div>
    <header>
      <slot name="header" :a="a" :b="b"></slot>
    </header>
    <main>
      <slot :c="c" title="这是不变的，给默认插槽"></slot>
    </main>
    <footer>
      <slot name="footer" :a="a" :c="c"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "a",
      b: "b",
      c: ["a", "b", "c"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
