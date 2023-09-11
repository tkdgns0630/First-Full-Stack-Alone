const router = require("express").Router();
const { User, Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//rendering dashboard
router.get("/", withAuth, async (req, res) => {
  const userBlog = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [{ model: Blog }],
  });

  const user = userBlog.get({ plain: true });
  console.log(user);
  res.render("dashboard", { user, logged_in: req.session.logged_in });
});

//render createblog page
router.get("/createblog", withAuth, async (req, res) => {
  res.render("addblog", { logged_in: req.session.logged_in });
});

//rendering individual blog update page
router.get("/:id", withAuth, async (req, res) => {
  const userBlog1 = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [{ model: Blog }],
  });
  const userBlog2 = userBlog1.get({ plain: true });

  // The blog selected in the dashboard
  const theBlog = await Blog.findByPk(req.params.id);
  const theBlog1 = theBlog.get({ plain: true });
  console.log(theBlog1);
  res.render("updateblog", {
    userBlog2,
    theBlog1,
    logged_in: req.session.logged_in,
  });
});

//update blog
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateData = await Blog.update(
      {
        title: req.body.title,
        body: req.body.body,
        user_id: req.session.user_id,
      },
      { where: { id: req.body.blogId } }
    );
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
