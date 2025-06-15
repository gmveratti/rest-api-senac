'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const clientes = [
      { nome: 'João Silva', email: 'joao.silva@example.com', telefone: '123456789' },
      { nome: 'Maria Oliveira', email: 'maria.oliveira@example.com', telefone: '987654321' },
      { nome: 'Pedro Santos', email: 'pedro.santos@example.com', telefone: '456123789' },
      { nome: 'Ana Costa', email: 'ana.costa@example.com', telefone: '789321456' },
      { nome: 'Lucas Pereira', email: 'lucas.pereira@example.com', telefone: '321654987' },
      { nome: 'Carla Souza', email: 'carla.souza@example.com', telefone: '654987321' },
      { nome: 'Rafael Lima', email: 'rafael.lima@example.com', telefone: '159753486' },
      { nome: 'Fernanda Rocha', email: 'fernanda.rocha@example.com', telefone: '753159486' },
      { nome: 'Gustavo Alves', email: 'gustavo.alves@example.com', telefone: '951357486' },
      { nome: 'Juliana Martins', email: 'juliana.martins@example.com', telefone: '357951486' }
    ];

    await queryInterface.bulkInsert('clientes', clientes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};