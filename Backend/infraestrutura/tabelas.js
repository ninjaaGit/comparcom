class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarProdutos()
        this.criarUsuarios()
    }

    criarProdutos() {
        const sql = 'CREATE TABLE IF NOT EXISTS produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, valor varchar(20), imagem varchar(20) NOT NULL, estoque varchar(50) NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }
        })
    }

    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(40) NOT NULL, endereco VARCHAR(40) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, senhaHash VARCHAR(255) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }
        })
    }
}

module.exports = new Tabelas