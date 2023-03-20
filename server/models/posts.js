'use strict'
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {

      Posts.belongsTo(models.Users, {
        foreignKey: 'userId'
      })

      Posts.hasMany(models.Comments, {
        foreignKey: 'postId'
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
    }
  }, {
    sequelize,
    modelName: 'Posts',
    tableName: 'posts'
  })

  return Posts
}
