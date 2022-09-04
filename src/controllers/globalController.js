export const intro = async (req, res) => {
  return res.render("intro", {
    pageTitle: "Intro",
  });
};
export const story = async (req, res) => {
  return res.render("story", {
    pageTitle: "Story",
  });
};
export const shop = async (req, res) => {
  return res.render("shop", {
    pageTitle: "Online Shop",
  });
};
export const review = async (req, res) => {
  return res.render("review", {
    pageTitle: "Review",
  });
};
export const store = async (req, res) => {
  return res.render("store", {
    pageTitle: "Offline Store",
  });
};
export const test = async (req, res) => {
  return res.render("test", {
    pageTitle: "test",
  });
};
