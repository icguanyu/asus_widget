<template>
  <div class="gpt-survey">
    <div class="wrap">
      <img src="@/assets/images/chat_star.png" alt="" />
      <p>請為本次ASUS虛擬助手服務評價分數</p>

      <div class="scores">
        <div class="score-group" v-for="i in 10" :key="i">
          <input
            type="radio"
            :name="i"
            :id="i"
            :value="i.toString()"
            v-model="form.score"
          />
          <label :for="i" :class="{ active: i <= form.score }">{{ i }}</label>
        </div>
      </div>
      <div class="score-text">
        <span>不滿意</span>
        <span>非常滿意</span>
      </div>

      <el-input
        type="textarea"
        placeholder="留下您的反饋"
        :autosize="{ minRows: 4, maxRows: 6 }"
        v-model="form.note"
        maxlength="100"
        show-word-limit
      ></el-input>

      <!-- <pre>{{ form }}</pre> -->
    </div>

    <div class="buttons">
      <el-button type="primary" @click="handleSurvey" :disabled="!form.score"
        >送出</el-button
      >
      <el-button
        type="primary"
        plain
        @click="$router.push(`/${form.chatBotRoomId}`)"
        >取消</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "gpt-survey",
  data() {
    return {
      form: {
        chatBotRoomId: "",
        countryId: "",
        score: "",
        note: "",
      },
    };
  },
  async mounted() {
    this.form.chatBotRoomId = this.botRoom.chatBotRoomId;
    this.form.countryId = this.botRoom.countryId;
  },
  methods: {
    // 送出滿意度，感謝畫面
    handleSurvey() {
      // API...
      console.log("送出滿意度", this.form);
      this.$store.commit("gpt/reset");
      this.$router.push("/end");
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
