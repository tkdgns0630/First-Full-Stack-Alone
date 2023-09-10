const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./comment");

router.use("/user", userRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
