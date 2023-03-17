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
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    trackId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts',
    tableName: 'posts'
  })

  return Posts
}
