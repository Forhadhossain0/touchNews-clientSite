import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Recentblog from './Recentblog';
import { useState } from 'react';
import Slider from './slider/Slider';

const Home = () => {
  AOS.init();
  const [email, setEmail] = useState('');


  // newwslettr handler
  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('!Thank you for subscribing to our newsletter.');
      setEmail(''); 
    } else {
      toast.error('!!Please provide a valid email');
    }
  };



return (



  <div>
                <ToastContainer className='md:left-[28rem]'></ToastContainer>

    <div className="hero overflow-hidden  md:h-[85vh] md:px-10 ">
        {/* <img className="w-full h-[90vh]" src="https://i.ibb.co/4TjvGry/5.jpg" alt="" /> */}
      <div className="w-full  md:h-[80vh] " >
        <div className="hero-content md:h-[80vh] mx-auto block md:flex md:justify-center items-center  " > 

          <div  data-aos="fade-down" className=" md:flex-1 ">
            <h1 className=" md:text-6xl font-bold ">Hello there</h1>
            <h1 className="md:text-3xl pt-1 font-bold">Get your needs from the blogs and explore to injoy </h1>
            <p className="py-6 w-[90%]  font-semibold  ">
            Your Gateway to Timely Insights and Current Affairs. Delve into a World of Stories, Stay Informed, and Engage with the Latest Happenings Across the Globe. Explore a Tapestry of News, Opinion, and Analysis at Your Fingertips. Let TouchNews be Your Beacon in the Ever-Evolving Landscape of Information.
            </p>
            <button className="btn  hover:bg-[#4de2c2] bg-slate-700 text-white border-none">Get Started</button>
          </div>

          <div data-aos="fade-left" className="md:flex-1 w-full p-10 grid grid-cols-2 gap-5   md:h-[80vh]">
            <img className="w-[350px] h-[200px] border-[7px] shadow-lg -rotate-6 " src="https://i.ibb.co/4TjvGry/5.jpg" alt="" />
            <img className="w-[350px] h-[200px] border-[7px] shadow-lg -rotate-3 " src="https://inkforall.com/wp-content/uploads/2022/12/6ca2b16d-2d9e-f7ae-97ec-89ad71b90197.jpg" alt="" />
            <img className="w-[350px] h-[200px] border-[7px] shadow-lg  " src="https://cloudfront-us-east-1.images.arcpublishing.com/opb/VBZQSUD7J35S5U2LMECBE5POBA.jpg" alt="" />
            <img className="w-[350px] h-[200px] border-[7px] shadow-lg rotate-12" src="https://i.ibb.co/4TjvGry/5.jpg" alt=" " />
          </div>


          </div>
        </div>
      </div>


{/* recent blog section */}
<Recentblog></Recentblog>


{/* newslatter section  */}
<section className='mx-auto p-20 '>

    <div data-aos="fade-right" className='md:w-1/2 h-[50%] mx-auto'>
      <img className='w-[60%] h-[20%] mx-auto' src="https://img.freepik.com/free-vector/subscriber-concept-illustration_114360-7323.jpg?w=740&t=st=1699166378~exp=1699166978~hmac=1820cfb7dda137ad9afff6a30bd50bd9373814d0f93bc82169cfddcfc89ccc23" alt="" />
    </div>
    
   <div  className='lg:w-[70%] mx-auto text-center p-10'>
      <h1 data-aos="fade-left" className='font-bold uppercase text-xl md:text-4xl'>Subscribe to our Website touchNews</h1>
      <p data-aos="fade-up" className='lg:w-[50%] w-full mx-auto mt-2 mb-6'>Want to get special offers before they run out? Subscribe to our email to get exclusive offers</p>
      <form  className='md:w-[400px] mx-auto relative' onSubmit={handleSubscription}>
        <input data-aos="fade-right" className='lg:w-[400px] w-full py-3 px-5 outline-none rounded-full bg-[#f7bc4842]' type="email" value={email} onChange={(x) => setEmail(x.target.value)} placeholder="Enter your email address" />
        <button data-aos="fade-left" className='absolute right-0 text-white font-bold bottom-0 bg-[rgb(248,199,1)] px-5 py-3 rounded-full' type="submit">Subscribe</button>
      </form>
    </div>

</section>




<Slider></Slider>





{/* extra 2 section is here  */}
<section className='mt-20 p-10'>

<h1 className='uppercase text-3xl font-bold mx-auto text-center pb-20'>2023 world news Bangla</h1>

 <div data-aos='fade-left' className='flex p-3 '>
    <div className='space-y-3 pr-8'>
    <h2 className='text-xl font-bold'>গাজা শহর ঘিরে এর প্রাণকেন্দ্রে পৌঁছানোর কথা জানিয়েছে ইসরায়েল।</h2>
    <p className='overflow-hidden h-[230px] leading-8'>ইসরায়েলে হামাসের হামলার এক মাস পূর্তির দিনে ইসরায়েলের প্রতিরক্ষামন্ত্রী ইয়োভ গ্যালান্ত বলেছেন তাদের সৈন্যরা এখন ‘গাজা শহরের প্রাণকেন্দ্রে’। গত সাতই অক্টোবর হামাস ওই হামলা চালিয়েছিলো।  মি. গ্যালান্ত বলেছেন হামাসের বিরুদ্ধে তাদের সৈন্যরা ‘আক্রমণ করছে স্থল, বিমান ও নৌ বাহিনীর সমন্বয়ে’।  অন্যদিকে দেশটির প্রধানমন্ত্রী বেনইয়ামিন নেতানিয়াহু বলেছেন, তাদের সৈন্যরা ‘গাজা শহর ঘিরে রেখেছে এবং ভেতরে অভিযান’ চালানো হচ্ছে। মি. নেতানিয়াহু গাজার মানুষকে আগেই দক্ষিণের দিকে চলে যাওয়ার অনুরোধ করে বলেছিলেন , ‘প্লিজ গো সাউথ’ অর্থাৎ ‘দয়া করে দক্ষিণে সরে যান’।  সোমবার মি. নেতানিয়াহু বলেছিলেন, যুদ্ধের পর ‘গাজার সার্বিক নিরাপত্তার দায়িত্ব’ ইসরায়েল গ্রহণ করবে। পরে তার মন্ত্রিসভার কয়েকজন সদস্য এই বক্তব্যের ব্যাখ্যা দিয়েছেন। স্ট্রাটেজিক অ্যাফেয়ার্স বিষয়ক মন্ত্রী মি. নেতানিয়াহুর বক্তব্য ব্যাখ্যা করে বলেছেন যে, ইসরায়েল ওই অঞ্চল আবার দখল বা শাসন করবে না। বেসামরিক এলাকা হিসেবে গাজার যেভাবে থাকার কথা সেটিই নিশ্চিত করবে ইসরায়েল। সামরিক বাহিনী শুধু নতুন কোন সন্ত্রাসের হুমকি পেলে তার বিরুদ্ধে অভিযান চালাবে। এদিকে যুক্তরাষ্ট্রের স্টেট ডিপার্টমেন্ট জানিয়েছে মিশরের রাফাহ ক্রসিং দিয়ে চারশর মতো মার্কিন নাগরিক গাজা থেকে সরে এসেছে। ওদিকে গাজার দক্ষিণাঞ্চলীয় শহর খান ইউনিস, রাফাহ ও দেইর আল বালাহ শহরে বিমান হামলায় কয়েক ডজন মানুষের মৃত্যু হয়েছে। গাজার হামাস পরিচালিত স্বাস্থ্য মন্ত্রণালয় জানিয়েছে ইসরায়েলের হামলায় এ পর্যন্ত দশ হাজার তিনশ মানুষের মৃত্যু হয়েছে। এর মধ্যে ৪১০০শিশু। অন্যদিকে হামাসের হামলায় ইসরায়েলের ১৪শ মানুষের মৃত্যু হয়েছিলো এবং জিম্মি করে নেয়া হয়েছিলো আরও দুশো। বিশ্ব স্বাস্থ্য সংস্থা জানিয়েছে মৃত্যু ও দুর্ভোগের মাত্রা দেখে ইসরায়েল-গাজা সংকটের বিষয়টা উপলব্ধি করাও কঠিন।  </p>
    <p className='text-teal-500 text-sm font-bold underline'>৭ নভেম্বর ২০২৩</p>
    </div> 
    <img className='w-[400px] h-[300px]' src="https://ichef.bbci.co.uk/news/800/cpsprodpb/b9a4/live/7ff52270-7e02-11ee-8139-61b1db4c8e2f.jpg" alt="" />
  </div>

 <div data-aos='fade-left' className='flex p-3 '>
    <div className='space-y-3 pr-8'>
    <h2 className='text-xl font-bold'>টিসিবির তথ্য অনুযায়ী, গত এক বছরে প্রায় সব ধরনের মাছ মাংসের দাম বেড়েছে</h2>
    <p className='overflow-hidden h-[230px] leading-8'>
    দেশি মুরগির দাম এক বছরে কেজি প্রতি ২৮.২৬ শতাংশ বেড়েছে। আগে কেজি প্রতি দাম ৪২০-৫০০ টাকা ছিল। এখন এই দাম ৫৩০-৬৫০।

প্রাণী সম্পদ অধিদপ্তরের তথ্য অনুযায়ী, দেশে গত ১০টি অর্থবছরে সব ধরনের মাংসের উৎপাদন বেড়েছে। বর্তমানে দেশে ৮৭ লাখ টন মাংস উৎপাদিত হয়। আর মাংসের চাহিদা রয়েছে বার্ষিক ৭৬ লাখ টন।

ড. মোহাম্মদ হেলাল উদ্দিন বলেন, উৎপাদন বেশি হলেও কেউ যদি তা বিক্রি করতে না চায়, বরং পরে ভাল দাম পাওয়ার আশায় ধরে রাখে তাহলে বেশি চাহিদার কারণে সেই পণ্যের দাম বেড়ে যায়।
    </p>
    <p className='text-sm text-teal-500 font-bold underline'>প্রতি বছরেই বাড়ছে মাংসের দাম</p>
    </div> 
    <img className='w-[400px] h-[300px]' src="https://ichef.bbci.co.uk/news/798/cpsprodpb/03c3/live/2c7ea410-7d65-11ee-b556-9787f91d41cc.jpg" alt="" />
  </div> 



 <div data-aos='fade-left' className='flex p-3 '>
    <div className='space-y-3 pr-8'>
    <h2 className='text-xl font-bold'>মালদ্বীপ প্রেসিডেন্ট নির্বাচনে এক প্রার্থী চীনপন্থী, অন্য প্রার্থী ভারতপন্থী</h2>
    <p className='overflow-hidden h-[230px] leading-8'>
    ভারত মহাসাগরের বুকে মালদ্বীপ তার অনিন্দ্যসুন্দর সৈকত, কোরাল রিফ আর সামুদ্রিক প্রাণিবৈচিত্র্যের জন্যই পরিচিত। এমন একটা জায়গাতেও যে ভূরাজনীতির প্রতিদ্বন্দ্বিতা ছায়া ফেলতে পারে তা চট করে কারও মাথাতেই আসবে না।

১২০০ প্রবাল দ্বীপ আর অ্যাটল নিয়ে গঠিত এই দ্বীপরাষ্ট্রেই আগামী শনিবার (৩০ সেপ্টম্বর) প্রেসিডেন্ট ইব্রাহিম মোহামেদ সোলিহ্ আর বিরোধী শিবিরের প্রার্থী মোহামেদ মুইজ্জু-র মধ্যে সরাসরি রান-অফ নির্বাচনী লড়াই অনুষ্ঠিত হবে। কিন্তু সেই ভোটের ব্যালটে ভারত ও চীনেরও উপস্থিতি থাকছে।

প্রাচ্য ও পাশ্চাত্যের মধ্যে দিয়ে যে জাহাজ চলাচলের রুট বা শিপিং লাইনগুলো আছে, তার মাঝামাঝি খুব স্ট্র্যাটেজিক অবস্থানে থাকা মালদ্বীপে নিজেদের উপস্থিতি বাড়াতে ভারত ও চীন প্রবল চেষ্টা চালাচ্ছে।

মালদ্বীপে প্রেসিডেন্ট পদের দুই দাবিদারই এখন প্লেনে আর স্পিডবোটে চেপে তাদের দ্বীপগুলো চষে বেড়াচ্ছেন ও ভোটের প্রচার চালাচ্ছেন।
    </p>
    <p className='text-teal-500 font-bold text-sm underline '>৯ই সেপ্টেম্বর</p>
    </div> 
    <img className='w-[400px] h-[300px]' src="https://ichef.bbci.co.uk/news/800/cpsprodpb/370f/live/1b954230-5d44-11ee-93e8-5d16174eb488.jpg" alt="" />
  </div> 



 <div data-aos='fade-left' className="flex justify-between mt-10">


 <div  data-aos='zoom-in' className=' p-10 flex-1 text-justify'>
    <img className='w-[100%] py-5 my-5 h-[300px]' src="https://ichef.bbci.co.uk/news/800/cpsprodpb/dfe0/live/a550ec90-7d6f-11ee-a503-4588075e3427.jpg" alt="" />
    <div className='space-y-3 '>
    <h2 data-aos='fade-left' className='text-xl font-bold'>নিত্যপ্রয়োজনীয় পণ্য নিশ্চিত করতে সরকারিভাবে টিসিবির মাধ্যমে খোলাবাজারে পণ্য বিক্রি করা হচ্ছে</h2>
    <p data-aos='fade-right' className='overflow-hidden h-[230px] leading-8'> বাংলাদেশে গত এক বছরে চাল ও আটার মতো পণ্যের দাম না বাড়লেও শুধু অক্টোবরেই খাদ্য মূল্যস্ফীতি বেড়ে সর্বোচ্চ হয়েছে। কৃষি ও বাজার বিশ্লেষকরা বলছেন, দাম বাড়ার কারণ হিসেবে বেশিরভাগ সময় সিন্ডিকেটের দিকে আঙুল তোলা হলেও এর পেছনে আরও বেশ কিছু কারণ রয়েছে। কারণ অনেক সময় উৎপাদন বেশি হলেও বাজারে ঠিকমতো সরবরাহ হয় না। আবার উৎপাদন ও আমদানি খরচ বেড়ে যাওয়ার প্রভাবও পড়েছে অনেক পণ্যের দামে। সরকারি যেসব তথ্য দেয়া হয়, সেখানেও প্রকৃত অবস্থার সাথে তারতম্য থাকে। যদিও বিশ্লেষকদের অনেকে বাজারে দ্রব্যমূল্য বৃদ্ধির পেছনে শুধু সিন্ডিকেটকে দায়ী করতে চান না, তবে এ নিয়ে বাংলাদেশে নিত্যপ্রয়োজনীয় দ্রব্যের দাম বৃদ্ধির পেছনে সিন্ডিকেট বা ব্যবসায়ীদের কারসাজিকে বিভিন্ন সময় দায়ী করা হয়েছে ভোক্তা অধিকার সংগঠন ও সরকারের কর্মকর্তাদের পক্ষ থেকে। গত ২৬শে জুন সংসদ অধিবেশন চলাকালে বাণিজ্যমন্ত্রী টিপু মুনশি দ্রব্যমূল্যের ঊর্ধ্বগতি ও সিন্ডিকেট নিয়ন্ত্রণে ব্যর্থতার অভিযোগে জাতীয় সংসদে বিরোধী দলের নেতাদের কঠোর সমালোচনা ও ক্ষোভের মুখে পড়েছিলেন।
    </p>
    <p className='text-teal-500 font-bold text-sm underline '>৩ ঘণ্টা আগে</p>
    </div> 
  </div> 


 <div data-aos='zoom-in' className=' p-10  flex-1 mx-auto '>
    <img className='w-[100%] py-5  my-5 h-[300px]' src="https://ichef.bbci.co.uk/news/800/cpsprodpb/238f/live/64279a70-7d65-11ee-b556-9787f91d41cc.jpg" alt="" />
    <div className='space-y-3 '>
    <h2  data-aos='fade-left' className='text-xl font-bold'>ব্রয়লার মুরগি ও ডিম-দুটোরই দাম বেড়েছে</h2>
    <p data-aos='fade-left' className='overflow-hidden text-justify h-[230px] leading-8'>  টিসিবির তথ্য অনুযায়ী, গত এক বছরে প্রতি হালি ডিমের দাম শতকরা ৫.২৬ শতাংশ বেড়েছে। গত বছর এক হালি ডিমের দাম ছিল সর্বোচ্চ ৫০ টাকা। বর্তমানে এটি ৫২ টাকা দরে বিক্রি হচ্ছে। তবে স্থানীয় সংবাদ মাধ্যমগুলোতে চলতি বছর ডিম প্রতি ডজন ১৬০থেকে ১৬৫ টাকায়ও বিক্রি হওয়ার খবর পাওয়া গেছে প্রাণী সম্পদ অধিদপ্তরের তথ্য অনুযায়ী, ২০২২-২৩ অর্থবছরে দেশে ডিমের চাহিদা এক হাজার ৮০৬ কোটি পিস। উৎপাদন হয়েছে দুই হাজার ৩৩৮কোটি পিস। সংস্থাটির তথ্য অনুযায়ী, ডিম ও মাংসের উৎপাদন গত অর্থবছরে চাহিদার তুলনায় বেশি উৎপাদিত হয়েছে। অর্থনীতিবিদরা বলছেন, ডিম একটা পচনশীল দ্রব্য। সেটা ধরে রাখা যায় না। তাই উৎপাদন হলেও সেটা কতদিনের জন্য হয়েছে সেটা জরুরি। ডিমের দাম কমাতে এরই মধ্যে ডিম আমদানির অনুমোদন দিয়েছে সরকার। ভারত থেকে বাংলাদেশে ডিম আসতেও শুরু করেছে।
    </p>
    <p className='text-teal-500 font-bold text-sm underline '>৩০ সেপ্টম্বর</p>
    </div> 
  </div>
  
 </div>






</section>





</div>
  );
};

export default Home;
