
const Footer = () => {
    return (
        <div className=" bottom-0 h-[0]    w-full">
          <footer className="footer bottom-0   p-10 text-black border  shadow ">
        <aside className="">
        <div className=" font-bold uppercase font-sans text-lg md:text-xl text-[#838383] ">Touch <span className='text-[#da301a96]'>News</span></div>
          <p className="font-semibold text-gray-600 pt-2 font-serif">touch news has been growing <br /> up with confidence  and <br /> faithfulness since 2021 </p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">find Jobs</a> 
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
        </div>
    );
};

export default Footer;