<template>
  <div class="bot-room" v-chat-scroll>
    <!-- <GUI /> -->
    <!--閒置計時-->
    <Counter />
    <div class="rows">
      <div
        v-for="m in messages"
        :key="m.id"
        class="row"
        :class="{
          hide: checkIsHidden(m),
        }"
      >
        <div
          class="content"
          :class="{
            client: m.chatUserRole === 'Customer',
          }"
        >
          <div class="avatar" :class="{ bot: m.type === 'ChatRender' }"></div>
          <div class="message">
            <!-- <div class="infos">
              <div>Type：{{ m.type }}</div>
            </div> -->
            <!--type = text/System -->
            <MessageSystem :message="m" v-if="m.type === 'System'" />
            <MessageText :message="m" v-if="m.type === 'Text'" />
            <MessageToAgent :message="m" v-if="m.type === 'ToAgent'" />
            <MessageOptions :message="m" v-if="m.type === 'Option'" />
            <MessageOptionSelected
              :message="m"
              v-if="m.type === 'OptionSelect'"
            />
            <MessageLink :message="m" v-if="m.type === 'Link'" />
            <MessageBot :message="m" v-if="m.type === 'ChatRender'" />
            <!-- <div class="time">{{ m.createAt.slice(14, 19) }}</div> -->
          </div>
        </div>
      </div>
      <!--Loading-->
      <!-- <div class="row" v-show="!loading">
        <div class="content">
          <div class="avatar"></div>
          <div class="loading">
            請稍候，正在幫您尋找解決辦法中。<i class="el-icon-loading"></i>
          </div>
        </div>
      </div> -->
    </div>

    <Footer />
  </div>
</template>

<script>
import { ChatBotMessage } from "@/api/gpt";
// import GUI from "@/components/gpt/GUI";
import Counter from "@/components/gpt/Counter";
import Footer from "@/components/gpt/Footer";
import MessageSystem from "@/components/gpt/MessageSystem";
import MessageText from "@/components/gpt/MessageText";
import MessageOptions from "@/components/gpt/MessageOptions";
import MessageToAgent from "@/components/gpt/MessageToAgent";
import MessageLink from "@/components/gpt/MessageLink";
import MessageOptionSelected from "@/components/gpt/MessageOptionSelected";
import MessageBot from "@/components/gpt/MessageBot";

import { languages } from "@/plugins/languages";
export default {
  name: "gpt-room",
  components: {
    Counter,
    Footer,
    MessageSystem,
    MessageText,
    MessageOptions,
    MessageToAgent,
    MessageLink,
    MessageOptionSelected,
    MessageBot,
  },
  data() {
    return {
      params: {
        chatBotRoomId: this.$route.params.id,
        sessionId: sessionStorage.getItem("AC_GPT_SESSIONID"),
      },
    };
  },
  watch: {
    $route() {
      // route change = new room
      this.$store.dispatch("gpt/createWelcomeMessage");
    },
    loading(val) {
      if (val) {
        // console.log("開始 loading");
        const data = {
          type: "System",
          chatUserRole: "System",
          content: this.$t("GPT.MESSAGE.WAIT"),
        };
        this.$store.dispatch("gpt/createMessage", data);
      } else {
        // console.log("loading 結束");
      }
    },
    "answerCounts.total"(val) {
      const vm = this;
      if (this.setting) {
        if (val >= this.setting.ChatGPT_ChatSentences) {
          setTimeout(() => {
            // console.log("達上限!!");
            vm.$store.dispatch(
              "gpt/createToAgentMessage",
              "ChatGPT_ChatSentences_TerminationService"
            );
            // 結束room
            this.$store.dispatch("gpt/closeRoom", false);
          }, 500);
        }
      }
    },
  },
  created() {
    if (this.params.chatBotRoomId && this.params.sessionId) {
      // 取回原本的 botRoom 資料 以及 basic/tree...
      this.initBotRoom();
    } else {
      // 失去 session 離開 room
      const chatBotRoomId = this.$route.params.id;
      const sessionId = localStorage.getItem("AC_GPT_SESSIONID"); // 存在localstorage 的 sessionId
      if (chatBotRoomId && sessionId) {
        this.$store.dispatch("gpt/leaveRoom", { chatBotRoomId, sessionId });
      }
      this.$router.push("/");
    }
  },
  methods: {
    async initBotRoom() {
      try {
        const res = await ChatBotMessage.GetMessageList(this.params);
        // console.log("initBotRoom", res);
        // console.log("this.$store", this.$store);
        const countryId = res.data.countryId;
        const lang = languages.includes(countryId) ? countryId : "TW";
        this.$i18n.locale = lang;
        this.$store.commit("gpt/setBotRoom", res.data);
        this.$store.dispatch("gpt/initSettingMetas", countryId);
      } catch (error) {
        console.log("initBotRoom error", error);
      }
    },
    checkIsHidden(m) {
      if (m.type === "ChatRender") {
        // Status == 200 且有 KB 才算回答成功
        const { Status, Result } = JSON.parse(m.content);
        if (Status == 200) {
          const KbList = Result.KbList;
          return KbList.length ? false : true;
        } else {
          return true;
        }
      }
      return false;
    },
  },
  computed: {
    loading() {
      return this.$store.state.gpt.loading;
    },
    messages() {
      return this.$store.state.gpt.botRoom.messages;
    },
    setting() {
      return this.$store.state.gpt.setting;
    },
    answerCounts() {
      return this.$store.getters["gpt/answerCounts"];
    },
  },
};
</script>

<style lang="scss" scoped>
.bot-room {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.rows {
  flex: 1;
  padding: 10px;
  .row {
    overflow: hidden;
    margin-bottom: 16px;
    display: flex;
    &:last-child {
      margin-bottom: 0;
    }
    .content {
      display: flex;
      // border: 1px solid #eee;
      width: 100%;
      overflow: hidden;
      .avatar {
        width: 30px;
        min-width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #ccc;
        margin-right: 8px;
        background-image: url("../../assets/images/avatar-genio.png");
        background-size: cover;
      }
      .message {
        max-width: 500px;
        font-size: 13px;
        line-height: 18px;
        flex: 1;
        overflow: hidden;
        // overflow-x: auto;
        // display: flex;
        // align-items: flex-end;
        color: #181818;
        .infos {
          font-size: 12px;
          line-height: 14px;
          display: flex;
          align-items: center;
          div {
            color: #888;
            border: 1px dashed #aaa;
            border-radius: 3px;
            padding: 1px 3px;
            margin-right: 5px;
            margin-bottom: 5px;
          }
        }
      }
      .loading {
        font-size: 13px;
        display: inline-block;
        padding: 10px 15px;
        background-color: #f5f5f5;
        margin-top: 0;
        margin-bottom: 5px;
        border-radius: 2px 8px 8px 8px;
      }
      .time {
        margin-left: 4px;
        font-size: 13px;
        color: #666;
      }
    }

    .content.client {
      justify-content: end;
      .avatar {
        display: none;
      }
      .message {
        color: #262626;
        text-align: right;
        flex-direction: row-reverse;
        .infos {
          justify-content: flex-end;
        }
        .time {
          margin-left: 0;
          margin-right: 4px;
        }
      }
    }
  }
  .row.hide {
    // opacity: 0.3;
    display: none;
    position: relative;
    border: 1px solid #000;
    &::after {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      content: "隱藏";
      font-size: 80px;
      font-weight: bold;
    }
  }
}
</style>
