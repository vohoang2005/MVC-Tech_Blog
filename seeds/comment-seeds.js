const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Partials is actually easy to understand!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Other useful data types are Integer and Text.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Cookies used to cache sites and passwords for clients to view the site faster!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Ending the session is when you exit it",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Is Security important in Programming?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Hasing is a great way to prevent hackers from hacking our password!",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;