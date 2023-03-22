'use strict'

const falso = require('@ngneat/falso')

const users = [...Array(10)].map(() => {
  let numgen = Math.floor(Math.random() * 70)
  let avatar = `https://i.pravatar.cc/150?img=${numgen}`
  return {
    name: falso.randFullName(),
    email: falso.randEmail(),
    password: falso.randPassword(),
    username: falso.randUserName(),
    isArtist: falso.randBoolean(),
    avatar: avatar,
    createdAt: new Date(),
    updatedAt: new Date()
  }})

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', users)
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
}
