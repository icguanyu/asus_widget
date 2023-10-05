<template>
  <div class="gpt-counter">
    <!-- <div>
      閒置/提示/斷線：{{ idleTime }}/<span v-if="setting"
        >{{ setting.ChatGPT_IdleNoticeTime }}/{{
          parseInt(this.setting.ChatGPT_IdleNoticeTime) +
            parseInt(this.setting.ChatGPT_IdleDisconnectTime)
        }}s</span
      >
    </div> -->
  </div>
</template>

<script>
export default {
  name: "gpt-counter",
  data() {
    return {
      idleTimer: null,
      offlineTimer: null,
      throttlingTimer: null,
    };
  },
  created() {
    let body = document.querySelector("body");
    body.addEventListener("mousemove", this.throttling);
    this.$once("hook:beforeDestroy", () => {
      body.removeEventListener("mousemove", this.throttling);
    });
  },
  mounted() {
    this.initIdleCountDown();
  },
  watch: {
    isFinished(val) {
      if (val === false) {
        this.initIdleCountDown();
      }
    },
    idleTime(val) {
      if (this.setting) {
        const idleNoticeTime = this.setting.ChatGPT_IdleNoticeTime;
        const offlineNoiceTime =
          parseInt(this.setting.ChatGPT_IdleNoticeTime) +
          parseInt(this.setting.ChatGPT_IdleDisconnectTime);

        if (idleNoticeTime) {
          if (val == idleNoticeTime) {
            // console.log("先不顯示閒置提示訊息。");
            // this.sendMessage("ChatGPT_IdleNotice");
          }
          if (val > offlineNoiceTime) {
            // console.log("踢人!");
            this.stopIdleCountDown();
            this.sendMessage("ChatGPT_IdleDisconnect");
            this.handleCloseRoom();
          }
        } else {
          console.log("未設定 ChatGPT_IdleNoticeTime 停止計時");
          this.stopIdleCountDown();
        }
      }
    },
  },
  methods: {
    initIdleCountDown() {
      const vm = this;
      if (vm.idleTimer == null) {
        // console.log("開始閒置計時");
        vm.idleTimer = setInterval(function() {
          if (vm.isFinished) {
            // console.log("聊天室已結束");
            vm.stopIdleCountDown();
            // 對話已結束
          } else {
            vm.idleCountDown("on");
          }
        }, 1000);
      } else {
        clearInterval(vm.idleTimer);
        vm.idleTimer = null;
        vm.initIdleCountDown();
      }
    },
    idleCountDown(val = "on") {
      this.$store.commit("gpt/setIdleTime", val);
    },
    stopIdleCountDown() {
      if (this.idleTimer) {
        // console.log("停止閒置計時");
        clearInterval(this.idleTimer);
        this.idleTimer = null;
        this.idleCountDown("off");
      }
    },
    throttling() {
      const vm = this;
      if (!vm.throttlingTimer) {
        vm.throttlingTimer = setTimeout(function() {
          vm.idleCountDown("off");
          vm.throttlingTimer = null;
        }, 500);
      }
    },
    async sendMessage(key) {
      const message = this.setting[key];
      const data = { type: "Text", content: message, chatUserRole: "System" };
      try {
        const res = await this.$store.dispatch("gpt/createMessage", data);
        // console.log("res", res);
      } catch (error) {
        console.log("catch", error);
      }
    },
    handleCloseRoom() {
      this.$store.dispatch("gpt/closeRoom", false);
    },
  },
  computed: {
    setting() {
      return this.$store.state.gpt.setting;
    },
    idleTime() {
      return this.$store.state.gpt.idleTime;
    },
    offlineTime() {
      return this.$store.state.gpt.offlineTime;
    },
    isFinished() {
      return this.$store.state.gpt.botRoom.isFinished;
    },
  },
};
</script>

<style lang="scss" scoped>
.gpt-counter {
  opacity: 0;
  background-color: #ffffff94;
  position: fixed;
  top: 0;
  font-size: 14px;
  left: 0;
  padding: 5px;
}
</style>
