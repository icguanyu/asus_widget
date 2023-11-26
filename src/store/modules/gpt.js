import router from "@/router";
import {
  ChatBot,
  ChatBotRoom,
  ChatBotMessage,
  GetChatGPTBasicSetting,
  GetChaBotDecisionTree,
} from "@/api/gpt";
import { SettingMetas } from "@/api/settingMetas";
import { checkDevice } from "@/plugins/checkDevice";
import { getRandom } from "@/plugins/getRandom";
const botRender = JSON.parse(sessionStorage.getItem("AC_GPT_BOTRENDER"));
const state = {
  loading: true,
  setting: null,
  tree: null,
  botRoom: {
    chatBotRoomId: "",
    sessionId: "",
    messages: [],
    isFinished: null,
    countryId: "",
  },
  botRender: botRender || {
    chatBotRoomId: "",
    sessionId: "",
    bot: "Technical Support",
    BotScope: "",
    userInput: "",
  },
  userInputs: [],
  botKeyName: "", //當前回傳的意圖
  liveSupportCounts: 0, //觸發轉真人
  unlikeCounts: 0,
  idleTime: 0,
  offlineTime: 0,
};

const actions = {
  async createRoom({ rootState, commit, getters }) {
    const { countryId, platform, ASUSTicket } = rootState.global.config;
    // const locationCountry = await getUserIpCountry();
    const params = {
      ASUSTicket,
      countryId,
      platform,
      device: checkDevice(),
      locationCountry: "", // AP-2339 移除IP偵測
    };
    try {
      const res = await ChatBotRoom.Create(params);
      // console.log("create room", res);
      // 存下sessionId , 前往 room
      // localStorage 用來離開聊天室
      // sessionStorage 用來偵測是否關閉視窗回來
      window.bot_event?.source.postMessage(
        { roomId: res.data.chatBotRoomId },
        window.bot_parentUrl
      ); // send to parent
      localStorage.setItem("AC_GPT_SESSIONID", res.data.sessionId);
      sessionStorage.setItem("AC_GPT_SESSIONID", res.data.sessionId);
      commit("setBotRoom", res.data);
      router.push(`/${res.data.chatBotRoomId}`);

      //GA4
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: getters.chatbot_session_id,
        event_name_ga4: "start_genio",
        event_category_DL: "genio",
        event_action_DL: "clicked",
        event_label_DL: "start/genio",
      });
    } catch (error) {
      console.log("catch", error);
      window.bot_event?.source.postMessage(
        { roomId: "" },
        window.bot_parentUrl
      ); // send to parent (clear)
      commit("global/cleanRoomId", { root: true });
      router.push(`/?country=${countryId}`);
    }
  },
  async createNewRoom({ state, commit, dispatch }) {
    // 關閉當前 room
    const { chatBotRoomId, sessionId } = state.botRoom;
    await ChatBotRoom.Leave({ chatBotRoomId, sessionId });
    commit("reset");
    // 建立新 room
    dispatch("createRoom");
  },
  async leaveRoom({ commit }, payload) {
    await ChatBotRoom.Leave(payload);
    localStorage.removeItem("AC_GPT_SESSIONID");
    commit("reset");
    commit("finishRoom", payload.chatBotRoomId);
  },
  // 取得文案與決策樹資料
  async initSettingMetas({ state, dispatch, commit, getters }, payload = "TW") {
    try {
      const basic = await GetChatGPTBasicSetting.get(payload);
      const beforeChat = await SettingMetas.GetBeforeChat(payload);
      const tree = await GetChaBotDecisionTree.get(payload);
      commit("setMetas", {
        setting: basic.data.settings,
        tree: tree.data.items,
        serviceTimeBulletin: beforeChat.data.nonServiceTime.serviceTimeBulletin,
      });
      if (
        state.botRoom.isFinished === false &&
        state.botRoom.messages.length === 0
      ) {
        dispatch("createWelcomeMessage");
      }
    } catch (error) {
      console.log("error", error);
    }
    commit("toggleLoading", false);
  },
  async createWelcomeMessage({ state, dispatch, getters }, payload = false) {
    //payload = GUI測試用
    if (payload || state.botRoom.messages.length === 0) {
      // 歡迎訊息 和 初始服務選單
      await dispatch("createBotReplyMessage", "ChatGPT_Welcome");
      await dispatch("createOptionMessage");
      window.dataLayer.push({
        event: "data_layer_event",
        chatbot_session_id: getters.chatbot_session_id,
        event_name_ga4: "window_impression_genio",
        event_category_DL: "genio",
        event_action_DL: "displayed",
        event_label_DL: "window_impression/genio",
      });
    }
  },
  // 送出服務選單
  createOptionMessage({ dispatch, getters }, payload) {
    // payload = 選單項目 或 預設getters.lv1
    let content = payload || getters.lv1;
    const data = {
      type: "Option",
      chatUserRole: "System",
      content: JSON.stringify(content),
    };
    // console.log("data", data);
    return dispatch("createMessage", data);
  },
  // 轉真人訊息
  createToAgentMessage({ state, dispatch }, payload) {
    // console.log("轉真人訊息 createToAgentMessage");
    // payload :
    // "ChatGPT_ToAgent_TerminationService" (觸發轉真人)
    // "ChatGPT_ChatSentences_TerminationService" (對話次數限制)
    const reply = state.setting[payload] || "Not set.";
    const data = {
      type: "ToAgent",
      chatUserRole: "System",
      content: reply,
    };
    dispatch("createMessage", data);
  },
  createSettingMessage({ state, dispatch }, payload) {
    const message = state.setting[payload];
    const data = {
      type: "System",
      chatUserRole: "System",
      content: message,
    };
    dispatch("createMessage", data);
  },
  createBotReplyMessage({ state, dispatch }, payload) {
    // console.log("createBotReplyMessage", state.setting);
    let replys;
    let reply;
    if (state.setting[payload]) {
      replys = JSON.parse(state.setting[payload]);
      reply = replys.length
        ? replys[getRandom(0, replys.length - 1)]
        : "Not set.";
    } else {
      reply = "Not set.";
    }

    const data = {
      type: "System",
      chatUserRole: "System",
      content: reply,
    };
    // console.log(payload, ":", data);
    return dispatch("createMessage", data);
  },
  createMessage({ state, commit, getters }, payload) {
    const { type, content, chatUserRole } = payload;
    const params = {
      chatBotRoomId: state.botRoom.chatBotRoomId,
      sessionId: state.botRoom.sessionId,
      type,
      content,
      chatUserRole,
    };
    commit("setIdleTime", "off"); // reset idleTime
    return new Promise((resolve, reject) => {
      ChatBotMessage.Create(params)
        .then((res) => {
          // GA4 顯示轉接真人
          if (type === "ToAgent") {
            window.dataLayer.push({
              event: "data_layer_event",
              chatbot_session_id: getters.chatbot_session_id,
              event_name_ga4: "to_agent_impression_genio",
              event_category_DL: "genio",
              event_action_DL: "displayed",
              event_label_DL: "to_agent_impression/genio",
            });
          }
          // 顯示連結按鈕
          if (type === "OptionSelect" && chatUserRole === "System") {
            const buttonText = JSON.parse(content).buttonText || "";
            window.dataLayer.push({
              event: "data_layer_event",
              chatbot_session_id: getters.chatbot_session_id,
              event_name_ga4: "link_impression_genio",
              event_category_DL: "genio",
              event_action_DL: "displayed",
              event_label_DL: `${buttonText}/link_impression/genio`,
            });
          }

          commit("pushMessage", res.data);
          resolve(res);
        })
        .catch((error) => {
          console.log("catch", error);
          reject(error);
        })
        .finally(() => {});
    });
  },
  async createChatRenderMessage({ state, commit, dispatch, getters }) {
    if (!state.userInputs.length) {
      return;
    }
    commit("setBotRender", {
      userInput: state.userInputs.toString().replaceAll(",", ""),
    });
    commit("toggleLoading", true);
    try {
      const res = await ChatBot.ChatRender(state.botRender);
      const { Status, Result } = JSON.parse(res.data.content);
      const ReturnChatType = Result ? Result.ReturnChatType : "";
      const ReturnChatType2 = Result ? Result.ReturnChatType2 : "";
      const KbList = Result ? Result.KbList : [];
      // console.log("Result", Result);
      console.dir({
        Status,
        ReturnChatType,
        ReturnChatType2,
        KbList: KbList.length,
      });
      commit("setBotKeyName", { ReturnChatType, ReturnChatType2 });

      if (KbList.length) {
        // console.log("有KB List");
        // 一般 KB 回答
        dispatch("createBotReplyMessage", "ChatGPT_BotReply"); // 後台設定的BOT回覆結果

        // GA4 顯示 讚與倒讚時
        window.dataLayer.push({
          event: "data_layer_event",
          chatbot_session_id: getters.chatbot_session_id,
          event_name_ga4: "like_impression_genio",
          event_category_DL: "genio",
          event_action_DL: "displayed",
          event_label_DL: "like_impression/genio",
        });
      } else if (ReturnChatType2 || ReturnChatType) {
        // 偵測到第二層意圖
        const result2 = await dispatch("handleReturnMessage", ReturnChatType2);
        if (result2 === false) {
          // 往回尋求第一層
          const result1 = await dispatch("handleReturnMessage", ReturnChatType);
          if (result1 === false) {
            dispatch(
              "createToAgentMessage",
              "ChatGPT_ToAgent_TerminationService"
            );
          }
        }
      } else {
        dispatch("createToAgentMessage", "ChatGPT_ToAgent_TerminationService"); // 後台設定的轉接真人回覆
      }

      commit("pushMessage", res.data);
      commit("saveUserInput"); // clean userInputs
    } catch (error) {
      console.log("catch", error);
    }
    commit("toggleLoading", false);
  },
  handleReturnMessage({ state, dispatch }, ReturnMessage) {
    // 偵測到意圖  ReturnMessage = botKeyName
    // 透過 botKeyName 找到對應的決策樹資料(editData)
    let target;

    const find = (items) => {
      if (!items.length) return;
      items.forEach((el) => {
        if (el.editData.botKeyName === ReturnMessage) {
          target = el;
        } else {
          find(el.items);
        }
      });
    };
    find(state.tree[0].items);
    if (target) {
      const { isToAgent, layout, desc, toAgentDesc } = target.editData;
      if (isToAgent) {
        // console.log('這個意圖有設定為 isToAgent');
        // 這個意圖有設定為 isToAgent
        //dispatch("createToAgentMessage", "ChatGPT_ToAgent_TerminationService");
        const data = {
          type: "ToAgent",
          chatUserRole: "System",
          content: toAgentDesc,
        };
        dispatch("createMessage", data);
      } else if (target.items.length) {
        // 意圖有子層
        const data = {
          parentLayout: layout,
          desc: desc,
          data: target.items,
        };
        dispatch("createOptionMessage", data);
      } else {
        // 意圖本身
        const data = {
          type: "OptionSelect",
          chatUserRole: "System",
          content: JSON.stringify(target.editData),
        };
        dispatch("createMessage", data);
      }
    } else {
      // 意圖與tree對不上時
      console.log(`Decision tree 找不到 ${ReturnMessage} 的資料`);
      // dispatch("createToAgentMessage", "ChatGPT_ToAgent_TerminationService");
      return false;
    }
  },
  handleChatLike({ state, dispatch, commit }, { chatBotMessageId, likeFlag }) {
    const params = {
      chatBotRoomId: state.botRoom.chatBotRoomId,
      sessionId: state.botRoom.sessionId,
      chatBotMessageId,
      likeFlag,
    };
    return new Promise((resolve, reject) => {
      ChatBot.ChatLike(params)
        .then((res) => {
          const result = {
            id: res.data.id,
            isLike: res.data.isLike,
          };

          commit("likeMessage", result);
          dispatch("checkUnlikeCounts");
          resolve(res);
        })
        .catch((error) => {
          console.log("catch", error);
          reject(error);
        });
    });
  },
  checkUnlikeCounts({ state, dispatch }) {
    const counts = parseInt(state.setting.ChatGPT_Satisfaction);
    const unlikeCounts = state.unlikeCounts;
    console.log(`檢查不滿意次數：${unlikeCounts}/${counts}`);
    if (unlikeCounts >= counts) {
      // AP-1586 後台文案的輸入框拿掉，只出現 詢問是否轉真人的對話，即可
      // dispatch(
      //   "createSettingMessage",
      //   "ChatGPT_Satisfaction_TerminationService"
      // );
      dispatch("createToAgentMessage", "ChatGPT_ToAgent_TerminationService");
    }
  },
  async closeRoom({ state, commit, dispatch }, payload = true) {
    // payload = 是否顯示結束對話訊息
    const { chatBotRoomId, sessionId } = state.botRoom;
    try {
      await ChatBotRoom.Leave({ chatBotRoomId, sessionId });
      if (payload) {
        dispatch("createBotReplyMessage", "ChatGPT_LeaveRoom");
      }
      commit("reset");
      commit("finishRoom", chatBotRoomId);
    } catch (error) {
      console.log("catch", error);
    }
  },
  // handleToLiveSupport({ state, dispatch, commit }) {
  //   // 觸發轉真人意圖計次
  //   commit("setLiveSupportCounts");

  //   const counts = state.setting.ChatGPT_ToAgent;
  //   const liveSupportCounts = state.liveSupportCounts;
  //   console.log(`檢查觸發轉真人次數：${liveSupportCounts}/${counts}`);
  //   if (liveSupportCounts >= counts) {
  //     dispatch("createToAgentMessage", "ChatGPT_ToAgent_TerminationService");
  //     dispatch("createOptionMessage");
  //   }
  // },
  transferToAgent({ state, dispatch }) {
    dispatch("closeRoom");
    const url = process.env.VUE_APP_URL;
    window.open(
      `${url}?country=${state.botRoom.countryId}&skipPolicy=1&chatBotRoomId=${state.botRoom.chatBotRoomId}`,
      "_blank"
    );
  },
};

const mutations = {
  reset(state) {
    state.botRoom.isFinished = false;
    state.botRender = {
      chatBotRoomId: "",
      sessionId: "",
      bot: "Technical Support",
      BotScope: "",
      userInput: "",
    };
    sessionStorage.removeItem("AC_GPT_BOTRENDER");
    window.bot_event?.source.postMessage({ roomId: "" }, window.bot_parentUrl); // send to parent (clear)
  },
  toggleLoading(state, payload) {
    state.loading = payload;
  },
  setMetas(state, payload) {
    state.setting = payload.setting;
    state.tree = payload.tree;
    state.serviceTimeBulletin = payload.serviceTimeBulletin;
  },
  setBotRoom(state, payload) {
    state.botRoom = payload;
  },
  pushMessage(state, payload) {
    state.botRoom.messages.push(payload);
  },
  likeMessage(state, payload) {
    const { id, isLike } = payload;
    state.botRoom.messages.forEach((m) => {
      if (m.id === id) {
        m.isLike = isLike;
      }
    });

    let unlikes = state.botRoom.messages.filter((el) => el.isLike === false);
    state.unlikeCounts = unlikes.length;
  },
  setBotRender(state, { bot, BotScope, userInput }) {
    state.botRender.chatBotRoomId = state.botRoom.chatBotRoomId;
    state.botRender.sessionId = state.botRoom.sessionId;
    // bot ? (state.botRender.bot = bot) : "";
    BotScope ? (state.botRender.BotScope = BotScope) : "";
    userInput ? (state.botRender.userInput = userInput) : "";
    sessionStorage.setItem("AC_GPT_BOTRENDER", JSON.stringify(state.botRender));
  },
  setBotKeyName(state, payload) {
    state.botKeyName = payload;
  },
  setLiveSupportCounts(state, payload = true) {
    if (payload) {
      state.liveSupportCounts++;
    } else {
      state.liveSupportCounts = 0;
    }
  },
  saveUserInput(state, payload) {
    if (payload) {
      state.userInputs.push(payload);
    } else {
      state.userInputs = [];
    }
  },
  // times
  setIdleTime(state, payload) {
    if (payload == "on") {
      state.idleTime++;
    } else {
      state.idleTime = 0;
    }
  },
  finishRoom(state) {
    window.bot_event?.source.postMessage({ roomId: "" }, window.bot_parentUrl); // send to parent (clear)
    state.botRoom.isFinished = true;
  },
};

const getters = {
  // 第一層 Service Type
  lv1: (state) => {
    if (state.tree) {
      const parentLayout = state.tree[0].editData.layout;
      const desc = state.tree[0].editData.desc;
      const arr = state.tree[0].items.map((el) => {
        return el;
      });
      return {
        serviceType: true, // 預設選單
        parentLayout,
        desc,
        data: arr,
      };
    } else {
      return {};
    }
  },
  // 第二層(Technical Support)選項 skills
  lv2: (state) => {
    if (state.tree) {
      const target = state.tree[0].items.find((item) => {
        return item.editData.botKeyName === "Technical Support";
      });
      const arr = target.items.map((el) => {
        return el.editData;
      });
      const parentLayout = target.editData.layout;
      return {
        parentLayout,
        data: arr,
      };
    } else {
      return {};
    }
  },
  answerCounts: (state) => {
    const messages = state.botRoom.messages.filter(
      (el) => el.chatUserRole === "ChatBot"
    );
    const success = messages.filter((el) => {
      const { Status, Result } = JSON.parse(el.content);
      return Status === 200 && Result.KbList.length;
    });
    return {
      fail: messages.length - success.length,
      success: success.length,
      total: messages.length,
    };
  },
  botStart: (state) => {
    const { BotScope } = state.botRender;
    return BotScope ? true : false;
  },
  chatbot_session_id: (state) => {
    const roomId = state.botRoom.chatBotRoomId;
    if (roomId) {
      return `${
        process.env.VUE_APP_PRO_ENV
      }_${new Date().getFullYear()}_${roomId}`;
    } else {
      return "";
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
