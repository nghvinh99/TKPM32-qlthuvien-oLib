'use strict';
module.exports = (sequelize, DataTypes) => {
  const readerType = sequelize.define('readerType', {
    name: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  readerType.associate = function(models) {
    // associations can be defined here
  };
  return readerType;
};