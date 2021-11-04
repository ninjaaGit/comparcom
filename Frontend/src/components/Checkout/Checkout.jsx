import React from "react";
import Paper from "@material-ui/core/Paper";
import { IndexContext } from "../../context/index";
import "./styles.scss";

function Checkout() {
    const { handleLogout, user, admin, setSelect} = React.useContext(IndexContext);

    return (<><Paper className="teste">
            <h1>Checkout</h1>

        
        
        </Paper></>)
}

export default Checkout;