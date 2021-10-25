import React from "react";
import Itens from "../../components/Cards/cardCarrinho/cardCarrinho"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import '../../static/App.scss'

const Carrinho = (props) => {
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
