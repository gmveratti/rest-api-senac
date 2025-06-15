const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

router.get('/', perfilController.obterTodasOsPerfis);
router.post('/', perfilController.criarPerfil);
router.get('/:id', perfilController.obterPerfilPorId);
router.put('/:id', perfilController.atualizarPerfil);
router.delete('/:id', perfilController.deletarPerfil);

module.exports = router;