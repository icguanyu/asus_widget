import request from "./index";

export const ShortUrlMapping = {
  GetUrl: (code) => {
    return request.get(`/api/ShortUrlMapping/GetUrl/${code}`);
  },
};
