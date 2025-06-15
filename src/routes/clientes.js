const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteControllers');
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT, clienteController.obterTodosOsClientes);
router.post('/', authenticateJWT, clienteController.criarCliente);
router.get('/:id', authenticateJWT, clienteController.obterClientePorId);
router.put('/:id', authenticateJWT, clienteController.atualizarCliente);
router.delete('/:id', authenticateJWT, clienteController.deletarCliente);

module.exports = router;