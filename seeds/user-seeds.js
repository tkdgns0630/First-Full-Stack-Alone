const { User } = require("../models");

const userData = [
  {
    //1
    name: "Jiyeon",
    email: "lucky123@gmail.com",
    password: "mylove123",
  },
  {
     //2
     name: "Sanghun",
     email: "tkdgns1211@gmail.com",
     password: "dksk1211",
  },
  {
     //3
     name: "lucky",
     email: "lucky12345@gmail.com",
     password: "mydog123",
  },
  {
     //4
     name: "Seojeong",
     email: "ch9663@gmail.com",
     password: "yeunchung123",
  },
  {
     //5
     name: "yeunchung",
     email: "dad123@gmail.com",
     password: "illrememberhim123",
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;