<template>
  <div class="index">
    <div class="style-test">
      index.vue
      <div class="allpower">我是.allpower</div>
      <div class="test">我是.test</div>
      <div class="primary">Primary Color</div>
      <img src="@/assets/images/avatar-genio.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style lang="scss" scoped>
.style-test {
  font-size: 14px;
  border: 1px solid #000;
  padding: 10px;
  .allpower {
    background-color: #333;
    color: white;
  }
  .test {
    background-color: rgb(0, 86, 247);
    color: yellow;
  }
  .primary {
    color: $primary;
  }
}
</style>
