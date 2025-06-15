const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendasController'); // Ajuste o caminho conforme necessário

// Rota para obter os clientes que mais compraram
router.get('/clientes-mais-compras', vendaController.clientesMaisCompras);

module.exports = router;