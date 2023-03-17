'use strict'
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Tracks extends Model {
    static associate(models) {
      Tracks.belongsTo(models.Posts, {
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
  })
  
  return Tracks
}
