import Vue from "vue";
import Vuex from "vuex";

import global from "./modules/global.js";
import gpt from "./modules/gpt";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    gpt,
  },
});
