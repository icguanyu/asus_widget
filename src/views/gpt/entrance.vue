<template>
  <div class="entrance">
    <div class="privacy" v-loading="loading">
      <div class="welcome">
        <img src="@/assets/images/avatar-genio60.svg" alt="" />
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
    const countryId = this.config.countryId.toUpperCase();
    const lang = languages.includes(countryId) ? countryId : "TW";
    this.initSettingMetas(countryId);
    this.$i18n.locale = lang;

    const oldRoom = this.getCookie("bot_room_id");
    console.log("oldRoom:", oldRoom);
    if (oldRoom) {
      this.$router.push(`/${oldRoom}`);
    }
  },
  methods: {
    initSettingMetas(countryId = "TW") {
      // 預設TW
      this.$store.dispatch("gpt/initSettingMetas", countryId);
    },
    createBotRoom() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "data_layer_event",
        event_name_ga4: "start_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: "start/genio",
      });
      console.log("window.dataLayer", window.dataLayer);
      this.$store.dispatch("gpt/createRoom");
    },
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
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
