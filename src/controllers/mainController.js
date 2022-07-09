export const main = async (req, res) => {
  return res.render("main", {
    pageTitle: "Main",
  });
};

export const abc = async (req, res) => {
  return res.render("abc", {
    pageTitle: "abc",
  });
};
export const def = async (req, res) => {
  return res.render("def", {
    pageTitle: "def",
  });
};
