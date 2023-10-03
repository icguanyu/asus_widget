import request from "./index";

export const Customer = {
  create: (data) => {
    return request.post("/api/Customer/Create", data);
  },
  GetCountryList: () => {
    return request.post("/api/Customer/GetCountryList");
  },
  GetCountryAllSkill: (data) => {
    return request.post("/api/Customer/GetCountryAllSkill", data);
  },
  GetBulletinList: (data) => {
    return request.post("/api/Customer/GetBulletinList", data);
  },
  GetLinkPreview: (data) => {
    return request.post("/api/Customer/GetLinkPreview", data);
  },
  ExportClientChat: (data, config) => {
    return request.post("/api/Customer/ExportClientChat", data, config);
  },
  DownloadUploadFile: (data, config) => {
    return request.post("/api/Customer/DownloadUploadFile", data, config);
  },
  SetLog: (data) => {
    return request.post("/api/Customer/SetLog", data);
  },
  UploadTempFiles: (data) => {
    return request.post("/api/Customer/UploadTempFiles", data);
  },
};

export const ClientChatMessage = {
  uploadImage: (data, config) => {
    return request.post(
      "/api/ClientChatMessage/CustomerUploadImage",
      data,
      config
    );
  },
};

export const CommonCode = {
  getList: (data) => {
    return request.post(`/api/CommonCode/GetList/`, data);
  },
  get: (data) => {
    return request.post(`/api/CommonCode/GetCommCodeList/`, data);
  },
};

export const ClientChatSurvey = {
  start: (data) => {
    return request.post("/api/ClientChatSurvey/StartClientChatSurvey", data);
  },
  save: (data) => {
    return request.post("/api/ClientChatSurvey/SaveClientChatSurvey", data);
  },
};

export const ClientChatSurveyCode = {
  List: (data) => {
    return request.post("/api/ClientChatSurveyCode/List", data);
  },
  VideoCallList: (data) => {
    return request.post("/api/ClientChatSurveyCode/VideoCallList", data);
  },
};

export const VideoCallSurvey = {
  start: (data) => {
    return request.post("/api/VideoCallSurvey/StartVideoCallSurvey", data);
  },
  save: (data) => {
    return request.post("/api/VideoCallSurvey/SaveVideoCallSurvey", data);
  },
};

export const VideoCallCustomer = {
  UploadTempFiles: (data) => {
    return request.post("/api/VideoCallCustomer/UploadTempFiles", data);
  },
  SetCustomerInfo: (data) => {
    return request.post("/api/VideoCallCustomer/SetCustomerInfo", data);
  },
  SetCustomerIsAgree: (data) => {
    return request.post("/api/VideoCallCustomer/SetCustomerIsAgree", data);
  },
  SetCustomerIsJoin: (data) => {
    return request.post("/api/VideoCallCustomer/SetCustomerIsJoin", data);
  },
};
