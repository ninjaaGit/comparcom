import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Home from '../pages/home/Home'
import Alimentos from '../pages/products/alimentos/Alimentos';
import Bazar from '../pages/products/bazar/Bazar';
import Eletrico from '../pages/products/eletrico/Eletrico';
import Escritorio from '../pages/products/escritorio/Escritorio';
import Higiene from '../pages/products/higiene/Higiene';
import Carrinho from '../pages/cart/Carrinho';
import Cadastro from '../pages/register/cadastro';
import Login from '../pages/login/login';
import Produtos from '../pages/admin/produtos/produtos';
import { IndexContext } from "../context/index";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

const Routes = () => {
const {user, loading} = React.useContext(IndexContext);

   return(
       <BrowserRouter>
        <Switch>
           <Route component = { Home }  path="/" exact />
           <Route component = { Alimentos }  path="/alimentos" />
           <Route component = { Bazar } path='/bazar' />
           <Route component = { Eletrico } path='/eletrico' />
           <Route component = { Escritorio } path='/escritorio' />
           <Route component = { Higiene } path='/higiene' />
           <PrivateRoute component = { Carrinho } path='/carrinho' />
           <Route component = { Cadastro } path ='/register' />
           <Route component = { Login } path='/login' />
           <Route component = { Produtos } path='/produtos' />
        </Switch>
       </BrowserRouter>
   )
}

export default Routes;