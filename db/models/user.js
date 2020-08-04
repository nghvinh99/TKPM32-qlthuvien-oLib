'use strict';

const { Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    DoB: DataTypes.DATE,
    phone: DataTypes.STRING,
    studentID: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    accountType: DataTypes.INTEGER,
    readerType: DataTypes.INTEGER,
    expiredAt: DataTypes.DATE,
    isDeleted: DataTypes.BOOLEAN,
  }, {
    freezeTableName: true
  });

  user.addNewReader = async (data) => {
    const newReader = await user.create({
      name: data.name,
      DoB: data.DoB,
      studentID: data.studentID,
      phone: data.phone,
      address: data.address,
      email: data.email,
      password: data.password,
      verified: false,
      accountType: 2,
      readerType: data.readerType,
      expiredAt: data.expiredAt,
      isDeleted: false,
    })
    return newReader;
  }

  user.getReaderList = async (filter) => {
    let idSearch = parseInt(filter.search);
    if (isNaN(idSearch))
      idSearch = null;
    const readerList = await user.findAll({
      where: {
        accountType: 2,
        isDeleted: false,
        [Op.or]: [
          { name: {[Op.like]: '%' + filter.search + '%' }},
          { email: {[Op.like]: '%' + filter.search + '%' }},
          { id: {[Op.eq]: idSearch}}
        ]
      },
      limit: filter.limit,
      order: [
        [filter.sortBy, filter.sort]
      ],
      raw: true
    })
    return readerList;
  }

  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};