import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../authprovider/Authprovider";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useMyAxios from "../../customhooks/useMyAxios/useMyAxios";



const Allblog = () => {
  AOS.init();
  const {loading,user} = useContext(AuthContext)
  const email = user?.email;

  if(loading){
    return <div>  <span className="loading loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>! please wait content is Loading . . . . </h2>  </div>
    }
  const getData = useLoaderData();
  const [blog,setBlog] = useState(getData);

  const [alreadyHas,setAlreadyHas] = useState();

  const [search,setSearch] = useState('')
  const [sort,setSort] = useState('asc')
  
  // const axiosSecure = useMyAxios()

  
useEffect(() => {
  // axiosSecure.get(`/users?email=${user?.email}`)
  axios.get(`https://fotouch-project.web.app/users?email=${user?.email}`)
      .then(res => setAlreadyHas(res.data))
}, [user]);


  
  
  // search option 
  const handleBlogSearch = (e)=>{
    setSearch(e.target.value);
  }
  const forSearchBlogs = blog.filter( (x) =>  x.title && x.title.toLowerCase().includes(search.toLowerCase())  )
  
  const handleSort = () => {
    const sortedServices = [...forSearchBlogs];
    if (sort === 'desc') {
      sortedServices.sort((a, b) => (a.category).localeCompare(b.category));
      setSort('asc');
    } else {
      sortedServices.sort((a, b) => (b.category).localeCompare(a.category));
      setSort('desc');
    }
    setBlog(sortedServices);
  };
  


// console.log(alreadyHas)

// add wishlist
const handleAddWishlist = (blogs) => {
  const { _id, shortdescription, longdescription, image, title, category, currentTime } = blogs;

  const existingBlog = alreadyHas?.find((x) => x._id === blogs._id);

  if (existingBlog) {
     Swal.fire({ icon: 'error', title: 'Oops...', text: 'Already added' }); } 
  else if(!user){ Swal.fire({ icon: 'error', title: 'Oops...', text: 'please login' }); }
  else {
    axios.post(`https://fotouch-project.web.app/users`,{  _id, shortdescription, longdescription, image, title, category, currentTime, email} )
      .then((res) => {
        console.log(res);
        if (res.data && res.data.insertedId) {
          Swal.fire('Added to Wishlist!', '', 'success');
          // axiosSecure.get(`/users?email=${user?.email}`)
          axios.get(`https://fotouch-project.web.app/users?email=${user?.email}`)
          .then(res => setAlreadyHas(res.data))
          .catch(error => console.error("erro wishlist data: ", error));
        } else { Swal.fire({ icon: 'error', title: 'Oops...', text: 'Not added' });  }
      })
      .catch(error => {  console.error("Error adding to wishlist: ", error); Swal.fire({ icon: 'error', title: 'Oops...', text: 'Failed to add to wishlist' });  });
  }
};





// console.log(photoURL,email,displayName)



  return (
    <div className="mx-auto">

      {/* Search and filter  section */}
     <div className="flex justify-between items-center px-5 md:px-24 py-10 ">
     <div>
      <label className="text-xl font-semibold font-sans ">Search here to find you blog post </label>
      <input type="text" placeholder=" search here " name="searchinput" onChange={handleBlogSearch} className="   border  w-[300px]  px-5 py-3  rounded-full bg-[#edff4a23] outline-none"  />
     </div>
     <h2 className="capitalize md:block hidden text-center text-xl w-48 font-bold">Blogs: <span className=" text-green-600"> {blog.length}</span></h2>      
    
      <p data-aos='fade-left' onClick={handleSort} className=" text-center md:text-lg w-48 font-bold rounded shadow-inner cursor-pointer hover:text-red-600 border p-3"> 
      Category  {sort === 'asc' ? 'A-Z' : 'Z-A'}  &darr;
      </p>
     </div>



<div className="md:grid grid-cols-2 mx-auto gap-10 px-24 py-10 justify-center items-center">
  
  {
    forSearchBlogs?.map(blogs=>

      <div key={blogs._id}  className="hover:shadow-2xl text-white hover:text-[#858181] relative  h-[450px] w-full  mx-auto my-5 rounded  border ">
      <figure data-aos='fade-left'> <img className="h-[450px] w-full" src={blogs.image || blogs.addDataValues.image}  alt="Shoes" /> </figure>
      
      <div className="absolute bg-[rgba(43,44,44,0.56)] hover:bg-transparent transition-all  w-full space-y-3 bottom-0 py-8 px-2">
        <h2 data-aos='fade-right' className="font-bold text-rose-400 text-3xl">{blogs.title}</h2>
        <p data-aos='fade-left' className="font-semibold text-lg">{blogs.shortdescription}</p>
        <h2 data-aos='fade-down'  className="text-lime-400 text-xl font-semibold ">{blogs.category}</h2>
        {/* <h2 data-aos='fade-down'  className="text-lime-400 text-xl font-semibold "> {blogs?.email}</h2> */}
        <div data-aos='fade-up' className="flex justify-between">
          <Link  className="btn btn-primary font-bold "  to={`/details/${blogs._id}`} > details </Link>
          <button  onClick={()=> handleAddWishlist(blogs)} className="btn text-white font-bold btn-success ">wishlist</button>
        </div>

      </div>
    </div>
)}
  

   </div>

    </div>
  );
};

export default Allblog;
