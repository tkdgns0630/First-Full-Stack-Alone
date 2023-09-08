const seedUsers = require("./user-seeds");
const seedBlog = require("./blog");
const seedComment = require("./comment");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
};
