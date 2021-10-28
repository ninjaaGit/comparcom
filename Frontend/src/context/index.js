import React, { createContext, useState} from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
export const IndexContext = createContext();

export default function IndexProvider({ children }) {
    const [user, setUser] = useState(null)
    const [produtos, setProdutos] = useState(null)
    const [product, setProduct] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(true)
    const [select, setSelect] = useState(0)
    const [carrinho, setCarrinho] = useState(null)

    let history = useHistory();

    React.useEffect ( async() => {
      try{
        const res = await api.get('/product')
        setProduct(res.data)
      } 
      catch(err){
        console.log(err)
      }
    },[])

    React.useEffect ( async() => {
      try{
        setLoading(true)
        const res = await api.get('/user', {withCredentials: true})
        console.log(res.data)
        setUser(res.data)
        setLoading(false)
      }
      catch(err){
        console.log(err)
        setLoading(false)
      }
    },[])

    const handleLogout = async() => {
      try{
        await api.get('/logout', {withCredentials: true})
        setUser(null)
      }
      catch(err){
        console.log(err)
      }
    }

    const handleLogin = async(dados) =>{
      try{
        await api.post('/login',dados)
        return(
          window.location.replace("/")
        )
      } catch(err){
        console.log(err);
      }
  }

  const handleSearchUser = async (event) => {
    event.preventDefault();
      if(!user){
          return(
            window.location.replace("/login")
          )
      }
      else{
          return(
            window.location.replace("/login")
          )
      }
  }

    const handleProduto = async(produtos) => {
        try{
          await api.post('/criarprod',produtos)
          alert("foi")
        } catch(err){
          console.log(err);
        }
      }

    const handleCadastro = async(user) => {
        try{
          await api.post('/register',user)
          return(
            window.location.replace("/login")
          )
        } catch(err){
          console.log(err);
        }
    }

    const handleCarrinho = async(product) => {
      try{
        await api.post('/addcarrinho',product)
        console.log(product)
      } catch(err){
        console.log(err);
      }
  }

return (<IndexContext.Provider value={{handleLogin, handleCadastro, handleLogout, handleProduto, handleCarrinho, handleSearchUser, setCarrinho, setProduct, setSelect, user, carrinho, produtos, product, redirect, loading, select}}>
    {children}
  </IndexContext.Provider>);
}
