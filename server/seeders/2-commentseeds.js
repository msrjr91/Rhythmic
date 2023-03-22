'use strict'

const { Users, Posts, sequelize } = require('../models')
const falso = require("@ngneat/falso")



module.exports = {
  async up (queryInterface, Sequelize) {
    let user = await Users.findAll({raw:true})
    let post = await Posts.findAll({raw:true})
    const comments = [...Array(10)].map(() => {
      let user_r = Math.floor(Math.random() * user.length)
      let post_r = Math.floor(Math.random() * post.length)
      return {
      userId: user[user_r].id,
      postId: post[post_r].id,
      content: falso.randLine(),
      createdAt: new Date(),
      updatedAt: new Date()
      }
    })
    return queryInterface.bulkInsert('comments', comments)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments')
  }
}
