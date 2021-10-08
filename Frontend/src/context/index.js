import React, { createContext, useState} from "react";
import api from "../services/api";
export const IndexContext = createContext();

const usuario = {
    nome:null,
    cpf:null,
    senha:null,
    endereco:null
  }


export default function IndexProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [ user, setUser] = useState(usuario);

    const handleLogin = async() =>{
        try{
        const res = await api.post('/login',{cpf:user.cpf,senha:user.senha})
        console.log(res.data);
        setLogado(true)
        } catch(err){
        console.log(err);
        alert("Login inválido")
        }
    }

return (<IndexContext.Provider value={{logado,handleLogin,user,setUser}}>
    {children}
  </IndexContext.Provider>);
}
