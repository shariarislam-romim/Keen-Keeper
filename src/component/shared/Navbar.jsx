import { AiOutlineLineChart } from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import Logo from "../../assets/logo.png"
import  "../../App";

const Navbar = () => {

    const links = (
        <>
         <li>
            <NavLink to={"/"} 
            className={ ({isActive})=> 
                `font-semibold mr-1 ${isActive ? "text-white bg-[#244D3F]" : ""}`}><RiHome2Line />Home</NavLink>
         </li>
         <li>
            <NavLink to={"/timeline"} className={ ({isActive})=> 
                `font-semibold mr-1 ${isActive ? "text-white bg-[#244D3F]" : ""}`}><LuClock3 />Timeline</NavLink>
         </li>
         <li>
            <NavLink to={"/stats"} className={ ({isActive})=> 
                `font-semibold mr-1 ${isActive ? "text-white bg-[#244D3F]" : ""}`}><AiOutlineLineChart />Stats</NavLink>
         </li>
        </>
    )

    return (
        
        <div className="bg-base-100 shadow-sm ">
            <div className="navbar container mx-auto gray">
  <div className="flex-1">
    <img className="h-" src={Logo}/>
  </div>
  <div className="flex-none">
    <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">
      {links}
      
    </ul>
    </div>
    <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  </div>
</div>
    </div>
    );
};

export default Navbar;