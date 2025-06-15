const fs = require('fs'); // Módulo do Node.js para manipulação de arquivos.
const path = require('path'); // Módulo do Node.js para manipulação de caminhos de arquivos.

const filePath = path.join(__dirname, '../data/pets.json'); // Caminho completo para o arquivo JSON que armazena os dados dos pets.
let pets = JSON.parse(fs.readFileSync(filePath, 'utf-8')); // Lê o conteúdo do arquivo JSON e o converte em um array de objetos JavaScript.

function savePetsToFile(pets) {
  // Função responsável por salvar o array de pets no arquivo JSON.
  // 1. `JSON.stringify(pets, null, 2)` converte o array de objetos em uma string JSON formatada.
  // 2. `fs.writeFileSync(filePath, ..., 'utf-8')` grava essa string no arquivo, substituindo o conteúdo anterior.
  fs.writeFileSync(filePath, JSON.stringify(pets, null, 2), 'utf-8');
}

exports.getAllPets = (req, res) => {
  // Método para obter todos os pets.
  // 1. `res.json(pets)` envia a lista de todos os pets como resposta em formato JSON.
  res.json(pets);
};

exports.createPet = (req, res) => {
  // Método para criar um novo pet.
  const pet = req.body; // Obtém os dados do novo pet a partir do corpo da requisição HTTP.
  pet.id = pets.length + 1; // Define um novo ID para o pet, baseado no tamanho atual do array de pets.
  pets.push(pet); // Adiciona o novo pet ao array de pets existente.
  savePetsToFile(pets); // Chama a função para salvar o array atualizado no arquivo JSON.
  res.status(201).json(pet); // Retorna o novo pet criado com status 201, indicando que foi criado com sucesso.
};

exports.getPetById = (req, res) => {
  // Método para obter um pet específico pelo seu ID.
  const id = parseInt(req.params.id); // Converte o ID do pet, recebido como parâmetro na URL, para um número inteiro.
  const pet = pets.find(p => p.id === id); // Procura no array de pets um pet com o ID correspondente.
  if (pet) {
    // Se um pet com o ID especificado for encontrado:
    res.json(pet); // Retorna o pet encontrado em formato JSON.
  } else {
    // Se nenhum pet com o ID especificado for encontrado:
    res.status(404).send('Pet não encontrado'); // Retorna um status 404 indicando que o pet não foi encontrado.
  }
};

exports.updatePet = (req, res) => {
  // Método para atualizar as informações de um pet existente.
  const id = parseInt(req.params.id); // Converte o ID do pet, recebido como parâmetro na URL, para um número inteiro.
  const petIndex = pets.findIndex(p => p.id === id); // Encontra o índice do pet no array com base no ID.
  if (petIndex !== -1) {
    // Se o pet com o ID especificado for encontrado:
    // Atualiza o objeto do pet no índice `petIndex` usando o operador de espalhamento:
    // 1. `{ ...pets[petIndex] }` cria uma cópia do objeto existente do pet, preservando todas as suas propriedades atuais.
    // 2. `{ ...req.body }` adiciona as propriedades do objeto `req.body` à cópia. 
    //    Se `req.body` contiver propriedades com os mesmos nomes, elas sobrescreverão as existentes no pet.
    // 3. O resultado é um novo objeto com as propriedades atualizadas, que substitui o objeto original no array `pets`.
    pets[petIndex] = { ...pets[petIndex], ...req.body };

    savePetsToFile(pets); // Salva o array atualizado no arquivo JSON.
    res.json(pets[petIndex]); // Retorna o pet atualizado em formato JSON.
  } else {
    // Se nenhum pet com o ID especificado for encontrado:
    res.status(404).send('Pet não encontrado'); // Retorna um status 404 indicando que o pet não foi encontrado.
  }
};

exports.deletePet = (req, res) => {
  // Método para deletar um pet pelo seu ID.
  const id = parseInt(req.params.id); // Converte o ID do pet, recebido como parâmetro na URL, para um número inteiro.
  const petIndex = pets.findIndex(p => p.id === id); // Encontra o índice do pet no array com base no ID.
  if (petIndex !== -1) {
    // Se o pet com o ID especificado for encontrado:
    pets.splice(petIndex, 1); // Remove o pet do array usando o índice encontrado.
    savePetsToFile(pets); // Salva o array atualizado no arquivo JSON.
    res.status(204).send(); // Retorna um status 204, indicando que a operação foi bem-sucedida, mas sem conteúdo na resposta.
  } else {
    // Se nenhum pet com o ID especificado for encontrado:
    res.status(404).send('Pet não encontrado'); // Retorna um status 404 indicando que o pet não foi encontrado.
  }
};