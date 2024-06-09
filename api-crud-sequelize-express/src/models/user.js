'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  User.init({
    user_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    salt: DataTypes.BIGINT,
    hash: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user'
  });
  return User;
};