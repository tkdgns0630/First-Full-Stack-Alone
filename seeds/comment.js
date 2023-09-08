const { Comment } = require("../models");

const commentData = [
  {
    blog_id: 1,
    user_id: 1,
    body: "dog",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
