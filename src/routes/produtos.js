const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoControllers');
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT, produtoController.obterTodosOsProdutos);
router.post('/', authenticateJWT, produtoController.criarProduto);
router.get('/:id', authenticateJWT, produtoController.obterProdutoPorId);
router.put('/:id', authenticateJWT, produtoController.atualizarProduto);
router.delete('/:id', authenticateJWT, produtoController.deletarProduto);

module.exports = router;