const seedUsers = require("./user-seeds");
const seedBlog = require("./blog");
const seedComment = require("./comment");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USER SEEDED -----\n");
  await seedBlog();
  console.log("\n----- BLOG SEEDED -----\n");
  await seedComment();
  console.log("\n----- COMMENT SEEDED -----\n");

  process.exit(0);
};

seedAll();
