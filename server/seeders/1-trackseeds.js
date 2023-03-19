'use strict'
const falso = require('@ngneat/falso')

const tracks = [...Array(15)].map(() => ({
  trackURI: falso.randNumber(),
  title: falso.randCatchPhrase(),
  artist: falso.randFullName(),
  createdAt: new Date,
  updatedAt: new Date
}))

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tracks", tracks)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tracks')
  }
}
