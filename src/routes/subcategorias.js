const express = require('express');
const router = express.Router();
const subcategoriaController = require('../controllers/subcategoriaControllers');

router.get('/', subcategoriaController.obterTodasAsSubcategorias);
router.post('/', subcategoriaController.criarSubcategoria);
router.get('/:id', subcategoriaController.obterSubcategoriaPorId);
router.put('/:id', subcategoriaController.atualizarSubcategoria);
router.delete('/:id', subcategoriaController.deletarSubcategoria);

module.exports = router;