<template>
  <div id="app">
    <h3>網站標題：{{ title }}</h3>
    <p>{{ route.path }}</p>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      route: "",
    };
  },
  watch: {
    $route(val) {
      this.route = val;
    },
  },
};
</script>

<style lang="scss">
#app {
  width: 300px;
  height: 400px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #000;
  overflow: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
