<template>
  <div
    class="optionSelected"
    :class="{ client: message.chatUserRole === 'Customer' }"
  >
    <!--chatUserRole === 'Customer'-->

    <div class="content" v-if="message.chatUserRole === 'Customer'">
      {{ content.title }}
    </div>

    <!--chatUserRole === 'System'-->

    <div class="card" v-if="message.chatUserRole === 'System'">
      <div
        class="item-image"
        v-if="content.imageUrl"
        :style="`backgroundImage:url('${baseUrl + content.imageUrl}')`"
      ></div>
      <div class="item-infos">
        <div class="title">{{ content.title }}</div>
        <div class="sub-title gpt-ql-editor" v-html="content.subTitle"></div>
        <a
          class="buttonText"
          :href="content.linkUrl"
          target="_blank"
          v-if="content.linkUrl && content.buttonText"
          @click="handleClickLink(content.buttonText)"
        >
          <i class="bx bx-link-external"></i>
          <span>{{ content.buttonText }}</span>
        </a>
      </div>
    </div>

    <!--Text (預設)-->
    <!-- <div
        class="content"
        v-if="content.layout === 'text' || content.layout === null"
      >
        {{ content.title }}
      </div> -->
    <!--Link-->
    <!-- <div
        class="content"
        v-if="content.layout === 'link'"
        v-html="formateLink(message.content)"
      ></div> -->
    <!--Card-->
    <!-- <div class="card" v-if="content.layout === 'card'">
        <div
          class="item-image"
          v-if="content.imageUrl"
          :style="`backgroundImage:url('${baseUrl + content.imageUrl}')`"
        ></div>
        <div v-else class="item-default-image"></div>
        <div class="item-infos">
          <div class="title">{{ content.title }}</div>
          <div class="sub-title">{{ content.subTitle }}</div>
          <a class="buttonText" :href="content.linkUrl" target="_blank">{{
            content.buttonText || "Select"
          }}</a>
        </div>
      </div> -->

    <div class="time">{{ message.createAt | localTime }}</div>
  </div>
</template>

<script>
export default {
  name: "gpt-message-optionSelected",
  props: {
    message: {
      type: Object,
    },
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASEURL,
    };
  },
  methods: {
    formateLink(val) {
      const content = JSON.parse(val);
      const { title, linkUrl, subTitle } = content;
      let str = "";
      if (linkUrl && subTitle) {
        str =
          title +
          "<br />" +
          `<a href="${linkUrl}" target="_blank" rel="noreferrer noopener">${subTitle}</a>`;
      } else {
        str = title + "<br />" + "<b>Lose url.</b>";
      }
      return str;
    },
    handleClickLink(text) {
      // GA4 連結點擊
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: this.chatbot_session_id,
        event_name_ga4: "click_link_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: `${text}/click_link`,
      });
    },
  },
  computed: {
    content() {
      return JSON.parse(this.message.content);
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
