const express = require('express');
const router = express.Router();
const vendas2Controller = require('../controllers/vendas2Controller');

// Rota para listar os clientes que mais compraram
router.get('/clientes-mais-compras2', vendas2Controller.clientesMaisCompras);

// Adicione outras rotas conforme necessário

module.exports = router;