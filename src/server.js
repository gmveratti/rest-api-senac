const express = require('express');
const sequelize = require('./config/database');

// Importando modelos
const models = {
  Categoria: require('./models/Categorias'),
  Subcategoria: require('./models/Subcategorias'),
  Cliente: require('./models/Clientes'),
  Pet: require('./models/Pets'),
  Post: require('./models/Posts'),
  Produto: require('./models/Produtos'),
  Usuario: require('./models/Usuarios'),
  Perfil: require('./models/Perfis'),
  };

// Estabelecendo associações
Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

// Importando rotas
const petsRoutes = require('./routes/pets');
const categoriasRoutes = require('./routes/categorias');
const subcategoriasRoutes = require('./routes/subcategorias');
const clientesRoutes = require('./routes/clientes');
const postsRoutes = require('./routes/posts');
const produtosRoutes = require('./routes/produtos');
const usuarioRoutes = require('./routes/usuarios');
const perfilRoutes = require('./routes/perfis');

// Sincroniza o banco de dados
sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado.');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

const app = express();
app.use(express.json());

// Configurando rotas
app.use('/api/pets', petsRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/subcategorias', subcategoriasRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/perfis', perfilRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});