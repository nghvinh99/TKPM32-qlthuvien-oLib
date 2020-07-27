'use strict';
module.exports = (sequelize, DataTypes) => {
  const lending = sequelize.define('lending', {
    reader: DataTypes.INTEGER,
    bookList: DataTypes.STRING,
    lendDate: DataTypes.DATE,
    expireDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    state: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    freezeTableName: true
  });
  lending.associate = function(models) {
    // associations can be defined here
  };
  return lending;
};