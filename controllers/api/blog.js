const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Blog } = require("../../models");

router.post("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
