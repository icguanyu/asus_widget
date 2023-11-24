<template>
  <div class="bot">
    <div class="content">
      <div class="kb-list">
        <div class="kb fisrt" v-if="kbList.first">
          <a
            class="kb-link"
            :href="kbList.first.Url"
            target="_blank"
            @click="handleLinkClick(kbList.first.Title)"
            >{{ kbList.first.Title }}</a
          >
          <div class="kb-summary">
            <!-- <div class="summary">{{ kbList.first.Summary }}</div> -->
            <div class="summary">
              {{ kbList.first.Summary.slice(0, 250) }}
              <span v-if="kbList.first.Summary.length > 250">...</span>
            </div>
            <!-- <p>點選此處開啟連結</p> -->
          </div>
        </div>
        <div class="kb others">
          <p>{{ $t("GPT.LAYOUT.READMORE") }}</p>
          <a
            class="kb-link"
            :href="kb.Url"
            target="_blank"
            v-for="(kb, index) in kbList.others"
            :key="index"
            @click="handleLinkClick(kb.Title)"
            >{{ kb.Title }}</a
          >
        </div>
        <div class="options">
          <!-- <div class="more" @click="showAll = !showAll">
            {{ showAll ? $t("GPT.LAYOUT.COLLAPSE") : $t("GPT.LAYOUT.READMORE") }}
          </div> -->
          <div>
            <i class="el-icon-loading" v-if="loading"></i>
            <div class="isLike" v-else>
              <div
                class="btn like"
                :class="{ active: message.isLike === true }"
                @click="handleChatLike(true)"
              >
                <i class="bx bx-like"></i>
              </div>
              <div
                class="btn dislike"
                :class="{ active: message.isLike === false }"
                @click="handleChatLike(false)"
              >
                <i class="bx bx-dislike"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="time">{{ message.createAt | localTime }}</div>
  </div>
</template>

<script>
export default {
  name: "gpt-message-bot",
  props: {
    message: {
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
      showAll: false,
    };
  },
  mounted() {
    const result = JSON.parse(this.message.content).Result;
    result.KbList.forEach((el) => {
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "text_link_impression_genio",
        event_category_DL: "genio",
        event_action_DL: "displayed",
        event_label_DL: `${el.Title}/text_link_impression`,
      });
    });
  },
  methods: {
    async handleChatLike(val) {
      this.loading = true;
      try {
        await this.$store.dispatch("gpt/handleChatLike", {
          chatBotMessageId: this.message.id,
          likeFlag: val,
        });
        // GA4 按讚/倒讚
        window.dataLayer.push({
          event: "data_layer_event",
          chatbot_session_id: this.chatbot_session_id,
          event_name_ga4: `${val ? "like" : "dislike"}_genio`,
          event_category_DL: "genio",
          event_action_DL: "clicked",
          event_label_DL: `${val ? "like" : "dislike"}/genio`,
        });
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
    handleLinkClick(text) {
      console.log("handleLinkClick", text);
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "text_click_link_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: `${text}/click_text_link`,
      });
    },
  },
  computed: {
    status() {
      return JSON.parse(this.message.content).Status;
    },
    kbList() {
      const result = JSON.parse(this.message.content).Result;
      const first = result ? result.KbList.shift() : null; // 第一則
      const others = result ? result.KbList : [];
      return {
        first,
        others,
      };
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
