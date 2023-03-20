'use strict'

const { Users, sequelize } = require('../models')
const falso = require('@ngneat/falso')



module.exports = {
  async up (queryInterface, Sequelize) {
    let user = await Users.findOne({ order: sequelize.random(), raw: true })
    const posts = [...Array(100)].map(() => ({
      userId: user.id,
      content: falso.randLine(),
      trackId: falso.randUuid(),
      createdAt: new Date(),
      updatedAt: new Date()
  }))
    return queryInterface.bulkInsert('posts', posts)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('posts')
  }
}
