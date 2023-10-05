const state = {
  display: true,
  config: {
    country: "",
    position: "",
  },
};

const actions = {
  toggleDisplay({ state, commit }) {
    commit("setDisplay", !state.display);
  },
};

const mutations = {
  setDisplay(state, payload) {
    state.display = payload;
  },
  setConfig(state, payload) {
    Object.assign(state.config, payload);
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
