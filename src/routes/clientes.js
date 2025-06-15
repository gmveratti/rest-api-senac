const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteControllers');

router.get('/', clienteController.obterTodosOsClientes);
router.post('/', clienteController.criarCliente);
router.get('/:id', clienteController.obterClientePorId);
router.put('/:id', clienteController.atualizarCliente);
router.delete('/:id', clienteController.deletarCliente);

module.exports = router;