import User from "../models/User";
import fetch from "cross-fetch";
import bcrypt from "bcrypt";

export const getRegister = (req, res) =>
  res.render("register", { pageTitle: "Register" });
export const postRegister = async (req, res) => {
  const { name, username, email, password, password2, phone, address } =
    req.body;
  const pageTitle = "Register";
  if (password !== password2) {
    return res.status(400).render("register", {
      pageTitle,
      errMsg: "PASSWORD가 일치하지 않습니다",
    });
  }
  const alreadyExists = await User.exists({ $or: [{ username }, { email }] });
  if (alreadyExists) {
    return res.status(400).render("register", {
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
      avatarUrl: "static/img/profile-base-dk.png",
      introduction: "",
      address,
      postalCode: "0",
    });
    req.flash("info", "새로운 계정이 등록되었습니다");
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("register", {
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

  req.flash("info", `안녕하세요, ${user.username}님!`);
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
      req.flash("error", "존재하지 않는 사용자입니다");
      res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        email: emailObj.email,
        username: userData.login,
        avatarUrl: userData.avatar_url,
        password: "",
        name: userData.name,
        introduction: "",
        address: userData.location,
        postalCode: "0",
        socialOnly: true,
      });
    }

    req.session.loggedIn = true;
    req.session.user = user;

    req.flash("info", `안녕하세요, ${user.username}님!`);
    return res.redirect("/");
  } else {
    req.flash("error", "존재하지 않는 사용자입니다");
    return res.redirect("/login");
  }
};

export const logout = (req, res) => {
  req.flash("info", "로그아웃 되었습니다");
  req.session.destroy();
  return res.redirect("/");
};
export const getProfile = (req, res) => {
  res.render("profile", { pageTitle: "Profile" });
};
export const postProfile = async (req, res) => {
  const {
    session: {
      user: { _id, avatarUrl },
    },
    body: { name, email, username, introduction, address, postalCode },
    file,
  } = req;
  if (req.session.user.email !== email) {
    const alreadyExists = await User.exists({ email });
    if (alreadyExists) {
      return res.status(400).render("profile", {
        pageTitle: "Profile",
        errMsg: "이미 간택된 EMAIL로 업데이트 할 수 없습니다",
      });
    }
  }
  if (req.session.user.username !== username) {
    const alreadyExists = await User.exists({ username });
    if (alreadyExists) {
      return res.status(400).render("profile", {
        pageTitle: "Profile",
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
      avatarUrl: file ? file.path : avatarUrl, // 전송받은 파일 없으면 기존 url 유지
      address,
      introduction,
      postalCode,
    },
    {
      new: true, // new object로 생성
    }
  );

  req.session.user = updatedUser;
  req.flash("success", "프로필 정보가 변경되었습니다");
  return res.redirect(`/users/${updatedUser._id}/profile`);
};

export const getChangePw = (req, res) => {
  if (req.session.socialOnly) {
    req.flash("error", "소셜 계정은 비밀번호를 변경할 수 없습니다");
    return res.redirect("/");
  }
  return res.render("change-password", { pageTitle: "Change Password" });
};
export const postChangePw = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { presentPassword, newPassword, newPasswordConfirm },
  } = req;

  const user = await User.findById(_id);
  const passwordAccord = await bcrypt.compare(presentPassword, user.password);
  if (!passwordAccord) {
    return res.status(400).render("change-password", {
      pageTitle: "Change Password",
      errMsg: "현재의 PASSWORD가 일치하지 않습니다",
    });
  }
  if (newPassword !== newPasswordConfirm) {
    return res.status(400).render("change-password", {
      pageTitle: "Change Password",
      errMsg: "새로운 PASSWORD가 일치하지 않습니다",
    });
  }

  user.password = newPassword;
  await user.save();
  req.flash("success", "비밀번호를 변경했습니다");
  return res.redirect("/users/logout");
};
// export const myProfile = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   if (!user) {
//     return res.status(404).render("404", { pageTitle: "404 Not Found" });
//   }
//   return res.render("myProfile", { pageTitle: `${user.name}의 Profile`, user });
// };
