import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Swal from "sweetalert2";
import {  useLoaderData } from "react-router-dom";
import axios from "axios";
import useMyAuth from "../../customhooks/useMyAuth/useMyAuth";

const Updateblog = () => {
  
  const {user} = useMyAuth()
  const {photoURL,email,displayName} = user  ;

    const data =  useLoaderData()
    const { _id, image, title, category, shortdescription, longdescription, currentTime } = data;
  
    const handleUpdateProduct = (e) => {
      e.preventDefault();
      const form = e.target;
      const image = form.image.value;
      const title = form.title.value;
      const category = form.category.value;
      const shortdescription = form.shortdescription.value;
      const longdescription = form.longdescription.value; 
      const currentTime = new Date();

      const addUpdateDataValues = { image, title, category, shortdescription, longdescription,  currentTime ,photoURL,email,displayName };
      console.log(addUpdateDataValues);
  
      axios.put(`https://touchnews-backend.vercel.app/blog/${_id}`, {addUpdateDataValues})
        .then((res) => {
            console.log(res?.data)
          if (res?.data?.modifiedCount > 0) {
            Swal.fire({  title: "Success!",  text: "Product updated successfully complete", icon: "success", confirmButtonText: "Cool",
            }); } else {
                Swal.fire({
                  title: 'Error!',
                  text: 'Blog update failed',
                  icon: 'error',
                  confirmButtonText: 'Ok',
                }) }
         });
    };
  



AOS.init();
return (

    <div >
    

           
           <div data-aos="zoom-up" className=" text-center min-h-screen  ">  
           {/* <Link to={'/'} ><h1 className="text-left font-bold hover:text-red-500"> &larr; Back to home</h1></Link> */}
           <h2 data-aos="fade-left" className="text-3xl  font-bold pt-3"> Update Your Blog</h2>
            <p data-aos="fade-right" className="mx-auto md:w-[70%] px-5 text-sm my-3">Lorem ipsum, sit amet consectetur adipisicing elit. Sed molestiae pariatur iusto nobis nisi accusamus fugiat, aliquam eos doloremque aliquid sit. Quo illo corrupti iusto quidem, delectus fugiat adipisci dolore dignissimos dolores cumque doloribus velit. Deserunt rerum eius impedit voluptas.</p>
           
           
           <form  onSubmit={handleUpdateProduct} className=" mt-10 ml-5 " >
             <div className="md:flex justify-center ">

              <div data-aos="fade-right" className="block text-left space-y-5  font-semibold">
                <div>  
                <label htmlFor="">Blog image</label><br /> <input required defaultValue={image} placeholder='Enter a blog ImageURL' type="text" name="image" className=" bg-[#f7f2e43a] border my-2 w-[420px] h-12 p-2" />
                </div>
                <div>
                <label htmlFor="">Title</label><br />       <input required defaultValue={title} placeholder='Enter a blog title' type="text" name="title" className=" my-2  bg-[#f7f2e43a]  border w-[420px] h-12 p-2"  />
                </div>

                <div>
                <label >Category</label><br /> 
                <select name="category" required defaultValue={category} className="my-2 border bg-[#f7f2e43a]  w-[420px] h-12 p-2">
                   <option className="bg-slate-600 text-white" value="">Select Category</option>
                   <option className="bg-slate-600 text-white" value="Nature">Nature</option>
                   <option className="bg-slate-600 text-white" value="Art">Art</option>
                   <option className="bg-slate-600 text-white" value="Wellness">Wellness</option>
                   <option className="bg-slate-600 text-white" value="Food">Food</option>
                   <option className="bg-slate-600 text-white" value="Technology">Technology</option>
                   <option className="bg-slate-600 text-white" value="Sustainability">Sustainability</option>
                   <option className="bg-slate-600 text-white" value="Travel">Travel</option>
                   <option className="bg-slate-600 text-white" value="Fashion">Fashion</option>
                   <option className="bg-slate-600 text-white" value="Finance">Finance</option>
                   <option className="bg-slate-600 text-white" value="Social">Social</option>
                </select>
                </div>

              </div>


              <div data-aos="fade-left" className="md:ml-20 text-left space-y-8 font-semibold">
                 <div>  
                    <label htmlFor="">Short description</label><br /> <input defaultValue={shortdescription} required placeholder='Enter a Short description' type="text" name="shortdescription" className=" bg-[#f7f2e43a]  border my-2 w-[420px] h-12 p-2" />
                </div>
                 <div>  
                    <label htmlFor="">Long description</label><br /> <input defaultValue={longdescription} required placeholder='Enter a Long description' type="text" name="longdescription" className=" bg-[#f7f2e43a]  border my-2 w-[420px] h-12 p-2" />
                </div>
                 
                  <div className='border mt-8 px-5 py-3 flex items-center justify-start  cursor-pointer text-gray-400  '>
                    <h4 className='px-3 font-sans'>blog owner : </h4>
                   <img className='w-8 mx-2 h-8 rounded-full border-2 ' src={user?.photoURL} alt="" />
                    <h3 className=' text-center text-[12px]'>{user?.displayName}</h3>
                   </div>

                  </div>

             </div>
                <div  ><input type="submit" value='Submit' className=" w-[75%] h-12  mt-10 mb-8 text-lg font-mono font-bold text-white bg-[#6b6be7] border  rounded hover:bg-red-400 transition-all" /></div>
            </form>        
           </div>
        </div>
    );
};


export default Updateblog;