const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT, categoriaController.obterTodasAsCategorias);
router.post('/', authenticateJWT, categoriaController.criarCategoria);
router.get('/:id', authenticateJWT, categoriaController.obterCategoriaPorId);
router.put('/:id', authenticateJWT, categoriaController.atualizarCategoria);
router.delete('/:id', authenticateJWT, categoriaController.deletarCategoria);

module.exports = router;