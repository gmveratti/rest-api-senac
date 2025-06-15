const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.obterTodasAsCategorias);
router.post('/', categoriaController.criarCategoria);
router.get('/:id', categoriaController.obterCategoriaPorId);
router.put('/:id', categoriaController.atualizarCategoria);
router.delete('/:id', categoriaController.deletarCategoria);

module.exports = router;