import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from '../pages/home/Home';
import Alimentos from '../pages/products/Alimentos';
import Carrinho from '../pages/cart/Carrinho';
import Cadastro from '../pages/register/cadastro'
import Login from '../pages/login/login'

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Alimentos }  path="/alimentos" />
           <Route component = { Carrinho } path='/carrinho' />
           <Route component = { Cadastro } path ='/register' />
           <Route component = { Login } path='/login' />
       </BrowserRouter>
   )
}

export default Routes;