import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@ungap/custom-elements';
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.config.productionTip = false

App.store = store
App.router = router

Vue.customElement('asus-widget', App)

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
