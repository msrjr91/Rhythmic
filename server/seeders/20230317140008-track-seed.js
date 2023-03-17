'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tracks = await Promise.all(
      [...Array(15)].map(async () => {
        return {
          trackURI: falso.randNumber,
          title: falso.randCatchPhrase,
          artist: falso.randFullName,
          createdAt: new Date,
          updatedAt: new Date
        }
      })
    )
  return queryInterface.bulkInsert("tracks", tracks)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tracks')
  }
}
