'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    DoB: DataTypes.DATE,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    accountType: DataTypes.INTEGER,
    readerType: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN,
  }, {
    freezeTableName: true
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};