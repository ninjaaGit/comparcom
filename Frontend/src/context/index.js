import React, { createContext, useState} from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
export const IndexContext = createContext();

export default function IndexProvider({ children }) {
    let history = useHistory();

    const [user, setUser] = useState(null)
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [select, setSelect] = useState(0)
    const [carrinho, setCarrinho] = React.useState([]);

    React.useEffect (() => {
      async function getProduto(){
      try{
        const res = await api.get('/product')
        setProduct(res.data)
      } 
      catch(err){
        console.log(err)
      }
      }

      async function getUser(){
        try{
          setLoading(true)
          const res = await api.get('/user', {withCredentials: true})
          setUser(res.data.message)
          setLoading(false)
        }
        catch(err){
          setLoading(false)
          setUser(null)
        }
      }

      async function getCarrinho(){
        try {
          const res = await api.get('/carrinho')
          setCarrinho(res?.data)
        } catch (error) {
          console.log(error)
        }

      }

      getProduto  ()
      getUser()
      getCarrinho()

    },[])


    React.useEffect(() =>{
      function getCarrinho(){
        carrinho?.map((lista) => { 
          if(product.filter(item => item?.id == lista.id_produto) != []){
            return( product.filter(item => item?.id == lista.id_produto)[0].unidades = lista.quantidade )
          }
        })}
      getCarrinho()
    },[carrinho])

    const handleLogout = async() => {
      try{
        await api.get('/logout', {withCredentials: true})
        setUser(null)
      }
      catch(err){
        setUser(null)
      }
    }

    const handleLogin = async(dados) =>{
      try{
        const res = await api.post('/login',dados)
        setUser(res.data.message)
        return(
          window.location.replace("/")
        )
      } catch(err){
        setUser(null)
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
          const res = await api.post('/register',user)
          setUser(res?.data?.message)
          history.push('/')
        } catch(err){
          setUser(null)
        }
    }

    const handleCarrinho = async(e) => {
      // console.log(e)
      try{
        const res  = await api.post('/addcarrinho',e)
        setCarrinho(res?.data)
      } catch(err){
        console.log(err);
      }
    }

return (<IndexContext.Provider value={{handleLogin, handleCadastro, handleLogout, handleProduto, handleCarrinho, setCarrinho, setProduct, setSelect, user, carrinho, product, loading, select}}>
    {children}
  </IndexContext.Provider>);
}
