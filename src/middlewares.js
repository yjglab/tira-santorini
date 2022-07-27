export const localsMiddleware = (req, res, next) => {
  res.locals.brandName = "TIRA";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user || {};
  next();
};

export const loggedInOnlyMiddleware = (req, res, next) => {
  // 로그인 유저만 접근 부여
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
export const publicOnlyMiddleware = (req, res, next) => {
  // 비 로그인 유저만 접근 부여
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};
