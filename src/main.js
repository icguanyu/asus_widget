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
    shadowCss:`p{margin:0}.app{position:relative;position:fixed;border:1px dashed red;pointer-events:none}.app .main{z-index:1;pointer-events:auto;width:100%;height:100%;box-sizing:border-box;border-radius:5px;overflow:auto;font-family:Arial,Helvetica,sans-serif;box-shadow:2px 3px 8px #ddd;transition:all .5s;background:#fff}.app .main .header{padding:10px 10px;background-color:#0056f7;text-align:center;color:#fff;font-weight:700;font-size:14px;display:flex;justify-content:space-between}.app .main .header .name{flex:1}.app .main .header .left,.app .main .header .right{min-width:30px}.app .main .body{padding:10px}.app .main .body .params{background-color:#eee;padding:10px;text-align:left;font-size:12px;letter-spacing:1px}.app .main .body .params p{margin:0}.app .main .body nav a{font-size:14px;font-weight:700;text-decoration:none;color:#2c3e50}.app .main .body nav a.router-link-exact-active{color:#42b983}.element-hide{transform:scale(0);opacity:0}.position-right .main{transform-origin:bottom right}.position-left .main{transform-origin:bottom left}.toggle{cursor:pointer;position:absolute;pointer-events:auto;background-color:#0056f7;box-shadow:2px 3px 8px #ddd;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;z-index:-1}.toggle,.toggle-right{bottom:0;right:0}.toggle-left{bottom:0;left:0}.style-test[data-v-0cbb47b3]{font-size:14px;border:1px solid #000;padding:10px}.style-test .allpower[data-v-0cbb47b3]{background-color:#333;color:#fff}.style-test .test[data-v-0cbb47b3]{background-color:#0056f7;color:#ff0}.hello[data-v-30f0ca36]{color:#42b983}`
  });
}
