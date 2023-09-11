// if there is logged_in in req session server storage then run next or redirect them

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/api/user/login");
  } else {
    next();
  }
};

module.exports = withAuth;
