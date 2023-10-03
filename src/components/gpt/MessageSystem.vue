<template>
  <div class="text" :class="{ client: message.chatUserRole === 'Customer' }">
    <div class="content">
      {{ message.content }}
    </div>
    <div class="time">{{ message.createAt | localTime }}</div>
  </div>
</template>

<script>
export default {
  name: "gpt-message-system",
  props: {
    message: {
      type: Object,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "gpt.scss";
</style>
