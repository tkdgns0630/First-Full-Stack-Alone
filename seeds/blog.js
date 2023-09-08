const { Blog } = require("../models");

const blogData = [
  {
    body: "dog",
    user_id: 1,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
