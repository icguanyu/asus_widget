<template>
  <div class="header">
    <div class="left">hi</div>
    <div class="name">{{ name }}</div>
    <div class="right" @click="test">隱藏</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["name"],
  methods: {
    test() {
      this.$emit("toggle");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding: 10px 10px;
  background-color: rgb(0, 86, 247);
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  .name {
    flex: 1;
  }
  .left,
  .right {
    min-width: 30px;
  }
}
</style>
