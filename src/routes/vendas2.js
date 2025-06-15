const express = require('express');
const router = express.Router();
const vendas2Controller = require('../controllers/vendas2Controller');
const authenticateJWT = require('../middleware/auth');


// Rota para listar os clientes que mais compraram
router.get('/clientes-mais-compras2', authenticateJWT, vendas2Controller.clientesMaisCompras);

// Adicione outras rotas conforme necessário

module.exports = router;