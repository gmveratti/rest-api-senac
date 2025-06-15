const Usuario = require('../models/Usuarios');
const bcrypt = require('bcrypt');

exports.obterTodosOsUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send('Erro ao buscar usuários');
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email, telefone, senha, perfilId } = req.body;

    // Criptografar a senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Criar o usuário com a senha criptografada
    const usuario = await Usuario.create({
      nome,
      email,
      telefone,
      senha: senhaCriptografada,
      perfilId
    });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).send('Erro ao criar usuário');
  }
};

exports.obterUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar usuário');
  }
};

exports.atualizarUsuario = async (req, res) => {
  try {
    const [atualizado] = await Usuario.update(req.body, {
      where: { id: req.params.id }
    });
    if (atualizado) {
      const usuarioAtualizado = await Usuario.findByPk(req.params.id);
      res.json(usuarioAtualizado);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao atualizar usuário');
  }
};

exports.deletarUsuario = async (req, res) => {
  try {
    const deletado = await Usuario.destroy({
      where: { id: req.params.id }
    });
    if (deletado) {
      res.status(204).send();
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao deletar usuário');
  }
};