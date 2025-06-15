# API de Gestão para Pet Shop

API RESTful desenvolvida como parte do curso **Desenvolvedor Web Back-end Node.js** do Senac. O projeto consiste em um sistema de gerenciamento para um pet shop, permitindo o controle de clientes, pets, produtos, categorias e vendas.

## ✨ Funcionalidades

* **Gerenciamento completo (CRUD)** para as principais entidades:
    * Usuários
    * Clientes e seus Pets
    * Produtos
    * Categorias e Subcategorias
    * Vendas
* [cite_start]**Autenticação de Rota** com JSON Web Tokens (JWT) para proteger os endpoints.
* [cite_start]**Documentação Interativa** da API com Swagger, permitindo testar os endpoints diretamente pelo navegador.
* [cite_start]**Banco de Dados** com schema controlado por migrations e populado com dados iniciais através de seeders.
* [cite_start]**Estrutura de Projeto** organizada seguindo o padrão MVC (Model-View-Controller).

## 🚀 Tecnologias Utilizadas

* [cite_start]**Back-end:** Node.js 
* [cite_start]**Framework:** Express.js 
* **Banco de Dados:** SQLite
* [cite_start]**ORM:** Sequelize 
* [cite_start]**Autenticação:** JSON Web Token (JWT) 
* [cite_start]**Validação e Criptografia:** Bcrypt 
* [cite_start]**Documentação:** Swagger (swagger-ui-express e swagger-jsdoc) 
* [cite_start]**Variáveis de Ambiente:** Dotenv 

## 📂 Estrutura do Projeto

[cite_start]O projeto segue uma arquitetura baseada no padrão MVC para garantir a separação de responsabilidades:

/src
|-- /config       # Configuração do banco de dados e outros
|-- /controllers  # Lógica de negócio da aplicação 
|-- /data         # Arquivo do banco de dados SQLite 
|-- /middleware   # Middlewares, como o de autenticação 
|-- /models       # Modelos de dados do Sequelize 
|-- /routes       # Definição das rotas da API 
|-- /testes       # Testes unitários
`-- server.js     # Arquivo principal para iniciar o servidor 

## ⚙️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/api-rest-senac.git](https://github.com/seu-usuario/api-rest-senac.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd api-rest-senac
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Crie o arquivo de variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione a chave secreta para o JWT:
    ```
    SECRET_KEY=sua_chave_secreta_super_segura
    ```

5.  **Execute as migrations para criar as tabelas:**
    ```bash
    npm run migrate
    ```

6.  **Execute os seeders para popular o banco de dados:**
    ```bash
    npm run seed
    ```

7.  **Inicie o servidor:**
    ```bash
    npm start
    ```

A API estará rodando em `http://localhost:3000`.

## 📚 Endpoints da API

A documentação completa e interativa de todos os endpoints está disponível através do Swagger UI. Após iniciar o servidor, acesse:

**[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

## 👨‍🏫 Autor

* **Aluno:** Gabriel Veratti
* **Instrutor:** Edson Dionizio 


