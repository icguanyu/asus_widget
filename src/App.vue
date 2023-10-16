<template>
  <div
    class="app"
    :class="{
      'position-right': config.position == 'right',
      'position-left': config.position == 'left',
      'position-fixed': !display,
    }"
  >
    <div
      class="container"
      :class="{
        'element-hide': !display,
      }"
    >
      <!-- <Header :name="name" :country="country" @toggle="show = !show" /> -->

      <!-- <p>當前路由：{{ route.path }}</p> -->
      <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/gpt">GPT</router-link>
      </nav> -->
      <!-- 
      <div class="params">
        <b>收到or預設參數：</b>
        <p>標題：{{ name }}</p>
        <p>位置：{{ position }}</p>
        <p>寬：{{ width }}</p>
        <p>高：{{ height }}</p>
        <p>底：{{ bottom }}</p>
        <p>左：{{ left }}</p>
        <p>右：{{ right }}</p>
      </div> -->

      <router-view />
    </div>

    <div
      class="toggle"
      :class="{
        'toggle-right': config.position == 'right',
        'toggle-left': config.position == 'left',
        'toggle-hide': display,
      }"
      @click="toggleDisplay"
    >
      <img src="@/assets/images/avatar-genio.png" alt="" />
    </div>
  </div>
</template>

<script>
// import Header from "@/components/layout/Header";
import { languages } from "@/plugins/languages";
export default {
  name: "App",
  // components: { Header },
  data() {
    return {
      route: this.$route.path,
      parentUrl: "https://asus-widget-test.netlify.app", // 要從 parent 來
      event: null,
    };
  },
  watch: {
    $route(val) {
      this.route = val;
    },
    display(val) {
      this.event.source.postMessage({ display: val }, this.parentUrl);
    },
  },

  mounted() {
    this.onMessage();
    // this.$router.push("/gpt");
    this.route = this.$route;
  },
  methods: {
    onMessage() {
      const vm = this;
      window.addEventListener("message", (event) => {
        console.log("event.origin", event.origin);
        vm.event = event;
        if (event.origin === vm.parentUrl) {
          console.log("來自父層的資料:", event.data);
          // position: left / right
          // country:
          const { countryId } = event.data;
          vm.$store.commit("global/setConfig", event.data);
          vm.$store.dispatch("gpt/initSettingMetas", countryId);

          const lang = languages.includes(countryId) ? countryId : "TW";

          vm.$i18n.locale = lang;
          // 回覆消息到父層
          const replyMessage = "Hello 我是小工具!";
          event.source.postMessage(replyMessage, vm.parentUrl);
        }
      });
    },
    test() {
      console.log("父呼叫子");
      this.$store.dispatch("global/toggleDisplay");
    },
    toggleDisplay() {
      this.$store.dispatch("global/toggleDisplay");
    },
  },
  computed: {
    // myStyle() {
    //   const width = `width:${this.width};`;
    //   const height = `height:${this.height};`;
    //   const bottom = `bottom:${this.bottom};`;
    //   const right = `right:${this.right};`;
    //   const left = `left:${this.left};`;

    //   return (
    //     width + height + bottom + (this.position === "right" ? right : left)
    //   );
    // },
    display() {
      return this.$store.state.global.display;
    },
    config() {
      return this.$store.state.global.config;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
p {
  margin: 0;
}
.app {
  position: relative;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  // padding: 15px;
  .container {
    z-index: 1;
    pointer-events: initial;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    // border: 1px solid #eee;
    font-family: Arial, Helvetica, sans-serif;
    // box-shadow: 2px 3px 8px #ccc;
    transition: all 0.4s;
    // background: #fff;
    .params {
      background-color: #eee;
      padding: 10px;
      text-align: left;
      font-size: 12px;
      letter-spacing: 1px;
      p {
        margin: 0;
      }
    }
    nav {
      a {
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
.element-hide {
  transform: scale(0);
  opacity: 0;
}
.position-fixed {
  position: fixed;
}
.position-right {
  .container {
    transform-origin: bottom right;
  }
}
.position-left {
  .container {
    transform-origin: bottom left;
  }
}

.toggle {
  cursor: pointer;
  position: absolute;
  pointer-events: initial;
  background-color: rgb(0, 86, 247);
  // box-shadow: 2px 3px 8px #ddd;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
}
.toggle-right {
  right: 0;
  bottom: 0;
}
.toggle-left {
  bottom: 0;
  left: 0;
}
.toggle-hide {
  display: none;
}
</style>
