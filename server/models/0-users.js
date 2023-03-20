'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Comments, {
        foreignKey: 'userId'
      })
      Users.hasMany(models.Posts, {
        foreignKey: 'userId'
      })
      Users.belongsToMany(models.Users, {
        as: 'followers', 
        foreignKey: 'userId', 
        through: models.Followers
      })
      Users.belongsToMany(models.Users, {
        as: 'following', 
        foreignKey: 'followerId', 
        through: models.Followers
      })
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    isArtist: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  })
  return Users
}
