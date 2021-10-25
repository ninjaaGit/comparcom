const { TEXT } = require("sequelize");
const Sequelize = require("sequelize");
const conection = require("../infraestrutura/conexao");

const produtos = conection.define('produtos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlImg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

produtos.sync({force: false}).then(() =>{
    console.log("Tabela produtos criada!");
}); 

module.exports = produtos