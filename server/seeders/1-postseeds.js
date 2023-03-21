'use strict'

const { Users, sequelize } = require('../models')
const falso = require('@ngneat/falso')



module.exports = {
  async up (queryInterface, Sequelize) {
    let user = await Users.findAll({raw:true})
    const posts = [...Array(100)].map(() => {
      let r = Math.floor(Math.random() * user.length)
      return {
      userId: user[r].id,
      content: falso.randLine(),
      trackId: falso.randUuid(),
      createdAt: new Date(),
      updatedAt: new Date()
      }
  })
    return queryInterface.bulkInsert('posts', posts)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('posts')
  }
}
