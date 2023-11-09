import {  useNavigate } from "react-router";
import useMyAuth from "../useMyAuth/useMyAuth";
import axios from "axios";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL : 'https://fotouch-project.web.app',
    withCredentials: true 
})


const useMyAxios = () => {
   
    
const {logOut} = useMyAuth()
const navigate = useNavigate();
 
    useEffect(()=>{
        axiosSecure.interceptors.response.use( res => {
            // console.log('error tracked in the interceptor', res)
            return res;

        }, error => {
            // console.log('error find in the interceptor' , error.response)
            if(error.response?.status === 401 || error.response?.status === 403){
                    // console.log('logout this user')
                    logOut()
                    .then(() =>{
                        console.log('user succesfully logout ')
                        navigate( '/' )
                    })
                    .catch((err)=>console.log('user can not logout '+ err))

            }
        }
        )
    },[])

   return axiosSecure;
};

export default useMyAxios;