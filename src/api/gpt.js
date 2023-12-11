import request from "./index";

export const ChatBot = {
  ChatRender: (data) => {
    return request.post("/api/ChatBot/ChatRender", data);
  },
  ChatLike: (data) => {
    return request.post("/api/ChatBot/ChatLike", data);
  },
  CreateSurvey: (data) => {
    return request.post("/api/ChatBot/ChatBotRoom/CreateSurvey", data);
  },
};

export const ChatBotRoom = {
  Create: (data) => {
    return request.post("/api/ChatBot/ChatBotRoom/Create", data);
  },
  Leave: (data) => {
    return request.post("/api/ChatBot/ChatBotRoom/Leave", data);
  },
};

export const ChatBotMessage = {
  Create: (data) => {
    return request.post("/api/ChatBot/ChatBotMessage/Create", data);
  },
  GetMessageList: (data) => {
    return request.post("/api/ChatBot/ChatBotMessage/GetMessageList", data);
  },
};

export const GetChatGPTBasicSetting = {
  get: (countryId) => {
    return request.get(`/api/SettingMetas/GetChatGPTBasicSetting/${countryId}`);
  },
};
export const GetChaBotDecisionTree = {
  get: (countryId) => {
    return request.get(`/api/SettingMetas/GetChaBotDecisionTree/${countryId}`);
  },
};
