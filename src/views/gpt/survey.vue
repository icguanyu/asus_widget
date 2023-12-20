<template>
  <div class="gpt-survey">
    <div class="wrap">
      <img src="@/assets/images/chat_star.png" alt="" />
      <p>{{ $t("GPT.SURVEY.DESC") }}</p>
      <div class="scores">
        <div class="score-group" v-for="i in 11" :key="i">
          <input
            type="radio"
            :name="i - 1"
            :id="i - 1"
            :value="(i - 1).toString()"
            v-model="form.surveyScore"
          />
          <label :for="i - 1" :class="{ active: i - 1 < form.surveyScore }">{{
            i - 1
          }}</label>
        </div>
      </div>
      <div class="score-text">
        <span>{{ $t("GPT.SURVEY.SAT") }}</span>
        <span>{{ $t("GPT.SURVEY.DISSAT") }}</span>
      </div>

      <el-input
        type="textarea"
        :placeholder="$t('GPT.SURVEY.DESC')"
        :autosize="{ minRows: 4, maxRows: 6 }"
        v-model="form.surveyFeedback"
        maxlength="100"
        show-word-limit
      ></el-input>

      <!-- <pre>{{ form }}</pre> -->
    </div>

    <div class="buttons">
      <el-button
        type="primary"
        @click="handleSurvey"
        :disabled="loading || !form.surveyScore"
        >{{ $t("GPT.SURVEY.SEND") }}</el-button
      >
      <el-button type="primary" plain @click="back">
        {{ $t("GPT.SURVEY.BACK") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import { ChatBot } from "@/api/gpt";
export default {
  name: "gpt-survey",
  data() {
    return {
      loading: false,
      form: {
        chatBotRoomId: "",
        sessionId: "",
        surveyScore: "",
        surveyFeedback: "",
      },
    };
  },
  async mounted() {
    this.form.chatBotRoomId = this.botRoom.chatBotRoomId;
    this.form.sessionId = this.botRoom.sessionId;
  },
  methods: {
    back() {
      this.$router.push(`/${this.form.chatBotRoomId}`);
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "click_cancel_survey_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: "cancel_survey/genio",
      });
    },
    // 送出滿意度，感謝畫面
    async handleSurvey() {
      this.loading = true;
      try {
        await ChatBot.CreateSurvey(this.form);
        window.dataLayer.push({
          event: "data_layer_event",
          chatbot_session_id: this.chatbot_session_id,
          event_name_ga4: "click_submit_survey_genio",
          event_category_DL: "genio",
          event_action_DL: "clicked",
          event_label_DL: `${this.form.surveyScore}/submit_survey/genio`,
        });
        this.$store.commit("gpt/reset");
        this.$router.push("/end");
      } catch (error) {
        // console.log("catch", error.data);
        if (error.data === "Survey is existed") {
          this.$router.push("/end");
        }
      }
      this.loading = false;
    },
  },
  computed: {
    chatbot_session_id() {
      return this.$store.getters["gpt/chatbot_session_id"];
    },
    botRoom() {
      return this.$store.state.gpt.botRoom;
    },
  },
};
</script>

<style lang="scss" scoped>
.gpt-survey {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 38px 20px;
  overflow-y: auto;
  @include scrollbar();
  .wrap {
    max-width: 400px;
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    img {
      width: 130px;
      margin-bottom: 32px;
    }
    p {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 32px;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    .el-button {
      margin-right: 0;
      margin-left: 0;
      width: 180px;
    }
    .el-button + .el-button {
      margin-top: 16px;
    }
  }
}
.scores {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.score-group {
  &:last-child {
    margin-right: 0;
  }
  label {
    user-select: none;
    cursor: pointer;
    border: 1px solid #666;
    color: #666;
    width: 25px;
    height: 25px;
    display: flex;
    align-self: center;
    justify-content: center;
    border-radius: 50%;
    line-height: 24px;
  }
  input {
    display: none;
  }
  .active,
  input:checked + label {
    border-color: $primary;
    background: $primary;
    color: white;
  }
}
.score-text {
  color: #666;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin: 12px 0;
}
</style>
