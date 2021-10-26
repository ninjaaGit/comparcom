const { TEXT } = require("sequelize");
const Sequelize = require("sequelize");
const conection = require("../infraestrutura/conexao");

const carrinho = conection.define('carrinho',{
    id_produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.STRING, 
        allowNull: false
    },
});

carrinho.sync({force: false}).then(() =>{
    console.log("Tabela carrinho criada!");
}); 

module.exports = carrinho