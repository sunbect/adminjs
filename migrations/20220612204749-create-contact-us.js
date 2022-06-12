'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContactUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      CompanyName: {
        type: Sequelize.STRING
      },
      ContactNumber: {
        type: Sequelize.STRING
      },
      Message: {
        type: Sequelize.TEXT
      },
      ReceivedOn: {
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ContactUs');
  }
};