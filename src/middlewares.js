import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.brandName = "TIRA";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user || {};
  // console.log(loggedInUser);
  next();
};

export const loggedInOnlyMiddleware = (req, res, next) => {
  // 로그인 유저만 접근 부여
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "접근할 수 없습니다. 로그인 하세요!");
    return res.redirect("/login");
  }
};
export const publicOnlyMiddleware = (req, res, next) => {
  // 비 로그인 유저만 접근 부여
  if (!req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "로그인 중이므로 접근할 수 없습니다");
    return res.redirect("/");
  }
};

export const uploadAvatarMiddleware = multer({
  dest: "userUploads/avatar", // 사용자 파일을 uploads 폴더에 저장
  limits: {
    fileSize: 5000000, // 5mb
  },
});
