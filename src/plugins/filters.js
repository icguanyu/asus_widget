import dayjs from "dayjs";

export const localTime = function (date) {
  let formateForSafari = dayjs(date).format("YYYY/MM/DD HH:mm:ss");
  let utcDate = formateForSafari + " UTC";
  return dayjs(utcDate).format("HH:mm");
};
