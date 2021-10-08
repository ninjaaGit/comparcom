import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "./styles.scss";

function Itens() {
  var val = 0

  function decrease(){
    if (val > 0){
      val -= 1
      document.getElementById('input').value = val;
    }
  }
  
  function increase(){
    val += 1
    document.getElementById('input').value = val;
  }

  return (
    <div className="cardCarrinho2">
      <Link to="/carrinho">
        <img
          className="cardImg2"
          src="https://compre.arcom.com.br/imagens/produtos/51305_t.jpg"
        ></img>
      </Link>
      <div className="cardWrapper2">
        <p className="textCart2">
            BOMBOM HERSHEYS SPECIAL DARK TRADICIONAL 14X20G
        </p>
        <p className="cardPrice">
          R$ 69,90
        </p>
        <div className="cardButton2">
          <button onClick={decrease}>-</button>
          <input id="input" min="0" type="number" value="0" readonly />
          <button onClick={increase}>+</button>
        </div>
        <a className="cardRemove">
          Remover
        </a>
      </div>
    </div>
  );
}

export default Itens;
