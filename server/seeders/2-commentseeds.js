'use strict'

const { Users, Posts, sequelize } = require('../models')
const falso = require("@ngneat/falso")



module.exports = {
  async up (queryInterface, Sequelize) {
    let user = await Users.findOne({ order: sequelize.random(), raw: true })
    let post = await Posts.findOne({ order: sequelize.random(), raw: true })
    const comments = [...Array(100)].map(() => ({
      userId: user.id,
      postId: post.id,
      content: falso.randLine(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    return queryInterface.bulkInsert('comments', comments)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments')
  }
}
