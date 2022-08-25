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
export const shop = async (req, res) => {
  return res.render("shop", {
    pageTitle: "shop",
  });
};
export const test = async (req, res) => {
  return res.render("test", {
    pageTitle: "test",
  });
};
