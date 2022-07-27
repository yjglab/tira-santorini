import User from "../models/User";
import fetch from "cross-fetch";
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
      errMsg: "PASSWORD가 일치하지 않습니다",
    });
  }
  const alreadyExists = await User.exists({ $or: [{ username }, { email }] });
  if (alreadyExists) {
    return res.status(400).render("join", {
      pageTitle,
      errMsg: "이미 간택된 USER ID / EMAIL 입니다",
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
  const pageTitle = "Log In";
  const user = await User.findOne({ username, socialOnly: false });
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
  req.session.loggedIn = true;
  req.session.user = user;
  res.redirect("/");
};

export const startGithubLogin = (req, res) => {
  const baseUrl = `https://github.com/login/oauth/authorize`;
  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    allow_signup: true,
    scope: "read:user user:email", // 공백으로 구분
  };
  const params = new URLSearchParams(config).toString();
  const targetUrl = `${baseUrl}?${params}`;
  return res.redirect(targetUrl);
};

export const finishGithubLogin = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const targetUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(targetUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();

  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    // console.log(userData);
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!emailObj) {
      res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      const user = await User.create({
        email: emailObj.email,
        username: userData.login,
        avatarUrl: userData.avatar_url,
        password: "",
        name: userData.name,
        location: userData.location,
        socialOnly: true,
      });
    }

    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect("/login");
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
export const getProfile = (req, res) => {
  res.render("profile", { pageTitle: "My Profile" });
};
export const postProfile = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { name, email, username, location },
  } = req;

  if (req.session.user.email !== email) {
    const alreadyExists = await User.exists({ email });
    if (alreadyExists) {
      return res.status(400).render("profile", {
        pageTitle: "My Profile",
        errMsg: "이미 간택된 EMAIL로 업데이트 할 수 없습니다",
      });
    }
  }
  if (req.session.user.username !== username) {
    const alreadyExists = await User.exists({ username });
    if (alreadyExists) {
      return res.status(400).render("profile", {
        pageTitle: "My Profile",
        errMsg: "이미 간택된 USER ID로 업데이트 할 수 없습니다",
      });
    }
  }
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {
      name,
      email,
      username,
      location,
    },
    {
      new: true, // new object로 생성
    }
  );
  req.session.user = updatedUser;
  return res.redirect("/users/profile");
};
