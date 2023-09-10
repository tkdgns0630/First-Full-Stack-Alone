const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User, Blog, Comment } = require("../../models");

router.get("/:id", withAuth, async (req, res) => {
  const blogData = await Blog.findByPk(req.params.id, {
    include: [
      { model: Comment },
      {
        model: User,
      },
    ],
  });

  const blog = blogData.get({ plain: true });
  console.log(blog);

  res.render("blog", { blog });
});

module.exports = router;
