export const localsMiddleware = (req, res, next) => {
  res.locals.brandName = "TIRA";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  // console.log(res.locals);
  next();
};
