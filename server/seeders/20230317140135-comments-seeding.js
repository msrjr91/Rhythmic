'use strict';
const { Users, Posts, sequelize } = require('../models')
const falso = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const comments = await Promise.all(
      [...Array(15)].map(async () => {
        let user = await Users.findOne({ order: sequelize.random(), raw: true })
        let post = await Posts.findOne({ order: sequelize.random(), raw: true })
        return {
          userId: user.id,
          postId: post.id,
          content: falso.randLine,
          createdAt: new Date,
          updatedAt: new Date
        }
      })
    )
  return queryInterface.bulkInsert("comments", comments)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments')
  }
};
