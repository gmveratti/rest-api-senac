const express = require('express');
const router = express.Router();
const subcategoriaController = require('../controllers/subcategoriaControllers');
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT, subcategoriaController.obterTodasAsSubcategorias);
router.post('/', authenticateJWT, subcategoriaController.criarSubcategoria);
router.get('/:id', authenticateJWT, subcategoriaController.obterSubcategoriaPorId);
router.put('/:id', authenticateJWT, subcategoriaController.atualizarSubcategoria);
router.delete('/:id', authenticateJWT, subcategoriaController.deletarSubcategoria);

module.exports = router;