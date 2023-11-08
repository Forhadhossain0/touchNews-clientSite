import { motion } from "framer-motion";
import images from "./images";
import './slider.css'
import { useEffect, useState,useRef } from "react";

const Slider = () => {


  const [width,setwidth] = useState(0)
  const carousel = useRef();
  useEffect(()=>{
    setwidth(carousel.current.scrollWidth -  carousel.current.offsetWidth )
  },[])

return <>


<div className="mx-[2%] my-[5%]  App">

<h1 className="mx-auto text-3xl text-center font-bold py-10" >Most Popular Adventure Blogs 📜</h1>

<motion.div ref={carousel}  className="carousel  " dragConstraints={{right:10, left:-width}}  whileTap={{cursor: 'grabbing'}} >

<motion.div drag='x'  className="inner-carousel">
  {
    images.map(image=> {
      return (
        <motion.div className="item    ">
          <img className=" relative"  src={image} alt="" />
          <div className='hover:bg-transparent transition-all bg-[rgba(0,0,0,0.50)] absolute h-[70%] w-[380px] bottom-3 rounded rounded-t-none flex justify-start  ' >
            <div className="flex items-center justify-center  mx-auto">
             <div >
             <h2 className="text-2xl text-center text-teal-400 font-bold">our most popular adventure and sports blog </h2>
             <p className=" text-xl text-center text-white mt-2 font-sans font-bold border-b-2 mx-auto w-36 py-2">  Explore more </p>
             </div>
            </div>
          </div>
        </motion.div>
      )
    })
  }
</motion.div>

</motion.div>


</div>
  

  
  </>;

};

export default Slider;
