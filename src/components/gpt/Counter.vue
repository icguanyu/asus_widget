<template>
  <div class="gpt-counter">
    <div>
      閒置/提示/斷線：{{ idleTime }}/<span v-if="setting"
        >{{ setting.ChatGPT_IdleNoticeTime }}/{{
          parseInt(this.setting.ChatGPT_IdleNoticeTime) +
          parseInt(this.setting.ChatGPT_IdleDisconnectTime)
        }}s</span
      >
    </div>
    <p>
      剛剛螢幕離開了：{{
        leaveTime ? parseInt((backTime - leaveTime) / 1000) : 0
      }}s
    </p>
    <p>總閒置：{{ totalIdleTime }}s</p>
  </div>
</template>

<script>
export default {
  name: "gpt-counter",
  data() {
    return {
      idleTimer: null,
      throttlingTimer: null,
      leaveTime: 0,
      backTime: 0,
      totalIdleTime: 0,
      isEnd: false, //flag
    };
  },
  mounted() {
    this.initIdleCountDown();
    document.addEventListener("visibilitychange", this.handleVisibility);

    let body = document.querySelector("body");
    let room = document.querySelector(".bot-room");
    body.addEventListener("mousemove", this.throttling);
    room.addEventListener("scroll", this.throttling);

    this.$once("hook:beforeDestroy", () => {
      body.removeEventListener("mousemove", this.throttling);
      room.removeEventListener("scroll", this.throttling);
    });
  },
  watch: {
    isFinished(val) {
      if (val === false) {
        this.initIdleCountDown();
        this.isEnd = false;
      }
    },
    idleTime(val) {
      this.totalIdleTime = this.leaveTime
        ? parseInt(val + (this.backTime - this.leaveTime) / 1000)
        : val;
      // console.log("this.totalIdleTime", this.totalIdleTime);
      if (this.setting) {
        const idleNoticeTime = this.setting.ChatGPT_IdleNoticeTime;
        const offlineNoiceTime =
          parseInt(this.setting.ChatGPT_IdleNoticeTime) +
          parseInt(this.setting.ChatGPT_IdleDisconnectTime);

        if (idleNoticeTime) {
          if (this.totalIdleTime == idleNoticeTime) {
            // 客戶要求先不顯示閒置提示訊息。
            // this.sendMessage("ChatGPT_IdleNotice");
          }
          if (
            this.totalIdleTime > offlineNoiceTime &&
            !this.isFinished &&
            !this.isEnd
          ) {
            this.isEnd = true;
            this.sendMessage("ChatGPT_IdleDisconnect");
            this.stopIdleCountDown();
            this.handleCloseRoom();
          }
        } else {
          console.log("Notice: ChatGPT_IdleNoticeTime not set.");
          this.stopIdleCountDown();
        }
      }
    },
  },
  methods: {
    initIdleCountDown() {
      const vm = this;
      if (vm.idleTimer == null) {
        vm.idleTimer = setInterval(function () {
          if (vm.isFinished) {
            // room 已結束
            vm.stopIdleCountDown();
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
      clearInterval(this.idleTimer);
      this.idleTimer = null;
      this.idleCountDown("off");
    },
    throttling() {
      const vm = this;
      if (!vm.throttlingTimer) {
        vm.throttlingTimer = setTimeout(function () {
          vm.leaveTime = 0; // reset
          vm.backTime = 0; // reset
          vm.totalIdleTime = 0; // reset
          vm.idleCountDown("off");
          vm.throttlingTimer = null;
        }, 500);
      }
    },
    async sendMessage(key) {
      const message = this.setting[key];
      const data = { type: "Text", content: message, chatUserRole: "System" };
      try {
        await this.$store.dispatch("gpt/createMessage", data);
        // console.log("res", res);
      } catch (error) {
        console.log("catch", error);
      }
    },
    handleCloseRoom() {
      this.$store.dispatch("gpt/closeRoom", false);
    },
    handleVisibility() {
      if (this.isFinished) return;
      const visibilityState = document.visibilityState;
      if (visibilityState === "visible") {
        this.backTime = new Date().getTime();
        this.totalIdleTime = parseInt(
          this.idleTime + (this.backTime - this.leaveTime) / 1000
        );
        this.initIdleCountDown(); // 模擬手機回來
      } else {
        this.leaveTime = new Date().getTime();
        clearInterval(this.idleTimer); // 模擬手機滑開
      }
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
  beforeDestroy() {
    clearInterval(this.idleTimer);
    document.removeEventListener("visibilitychange", this.handleVisibility);
  },
};
</script>

<style lang="scss" scoped>
.gpt-counter {
  position: fixed;
  top: 0;
  left: 0;
  font-size: 14px;
  line-height: 16px;
  padding: 5px;
  opacity: 0.5;
  z-index: 10;
  p {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .gpt-counter {
    top: 56px;
    left: 0px;
    transform: initial;
  }
}
</style>
