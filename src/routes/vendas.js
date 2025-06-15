const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendasController'); 
const authenticateJWT = require('../middleware/auth');


// Rota para obter os clientes que mais compraram
router.get('/clientes-mais-compras', authenticateJWT, vendaController.clientesMaisCompras);

module.exports = router;