<template>
  <div class="entrance">
    <div class="privacy" v-loading="loading">
      <div class="welcome">
        <img src="@/assets/images/avatar-genio.png" alt="" />
        <h1>Welcome</h1>
      </div>
      <div class="privacy-title">{{ $t("GPT.ENTRANCE.POLICY") }}</div>

      <div
        class="privacy-content ql-editor"
        v-if="setting"
        v-html="setting.ChatGPT_PrivacyNotice"
      ></div>

      <p>{{ $t("GPT.ENTRANCE.AGREE") }}</p>
      <el-checkbox v-model="agree">{{ $t("GPT.LAYOUT.AGREE") }}</el-checkbox>
    </div>
    <el-button
      type="primary"
      :disabled="!agree || loading"
      @click="createBotRoom"
      >{{ $t("GPT.LAYOUT.START") }}</el-button
    >

    <!-- <pre>
      Data from iframe:
      {{ config }}
    </pre> -->
  </div>
</template>

<script>
import { languages } from "@/plugins/languages";
export default {
  name: "gpt-index",
  data() {
    return {
      agree: false,
    };
  },
  async mounted() {
    let countryId =
      process.env.NODE_ENV === "development" ? "TW" : this.config.countryId;
    // 開發模式預設 US

    const lang = languages.includes(countryId) ? countryId : "TW";
    this.initSettingMetas(countryId);
    // console.log("lang", lang);
    this.$i18n.locale = lang;
  },
  methods: {
    initSettingMetas(countryId = "TW") {
      // 預設TW
      this.$store.dispatch("gpt/initSettingMetas", countryId);
    },
    createBotRoom() {
      this.$store.dispatch("gpt/createRoom");
    },
  },
  computed: {
    setting() {
      return this.$store.state.gpt.setting;
    },
    loading() {
      return this.$store.state.gpt.loading;
    },
    config() {
      return this.$store.state.global.config;
    },
  },
};
</script>

<style lang="scss" scoped>
.entrance {
  width: 100%;
  padding: 38px 20px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  .privacy {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .welcome {
      text-align: center;
      margin-bottom: 20px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      h1 {
        margin: 0;
        font-family: Noto Sans TC;
        font-weight: 700;
        color: $primary;
        font-size: 18px;
        line-height: 32.76px;
      }
    }
    .privacy-title {
      color: #181818;
      font-size: 14px;
      line-height: 16.8px;
      margin-bottom: 8px;
      text-align: center;
    }
    .privacy-content {
      @include scrollbar();
      width: 100%;
      color: #4d4d4d;
      height: 80px;
      min-height: 80px;
      overflow-y: auto;
      overflow-x: hidden;
      font-size: 13px;
      line-height: 20px;
      margin-bottom: 5px;
    }
    p {
      width: 100%;
      display: block;
      border-top: 1px solid #ccc;
      color: #666;
      font-size: 13px;
      line-height: 20px;
      text-align: center;
      padding-top: 8px;
      margin-bottom: 8px;
    }
  }
  .el-button {
    margin-top: 40px;
    width: 320px;
    max-width: 100%;
  }
}
</style>
