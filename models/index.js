const Comment = require("./Comment");
const User = require("./User");
const Blog = require("./Blogs");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Blog, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignkey: "user_id",
});

module.exports = { Comment, User, Blog };
