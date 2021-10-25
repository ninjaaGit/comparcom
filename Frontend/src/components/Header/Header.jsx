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
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IndexContext } from "../../context/index";
import "./styles.scss";




function Header(props) {
  let history = useHistory();
  const {handleLogout, handleSearchUser, user, redirect, loading, select, setSelect} = React.useContext(IndexContext);
  console.log(user)
  const desloga = async (event) => {
    event.preventDefault();
    handleLogout()
    window.location.reload(true)
  }
  
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar className="header">
          <button onClick = {desloga}>Logout</button>
          <a onClick = {() => history.push("/")}><LogoArcom className="title"></LogoArcom></a>
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
              <Button color="inherit" onClick = {handleSearchUser}>
                <AccountBoxIcon></AccountBoxIcon>
              </Button>
                <Button color="inherit" onClick = {() => history.push("/carrinho")}>
                  <ShoppingCartIcon></ShoppingCartIcon>
                </Button>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <div className="categorias">
          <div className="innerCategories">
            <button onClick={() => {
              history.push("/"); setSelect("0")}} className="buttons">PROMOÇÕES</button>
            <button onClick={() => {
              history.push("/"); setSelect("1")}} className="buttons">BAZAR & UTILIDADES</button>
            <button onClick={() => {
              history.push("/"); setSelect("2")}} className="buttons">HIGIENE & BELEZA</button>
            <button onClick={() => {
              history.push("/"); setSelect("3")}} className="buttons">MATERIAL DE CONTRUÇÃO & ELÉTRICO</button>
            <button onClick={() => {
              history.push("/"); setSelect("4")}} className="buttons">MATERIAL ESCOLAR & ESCRITÓRIO</button>
            <button onClick={() => {
              history.push("/"); setSelect("5")}} className="buttons">PRODUTOS ALIMENTÍCIOS</button>
          </div>
        </div>
      </AppBar>
    </div>


  );
}

export default Header;
