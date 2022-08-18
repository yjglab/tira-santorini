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
export const test = async (req, res) => {
  return res.render("test", {
    pageTitle: "test",
  });
};
