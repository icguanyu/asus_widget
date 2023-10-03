<template>
  <div class="to-agnet">
    <div class="text" :class="{ client: message.chatUserRole === 'Customer' }">
      <div class="content">
        {{ message.content }}
      </div>
      <div class="time">{{ message.createAt | localTime }}</div>
    </div>
    <div class="btns" v-if="display">
      <button class="primary" @click="transferToAgent">
        {{ $t("GPT.LAYOUT.TRANSFER_TOAGENT") }}
      </button>
      <button class="primary outline" @click="display = false">
        {{ $t("GPT.LAYOUT.CANCEL") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "gpt-message-toAgent",
  props: {
    message: {
      type: Object,
    },
  },
  data() {
    return {
      display: true,
    };
  },
  methods: {
    createNewRoom() {
      // if (this.isFinished) {
      //   return;
      // }
      this.$store.dispatch("gpt/createNewRoom");
    },
    transferToAgent() {
      // if (this.isFinished) {
      //   return;
      // }
      this.$store.dispatch("gpt/transferToAgent");
    },
  },
  computed: {
    isFinished() {
      return this.$store.state.gpt.botRoom.isFinished;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "gpt.scss";
</style>
