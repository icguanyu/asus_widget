import axios from "axios";

const token = localStorage.getItem("AC_token");

if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err && err.response) {
      console.log(`${err.response.status} error`);
    } else {
      console.log("連接到服務器失敗");
    }
    return Promise.reject(err.response);
  }
);

const request = {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url, data = {}, config) {
    return new Promise((resolve, reject) => {
      // console.log("the request is BASE %s URI %s with Data %s",axios.defaults.baseURL ,url,JSON.stringify(data))
      axios
        .post(url, data, config)
        .then(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
        .catch((err) => {
          // console.log("ERROR:the request is BASE %s URI %s with Data %s", axios.defaults.baseURL, url, JSON.stringify(data));
          reject(err);
        });
    });
  },
  delete(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, data).then(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data).then(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
};

export default request;
