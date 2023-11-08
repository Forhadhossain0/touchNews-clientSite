import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../authprovider/Authprovider";

const Privetroute = ({children}) => {
    const {loading,user} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    
    if(loading){
        return <div className="mx-auto flex justify-center  text-blue-600 p-20"> !Wait a second data loading. . . .  <span className="loading  text-center p-4 loading-spinner text-info loading-xl "> </span> </div>
    }

    if(user?.email){
        return children;
    }
  
    return  <Navigate state={location?.pathname} replace to={'/login'}></Navigate>




};


export default Privetroute;