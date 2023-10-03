<template>
  <div class="text" :class="{ client: message.chatUserRole === 'Customer' }">
    <div class="content" v-html="formateLink(message.content)"></div>
  </div>
</template>

<script>
export default {
  name: "gpt-message-link",
  props: {
    message: {
      type: Object,
    },
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
  },
};
</script>

<style lang="scss" scoped>
@import "gpt.scss";
</style>
