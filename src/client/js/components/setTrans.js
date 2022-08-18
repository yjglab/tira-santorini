export const setTrans = (str) => {
  let trans;
  switch (str.toLowerCase()) {
    case "story":
      trans = "-308px";
      break;
    case "shop":
      trans = "-154px";
      break;
    case "tira":
      trans = "0px";
      break;
    case "review":
      trans = "154px";
      break;
    case "login":
      trans = "308px";
      break;
    case "logout":
      trans = "308px";
      break;
    default:
      break;
  }
  return trans;
};
export default setTrans;
