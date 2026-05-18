import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex fixed top-0 mb-8 justify-between w-full  h-[42px] shadow shadow-[0_10px_35px_0px_rgb(0,0,0)]  ">
        <div className="text-white tracking-wider font-extrabold text-3xl"><span className="text-orange-500">IMAG</span>IFY</div>
        <nav className="text-white">
            <Link to="/" className="text-[20px] px-4  rounded-sm mx-2 hover:outline hover:outline-amber-600 active:bg-amber-600 ">Home</Link>
            <Link to="/" className="text-[20px] px-4  rounded-sm mx-2 hover:outline hover:outline-amber-600 active:bg-amber-600 ">UPLOAD</Link>
            <Link to="/" className="text-[20px] px-4  rounded-sm mx-2 hover:outline hover:outline-amber-600 active:bg-amber-600 ">LOGOUT</Link>
        </nav>

        <div className="border rounded-full border-gray-500 p-4 mr-4">
            
        </div>
    </header>
  );
};

export default Header;
