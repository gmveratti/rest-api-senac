const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT,  perfilController.obterTodasOsPerfis);
router.post('/', authenticateJWT, perfilController.criarPerfil);
router.get('/:id', authenticateJWT, perfilController.obterPerfilPorId);
router.put('/:id', authenticateJWT, perfilController.atualizarPerfil);
router.delete('/:id', authenticateJWT, perfilController.deletarPerfil);

module.exports = router;