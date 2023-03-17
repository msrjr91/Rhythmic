'use strict'
const {
  Model
} = require('sequelize')

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
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments'
  })

  return Comments
}