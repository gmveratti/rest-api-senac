const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoControllers');

router.get('/', produtoController.obterTodosOsProdutos);
router.post('/', produtoController.criarProduto);
router.get('/:id', produtoController.obterProdutoPorId);
router.put('/:id', produtoController.atualizarProduto);
router.delete('/:id', produtoController.deletarProduto);

module.exports = router;