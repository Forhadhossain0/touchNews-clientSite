import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import useMyAuth from "../../customhooks/useMyAuth/useMyAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Detailsblog = () => {
const {user} = useMyAuth()
const data = useLoaderData();
// console.log("Data:", data);
const [show,setShow] = useState([])

const [loading,setLoading] = useState(true)


const handleCommentSubmit = (e) => {
  e.preventDefault()
  const comment = e.target.commentBox.value;

  if (comment?.trim() !== '' && user ) {
    axios.post(`http://localhost:5000/comments/${data?._id}`, {comment, user }, data._id )
      .then(res=> {
            if (res.data.insertedId) {  console.log('Comment posted successfully!', res);  
            // loading( <progress className="progress m-5 w-56"></progress>)
            e.target.reset() 
            } else {  console.error('Failed to post comment.');  e.target.reset()   }
          })
    }
    else{ console.log('hovenah'); e.target.reset()  }
};


useEffect(()=>{
  axios.get(`http://localhost:5000/comments`)
  .then(res=>{
    setShow(res.data) 
    setLoading(false);
  })
},[])
console.log(show)



AOS.init()
  return (
    <> 
    <div className="md:flex items-end font-bold mx-auto  overflow-hidden px-2 md:p-10 ">
      <div   className="flex-1  ">
      <p data-aos='fade-right' className="text-left py-3 md:text-3xl">{data.title}</p>
      <p data-aos='fade-up' className="text-sm ml-16 flex justify-end py-1">post at - {data.currentTime}</p>
      <img data-aos='fade-left' className="w-full h-full md:h-[400px]" src={data.image} alt="" />
      </div>
       
       <div data-aos='fade-left' className="flex-1 md:px-5 items-center  ">
       <p data-aos='fade-up' className=" py-3 md:text-lg ">{data.shortdescription}</p>
       <p data-aos='fade-down' className=" leading-5 font-light ">{data.longdescription}</p>

        {
         (data?.email === user?.email) 
          ?  <Link to={`/blogupdate/${data._id}`}><button className="btn  btn-info font backdrop: text-white hover:bg-primary mt-5">update</button></Link> 
           : ' '
        }
          </div>
    </div>
    

<main className="mt-20 mb-10">

{/* commnet section */}


<section data-aos='fade-right'  className=" md:px-10 md:w-1/2  ">
  <p className="py-5 text-gray-400 text-sm mx-5">Tell up whats your opinion aboute this blog</p>
  <p className="mx-5 text-gray-400 font-bold ">Comments</p>

<form onSubmit={handleCommentSubmit} className=" relative h-20 overflow-hidden flex items-center">
<textarea   name="commentBox"  className="  overflow-hidden rounded border py-5 pl-5 pr-32 m-5 outline-none" id="" cols="70" rows="1"> </textarea>
<input className="border pb-10 pt-6 flex text-center  px-5 absolute  right-0 btn-primary rounded-e text-white hover:bg-rose-300 font-bold rounded-none btn " type="submit" value={'Comment'} />
</form>


 </section>

{/* show comment  */}


<div className="md:px-10 w-full md:flex md:justify-between">


{loading ? ( <progress className="progress m-5 w-56"></progress> ) 
 
 :  <div data-aos='fade-right'  className="w-full flex-1">
        {show?.map((comment) => {
            if (comment.blogId === data._id) {
              return (
                <div key={comment._id} className="mx-5 w-[90%] full my-7 py-2 flex border-b-2 items-center">
                  <img className="w-10 h-10 rounded-full" src={comment.user.photoURL} alt="" />
                  <div className="ml-2 mt-1">
                    <p>{comment.user.email}</p>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
}



<div  className="flex-1 md:ml-10 mt-24 space-y-4 md:w-[500px]   ">

    <div  data-aos='fade-left'  className="border md:flex w-full rounded  ">
    <img className=" h-[280px] md:w-[350px] rounded" src="https://bnbd24.net/bangla-admin/public/images/2023-11-08/1699459109386890214_1334369097469239_371270198919723594_n.jpg" alt="" />
    <p className="md:w-[200px] flex-1 p-2 ">বন্দুক হাতে রনংদেহি কারিনা
সিংহাম রিটার্নস’ ছবিতে ছিলেন। এবারও রোহিত শেট্টির ‘সিংহাম এগেইন’-এ তুরুপের তাস বেবো কারিনা কাপুর খান। তিন তিনটে ব্লকবাস্টার সিনেমা উপহার দিয়েছেন রোহিত-কারিনা জুটি। পুলিশি ব্রহ্মাণ্ডের নতুন ছবিতে যে অভিনেত্রী থাকবেন, তা আগেভাগেই জানা গিয়েছিল। এবার কারিনার লুক প্রকাশ্যে আনলেন বলিপাড়ার ‘হিট পরিচালক’ রোহিত</p>
    </div>

  

    <div  data-aos='fade-left'  className="border md:flex w-full rounded ">
    <img className=" h-[280px] md:w-[350px] rounded " src="https://bnbd24.net/bangla-admin/public/images/2023-11-05/1699182055%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%AE%E0%A6%BE%E0%A6%A8.jpg" alt="" />
    <p className="md:w-[200px] flex-1 p-2 ">সপ্তাহের প্রথম দিন থেকেই শুরু হয়ে যাবে ‘টাইগার ৩’র টিকিটের অগ্রিম বুকিং। খবর পেতেই যেন তৈরি ছিলেন অনুরাগীরা। বুকিং শুরু হতেই টিকিট কেনার হিড়িক। বেলা বারোটার মধ্যেই কোটি টাকার টিকিট বিক্রি হয়ে গিয়েছে। একাধিক শো হাউসফুল হওয়ার পথে। ‘পাঠান’,  </p>
    </div>

  

    <div  data-aos='fade-left'  className="border md:flex w-full  rounded ">
    <img className=" h-[280px] md:w-[350px] rounded " src="https://bnbd24.net/bangla-admin/public/images/2023-11-08/1699459564netherlands-vs-england-1699457964.jpg" alt="" />
    <p className="md:w-[200px] flex-1 p-2 ">সেমিফাইনালের দৌড় থেকে বিদায় হয়েছে আগেই। তবে আছে চ্যাম্পিয়ন ট্রফিতে জায়গা করে নেয়ার লড়াই। সে লক্ষ্যে আজ (৮ নভেম্বর) নেদারল্যান্ডসের মুখোমুখি হয়েছিল ইংল্যান্ড। এমন ম্যাচে ডাচদের বিশাল ব্যবধানে হারিয়ে সান্ত্বনার জয় পেয়েছে ইংলিশরা।</p>
    </div>

  

    <div data-aos='fade-left' className="border md:flex w-full rounded ">
    <img className=" h-[280px] md:w-[350px] rounded" src="https://bnbd24.net/bangla-admin/public/images/2023-11-08/1699382140NEws%20pic-02.jpg" alt="" />
    <p className="md:w-[200px] flex-1 p-2 ">সাকিব আল হাসানের জায়গায় বিশ্বকাপে বাংলাদেশ দলে ডাক পেয়েছেন ব্যাটার এনামুল হক বিজয়। সাকিবের ইনজুরির কারণে আগামী ১১ নভেম্বর পুনেতে ওয়ানডে বিশ্বকাপে বাংলাদেশের শেষ ম্যাচে অস্ট্রেলিয়ার বিপক্ষে খেলতে পারবেন না সাকিব।সাকিবের পরিবর্তে বিজয় বাংলাদেশ দলভুক্তির অনুমোদন দিয়েছে আইসিসি ওয়ানডে বিশ্বকাপের টেকনিক্যাল কমিটি। </p>
    </div>

  

    <div data-aos='fade-left' className="border md:flex w-full rounded ">
    <img className=" h-[280px] md:w-[350px] rounded" src="https://bnbd24.net/bangla-admin/public/images/2023-11-09/1699467423received_869361124695823.jpg" alt="" />
    <p className="md:w-[200px] flex-1 p-2 "> ফিলিস্তিনের গাজায় ইসরাইলি বর্বর হামলায় প্রতিনিয়ত বাড়ছে নিহতের সংখ্যা। হামাস ও ইসরাইল যুদ্ধ শুরুর পর গাজায় ১০ হাজারের বেশি মানুষ নিহত হয়েছেন। এরমধ্যে শিশু ও অপ্রাপ্তয়স্কদের সংখ্যা ৪ হাজারের বেশি। চলমান সংঘাতে এত সংখ্যক বেসামরিক মানুষের নিহতের ঘটনায় আবারও ইসরাইলের কঠোর সমালোচনা করেছেন জাতিসংঘের মহাসচিব অ্যান্তোনিও গুতেরেস। </p>
    </div>

  

</div>




</div>



</main>


    </>
  );
};

export default Detailsblog;
