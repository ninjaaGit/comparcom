const express = require("express");
const ep = express();
const dotenv = require('dotenv')
const connection = require("./infraestrutura/conexao");
const User = require("./infraestrutura/tabelas");
const Produtos = require("./infraestrutura/tabelaProdutos");
const Categorias = require("./infraestrutura/tabelaCategorias");
const Carrinho = require("./infraestrutura/tabelaCart");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
var jwt = require('jsonwebtoken');
var cors = require('cors')

ep.use(cookieParser());

ep.use(cors({ origin: 'http://localhost:3000', credentials: true }));
connection.authenticate().then(() => {console.log("conectado ao mysql")}).catch((erro) =>{ console.log(erro)})
dotenv.config({path: './.env'});
ep.set('view engine', 'ejs');
ep.use(express.static('public'));
ep.use(express.urlencoded({extended: false}));
ep.use(express.json());

function verifyJWT(req, res, next){ 
    const token = req.cookies.access_token
    const chavePrivada = 'YOUR_SECRET_KEY';
    if (!token) 
        return res.status(401).send({ auth: false, message: 'Token não informado.' }); 
    
        jwt.verify(token, chavePrivada, (err, userJWT) => { 
        if (err)

            return res.status(500).send({ auth: false, message: 'Token inválido.' }); 
        
        req.userJWT = userJWT; 
        next();    
        
    }); 
}

ep.get("/user",verifyJWT, async (req, res) => {
    const id = (req.userJWT.id)
    const userWithCpf = await User.findOne({ where: {id}  }).catch((err) =>{console.log(err);});
    res.json(userWithCpf.dataValues);
})

ep.get("/product", async (req, res) => {
    const produtoCriado = await Produtos.findAll().catch((err) =>{console.log(err);});
    res.json(produtoCriado);
})

ep.post("/criarprod" , async (req, res) => {
    const {nomeProduto, valor, urlImg, descricao, quantidade, categoria} = req.body
    const produtoCriado = await Produtos.findOne({ where: {nomeProduto}  }).catch((err) =>{console.log(err);});
    const product = {nomeProduto, valor, urlImg, descricao, quantidade, categoria}

    if(produtoCriado){ 
        return res.json({ message: "Este produto ja existe!"})
    }

    else{
    const resposta = await Produtos.create({ nomeProduto, valor, urlImg, descricao, quantidade, categoria});
        return res.json({nomeProduto,valor,descricao,quantidade,categoria})
    }
});

ep.post("/register",  async (req, res) => {
    const {nome, cpf, passwd, rua, bairro, numero} = req.body
    const userWithCpf = await User.findOne({ where: {cpf}  }).catch((err) =>{console.log(err);});

    if(userWithCpf){ 
        return res.json({ message: "Email ou usuiario ja existe!"})
    }

    

    else{
        console.log(passwd)
        let senha = await bcrypt.hash(passwd, 8);
        const resposta = await User.create({ nome, cpf, senha, rua, bairro, numero });
        return res.json({nome,rua,bairro,numero})
    }
});

ep.get('/logout',verifyJWT, function(req, res) { 
    res.clearCookie("access_token").send('users.dataValues')
});

ep.post("/login", async (req, res) => {
    const {cpf,senha} = (req.body)

    const userWithCpf = await User.findOne({ where: {cpf}  }).catch((err) =>{console.log(err);});
    const password = await bcrypt.compare(senha, userWithCpf.senha);

    console.log(senha, password)
    if (userWithCpf && password){
        const token = jwt.sign({ id: userWithCpf.dataValues.id, role: "captain" }, "YOUR_SECRET_KEY", { expiresIn: '1h' });
        return res
          .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(new Date().getTime() + 3600000)
          })
          .status(200)
          .send({message: userWithCpf})
        }
    else{
        return res
            .status(401).send('Login inválido!')
    }
  });

    ep.post("/addcarrinho",verifyJWT, async (req, res) => {
        const id_usuario = (req.userJWT.id)
        const {id_produto} = (req.body)
        let quantidade = 1
        const pesquisaCarrinho = await Carrinho.findOne({ where: {id_usuario,id_produto}  }).catch((err) =>{console.log(err);});
        if(!pesquisaCarrinho){
            const resposta = await Carrinho.create({ id_produto, id_usuario, quantidade});
            res.json(resposta);
        }
        if(pesquisaCarrinho){
            // console.log(parseInt(pesquisaCarrinho.dataValues.quantidade))
            // const teste =  1 + parseInt(pesquisaCarrinho.dataValues.quantidade)
            const resp = await Carrinho.update({ id_produto, id_usuario, quantidade});
            res.json(resp);
        }
    

    
})

ep.get("/carrinho",verifyJWT, async (req, res) => {
    const id_usuario = (req.userJWT.id)
    const pesquisaCarrinho = await Carrinho.findAll();
    if(!pesquisaCarrinho){
        const resposta = await Carrinho.create({ id_produto, id_usuario, quantidade});
        res.json(resposta);
    }
    if(pesquisaCarrinho){
        res.json(pesquisaCarrinho);
    }})

ep.listen(5000)
