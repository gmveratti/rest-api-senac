const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioControllers');
const authenticateJWT = require('../middleware/auth');

router.post('/login', usuarioController.login);

router.get('/', authenticateJWT, usuarioController.obterTodosOsUsuarios);
router.post('/', authenticateJWT, usuarioController.criarUsuario);
router.get('/:id', authenticateJWT, usuarioController.obterUsuarioPorId);
router.put('/:id', authenticateJWT, usuarioController.atualizarUsuario);
router.delete('/:id', authenticateJWT, usuarioController.deletarUsuario);

module.exports = router;