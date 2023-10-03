export const checkDevice = () => {
  let device = "";
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    device = "Mobile";
  } else {
    device = "PC";
  }

  return device;
};
