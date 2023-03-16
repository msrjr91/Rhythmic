'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artists.init({
    artistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    fans: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Artists',
    tableName: 'artists'
  });
  return Artists;
};