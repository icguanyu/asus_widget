import request from "./index";

export const SettingMetas = {
  GetBeforeChat: (countryId) => {
    return request.get(`/api/SettingMetas/GetBeforeChat/${countryId}`);
  },
  GetChatting: (countryId) => {
    return request.get(`/api/SettingMetas/GetChatting/${countryId}`);
  }
};