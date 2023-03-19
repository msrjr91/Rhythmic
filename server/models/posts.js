'use strict'
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      Posts.hasMany(models.Comments, {
        foreignKey: 'postId'
      })
      Posts.hasMany(models.Tracks, {
        foreignKey: 'trackId'
      })
      Posts.belongsTo(models.Users, {
        foreignKey: 'userId'
      })
    }
  }

  Posts.init({
    userId: {
      type: DataTypes.INTEGER, 
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'}
      },
    content: DataTypes.STRING,
    trackId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'tracks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Posts',
    tableName: 'posts'
  })

  return Posts
}
