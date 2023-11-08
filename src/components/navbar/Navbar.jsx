import { useContext } from 'react';
import '../../index.css'
import {NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../authprovider/Authprovider';
import { FaRegUserCircle } from 'react-icons/fa';


const Navbar = () => {

const {logOut,user}= useContext(AuthContext)
const navigate = useNavigate()

const handleLogOut = ()=> {
  logOut()
  .then(res => {
    navigate('/')
    console.log('user loged out',res)
  })
  .catch(err => console.log(err))
} 


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// console.log(user)

const links = <>
          <NavLink to={'/'}>        <li className=" ">  <a className='md:mx-1 md:text-[12px] hover:text-lime-300 hover:bg-transparent'>Home</a></li> </NavLink> 
          <NavLink to={'/allblog'}>   <li className=" "><a className='md:mx-1 md:text-[12px] hover:text-lime-300 hover:bg-transparent'>All Blogs</a></li> </NavLink> 
          <NavLink to={'/fetured'}> <li className=" ">  <a className='md:mx-1 md:text-[12px] hover:text-lime-300 hover:bg-transparent'>Featured Blogs</a></li> </NavLink> 
          <NavLink to={'/addblog'}> <li className=" ">  <a className='md:mx-1 md:text-[12px] hover:text-lime-300 hover:bg-transparent'>Add Blog</a></li> </NavLink> 
          <NavLink to={'/wishlist'}> <li className=" "> <a className='md:mx-1 md:text-[12px] hover:text-lime-300 hover:bg-transparent'>Wishlist</a></li> </NavLink> 
</>

const links2 = <>
    
{
  user && user ? <>
                   <h2 className='font-bold mt-4 capitalize hover:text-blue-500 hover:shadow text-rose-400 mx-2 my-auto'>{user.displayName}</h2>
                  <figure  className='mx-2 mt-2 hover:shadow hover:shadow-red-500 rounded-full'><img src={user?.photoURL} className='rounded-full w-8 h-8 my-auto  ' /> </figure>
                  <button onClick={handleLogOut} ><li className="list-none md:bg-[#ebebe6] font-bold py-1 font-serif rounded border-none md:text-black  md:mx-2 capitalize"><a>LogOut</a></li> </button>    
                   </>      
               :  <NavLink to={'/login'}><li className="list-none md:bg-[#ebebe6] font-serif font-bold py-1 rounded border-none md:mx-2  md:text-black capitalize"><a>login</a></li> </NavLink>

}

</>


    return (
<div>
<div className="drawer h-20 z-10  cursor-pointer">

  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex items-center flex-col">

    <div className="w-full justify-between navbar px-3 md:px-10">

      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
     
      <div className="justify-start items-center">
        <div className="px-2  font-bold  font-sans text-xl md:text-2xl ">Touch News</div>
        <ul className="menu hidden mt-2 lg:flex menu-horizontal font-serif  md:ml-20  uppercase ">
            { links }
        </ul>
      </div>

      {/* mood buttron */}
      <button className="cursor-pointer my-auto hover:text-lime-400 ">
         <label className="swap mt-2 swap-rotate">
          <input onClick={myFunction} type="checkbox" />
          <svg className="swap-off fill-current  w-8 h-8  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          <svg className="swap-on fill-current  w-7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
         </label>
        </button>

      <div className="hidden lg:flex">
          <ul className="menu menu-horizontal ">
            {links2}
          </ul>
      </div>
    </div>
  </div> 

        {/* Sidebar content here */}
  <div className="drawer-side z-20">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full text-white font-serif space-y-5 text-lg uppercase bg-[#000000]">
            { links  }
            { links2 }
    </ul>
  </div>

</div>
</div>
    );
};

export default Navbar;