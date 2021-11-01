import './style.css';
import React from 'react';
import {IndexContext} from '../../context/index'
import Card from "../Card/cardCarrinho";
function Produto() {
  const { product,select} = React.useContext(IndexContext);
  const productToShow = product ? product.filter(item => item?.categoria == select) : null
    return (
      <>
      <div className="produtoMain">
        <Card produto={!select || select === '0' ? product : productToShow}/>
      </div>
      </>
    );
}
export default Produto;

