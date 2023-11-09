import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from 'axios';


export  const AuthContext = createContext()

const Authprovider = ({children}) => {
const [loading,setloading] = useState(true)
const [user,setUser] = useState(null)

const createUser = (email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}    

const logIn = (email,password)=> {
    setloading(true)
   return signInWithEmailAndPassword(auth,email,password)
}  

const logOut = ()=> {
    setloading(true)
    return signOut(auth)
}


useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setloading(false)
        const isExist = currentUser?.email || user?.email;
        const emailExist = {email: isExist}
        
        // unique token and unique user from backend
        if(currentUser){
            axios.post('https://fotouch-project.web.app/jwt',emailExist,{withCredentials:true})
            .then(res => console.log('token have exist  ' ,res.data))
        }else{
            axios.post('https://fotouch-project.web.app/logout',emailExist,{withCredentials:true})
            .then(res => console.log('token not exist   ' ,res.data))
        }

    })
    return ()=> {unSubscribe()}
},[])
 

const authInfo  = {
    loading,
    user,
    createUser,
    logIn,
    logOut,
}

    
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;