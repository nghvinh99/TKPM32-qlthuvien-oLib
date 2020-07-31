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

  lending.addNewLending = (data, next) => {
    lending.create({
      reader: data.reader,
      bookList: data.bookList,
      lendDate: data.lendDate,
      expireDate: data.expireDate,
      returnDate: null,
      state: 0,
      isDeleted: false,
    }).then((res) => {
      next(res, null)
    }).catch((err) => {
      next(null, err)
    })
  }

  lending.associate = function(models) {
    // associations can be defined here
  };
  return lending;
};