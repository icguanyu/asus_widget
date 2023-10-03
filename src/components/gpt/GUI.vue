<template>
  <div class="gui" :class="{ hide: !show }">
    <div class="title">
      <span>開發用GUI</span>
      <b @click="show = !show">{{ show ? "關閉" : "顯示" }}</b>
    </div>
    <div class="body" v-if="show">
      <div class="item">
        <div class="label">服務項目</div>
        <el-button type="primary" @click="createOptionMessage">送出</el-button>
        <el-button type="danger" @click="handleCloseRoom">結束聊天</el-button>
        <!-- <el-button @click="handleCreateWelcomeMessage">歡迎訊息</el-button> -->
      </div>
      <div class="item user-inputs">
        <div class="label">輸入</div>
        <span v-for="(i, idx) in userInputs" :key="idx">{{ i }}</span>
      </div>
      <div class="item">
        <div class="label">Bot Room</div>
        <code>是否結束:{{ botRoom.isFinished }} </code>
      </div>
      <div class="item">
        <div class="label">Bot參數</div>
        <code>{{ botRender }}</code>
      </div>
      <div class="item">
        <div class="label">當前意圖1</div>
        <div>{{ botKeyName.ReturnChatType }}</div>
      </div>
      <div class="item">
        <div class="label">當前意圖2</div>
        <div>{{ botKeyName.ReturnChatType2 }}</div>
      </div>
      <div class="item">
        <div class="label">Bot Start</div>
        <div class="value">{{ botStart }}</div>
      </div>
      <div class="item">
        <div class="label">回答次數</div>
        <div class="value">{{ answerCounts }}</div>
      </div>
      <div class="item">
        <div class="label">不喜歡次數</div>
        <div class="value">
          {{ unlikeCounts }}/<span v-if="setting">{{
            setting.ChatGPT_Satisfaction || "X"
          }}</span>
        </div>
      </div>
      <div class="item">
        <div class="label">觸發轉真人</div>
        <div class="value">
          {{ liveSupportCounts }}/<span v-if="setting">{{
            setting.ChatGPT_ToAgent || "X"
          }}</span>
        </div>
      </div>
      <div class="item">
        <div class="label">對話上限</div>
        <div class="value">
          {{ answerCounts.total }}/<span v-if="setting">{{
            setting.ChatGPT_ChatSentences || "X"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gpt-GUI",
  data() {
    return {
      show: true,
    };
  },
  watch: {},
  methods: {
    // 送出第一層服務項目 (System)(tree_lv1)
    createOptionMessage() {
      this.$store.dispatch("gpt/createOptionMessage");
    },
    handleCloseRoom() {
      this.$store.dispatch("gpt/closeRoom");
    },
    handleCreateWelcomeMessage() {
      this.$store.dispatch("gpt/createWelcomeMessage", true);
    },
  },
  computed: {
    setting() {
      return this.$store.state.gpt.setting;
    },
    messages() {
      return this.$store.state.gpt.botRoom.messages;
    },
    botRoom() {
      return this.$store.state.gpt.botRoom;
    },
    botRender() {
      return this.$store.state.gpt.botRender;
    },
    botKeyName() {
      return this.$store.state.gpt.botKeyName;
    },
    userInputs() {
      return this.$store.state.gpt.userInputs;
    },
    answerCounts() {
      return this.$store.getters["gpt/answerCounts"];
    },
    unlikeCounts() {
      return this.$store.state.gpt.unlikeCounts;
    },
    liveSupportCounts() {
      return this.$store.state.gpt.liveSupportCounts;
    },
    botStart() {
      return this.$store.getters["gpt/botStart"];
    },
  },
};
</script>

<style lang="scss" scoped>
.gui {
  z-index: 99;
  right: 10px;
  top: 10px;
  background-color: white;
  position: fixed;
  border: 1px dashed #333;
  width: 260px;

  .title {
    font-size: 14px;
    background-color: #eee;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    b {
      cursor: pointer;
    }
  }
  .body {
    overflow: auto;
    padding: 10px;
    font-size: 12px;
  }
  .item {
    display: flex;
    margin-bottom: 5px;
    .label {
      display: block;
      min-width: 80px;
    }
    code {
      white-space: wrap;
      display: block;
      background-color: #eee;
      padding: 5px;
    }
    .el-button {
      font-size: 12px !important;
      line-height: 18px !important;
      padding: 0 5px !important;
    }
  }

  .user-inputs {
    span {
      border: 1px solid #8da3df;
      background-color: #dff0ff;
      padding: 1px 3px;
      line-height: 16px;
      margin-right: 2px;
      border-radius: 5px;
    }
  }
}
.hide {
  width: 150px;
}
@media (max-width: 1000px) {
  .gui {
    display: none;
  }
}
</style>
