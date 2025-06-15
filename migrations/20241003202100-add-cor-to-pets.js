'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('pets', 'cor', {
      type: Sequelize.STRING,
      allowNull: true // Permite nulo para evitar problemas com dados existentes
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('pets', 'cor');
  }
};