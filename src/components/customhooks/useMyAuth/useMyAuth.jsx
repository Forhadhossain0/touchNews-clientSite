import { useContext } from "react";
import { AuthContext } from "../../authprovider/Authprovider";

const useMyAuth = () => {
 
    const myAuth = useContext(AuthContext);
    return myAuth;
    
};

export default useMyAuth;