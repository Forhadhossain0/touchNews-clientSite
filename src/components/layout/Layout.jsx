import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../stickyfooter/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet> </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;