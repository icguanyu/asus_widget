import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@ungap/custom-elements";
import vueCustomElement from "vue-custom-element";
Vue.use(vueCustomElement);

Vue.config.productionTip = false;

App.store = store;
App.router = router;

const env = process.env.NODE_ENV;
if (env === "development") {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("asus-widget");
} else {
  Vue.customElement("asus-widget", App, {
    shadow: true,
    beforeCreateVueInstance(root) {
      const rootNode = root.el.getRootNode();

      if (rootNode instanceof ShadowRoot) {
        root.shadowRoot = rootNode;
      } else {
        root.shadowRoot = document.head;
      }
      return root;
    },
  });
}
