export const intro = async (req, res) => {
  return res.render("intro", {
    pageTitle: "Intro",
  });
};
