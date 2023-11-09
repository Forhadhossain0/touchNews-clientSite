import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";
import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const Login = () => {


    const {logIn} = useContext(AuthContext);
    const naviget = useNavigate();
    const location = useLocation()
    
        const handleLogIn = (e)=>{
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            // console.log(email,password)

            logIn(email,password)
            .then((result)=> { 
              axios.patch('https://fotouch-project.web.app/users',{ email,  loginTime: result.user?.metadata?.lastSignInTime }  )                  
              .then(res=>{ 
                // console.log(res.user) 
               naviget(location?.state ? location.state : '/')
              })
            })

            .catch((err)=>{
                console.log(err.message)
                toast(err.message)
            })
        
        }


        const gprovider = new GoogleAuthProvider();
        const handleGoogleLogIn = () =>{
            signInWithPopup(auth,gprovider)
            .then(res=> {
                naviget(location?.state ? location.state : '/')
                console.log(res.user)
            })
            .catch(err=> console.log(err))
        }


    

    return (
        <div >
            <ToastContainer className='md:left-[40rem]'></ToastContainer>

            <section className="mx-auto my-5 w-full md:w-[500px] h-auto ">

               <div className="py-5 px-16 bg-white text-black border rounded ">
                  <div className="headercontent pb-4 text-center  "><h1 className="md:text-3xl font-bold">Login</h1></div>
              
               <form onSubmit={handleLogIn} className="space-y-5" >
                   <div>
                    <label className="  font-serif" >User Email *</label>
                    <input type="email" name="email"  required className="border-2 text-black w-full py-2 hover:outline-none outline-none px-2 " />
                   </div>
                  <div>
                    <label className="  font-serif" >Password *</label>
                    <input type="text" name="password" required className="border-2 text-black w-full py-2 hover:outline-none outline-none px-3 " />
                 </div>
                    <button className="w-full border border-white bg-black font-sans  hover:bg-slate-500 transition-all uppercase text-white font-bold py-4">Login</button>
                </form>
                    
                    <button onClick={handleGoogleLogIn} className="w-full hover:bg-black boder transition-all .3s hover:text-white text-yellow-500 border-2 font-bold py-3 mt-10 capitalizetext-lg">Continiue with Google</button>
                    <Link to={'/singup'}><button className="w-full  text-white border border-white hover:bg-[#363434] transition-all .3s hover:text-white bg-[#6b4141]   font-bold py-5 mt-10 capitalize text-[12px]">do not have any account ? please Sing-Up</button></Link>
               </div>
            </section>
        </div>
    );
};

export default Login;