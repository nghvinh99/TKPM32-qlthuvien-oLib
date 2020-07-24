'use strict';
module.exports = (sequelize, DataTypes) => {
  const lendingDetail = sequelize.define('lendingDetail', {
    bookList: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  lendingDetail.associate = function(models) {
    // associations can be defined here
  };
  return lendingDetail;
};