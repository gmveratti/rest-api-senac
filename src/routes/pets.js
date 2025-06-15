const express = require('express'); 
const router = express.Router(); 
const petController = require('../controllers/petController'); 

router.get('/', petController.obterTodosOsPets);
router.post('/', petController.criarPet);
router.get('/:id', petController.obterPetPorId);
router.put('/:id', petController.atualizarPet);
router.delete('/:id', petController.deletarPet);
module.exports = router; // Exporta o roteador para uso em outros arquivos.