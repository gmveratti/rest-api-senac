const express = require('express'); // Importa o Express para criar roteadores.
const router = express.Router(); // Cria uma instância do roteador.
const petsController = require('../controllers/petsController'); // Importa o controlador de pets.

router.get('/', petsController.getAllPets); // Rota para obter todos os pets.
router.post('/', petsController.createPet); // Rota para criar um novo pet.
router.get('/:id', petsController.getPetById); // Rota para obter um pet pelo ID.
router.put('/:id', petsController.updatePet); // Rota para atualizar um pet pelo ID.
router.delete('/:id', petsController.deletePet); // Rota para deletar um pet pelo ID.

module.exports = router; // Exporta o roteador para uso em outros arquivos.