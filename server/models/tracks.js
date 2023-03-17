'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tracks.belongsToMany(models.Posts, {
        foreignKey: 'trackId'
      })
    }
  }
  Tracks.init({
    trackURI: DataTypes.INTEGER,
    title: DataTypes.STRING,
    artist: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tracks',
    tableName: 'tracks'
  });
  return Tracks;
};