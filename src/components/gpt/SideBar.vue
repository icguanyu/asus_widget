<template>
  <nav>
    <div class="head">
      <img src="@/assets/images/asus_white.png" alt="" />
    </div>
    <div class="body" v-if="setting">
      <div class="ads">
        <a :href="setting.ChatGPT_AD_Url_1">
          <i class="bx bx-link-external"></i>
          <span> {{ setting.ChatGPT_AD_Title_1 || "Not Set." }}</span>
        </a>
        <a :href="setting.ChatGPT_AD_Url_2">
          <i class="bx bx-link-external"></i>
          <span>{{ setting.ChatGPT_AD_Title_2 || "Not Set." }}</span>
        </a>
        <a :href="setting.ChatGPT_AD_Url_3">
          <i class="bx bx-link-external"></i>
          <span> {{ setting.ChatGPT_AD_Title_3 || "Not Set." }}</span>
        </a>
      </div>

      <div class="infos">
        <div class="ad-picture">
          <img
            v-if="setting.ChatGPT_AD_Picture"
            :src="baseUrl + setting.ChatGPT_AD_Picture"
            alt=""
          />
          <img v-else src="@/assets/images/avatar-3.jpg" alt="" />
        </div>
        <b>真人客服時間</b>
        <!-- 此处添加此富文本编辑器是为了样式显示出来 -->
        <vue-editor style="display:none" />
        <div class="ql-editor" v-html="serviceTimeBulletin || 'Not Set.'"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "gpt-side-bar",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASEURL,
    };
  },
  computed: {
    setting() {
      return this.$store.state.gpt.setting;
    },
    serviceTimeBulletin() {
      return this.$store.state.gpt.serviceTimeBulletin;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 0px 11px 0px #006ce138;
  background-color: white;
  width: 220px;
  height: 100%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .head {
    min-height: 60px;
    background-color: #006ce1;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 85px;
    }
  }
  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    .ads {
      padding: 40px 30px;
      margin-bottom: auto;
      a {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        text-decoration: none;
        i {
          font-size: 18px;
          color: $primary;
          margin-right: 5px;
          line-height: 20px;
        }
        span {
          display: block;
          color: black;
          line-height: 20px;
          font-size: 16px;
        }
      }
    }
    .infos {
      text-align: center;
      padding: 40px 30px;
      color: #262626;
      .ql-editor {
        min-height: 0;
        padding: 0;
        height: initial;
      }
      .ad-picture {
        width: 100%;
        height: 150px;
        margin-bottom: 20px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      b {
        display: block;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }
}

@media (max-width: 1024px) {
  nav {
    border-radius: 0px;
    box-shadow: none;
  }
  nav {
    display: none;
  }
}
</style>
