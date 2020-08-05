'use strict';

// const data = {
//   readerId: $('#readerID').val(),
//   lendDate: new Date(),
//   expDate: expDate,
//   bookListJson: JSON.stringify(bookList)
// }

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

  lending.getList = (filter, next) => {
    lending.findAll({
      raw: true
    }).then((res) => {
      next(res, null);
    }).catch((err) => {
      next(null, err);
    })
  }

  lending.addNewLending = (data, next) => {
    lending.create({
      reader: data.readerId,
      bookList: data.bookListJson,
      lendDate: data.lendDate,
      expireDate: data.expDate,
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