'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookType = sequelize.define('bookType', {
    name: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  bookType.associate = function(models) {
    // associations can be defined here
  };
  return bookType;
};