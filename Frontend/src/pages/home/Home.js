import React from "react";
import Container from "@material-ui/core/Container";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Cards/cardProduto/cardProduto";
import Header from "../../components/Header/Header";
import Carrossel from "../../components/Carrossel/Carrossel";
import "./styles.scss";
import '../../static/App.scss'

const Home = () => {
  return (
    <div id="App">
      <Header />
      <Container>
        <main>
          <div>
            <Carrossel />

            <h2>Produtos</h2>

            <div className="cardDiv">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
