'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    DoB: DataTypes.DATE,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    accountType: DataTypes.INTEGER,
    readerType: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN,
  }, {
    freezeTableName: true
  });

  user.findById = (id, next) => {
    user.findAll({
      where: {
        id: id
      },
      raw: true
    }).then((res) => {
      if (res.length == 0)
        next(null , null);
      else
        next(res[0], null);
    }).catch((err) => {
      next(null, err);
    })
  }

  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};