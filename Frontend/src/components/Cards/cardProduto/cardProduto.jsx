
import Paper from '@material-ui/core/Paper';
import './styles.scss'
import React from 'react';
import { useHistory } from "react-router-dom";

function Card(props) {
    let history = useHistory();
    return (
        <>
        {props?.produto?.map((e, index) =>{
        return (
            <Paper className="cardProduto">
                <div>
                    <img className="cardImg" src={e.urlImg} onClick={() => history.push("produto",{msg:e})}></img>
                </div>
                <p>{e.nomeProduto}</p>
                <div className="cardB2">
                    <button >-</button>
                    <input id="input" min="0" max={e.quantidade} value={0} />
                    <button >+</button>
                </div>
            </Paper>
        )})
        }
    </>);
}
export default Card;