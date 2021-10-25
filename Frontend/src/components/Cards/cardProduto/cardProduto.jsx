import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import './styles.scss'
import React from 'react';
import {IndexContext} from '../../../context/index'
import { useHistory } from "react-router-dom";


function Card(props) {
    const { product, user, loading, handleCarrinho, select, setProduct } = React.useContext(IndexContext);
    let history = useHistory();
    const productToShow = product ? product.filter(item => item?.categoria == select) : null

    function decrease(index){

        setProduct((a) => {
            const qtd = parseInt(a[index].quantidade)
            a[index].quantidade=qtd - 1
            return([...a])
        })
        // val -= 1
        // document.getElementById('input').value = val;
    }
    
    function increase(index){
        setProduct((a) => {
            const qtd = parseInt(a[index].quantidade)
            a[index].quantidade=qtd + 1
            return([...a])
        })
    }
  

    function verify(e){
        if(!loading) {
            if(!user){
                return( 
                    history.push("/login")
                )
            }
            else{
                console.log(e)  
            }
                
        }
    }

    console.log(product?.length, select)

    return (
        <>
        
        { !select || select === '0' ? product?.map((e, index) =>{
        return (
            <Paper className="cardProduto">
            <div>
                <Link to="/produtos"><img className="cardImg" src={e.urlImg}></img></Link>
            </div>
            <p><Link to="/produtos">{e.nomeProduto}</Link></p>
            <div className="cardButton2">
                <button onClick={() => decrease(index)}>-</button>
                <input id="input" min="0" type="number" value={e.quantidade} readonly />
                <button onClick={() => increase(index)}>+</button>
            </div>
        </Paper>
        )})
 : productToShow?.map((e) =>{

            return (
                <Paper className="cardProduto">
                    <div>
                        <Link to="/produtos"><img className="cardImg" src={e.urlImg}></img></Link>
                    </div>
                    <p><Link to="/produtos">{e.nomeProduto}</Link></p>
                    <div >
                    <div className="cardButton2">
                        <button onClick={decrease}>-</button>
                        <input id="input" min="0" type="number" value="0" readonly />
                        <button onClick={increase}>+</button>
                    </div>
                    </div>
                </Paper>
            )

        }

        )}
        </>

    );
}

export default Card;