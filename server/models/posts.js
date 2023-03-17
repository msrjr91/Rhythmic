'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts.hasMany(models.Comments, {
        foreignKey: 'postId'
      })
      Posts.hasOne(models.Tracks, {
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
  });
  return Posts;
};