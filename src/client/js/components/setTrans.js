export const setTrans = (str) => {
  let trans;
  switch (str) {
    case "OIA":
      trans = "-330px";
      break;
    case "FIRA":
      trans = "-220px";
      break;
    case "AKROTIRI":
      trans = "-110px";
      break;
    case "TIRA":
      trans = "0px";
      break;
    case "FIROSTEFANI":
      trans = "110px";
      break;
    case "IMEROVIGLI":
      trans = "220px";
      break;
    case "KAMARI":
      trans = "330px";
      break;
    default:
      break;
  }
  return trans;
};
export default setTrans;
