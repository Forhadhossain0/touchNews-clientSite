
import { NavLink } from "react-router-dom";
const Errorpage = () => {
    return (
        <div className="bg-white">
            <h1 className="text-5xl font-sans font-bold text-rose-500 mx-auto text-center pt-20">!Opps 😥</h1>
            <h1 className="text-3xl font-sans font-bold text-rose-500 mx-auto text-center pt-8">404 error statment this page has been not found.!</h1>
            <NavLink to={'/'}><button className="font-bold btn shadow-lg bg-slate-300  mx-auto text-center flex justify-center mt-10">Go Home</button></NavLink>
        </div>
    );
};

export default Errorpage;