<template>
  <div class="footer">
    <!--Loading-->
    <!-- <div class="loading" v-if="loading">
      請稍候，正在幫您尋找解決辦法中。<i class="el-icon-loading"></i>
    </div> -->

    <div class="backTop" @click="scrollToTop" v-if="showBackTop">
      <img src="@/assets/images/icons/backTop.svg" alt="" />
    </div>

    <div v-if="botStart && !isFinished" class="contenteditable">
      <div
        contenteditable
        id="content-box"
        class="content-box"
        v-on:keydown.13="beforeSubmit"
        :data-placeholder="
          loading ? $t('GPT.LAYOUT.WAIT') : $t('GPT.LAYOUT.INPUT')
        "
      ></div>
      <!-- {{ inputTime }}s -->
      <div class="submit" :class="{ disabled: loading }" @click="beforeSubmit">
        <img src="@/assets/images/icons/submit.svg" alt="" />
      </div>
    </div>

    <div class="end" v-show="isFinished">
      <el-button type="primary" @click="handleEnd">
        {{ $t("GPT.END") }}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "gpt-footer",
  data() {
    return {
      contenteditable: null,
      inputTime: 0,
      inputTimer: null,
      triggerTime: 2, //觸發GPT間隔 2 秒
      showBackTop: false,
    };
  },
  watch: {
    inputTime(val) {
      if (val >= this.triggerTime) {
        this.initTimer(false);
        this.$store.dispatch("gpt/createChatRenderMessage");
      }
    },
    $route() {
      // route change = new room
      this.$store.commit("gpt/saveUserInput");
    },
    botStart(val) {
      if (val) {
        this.$nextTick(function () {
          this.initEditor();
        });
      }
    },
    isFinished(val) {
      if (val) {
        window.dataLayer.push({
          event: "data_layer_event",
          chatbot_session_id: this.chatbot_session_id,
          event_name_ga4: "close_chat2_impression_genio",
          event_category_DL: "genio",
          event_action_DL: "displayed",
          event_label_DL: "close_chat2_impression/genio",
        });
      }
    },
  },
  mounted() {
    if (this.isFinished !== true && this.botStart) {
      this.initEditor();
    }
    const vm = this;
    document.querySelector(".bot-room").addEventListener("scroll", (e) => {
      vm.handleScroll(e);
    });
  },
  methods: {
    initEditor() {
      const editor = document.querySelector("#content-box");

      editor.addEventListener("paste", function (e) {
        e.preventDefault();
        var text = (e.originalEvent || e).clipboardData.getData("text/plain");
        // insert text manually
        document.execCommand("insertHTML", false, text);
      });
      this.contenteditable = editor;
      // GA4 顯示 input 時
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "input_impression_genio",
        event_category_DL: "genio",
        event_action_DL: "displayed",
        event_label_DL: "input_impression/genio",
      });
    },
    beforeSubmit(e) {
      let innerHTML = this.contenteditable.innerHTML;
      let textLength = this.contenteditable.innerText.trim().length;
      let data = { type: "Text", content: innerHTML, chatUserRole: "customer" }; // (System, Text, Image, CustomerStatus)
      // console.log("textLength", textLength);
      if (textLength) {
        if (e.shiftKey) {
          // enter + shift
          return;
        } else {
          // enter only
          e.preventDefault();
          this.submit(data);
          // console.log("data", data);
        }
      }
    },
    submit(data) {
      if (this.loading) return;
      this.initTimer();
      this.$store.commit("gpt/saveUserInput", data.content);
      this.$store.dispatch("gpt/createMessage", data);
      this.contenteditable.innerHTML = "";
      this.contenteditable.focus();

      // GA4 送出訊息時
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "submit_message_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: "submit_message/genio",
      });
    },
    initTimer(val = true) {
      // 開始計時文字輸入間隔
      if (val === true) {
        if (this.inputTimer) {
          this.inputTime = 0;
          clearInterval(this.inputTimer);
        }
        this.inputTimer = setInterval(() => {
          this.inputTime++;
        }, 1000);
      } else {
        clearInterval(this.inputTimer);
        this.inputTime = 0;
      }
    },
    handleEnd() {
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "close_chat2_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: "close_chat2/genio",
      });
      this.$store.commit("gpt/reset");
      this.$router.push("/end");
    },
    handleScroll(e) {
      const scrollTop = e.target.scrollTop;
      this.showBackTop = scrollTop >= 500 ? true : false;
    },
    scrollToTop() {
      document.querySelector(".bot-room").scrollTop = 0;
    },
  },
  computed: {
    loading() {
      return this.$store.state.gpt.loading;
    },
    userInputs() {
      return this.$store.state.gpt.userInputs;
    },
    isFinished() {
      return this.$store.state.gpt.botRoom.isFinished;
    },
    botStart() {
      return this.$store.getters["gpt/botStart"];
    },
    chatbot_session_id() {
      return this.$store.getters["gpt/chatbot_session_id"];
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  bottom: 0;
  box-shadow: 4px 1px 12px 0px #0000001a;
  background-color: #fff;
  .contenteditable {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px 20px;
    .content-box {
      flex: 1;
      min-height: 40px;
      border: 1px solid #818181;
      padding: 10px;
      background: #fff;
      margin-right: 12px;
      border-radius: 8px;
      max-height: 150px;
      overflow: auto;
      outline: none;
      font-size: 100%;
      line-height: 18px;
    }
    [contenteditable="true"]:empty:not(:focus):before {
      pointer-events: none;
      content: attr(data-placeholder);
      color: #666;
      font-size: 14px;
      line-height: 18px;
    }
    .submit {
      cursor: pointer;
      width: 24px;
      height: 24px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  .backTop {
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    top: -52px;
    right: 20px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      opacity: 1;
    }
  }
}

// .loading {
//   z-index: -1;
//   font-size: 14px;
//   position: absolute;
//   bottom: 70px;
//   left: 0;
//   width: 100%;
//   overflow: hidden;
//   display: flex;
//   margin: 0;
//   padding: 10px 15px;
//   background: linear-gradient(#ffffff00 0%, #ffffff85 30%, #ffffff 100%);
//   display: flex;
//   align-items: center;
// }
.end {
  width: 100%;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  padding: 8px;
  .el-button {
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .gpt-footer {
    position: fixed;
    left: 0;
  }
}
</style>
