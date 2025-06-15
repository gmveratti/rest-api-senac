const express = require('express');
const sequelize = require('./config/database');

// Importando modelos
const Categoria = require('./models/Categorias');
const Subcategoria = require('./models/Subcategorias');
const Cliente = require('./models/Clientes');
const Pet = require('./models/Pets');
const Post = require('./models/Posts');
const Produto = require('./models/Produtos');
const Usuario = require('./models/Usuarios');
const Perfil = require('./models/Perfis');

// Importando rotas
const petsRoutes = require('./routes/pets');
const categoriasRoutes = require('./routes/categorias');
const subcategoriasRoutes = require('./routes/subcategorias');
const clientesRoutes = require('./routes/clientes');
const postsRoutes = require('./routes/posts');
const produtosRoutes = require('./routes/produtos');
const usuarioRoutes = require('./routes/usuarios');
const perfilRoutes = require('./routes/perfis');

// Definindo os relacionamentos
Categoria.hasMany(Subcategoria, { foreignKey: 'categoriaId', as: 'subcategorias' });
Subcategoria.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });

Cliente.hasMany(Pet, { foreignKey: 'clienteId', as: 'pets' });
Pet.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'cliente' });

Categoria.hasMany(Post, { foreignKey: 'categoriaId', as: 'posts' });
Post.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });

Categoria.hasMany(Produto, { foreignKey: 'categoriaId', as: 'produtos' });
Produto.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });

Subcategoria.hasMany(Produto, { foreignKey: 'subcategoriaId', as: 'produtos' });
Produto.belongsTo(Subcategoria, { foreignKey: 'subcategoriaId', as: 'subcategoria' });

Usuario.belongsTo(Perfil, { foreignKey: 'perfilId', as: 'perfil' });
Perfil.hasMany(Usuario, { foreignKey: 'perfilId', as: 'usuarios' });


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
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/perfis', perfilRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});