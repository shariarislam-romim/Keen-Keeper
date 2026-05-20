import { Outlet } from "react-router";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;