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

  readerType.getAllType = async () => {
    const allType = await readerType.findAll({
      raw: true
    });
    return allType;
  }

  return readerType;
};