const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User, Blog, Comment } = require("../../models");

// render each blog if clicked
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
  console.log(req.session.logged_in);

  res.render("blog", { blog, logged_in: req.session.logged_in });
});

//comments add
router.post("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      blog_id: req.body.blogId,
      body: req.body.commentText,
      user_id: req.session.user_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
