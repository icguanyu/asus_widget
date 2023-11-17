<template>
  <div class="to-agnet">
    <div class="text" :class="{ client: message.chatUserRole === 'Customer' }">
      <div class="content gpt-ql-editor" v-html="message.content"></div>
      <div class="time">{{ message.createAt | localTime }}</div>
    </div>
    <div class="btns" v-if="display">
      <button class="primary" @click="transferToAgent">
        {{ $t("GPT.LAYOUT.TRANSFER_TOAGENT") }}
      </button>
      <!-- <button class="primary outline" @click="display = false">
        {{ $t("GPT.LAYOUT.CANCEL") }}
      </button> -->
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
    transferToAgent() {
      // if (this.isFinished) {
      //   return;
      // }
      // GA4 點擊 轉接專員
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "to_agent_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: "to_agent/genio",
      });
      this.$store.dispatch("gpt/transferToAgent");
    },
  },
  computed: {
    isFinished() {
      return this.$store.state.gpt.botRoom.isFinished;
    },
    chatbot_session_id() {
      return this.$store.getters["gpt/chatbot_session_id"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "gpt.scss";
</style>
