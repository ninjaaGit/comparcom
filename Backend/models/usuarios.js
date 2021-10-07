const conexao = require('../infraestrutura/conexao')

class Usuario {
    adiciona(usuario, res) {
        const nomeEhValido = usuario.nome.length >= 5
        const enderecoEhValido = usuario.email.length >= 5
        const senhaEhValida = usuario.senhaHash.length >= 5

        const validacoes = [
            {
                nome: 'nome',
                valido: nomeEhValido,
                mensagem: 'O nome deve ter no mínimo 5 digitos'
            },
            {
                nome: 'senha',
                valido: senhaEhValida,
                mensagem: 'A senha deve ter no mínimo 5 digitos'
            },
            {
                nome: 'endereco',
                valido: enderecoEhValido,
                mensagem: 'O endereco deve ter no mínimo 5 digitos'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {
            
            const sql = 'INSERT INTO Usuarios SET ?'

            conexao.query(sql, usuario, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(usuario)
                }
            })
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM Usuarios'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Usuarios WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const usuario = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(usuario)
            }
        })
    }

    altera(id, valores, res) {    
        const sql = 'UPDATE Produtos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Usuarios WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Usuario