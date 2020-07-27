'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('book', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.STRING(1000)
      },
      image: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      publishedYear: {
        type: Sequelize.INTEGER
      },
      publisher: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      importedYear: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      lost: {
        type: Sequelize.INTEGER
      },
      lending: {
        type: Sequelize.INTEGER
      },
      bookType: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bookType',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
      },
      isDeleted: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('book');
  }
};