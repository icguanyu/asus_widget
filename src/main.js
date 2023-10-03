import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@ungap/custom-elements";
import i18n from "./i18n/i18n";
// import vueCustomElement from "vue-custom-element";

import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/scss/_element-variables.scss"; // 修改 ElementUI 預設變數
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
// Vue.use(vueCustomElement);

Vue.config.productionTip = false;

import * as filters from "./plugins/filters.js";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]); //插入過濾器名和對應方法
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
