const { TEXT } = require("sequelize");
const Sequelize = require("sequelize");
const conection = require("../infraestrutura/conexao");

const users = conection.define('users',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

users.sync({force: false}).then(() =>{
    console.log("Tabela criada!");
}); 

module.exports = users