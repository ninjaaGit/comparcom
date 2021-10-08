import { ReactComponent as LogoArcom } from "../../SVGS/LogoSVG.svg";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IndexContext } from "../../context/index";
import { Redirect } from "react-router-dom";
import "./styles.scss";



function Header() {

  const { logado, handleLogin, user, setUser} = React.useContext(IndexContext);

  const verifica = async (event) => {
    event.preventDefault();
    if(logado === true) {
      return <Redirect to='/perfil' />
    }
    if(logado === false) {
      return <Redirect to='/login' />
    }
  }

  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar className="header">
        <Link to="/"><LogoArcom className="title"></LogoArcom></Link>
          <Paper component="form" className="input searchbar">
            <InputBase className="input" placeholder="Pesquisar mercadoria." />
            <Link><IconButton
              type="submit"
              className="iconButtons"
              aria-label="search">
              <SearchIcon />
            </IconButton>
            </Link>
          </Paper>
          <div>
              <Link to="/login" className="login">
              <Button color="inherit" onClick = {() => {verifica}}>
                <AccountBoxIcon></AccountBoxIcon>
              </Button>
              </Link>
              <Link to="/carrinho" className="carrinho">
                <Button color="inherit">
                  <ShoppingCartIcon></ShoppingCartIcon>
                </Button>
              </Link>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <div className="categorias">
          <div className="innerCategories">
            <button className="buttons">PROMOÇÕES</button>
            <button className="buttons">BAZAR & UTILIDADES</button>
            <button className="buttons">HIGIENE & BELEZA</button>
            <button className="buttons">
              MATERIAL DE CONTRUÇÃO & ELÉTRICO
            </button>
            <button className="buttons">MATERIAL ESCOLAR & ESCRITÓRIO</button>
            <Link to="/alimentos"><button className="buttons">PRODUTOS ALIMENTÍCIOS</button></Link>
          </div>
        </div>
      </AppBar>
    </div>


  );
}

export default Header;
