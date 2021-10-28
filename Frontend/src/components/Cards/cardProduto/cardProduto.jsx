import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import './styles.scss'
import React from 'react';
import {IndexContext} from '../../../context/index'
import { useHistory } from "react-router-dom";


function Card(props) {
    const { product, user, loading, handleCarrinho, carrinho, setCarrinho, select, setProduct } = React.useContext(IndexContext);
    let history = useHistory();
    const productToShow = product ? product.filter(item => item?.categoria == select) : null

    console.log(product, select)

    return (
        <>
        
        { !select || select === '0' ? product?.map((e, index) =>{
        return (
            <Paper className="cardProduto">
                <div>
                    <Link to="/produtos"><img className="cardImg" src={e.urlImg}></img></Link>
                </div>
                <p><Link to="/produtos">{e.nomeProduto}</Link></p>
                <div className="cardB2">
                    <button onClick={handleCarrinho}>-</button>
                    <input id="input" min="0" max={e.quantidade} value={0} />
                    <button onClick={handleCarrinho}>+</button>
                </div>
            </Paper>
        )})
 : productToShow?.map((e,index) =>{

            return (
                <Paper className="cardProduto">
                    <div>
                            <Link to="/produtos"><img className="cardImg" src={e.urlImg}></img></Link>
                        </div>
                        <p><Link to="/produtos">{e.nomeProduto}</Link></p>
                        <div className="cardB2">
                        <button onClick={handleCarrinho}>-</button>
                        <input id="input" min="0" max={e.quantidade} value={0} />
                        <button onLick={handleCarrinho}>+</button>
                    </div>
                </Paper>
            )

        }

        )}
        </>

    );
}

export default Card;