'use strict'
const { Users, Tracks, sequelize } = require('../models')
const falso = require('@ngneat/falso')

const posts = [...Array(15)].map(async () => {
        let user = await Users.findOne({ order: sequelize.random(), raw: true })
        let track = await Tracks.findOne({ order: sequelize.random(), raw: true })
        return {
          userId: user.id,
          content: falso.randLine(),
          trackId: track.id,
          createdAt: new Date,
          updatedAt: new Date
        }
      })
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('posts', posts)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('posts')
  }
}
