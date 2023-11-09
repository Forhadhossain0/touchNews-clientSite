import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



const Singup = () => {

const {createUser} = useContext(AuthContext);
const naviget = useNavigate();
const location = useLocation()




    const handleCreateUser = (e)=>{
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value; 
        const photoURL = e.target.photo.value; 
        // const user = {displayName,email,password}
        // console.log(user)

        if(password.length < 6){
            toast('your password have to 6 charecters or longer!!')
            return;
          }
          else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
            toast('Password must have at least one uppercase, lowercase, special character.');
            return; 
          }          
       

        createUser(email,password)
        .then((result)=> {
          updateProfile(result.user,{
            displayName: displayName,
            photoURL: photoURL
          })

          const createdTime = result?.user?.metadata?.lastSignInTime;
          const user = {email,displayName,photoURL,createdTime};
          axios.post('https://touchnews-backend.vercel.app/users', user )
          .then((res)=> {
              console.log(res)
              toast("Account Created Success. Please Wait..")
              setTimeout(()=> {naviget(location?.state ? location.state : '/')},3000)
            })
        })

        .catch((err)=>{
            console.log(err.message) ; toast(err.message);
          })
    
    }


    

    return (
   
        <div>
            <ToastContainer className='md:left-[40rem] w-full'></ToastContainer>
            <section className="my-3 mx-auto  w-full md:w-[800px] h-auto">
               <div className="p-10 h-full">
                 <div className="headercontent pb-10 text-center  "><h1 className="md:text-4xl font-bold">Sing Up</h1></div>
              
               <form onSubmit={handleCreateUser} className="space-y-7" >
                  
                  <div className="flex gap-5">
                  <div className="flex-1">
                    <label className=" font-serif" >Name * </label>
                    <input type="text" name="name"  required  className="border-2 w-full text-black py-3 hover:outline-none outline-none px-2 mt-1" />
                   </div>

                   <div className="flex-1">
                    <label className="font-serif" >Email *</label>
                    <input type="email" name="email"  required       className="border-2 text-black w-full py-3 hover:outline-none outline-none px-2 mt-1" />
                   </div>
                  </div>

                    <div className="flex gap-5">
                    <div className="flex-1">
                    <label className=" font-serif" >Password *</label>
                    <input type="text" name="password" required className="border-2 w-full text-black py-3 hover:outline-none outline-none px-2 mt-1" />
                 </div>

                  <div className="flex-1">
                    <label className=" font-serif" >Photo URL *</label>
                    <input type="text" name="photo" required className="border-2 w-full text-black py-3 hover:outline-none outline-none px-2 mt-1" />
                 </div>
                    </div>

                    <button className="w-full border border-white  bg-black font-sans  hover:bg-slate-500 transition-all uppercase text-white font-bold py-4">Singup</button>
               
                </form>
                    
                    <Link to={'/login'}><button className="w-full text-white border-white border hover:bg-[#363434] transition-all .3s hover:text-white bg-[#6b4141]  font-bold py-5 mt-10 capitalize text-[12px]">already have an account ? login here</button></Link>
               </div>
            </section>
        </div>
  
    );
};

export default Singup;