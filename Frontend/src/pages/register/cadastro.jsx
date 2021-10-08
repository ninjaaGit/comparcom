import "./style.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React from 'react';
import api from "../../services/api";

function Cadastro() {

  const usuario = {
    nome:null,
    cpf:null,
    senha:null,
    rua:null,
    bairro:null,
    numero:null
  }

  const [ login, setLogin ] = React.useState(false);
  const [user,setUser] = React.useState(usuario);

  const handleCadastro = async (e) => {
    e.preventDefault();
    if(user.nome.length <= 0 || user.nome.length <=3) {
      alert("Nome inválido!")
    } else if (user.cpf.length <= 0 || user.cpf.length < 3) {
      alert("Email inválido!")
    } else if (user.senha.length <= 0 || user.senha.length < 3) {
      alert("Senha inválida!")
    } else if (user.rua.length <= 0 || user.rua.length <= 4) {
      alert("Rua inválida!")
    } else if (user.bairro.length <= 0 || user.bairro.length <= 4) {
      alert("Bairro inválida!")
    } else if (user.numero.length <= 0 || user.numero.length <= 1) {
      alert("Número inválido!")
    } else {
      console.log(user)
      try{
        const res = await api.post('/usuarios',user)
        console.log(res);
        setLogin(true)
      } catch(err){
        alert("Valores inválidos")
        console.log(err);
      }
    }
  }

  if (login === true) {
    return <Redirect to="/login" />
  }
  return (
    <div className="login_body">
      <Link to="/" className="cancelar">Cancelar</Link>
      <div className="login_main">
        <form className="loginForm">
          <input className="loginInput" name="nome" placeholder="Nome Completo" onChange={(e) => {setUser({...user,nome:e.target.value})}}  ></input>
          <input className="loginInput" name="cpf" placeholder="CPF" onChange={(e) => {setUser({...user,cpf:e.target.value})}} ></input>
          <input className="loginInput" type="password" name="senha" placeholder="Senha" onChange={(e) => {setUser({...user,senha:e.target.value})}} ></input>
          <input className="loginInput" name="rua" placeholder="Rua" onChange={(e) => {setUser({...user,rua:e.target.value})}} ></input>
          <input className="loginInput" name="Bairro" placeholder="Bairro" onChange={(e) => {setUser({...user,bairro:e.target.value})}} ></input>
          <input className="loginInput" name="Numero" placeholder="Número" onChange={(e) => {setUser({...user,numero:e.target.value})}} ></input>
          <button onClick={handleCadastro} to="/" className="login_entrar">
            Criar conta
          </button>
          <Link to="/login" className="cadastro">
            Voltar para o login
          </Link>
        </form>

      </div>
    </div>
  );
}

export default Cadastro;
