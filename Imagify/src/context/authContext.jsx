import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useId } from "react";
import toast from "react-hot-toast";




let Auth = createContext()


let AuthProvider  = ({children}) => {
    let [user,setUser] = useState(() =>{
        return JSON.parse(localStorage.getItem("users")) || []
    })
    let [currentUser,setCurrentUser] = useState({})
    // useEffect(() =>{
    //     setUser(JSON.parse(localStorage.getItem("users")))
    // },[])
    console.log(typeof user)
    
    
    let navigate = useNavigate()

    // console.log(user);
    

    let registerUser = (data) => {

      let existedEmail = user.some((val) => val.email == data.email )


      if(existedEmail){
        navigate("/login")
      }else{
        setUser(prev => [...prev,data])
        navigate("/login")

        
      }


      

            
            console.log("here");
            
            
        }
        useEffect(() =>{
            localStorage.setItem("users",JSON.stringify(user))  

        },[user]) 
        
    let login = (data) =>{

        let currentUser = user.filter((val) => val.email == data.email && val.password == data.password)
        if(currentUser.length){
            navigate("/home")
            toast.success("login successfull")
            localStorage.setItem("currentUser",JSON.stringify(currentUser))
            
        }else{
            toast.error("Invalid credential")
            
        }
        
        
    }
        
        
        // console.log("users:::",user);
    let logout = () =>{
        
    }

    useEffect(() =>{
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
    },[])


    return (
        <Auth.Provider value={{registerUser,logout,login,currentUser}}>
            {children}
        </Auth.Provider>
    )
}


let AuthContext = () =>{
    return useContext(Auth)
}


export {AuthProvider,AuthContext}