'use strict';
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
      phone: data.phone,
      address: data.address,
      email: data.email,
      password: data.password,
      verified: false,
      accountType: 2,
      readerType: data.readerType,
      isDeleted: false,
    })
    return newReader;
  }

  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};