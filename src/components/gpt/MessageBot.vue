<template>
  <div class="bot">
    <div class="content">
      <div class="kb-list" v-if="kbList.length">
        <div
          class="kb"
          :class="{ first: idx === 0 }"
          v-for="(i, idx) in kbList"
          :key="idx"
        >
          <div class="kb-title">
            {{ i.Title }}
          </div>
          <a class="kb-link" :href="i.Url" target="_blank">{{ i.Url }}</a>
          <a :href="i.Url" target="_blank" class="kb-summary">
            <div class="summary">{{ i.Summary }}</div>
            <!-- <p>點選此處開啟連結</p> -->
          </a>
        </div>
        <div class="options">
          <div class="more" @click="showAll = !showAll">
            {{ showAll ? $t("GPT.LAYOUT.COLLAPSE") : $t("GPT.LAYOUT.READMORE") }}
          </div>
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
  methods: {
    async handleChatLike(val) {
      this.loading = true;
      try {
        await this.$store.dispatch("gpt/handleChatLike", {
          chatBotMessageId: this.message.id,
          likeFlag: val,
        });
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
  },
  computed: {
    status() {
      return JSON.parse(this.message.content).Status;
    },
    kbList() {
      const result = JSON.parse(this.message.content).Result;
      if (result) {
        if (result.KbList.length) {
          return this.showAll ? result.KbList : [result.KbList[0]];
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "gpt.scss";
</style>
