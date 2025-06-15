const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/data/petshop.db' // Caminho para o arquivo SQLite
});

module.exports = sequelize;