import Paper from '@material-ui/core/Paper';
import './styles.scss'
import React from 'react';
import { useHistory } from "react-router-dom";
import { IndexContext } from "../../context/index";

function Card(props) {
    let history = useHistory();

    const {handleCarrinho, user} = React.useContext(IndexContext);
    console.log(props?.produto);
    return (
        <>
            {props?.produto?.map((e, index) =>{
                return (
                    <Paper className={props.css} key={index}>
                        <div >
                            <img className="cardImg" src={e.urlImg} onClick={() => history.push("produto",{msg:e})}></img>
                        </div>
                        <p>{e.nomeProduto}</p>
                        <div className="cardB2">
                            <button onClick={() => {
                                if(!user){
                                    history.push("/login")
                                }

                                if(e.unidade > 0){
                                    const id_produto = ({id_produto:e.id, metodo:false})
                                    handleCarrinho(id_produto)
                                }
                                }}>-</button>
                            <input id="input" min="0" max={`${e.quantidade}`} value={ e?.unidade ? e?.unidade : 0} />
                            <button onClick={() => {
                                if(!user){
                                    history.push("/login")
                                }
                                if(e.unidade < 10){
                                    const id_produto = ({id_produto:e.id, metodo:true})
                                    handleCarrinho(id_produto)
                                }
                                }}>+</button>
                        </div>
                    </Paper>
                )})
            }
        </>
    );
}
export default Card;