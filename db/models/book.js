'use strict';

const { bookType } = require('./bookType');

module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    name: DataTypes.STRING,
    overview: DataTypes.STRING(1000),
    image: DataTypes.STRING,
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
      name: data.name,
      author: data.author,
      lost: 0,
      lending: 0,
      isDeleted: false,
      bookType: data.bookType
    }).then((err, res) => {
      next(err, res)
    })
  }

  book.getList = (next) => {
    book.findAll({
      where: {
        isDeleted: false
      },
      order: [
        ['id', 'ASC']
      ],
      include: [{
        association: 'type',
        attributes: ['name']
      }],
      raw: true
    }).then((res) => {
      next(res, null)
      //console.log(rs);
    }).catch((err) => {
      next(null, err);
    })
  }


  book.findById = (BookId, next) => {
    book.findAll({
      where: {
        id: BookId
      },
      include: [{
        association: 'type',
        attributes: ['name']
      }],
      raw: true
    }).then((res) => {
      next(res[0], null);
    }).catch((err) => {
      next(null, err);
    })
  }

  book.associate = function (models) {
    // associations can be defined here
    book.belongsTo(models.bookType, {
      as: 'type',
      foreignKey: 'bookType',
      target: 'id',
      onDelete: 'CASCADE'
    });
  };
  return book;
};