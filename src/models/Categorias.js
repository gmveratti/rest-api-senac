const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O nome não pode ser vazio"
      },
      len: {
        args: [3, 255],
        msg: "O nome deve ter entre 3 e 255 caracteres"
      }
    }
  }
}, {
  tableName: 'categorias'
});

module.exports = Categoria;