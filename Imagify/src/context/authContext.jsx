import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useId } from "react";




let Auth = createContext()


let AuthProvider  = ({children}) => {
    let [user,setUser] = useState(JSON.parse(localStorage.getItem("users")) || [])
    let navigate = useNavigate()

    console.log(user);
    

    let registerUser = (data) => {

        user.map((val) => val.email === data.email ? navigate("/login"):setUser(prev => [...prev,data]))

            
            
            
        }

        useEffect(() =>{
            localStorage.setItem("users",JSON.stringify(user))
        },[user])
        
        
        console.log("users:::",user);
    let logout = () =>{
        
    }


    return (
        <Auth.Provider value={{registerUser,logout}}>
            {children}
        </Auth.Provider>
    )
}


let AuthContext = () =>{
    return useContext(Auth)
}


export {AuthProvider,AuthContext}