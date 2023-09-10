const { User } = require("../models");

const userData = [
  {
    //1
    name: "jiyeon",
    password: "mylove123",
  },
  {
    //2
    name: "sanghun",
    password: "dksk1211",
  },
  {
    //3
    name: "lucky",
    password: "mydog123",
  },
  {
    //4
    name: "seojeong",
    password: "yeunchung123",
  },
  {
    //5
    name: "yeunchung",
    password: "illrememberhim123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
