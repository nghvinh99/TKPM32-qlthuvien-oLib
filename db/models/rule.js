'use strict';
module.exports = (sequelize, DataTypes) => {
  const rule = sequelize.define('rule', {
    minAge: DataTypes.INTEGER,
    maxAge: DataTypes.INTEGER,
    maxValidCardPeriod: DataTypes.INTEGER,
    minPublishYear: DataTypes.INTEGER,
    maxLendBookQuantity: DataTypes.INTEGER,
    maxLendPeriod: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });

  rule.getRule = (next) => {
    rule.findAll({ 
      raw: true 
    }).then((res) => {
      next(res)
    }).catch((err) => {
      next(err)
    })
  }

  rule.associate = function(models) {
    // associations can be defined here
  };
  return rule;
};