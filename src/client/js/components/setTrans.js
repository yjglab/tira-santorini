export const setTrans = (str) => {
  let trans;
  switch (str.toLowerCase()) {
    case "story":
      trans = "-330px";
      break;
    case "single":
      trans = "-220px";
      break;
    case "set":
      trans = "-110px";
      break;
    case "tira":
      trans = "0px";
      break;
    case "review":
      trans = "110px";
      break;
    case "profile":
      trans = "220px";
      break;
    case "register":
      trans = "330px";
      break;
    default:
      break;
  }
  return trans;
};
export default setTrans;
