<template>
  <div class="gpt-end">
    <div class="wrap">
      <img src="@/assets/images/chat_end.png" alt="" />
      <p>{{ $t("GPT.END_MSG") }}</p>
    </div>

    <el-button type="primary" @click="back">{{ $t("GPT.BACKHOME") }}</el-button>
  </div>
</template>

<script>
export default {
  name: "gpt-end",
  data() {
    return {};
  },
  async mounted() {},
  methods: {
    back() {
      const config = this.$store.state.global.config;
      this.$router.push(`/?country=${config.countryId}`);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.gpt-end {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 38px 20px;
  .wrap {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 27px;

    img {
      width: 58px;
      height: 56px;
      margin-bottom: 32px;
    }
    p {
      font-size: 16px;
    }
  }
  .el-button {
    margin-top: auto;
    width: 320px;
    max-width: 100%;
  }
}
</style>
