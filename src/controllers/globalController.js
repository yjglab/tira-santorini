export const intro = async (req, res) => {
  return res.render("intro", {
    pageTitle: "Intro",
  });
};
export const story = async (req, res) => {
  return res.render("story", {
    pageTitle: "story",
  });
};
// export const fira = async (req, res) => {
//   return res.render("fira", {
//     pageTitle: "FIRA",
//   });
// };
// export const akrotiri = async (req, res) => {
//   return res.render("akrotiri", {
//     pageTitle: "AKROTIRI",
//   });
// };
// export const firostefani = async (req, res) => {
//   return res.render("firostefani", {
//     pageTitle: "FIROSTEFANI",
//   });
// };
// export const imerovigli = async (req, res) => {
//   return res.render("imerovigli", {
//     pageTitle: "IMEROVIGLI",
//   });
// };
// export const kamari = async (req, res) => {
//   return res.render("kamari", {
//     pageTitle: "KAMARI",
//   });
// };
