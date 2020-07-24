'use strict';

module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    language: DataTypes.STRING,
    publishedYear: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    price: DataTypes.INTEGER,
    importedYear: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    lost: DataTypes.INTEGER,
    lending: DataTypes.INTEGER,
    bookType: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    freezeTableName: true
  });

  book.add = (data, next) => {
    book.create({
      name:data.name,
      author:data.author,
      lost:0,
      lending:0,
      isDeleted:false,
      bookType:data.bookType
    }).then((err, res) => {
      next(err, res)
    })
  }

  book.associate = function(models) {
    // associations can be defined here
  };
  return book;
};