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
      class="main"
      :class="{
        'element-hide': !show,
      }"
    >
      <div class="header">
        <div class="left">hi</div>
        <div class="name">{{ name }}</div>
        <div class="right" @click="show = !show">隱藏</div>
      </div>
      <div class="body">
        <p>當前路由：{{ route.path }}</p>
        <nav>
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
        </div>

        <div class="style-test">
          <div class="allpower">我是.allpower</div>
          <div class="test">我是.test</div>
        </div>
        <router-view />
      </div>
    </div>

    <div
      class="toggle"
      :class="{
        'toggle-right': position == 'right',
        'toggle-left': position == 'left',
      }"
      @click="show = true"
    >
      顯示
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    name: {
      type: String,
      default: "請給我名稱",
    },
    position: {
      type: String,
      default: "right",
    },
    width: {
      type: String,
      default: "280px",
    },
    height: {
      type: String,
      default: "360px",
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
      show: true,
      route: this.$route.path,
    };
  },
  watch: {
    $route(val) {
      this.route = val;
    },
  },
  mounted() {
    this.route = this.$route;
  },
  methods: {
    test() {
      this.show = !this.show;
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
  },
};
</script>

<style lang="scss">
p {
  margin: 0;
}
.app {
  position: relative;
  position: fixed;
  border: 1px dashed red;
  pointer-events: none;
  .main {
    z-index: 1;
    pointer-events: initial;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: auto;
    // border: 1px solid #eee;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 2px 3px 8px #ddd;
    transition: all 0.5s;
    background: #fff;
    .header {
      padding: 10px 10px;
      background-color: rgb(0, 86, 247);
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      .name {
        flex: 1;
      }
      .left,
      .right {
        min-width: 30px;
      }
    }
    .body {
      padding: 10px;
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
}
.element-hide {
  transform: scale(0);
  opacity: 0;
}
.position-right {
  .main {
    transform-origin: bottom right;
  }
}
.position-left {
  .main {
    transform-origin: bottom left;
  }
}
.style-test {
  font-size: 14px;
  border: 1px solid #000;
  padding: 10px;
  .allpower {
    background-color: #333;
    color: white;
  }
  .test {
    background-color: rgb(0, 86, 247);
    color: yellow;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  z-index: -1;
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
