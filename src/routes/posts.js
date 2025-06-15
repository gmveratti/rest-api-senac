const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

router.get('/', postController.obterTodosOsPosts);
router.post('/', postController.criarPost);
router.get('/:id', postController.obterPostPorId);
router.put('/:id', postController.atualizarPost);
router.delete('/:id', postController.deletarPost);

module.exports = router;