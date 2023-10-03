import axios from "axios";

export const getUserIpCountry = () => {
  const ipinfo_token = process.env.VUE_APP_IPINFO;
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ipinfo.io/json?token=${ipinfo_token}`)
      .then((response) => {
        let country = response.data.country;
        // console.log("country", country);
        resolve(country);
      })
      .catch((error) => {
        console.log("error", error);
        reject("");
      });
  });
};
