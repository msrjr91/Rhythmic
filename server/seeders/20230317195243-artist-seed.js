'use strict';
const { Users, sequelize } = require('../models')

const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const artists = await Promise.all(
      [...Array(15)].map(async () => {
        let user = await Users.findOne({ order: sequelize.random(), raw: true })
        return {
          artistId: falso.randNumber,
          name: falso.randFullName,
          fans: falso.randNumber({min: 10000, max: 10000000}),
          userId: user.id,
          createdAt: new Date,
          updatedAt: new Date
        }
      })
    )
  return queryInterface.bulkInsert("artists", artists)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists')
  }
}
