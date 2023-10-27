<template>
  <div class="bot">
    <div class="content">
      <div class="kb-list">
        <div class="kb fisrt" v-if="kbList.first">
          <div class="kb-title">
            {{ kbList.first.Title }}
          </div>
          <a class="kb-link" :href="kbList.first.Url" target="_blank">{{
            kbList.first.Url
          }}</a>
          <a :href="kbList.first.Url" target="_blank" class="kb-summary">
            <div class="summary">{{ kbList.first.Summary }}</div>
            <!-- <p>點選此處開啟連結</p> -->
          </a>
        </div>
        <div class="kb others">
          <p>{{ $t("GPT.LAYOUT.READMORE") }}</p>
          <a
            class="kb-link"
            :href="kb.Url"
            target="_blank"
            v-for="(kb, index) in kbList.others"
            :key="index"
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

      const first = result ? result.KbList.shift() : null; // 第一則
      const others = result ? result.KbList : [];
      return {
        first,
        others,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "gpt.scss";
</style>
