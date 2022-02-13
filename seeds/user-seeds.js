const { User } = require('../models');

const userData = [
  {
    username: "Velma",
    email: "Velma@gmail.com",
    password: "TechBlog123"
  },
  {
    username: "Jacquelyn",
    email: "Jacquelyn@gmail.com",
    password: "TechBlog123"
  },
  {
    username: "Sheri",
    email: "Sheri@gmail.com",
    password: "TechBlog123"
  },
  {
    username: "Helen",
    email: "Helen@gmail.com",
    password: "TechBlog123"
  },
  {
    username: "Ruby",
    email: "Ruby@gmail.com",
    password: "TechBlog123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;