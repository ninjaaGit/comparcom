import { Link } from "react-router-dom";
import React from 'react';
import {IndexContext} from '../../../context/index'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import "./styles.scss";

function Itens() {
  const { product, user, loading, handleCarrinho, carrinho, setCarrinho, select, setProduct } = React.useContext(IndexContext);

  return (
    <>
    {product?.map((e, index) =>{
    return (
      
      <div className="cardCarrinho2">
        
        <Link to="/carrinho">
          <img
            className="cardImg2"
            src={e.urlImg}
          ></img>
        </Link>
        
        <div className="cardWrapper2">
          <p className="textCart2">
          {e.nomeProduto}
          </p>
          <p className="cardPrice">
          R$ {e.valor}
          </p>
          <div className="cardButton2">
            <button>-</button>
            <input id="input" min="0" type="number" value="0" readonly />
            <button>+</button>
          </div>
          <a className="cardRemove">
            Remover
          </a>
        </div>
      </div>
    );})}
    </>

  );
}

export default Itens;