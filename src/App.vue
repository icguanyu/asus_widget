<template>
  <div
    class="app"
    :class="{
      'position-right': position == 'right',
      'position-left': position == 'left',
    }"
    :style="`width:${width};height:${height}`"
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
      default: "enter name",
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
      alert("hello call methods");
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
  .main {
    z-index: 1;
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
  right: 10px;
  bottom: 10px;
  .main {
    transform-origin: bottom right;
  }
}
.position-left {
  bottom: 10px;
  left: 10px;
  .main {
    transform-origin: bottom left;
  }
}

.toggle {
  cursor: pointer;
  position: absolute;
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
