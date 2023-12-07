const getCookie = (cname) => {
  let name = cname + "=";
  // let decodedCookie = decodeURIComponent(document.cookie);
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const state = {
  display: false,
  config: {
    ASUSTicket: getCookie("aticket"),
    countryId: "TW",
    platform: "",
    position: "left",
    roomId: "", //若有 , 直接前往該 room
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
  cleanRoomId(state) {
    state.config.roomId = "";
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
