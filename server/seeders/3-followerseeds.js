'use strict'

const { Users } = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await Users.findAll({ raw: true })
    const followers = users
      .map(({ id }) => ({
        userId: id,
        followerId:
          users[Math.floor(Math.random() * users.length)].id !== id
            ? users[Math.floor(Math.random() * users.length)].id
            : null,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      .filter((u) => u.followerId !== null)
    return queryInterface.bulkInsert('followers', followers)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('followers')
  }
}