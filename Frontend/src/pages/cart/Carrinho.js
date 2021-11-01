import React from "react";
import Card from "../../components/Card/cardCarrinho"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import '../../static/App.scss'
import {IndexContext} from '../../context/index'


const Carrinho = () => {

  const { carrinho,product } = React.useContext(IndexContext);
  const [cart, setCart] = React.useState([]);



  return (
    <div>
      <div>
      <Header />
      </div>
        <main>
          <Card produto={cart}/>
        </main>
      <Footer />
    </div>
  );
};
export default Carrinho;
