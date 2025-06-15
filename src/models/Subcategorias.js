const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subcategoria = sequelize.define('Subcategoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoriaId: {
    type: DataTypes.STRING,
    references: {
      model: 'categorias',
      key: 'id'
    }
  }
}, {
  tableName: 'subcategorias'
});

module.exports = Subcategoria;