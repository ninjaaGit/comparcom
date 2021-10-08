import React from "react";
import Container from "@material-ui/core/Container";
import Itens from "../../components/Cards/cardCarrinho/cardCarrinho"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Paper from "@material-ui/core/Paper";
import Card from "../../components/Cards/cardProduto/cardProduto";
import { Link } from "react-router-dom";
import '../../static/App.scss'

const Carrinho = () => {
  return (
    <div>
      <div>
      <Header />
      </div>
        <main>
          <Itens />
        </main>
      <Footer />
    </div>
  );
};

export default Carrinho;
