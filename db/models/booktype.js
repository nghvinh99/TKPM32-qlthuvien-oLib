'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookType = sequelize.define('bookType', {
    name: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  bookType.associate = function (models) {
    // associations can be defined here
  };

  bookType.getBookTypeList = (next) => {
    book.findAll({
      raw: true
    }).then((res) => {
      next(res, null)
      console.log(res);
    }).catch((err) => {
      next(null, err);
    })
  }

  return bookType;
};