import React from "react";
import Card from "../../components/Card/cardCarrinho"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Checkout from "../../components/Checkout/Checkout";
import '../../static/App.scss'
import {IndexContext} from '../../context/index'


const Carrinho = () => {

  const { carrinho,product } = React.useContext(IndexContext);
  // const [cart, setCart] = React.useState([]);

  // React.useEffect(() =>{
  //   setCart(product.filter(e => e.id == carrinho.map(e => {return(e.id_produto)})))
  // },[carrinho])
  

  return (
    <div>
      <div>
      <Header />
      </div>
        <main>
          <Card produto={carrinho} className="cardCarrinho"/>
          <Checkout/>
        </main>
      <Footer />
    </div>
  );
};
export default Carrinho;
