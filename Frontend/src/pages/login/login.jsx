import React from 'react';
import "../login/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {IndexContext} from '../../context/index'


function Login() {

  const { logado, handleLogin,user,setUser } = React.useContext(IndexContext);
  

  const enviaForm = async (event) => {
    handleLogin(user.cpf,user.senha)
    event.preventDefault();

  }

  return (
    <div className="login_body">
      <Link to="/" classname="cancel">Cancelar</Link>
      <div className="login_main">
        <h1 className="login_title"> Compre Arcom </h1>
        <form className="loginForm" onSubmit={enviaForm}>
          <input name="usuario" className="loginInput" onChange={(e) => {setUser({...user,cpf:e.target.value})}} placeholder="CPF"></input>
          <input name="senha" className="loginInput" onChange={(e) =>  {setUser({...user,senha:e.target.value})}} type="password" placeholder="Senha"></input>
          <button type="submit" variant="contained" color="success" className="login_entrar">Entrar</button>
          <Link to="/register" className="cadastro">
            Cadastre-se
          </Link>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
