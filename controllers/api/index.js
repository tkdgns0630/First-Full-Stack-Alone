const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./comment");
const dashBoard = require("./dashboard");
const blog = require("./blog");

router.use("/user", userRoutes);
router.use("/comment", commentRoutes);
router.use("/dashboard", dashBoard);
router.use("/blog", blog);

module.exports = router;
