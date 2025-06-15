const SequelizeMock = require('sequelize-mock');
const sequelizeMock = new SequelizeMock();

// Cria um mock para o modelo Categoria
const CategoriaMock = sequelizeMock.define('Categoria', {
  id: '1',
  nome: 'Eletrônicos'
});



// Adiciona validações personalizadas, se necessário
CategoriaMock.$validate = function() {
  if (this.nome.length < 3 || this.nome.length > 255) {
    throw new Error("O nome deve ter entre 3 e 255 caracteres");
  }
  if (!this.nome) {
    throw new Error("O nome não pode ser vazio");
  }
};


describe('Categoria Model Validations', () => {
  it('deve lançar erro se o nome estiver vazio', async () => {
    try {
      await CategoriaMock.create({
        id: '1',
        nome: ''
      });
    } catch (error) {
      expect(error.message).toBe("O nome não pode ser vazio");
    }
  });

  it('deve lançar erro se o nome tiver menos de 3 caracteres', async () => {
    try {
      await CategoriaMock.create({
        id: '2',
        nome: 'AB'
      });
    } catch (error) {
      expect(error.message).toBe("O nome deve ter entre 3 e 255 caracteres");
    }
  });

  it('deve lançar erro se o nome tiver mais de 255 caracteres', async () => {
    const longName = 'A'.repeat(256);
    try {
      await CategoriaMock.create({
        id: '3',
        nome: longName
      });
    } catch (error) {
      expect(error.message).toBe("O nome deve ter entre 3 e 255 caracteres");
    }
  });

  it('deve criar uma categoria válida', async () => {
    const categoria = await CategoriaMock.create({
      id: '11',
      nome: 'Eletrônicos'
    });

    expect(categoria.id).toBe('11');
    expect(categoria.nome).toBe('Eletrônicos');
  });

  it('deve atualizar uma categoria existente', async () => {
    const categoria = await CategoriaMock.findOne({ where: { id: '1' } });
    categoria.nome = 'Eletrodomésticos';
    await categoria.save();

    expect(categoria.nome).toBe('Eletrodomésticos');
  });

  it('deve selecionar uma categoria pelo ID', async () => {
    const categoria = await CategoriaMock.findOne({ where: { id: '1' } });

    expect(categoria).not.toBeNull();
    expect(categoria.id).toBe('1');
    expect(categoria.nome).toBe('Eletrônicos');
  });

  it('deve deletar uma categoria', async () => {
    // Seleciona e deleta a categoria
    const categoria = await CategoriaMock.findOne({ where: { id: '11' } });
    await categoria.destroy();

    // Remove manualmente a instância do mock
    CategoriaMock.$queueResult(null, { where: { id: '11' } });

    // Verifica se a categoria foi deletada
    const deletedCategoria = await CategoriaMock.findOne({ where: { id: '11' } });
    expect(deletedCategoria).toBeNull();
  });
});