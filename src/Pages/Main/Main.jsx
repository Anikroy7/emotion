import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer";


const Main = () => {
    return (
        <div className="px-10">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;