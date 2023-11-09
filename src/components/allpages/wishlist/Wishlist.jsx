import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useMyAxios from "../../customhooks/useMyAxios/useMyAxios";
import useMyAuth from "../../customhooks/useMyAuth/useMyAuth";

const Wishlist = () => {
  // const getdata = useLoaderData()
  const [blog,setBlog] = useState()

  const axiosSecure = useMyAxios()
  const {user,loading} = useMyAuth()

  
  
  
  useEffect(()=> {
    axiosSecure.get(`/users?email=${user?.email}`)
    .then(res => setBlog(res.data))
  },[axiosSecure])
  
  if(loading){
    return <div>  <span className="loading mx-auto loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>! please wait content is Loading . . . . </h2>  </div>
    }

  // delete funtions
  const handleDeleteBlog = (id) =>{
    Swal.fire({
        title: 'Are you sure?',  text: "You won't be able to revert this!",  icon: 'warning', showCancelButton: true,
        confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'  })
  .then( result => {
      if (result.isConfirmed) { 
        axios.delete(`https://fotouch-project.web.app/users/${id}`)
       .then(data => {
          console.log(data)
          if(data.data.deletedCount > 0){
            Swal.fire( 'Deleted!', 'Your coffee has been deleted.','success'
            )}
       const remaining = blog.filter(x  => x._id !== id);
       setBlog(remaining)
         })
   }
})
}



  
AOS.init()

return (
<div>

<h1 className="text-2xl font-bold px-10 pt-10 text-lime-400">Your Added Carts</h1>
   
  <div data-aos='zoom-out'className="md:grid grid-cols-4 mx-auto gap-10 py-10 px-10 justify-center items-center">
  
  {
    blog?.map(blogs=> 

      <div key={blogs._id} data-aos='fade-right' className="  text-white relative  h-[350px] w-full  mx-auto my-5 rounded  border ">
      <button onClick={()=> handleDeleteBlog(blogs._id)} className="text-2xl z-10 absolute -top-3 -right-3 bg-black border w-10 h-10 rounded-full  hover:text-red-500 ">X</button>
    
     <div className="relative overflow-hidden">
     <figure data-aos='fade-left' > <img className="h-[350px] w-full" src={blogs.image}  alt="Shoes" /> </figure>
      
   <div className="absolute bg-[rgba(0,0,0,0.40)] hover:bg-transparent transition-all h-[70%] w-full bottom-0  py-5 space-y-3   px-2">
    <h2 data-aos='fade-right' className="font-bold text-rose-500 text-lg">{blogs.title}</h2>
    <p data-aos='fade-left' className="font-semibold overflow-hidden">{blogs.shortdescription}</p>
    <div data-aos='fade-left' className="flex justify-between w-full">
      <h2  className="text-lg font-semibold border px-3 py-2 border-red-500 ">{blogs.category}</h2>
      <Link to={`/details/:${blogs._id}`}> <button  className="btn btn-info hover:bg-slate-400 text-white font-bold  ">More</button> </Link>
    </div>

  </div>
     </div>
    </div>
)}
  

 </div>

</div>
);
};

export default Wishlist;