const express = require('express'); // Importa o Express para criar o aplicativo do servidor.
const app = express(); // Cria uma instância do aplicativo Express.
const petsRoutes = require('./routes/pets'); // Importa as rotas de pets.

app.use(express.json()); // Middleware para lidar com requisições JSON.
app.use('/api/pets', petsRoutes); // Usa as rotas de pets sob o caminho '/api/pets'.

const PORT = process.env.PORT || 3000; // Define a porta do servidor, usando a variável de ambiente ou 3000 por padrão.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Inicia o servidor e exibe uma mensagem no console.
});