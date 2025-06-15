const express = require('express'); 
const router = express.Router(); 
const petController = require('../controllers/petController'); 
const authenticateJWT = require('../middleware/auth');


router.get('/', authenticateJWT, petController.obterTodosOsPets);
router.post('/', authenticateJWT, petController.criarPet);
router.get('/:id', authenticateJWT, petController.obterPetPorId);
router.put('/:id', authenticateJWT, petController.atualizarPet);
router.delete('/:id', authenticateJWT, petController.deletarPet);
module.exports = router; // Exporta o roteador para uso em outros arquivos.