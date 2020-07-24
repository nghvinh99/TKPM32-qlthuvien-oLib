'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      minAge: {
        type: Sequelize.INTEGER
      },
      maxAge: {
        type: Sequelize.INTEGER
      },
      maxValidCardPeriod: {
        type: Sequelize.INTEGER
      },
      minPublishYear: {
        type: Sequelize.INTEGER
      },
      maxLendBookQuantity: {
        type: Sequelize.INTEGER
      },
      maxLendPeriod: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rule');
  }
};