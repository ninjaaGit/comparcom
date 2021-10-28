import React from "react";
import Container from "@material-ui/core/Container";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Cards/cardProduto/cardProduto";
import Header from "../../components/Header/Header";
import { IndexContext } from "../../context/index";
// import Carrossel from "../../components/Carrossel/Carrossel"
import CircularProgress from '@mui/material/CircularProgress';
import "./styles.scss";
import '../../static/App.scss'

const Home = () => {
  const { product, user, loading, select, setSelect } = React.useContext(IndexContext);
  const [ filtro, setFiltro] = React.useState(product ? product : []);

  return (
    <div id="App">
      <Header/>
      <Container>
        <main>
          <div>
            {/* <Carrossel /> */}
            <h2>Produtos</h2>
            <div className="cardDiv">
              <Card/>
            </div>
          </div>
        </main>
      </Container>
      <Footer/>
    </div>
  );
};

export default Home;
