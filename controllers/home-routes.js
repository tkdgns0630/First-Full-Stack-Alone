const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog } = require("../models");

//display all Blogs to the front page
router.get("/", async (req, res) => {
  const allBlog = await Blog.findAll();
  const blogs = allBlog.map((blog) => blog.get({ plain: true }));
  // pass blog list to frotn
  res.render("front", { blogs, logged_in: req.session.logged_in });
});

module.exports = router;
