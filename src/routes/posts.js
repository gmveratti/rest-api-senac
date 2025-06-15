const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT, postController.obterTodosOsPosts);
router.post('/', authenticateJWT, postController.criarPost);
router.get('/:id', authenticateJWT, postController.obterPostPorId);
router.put('/:id', authenticateJWT, postController.atualizarPost);
router.delete('/:id', authenticateJWT, postController.deletarPost);

module.exports = router;