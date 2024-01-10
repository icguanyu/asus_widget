<template>
  <div class="gpt-end">
    <div class="wrap">
      <img src="@/assets/images/chat_end.png" alt="" />
      <p>{{ $t("GPT.END_SURVEY_MSG") }}</p>
    </div>

    <el-button type="primary" @click="back">{{ $t("GPT.BACKHOME") }}</el-button>
  </div>
</template>

<script>
// 滿意度調查後的結束畫面
export default {
  name: "gpt-survey-end",
  data() {
    return {};
  },
  async mounted() {},
  methods: {
    back() {
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "new_chat2_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: "new_chat2/genio",
      });
      const config = this.$store.state.global.config;
      this.$router.push(`/?country=${config.countryId}`);
    },
  },
  computed: {
    chatbot_session_id() {
      return this.$store.getters["gpt/chatbot_session_id"];
    },
  },
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
