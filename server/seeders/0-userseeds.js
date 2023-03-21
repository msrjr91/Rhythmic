'use strict'

const falso = require('@ngneat/falso')

const users = [...Array(100)].map(() => ({
  name: falso.randFullName(),
  email: falso.randEmail(),
  password: falso.randPassword(),
  username: falso.randUserName(),
  isArtist: falso.randBoolean(),
  avatar: falso.randAvatar(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', users)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
}
