import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import './styles.scss'

function Card() {
    var val = 0

    function decrease(){
        val -= 1
        document.getElementById('input').value = val;
      }
      
      function increase(){
        val += 1
        document.getElementById('input').value = val;
      }

    return (
        <Paper className="cardProduto">
            <div>
                <Link to="/produtos"><img className="cardImg" src="https://compre.arcom.com.br/imagens/produtos/51305_t.jpg"></img></Link>
            </div>
            <p><Link to="/produtos">BOMBOM HERSHEYS SPECIAL DARK TRADICIONAL 14X20G</Link></p>
            <div className="cardButton">
                <button onClick={decrease}>-</button>
                <input id ="input" min="0" value="0"></input>
                <button onClick={increase}>+</button>
            </div>
        </Paper>
    );
}

export default Card;