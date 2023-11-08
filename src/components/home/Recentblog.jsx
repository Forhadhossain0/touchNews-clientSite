import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AuthContext } from "../authprovider/Authprovider";
import useMyAxios from "../customhooks/useMyAxios/useMyAxios";


const Recentblog = () => {
AOS.init();
const [recentBlog,setRecentBlog] = useState()
const [alreadyHas,setAlreadyHas] = useState([]);
const {user} = useContext(AuthContext);
const email = user?.email;
const axiosSecure = useMyAxios()

useEffect(() => {
  axios.get('http://localhost:5000/blog')
      .then(res => setRecentBlog(res.data))

  axiosSecure.get(`/users?email=${user?.email}`)
      .then(res => setAlreadyHas(res.data))
}, [axiosSecure, user]);

// console.log(alreadyHas)

// add wishlist
const handleAddWishlist = (blogs) => {
    const { _id, shortdescription, longdescription, image, title, category, currentTime } = blogs;

    const existingBlog = alreadyHas?.find((x) => x._id === blogs._id);

    if (existingBlog) {
       Swal.fire({ icon: 'error', title: 'Oops...', text: 'Already added' }); } 
    else {
      axios.post(`http://localhost:5000/users`,{  _id, shortdescription, longdescription, image, title, category, currentTime, email} )
        .then((res) => {
          console.log(res);
          if (res.data && res.data.insertedId) {
            Swal.fire('Added to Wishlist!', '', 'success');
            axiosSecure.get(`/users?email=${user?.email}`)
            .then(res => setAlreadyHas(res.data))
            .catch(error => console.error("erro wishlist data: ", error));
          } else { Swal.fire({ icon: 'error', title: 'Oops...', text: 'Not added' });  }
        })
        .catch(error => {  console.error("Error adding to wishlist: ", error); Swal.fire({ icon: 'error', title: 'Oops...', text: 'Failed to add to wishlist' });  });
    }
};



return (
    <div>        
      <div className=" py-20 w-full "> 
        <h1 data-aos='fade-right' className="text-center  font-bold text-4xl">Recent blogs</h1>
      </div>

   <div data-aos='zoom-out'className="md:grid grid-cols-2 mx-auto gap-10 px-10 justify-center items-center"> 
  {
    recentBlog?.sort((a,b)=> new Date( b.currentTime) - new Date(a.currentTime)).slice(0,6).map(blogs=> 

      <div key={blogs._id} data-aos='fade-left' className="  cursor-pointer text-white relative  h-[420px] w-full  mx-auto my-5 rounded  border ">
      <figure data-aos='fade-left' > <img className="h-[420px] w-full  " src={blogs.image}  alt="Shoes" /> </figure>
      
      <div className="absolute bg-[rgba(0,0,0,0.48)] hover:bg-transparent  transition-all w-full py-10 space-y-3 bottom-0  px-2">
        <h2 data-aos='fade-right' className="font-bold text-white   ">{blogs.currentTime}</h2>
        <h2 data-aos='fade-right' className="font-bold text-rose-500 text-xl md:text-3xl  ">{blogs.title}</h2>
        <p data-aos='fade-left' className="font-semibold">{blogs.shortdescription}</p>
        <h2 data-aos='fade-up' className="text-lg font-semibold ">{blogs.category}</h2>
        <div data-aos='fade-left' className="flex m-0 p-0 justify-between w-full">
          <Link  to={`/details/${blogs._id}`} className="btn btn-primary font-bold text-white hover:scale-100 scale-90  transition-all " >Details</Link>
          <button  onClick={()=> handleAddWishlist(blogs)} className="btn text-white font-bold btn-success hover:scale-100 scale-90  transition-all ">wishlist</button>
        </div>

      </div>
    </div>
)}
  

   </div>

    </div>
  );
};

export default Recentblog;
