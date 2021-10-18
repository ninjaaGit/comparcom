const express = require("express");
const ep = express();
const dotenv = require('dotenv')
const connection = require("./infraestrutura/conexao");
const User = require("./infraestrutura/tabelas");
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
        console.log("User Id: " + userJWT   )
        next(); 
    }); 
}

ep.get("/user",verifyJWT, async (req, res) => {
    const id = (req.userJWT.id)
    const userWithCpf = await User.findOne({ where: {id}  }).catch((err) =>{console.log(err);});
    res.json(userWithCpf.dataValues);
})

ep.post("/register",  async (req, res) => {
    const {nome, cpf, senha, rua, bairro, numero} = req.body
    const userWithCpf = await User.findOne({ where: {cpf}  }).catch((err) =>{console.log(err);});
    const usuario = {nome, cpf, senha, rua, bairro, numero}

    if(userWithCpf){ 
        return res.json({ message: "Email ou usuiario ja existe!"})
    }

    if(passwd == passwd1) {

    }

    else{
    const resposta = await User.create({ nome, cpf, senha, rua, bairro, numero });
        return res.json({nome,rua,bairro,numero})
    }
});

ep.get('/logout',verifyJWT, function(req, res) { 
    console.log("logout");
    res.clearCookie("access_token").send('users.dataValues')
});

ep.post("/login", async (req, res) => {
    const {cpf,senha} = (req.body)

    const userWithCpf = await User.findOne({ where: {cpf,senha}  }).catch((err) =>{console.log(err);});
    if (userWithCpf){
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

ep.listen(5000)
