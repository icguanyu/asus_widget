<template>
  <div class="option" v-if="message.type === 'Option'">
    <!--card style-->
    <div class="card" v-if="parentLayout === 'card' || parentLayout === 'gpt'">
      <div class="option-items">
        <div
          class="item"
          v-for="(item, index) in JSON.parse(message.content).data"
          :key="index"
        >
          <div
            class="item-image"
            v-if="item.editData.imageUrl"
            :style="`backgroundImage:url('${
              baseUrl + item.editData.imageUrl
            }')`"
          ></div>
          <div v-else class="item-default-image"></div>
          <div class="item-infos">
            <div class="title">{{ item.editData.title }}</div>
            <div class="sub-title">{{ item.editData.subTitle }}</div>
            <div
              class="buttonText"
              :class="{ disabled: isFinished }"
              @click="createOptionSelectMessage(item)"
            >
              {{ item.editData.buttonText || "Select" }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--除了 card/gpt style 以外 只能是 link style-->
    <div class="link" v-else>
      <div class="option-items">
        <div
          class="desc gpt-ql-editor"
          v-html="JSON.parse(message.content).desc"
        ></div>
        <div
          class="item"
          :class="{ disabled: isFinished }"
          v-for="(item, index) in filterOptions"
          :key="index"
          @click="createOptionSelectMessage(item)"
        >
          {{ item.editData.title }}
        </div>
        <div class="item" v-if="filterOptions.length === 0">尚無服務項目</div>
      </div>
    </div>
    <div class="time">{{ message.createAt | localTime }}</div>
  </div>
</template>

<script>
export default {
  name: "gpt-message-options",
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
    // 送出我選擇的服務項目 (Customer)
    async createOptionSelectMessage(item) {
      if (this.isFinished) {
        return;
      }
      // const { botKeyName } = item.editData;
      // const parentBotKeyName = this.findParentBotKeyName(item.parentId);
      const data = {
        type: "OptionSelect",
        chatUserRole: "Customer",
        content: JSON.stringify(item),
      };

      try {
        await this.$store.dispatch("gpt/createMessage", data);

        if (item.editData.isToAgent) {
          //情境 1. 只純粹轉真人
          const data = {
            type: "System",
            chatUserRole: "System",
            content: item.editData.toAgentDesc,
          };
          this.$store.dispatch("gpt/createMessage", data);
        } else if (item.items.length) {
          //情境 2. 選擇的項目有 child，送出選單(以及其layout)
          const data = {
            parentLayout: item.editData.layout,
            desc: item.editData.desc,
            data: item.items,
          };
          this.$store.dispatch("gpt/createOptionMessage", data);
        } else if (item.editData.chatGPTUrl) {
          // 情境 3. 有 chatGPTUrl
          this.createProductReply(item.editData);
        } else {
          // 情境 4. 都是意圖 不是 skill 也不是 技術支援
          this.createLinkMessage(item.editData.botKeyName);
        }
      } catch (error) {
        console.log("catch", error);
      }
    },
    // 送出 skills
    // async createTechnicalSupportMessage() {
    //   const tree_lv2 = this.$store.getters["gpt/lv2"];
    //   const data = {
    //     type: "Option",
    //     chatUserRole: "System",
    //     content: JSON.stringify(tree_lv2),
    //   };
    //   await this.$store.dispatch(
    //     "gpt/createBotReplyMessage",
    //     "ChatGPT_TechnicalSupportReply"
    //   );
    //   await this.$store.dispatch("gpt/createMessage", data);
    // },
    // 檢查 產品是否支援 Bot (後台有無設定 串接ChatGPT)
    // checkProductIsEnabled(item) {
    //   const { chatGPTUrl } = item.editData;
    //   if (!chatGPTUrl) {
    //     // 觸發轉真人
    //     this.$store.dispatch(
    //       "gpt/createToAgentMessage",
    //       "ChatGPT_ToAgent_TerminationService"
    //     );
    //   } else {
    //     this.createProductReply(item.editData);
    //   }
    // },
    // 送出 產品線回覆
    async createProductReply(editData) {
      // 設定BOT參數
      this.$store.commit("gpt/setBotRender", {
        bot: editData.chatGPTUrl,
        BotScope: editData.botKeyName,
      });
      await this.$store.dispatch(
        "gpt/createBotReplyMessage",
        "ChatGPT_ProductReply"
      );
    },
    // 送出 偵測意圖 (System)
    createLinkMessage(botKeyName) {
      this.$store.dispatch("gpt/handleReturnMessage", botKeyName);

      // const tree = this.$store.state.gpt.tree;
      // const message = tree[0].items.find((item) => {
      //   return item.editData.botKeyName === botKeyName;
      // });
      // const content = JSON.stringify(message.editData);
      // const data = {
      //   type: "Link",
      //   chatUserRole: "System",
      //   content: content,
      // };
      // this.$store.dispatch("gpt/createMessage", data);
    },
    findParentBotKeyName(parentId) {
      let target;
      const find = (items) => {
        if (!items.length) return;
        items.forEach((el) => {
          if (el.id === parentId) {
            target = el;
          } else {
            find(el.items);
          }
        });
      };
      find(this.tree[0].items);

      if (target) {
        return target.editData.botKeyName;
      } else {
        return "";
      }
    },
  },
  computed: {
    filterOptions() {
      const options = JSON.parse(this.message.content).data;
      return options.filter((el) => el.editData.isEnabled);
    },
    parentLayout() {
      return JSON.parse(this.message.content).parentLayout;
    },
    isFinished() {
      return this.$store.state.gpt.botRoom.isFinished;
    },
    tree() {
      return this.$store.state.gpt.tree;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "gpt.scss";
</style>
