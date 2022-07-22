import User from "../models/User";

export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "회원등록" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, phone, location } =
    req.body;
  const pageTitle = "회원등록";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errMsg: "비밀번호가 일치하지 않습니다",
    });
  }
  const alreadyExists = await User.exists({ $or: [{ username }, { email }] });
  if (alreadyExists) {
    return res.status(400).render("join", {
      pageTitle,
      errMsg: "사용자명 혹은 이메일이 이미 간택되었습니다",
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    phone,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");
