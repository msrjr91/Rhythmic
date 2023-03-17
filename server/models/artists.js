'use strict'
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    static associate(models) {
      Artists.belongsTo(models.Users, {
        foreignKey: 'userId'
      })
    }
  }

  Artists.init({
    artistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    fans: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Artists',
    tableName: 'artists'
  })

  return Artists
}