import User from "../models/User";
import bcrypt from "bcrypt";
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
      errMsg: "이미 간택된 사용자/이메일 입니다",
    });
  }

  try {
    await User.create({
      name,
      username,
      email,
      password,
      phone,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errMsg: error._message,
    });
  }
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const pageTitle = "Log In";
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errMsg: "존재하지 않는 사용자입니다",
    });
  }
  const passwordAccord = await bcrypt.compare(password, user.password);
  if (!passwordAccord) {
    return res.status(400).render("login", {
      pageTitle,
      errMsg: "잘못된 비밀번호입니다",
    });
  }
  res.redirect("/");
};

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");
