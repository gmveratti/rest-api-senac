const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioControllers');

router.get('/', usuarioController.obterTodosOsUsuarios);
router.post('/', usuarioController.criarUsuario);
router.get('/:id', usuarioController.obterUsuarioPorId);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.deletarUsuario);

module.exports = router;