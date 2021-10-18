import React, { createContext, useState} from "react";
import api from "../services/api";
export const IndexContext = createContext();




export default function IndexProvider({ children }) {
    const [user, setUser] = useState(null)
    

    React.useEffect ( async() => {
      try{
        console.log("validou")
        const res = await api.get('/user', {withCredentials: true})
        console.log(res.data)
        setUser(res.data)
      }
      catch(err){
        console.log(err)
      }
    },[])


    const handleLogout = async() => {
      try{
        console.log("logout")
        const res = await api.get('/logout', {withCredentials: true})
        console.log(res)
      }
      catch(err){
        console.log(err)
      }
    }


    const handleLogin = async(dados) =>{
        try{
          console.log(dados)
          const res = await api.post('/login',dados)
          console.log(res);
        } 
        catch(err){
          console.log(err);
          alert("Login inválido")
        } 
    }

    const handleCadastro = async(user) => {
      console.log(user);
      if(user.nome.length <= 0 || user.nome.length <=3) {
        alert("Nome inválido!")
      } else if (user.cpf.length <= 0 || user.cpf.length < 3) {
        alert("Email inválido!")
      } else if (user.senha.length <= 0 || user.senha.length < 3) {
        alert("Senha inválida!")
      } else if (user.rua.length <= 0 || user.rua.length <= 4) {
        alert("Rua inválida!")
      } else if (user.bairro.length <= 0 || user.bairro.length <= 4) {
        alert("Bairro inválida!")
      } else if (user.numero.length <= 0 || user.numero.length <= 1) {
        alert("Número inválido!")
      } else {
        try{
          const res = await api.post('/register',user)
          console.log(res);
        } catch(err){
          console.log(err);
        }
      }
    }

return (<IndexContext.Provider value={{handleLogin,handleCadastro,handleLogout,user}}>
    {children}
  </IndexContext.Provider>);
}
