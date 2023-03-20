'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      Comments.belongsTo(models.Users, {
        foreignKey: 'userId'
      })
      Comments.belongsTo(models.Posts, {
        foreignKey: 'postId'
      })
    }
  }
  Comments.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'posts',
        key: 'id'
      }
    },
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments'
  })
  return Comments
}
