'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
    static associate(models) {
      Followers.belongsTo(models.Users, {
        foreignKey: 'userId'
      })
    }
  }
  Followers.init({
    followerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Followers',
    tableName: 'followers'
  })
  return Comments
}
