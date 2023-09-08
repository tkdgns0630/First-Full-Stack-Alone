const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("blog");
});

module.exports = router;
