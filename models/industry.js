'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Industry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Industry.init({
    Name: DataTypes.STRING,
    Disable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Industry',
  });
  return Industry;
};