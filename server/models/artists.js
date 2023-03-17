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
  });
  return Artists;
};