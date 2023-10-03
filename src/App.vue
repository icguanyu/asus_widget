<template>
  <div
    class="app"
    :class="{
      'position-right': position == 'right',
      'position-left': position == 'left',
    }"
    :style="myStyle"
  >
    <div
      class="body"
      :class="{
        'element-hide': !display,
      }"
    >
      <!-- <Header :name="name" :country="country" @toggle="show = !show" /> -->

      <!-- <p>當前路由：{{ route.path }}</p> -->
      <!-- <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>

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
        'toggle-right': position == 'right',
        'toggle-left': position == 'left',
      }"
      @click="toggleDisplay"
    >
      <img src="@/assets/images/avatar-genio.png" alt="" />
    </div>
  </div>
</template>

<script>
// import Header from "@/components/layout/Header";
export default {
  name: "App",
  // components: { Header },
  props: {
    name: {
      type: String,
      default: "請給我名稱",
    },
    country: {
      type: String,
      default: "TW",
    },
    position: {
      type: String,
      default: "right",
    },
    width: {
      type: String,
      default: "280px", //280
    },
    height: {
      type: String,
      default: "360px", //360
    },
    bottom: {
      type: String,
      default: "8px",
    },
    left: {
      type: String,
      default: "8px",
    },
    right: {
      type: String,
      default: "8px",
    },
  },
  data() {
    return {
      route: this.$route.path,
    };
  },
  watch: {
    $route(val) {
      this.route = val;
    },
  },
  mounted() {
    this.initConfig();
    // this.$router.push("/gpt");
    this.route = this.$route;

    if (this.route.name !== "gpt-entrance") {
      this.$router.push("/gpt");
    }
  },
  methods: {
    test() {
      console.log("父呼叫子");
      this.$store.dispatch("global/toggleDisplay");
    },
    toggleDisplay() {
      this.$store.dispatch("global/toggleDisplay");
    },
    initConfig() {
      this.$store.commit("global/setConfig", this.$props);
    },
  },
  computed: {
    myStyle() {
      const width = `width:${this.width};`;
      const height = `height:${this.height};`;
      const bottom = `bottom:${this.bottom};`;
      const right = `right:${this.right};`;
      const left = `left:${this.left};`;

      return (
        width + height + bottom + (this.position === "right" ? right : left)
      );
    },
    display() {
      return this.$store.state.global.display;
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
  position: fixed;
  pointer-events: none;
  .body {
    z-index: 1;
    pointer-events: initial;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: auto;
    // border: 1px solid #eee;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 2px 3px 8px #ccc;
    transition: all 0.5s;
    background: #fff;

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
.position-right {
  .body {
    transform-origin: bottom right;
  }
}
.position-left {
  .body {
    transform-origin: bottom left;
  }
}

.toggle {
  cursor: pointer;
  position: absolute;
  pointer-events: initial;
  background-color: rgb(0, 86, 247);
  box-shadow: 2px 3px 8px #ddd;
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
</style>
